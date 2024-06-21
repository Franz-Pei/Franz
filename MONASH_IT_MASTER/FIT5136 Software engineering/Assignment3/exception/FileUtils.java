package exception;//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//


import control.UserControl;
import entity.Product;
import entity.User;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Represents a utility class for file operations.
 *
 * <p>The FileUtils class provides methods for reading and writing data to files,
 * specifically for handling products and users. It supports loading data from
 * files into collections, writing data to files, flushing data to files, and
 * clearing the contents of files.
 *
 * @author Ziqi Pei,Shaohong Pan
 * @version 5.0
 * @since 2024-05-11
 */
public class FileUtils {

    String  filePath;

    /**
     * Constructs a new FileUtils object with the specified file path.
     *
     * <p>If the file does not exist, it will be created.
     *
     * @param filePath The path to the file.
     */
    public FileUtils(String filePath) {
        this.filePath=filePath;
        File file = new File(filePath);
        if (!file.exists()) {
            try {
                file.createNewFile();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    /**
     * Loads products from the file and returns them as a list.
     *
     * @return A list of Product objects loaded from the file.
     */
    public  List<Product> LoadProduct(){
        List<Product> list = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = br.readLine()) != null) {
                Product product = Product.parseProduct(line);
                list.add(product);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return list;
    }


    /**
     * Writes a product to the file in append mode.
     *
     * @param data The Product object to be written to the file.
     */
    public void WriteProduct(Product data){
        try (PrintWriter pw = new PrintWriter(new FileWriter(filePath, true))) {
            pw.println(data.toString());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * Flushes a list of products to the specified file, overwriting its contents.
     *
     * @param datas    The list of Product objects to be written to the file.
     * @param filePath The path to the file.
     */
    public static void FlushProduct(List<Product> datas,String filePath){
        try (PrintWriter pw = new PrintWriter(new FileWriter(filePath))) {
            for (Product data : datas){
                pw.println(data.toString());
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * Empty the contents of the file
     */
    public void Clear() {
        try {
            FileWriter fw = new FileWriter(filePath, false);
            fw.write("");
            fw.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * Loads users from the file and returns them as a list.
     *
     * @return A list of User objects loaded from the file.
     */
    public List<User> LoadUser() {
        List<User> list = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = br.readLine()) != null) {
                User user = UserControl.parseUser(line);
                list.add(user);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return list;
    }

    /**
     * Writes a user to the file in append mode.
     *
     * @param data The User object to be written to the file.
     */
    public void WriteUser(User data){
        try (PrintWriter pw = new PrintWriter(new FileWriter(filePath, true))) {
            pw.println(data.toString());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
