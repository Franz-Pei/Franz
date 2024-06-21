# Paste Task 6's solution here
from diceroll import roll_the_dice
from typing import Tuple


def initialise_game() -> Tuple[list, list, list, list, list, list]:
    players = ["Red","Blue","Green","White"]
    positions = [0,0,0,0]
    snake_heads = [int(25),int(44),int(65),int(76),int(99)]
    snake_tails = [int(6),int(23),int(34),int(28),int(56)]
    ladder_bases = [int(8),int(26),int(38),int(47),int(66)]
    ladder_tops = [int(43),int(39),int(55),int(81),int(92)]
    return players ,positions ,snake_heads ,snake_tails ,ladder_bases ,ladder_tops


def get_num_players() -> int:
    flag = 0 #Used to control whether the number of players input is available
    while flag == 0:
        player_number = int(input("how many players you would like to play (minimum 1 and up to and including 4) :"))
        if player_number >= 5:
            print("too much player bro")
            player_number = 0
        elif player_number < 1:
            print("serious?")
            player_number = 0
        else:
            flag = 1
    return player_number


def play_game(players, positions, snake_heads, snake_tails, ladder_bases, ladder_tops) -> list:
    counter = 0 #Used to select players sequentially
    winner = None
    player_number = len(players)
    while winner == None:
        if counter < player_number:
            diceroll = roll_the_dice()
            next_position = positions[counter] + diceroll
            if next_position > 100:
                print("bonk",players[counter],"stuck at",positions[counter])
            elif next_position == 100:
                positions[counter] = next_position
                winner = players[counter]
                final_positions = positions
                print(players[counter],"gets to 100!")
                print("!!ATTENTION GUYS!!")
                break
            elif next_position in snake_heads:
                positions[counter] = snake_tails[snake_heads.index(next_position)]
                print("Player",players[counter],"stepped on a snake and is now in position",positions[counter])
            elif next_position in ladder_bases:
                positions[counter] = ladder_tops[ladder_bases.index(next_position)]
                print("Player",players[counter],"climbed a ladder and is now in position",positions[counter])
            else:
                positions[counter] = next_position
                print("Player",players[counter],"is in position",positions[counter])
            counter += 1
        else:
            counter = 0
    return final_positions


def pick_winner(positions:list) -> int:
    for position in positions:
        if position == 100:
            winner = positions.index(position)
        else:
            winner = -1
    return winner
    

def main():
    player_number = get_num_players()
    players, positions, snake_heads, snake_tails, ladder_bases, ladder_tops = initialise_game()
    players = players[:player_number] #Used to pass the player_number into the function.
    final_positions = play_game(players, positions, snake_heads, snake_tails, ladder_bases, ladder_tops)
    winner = pick_winner(final_positions)
    print(f"The winner is {players[winner]}!")

if __name__ == '__main__':
    main()





