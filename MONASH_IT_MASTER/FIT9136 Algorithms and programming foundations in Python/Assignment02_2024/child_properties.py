from typing import Tuple, List, Union
from parent_property import Property


class House(Property):
    """
    A class representing a house, inheriting from the Property class.
    
    Attributes:
    - Inherits all attributes from Property class
    - _land_area (int): Land area of the house.
    """
    def __init__(self, prop_id: str, 
                        bedrooms: int, 
                        bathrooms: int, 
                        parking_spaces: int, 
                        full_address: str,
                        land_area: int,
                        floor_area: int,
                        price: int,
                        property_features: List[str],
                        coordinates: Tuple[float, float]):
        super().__init__(prop_id, 
                        bedrooms, 
                        bathrooms, 
                        parking_spaces, 
                        full_address, 
                        floor_area, 
                        price, 
                        property_features,
                        coordinates)
        self._land_area = land_area
    
    def set_floor_number(self, floor_number: int) -> None:
        #Overrides the set_floor_number method to return None for House.
        return None
    
    def get_floor_number(self) -> Union[int, None]:
        #Overrides the get_floor_number method to return None for House.
        return None
    
    def set_land_area(self,land_area:int) -> None:
        #Returns the land area of the house.
        self._land_area = land_area
    
    def get_land_area(self) -> Union[int, None]:
        #Returns the land area of the house.
        return self._land_area
    
class Apartment(Property):
    """
    A class representing an apartment, inheriting from the Property class.
    
    Attributes:
    - Inherits all attributes from Property class
    - _floor_number (int): Floor number of the apartment.
    """
    def __init__(self, prop_id: str, 
                        bedrooms: int, 
                        bathrooms: int, 
                        parking_spaces: int, 
                        full_address: str,
                        floor_number: int,
                        floor_area: int,
                        price: int,
                        property_features: List[str],
                        coordinates: Tuple[float, float]):
        super().__init__(prop_id,
                         bedrooms,
                         bathrooms,
                         parking_spaces,
                         full_address,
                         floor_area,
                         price,
                         property_features,
                         coordinates)
        self._floor_number = floor_number
    
    def set_floor_number(self, floor_number:int) -> None:
        #Sets the floor number of the apartment.
        self.floor_number = floor_number
    
    def get_floor_number(self) -> Union[int, None]:
        #Returns the floor number of the apartment.
        return self._floor_number
    
    def set_land_area(self, land_area: int) -> None:
        #Overrides the set_land_area method to return None for Apartment.
        return None

    def get_land_area(self) -> Union[int, None]:
        #Overrides the get_land_area method to return None for Apartment
        return None
    
if __name__ == '__main__':
    pass

