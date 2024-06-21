import java.util.Scanner;

/**
 * The Input class provides method to accept user {@link Input}
 * number of dog need input,and Scanner Enter continue.
 */
public class Input
{
    private Scanner scanner;

    /**
     * Initilize a new Input object.
     */
    public Input()
    {
        scanner = new Scanner(System.in);
    }

    /**
     * Accept a single character input from the user.
     *
     * @param prompt The prompt message a dispaly to the user.
     * @return The character ented by the user.
     */
    public char acceptCharinput(String prompt)
    {
        char inputChar = ' ';
        boolean validInput = false;

        while(!validInput)
        {
            System.out.print(prompt);
            String input = scanner.nextLine();

            if(input.length() == 1)
            {
                inputChar = input.charAt(0);
                validInput = true;
            }
            else
            {
                System.out.println("Invalid input, Please enter a single character.");
            } 
            
        }
        return inputChar;
    }
    
    /**
     * Accepts a double input from the user.
     *
     * @param prompt The prompt message to display to the uer.
     * @return The double value ented by the user.
     */
    public double acceptDoubleinput(String prompt)
    {
        double inputDouble = 0.0;
        boolean validInput = false;

        while(!validInput)
        {
            System.out.print(prompt);
            String input = scanner.nextLine();

            try
            {
                inputDouble  = Double.parseDouble(input);
                validInput = true;
            }
            catch(NumberFormatException e)
            {
                System.out.println("Invalid input. Please enter a valid double.");
            }
        }
        return inputDouble;
    }
    /**
     * Accepts an integer input from the user.
     *
     * @param prompt The prompt message to display to the user.
     * @ return The integer value entered by the user.
     */
    public int acceptIntegerInput(String prompt)
    {
        int inputInt = 0;
        boolean validInput = false;

        while(!validInput)
        {
            System.out.print(prompt);
            String input = scanner.nextLine();

            try
            {
                inputInt = Integer.parseInt(input);
                validInput = true;
            } 
            catch(NumberFormatException e)
            {
                System.out.println("Invalid input. Please enter a valid integer.");
            }
        }
        return inputInt;
    }

    /**
     * Accept a string input from the user.
     *
     * @param prompt The message to display to the user. 
     * @return The String entered by the user.
     */
    public String acceptStringInput(String prompt)
    {
        System.out.print(prompt);
        return scanner.nextLine();
    }

    /**
     * Closes The underly Scanner object.
     */
    public void close()
    {
        scanner.close();
    }
}
