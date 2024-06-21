/**
*The SelfieType class represents different types of selfies that can be taken in a simulation.
*It includes contains for a group video.individual photo, individual video, and individual sletch.
*@author Ziqi Pei
*@version 6.2
*/
public class SelfieType {

    public static String GROUP_PHOTO = "group_photo"; // Constant representing a group photo
    public static String GROUP_VIDEO = "group_video"; // Constant representing a group video
    public static String INDIVIDUAL_PHOTO = "individual_photo"; // Constant representing an individual photo
    public static String INDIVIDUAL_VIDEO = "individual_video"; // Constant representing an individual video
    public static String INDIVIDUAL_SKETCH = "individual_sketch"; // Constant representing an individual sketch

    public static String OUT_PATH = "./populationFinal.txt"; // Output file path for simulation results

    public static int CURRENT_FOOD = 0; // Current total food consumed by quokkas

    public static int CURRENT_DAY_FOOD = 0; // Current day's food consumed by quokkas

    public static int CURRENT_DAY_DIED = 0; // Current day's quokka deaths

}

