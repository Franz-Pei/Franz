# Paste Task 1's solution here
"""
This program is Setting Up the Game Environment
"""

# Define a function to retrieve the player name from the player list at a specified index
def set_player(player_names: list, player_index: int) -> str:        
    player_name = player_names[player_index - 1] # Get the player name
    player_names.pop(player_index - 1) #Rrturn the player name
    return player_name # Return the player name

#Initialize the list pf player names
player_names = ["Red", "Blue", "Green", "White"]

# Player 1 Name
p1_name = set_player(player_names, 1) # Choosing an arbitary color for player1

# Player 1 Position
p1_position = 0 # Initialize Player 1 position initalize 0 

# Player 2 Name
p2_name = set_player(player_names, 2)

# Player 2 Position
p2_position = 0

# Snake Head Positions
snake_heads = [10, 25, 40, 55, 77]


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

# Print the position for Player 1
print(f"Player {p1_name} is in position {p1_position}")

# Print the position for Player 2
print(f"Player {p2_name} is in position {p2_position}")
