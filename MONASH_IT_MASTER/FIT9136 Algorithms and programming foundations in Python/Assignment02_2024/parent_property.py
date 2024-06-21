# Copy and paste the Property class from the previous task
from abc import ABC, abstractmethod
from typing import Tuple, List, Union
from amenity import Amenity
import math

class Property(ABC):
    """Initializes a Property object.
    Args:
    - prop_id (str): The ID of the property.
    - bedrooms (int): Number of bedrooms in the property.
    - bathrooms (int): Number of bathrooms in the property.
    - parking_spaces (int): Number of parking spaces in the property.
    - full_address (str): Full address of the property.
    - floor_area (int): Floor area of the property.
    - price (int): Price of the property.
    - property_features (List[str]): Features of the property.
    - coordinates (Tuple[float, float]): Coordinates (latitude and longitude) of the property.
    """
    def __init__(self, prop_id: str, 
                        bedrooms: int, 
                        bathrooms: int, 
                        parking_spaces: int, 
                        full_address: str,
                        floor_area: int,
                        price: int,
                        property_features: List[str],
                        coordinates: Tuple[float, float]):
        self._prop_id = prop_id
        self._bedrooms = bedrooms
        self._bathrooms = bathrooms
        self._parking_spaces = parking_spaces
        self._full_address = full_address
        self._suburb = ''
        self._floor_number = None
        self._prop_type = self.__class__.__name__.lower()
        self._floor_area = floor_area
        self._price = price
        self._property_features = property_features
        self._coordinates = coordinates
        self.set_address_suburb()
        
    def get_prop_id(self) -> str:
        #Returns the ID of the property.
        return self._prop_id

    def get_full_address(self) -> str:
        #Returns the full address of the property.
        return self._full_address

    def get_suburb(self) -> str:
        #Returns the suburb of the property.
        return self._suburb

    def set_address_suburb(self) -> None:
        #Sets the suburb based on the full address.
        address_parts = self._full_address.split(' ')
        if len(address_parts) >= 3:
            self._suburb = address_parts[3].strip()
        else:
            self._suburb = ''
    
    def get_prop_type(self) -> str:
        #Returns the type of the property.
        return self._prop_type
    
    def set_bedrooms(self, bedrooms: int) -> None:
        #Sets the number of bathrooms.
        self._bedrooms = bedrooms
    
    def get_bedrooms(self) -> int:
        #Returns the number of bathrooms."
        return self._bedrooms
    
    def set_bathrooms(self, bathrooms: int) -> None:
        #Sets the number of parking spaces.
        self._bathrooms = bathrooms
    
    def get_bathrooms(self) -> int:
        #Returns the number of bathrooms.
        return self._bathrooms
    
    def set_parking_spaces(self, parking_spaces: int) -> None:
        #Sets the number of parking spaces.
        self._parking_spaces = parking_spaces

    def get_parking_spaces(self) -> int:
        #Returns the number of parking spaces.
        return self._parking_spaces

    def get_coordinates(self) -> Tuple[float, float]:
        # Returns the coordinates of the property.
        return self._coordinates
    
    def set_floor_number(self, floor_number: int) -> None:
        #Sets the floor number.
        self._floor_number = None
  
    def get_floor_number(self) -> Union[int,None]:
        #Returns the floor number.
        return self._floor_number
    
    def set_land_area(self, land_area: int) -> None:
        # Sets the land area
        self._land_area = land_area

    def get_land_area(self) -> Union[int,None]:
        # Returns the land area.
        return self._land_area
    
    def set_floor_area(self, floor_area: int) -> None:
        #Sets the floor area
        self._floor_area = floor_area
    
    def get_floor_area(self) -> int:
        # Returns the floor area
        return self._floor_area

    def set_price(self, price: int) -> None:
        #Sets the price.
        self._price = price
    
    def get_price(self) -> int:
        #Returns the price
        return self._price
    
    def set_property_features(self, property_features: List[str]) -> None:
        # Sets the property features
        self._property_features = property_features
    
    def get_property_features(self) -> List[str]:
        #Returns the property features.
        return self._property_features

    def add_feature(self, feature: str) -> None:
        #"Adds a feature to the property.
        if feature not in self._property_features:
            self._property_features.append(feature)
    
    def remove_feature(self, feature: str) -> None:
        #Removes a feature from the property.
        if feature in self._property_features:
            self._property_features.remove(feature)
        
    def nearest_amenity(self, amenities: List[Amenity], amenity_type: str, amenity_subtype: str = None) -> Tuple[Amenity, float]:
        """Finds the nearest amenity of a specific type and subtype.
        
        Args:
        - amenities (List[Amenity]): List of amenities.
        - amenity_type (str): Type of amenity to search for.
        - amenity_subtype (str): Subtype of amenity to search for (optional).
        
        Returns:
        - Tuple[Amenity, float]: Nearest amenity and its distance from the property.
        """
        nearest = Amenity("No Match", "", amenity_type, "", (0, 0))
        min_distance = float('inf')

        for amenity in amenities:
            if amenity.get_amenity_type() == amenity_type:
             if amenity_subtype is None or amenity.get_amenity_subtype() == amenity_subtype or (amenity_type == 'school' and amenity.get_amenity_subtype() in ['Pri/Sec', amenity_subtype]):
                distance = self.haversine(self._coordinates, amenity.get_amenity_coords())
                if distance < min_distance:
                    min_distance = distance
                    nearest = amenity
        if nearest.get_amenity_name() == "No Match":
            return None
        else:
            return nearest,round(min_distance, 10)
        
    def haversine(self, coord1: Tuple[float, float], coord2: Tuple[float, float]) -> float:
        """Calculates the Haversine distance between two coordinates.
        
        Args:
        - coord1 (Tuple[float, float]): Coordinates of the first point.
        - coord2 (Tuple[float, float]): Coordinates of the second point.
        
        Returns:
        - float: Haversine distance between the two points.
        """
        lat1, lon1 = coord1
        lat2, lon2 = coord2

        R = 6371
        phi1 = math.radians(lat1)
        phi2 = math.radians(lat2)
        delta_phi = math.radians(lat2 - lat1)
        delta_lambda = math.radians(lon2 - lon1)

        a = math.sin(delta_phi / 2) ** 2 + math.cos(phi1) * math.cos(phi2) * math.sin(delta_lambda/2) ** 2
        c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 -a))

        distance = R * c
        return round(distance, 10)

if __name__ == '__main__':
    pass

