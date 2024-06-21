from typing import Tuple, List, Union

class Amenity():
    """
    Initializes an Amenity object with specified attributes.

    Args:
        amenity_code (str): Code of the amenity.
        amenity_name (str): Name of the amenity.
        amenity_type (str): Type of the amenity.
        amenity_subtype (str): Subtype of the amenity.
        coordinates (Tuple[float, float]): Coordinates of the amenity.
    """
    def __init__(self, amenity_code: str, 
                        amenity_name: str,
                        amenity_type: str, 
                        amenity_subtype: str,
                        coordinates: Tuple[float, float]):
        self._amenity_code = amenity_code
        self._amenity_name = amenity_name
        self._amenity_type = amenity_type
        self._amenity_subtype = amenity_subtype
        self._coordinates = coordinates

    def get_amenity_code(self) -> str:
        #Returns the code of the amenity.
        return self._amenity_code
    
    def set_amenity_name(self, amenity_name: str) -> None:
        #Sets the name of the amenity.
        self._amenity_name = amenity_name
    
    def get_amenity_name(self) -> str:
        #Returns the name of the amenity.
        return self._amenity_name
    
    def get_amenity_coords(self) -> Tuple[float, float]:
        #Returns the coordinates of the amenity
        return self._coordinates
    
    def get_amenity_type(self) -> str:
        #Returns the type of the amenity.
        return self._amenity_type
    
    def set_amenity_subtype(self, amenity_subtype: Union[str,None]) -> None:
        #Sets the subtype of the amenity.
        self._amenity_subtype = amenity_subtype
    
    def get_amenity_subtype(self) -> Union[str,None]:
        #Returns the subtype of the amenity.
        return self._amenity_subtype

if __name__ == '__main__':
    a = Amenity('1001')
    

    
