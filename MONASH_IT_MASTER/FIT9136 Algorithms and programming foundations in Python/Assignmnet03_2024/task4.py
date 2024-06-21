import readline
from competition import Competition
from runner import Runner


def create_runner(runner_name, runner_age, runner_country, sprint_speed, endurance_speed):
    """
    Create a new Runner object and return it.

    Args:
        runner_name (str): The name of the runner
        runner_age (int): The age of the runner
        runner_country (str): The country of the runner
        sprint_speed (float): The sprint speed of the runner
        endurance_speed (float): The endurance speed of the runner

    Returns:
        Runner: The created Runner object
    """
    return Runner(runner_name, runner_age, runner_country, sprint_speed, endurance_speed)


def create_competition(runners, rounds, distances_short, distances_long):
    """
    Create a new Competition object and return it.

    Args:
        runners (list): A list of runners participating in the competition
        rounds (int): The number of rounds in the competition
        distances_short (list): A list of distances for short races in each round
        distances_long (list): A list of distances for long races in each round

    Raises:
        CustomValueError: If the number of rounds is not positive

    Returns:
        Competition: The created Competition object
    """
    if rounds <= 0:
        raise CustomValueError("Number of rounds must be positive")
    return Competition(runners, rounds, distances_short, distances_long)


def main():
    # Ask the user to create runners (until they decide to add no more)
    runners = []

    # TODO: Take input for several runners until the user choses to quit
    while True:
        user_input = input("Add runner - name/age/country/sprint speed/marathon speed (blank line stops): ").strip()
        if not user_input:
            break

        try:
            # Split the input string by '/'
            tokens = user_input.split('/')
            if len(tokens) != 5:
                print('ERROR : Incorrect number of fields')
                continue

            # Parse the user input for runner information
            name, age, contry, sprint_speed, marathon_speed = (
                tokens[0].strip(), 
                int(tokens[1].strip()), 
                tokens[2].strip(),
                float(tokens[3].strip()),
                float(tokens[4].strip())
            )
            # Create and add a new runner object
            runners.append(create_runner(name, age, contry, sprint_speed, marathon_speed))
        except Exception as e:
            print(f"Error:{e}")

    print(f'Done creating runners!\nYou have created {len(runners)} runners!\n')

    # Ask the user to create a competition
    rounds = None
    distances_short = []
    distances_long = []

    while True:
        user_input = input("Create competition - rounds/sprint distances/marathon distances: ").strip()
        
        # If the user enters a blank line, prompt for input again
        if not user_input:
            print('You should input competition information')
            continue

        try:
            # Split the input string by '/'
            tokens = user_input.split('/')
            # Check if the number of tokens is 3
            if len(tokens) != 3:
                print('ERROR : Incorrect number of fields')
                continue

            # Parse the user input for competition information
            rounds, sprint_distances, marathon_distances =(
                 int(tokens[0].strip()), 
                 tokens[1].strip(), 
                 tokens[2].strip()
            )
            # Split the distance strings into lists
            sprint_distances = sprint_distances.split(',')
            marathon_distances = marathon_distances.split(',')
            
            # Initialize the distance lists
            # Create a list of zeros with length equal to the number of rounds
            distances_short = [0] * rounds
            # Create a list of zeros with length equal to the number of rounds
            distances_long = [0] * rounds

            # Flag to track input validity
            is_valid = True

            # Check if the length of the distance lists matches the number of rounds
            if len(sprint_distances) != rounds:
                print('ERROR : There must be as many sprint distances as there are rounds')
                is_valid = False
            if len(marathon_distances) != rounds:
                print('ERROR : There must be as many marathon distances as there are rounds')
                is_valid = False

            # If the input is invalid, continue to the next iteration of the loop
            if not is_valid:
                continue

            # Convert the distance strings to floats and store them in the distance lists
            for i, x in enumerate(sprint_distances):
                distances_short[i] = float(x.strip())
            for i, x in enumerate(marathon_distances):
                distances_long[i] = float(x.strip())

            # Create the competition object
            competition = create_competition(runners, rounds, distances_short, distances_long)
            print('Done creating competition!')
            break
        except Exception as e:
            print(f"Error:{e}")

    print(f'Done creating runners!\nYou have created {len(runners)} runners!\n')

    # Conduct the competition
    print('Executing the competition!')
    competition.conduct_competition()
    print('Competition concluded!')

    # Reveal the results!
    competition.print_leaderboard()



if __name__ == '__main__':
    main()

