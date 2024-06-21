import unittest
from competition import Competition
from runner import Runner
from custom_errors import CustomTypeError, CustomValueError
from race import Race, ShortRace, MarathonRace


class SimpleShortRace(ShortRace):
    """A simple race implementation to simulate ShortRace"""

    def __init__(self, distance, runners):
        super().__init__(distance, runners)

    def conduct_race(self):
        """
        Simulate conducting a short race by sorting runners based on their sprint speed.

        Returns:
            list: A list of tuples containing (runner, time_taken) sorted by time_taken.
        """
        # Return a sorted list of runners based on a simple criterion (e.g., speed)
        return sorted(
            [(runner, self.distance / runner.sprint_speed) for runner in self.runners],
            key=lambda x: x[1]
        )


class SimpleMarathonRace(MarathonRace):
    """A simple race implementation to simulate MarathonRace"""

    def __init__(self, distance, runners):
        super().__init__(distance, runners)

    def conduct_race(self):
        """
        Simulate conducting a marathon race by sorting runners based on their endurance speed.

        Returns:
            list: A list of tuples containing (runner, time_taken) sorted by time_taken.
        """
        # Return a sorted list of runners based on a simple criterion (e.g., speed)
        return sorted(
            [(runner, self.distance / runner.endurance_speed) for runner in self.runners],
            key=lambda x: x[1]
        )


class TestCompetition(unittest.TestCase):

    def setUp(self):
        self.runners = [
            Runner("Elijah", 19, 'Australia', 6.4, 5.2),
            Runner("Rupert", 67, 'Botswana', 2.2, 1.8),
            Runner("Phoebe", 12, 'France', 3.4, 2.8),
            Runner("Lauren", 13, 'Iceland', 4.4, 5.1),
            Runner("Chloe", 21, 'Timor-Leste', 5.2, 1.9)
        ]

        # Set up a competition instance
        self.distances_short = [0.5, 0.6, 1.2]
        self.distances_marathon = [4.0, 11.0, 4.5]
        self.competition = Competition(self.runners, 3, self.distances_short, self.distances_marathon)

    def test_init_valid_input(self):
        # Assert that the competition instance is properly initialized
        self.assertEqual(self.competition.runners, self.runners)
        self.assertEqual(self.competition.rounds, 3)
        self.assertEqual(self.competition.distances_short, self.distances_short)
        self.assertEqual(self.competition.distances_marathon, self.distances_marathon)
        self.assertIsNotNone(self.competition.leaderboard)

    def test_init_invalid_input(self):
        """Test the initialization of the Competition instance with invalid inputs."""
        # Test invalid runners list
        with self.assertRaises(CustomTypeError):
            Competition("not a list", 3, self.distances_short, self.distances_marathon)

        # Test invalid rounds
        with self.assertRaises(CustomValueError):
            Competition(self.runners, 0, self.distances_short, self.distances_marathon)

        with self.assertRaises(CustomValueError):
            Competition(self.runners, 4, self.distances_short, self.distances_marathon)

        # Test invalid distance lists
        with self.assertRaises(CustomTypeError):
            Competition(self.runners, 3, "not a list", self.distances_marathon)

        with self.assertRaises(CustomTypeError):
            Competition(self.runners, 3, self.distances_short, "not a list")

    def test_conduct_competition(self):
        """Test the conduct_competition method."""
        # Conduct the competition
        leaderboard = self.competition.conduct_competition()

        # Assert the leaderboard is updated correctly
        # This will depend on the input results and implementation of update_leaderboard
        # Example expected leaderboard assuming input data and round outcomes
        expected_leaderboard = {
            '1st': ('Elijah', 20),
            '2nd': ('Lauren', 12),
            '3rd': ('Chloe', 11),
            '4th': ('Phoebe', 7),
            '5th': ('Rupert', 0)}
        self.competition.print_leaderboard()
        self.assertEqual(leaderboard, expected_leaderboard,
                         f"Invalid leaderboard. Check points logic {expected_leaderboard}")

    def test_conduct_race(self):
        """Test the conduct_race method."""
        # Use real race classes for testing
        short_race = SimpleShortRace(0.5, self.runners)
        marathon_race = SimpleMarathonRace(4.0, self.runners)

        # Conduct races
        short_result = self.competition.conduct_race(short_race)
        marathon_result = self.competition.conduct_race(marathon_race)

        # Verify that results are sorted by time correctly
        # Assuming lower times indicate higher rank
        self.assertLess(short_result[0][1], short_result[1][1])  # 1st should be faster than 2nd
        self.assertLess(marathon_result[0][1], marathon_result[1][1])  # 1st should be faster than 2nd

    def test_update_leaderboard(self):
        """Test the update_leaderboard method."""
        # Define test results for updating the leaderboard
        race_results = [(self.runners[0], 10.0), (self.runners[1], 12.0), (self.runners[2], 14.0)]
        self.competition.update_leaderboard(race_results)

        # Validate the leaderboard
        expected_leaderboard = {
            '1st': ('Elijah', 2),
            '2nd': ('Rupert', 1),
            '3rd': ('Phoebe', 0),
            '4th': None,
            '5th': None
        }
        self.assertEqual(self.competition.leaderboard, expected_leaderboard)

    def test_init_empty_runners(self):
        """Test the initialization of the Competition instance with an empty list of runners."""
        competition = Competition([], 2, [1.0, 2.0], [10.0, 15.0])
        self.assertEqual(len(competition.runners), 0)
        self.assertEqual(len(competition.leaderboard), 0)
    
    def test_init_single_runner(self):
        """Test the initialization of the Competition instance with a single runner."""
        runner = Runner("Alice", 25, "Australia", 4.5, 4.0)
        competition = Competition([runner], 2, [1.0, 2.0],[10.0, 15.0])
        self.assertEqual(len(competition.runners), 1)
        self.assertEqual(len(competition.leaderboard), 1)

    def test_conduct_competition_empty_runners(self):
        competition = Competition([], 2, [1.0, 2.0], [10.0, 15.0])
        leaderboard = competition.conduct_competition()
        self.assertEqual(leaderboard,{})

    def test_conduct_competition_single_round(self):
        """Test the conduct_competition method with a single round."""
        runners = [Runner("Alice", 25, "Australia", 4.5, 4.0), Runner("Bob", 30, "Canada", 5.0, 4.2)]
        competition = Competition(runners, 1, [1.0], [10.0])
        leaderboard = competition.conduct_competition()
        expected_leaderboard = {'1st': ('Bob', 2), '2nd':('Alice', 0)}
        self.assertEqual(leaderboard, expected_leaderboard)
    
    def test_conduct_race_empty_race(self):
        """Test the conduct_race method with an empty race."""
        competition = Competition([], 2, [1.0, 2.0], [10.0, 15.0])
        short_race = ShortRace(1.0, [])
        result = competition.conduct_race(short_race)
        self.assertEqual(result,[])
    
    def test_add_runner_to_competition(self):
        new_runner = Runner("Alice", 25, "Australia", 6.0, 5.0)
        initial_count = len(self.competition.runners)
        self.competition.runners.append(new_runner)
        self.assertEqual(len(self.competition.runners), initial_count + 1)
        self.assertIn(new_runner, self.competition.runners)
    
    def test_print_leaderrboard(self):
        self.competition.leaderboard ={
            '1st':('Elijah', 10),
            '2nd':("Lauren", 8),
            '3rd':('Repert', 4),
            '5th':('Chloe', 2)
        }
    
    def test_remove_runner_from_competition(self):
         # Get the first runner from the list
        runner_to_remove = self.runners[0]
        # Remove the runner from the competition
        self.competition.runners.remove(runner_to_remove)
         # Assert that the runner is no longer in the competition
        self.assertNotIn(runner_to_remove, self.competition.runners)
    
    def test_conduct_competition_with_no_runners(self):
        empty_competition = Competition([], 3, self.distances_short, self.distances_marathon)
        # Conduct the competition
        leaderboard = empty_competition.conduct_competition()
        self.assertEqual(leaderboard,{})
    
    def test_conduct_short_race_with_tied_runners(self):
        # Create a runner instance
        runner1 = Runner("Runner1", 20, 'Australia', 6.0, 5.0)
        runner2 = Runner("Runner2", 22, 'Australia', 6.0, 4.9)
        short_race = SimpleShortRace(0.5,[runner1, runner2])
        result = short_race.conduct_race()
        # Verify that the time_taken is the same for tied runners
        self.assertEqual(result[0][1], result[1][1])

    
    def test_conduct_marathon_race_with_exhausted_runner(self):
        exhausted_runner = Runner("Exhausted", 30, 'Australia', 2.3, 2.0)
        marathon_race = SimpleMarathonRace(4.0,[exhausted_runner])
        result = marathon_race.conduct_race() 
        #Create a marathon race with the exhausted runner
        expected_finish_time = 4.0 / exhausted_runner.endurance_speed
        # Assert that the finish time is as expected
        self.assertEqual(result[0][1],expected_finish_time)
    
    def test_update_leaderboard_with_tied_results(self):
        race_results = [(self.runners[0], 10.0), (self.runners[1], 10.0),(self.runners[2], 12.0)]
        self.competition.update_leaderboard(race_results)
         # Assert that the first place runner is Elijah
        self.assertEqual(self.competition.leaderboard['1st'][0],'Elijah')
        # Assert that the second place runner is Rupert
        self.assertEqual(self.competition.leaderboard['2nd'][0],'Rupert')
        # Assert that the third place runner is Phoebe
        self.assertEqual(self.competition.leaderboard['3rd'][0],'Phoebe')
   
if __name__ == '__main__':
    unittest.main()

