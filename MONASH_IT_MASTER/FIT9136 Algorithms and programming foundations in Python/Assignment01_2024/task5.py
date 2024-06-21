# Paste Task 5's solution here
# DO NOT delete this line
from diceroll import roll_the_dice

# TODO: Task 5
colors = ["Red", "Blue", "Green", "White"]
num_players = int(input("Enter the number of players(1-4)"))
players = colors[:num_players]
positions = [0] * num_players

#Initialise the snakes and Ladders
snake_heads = [25, 44, 65, 76, 99]
snake_tails = [6, 23, 34, 28, 56]
ladder_bases = [8, 26, 38, 47, 66]
ladder_tops = [43, 39, 55, 81, 92]

def player_turn(player_name, player_position):
    diceroll = roll_the_dice()
    new_position = player_position + diceroll
    if new_position <= 100:
        if new_position in snake_heads:
            tail_position = snake_tails[snake_heads.index(new_position)]
            print(f"Player {player_name} stepped on a snake and is now position {tail_position}")
            player_position = tail_position
        elif new_position in ladder_bases:
            top_position = ladder_tops[ladder_bases.index(new_position)]
            print(f"player {player_name} climbed a ladder and is now in position {top_position}")
            player_position = top_position
        else:
            player_position = new_position
    else:
        print(f"Player {player_name}'s dice roll is ignored as it would move them beyond 100")
    return player_position

#Start Game
winner = None
while winner is None:
    for i in range(num_players):
        if winner is None:
            positions[i] = player_turn(players[i], positions[i])
            print(f"Player {players[i]} is in position {positions[i]}")
            if positions[i] == 100:
                winner = players[i]

#Announce the winner
if winner is not None:
    print(f"Player {winner} has reached 100 and is the winner!")
