from diceroll import roll_the_dice, special_roll
from helpers import generate_surprises


def initialise_game() -> dict:
    """
    Initialize the game by setting up the initial positions of players, snakes, and ladders.
    Returns a dictionary containing the positions of players, snakes, and ladders.
    """
    players = {
        "Red": 0,
        "Blue": 0,
        "Green": 0,
        "White": 0
    }
    snakes = {
        "25": 6,
        "44": 23,
        "65": 34,
        "76": 28,
        "99": 56
    }
    ladders = {
        "8": 43,
        "26": 39,
        "38": 55,
        "47": 81,
        "66": 92
    }
    game = {
        "players": players,
        "snakes": snakes,
        "ladders": ladders
    }
    return game


def get_num_players() -> int:
    """
    Get the number of players, which must be between 1 and 4.
    """
    while True:
        num_players = int(input("Enter the number of players (1-4): "))
        if 1 <= num_players <= 4:
            return num_players
        else:
            print("Invalid input. Please enter a number between 1 and 4.")

def play_game(game: dict) -> str:
    """
    The main game loop that controls the flow of the game.
    Parameters:
        game (dict): A dictionary containing the game state, including player, snake, and ladder positions.
    Returns:
        str: The name of the winning player.
    """
    surprise_tiles = generate_surprises().tolist()
    print(surprise_tiles)
    num_players = len(game["players"])
    player_names = list(game["players"].keys())
    current_player_index = 0
    skip_next_turn = []
    for i in range(0, num_players):
        skip_next_turn.append(False)

    while True:
        player_name = player_names[current_player_index]
        if skip_next_turn[current_player_index]:
            print(f"{player_name} skips rolling the dice this turn")
            skip_next_turn[current_player_index] = False
        else:
            roll_dice(player_name, game["players"][player_name], game, surprise_tiles, skip_next_turn, current_player_index)
            winner = pick_winner(game["players"])
            if winner:
                print(f"The winner is {winner}!")
                return winner
        current_player_index = (current_player_index + 1) % num_players
        #print("\n\n")

def roll_dice(player_name: str, player_position: int, game: dict, surprise_tiles: list, skip_next_turn: list, current_player_index: int):
    """
    Roll the dice and update the player's position.
    Parameters:
        player_name (str): The name of the player.
        player_position (int): The current position of the player.
        game (dict): The dictionary containing the game state.
        surprise_tiles (list): The list of surprise tile positions.
        skip_next_turn (list): The list indicating whether each player should skip their next turn.
        current_player_index (int): The index of the current player.
    """
    print(f"{player_name} old position is: {player_position}")
    diceroll = roll_the_dice()
    print(f"{player_name} rolled {diceroll}")
    new_position = player_position + diceroll
    player_turn(player_name, new_position, game, surprise_tiles, skip_next_turn, current_player_index)

def player_turn(player_name: str, new_position: int, game: dict, surprise_tiles: list, skip_next_turn: list, current_player_index: int):
    """
    Handle the player's turn, checking if they landed on a snake, ladder, or surprise tile, and update their position accordingly.
    Parameters:
        player_name (str): The name of the player.
        new_position (int): The new position of the player.
        game (dict): The dictionary containing the game state.
        surprise_tiles (list): The list of surprise tile positions.
        skip_next_turn (list): The list indicating whether each player should skip their next turn.
        current_player_index (int): The index of the current player.
    """
    if new_position <= 100:
        if str(new_position) in game["snakes"]:
            new_position = game["snakes"][str(new_position)]
            game["players"][player_name] = new_position
            print(f"Stepped on a snake, {player_name} updated position to: {new_position}")
            player_turn(player_name, new_position, game, surprise_tiles, skip_next_turn, current_player_index)
        elif str(new_position) in game["ladders"]:
            new_position = game["ladders"][str(new_position)]
            game["players"][player_name] = new_position
            print(f"Stepped on a ladder, {player_name} updated position to: {new_position}")
            player_turn(player_name, new_position, game, surprise_tiles, skip_next_turn, current_player_index)
        elif new_position in surprise_tiles:
            game["players"][player_name] = new_position
            print(f"Stepped on a surprise tile, {player_name} updated position to: {new_position}")
            surprise_dice(player_name, new_position, game, surprise_tiles, skip_next_turn, current_player_index)
        else:
            game["players"][player_name] = new_position
            print(f"{player_name} updated position to: {new_position}")

def surprise_dice(player_name, new_position, game, surprise_tiles, skip_next_turn, current_player_index):
    """
    Handle the surprise tile event.
    Parameters:
        player_name (str): The name of the player.
        new_position (int): The new position of the player.
        game (dict): The dictionary containing the game state.
        surprise_tiles (list): The list of surprise tile positions.
        skip_next_turn (list): The list indicating whether each player should skip their next turn.
        current_player_index (int): The index of the current player.
    """
    special_dice = special_roll()
    print(f"{player_name} rolled a surprise dice {special_dice}")
    if special_dice == 0:
        print("Roll normal dice again")
        roll_dice(player_name, new_position, game, surprise_tiles, skip_next_turn, current_player_index)
    elif special_dice == 1:
        i = (current_player_index+1) % len(skip_next_turn)
        skip_next_turn[i] = True
    elif special_dice == 2:
        for other_player, position in game["players"].items():
            if other_player != player_name:
                print(f"{other_player} old position is: {game['players'][other_player]}")
                game["players"][other_player] = max(0, position - 5)
                print(f"Move back 5 spaces, {other_player} position is: {game['players'][other_player]}")

def pick_winner(players) -> str:
    """
    Check if any player has reached the final position (100) and return the name of the winning player.
    Parameters:
        players (dict): A dictionary containing the positions of the players.
    Returns:
        str: The name of the winning player, or None if no player has won yet.
    """
    for player_name, position in players.items():
        if position == 100:
            return player_name
    return None


def turn_by_turn_gameplay(game):
    """
    Turn-based gameplay where players take turns rolling the dice and moving.
    Parameters:
        game (dict): The dictionary containing the game state.
    """
    surprise_tiles = generate_surprises().tolist()
    num_players = 2
    game["players"] = {player: game["players"][player] for player in list(game["players"].keys())[:num_players]}
    i = 0
    skip_next_turn = []
    names = list(game["players"].keys())
    for j in range(0, num_players):
        skip_next_turn.append(False)
    while True:
        name = names[i]
        x = input(f"{name}, please enter 'roll' or 'quit': ")
        if x == "quit":
            print(f"{name} player quits, game terminates!")
            break
        elif x == "roll":
            if skip_next_turn[i]:
                print(f"{name} skips rolling the dice this turn")
                skip_next_turn[i] = False
            else:
                roll_dice(name, game["players"][name], game, surprise_tiles, skip_next_turn, i)
                winner = pick_winner(game["players"])
                if winner:
                    print(f"The winner is {winner}!")
                    return winner
            i = (i + 1) % num_players
            print("\n")
        else:
            print("Invalid input, please enter again!")
            continue

def main():
    """
    The main function that initializes the game and starts the game loop.
    """
    game = initialise_game()
    num_players = get_num_players()
    game["players"] = {player: game["players"][player] for player in list(game["players"].keys())[:num_players]}
    play_game(game)

    game= initialise_game()
    # Play a turn by turn game
    turn_by_turn_gameplay(game)


if __name__ == '__main__':
    main()
