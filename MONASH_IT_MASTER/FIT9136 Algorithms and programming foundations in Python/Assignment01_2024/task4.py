# Paste Task 4's solution here
# DO NOT delete this line
from diceroll import roll_the_dice

# Initialise the players
p1_name = "Red"
p1_position = 0
p2_name = "Blue"
p2_position = 0
# Initialise the snakes and ladders
snake_heads = [25, 44, 65, 76, 99]
snake_tails = [6, 23, 34, 28, 56]
ladder_bases = [8, 26, 38, 47, 66]
ladder_tops = [43, 39, 55, 81,92]
# Commence the game
winer = 0
while winer == 0:
  
    diceroll = roll_the_dice()
    p1_nextposition = p1_position+diceroll
    if p1_nextposition in snake_heads: 
        p1_position = snake_tails[snake_heads.index(p1_nextposition)]
        print("Player Red stepped on a snake and is now in position",p1_position)
    elif p1_nextposition in ladder_bases: 
        p1_position = ladder_tops[ladder_bases.index(p1_nextposition)]
        print("Player Red climbed a ladder and is now in position",p1_position)
    elif p1_nextposition > 100:
        p1_nextposition = p1_position
        print("bunk! Red stuck at",p1_position)
    elif p1_nextposition == 100:
        p1_position = p1_nextposition
        winner = "Red"
        break
    else:
        p1_position = p1_nextposition

    diceroll = roll_the_dice()
    p2_nextposition = p2_position+diceroll
    if p2_nextposition in snake_heads: 
        p2_position = snake_tails[snake_heads.index(p2_nextposition)]
        print("Player Blue stepped on a snake and is now in position",p2_position)
    elif p2_nextposition in ladder_bases: 
        p2_position = ladder_tops[ladder_bases.index(p2_nextposition)]
        print("Player Blue climbed a ladder and is now in position",p2_position)
    elif p2_nextposition > 100:
        p2_nextposition = p2_position
    elif p2_nextposition == 100:
        p2_position = p2_nextposition
        winner = "Blue"
        break
    else:
        p2_position = p2_nextposition
    
    print("Player Red is in position",p1_position,"\nPlayer Blue is in position",p2_position)

# Announce the winner
print(f"Player {winner} has reached 100 and is the winner!")


