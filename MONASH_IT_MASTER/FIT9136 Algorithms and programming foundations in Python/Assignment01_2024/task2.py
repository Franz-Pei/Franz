# Paste Task 2's solution here
# DO NOT delete this line
from diceroll import roll_the_dice

def set_player(player_name: list, player_index: int) -> str:
    return player_name[player_index - 1]
# Copy and paste the work from Task 1 here 
player_names = ["Red", "Blue", "Green", "White"]
# Player 1 Name
p1_name = set_player(player_names, 1) # Choosing an arbitary color for player1

# Player 1 Position
p1_position = 0 # Player 1 position initalize 0 

# Player 2 Name
p2_name = set_player(player_names, 1)

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

print("Snake-head position: ", snake_heads)
print("Snake-tail position: ", snake_tails)
print("Ladder-base position: ", ladder_bases)
print("Ladder-top position: ", ladder_tops)

# Task 2 begins here 
# Roll the dice for the first player
diceroll = roll_the_dice()

# Write the logic to move the first player
if p1_position + diceroll <= 100:
    p1_position += diceroll

# Roll the dice for the second player
diceroll= roll_the_dice()

# Write the logic to move the second player
if p2_position + diceroll <= 100:
    p2_position += diceroll

# Print the position of the first player
print(f"Player {p1_name} is in position {p1_position}")

# Print the position of the second player
print(f"Player {p2_name} is in position {p2_position}")
