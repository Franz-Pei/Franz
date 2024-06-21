# Paste Task 3's solution here
# Copy and paste everything from Task2
from diceroll import roll_the_dice

def player_turn(player_position: int, snake_heads: list, snake_tails: list, ladder_bases: list, ladder_tops: list) -> int:
    if player_position in snake_heads:
        return snake_tails[snake_heads.index(player_position)]
    if player_position in ladder_bases:
        return ladder_tops[ladder_bases.index(player_position)]
    return player_position

def set_player(player_names: list, player_index: int) -> dict:
    return player_names[player_index - 1]
player_names = ["Red", "Blue", "Green", "White"]

# Player 1 Name
p1_name = set_player(player_names, 1) # Choosing an arbitary color for player1

# Player 1 Position
p1_position = 0 # Player 1 position initalize 0 

# Player 2 Name
p2_name = set_player(player_names, 2)

# Player 2 Position
p2_position = 0

# Snake Head Positions
snake_heads = [10, 25, 40, 55, 70]

# Snake Tail Positions
snake_tails = [5, 20, 35, 50, 65]

# Ladder Base Positions
ladder_bases = [8, 22, 37, 60, 85]

# Ladder Tops Positions
ladder_tops = [12, 28, 45, 75, 95]

# Task 2 begins here 
while True:
    # Roll the dice for the first player    
    diceroll = roll_the_dice()

    # Write the logic to move the first player
    if p1_position + diceroll <= 100:
        p1_position += diceroll
        # Check if player 1 is either on a snake head or ladder Base
        p1_position = player_turn(p1_position, snake_heads, snake_tails, ladder_bases, ladder_tops)
        # Print the position of player 1
        print(f"Player {p1_name} is in position {p1_position}")
        if p1_position == 100:
            print(f"{p1_name} wins")
            break

    # Roll the dice for the second player
    diceroll= roll_the_dice()

    # Write the logic to move the second player
    if p2_position + diceroll <= 100:
        p2_position += diceroll
        # Check if player 2 is either on a snake head or ladder Base
        p2_position = player_turn(p2_position, snake_heads, snake_tails, ladder_bases, ladder_tops)
        # Print the position of player 2
        print(f"Player {p2_name} is in position {p2_position}")
    if p2_position == 100:
        print(f"{p2_name} wins")
        break



