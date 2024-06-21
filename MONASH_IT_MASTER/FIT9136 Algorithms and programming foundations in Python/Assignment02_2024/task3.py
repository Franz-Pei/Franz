import csv
import json

def process_schools(file_name: str) -> dict:
    """
    Process a CSV file containing school data and returns a dictionary of schools.

    Args:
    - file_name (str): The name of the CSV file containing school data.

    Returns:
    - schools (dict): A dictionary containing school information.
    """     
    # Initialize an empty dictionary to store schools data
    schools = {}
    with open(file_name,'r', encoding='utf-8-sig') as file:
        # Open the CSV file in read mode with UTF-8 encoding to handle special characters
        reader = csv.DictReader(file)
        # Iterate through each row in the CSV file
        for row in reader:
            # Extract the school number from the row
            school_no = row['school_no']
            school_name = row['school_name']
            school_type = row['school_type']
            school_lat = float(row['school_lat']) if row['school_lat'] != 'NA' else None
            school_lon = float(row['school_lon']) if row['school_lon'] != 'NA' else None
            if school_lat and school_lon:
                schools[school_no] = {
                    'school_no' : school_no,
                    'school_name' : school_name,
                    'school_type' : school_type,
                    'school_lat' : school_lat,
                    'school_lon' : school_lon
                }
    return schools
        

def process_medicals(file_name: str) -> dict:
    """
    Process a CSV file containing medical data and returns a dictionary of medical facilities.

    Args:
    - file_name (str): The name of the CSV file containing medical data.

    Returns:
    - medicals (dict): A dictionary containing medical facility information.
    """
    medicals = {}
    with open(file_name, 'r', encoding='utf-8-sig') as file:
        reader = csv.DictReader(file)
        for row in reader:
            gp_code = row['gp_code']
            gp_name = row['gp_name']
            location = row['location']
            if location:
                try:
                    location_dict = json.loads(location)
                    gp_lat = location_dict['lat']
                    gp_lon = location_dict['lng']
                    medicals[gp_code] = {
                        'gp_code' : gp_code,
                        'gp_name' : gp_name,
                        # Extract latitude from location dictionary
                        'gp_lat' : float(gp_lat),
                        # Extract longitude from location dictionary
                        'gp_lon' : float(gp_lon)
                    }
                # Handle JSON decoding errors or missing keys
                except(json.JSONDecodeError,KeyError):
                    print(f"Skippomh row withe invalid location data: {row}")
                    continue
    return medicals

def process_sport(file_name: str) -> dict:
    """
    Process a CSV file containing sport facility data and returns a dictionary of sport facilities.

    Args:
    - file_name (str): The name of the CSV file containing sport facility data.

    Returns:
    - sport_facilities (dict): A dictionary containing sport facility information.
    """
    sport_facilities = {}
    with open(file_name,'r', encoding='utf-8-sig') as file:
        reader = csv.DictReader(file)
        for row in reader:
            facility_id = row['facility_id']
            facility_name = row['facility_name']
            sport_lat = float(row['sport_lat']) if row['sport_lat'] else None
            sport_lon = float(row['sport_lon']) if row['sport_lon'] else None
            sport_played = row['sport_played']
            if sport_lat and sport_lon:
                 #Add sport facility data to sport_facilities dictionary
                sport_facilities[facility_id] ={
                    'facility_id': facility_id,
                    'facility_name': facility_name,
                    'sport_lat': sport_lat,
                    'sport_lon': sport_lon,
                    'sport_played': sport_played
                }
    return sport_facilities


def main():
    """
    Entry point of the program.
    """
    school_dict = process_schools('sample_melbourne_schools.csv')
    medical_dict = process_medicals('sample_melbourne_medical.csv')
    sport_dict = process_sport('sample_sport_facilities.csv')

    sample_medical_code = 'mgp0041'
    print(f"There are {len(school_dict)} schools and {len(sport_dict)} sport facilities in our dataset")
    print(f"The location for {medical_dict[sample_medical_code]['gp_name']} is {medical_dict[sample_medical_code]['gp_lat']}, {medical_dict[sample_medical_code]['gp_lon']}")

if __name__ == '__main__':
    main()

