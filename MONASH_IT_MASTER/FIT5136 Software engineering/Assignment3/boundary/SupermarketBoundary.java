package boundary;

import control.ShoppingCartControl;
import control.SupermarketControl;
import entity.Product;
import entity.ShoppingCart;
import entity.Supermarket;
import entity.User;
import exception.FileUtils;
import exception.PrintUtils;
import exception.Utils;

import java.util.List;
import java.util.Objects;
import java.util.Scanner;
import java.util.stream.Collectors;


/**
 * This class represents the boundary layer for managing the supermarket system.
 *
 * @author Jiabao Li
 * @version 6.0
 * @since 2024-05-11
 */
public class SupermarketBoundary {

    /**
     * Displays the supermarket system control panel and handles user interactions.
     *
     * @param user        The user object representing the current user.
     * @param supermarket The supermarket object containing the products and shopping cart.
     */
    public static void ShowSupermarketIndex(User user,Supermarket supermarket) {
        Scanner scanner = new Scanner(System.in);
        boolean isRunning = true;
        supermarket.setUser(user);
        if (user.getRole()==1){
            do {
                System.out.println("----------Welcome to the supermarket system.----------");
                System.out.println("1:View goods");
                System.out.println("2:Return to the previous step");
                System.out.println("Please enter your choice:");

                String option = scanner.nextLine();
                while (!Utils.matches(option)){
                    System.out.println("Your choice Must number(1,2).Please enter your choice:");
                    option = scanner.nextLine();
                }
                switch (Integer.parseInt(option)) {
                    case 1:
                        PrintUtils.showProducts(supermarket.getProducts());
                        showOperation(user,supermarket.getProducts(),supermarket);
                        break;
                    case 2:
                        System.out.println("3:Return to the previous step");
                        isRunning = false;
                        break;
                    default:
                        System.out.println("Invalid option, please re-enter");
                        break;
                }
            } while (isRunning);
        }else{
            do {
                System.out.println("----------Welcome to the supermarket system.----------");
                System.out.println("1:View goods");
                System.out.println("2:View ShoppingCart");
                System.out.println("3:Return to the previous step");
                System.out.println("Please enter your choice:");
                int option = scanner.nextInt();
                switch (option) {
                    case 1:
                        FileUtils fileUtils = new FileUtils(Supermarket.filePath);
                        List<Product> products = fileUtils.LoadProduct();
                        PrintUtils.showProducts(products);
                        showOperation(user,supermarket.getProducts(),supermarket);
                        break;
                    case 2:
                        if (supermarket.getShoppingCart()==null){
                            supermarket.setShoppingCart(new ShoppingCart());
                        }
                        FileUtils fileUtils1 = new FileUtils(ShoppingCart.filePath);
                        List<Product> products1 = fileUtils1.LoadProduct();
                        PrintUtils.showProducts(products1);
                        ShoppingCartBoundary.ShowShoppingCartIndex(user);
                        break;
                    case 3:
                        System.out.println("3:Return to the previous step");
                        isRunning = false;
                        break;
                    default:
                        System.out.println("Invalid option, please re-enter");
                        break;
                }
            } while (isRunning);
        }
    }

    /**
     * Displays the available operations for the user based on their role.
     *
     * @param user        The user object representing the current user.
     * @param products    The list of products in the supermarket.
     * @param supermarket The supermarket object containing the products and shopping cart.
     */
    public static void showOperation(User user, List<Product> products,Supermarket supermarket) {
        Scanner scanner = new Scanner(System.in);
        boolean isRunning = true;
        ShoppingCartControl shoppingCartControl = new ShoppingCartControl();
        if (user.getRole()==0){
            do {
                System.out.println("----------Welcome to the supermarket admin system.----------");
                System.out.println("1:Add goods to the shopping cart");
                System.out.println("2:Return to the previous step");
                System.out.println("Please enter your choice:");
                String option = scanner.nextLine();
                while (!Utils.matches(option)){
                    System.out.println("Your choice Must number(1,2).Please enter your choice:");
                    option = scanner.nextLine();
                }
                switch (Integer.parseInt(option)) {
                    case 1:
                        System.out.println("1:Enter the goods Id");
                        if (supermarket.getShoppingCart()==null){
                            supermarket.setShoppingCart(new ShoppingCart());
                        }
                        if (products.size()==0){
                            System.out.println("At present, there are no products in the supermarket, and the administrator needs to increase");
                            break;
                        }
                        String id = scanner.nextLine();
                        while (!Utils.matches(id)){
                            System.out.println("Your choice Must number.Please enter your choice:");
                            id = scanner.nextLine();
                        }
                        Integer selectGood=Integer.parseInt(id);
                        Product select=products.stream().filter(x-> Objects.equals(x.getId(), selectGood)).findFirst().orElse(null);
                        if (select==null){
                            System.out.println("Your choice goods doesn't exist.");
                            break;
                        }
                        System.out.println("Add goods to the shopping cart");
                        supermarket.getShoppingCart().getProducts().add(select);
                        shoppingCartControl.AddProductsToShoppingCart(select,user,supermarket.getShoppingCart());
                        List<Product> result =products.stream().filter(x->x.getId().equals(selectGood)).collect(Collectors.toList());
                        List<Product> result2 =products.stream().filter(x->!x.getId().equals(selectGood)).collect(Collectors.toList());
                        FileUtils.FlushProduct(result,ShoppingCart.filePath);
                        FileUtils.FlushProduct(result2,Supermarket.filePath);
                        products=supermarket.getShoppingCart().getProducts();
                        break;
                    case 2:
                        System.out.println("Return to the previous step");
                        isRunning = false;
                        break;
                    default:
                        System.out.println("Invalid option, please re-enter");
                        break;
                }
            } while (isRunning);

        }else {
            do {
                System.out.println("----------Welcome to the supermarket admin system.----------");
                System.out.println("1:Add goods");
                System.out.println("2:Del goods");
                System.out.println("3:Return to the previous step");
                System.out.println("Please enter your choice:");

                String option = scanner.nextLine();
                while (!Utils.matches(option)){
                    System.out.println("Your choice Must number(1,2,3).Please enter your choice:");
                    option = scanner.nextLine();
                }
                switch (Integer.parseInt(option)) {
                    case 1:
                        SupermarketControl.AddProducts(supermarket);
                        break;
                    case 2:
                        SupermarketControl.DelProducts(supermarket);
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
    }
}
