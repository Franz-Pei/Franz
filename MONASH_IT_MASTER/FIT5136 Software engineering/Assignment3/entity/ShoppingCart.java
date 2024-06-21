package entity;

import exception.AppException;
import exception.FileUtils;
import exception.PrintUtils;
import exception.Utils;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.regex.Pattern;

/**
 * Represents a shopping cart in the supermarket system.
 *
 * <p>The shopping cart holds a list of products selected by the user and provides
 * functionality to manage the products in the cart, such as loading and saving
 * the cart contents to a file.
 *
 * @author Ziqi Pei
 * @version 3.0 Refactor the class to ShoppingCart Boundary to  entity Shopping Cart
 * @since 2024-05-13
 */
public class ShoppingCart {
    private List<Product> products = new ArrayList<>();
    private User user;
    public static final String filePath = System.getProperty("user.dir")+"/"+ "entity/ShoppingCart.txt";

    private FileUtils fileUtils;

    /**
     * Constructs a new ShoppingCart object and initializes the file utilities.
     */
    public ShoppingCart() {
        this.fileUtils = new FileUtils(filePath);
        this.products = fileUtils.LoadProduct();
    }

    /**
     * Returns the list of products in the shopping cart.
     *
     * @return The list of products in the shopping cart.
     */
    public List<Product> getProducts() {
        return products;
    }

    /**
     * Sets the list of products in the shopping cart.
     *
     * @param products The list of products to be set.
     */
    public void setProducts(List<Product> products) {
        this.products = products;
    }

    /**
     * Returns the user associated with the shopping cart.
     *
     * @return The user associated with the shopping cart.
     */
    public User getUser() {
        return user;
    }

    /**
     * Sets the user associated with the shopping cart.
     *
     * @param user The user to be associated with the shopping cart.
     */
    public void setUser(User user) {
        this.user = user;
    }

    /**
     * Returns the file utilities object used for loading and saving the shopping cart contents.
     *
     * @return The file utilities object.
     */
    public FileUtils getFileUtils() {
        return fileUtils;
    }

    /**
     * Sets the file utilities object used for loading and saving the shopping cart contents.
     *
     * @param fileUtils The file utilities object to be set.
     */
    public void setFileUtils(FileUtils fileUtils) {
        this.fileUtils = fileUtils;
    }
}
