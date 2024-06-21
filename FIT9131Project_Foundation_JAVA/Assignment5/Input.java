import java.util.Scanner;
/**
 * The input calss is responsible for  handling user input in the game.
 * It provides methods to accept a valid player name and integer input.
 */
public class Input
{
    private Scanner scanner;
    private Validation validation;

    /**
     * Constructor to initialize the scanner for user inpur.
     */
    public Input()
    {
        this.scanner = new Scanner(System.in);
        this.validation = new Validation();
    }

    /**
     * Accepts a valid player name from the user.
     * The name must be between 5 and 10 characters, containing only lowcase alphabetic characters
     * @return The valid player name. initialize game player.setPlayerName
     */
    public String acceptValidName()
    {
        String name;
        do
        {
            System.out.print("Enter your name (5-10 characters, lowercase only): ");
            name = scanner.nextLine().trim();
            if(!validation.isValidateNameLength(name))
            {
                System.out.println("Invalid name. Please enter a name between 5 and 10 characters with only lowcase alphabetic characters.\n");
            }
        }
        while(!validation.isValidateNameLength(name));

        return name;
    }

    /**
     * Accepts an integer input from the user.
     * Handles case where the input is not a valid integer.
     * @return The valid integer input.
     */
    public int acceptIntInput()
    {
        try
        {
            return Integer.parseInt(scanner.nextLine());
        }
        catch(NumberFormatException e)
        {
            System.out.print("Invalid input. Enter a number: ");
            return acceptIntInput();
        }
    }
    
    public void testInput()
    {
        // System.out.println("Create an Input object with the default constructor");
        // Input input = new Input();

        // System.out.println("Testing acceptValidName:");
        // String playerName = input.acceptValidName();
        // System.out.println("Player Name: " + playerName);

        // System.out.println("Testing acceptIntInput");
        // System.out.print("Enter an integer: ");
        // int intValue = input.acceptIntInput();
        // System.out.println("Entered Integer: " + intValue);
    }

}
