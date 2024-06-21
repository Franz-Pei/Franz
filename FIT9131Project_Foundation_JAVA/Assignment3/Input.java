/**
 * The Input class provides method to interact with the user for input during the Learndle game.
 * It includes methods fpr getting the player's guess word,receiving the user's response for Playing
 * another game, and closing the input scannner.
 *
 * @auther[Ziqi Pei]
 * @version3.0
 */
import java.util.Scanner;

public class Input
{
    private Scanner scanner;

    /**
     * Default constructor taht initilaizes the input object withc a scanner for user input.
     */
    public Input()
    {
        this.scanner = new Scanner(System.in);
    }

    /**
     * Prompts the user to enter their guess for the word.
     *
     * @return the user's guess word as a String
     */
    public String getGuessWord()
    {
        System.out.print("Guess the word:");
        return scanner.nextLine();
    }

    /**
     * Prompts the user for their response on whether they want to play another game.
     *
     * @ return the user's response as a String(either"y" for yes "n" for no)
     */
    public String getUserResponse()
    {
        System.out.println("Do you want to play another game?(y/n):");
        return scanner.nextLine();
    }

    /**
     * Closes the input scanner to release system resources.
     */
    public void close()
    {
        scanner.close();
    }
}
