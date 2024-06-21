import unittest
from custom_errors import *
from race import Race, ShortRace, MarathonRace
from runner import Runner

class TestRaces(unittest.TestCase):
    """Test cases for the Race classes."""

    def test_init(self):
        # Test successful initialization for short race
        short_race = ShortRace(0.5, [])
        self.assertEqual(short_race.race_type, 'short')
        self.assertEqual(short_race.distance, 0.5)
        self.assertEqual(short_race.runners, [])
        self.assertEqual(short_race.maximum_participants, 8)
        self.assertEqual(short_race.time_multiplier, 1.2)
        
        # Test successful initialization for marathon
        marathon_race = MarathonRace(42.0, [])
        self.assertEqual(marathon_race.race_type, 'long')
        self.assertEqual(marathon_race.distance, 42)
        self.assertEqual(marathon_race.runners, [])
        self.assertEqual(marathon_race.maximum_participants, 16)
        self.assertEqual(marathon_race.energy_per_km, 100)

        # Test invalid initializations
        with self.assertRaises(CustomTypeError):
            ShortRace("invalid", [])

        # Test invalid distance (negative)
        with self.assertRaises(CustomValueError):
            ShortRace(-1.0,[])

        # Test invalid runners (non-list/tuple)
        with self.assertRaises(CustomTypeError):
            ShortRace(0.5, "invalid")

        # Test invalid runner object in runners list
        with self.assertRaises(CustomTypeError):
            ShortRace(0.5, ["invalid"])

    def test_add_runner(self):
        """Test adding and removing runners from races."""
        # Create a short race and a runner
        short_race = ShortRace(0.5, [])
        runner = Runner('Lauren', 20, 'Australia', 2.4, 2.4)
        
        # Test adding a new runner
        short_race.add_runner(runner)
        self.assertIn(runner, short_race.runners)

        # Test exceeding maximum participants
        for i in range(short_race.maximum_participants - 1):
            short_race.add_runner(Runner(f'Runner {i}', 10, 'Azerbaijan', 3.2, 2.2))
        
        # Test adding an existing runner
        with self.assertRaises(RunnerAlreadyExistsError):
            short_race.add_runner(runner)

        # Test adding a runner to a full race
        short_race.maximum_participants = 2
        with self.assertRaises(RaceIsFullError):
            short_race.add_runner(Runner('Alice', 28, 'France', 4.8,4.2))

    def test_remove_runner(self):
        # Create a short race and a runner
        short_race = ShortRace(5.0, [])
        runner = Runner('Yaakov', 20, 'Switzerland', 2.4, 2.4)
        short_race.add_runner(runner)
        
        # Test removing an existing runner
        short_race.remove_runner(runner)
        self.assertNotIn(runner, short_race.runners)

        # Test removing a non-existing runner
        with self.assertRaises(RunnerDoesntExistError):
            short_race.remove_runner(Runner('Invalid', 25, 'Aruba', 3.1, 2.9))
    
    def test_conduct_race_short(self):
        # Create a short race and runners
        short_race = ShortRace(5.0, [])
        runner1 = Runner('John', 10, 'Australia', 2.8, 2.8)
        runner2 = Runner('Jane', 12, 'Australia', 4.2, 4.5)
        short_race.add_runner(runner1)
        short_race.add_runner(runner2)
        
        # Conduct the race and get the results
        results = short_race.conduct_race()
        
        # Check the results
        self.assertIsInstance(results, list, f"Results returned from short race's conduct race should be a list")
        list_of_racer_names = [x.name for x in [y[0] for y in results]]
        self.assertIn("John", list_of_racer_names, f"Runner John expected in results but not found")
        self.assertIn("Jane", list_of_racer_names, f"Runner Jane expected in results but not found")
        
        # Test for an empty race
        empty_race = ShortRace(2.0,[])
        self.assertEqual(empty_race.conduct_race(),[])

    def test_conduct_race_marathon(self):
        # Create a marathon race and runners
        marathon = MarathonRace(42.0, [])
        runner1 = Runner('John', 10, 'Australia', 2.8, 2.8)
        runner2 = Runner('Jane', 12, 'Australia', 3.2, 5.2)
        marathon.add_runner(runner1)
        marathon.add_runner(runner2)
        
        # Conduct the race and get the results
        results = marathon.conduct_race()
        
        # Check the results
        self.assertIsInstance(results, list, f"Results returned from short race's conduct race should be a list")
        list_of_racer_names = [x.name for x in [y[0] for y in results]]
        self.assertIn("John", list_of_racer_names, f"Runner John expected in results but not found")
        self.assertIn("Jane", list_of_racer_names, f"Runner Jane expected in results but not found")

         # Check for an empty race scenario
        empty_race = MarathonRace(26.2, [])
        self.assertEqual(empty_race.conduct_race(),[])

    def test_dnf_handling(self):
        # Create a marathon race and runners
        marathon = MarathonRace(42.0, [])
        runner1 = Runner('John', 10, 'Australia', 2.8, 2.8)
        runner2 = Runner('Jane', 12, 'Australia', 4.2, 4.5)
        marathon.add_runner(runner1)
        marathon.add_runner(runner2)
        
        # Conduct the race and get the results
        results = marathon.conduct_race()
        
        # Both runners should run out of energy and get 'DNF'
        self.assertIsInstance(results, list, f"Results returned from short race's conduct race should be a list")
        list_of_racer_times = [y[1] for y in results]
        self.assertIn("DNF", list_of_racer_times, f"Runner John should DNF but didn't")

class TestShortRace(unittest.TestCase):
    # Define test cases for ShortRace class
    def setUp(self):
        # Initialize ShortRace instance with runners and distance
        self.runner1 = Runner('John', 25, 'Belize', 5.0, 3.0)
        self.runner2 = Runner('Jane', 30, 'Canada', 4.0, 2.5)
        self.runners = [self.runner1, self.runner2]
        self.distance = 5.0
        self.race = ShortRace(self.distance, self.runners)
    
    def test_init(self):
        # Test initialization of ShortRace instance
        self.assertEqual(self.race.race_type, 'short')
        self.assertEqual(self.race.maximum_participants, 8)
    
    def test_conduct_race(self):
        # Test conducting ShortRace and checking results
        expected_time1 = (self.distance * 1000 / self.runner1.sprint_speed) * 1.2
        expected_time2 = (self.distance * 1000 / self.runner2.sprint_speed) * 1.2

        results = self.race.conduct_race()
        # Check if results contain 2 entries
        self.assertEqual(len(results), 2)
        # Check if first result entry corresponds to runner1
        self.assertEqual(results[0][0], self.runner1)
        # Check if first result time is calculated correctly
        self.assertEqual(results[0][1], expected_time1)
        # Check if second result entry corresponds to runner2
        self.assertEqual(results[1][0], self.runner2)
        # Check if second result time is calculated correctly
        self.assertEqual(results[1][1], expected_time2)

class TestMarathRace(unittest.TestCase):
    # Define test cases for MarathonRace class
    def setUp(self):
        # Initialize MarathonRace instance with runners and distance
        self.runner1 = Runner('John', 25, 'Belize', 5.2, 5.0)
        self.runner2 = Runner('Jane', 30, 'Canada', 6.6, 4.0)
        self.runners = [self.runner1, self.runner2]
        self.distance = 42.195
        self.race = MarathonRace(self.distance, self.runners)
    
    def test_init(self):
        # Test initialization of MarathonRace instance
        # Check if race type is set correctly
        self.assertEqual(self.race.race_type, 'long')
        # Check if maximum participants is set to 16
        self.assertEqual(self.race.maximum_participants, 16)
    
    def test_conduct_race(self):
        # Test conducting MarathonRace and checking results including 'DNF' handling
        results = self.race.conduct_race()
        # Check if results contain 2 entries
        self.assertEqual(len(results), 2)
        # Check if first result entry corresponds to runner1
        self.assertEqual(results[0][0], self.runner1)
        # Check if second result entry corresponds to runner2
        self.assertEqual(results[1][0], self.runner2)

        for runner, time in results:
            if time != 'DNF':
                # Calculate expected time for each runner
                expected_time = self.distance / runner.endurance_speed
                
                # Check if time is calculated correctly with a tolerance of 1
                self.assertAlmostEqual(time, expected_time, delta=1)
            else:
                # Check if the runner got 'DNF'
                self.assertEqual(time, 'DNF')

# Run the test cases if the script is executed directly
if __name__ == '__main__':
    unittest.main()

