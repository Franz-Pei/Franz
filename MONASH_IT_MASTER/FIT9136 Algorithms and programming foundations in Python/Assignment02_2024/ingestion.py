from typing import Tuple
import csv
from child_properties import House, Apartment
from amenity import Amenity
import json

def ingest_files(props_file: str, medical_centres_file: str, schools_file: str, stations_file: str, sport_facilities_file: str) -> Tuple[list, list]:
    # Write code to read sample properties and
    # create a list of properties
    properties = []
    with open(props_file, 'r', newline='', encoding='utf-8-sig') as csvfile:
        reader = csv.DictReader(csvfile)
        for line in reader:
            address = line['full_address']
            prop_type = 'apartment' if "/" in address.split(' ')[0] else 'house'
            if prop_type == 'house':
                # if its a house, initialise a house
                prop = House(line['prop_id'],
                             int(line['bedrooms']),
                             int(line['bathrooms']),
                             int(line['parking_spaces']),
                             line['full_address'],
                             int(line['land_area']),
                             int(line['floor_area']),
                             int(line['price']),
                             line['property_features'].split(';'),
                             (float(line['latitude']), float(line['longitude']))
                )
            else:
                prop = Apartment(
                    line['prop_id'],
                    int(line['bedrooms']),
                    int(line['bathrooms']),
                    int(line['parking_spaces']),
                    line['full_address'],
                    int(line['floor_number']),
                    int(line['floor_area']),
                    int(line['price']),
                    line['property_features'].split(';'),
                    (float(line['latitude']), float(line['longitude']))
                )

            # Add the property to the list
            properties.append(prop)

    # Write code to read sample amenity files and create a list
    amenities = []

    for one_file in [medical_centres_file, schools_file, stations_file, sport_facilities_file]:
        with open(one_file, 'r', newline='', encoding='utf-8-sig') as csvfile:
            reader = csv.DictReader(csvfile)
            a = None
            for line in reader:
                if 'stop_id' in line.keys():
                    if validate_line(line, ['stop_id', 'stop_name', 'stop_lat', 'stop_lon']):
                        a = create_amenity(line['stop_id'], line['stop_name'], (line['stop_lat'], line['stop_lon']), 'train_station', None)

                elif 'gp_code' in line.keys():
                    if validate_line(line, ['gp_code', 'gp_name', 'location']):
                        loc = json.loads(line['location'])
                        gp_lat = loc['lat']
                        gp_lon = loc['lng']
                        a = create_amenity(line['gp_code'], line['gp_name'], (gp_lat, gp_lon), 'medical_centre', None)

                elif 'school_no' in line.keys():
                    if validate_line(line, ['school_no', 'school_name', 'school_lat', 'school_lon', 'school_type']):
                        a = create_amenity(line['school_no'], line['school_name'], (line['school_lat'], line['school_lon']), 'school', line['school_type'])

                elif 'facility_id' in line.keys():
                    if validate_line(line, line.keys()):
                        a = create_amenity(line['facility_id'], line['facility_name'], (line['sport_lat'], line['sport_lon']), 'sport_facility', line['sport_played'])

                amenities.append(a)

    return (properties, amenities)

def create_amenity(amenity_id, amenity_name, amenity_coords, amenity_type, amenity_subtype) -> Amenity:
    lat, lon = amenity_coords
    lat, lon = float(lat), float(lon)
    amenity_coords = (lat, lon)
    return Amenity(amenity_id, amenity_name, amenity_type, amenity_subtype, amenity_coords)

def validate_line(line: dict, keys: list) -> bool:
    for key, value in line.items():
        if key in keys and (value == '' or value == 'NA' or value is None):
            return False
    return True
