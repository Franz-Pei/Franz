import boundary.UserBoundary;
import entity.User;
import exception.AppException;
import exception.Utils;

import java.util.Scanner;

/**
 * The main entry point of the supermarket system application.
 *
 * <p>This class provides a command-line interface for users to interact with the supermarket system.
 * It handles user input, login authentication, and navigation through different system functionalities.
 *
 * @author Shaohong Pan
 * @version 3.0
 * @since 2024-05-10
 */

public class Main {
    /**
     * The main method, which serves as the entry point of the application.
     *
     * @param args The command-line arguments (not used in this application).
     */
    public static void main(String[] args) {


        Scanner scanner = new Scanner(System.in);
        boolean isRunning = true;

        do {
            System.out.println("----------Welcome to the supermarket system.----------");
            System.out.println("1:Customer login");
            System.out.println("2:Merchant login");
            System.out.println("3:Exit");
            System.out.println("Please enter your choice:");

            String option = scanner.nextLine();
            while (!Utils.matches(option)){
                System.out.println("Your choice Must number(1,2,3).Please enter your choice:");
                option = scanner.nextLine();
            }
            switch (Integer.parseInt(option)) {
                case 1:
                    try{
                        UserBoundary.CustomerLoginShow();
                    }catch (AppException e){
                        if (e.getCode()==1 || e.getCode()==2){
                            System.out.println(e.getCustomMessage());
                        }else {
                            System.exit(0);
                        }
                    }
                    break;
                case 2:
                    try{
                        UserBoundary.AdminLoginShow();
                    }catch (AppException e){
                        if (e.getCode()==1 || e.getCode()==2){
                            System.out.println(e.getCustomMessage());
                        }else {
                            System.exit(0);
                        }
                    }
                    break;
                case 3:
                    System.out.println("Exit program");
                    isRunning = false;
                    break;
                default:
                    System.out.println("Invalid option, please re-enter");
                    break;
            }
        } while (isRunning);
    }
    
}