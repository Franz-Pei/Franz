package boundary;


import entity.Product;
import entity.ShoppingCart;
import entity.Supermarket;
import entity.User;
import exception.AppException;
import exception.FileUtils;
import exception.PrintUtils;
import exception.Utils;

import java.util.List;
import java.util.Scanner;

import static control.ShoppingCartControl.isValidBankCardNumber;
import static control.ShoppingCartControl.isValidCVV;

/**
 * This class represents the boundary layer for managing the shopping cart.
 *
 * @author Ziqi Pei Zhenbang Zhao
 * @version 5.0
 * @since 2024-05-12
 */
public class ShoppingCartBoundary {

    /**
     * Prints the shopping cart panel and handles user interactions.
     *
     * @param user The user object representing the current user.
     */
    public static void ShowShoppingCartIndex(User user) {
        Scanner scanner = new Scanner(System.in);
        boolean isRunning = true;
        ShoppingCart shoppingCart = new ShoppingCart();
        shoppingCart.setUser(user);
        do {
            System.out.println("----------Welcome to the supermarket system.----------");
            System.out.println("1:View shoppingCart goods");
            System.out.println("2:checkout");
            System.out.println("3:Return to the previous step");
            System.out.println("Please enter your choice:");

            String option = scanner.nextLine();
            while (!Utils.matches(option)){
                System.out.println("Your choice Must number(1,2,3).Please enter your choice:");
                option = scanner.nextLine();
            }
            switch (Integer.parseInt(option)) {
                case 1:
                    System.out.println("Perform view goods operation");
                    FileUtils fileUtils = new FileUtils(ShoppingCart.filePath);
                    List<Product> products = fileUtils.LoadProduct();
                    PrintUtils.showProducts(products);
                    break;
                case 2:
                    System.out.println("checking out.");
                    SettleProducts(shoppingCart,shoppingCart.getProducts());
                    break;
                case 3:
                    System.out.println("Return to the previous step");
                    isRunning = false;
                    break;
                default:
                    System.out.println("Invalid option, please re-enter");
                    break;
            }
        } while (isRunning);
    }

    /**
     * Settles the products in the shopping cart.
     *
     * @param shoppingCart The shopping cart object containing the products.
     * @param products     The list of products in the shopping cart.
     * @throws AppException If an error occurs during the settlement process.
     */
    public static void SettleProducts(ShoppingCart shoppingCart,List<Product> products) throws AppException {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Please enter user name(Card holder name):");
        String loginName = scanner.nextLine();
        System.out.println("Please enter card number(16 digits):");
        String cardNumber = scanner.nextLine();
        while (!isValidBankCardNumber(cardNumber)){
            System.out.println("card number invalid.Please reenter card number:");
            cardNumber = scanner.nextLine();
        }
        System.out.println("Please enter card cvv(3 digits):");
        String cvv = scanner.nextLine();
        while (!isValidCVV(cvv)){
            System.out.println("card cvv number invalid.Please reenter card cvv:");
            cvv = scanner.nextLine();
        }
        Integer amount=products.stream().mapToInt(Product::getPrice).sum();
        shoppingCart.getFileUtils().Clear();
        shoppingCart.setProducts(  shoppingCart.getFileUtils().LoadProduct());
        System.out.println("Settle success , Order amount : $" +amount );
    }
}
