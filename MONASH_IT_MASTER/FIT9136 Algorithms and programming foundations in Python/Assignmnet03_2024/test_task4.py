import unittest
from runner import Runner
from competition import Competition
from custom_errors import CustomValueError,CustomAttributeError, CustomKeyError, RunnerAlreadyExistsError,RunnerDoesntExistError,RaceIsFullError
from task4 import *

class TestTask4(unittest.TestCase):
    def setUp(self):
        self.runners = None
        self.competition = None
    
    def test_create_runner(self):
        """
        Test if the create_runner function can create a Runner object correctly.
        """
        # Create a Runner object
        runner = create_runner("John Doe", 25, "Australia", 4.5,4.0)
        # Assert that runner is an instance of Runner
        self.assertIsInstance(runner, Runner)
        # Assert that the name attribute is correct
        self.assertEqual(runner.name,"John Doe")
        # Assert that the age attribute is correct
        self.assertEqual(runner.age, 25)
        # Assert that the country attribute is correct
        self.assertEqual(runner.country, "Australia")
        #Assert that the sprint_speed attribute is correct
        self.assertEqual(runner.sprint_speed, 4.5)
        # Assert that the endurance_speed attribute is correct
        self.assertEqual(runner.endurance_speed, 4.0)
    
    def test_create_runner_invalid_age(self):
        """
        Test if the create_runner function can handle invalid ages correctly.
        """
        with self.assertRaises(CustomValueError):
            # Create a Runner object with an invalid age
            create_runner("Jane Smith", 121, "Canada", 4.2, 3.8)
    
    def test_create_runner_negative_age(self):
        """
        Test if the create_runner function can handle negative ages correctly.
        """
        with self.assertRaises(CustomValueError):
            # Create a Runner object with a negative age
            create_runner("Bob Johson", -5, "Australia", 4.0,3.5)
    
    def test_create_runner_invalid_speed(self):
        """
        Test if the create_runner function can handle invalid speeds correctly.
        """
        with self.assertRaises(CustomValueError):
            # Assert that a CustomValueError is raised
            create_runner("Alice Brown", 30,"UK", -2.5, 0)
        with self.assertRaises(CustomValueError):
            # Create a Runner object with an invalid endurance_speed
            create_runner("Charlie Davis", 28, "France", 6.0, -1.0)

    def test_create_competition(self):
        with self.assertRaises(CustomValueError):
             # Create a Runner object with invalid speeds
            create_runner("Bob Johson", 30, "Belize", 5.0, 8.0)
    
    def test_create_competition_valid(self):
        runners = [
            Runner("Alice", 25, "Australia",4.5,4.0),
            Runner("Bob", 30, "Canada", 5.0,4.2)
        ]
        # Create a Competition object
        competition = create_competition(runners, 3, [1.0, 2.0, 3.0], [10.0, 15.0, 20.0])
        self.assertIsInstance(competition, Competition)
        # Assert that the length of the runners list is correct
        self.assertEqual(len(competition.runners), 2)
        self.assertEqual(competition.rounds, 3)
        # Assert that the short distances list is correct
        self.assertEqual(competition.distances_short,[1.0, 2.0, 3.0])
        # Assert that the marathon distances list is correct
        self.assertEqual(competition.distances_marathon, [10.0, 15.0, 20.0])

    def test_create_competition_invalid_rounds(self):
        # Create a list of Runner objects
        runners = [Runner("Alice", 25, "Australia", 4.5, 4.0)]
        with self.assertRaises(CustomValueError):
            # Create a Competition object with an invalid number of rounds
            create_competition(runners, 0, [1.0, 2.0],[10.0, 15.0])
    
    def test_create_competition_invalid_rounds(self):
        """
        Test if the create_competition function can handle mismatched distance list lengths correctly.
        """
        # Create a list of Runner objects
        runners = [Runner("Alice", 25, "Botswana", 4.5, 4.0)]
        with self.assertRaises(CustomValueError):
            # Create a Competition object with mismatched distance list lengths
            create_competition(runners, 3, [1.0, 2.0],[10.0, 15.0, 20.0])
    
    def test_create_competition_mismatch_distances(self):
        """
        Test if the create_competition function can handle mismatched distance list lengths correctly.
        """
        # Create a list of Runner objects
        runners = [Runner("Alice", 25, "Botswana", 4.5, 4.0)]
        with self.assertRaises(CustomValueError):
            # Create a Competition object with mismatched distance list lengths
            create_competition(runners, 3,[1.0, 2.0],[10.0, 15.0, 20.0])
    

if __name__ == '__main__':
    unittest.main()
