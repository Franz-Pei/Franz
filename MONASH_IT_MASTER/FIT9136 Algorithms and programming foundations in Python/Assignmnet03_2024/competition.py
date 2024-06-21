from race import *
from runner import Runner


class Competition:
    """
    Represents a running competition with multiple rounds of short and marathon races.
    """
    MAX_ROUNDS = 3

    def __get_ordinal(self, n):
        # Helper function to return the ordinal string for a given integer
        # NOTE : You can ignore this method, you don't need to comment
        # or do any checks on it whatsoever
        suffixes = {1: 'st', 2: 'nd', 3: 'rd'}
        if 11 <= n % 100 <= 13:
            suffix = 'th'
        else:
            suffix = suffixes.get(n % 10, 'th')
        return f"{n}{suffix}"

    def __init__(self, runners, rounds, distances_short, distances_marathon):
        """
        Initializes a Competition object with the given parameters.

        Args:
            runners (list): A list of Runner objects participating in the competition.
            rounds (int): The number of rounds in the competition.
            distances_short (list): A list of distances for short races in each round.
            distances_marathon (list): A list of distances for marathon races in each round.

        Raises:
            CustomTypeError: If distances_short or distances_marathon is not a list or tuple.
            CustomTypeError: If any runner in the runners list is not a Runner object.
            CustomValueError: If rounds is not a positive integer or exceeds the maximum allowed rounds.
            CustomValueError: If the lengths of distances_short and distances_marathon do not match the number of rounds.
        """
        self.runners = runners
        self.rounds = rounds
        self.distances_short = distances_short
        self.distances_marathon = distances_marathon
        # Initialize leaderboard
        self.leaderboard = {}

        # Assign None to each position in the leaderboard
        for i in range(1, len(self.runners) + 1):
            self.leaderboard[self.__get_ordinal(i)] = None

        # Check and set attributes
        if not isinstance(distances_short, (list, tuple)) or not isinstance(distances_marathon, (list, tuple)):
            raise CustomTypeError(f"Invalid distance type: distances must be a list.")

        for runner in runners:
            if not isinstance(runner, Runner):
                raise CustomTypeError(f"Invalid runner type:{type(runners)}.runner must be a Runner.")

        if rounds <= 0 or rounds > self.MAX_ROUNDS:
            raise CustomValueError(
                f"Invalid rounds:{rounds}. rounds must be an integer between 1 and {self.MAX_ROUNDS}.")

        if len(distances_short) != rounds or len(distances_marathon) != rounds:
            raise CustomValueError(
                f"Invalid distances. distances must equals {rounds}.")

        # Initialize points for each runner to -1
        self.points = {}
        for x in runners:
            self.points[x] = -1

    def conduct_competition(self):
        """
        Conducts the competition by running short and marathon races for each round.

        Returns:
            dict: The final leaderboard with runner names and their points.
        """
        for runner in self.runners:
            self.points[runner] = 0

        current_round = 1
        while current_round <= self.rounds:
            short_distance = self.distances_short[current_round - 1]
            
            # Get the distance for the marathon race in this round
            marathon_distance = self.distances_marathon[current_round - 1]
            # Conduct the short race with all runners
            short_race = ShortRace(short_distance, self.runners)
            short_result = self.conduct_race(short_race)
            self.update_leaderboard(short_result)

            # Conduct the Marathon race with all runners
            marathon_race = MarathonRace(marathon_distance, self.runners)
            marathon_result = self.conduct_race(marathon_race)
            self.update_leaderboard(marathon_result)

            # Recover energy for all DNF runners
            for runner in self.runners:
                if runner.energy <= 0:
                    runner.recover_energy(1000)
            current_round += 1
        return self.leaderboard

    def conduct_race(self, race):
        """
        Conducts a given race and returns the results.

        Args:
            race (Race): The race object to be conducted.

        Returns:
            list:The results of the race.
        """
        return race.conduct_race()

    def update_leaderboard(self, results):
        """
        Updates the leaderboard based on the results of a race.

        Args:
            results (list): The results of the race.
        """
        sorted_result = sorted(results, key=lambda x: x[1])
        leaderboard_keys = list(self.leaderboard.keys())

        for i, runner_time in enumerate(sorted_result):
            # If the runner did not DNF
            if runner_time[1] != 'DNF':
                # If the runner has no points yet
                if self.points[runner_time[0]] == -1:
                    self.points[runner_time[0]] = 0
                # Assign points based on position
                self.points[runner_time[0]] += len(results) - (i + 1)

        # Update the leaderboard with runner names and points
        for i, x in enumerate(
                sorted(sorted(self.points.items(), key=lambda y: y[0].name), key=lambda y: y[1], reverse=True)):
            k = None if x[1] == -1 else (x[0].name, x[1])
            self.leaderboard[leaderboard_keys[i]] = k  # (x[0].name, x[1])

    def print_leaderboard(self):
        """
        Prints the final leaderboard with runner names and points.
        """
        print("Leaderboard\n\n")
        for key, value in self.leaderboard.items():
            print(f"{key} - {value[0]} ({value[1]})")


if __name__ == '__main__':
    # Example usage
    runners = [
        Runner("Elijah", 19, 'Australia', 6.4, 5.2),
        Runner("Rupert", 67, 'Botswana', 2.2, 1.8),
        Runner("Phoebe", 12, 'France', 3.4, 2.8),
        Runner("Lauren", 13, 'Iceland', 4.4, 5.1),
        Runner("Chloe", 21, 'Timor-Leste', 5.2, 1.9)
    ]

    competition = Competition(runners, 3, [0.5, 0.6, 1.2], [4.0, 11.0, 4.5])
    _ = (competition.conduct_competition())
    competition.print_leaderboard()

