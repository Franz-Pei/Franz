from custom_errors import *
import csv

class Runner:
    """
    Represents a runner participating in a race.

    Attributes:
        max_energy (int): The maximum energy level of the runner, fixed at 1000.
    """
    max_energy = 1000

    def __init__(self, name, age, country, sprint_speed, endurance_speed):
        """
        Initialize a Runner object.

        Args:
            name (str): The name of the runner, must be an alphanumeric string.
            age (int): The age of the runner, must be an integer between 5 and 120.
            country (str): The country of the runner, must be from the list in the countries.csv file.
            sprint_speed (float): The sprint speed of the runner, must be a float between 2.2 and 6.8.
            endurance_speed (float): The endurance speed of the runner, must be a float between 1.8 and 5.4.

        Raises:
            CustomTypeError: If the input parameter types are invalid.
            CustomValueError: If the input parameter values are invalid.
        """
        self._validate_name(name)
        self._validate_age(age)
        self._validate_country(country)
        self._validate_speed(sprint_speed,"sprint_speed", 2.2, 6.8)
        self._validate_speed(endurance_speed, "endurance_speed", 1.8, 5.4)

        self.name = name
        self.age = age
        self.country = country
        self.sprint_speed = sprint_speed
        self.endurance_speed = endurance_speed
        self.energy = self.max_energy      
    
    def _validate_name(self,name):
        """
        Validate the input name.

        Args:
            name (str): The name of the runner.

        Raises:
            CustomTypeError: If the input name is not a string.
            CustomValueError: If the input name contains non-alphanumeric characters.
        """
        if not isinstance(name, str):
            raise CustomTypeError(f"Invalid name:{name}. Name must be an alphanumeric string.")
         # Check if name contains only alphanumeric characters
        if not all(part.isalnum() for part in name.split()):
            raise CustomValueError(f"Invalid name:{name}. Name must be an alphanumeric string.")

    def _validate_age(self, age):
        """
        Validate the input age.

        Args:
            age (int): The age of the runner.

        Raises:
            CustomTypeError: If the input age is not an integer.
            CustomValueError: If the input age is not between 5 and 120.
        """
        if not isinstance(age, int):
            raise CustomTypeError(f"Invalid age type:{type(age)}.Age must be a integer.")
        if age < 5 or age > 120:
            raise CustomValueError(f"Invalid age:{age}. Age must be an integer between 5 and 120.")
    
    def _validate_country(self, country):
        """
        Validate the input country.

        Args:
            country (str): The country of the runner.

        Raises:
            CustomValueError: If the input country is not in the list in the countries.csv file.
        """
        with open("countries.csv", "r") as file:
            reader = csv.reader(file)
            next(reader)
            countries = [row[3] for row in reader]
            # Check if country is in the list of countries
            if country not in countries:
                raise CustomValueError(f"Invalid country:{country}.Country must be from the list in countries.csv.")

    def _validate_speed(self, speed, speed_name, min_speed, max_speed):
        """
        Validate the input speed.

        Args:
            speed (float): The speed of the runner.
            speed_name (str): The name of the speed type, e.g., "sprint_speed" or "endurance_speed".
            min_speed (float): The minimum allowed speed.
            max_speed (float): The maximum allowed speed.

        Raises:
            CustomTypeError: If the input speed is not a float.
            CustomValueError: If the input speed is not between the minimum and maximum values.
        """
        # Check if speed is a float
        if not isinstance(speed, float):
            raise CustomTypeError(f"Invalid {speed_name}:{type(speed)} .{speed_name.capitalize()} must be a float.")
        # Check if speed is within the valid range
        if speed < min_speed or speed > max_speed:
            raise CustomValueError(f"Invalid {speed_name}:{speed}. {speed_name.capitalize()} must be a float between {min_speed} and {max_speed}.")

    def drain_energy(self, drain_points: int):
        """
        Reduce the energy of the Runner by the specified amount.

        Args:
        - drain_points (int): Amount of energy to drain.

        Raises:
        - CustomAttributeError: If the 'energy' attribute does not exist in the Runner class.
        - CustomTypeError: If drain_points is not an integer.
        - CustomValueError: If drain_points is not between 0 and max_energy, or if draining would result in negative energy.
        """
        # Check if the 'energy' attribute exists
        if not hasattr(self, 'energy'):
            raise CustomAttributeError("The 'energy' attribute does not exist in the Runner class.")
        # Check if drain_points is an integer
        if not isinstance(drain_points, int):
            raise CustomTypeError(f"Invalid drain points: {type(drain_points)}.Drain points must be an integer.")
        # Check if drain_points is within the valid range
        if drain_points < 0 or drain_points > self.max_energy:
            raise CustomValueError(f"Invalid drain points:{drain_points}. Drain points must be an integer between 0 and {self.max_energy}.")
        # Check if there is enough energy to drain
        if self.energy - drain_points < 0:
            raise CustomValueError(f"Not enough energy to drain {drain_points} points. Current energy:{self.energy}.")
        # Drain the energy
        self.energy -= drain_points

    def recover_energy(self, recovery_amount: int):
        """
        Recover the runner's energy.

        Args:
            recovery_amount (int): The amount of energy to recover, must be an integer between 0 and 1000.

        Raises:
            CustomAttributeError: If the Runner object does not have the 'energy' attribute.
            CustomTypeError: If the input recovery_amount is not an integer.
            CustomValueError: If the input recovery_amount is not between 0 and 1000.
        """
        # Check if the 'energy' attribute exists
        if not hasattr(self,'energy'):
            raise CustomAttributeError("The 'energy' attribute does not exist in the Runner class.")
        
        # Check if recovery_amount is an integer
        if not isinstance(recovery_amount, int):
            raise CustomTypeError(f"Invalid recovery amount type: {type(recovery_amount)}. Recovery amount must be an integer.")
        
        # Check if recovery_amount is within the valid range
        if recovery_amount < 0 or recovery_amount > self.max_energy:
            raise CustomValueError(f"Invalid recovery amount type:{type(recovery_amount)}. Recovery amount must be an integer.")
        
        # Check if recovery_amount is within the valid range
        if recovery_amount < 0 or recovery_amount > self.max_energy:
            raise CustomValueError(f"Invalid recovery amount:{recovery_amount}. Recovery amount must be an integer between 0 and {self.max_energy}.")
        
        # Recover the energy, ensuring it doesn't exceed the maximum
        self.energy = min(self.energy + recovery_amount, self.max_energy)
    
    def run_race(self, race_type, distance):
        """
        Calculate the time required for the runner to complete a race of the specified type and distance.

        Args:
            race_type (str): The type of race, must be "short" or "long".
            distance (float): The distance of the race, must be a positive float.

        Returns:
            float: The time taken to complete the race in seconds, rounded to two decimal places.

        Raises:
            CustomTypeError: If the input race_type is not a string or distance is not a float.
            CustomValueError: If the input race_type is not "short" or "long", or distance is a negative number.
        """
        # Check if race_type is a string
        if not isinstance(race_type, str):
            raise CustomTypeError(f"Invalid race type type:{type(race_type)}. Race type must be a string.")
        
        # Check if race_type is "short" or "long"
        if race_type not in ["short", "long"]:
            raise CustomValueError(f"Invalid race type:{race_type}.Race type must be either 'short' or 'long'.")
        
        # Check if distance is a float
        if not isinstance(distance, float) :
            raise CustomTypeError(f"Invalid distance: {distance}. Distance must be a float number.")
        
        # Check if distance is non-negative
        if distance < 0: 
            raise CustomValueError(f"Invalid distance: {distance}. Distance must be a positive number.")       
        
        # Check if race is a short race
        if race_type == "short":
            time_taken = distance * 1000.0 / self.sprint_speed
        else:
            time_taken = distance * 1000.0 / self.endurance_speed
        # Round off the time taken to two decimal places
        time_taken = round(time_taken, 2)
        # Return the time taken to complete the race
        return time_taken

    def __str__(self):
        """
        Return a string representation of the runner's name, age, and country.

        Returns:
            str: The string representation of the runner.
        """
        return f"Name: {self.name} Age: {self.age} Country: {self.country}"

if __name__ == '__main__':
    runner = Runner('Elijah', 18, 'Australia', 5.8, 4.4)
    
    # running a short race
    time_taken = runner.run_race('short', 2.0)
    print(f"Runner {runner.name} took {time_taken} seconds to run 2km!")
    


