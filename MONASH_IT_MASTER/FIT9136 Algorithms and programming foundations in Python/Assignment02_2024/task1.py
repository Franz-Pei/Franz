def extract_information(property_string: str) -> dict:
    """
    Extract the information in the attributed string and store it in a dictionary.

    Args:
    property_string (str): String containing property information.

    Returns:
    dict: Dictionary containing extracted attribute information.
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

    #extract_information
def add_feature(property_dict: dict, feature: str) -> None:
    """
    Adds new characteristics to the attribute characteristics list.

    Args:
    property_dict (dict): Dictionary containing property information.
    feature (str): New feature to add.
    """
    if feature not in property_dict['property_features']:
        property_dict['property_features'].append(feature)

def remove_feature(property_dict: dict, feature: str) -> None:
    """
    Removes a characteristic from the attribute's characteristic list.

    Args:
    property_dict (dict): Dictionary containing property information.
    feature (str): Feature to be deleted.
    """
    if feature in property_dict['property_features']:
        property_dict['property_features'].remove(feature)

def main():
    sample_string = "P10001,3 Antrim Place Langwarrin VIC 3910,4,2,2,-38.16655678,145.1838435,,608,257,870000,dishwasher;central heating"
    property_dict = extract_information(sample_string)
    print(f"The first property is at {property_dict['full_address']} and is valued at ${property_dict['price']}")

    sample_string_2 = "P10002,G01/7 Rugby Road Hughesdale VIC 3166,2,1,1,-37.89342337,145.0862616,1,,125,645000,dishwasher;air conditioning;balcony"
    property_dict_2 = extract_information(sample_string_2)

    print(f"The second property is in {property_dict_2['suburb']} and is located on floor {property_dict_2['floor_number']}")

    add_feature(property_dict, 'electric hot water')
    print(f"Property {property_dict['prop_id']} has the following features: {property_dict['property_features']}")

if __name__ == '__main__':
    main()
