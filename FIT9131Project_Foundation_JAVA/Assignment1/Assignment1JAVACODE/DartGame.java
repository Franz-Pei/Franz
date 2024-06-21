/**
*The DartGame class respresents a game of darts between a player and Dart Vader.
*The Game consists of the player throwing a certain number of darts and scoring points based on where they land on the dart board.
*Dart Vader also throws darts and scores points
*This class includes a playerGame method that runs the game and displays the results.
*@author Ziqi Pei
*@version 6.2
*/
import java.util.Scanner;

public class DartGame 
{
/**
*Determines how many points a player earns based on where their dart lands on the dart board.
*
*@param number the distance from the center of the dart board to where the dart landed
*@return the number of the points earned by the player for the dart throw
*/

    public int score(int number)
    {

        if(number <= (Math.PI / 4 * 100 * 0.04)) {
            //Dart landed in the black area
            System.out.println("The dart landed in the black area! Score:5");
            return 5;
        } else if (number <= (Math.PI/4 * 100 * 0.16)) {
            //Dart landed in the yellow area
            System.out.println("The dart landed in the yellow area! Score:2");
            return 2;
        } else if (number <= (Math.PI/4 * 100 * 0.8)) {
            //Dart landed in the blue area
            System.out.println("The dart landed in the blue area! Score: 1");
            return 1; 
        } else {
            //Dart landed in the gray area or missed the board
            System.out.println("The dart landed in the grey area! missed the board! Score: 0");
            return 0;
        }
    }

/**
*Runs the game of dart between the player and Dart Vader.
*Prompts the player for their name, the number of darts they want to throw,and then runs the game and displays the results.
*/
    public void playGame() 
    {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Welcome to the Dart Game");
        System.out.println("=============");

        //Get player name
        String playerName = "";
        while (playerName.equals(""))
        {
            System.out.print("Enter player name: ");
            playerName = scanner.nextLine();
            if (playerName.equals("")){
                //Player name must be black
                System.out.println("Player name must not be blank!");
            }else if (!playerName.matches("[a-z]{1,8}"))//regular expression
            //Player name must only contain letters
            {   System.out.println("Player name must only contain letters!Player name must have no more than 8 characters!");
                playerName = "";
            }
        }

        //Get number of darts to throw
        int numDarts = 0;
        while (numDarts < 1 || numDarts > 5) {
            System.out.println("How many darts?");
            String input = scanner.nextLine();

            try{
                numDarts = Integer.parseInt(input);
            } catch (NumberFormatException e) {
                System.out.println("Invalid input: please enter a number.");
                continue;
            }
            if (numDarts < 1 || numDarts >5){
                System.out.println("Invalied input : number must be between 1 and 5");
                // Invalid input: number 1-5
            }
            
        }System.out.println("Let's play");

/**
*Default constructor
*/
         int playerScore = 0;
         int dartThrowScore = 0;
        
         //Loop through the number of darts specified
         for (int i =1; i <= numDarts; i++){
            
            //Print the dart number and a line to separate
            System.out.println("Dart#" + i);
            System.out.println("========");

            //Ask for player's input to throw the dart or abandom the game
            System.out.println(playerName +"'s turn");
            System.out.println("Press any key to throw the dart,or 'X' to abandom this game:");
            String input = scanner.nextLine().trim();

            //If player abandom the game,end the game and declare DartVader as the winner
            if(input.equalsIgnoreCase("X"))
            {
                System.out.println("Abandoning game...");
                System.out.println("DartVader win");
                return;
            }

            // Throw the dart for the player and calculate the core for the round
            DartThrow dartThrow = new DartThrow(1, 100);
            int playerScoreThisRound = score(dartThrow.throwDart());

            //Print the player's score for this round and add it to the total score
            System.out.println("score for this round: " + playerScoreThisRound);
            playerScore += playerScoreThisRound;
            System.out.println("Total score: " + playerScore);

            //Print Dart Vader's turn
            System.out.println("Dart vander's turn");
            if((int)(Math.random()*99) + 1 <= 5){
                System.out.println("Abandoming game...");
                System.out.println("Player win");
                return;
            }

            //Throw the dart for Dart Vader and calculate the score for this round
            int dartVaderScoreThisRound = score(dartThrow.throwDart());

/** 
* Accessor for the dart throw score.
* @return The dart throw score.
*/
            System.out.println("Score for this round: " + dartVaderScoreThisRound);
            dartThrowScore += dartVaderScoreThisRound;
            System.out.println("Total score: " + dartThrowScore);
         }

/**
* Mutator for the dart throw score.
*@param dartThrowScore The dart throw score.
*/
         System.out.println("Game result");
         System.out.println("=========");
         System.out.println(playerName + "'s score is" + playerScore);
         System.out.println("Dart Vader's score is " + dartThrowScore);
        
         //Declare the winner based on the acore
         if(playerScore > dartThrowScore){
            System.out.println(playerName + " has won this game"); 
         } else if (dartThrowScore > playerScore) {
            System.out.println("Dart Vader has won this game");
         } else {
            System.out.println("The game is a tie");
         }
    }

         //Main method to start the game and play again if desired
    public static void main(String[] args) {

        //Create a new instance of the game
        DartGame game = new DartGame();

        //Create a scanner to read user input
        Scanner scanner = new Scanner(System.in);

        //Variable to keep track of user input and if the game should be player again
        String line = "";
        char c;
        boolean playAgain;//ariable to store if the user wants to play again
        do
        {
            game.playGame();//start a new game
            //ask the user if they want to play again
         System.out.print("Do you want to play again (Y/N)?");
            do
            {
            System.out.println("input:");
            line = scanner.nextLine().toLowerCase();
            if(line.length() !=1)
            {
                System.out.println("Invalid input: please enter a valid character.");
                continue;//if the input is not 'y','n',or'N',promot the user again
            }
            c =line.charAt(0);
            if(c != 'y' && c != 'n' && c != 'N')
            {
                System.out.println("Invalid input: please enter 'y' or 'n'.");
                continue;
            }
            break;//if the input is valid,exit the loop
        }while(true);
            playAgain =(c == 'y'||c == 'Y');//set the value of playagain based on the user's input
        } while (playAgain);
         
        System.out.println("Goodbye");//end the program
    }
}

