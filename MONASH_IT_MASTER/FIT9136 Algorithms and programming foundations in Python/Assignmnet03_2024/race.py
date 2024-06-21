from custom_errors import *
from abc import ABC, abstractmethod
from runner import Runner
import math


class Race(ABC):
    """Abstract base class representing a race."""
    def __init__(self, distance, runners=None):
        """
        Initialize a Race object

        Args:
            distance (float): The distance of the race, must be a float and greater than 0
            runners (list, optional): List of runners, defaults to an empty list. Each runner must be a Runner object and have the required attributes

        Raises:
            CustomTypeError: If distance is not a float or runners is not a list/tuple
            CustomTypeError: If any element in the runners list is not a Runner object
            CustomAttributeError: If any runner object is missing the required attributes
            CustomValueError: If distance is less than 0
        """
        # Initialize runners as an empty list if None
        if runners is None:
            runners = []
        # Raise CustomTypeError if runners is not a list or tuple
        elif not isinstance(runners, (list, tuple)):
            raise CustomTypeError(f"Invalid runner type:{type(runners)}.runner must be a Runner.")
        # Iterate over the runners list
        for runner in runners:
            # Raise CustomTypeError if the current runner is not a Runner instance
            if not isinstance(runner, Runner):
                raise CustomTypeError(f"Invalid runner type:{type(runners)}.runner must be a Runner.")
            # Raise CustomAttributeError if the runner object is missing any required attribute
            if not hasattr(runner,'name') or not hasattr(runner, 'age') or not hasattr(runner, 'country') or not hasattr(runner, 'sprint_speed') or  not hasattr(runner, 'endurance_speed'):
                raise CustomAttributeError(f"Runner object does not have the required attributes.")
         # Raise CustomTypeError if distance is not a float
        if not isinstance(distance, float) :
            raise CustomTypeError(f"Invalid distance: {distance}. Distance must be a float number.")
        # Raise CustomValueError if distance is less than 0
        if distance <0:
            raise CustomValueError(f"Invalid distance: {distance}. Distance must be a positive number.")
        # Initialize instance attributes
        self.runners = runners
        self.distance = distance
        self.energy_per_km = 100
        self.time_multiplier = 1.2
        self.energy_per_km = 100
        self.race_type = None
        self.maximum_participants = None

    def add_runner(self, runner):
        """
        Add a runner to the race

        Args:
            runner (Runner): The runner object to be added

        Raises:
            RunnerAlreadyExistsError: If the runner already exists
            RaceIsFullError: If the race is already full
            CustomAttributeError: If the runner object is missing any required attribute
        """
         # Raise RunnerAlreadyExistsError if the runner already exists
        if runner in self.runners:
            raise RunnerAlreadyExistsError(f"{runner} already exists.")
        # Raise RaceIsFullError if the race is already full
        if len(self.runners) >= self.maximum_participants:
            raise RaceIsFullError("race is full.")
        # Raise CustomAttributeError if the runner object is missing any required attribute
        if not hasattr(runner, 'name') or not hasattr(runner, 'age') or not hasattr(runner, 'age') or not hasattr(runner,'country') or not hasattr(runner, 'sprint_speed') or not hasattr(runner, 'endurance_speed'):
            raise CustomAttributeError(f"Runner object does not have the required attributes.")
        # Add the runner to the runners list
        self.runners.append(runner)

    def remove_runner(self, runner):
        """
        Remove a runner from the race

        Args:
            runner (Runner): The runner object to be removed

        Raises:
            RunnerDoesntExistError: If the runner doesn't exist
        """
        # Raise RunnerDoesntExistError if the runner doesn't exist
        if runner not in self.runners:
            raise RunnerDoesntExistError('runner does not exists.')
        # Remove the runner from the runners list
        self.runners.remove(runner)

# Define ShortRace class, inheriting from Race class
class ShortRace(Race):
    """
    Short race class

    Attributes:
        race_type (str): Race type, set to "short"
        maximum_participants (int): Maximum number of participants, set to 8
    """

    def __init__(self, distance, runners=None):
        """
        Initialize a ShortRace object.

        Args:
            distance (float): The distance of the race.
            runners (list, optional): List of Runner objects participating in the race. Defaults to None.
        """
        super().__init__(distance, runners)
        self.race_type = "short"
        self.maximum_participants = 8

    def conduct_race(self):
        """
        Conduct the short race

        Returns:
            list: A list of tuples containing each runner and their completion time
        """
        result = []
         # Conduct the race only if race_type is "short"
        if self.race_type == "short":
            for i, runner in enumerate(self.runners):
                # Calculate the runner's completion time and apply the time multiplier
                time_taken = runner.run_race("short", self.distance) * 1.2
                result.append((runner, time_taken))
        return result

# Define MarathonRace class, inheriting from Race class
class MarathonRace(Race):
    """
    Marathon race class

    Attributes:
        race_type (str): Race type, set to "long"
        maximum_participants (int): Maximum number of participants, set to 16
    """
    def __init__(self, distance, runners=[]):
        # Call the parent class __init__ method
        super().__init__(distance, runners)
        # Initialize instance attributes
        self.race_type = "long"
        self.maximum_participants = 16

    def conduct_race(self):
        """
        Conduct the marathon race

        Returns:
            list: A list of tuples containing each runner and their completion time or "DNF" (Did Not Finish)
        """
        result = []
        for i, runner in enumerate(self.runners):
                time_taken = 0
                # Iterate over each kilometer
                for km in range(math.ceil(self.distance)):
                    # If the runner has energy
                    if runner.energy > 0:
                        time_taken += runner.run_race("long", self.distance)
                        # Drain the runner's energy
                        runner.drain_energy(min(100, runner.energy))
                    else:
                        # Mark the runner as "DNF" if out of energy
                        time_taken = 'DNF'
                        break
                result.append((runner, time_taken))
        return result


if __name__ == '__main__':
    # Creating instances of ShortRace and MarathonRace
    short_race = ShortRace(0.5)
    long_race = MarathonRace(5.0)

    # Add a Runner
    eli = Runner('Elijah', 18, 'Australia', 5.8, 4.4)
    rup = Runner('Rupert', 23, 'Australia', 2.3, 1.9)

    # Adding runners to the long race
    long_race.add_runner(eli)
    long_race.add_runner(rup)

    # Conducting the long race and printing results
    results = long_race.conduct_race()
    for runner, time in results:
        print(runner.name, time)


