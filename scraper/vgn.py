#/usr/bin/env python

"""
Scrape train connections from VGN website at
http://www.vgn.de/komfortauskunft/auskunft/
"""

import sys
import simplejson as json
import datetime
from urllib2 import HTTPError

import mechanize
assert mechanize.__version__ >= (0, 0, 6, "a")

from BeautifulSoup import BeautifulSoup

travel_info_url = "http://www.vgn.de/komfortauskunft/auskunft/"
cities = ["Bayreuth", "Pegnitz", "Kirchenlaibach"]
connections = [(orig, dest) for orig in cities for dest in cities if orig != dest]
all_trips = [] # All trips will be collected in a list

mech = mechanize.Browser()
#mech.set_debug_http(True)
for origin, destination in connections:
  # Get the starting search page
  try:
      mech.open(travel_info_url)
  except HTTPError, e:
      sys.exit("%d: %s" % (e.code, e.msg))

  # Select the form, fill the fields, and submit
  mech.select_form(nr=2)
  mech["name_origin"] = origin
  mech["name_destination"] = destination

  try:
      mech.submit()
  except HTTPError, e:
      sys.exit("post failed: %d: %s" % (e.code, e.msg))

  # Grab html
  html = mech.response().read()
  soup = BeautifulSoup(html)

  # Read all trips for route
  year = datetime.date.today().year
  trip_details = soup.findAll("tbody", id=lambda x: x and x.startswith("TripDetail"))
  city_trip_list = []
  for trip_detail in trip_details:
    # Read and sanitize trip info.
    # This looks pretty hacky
    # but then again, so does the website code itself
    trip_info = trip_detail.findAll("b")
    date = trip_info[0].text
    # Remove "Uhr" from departure time
    departure = trip_info[1].text.split()[0]
    duration = trip_info[2].text
    # Convert times to standard format
    departure = "%s%s %s" % (date, year, departure)
    std_departure = datetime.datetime.strptime(departure, '%d.%m.%Y %H:%M')
    duration = datetime.datetime.strptime(duration, '%H:%M')
    delta = datetime.timedelta(hours=duration.hour, minutes=duration.minute)
    std_arrival = std_departure + delta
    trip_current = {
      "departure": std_departure.isoformat(),
      "arrival": std_arrival.isoformat()
    }
    city_trip_list.append(trip_current)

  city_trips = {
    "origin": origin,
    "destination": destination,
    "trips": city_trip_list
  }
  all_trips.append(city_trips)

# Cache trips
with open("routes.json", "w") as data:
  data.write(json.dumps(all_trips))
