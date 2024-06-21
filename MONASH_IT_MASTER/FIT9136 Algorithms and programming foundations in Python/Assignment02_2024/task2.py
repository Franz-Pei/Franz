# DO NOT DELETE THIS LINE
from haversine import haversine_distance

def extract_information(property_string: str) -> dict:
    """
    Extracts information from a property string and returns a dictionary containing the extracted information.

    Args:
    property_string (str): A comma-separated string containing property information.

    Returns:
    property_dict (dict): A dictionary containing the extracted property information.
    """
    #Split the property string into individual fields
    fields = property_string.split(',')

    #Extract the relevant information from the fields
    #Contain the property ID of the property
    prop_id = fields[0]
    #Contain the address of the property
    full_address = fields[1]
    #Contain the number of the bedrooms of the property
    bedrooms = int(fields[2])
    #Contain the number of bathrooms in the property
    bathrooms = int(fields[3])
    #Contain the number of the parking_spaces in the property
    parking_spaces = int(fields[4])
    #Contain the latitude of the property
    latitude = float(fields[5])
    #Contain the longitude of the property
    longitude = float(fields[6])
    #Contain the floor number that the property
    floor_number = int(fields[7]) if fields[7] else None
    #Contain the land_area of the property
    land_area = int(fields[8]) if  fields[8] else None
    #Contain the floor_area of the property
    floor_area = int(fields[9])
    #Contain the predicted
    price = int(fields[10])
    #property_features
    property_features = fields[11].split(';') if fields[11] else []

    #Determine the property type based on the presence of an apartment number
    prop_type = 'apartment' if '/' in full_address else 'house'

    #Extract the suburb form the address
    suburb = full_address.split()[-3]

    #Create the property dictionary
    property_dict ={
        'prop_id':prop_id,
        'prop_type':prop_type,
        'full_address':full_address,
        'suburb':suburb,
        'bedrooms':bedrooms,
        'bathrooms':bathrooms,
        'parking_spaces':parking_spaces,
        'latitude':latitude,
        'longitude':longitude,
        'floor_area':floor_area,
        'price':price,
        'property_features':property_features
    }

    #Include floor_number if application
    if floor_number is not None:
        property_dict['floor_number'] = floor_number
    #Include land_area if applicable
    if land_area is not None:
        property_dict['land_area'] = land_area
    return property_dict 

def process_properties(file_name: str) -> dict:
    """
    Reads a properties CSV file and processes it into a dictionary.

    Args:
    - file_name (str): The name of the properties CSV file.

    Returns:
    - properties (dict): A dictionary containing property information.
    """
    properties = {}
    with open(file_name,'r') as file:
        next(file)
        for line in file:
            property_string = line.strip()
            property_dict = extract_information(property_string)
            prop_id = property_dict['prop_id']
            properties[prop_id] = property_dict
    return properties

def process_stations(file_name: str) -> dict:
    """
    Reads a train stations CSV file and processes it into a dictionary.

    Args:
    - file_name (str): The name of the train stations CSV file.

    Returns:
    - stations (dict): A dictionary containing train station information.
    """
    stations = {}
    with open(file_name, 'r') as file:
        next(file)
        for line in file:
            stop_id,stop_name,stop_lat,stop_lon = line.strip().split(',')
            stations[stop_id]={
                'stop_id':stop_id,
                'stop_name':stop_name,
                'stop_lat':float(stop_lat),
                'stop_lon':float(stop_lon)
            }
    return stations

def nearest_station(properties: dict, stations: dict, prop_id: str) -> str:
    """
    Finds the nearest train station to a given property based on their coordinates.

    Args:
    - properties (dict): A dictionary containing property information.
    - stations (dict): A dictionary containing train station information.
    - prop_id (str): The ID of the property to find the nearest station for.

    Returns:
    - nearest_station (str): The name of the nearest train station.
    """
    if prop_id not in properties:
        return ""
    prop_lat = properties[prop_id]['latitude']
    prop_lon = properties[prop_id]['longitude']

    nearest_station = None
    min_distance = float('inf')

    for station in stations.values():
        station_lat = station['stop_lat']
        station_lon = station['stop_lon']
        distance = haversine_distance(prop_lat, prop_lon, station_lat, station_lon)
        if distance < min_distance:
            min_distance = distance
            nearest_station = station['stop_name']
    return nearest_station

def main():
    """
    Don't 'need not touch this function, if  
    code is correct, this function will work as intended 
    """
    # Process the properties
    properties_file = 'sample_properties.csv'
    properties = process_properties(properties_file)

    # Process the train stations
    stations_file = 'train_stations.csv'
    stations = process_stations(stations_file)

    # Check the validity of stations
    sample_prop = 'P10001'
    print(f"The nearest station for property {sample_prop} is {nearest_station(properties, stations, sample_prop)}")
    


if __name__ == '__main__':
    main()
