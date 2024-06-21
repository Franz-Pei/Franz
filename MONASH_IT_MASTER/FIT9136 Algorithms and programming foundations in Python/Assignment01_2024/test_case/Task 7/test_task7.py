from task7 import play_game
import numpy as np
def play_game_four_players():
    """Test Play Game 1
    We expect White to win and the final locations to be:
    {'Red': 89, 'Blue': 68, 'Green': 91, 'White': 100}
    """
    np.random.seed(70)

    game_1 = {
        'players': {"Red": 0, "Blue": 0, "Green": 0, "White": 0},
        'snakes': {'25': 6, '44': 23, '65': 34, '76': 28, '99': 56},
        'ladders': {'8': 43, '26': 39, '38': 55, "47": 81, "66": 92}
    }

    your_winner = play_game(game_1)
    print()
    print(f"The winner of my game is {your_winner}")
    print(f"The final locations of the players are {game_1['players']}")

def play_game_three_players():
    """Test Play Game 2
        We expect Green to win and the final locations to be:
        {'Red': 97, 'Blue': 98, 'Green': 100}
    """
    np.random.seed(100)

    game_2 = {
        'players': {"Red": 0, "Blue": 0, "Green": 0},
        'snakes': {'25': 6, '44': 23, '65': 34, '76': 28, '99': 56},
        'ladders': {'8': 43, '26': 39, '38': 55, "47": 81, "66": 92}
    }
    your_winner = play_game(game_2)
    print()
    print(f"The winner of my game is {your_winner}")
    print(f"The final locations of the players are {game_2['players']}")

play_game_three_players()

