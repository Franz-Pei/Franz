package entity;

/**
 * Represents a product in the supermarket system.
 *
 * @author Zhenbang Zhao,Ziqi Pei
 * @version 3.0
 * @since 2024-05-13
 */
public class Product {

    private Integer id;
    private String name;
    private Integer price;

    /**
     * Constructs a new Product object with the given name and price.
     *
     * @param name  The name of the product.
     * @param price The price of the product.
     */
    public Product(String name, int price) {
        this.name = name;
        this.price = price;
    }

    /**
     * Constructs a new Product object with default values.
     */
    public Product() {
    }

    /**
     * Constructs a new Product object with the given id, name, and price.
     *
     * @param id    The unique identifier of the product.
     * @param name  The name of the product.
     * @param price The price of the product.
     */
    public Product(int id, String name, Integer price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    /**
     * Returns the name of the product.
     *
     * @return The name of the product.
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the name of the product.
     *
     * @param name The name of the product.
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Returns the price of the product.
     *
     * @return The price of the product.
     */
    public Integer getPrice() {
        return price;
    }


    /**
     * Sets the price of the product.
     *
     * @param price The price of the product.
     */
    public void setPrice(Integer price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return id+","+name+","+price;
    }


    /**
     * Returns the unique identifier of the product.
     *
     * @return The unique identifier of the product.
     */
    public Integer getId() {
        return id;
    }

    /**
     * Sets the unique identifier of the product.
     *
     * @param id The unique identifier of the product.
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * Parses a string into a Product object.
     *
     * <p>The input string should have the following format: "id,name,price"
     * where "id" is the unique identifier of the product, "name" is the name of the product,
     * and "price" is the price of the product.
     *
     * @param line The input string to be parsed.
     * @return A Product object created from the input string.
     */
    public static Product parseProduct(String line) {
        String[] parts = line.split(",");
        Product product = new Product();
        product.setId(Integer.parseInt(parts[0]));
        product.setName(parts[1]);
        product.setPrice(Integer.parseInt(parts[2]));
        return product;
    }

}
