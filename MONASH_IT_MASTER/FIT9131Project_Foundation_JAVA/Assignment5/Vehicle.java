/**
 * Vehicle class represents a type of vehicle with attributes such as type, maximum fuel capacity, and maximum damage.
 *
 * @version 3.0
 * @author Ziqi Pei
 */
public class Vehicle
{
    private String vehicleType;//Type of the vehicle
    private int maxFuel;//Maximum fuel capacity of the vehicle
    private int maxDamage;//Maximum damage the vehicle can with stand


    /**
     * Default constructor initializes the vehicle withe default values.
     */
    public Vehicle()
    {
        this.vehicleType = "Default";//Default type
        this.maxFuel = 100;//Default maximum fuel capacity
        this.maxDamage = 100;//Default maximum damage
    }

    /**
     * Parameterized constructor allows creating a vehicle with specified values.
     *
     * @param vehicleType The tyepe of vehicle
     * @param maxFuel The maximum fuel capacity of the vehicle.
     * @param maxDamage The maximum damage the vehicle can withstand.
     */
    public Vehicle(String vehicleType, int maxFuel, int maxDamage)
    {
        this.vehicleType = vehicleType;   //Set the type based on the provided value.
        this.maxFuel = maxFuel;//Set the maximum fuel capacity based on the provided value
        this.maxDamage = maxDamage;//Set the maximum damage based on the provided value.
    }

    public void display()
    {
        System.out.println("vehicleType:" + vehicleType);
        System.out.println("Max Fuel:" + maxFuel);
        System.out.println("Max Damage:" + maxDamage);

    }

    /**
     * Getter method to retrieve the type of the vehicle.
     *
     * @return The type of the vehicle.Journey.java current Vehicle Player.class getType()
     */
    public String getVehicleType()
    {
        return vehicleType;
    }

    /**
     *Getter method to retrieve the maximum fuel capacity of the vehicle.
     *
     * @return The maximun fuel capacity of the vehicle Game Journey Player this.currentFuel
     */
    public int getMaxFuel()
    {
        return maxFuel;
    }

    /**
     * Getter method to retrieve the maximum damage the vehicle can withstand.
     *
     * @return The maximum damage the vehicle can withstad.
     */
    public int getMaxDamage()
    {
        return maxDamage;
    }
    /**
     * Setter method to update the type of the vehicle.
     *
     * @param vehicleType The new type of the vehicle.
     */
    public void setVehicleType(String vehicleType)
    {
        Validation validation = new Validation();
        if(validation.isValidVehicleType(vehicleType))
        {
            this.vehicleType = vehicleType;
        }
        else
        {
            System.out.println("Invalid vehicle type.Please provide a valid type.");
        }
    }

    /**
     *Setter method to update the maximum fuel capaacity of the vehicle.
     *
     * @param maxFuel The new maximum fuel capacity of the vehicle.
     */
    public void setMaxFuel(int maxFuel)
    {
        Validation validation = new Validation();
        if(validation.numericRange(maxFuel,1, 100000))//minLength 1 maxLength 5
        {
            this.maxFuel = maxFuel;
        }
        else
        {
            System.out.println("Invalid maximum damage. Please provide a valid value.");
        }
    }

    /**
     * Setter method to update the maximum damage the vehicle cam withstand
     *
     * @param maxDamage The new maximum damage the vehicle can withstand.
     */
    public void setMaxDamage(int maxDamage)
    {
        Validation validation = new Validation();
        if(validation.numericRange(maxDamage, 1, 100000))
        {
            this.maxDamage = maxDamage;
        }
        else
        {
            System.out.println("Invalid maximum damage. Please provide a valid value.");
        }
    }

    /**
     * Override the toString method to provided a string representation of the vehicle.
     *
     * @return A string representation of the vehicle.
     */
    @Override
    public String toString()
    {
        return "Vehicle{" + 
                "Type='" + vehicleType + '\'' +
                ", maxFuel=" + maxFuel +
                ", maxDamage=" + maxDamage +
                '}';
    }

    public void testVehicle()
    {
        // System.out.println("Create an Vehicle object with the default constructor");
        // Vehicle vehicle1 = new Vehicle();
        // vehicle1.display();

        // System.out.println("Create an Vehicle object with the non-default constantor with valid field values");
        // Vehicle vehicle2 = new Vehicle("Bazi",1200,900);
        // vehicle2.display();

        // System.out.println("Create an Vehicle object with the non-defult constantor with invalid field values");
        // Vehicle vehicle3 = new Vehicle("", 673676437, 122343);
        // vehicle3.display();

        // System.out.println("test function use get seter");
        // Vehicle vehicle4 = new Vehicle();
        // vehicle4.setVehicleType("");
        // vehicle4.setMaxFuel(673676437);
        // vehicle4.setMaxDamage(122343);
    }
}
