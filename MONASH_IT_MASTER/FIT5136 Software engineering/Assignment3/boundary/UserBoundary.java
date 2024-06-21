package boundary;

import entity.Supermarket;
import entity.User;
import exception.AppException;

import java.util.Scanner;
import java.util.regex.Pattern;

/**
 * This class represents the boundary layer for managing user authentication and login.
 *
 * @author Shaohong Pan
 * @version 3.0
 * @since 2024-05-6
 */
public class UserBoundary {

    /**
     * Displays the customer login panel and handles customer login.
     */
    public static void CustomerLoginShow() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Please enter a user name(Enter your email address):");
        String loginName = scanner.nextLine();
        System.out.println("Please enter a user Password:");
        String passWord = scanner.nextLine();
        User user=new User();
        Supermarket supermarket = new Supermarket();
        user=UserLogin(user.getCustomer(),loginName,passWord);
        SupermarketBoundary.ShowSupermarketIndex(user,supermarket);

    }

    /**
     * Displays the admin login panel and handles admin login.
     */
    public static void AdminLoginShow() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Please enter a user name(Enter your email address):");
        String loginName = scanner.nextLine();
        System.out.println("Please enter a user Password:");
        String passWord = scanner.nextLine();
        System.out.println("Login is in progress.");
        User user=new User();
        Supermarket supermarket=new Supermarket();
        user=UserLogin(user.getAdmin(),loginName,passWord);
        SupermarketBoundary.ShowSupermarketIndex(user,supermarket);
    }

    /**
     * Authenticates the user based on the provided login name and password.
     *
     * @param user      The user object representing the user to be authenticated.
     * @param loginName The login name entered by the user.
     * @param passWord  The password entered by the user.
     * @return The authenticated user object if the login is successful.
     * @throws AppException If the login name or password is invalid.
     */
    public static User UserLogin(User user,String loginName, String passWord) throws AppException {
        boolean isValid = isValidEmail(loginName);
        if (!isValid){
            throw new AppException(1,"loginName is invalid.");
        }
        if (user.getLoginName().equals(loginName)&& user.getPassWord().equals(passWord)){
            System.out.println(" login success.");
            return user;
        }else {
            throw new AppException(2,"loginName or passWord is invalid.");
        }
    }


    private static final Pattern EMAIL_PATTERN =
            Pattern.compile(
                    "[a-zA-Z0-9\\+\\.\\_\\%\\-\\+]{1,256}" +
                            "\\@" +
                            "[a-zA-Z0-9][a-zA-Z0-9\\-]{0,64}" +
                            "(" +
                            "\\." +
                            "[a-zA-Z0-9][a-zA-Z0-9\\-]{0,25}" +
                            ")+"
            );

    /**
     * Validates the given email address using a regular expression pattern.
     *
     * @param email The email address to be validated.
     * @return true if the email address is valid, false otherwise.
     */
    public static boolean isValidEmail(String email) {
        return EMAIL_PATTERN.matcher(email).matches();
    }
}
