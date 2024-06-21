package control;

import boundary.SupermarketBoundary;
import entity.Product;
import entity.ShoppingCart;
import entity.Supermarket;
import exception.FileUtils;

import java.util.Comparator;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

/**
 * This class represents the control layer for managing the supermarket operations.
 *
 * @author Jiabao Li
 * @version 2.0(new function use by Supermarket Boundary)
 * @since 2024-05-17
 */
public class SupermarketControl {
    public ShoppingCart shoppingCart;

    /**
     * Gets the current shopping cart.
     *
     * @return The shopping cart object.
     */
    public ShoppingCart getShoppingCart() {
        return shoppingCart;
    }

    /**
     * Sets the current shopping cart.
     *
     * @param shoppingCart The shopping cart object to be set.
     */
    public void setShoppingCart(ShoppingCart shoppingCart) {
        this.shoppingCart = shoppingCart;
    }

    /**
     * Adds a new product to the supermarket.
     *
     * @param supermarket The supermarket object where the product will be added.
     */
    public static void AddProducts(Supermarket supermarket) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Please enter a Product name:");
        String name = scanner.nextLine();
        System.out.println("Please enter a Product price:");
        Integer price = scanner.nextInt();
        System.out.println("AddProducts is in progress.");
        List<Product> reversedProduct = supermarket.getProducts().stream()
                .sorted(Comparator.comparingInt(Product::getId).reversed()).collect(Collectors.toList());
        Integer id = reversedProduct.isEmpty() ?1:reversedProduct.get(0).getId()+1;
        Product newProduct= new Product(id,name,price);
        supermarket.getFileUtils().WriteProduct(newProduct);
        supermarket.setProducts(supermarket.getFileUtils().LoadProduct());
    }

    /**
     * Deletes a product from the supermarket based on the provided product ID.
     *
     * @param supermarket The supermarket object from which the product will be deleted.
     */
    public static void DelProducts(Supermarket supermarket) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Please enter a Product Id:");
        Integer Id = scanner.nextInt();
        System.out.println("DelProducts is in progress.");
        List<Product> result = supermarket.getProducts().stream().filter(x->!x.getId().equals(Id)).collect(Collectors.toList());
        FileUtils.FlushProduct(result, Supermarket.filePath);
        supermarket.setProducts(supermarket.getFileUtils().LoadProduct());
    }
}
