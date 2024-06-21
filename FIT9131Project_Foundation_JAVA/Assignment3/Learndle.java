/**
 * The Learndle class respresents a word guessing game where the player attempts to guess a hidden word.
 * The game is played with a limited number of  attempts based on the length of the hidden word.
 * The player is prompted to enter their name, and the game generates a hidden word for them to guess.
 * After each game, the player has the option t play again.
 * The class alse calculates and displays the player's score.
 * The class includes methods for displaying Gameinformation,calculate scores, and running the game.
 *
 * @auther[Ziqi Pei]
 * @version 25.0
 */

import java.util.Scanner;

public class Learndle
{
    //Field
    private Player player;
    private int maxAttempts;
    private int maxScore;
    private String hiddenWord;
    private String guessWord;
    private int finalScore;
    private Scanner scanner;
    
    /**
     * Default construcor for the leaendle game. Initializes the game with default values.
     */
    public Learndle()
    {
        this.player = new Player();
        this.maxAttempts = 1;
        this.maxScore = 0;
        this.hiddenWord = "";
        this.guessWord = "";
        this.scanner = new Scanner(System.in);
        
    }
    
    /**
     * Constructor to create a Learndle game with specified parameters.
     *
     * @param player The player object
     * @param maxAttempts The maximum number of atttempts allowed.
     * @param maxScore The maximum score achieved.
     * @param hiddeWord The hidden word that the player needs to guess.
     * @param guessWord The player's guess for the hidden word.
     * @param finalScore The final score achieved in the game.
     */
    public Learndle(Player player, int maxAttempts, int maxScore,String hiddeWord,String guessWord,int finalScore)
    {
        this.player = player;
        this.maxAttempts = maxAttempts;
        this.maxScore = maxScore;
        this.hiddenWord = hiddeWord;
        this.guessWord = guessWord;
    }

    /**
     * Accessor method to retrieve the player object.
     *
     * @return The player object.
     */
    public Player getPlayer()
    {
        return player;
    }

    /**
     * Accessor method to retrive the maximum of attempts allowed.
     *
     * @return The maximum number of attempts.
     */
    public int getMaxAttempts()
    {
        return maxAttempts;
    }

    /**
     * Accessor method to retrive the maximum score achieved.
     *
     * @return The maximum score.
     */
    public int getMaxScore()
    {
        return maxScore;
    }

    /**
     * Accessor method to retrieve the hidden word that the player needs to guess.
     *
     * @return The hidden word.
     */
    public String getHiddenWord()
    {
        return hiddenWord;
    }

    /**
     * Accessor method to retrieve the final score achieved in the game.
     *
     * @return The final score.
     */
    public int getFinalScore()
    {
        return finalScore;
    }

    /**
     * Mutator method to set the player object.
     *
     * @param player The player onject to be set.
     */
    public void setPlayer(Player player)
    {
        this.player = player;
    }

    /**
     * Mutator method to set the maximum number of attempts allowed.
     *
     * @param maxAttempts The maximum number of attempts to be set.
     */
    public void setMaxAttempts(int maxAttempts)
    {
        this.maxAttempts = maxAttempts;
    }

    /**
     * Mutator method to set the maximum score achieved.
     *
     * @param maxScore The maximum score to be set.
     */
    public void setMaxScore(int maxScore)
    {
        this.maxScore = maxScore;
    }

    /**
     * Mutator method to set the final score achieved in the game.
     *
     * @param finalScore The final score to be set.
     */
    public void setFinalScore(int finalScore)
    {
        this.finalScore = finalScore;
    }
    
    /**
     * Display a welcome message at the begining of the game.
     * Also,prompts the player to enter their name.
     */
    public void display()
    {
        System.out.println("Welcome to Learndle!");
        System.out.println("====================");
        requestPlayerEnterName();
    }

    /**
     * Display the maximum score acheived, and if a new high score is achieved. inform the player.
     *
     * @param finalScore The final score to compare with the maximum score.
     */
    public void displayEndMaxScore(int finalScore)
    {
        if(finalScore > maxScore)
        {
            maxScore = finalScore;
            System.out.println("New high Score Achieved: " + finalScore);
        }
        else if(finalScore < maxScore)
        {
            finalScore = maxScore;
            System.out.println("Highest Score: " + maxScore);
        }
    }   

    /**
     * Calculate the game score based on the word length, attempts, and the guessed word.
     *
     * @param wordLength The length of the hidden word.
     * @param attempts   The number of attempts made by the player.
     * @param guessWord  The word guessed by the player.
     * @return           The calculated game score.
     */
    public int calculateGameScore(int wordLength,int attempts, String guessWord)
    {
        int correctGuess = 0;
        if(guessWord.equals(hiddenWord))
        {
                correctGuess += 10;
        }
        int gameScore =(wordLength - attempts ) * correctGuess;
        return gameScore;
    }

    /**
     * Perform the game logic for a given number of attempts.
     * @return The final score achieved in the game.
     */
    public int numOfAttempts()
    {
        int finalScore = 0;
        boolean guessedCorrectly = false;

        for(int attempt = 1; attempt <= maxAttempts; attempt++)
        {
            String guessWord = startGuessingLoop(hiddenWord, scanner);
            if(guessWord.equals(hiddenWord))
            {
                guessedCorrectly = true;
                int gameScore = calculateGameScore(hiddenWord.length(),attempt, guessWord);
                System.out.println("Congratulations! You guessed the word!");
                System.out.println("Game Score: " + gameScore);
                finalScore = gameScore;
                break;
            } 
            else
            {
                int gameScore = calculateGameScore(hiddenWord.length(),attempt, guessWord);
                System.out.println("Wrong guess.Game Score:" + gameScore);
                finalScore = gameScore;
                initializePartialWord();
            }
        }
        if(!guessedCorrectly)
        {
            System.out.println("You have lost this game.");
            System.out.println("The hidden word is " + hiddenWord);
            System.out.println("You have scored " + finalScore + " points.");
            displayEndMaxScore(finalScore);
        }
        player.setMaxGameScore(finalScore);
        return finalScore;
    }

    /**
     * Prompt the player to enter their name and validte it.
     *
     * @return The validated player name.
     */
    public String requestPlayerEnterName()
    {
        String playerName;
        while(true)
        {
            System.out.print("Enter player name: ");
            playerName = scanner.nextLine();
            if (!Validation.validateName(playerName))
            {
                System.out.println("Error: number of the characters is not in range: 1 and 8");
            }
            else if (!Validation.validateNameAlphabetic(playerName))
            {
                System.out.println("Error: name must be alphabetic: ");
            }
            else
            {
                player.setName(playerName);
                System.out.println("\nWelcome, " + player.getName());
                System.out.println("\nStarting game...");
                System.out.println("Generating a hidden Word...");
                break;
            }
        }
        return playerName;
    } 

    /**
     * Prompt the player to choose whether to play another game
     *
     * @return True if the player choose to player another game, otherwise false.
     */
    public boolean isPlayerChooseContinue()
    {
        while(true)
        {
            System.out.print("Do you want to play another game?(y/n:)");
            String response = scanner.nextLine();
            if(response.equals("y"))
            {
                return true;
            }
            else if (response.equals("n"))
            {
                return false;
            }
            else
            {
                System.out.println("Invalid input.Please enter 'y' or 'n'.");
            }
        }
    }

    /**
     * Run the Learndle game including generating a hidden word, managing attempts, and displaying the final result.
     */
    public void runGame()
    {
        WordLength wordLengthGenerator = new WordLength(); //create an instance
        do
        {
            int wordLength;
            do
            {
                 wordLength = wordLengthGenerator.generateRandomKeywordLength();
            } while(wordLength < 1);
            hiddenWord = LearndleKeywords.generateRandomKeyword(wordLength);

            System.out.println("Word Length: " + wordLength);
            System.out.println("Maximum number of attempts: " + (wordLength - 1));
            
            finalScore = numOfAttempts();

        }
        while(isPlayerChooseContinue());
        System.out.println("\n Goodbye, " + player.getName() +"\n Thanks for Playing Learndle!");
    }

    /**
     * Initilize the partial word to be displayed to the player.
     *
     * @return An array of characters representing the partial word.
     */
    private char[] initializePartialWord()
    {
        char[] partialWord = new char[hiddenWord.length()];
        for(int i = 0; i < partialWord.length; i++)
        {
            partialWord[i] = '_';
        }
        return partialWord;
    }

    /**
     * Manage the guessing loop for player,including validaing guesses and providing feedback.
     * @param hiddenWord The hidden word to be guessed.
     * @param scanner The scanner for user input.
     * @return The word guessed by the player.
     */
    public String startGuessingLoop(String hiddenWord, Scanner scanner)
    {
        int remainingAttempts = hiddenWord.length() - 1;
        char[] partialWord = initializePartialWord();
        boolean firstAttempt = true;
        String guessWord = "";

        System.out.println("** " + hiddenWord);
        for (int attempt = 1; attempt <= hiddenWord.length() - 1;)
        {
            System.out.println("\nAttempt #" + attempt);
            System.out.print("Guess the word: ");
            String guess = scanner.nextLine();

            if(guess.equals(hiddenWord))
            {
                guessWord = guess;
                break;
            }
            else if (guess.length() != hiddenWord.length())
            {
                System.out.println("Invalid guess - number of characters does not match the word length.");
                continue;
            }
            else
            {
                boolean correctGuess = true;

                for(int i = 0; i < hiddenWord.length(); i++)
                {
                    if(guess.charAt(i) == hiddenWord.charAt(i))
                    {
                        partialWord[i] = guess.charAt(i);
                        correctGuess = true;
                    }
                    else if(partialWord[i] == '_')
                    {
                        partialWord[i] = '_';
                    }
                }
                if(correctGuess)
                {
                    System.out.println("Wrong guess: \n" + new String(partialWord));
                }
                else
                {
                    System.out.println("Wrong guess");
                    for(int i = 0; i < hiddenWord.length();i++)
                    {
                        if(partialWord[i] == '_')
                            {
                                partialWord[i] = '_';
                            }
                    }
                    System.out.println("Partia word:" + new String(partialWord));
                }
            }
            if(guess.length() == hiddenWord.length())
            {
                remainingAttempts--;
            }
            System.out.println("You have " + remainingAttempts + " more available attempts");

            attempt++;
        }
        return guessWord;
    }

    /**
     * Convert Learndle object to a string representation
     *
     * @return A string representing the Learndle object.
     */
    @Override
    public String toString()
    {
        return "Learndle{" + 
                "player= " + player.getName() +
                ", MaxScore= " + finalScore +
                '}';
    }
    
    /**
     * The main method to start the Learndle program.
     * @param args The commend-line arguments
     */
    public static void main(String[] args)
    {
        Learndle learndle = new Learndle();
        learndle.display();
        learndle.runGame();
        System.out.println(learndle.toString());
        
    }
} 
