import numpy as np
from task6 import play_game

def test_play_game():
    """
    Three player game expecting "Blue" to win 
    and have the final positions:    [69, 100, 35]
    """
    np.random.seed(1)

    players = ["Red", "Blue", "Green"]
    positions = [0, 0, 0]
    snake_heads = [25, 44, 65, 76, 99]
    snake_tails = [6, 23, 34, 28, 56]
    ladder_bases = [8, 26, 38, 47, 66]
    ladder_tops = [43, 39, 55, 81, 92]
    final_positions = play_game(players, positions, snake_heads, snake_tails, ladder_bases, ladder_tops)
    


def test_play_game_2():
    """
    Four player game expecting "Red" to win 
    and have the final positions:    [100, 98, 80, 98]
    """
    np.random.seed(30)

    players = ["Red", "Blue", "Green", "White"]
    positions = [0, 0, 0, 0]
    snake_heads = [25, 44, 65, 76, 99]
    snake_tails = [6, 23, 34, 28, 56]
    ladder_bases = [8, 26, 38, 47, 66]
    ladder_tops = [41, 37, 53, 72, 98]
    final_positions = play_game(players, positions, snake_heads, snake_tails, ladder_bases, ladder_tops)
    

test_play_game_2()
