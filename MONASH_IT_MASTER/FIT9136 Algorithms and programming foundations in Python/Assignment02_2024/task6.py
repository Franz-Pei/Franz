import os
import json
from typing import List, Tuple, Dict
from parent_property import Property
from child_properties import House, Apartment
from amenity import Amenity
from ingestion import ingest_files
from score import *

def read_request(request_filename: str) -> Tuple[dict, dict]:
    """
    This method reads a request file in json format
    and returns two dictionaries; one containing the
    house_importance features and one containing the 
    amenity_importance features.
    """
    # TODO: Step 1 - Define this method to read a JSON request and return 2 dictionaries
    with open(request_filename,'r') as file:
        request_data = json.load(file)
    
    house_importance = request_data.get('request',{}).get('house_importance', {})
    amenity_accessibility = request_data.get('request',{}).get('amenities_accessibility',{})

    return house_importance, amenity_accessibility

def find_matching_properties(props: List[Property], house_importance: dict) -> List[Property]:
    """
    THis method recevied a list of all properties and a dictionary that
    contains the house importance criteria from a user's request 
    and returns a list of Property objects that match the user's request
    """
    #TODO:Step 2 - Define the method to return a list of matching properties
    matching_props =[]

    for prop in props:
        #Initialize a flag to track if the property matches the criteria
        matches_criteria = True

        #Check if the property type matches(if specified in the request)
        if 'prop_type' in house_importance:
            if prop.get_prop_type() != house_importance['prop_type'].lower():
                matches_criteria = False
        
        #Check if the suburb matches(if specified in the request)
        if 'suburb' in house_importance:
            if prop.get_suburb().lower() != house_importance['suburb'].lower():
                matches_criteria = False

        #Check if the property features match(if specified in the request)
        if 'property_features' in house_importance:
            requested_features = house_importance['property_features'].split(';')
            prop_features = prop.get_property_features()
            if not all(feature in prop_features for feature in requested_features):
                matches_criteria = False
        
        #Check if the bedrooms,bathrooms,parking spaces, and floor area match(if specified in the request)
        if 'bedrooms' in house_importance:
            if prop.get_bedrooms() < house_importance['bedrooms']:
                matches_criteria = False

        if 'bathrooms' in  house_importance:
            if prop.get_bathrooms() < house_importance['bathrooms']:
                matches_criteria = False

        if 'parking_spaces' in house_importance:
            if prop.get_parking_spaces() < house_importance['parking_spaces']:
                matches_criteria = False 
                
        if 'floor_area' in house_importance:
            if prop.get_floor_area() < house_importance['floor_area']:
                matches_criteria = False

        if "floor_number" in house_importance:
            if prop.get_floor_number() is not None and prop.get_floor_number() > house_importance['floor_number']:
                matches_criteria = False

        if 'price' in house_importance:
            if prop.get_price() > house_importance['price']:
                matches_criteria = False


        if matches_criteria:
            matching_props.append(prop)

    return matching_props

def create_response_dict(scored_properties: dict) -> dict:
    """
    This method takes in a dictionary that has the property objects 
    and their star scores and creates a dictionary in JSON format 
    that can be written into a file
    """
    # TODO: Step 3 - Define this method to create a response dictionary
    response_dict = {
        "properties":[]
    }
    for star_score, prop in scored_properties.items():
        property_dict = {
            'property_id': prop.get_prop_id(),
            'star_score': float(star_score)
        }
        response_dict["properties"].append(property_dict)
    return response_dict

def produce_star_scores(request_filename: str, properties_file: str, amenities_files: List[str]) -> dict:
    # Read the properties and amenities
    medical_file, schools_file, train_stations, sport_facilities = amenities_files
    props, amenities = ingest_files(properties_file, medical_file, schools_file, train_stations, sport_facilities)

    # Read the request and get the dictionaries of house_importance and amenity_accessibility
    house_importance, amenity_accessibility = read_request(request_filename)

    # Collect properties that match the property criteria
    matched_props = find_matching_properties(props, house_importance)

    # Score properties using the amenity amenity_accessibility dictionary
    prop_scores = [score_property(x, amenities, amenity_accessibility) for x in matched_props]

    # Now, we can normalise the scores that we just got
    norm_scores = normalise_scores(prop_scores)

    # Create a collection matching property object to Score
    prop_scored = dict(zip(norm_scores, matched_props))

    # Create a response dictionary
    response_dict = create_response_dict(prop_scored)
    
    # Return the response dictionary from step 3 and the list of matching property family objects
    return response_dict, matched_props

def respond(response_dict: dict) -> None:
    """
    This function reads a response dictionary and creates a JSON 
    file based on the content of the response dictionary
    """
    # TODO: Step 4 - Create this method to read a response dictionary
    # and create a JSON file
    # Sort the properties in descending order by star_score
    sorted_properties = sorted(response_dict['properties'], key=lambda x:(-x['star_score'], x['property_id']))

    #Create a new dictionary with the sorted properties
    sorted_response_dict = {
        'properties': sorted_properties
    }
    with open('response.json', 'w') as file:
        json.dump(response_dict, file, indent=4)
    print("response.json file has been created successfully.")


if __name__ == '__main__':
    response_dict, matched_props = produce_star_scores('request.json', 'melbourne_properties.csv', ['melbourne_medical.csv', 'melbourne_schools.csv', 'train_stations.csv', 'sport_facilities.csv'])
    print(f"{len(matched_props)} properties matched with the user's request")
    respond(response_dict)
    # Check if response.json exists in the current directory
    if os.path.exists("/home/response.json"):
        print("File created successfully")
    else:
        print("File not created. Some Error occurred")
