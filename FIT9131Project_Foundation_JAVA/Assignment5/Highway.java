import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;

/**
 * The Highway class represents the road infrastructure in the game.
 * It includes the method to initialize lanes, generated random obstacles,and retrieve in for mation about highway.
 *
 * author:Ziqi Pei
 * version:9.0
 */
public class Highway
{
    private int sectionsLength;// Length of highway sections
    private int numLanes;// Number of lanes in the highway.
    private char[][] sectionLanes;//Layout of highway lanes
    
    /**
     * Default constantor initialzes the highway with default values.
     */
    public Highway()
    {
        sectionsLength = 10;
        numLanes = 5;
        sectionLanes = new char[numLanes][sectionsLength];
        initializeLanes();   
    }
    
    /**
     * Parameterized constantor to create a highway with specific length and number of lanes.
     *
     * @param sectionsLength The length of highway sections.
     * @param numLanes The number of lanes in the highway.
     */
    public Highway(int sectionsLength,int numLanes)
    {
        Validation validation = new Validation();
        //Validate parameters
        if(sectionsLength <= 0 || numLanes <= 0 || validation.isStringOrChar(sectionsLength) || validation.isStringOrChar(numLanes))
        {
           new Highway();
        }else
        {
            //Initialize the Highway
            this.sectionsLength = sectionsLength;
            this.numLanes = numLanes;
            this.sectionLanes = new char[numLanes][sectionsLength];
        }        
    }

    /**
     * Display information about highway, including its length, number of lanes, and layout.
     * The layour is printed lane by lane, showing the symbols in each section of the highway.
     */
    public void display()
    {
        //Print general information about the highway.
        System.out.println("Highway Information: ");
        System.out.println("Sections Length: " + sectionsLength);
        System.out.println("Number of Lanes: " + numLanes);
        
        //Print the layout of the Highway.
        System.out.println("Highway Layout:");
        for(int i = 0; i < numLanes; i++)
        {
            System.out.print("Lane " + (i + 1) + ":");
            //Print symbols in  each section of the lane
            for(int j = 0; j < sectionsLength; j++)
            {
                System.out.print(sectionLanes[i][j] + "-");
            }
            System.out.println();//Move to the next line for the next lane
        }
        System.out.println();//Add an empty line for better readability
    }

    /**
     * Retrieves the length of highway sections.
     *
     * @return The leength of highway sections.
     */
    public int getSectionsLength()
    {
        return sectionsLength;
    }

    /**
     * Retrives the number of lanes in the highway.
     *
     * @return The number of lanes in the highway.
     */
    public int getNumLanes()
    {
        return numLanes;
    }

    /**
     * Retrives the layout of highway lanes.
     *
     * @return A 2D array representing the highway lanes.
     */
    public char[][] getSectionLanes()
    {
        return sectionLanes;
    }

    /**
     * Sets the length of highway sections.
     *
     * @param sectionsLangth The length of highway sections to set.
     */
    public void setSectionsLength(int sectionsLangth)
    {
        this.sectionsLength = sectionsLangth;
    }
    
    /**
     * Sets the number of lanes in the highway.
     *
     * @param numLanes The number of lanes to set.
     */
    public void setNumLanes(int numLanes)
    {
        this.numLanes = numLanes;
    }

    /**
     * Sets the layout of highway lanes.
     *
     * @param sectionLanes A 2D array representing the highway lanes to set.
     */
    public void setSectionLanes(char[][] sectionLanes)
    {
        this.sectionLanes = sectionLanes;
    }

    /**
     * Generates a random obstacle symbol based on probability.
     *
     * @return The randomly generated obstacle symbol.
     */
    public char createRandomObstacleSymbol()
    {
        RandomGenerator randomGenerator = new RandomGenerator();
        double obstacleTypeProbability = randomGenerator.generateRandomDouble();

        char obstacleType = ' ';

        if(obstacleTypeProbability <= 0.3)
        {
            obstacleType = 'F';
        }
        else if(obstacleTypeProbability <= 0.7)
        {
            obstacleType = 'B';
        }
        else if(obstacleTypeProbability <= 0.9)
        {
            obstacleType = 'S';
        }
        else
        {
            obstacleType = 'P';
        }

        return obstacleType;
    }
    
    /**
     * Initializes all highway lanes with empty spaces.
     */
    public void initializeLanes()
    {
        for(int i = 0; i < numLanes; i++)
            for(int j = 0; j < sectionsLength; j++)
            {
                sectionLanes[i][j] = ' ';
            }
    }

    /**
     * Initializes obstacle on randon lanes and positions in the highway.
     *
     * @param obstacleCount The number of obstacles to generate.
     * @return A string containing information about the generate obstacles.
     */
    public void initializeObstacles(int obstacleCount)
    {
        RandomGenerator randomGenerator = new RandomGenerator();
        int obstaclesGenerated = 0;

        while(obstaclesGenerated < obstacleCount)
        {
            //The first three lanes didn't set obstacle
            int y = randomGenerator.generateRandomInt(3, sectionsLength - 1);//First , three setion didn't set Obstacle
            int x = randomGenerator.generateRandomInt(0, numLanes - 1);//choose 0 - 3 lanes
            
            //Check if the selected position is empty
            if(sectionLanes[x][y] == ' ')
            {
                char obstacleType = createRandomObstacleSymbol();
                sectionLanes[x][y] = obstacleType;
                // Check if the selected position is 'B'(block) if three are three consecutivae 'B' obstacles
                if(obstacleType == 'B')
                {
                    boolean allLanesOccupied = true;
                    //Rearrange the current lane if all positions in the lane are occupied by 'B' obstacles
                    for(int i = 0; i < this.numLanes; i++)
                    {
                        if(sectionLanes[i][y] != 'B')
                        {
                            allLanesOccupied = false;
                            break;//No need to continue check once one lane is not occuped
                        }
                    } 
                    if(allLanesOccupied)
                    {
                        sectionLanes[x][y] = ' ';
                        continue;
                    }
                }
                obstaclesGenerated++;
            }
        }
    }

    /**
     * Retrives information about obstacle in the specified road sections.
     * This method iterate through the road sections and identifies and types of obstacles.
     *
     * @return A list of strings containing information about generated obstacles, formatted as follows:
     * "Generate obtstacle at(x, y) of type: osbstacleType"
     */
     public List<String> tellObstaclesInformation()
     {
        List<String> obstaclePositionAndTypeList = new ArrayList<>();

        //iterate through each lane and section to identifity obstacle
        for(int x = 0; x < this.numLanes; x++)
        {
            for(int y = 0; y < this.sectionsLength; y++)
            {
                //Check if there is obstacle at the current position
                if(sectionLanes[x][y] != ' ')
                {
                    //Add obstacle information to the list
                    obstaclePositionAndTypeList.add("Generated obstacle at(" + x + "," + y + ") of type: " + sectionLanes[x][y] + '\n');
                }
            }
        }
        return obstaclePositionAndTypeList;
     }
    /**
     * Overrides the toString method to private a string representation of the Highway object.
     *
     * @return A string representation of the Highway object.
     */
    @Override
    public String toString()
    {
        return  "Highway{" +
                "sectionLength=" + sectionsLength +
                ", numLanes=" + numLanes +
                ", sectionLanes=" + Arrays.deepToString(sectionLanes) +
                '}';
    }

    public void testHighway()
    {
        // System.out.println("Create an Highway object with the default constantor");
        // Highway highway1 = new Highway();
        // highway1.display();

        // System.out.println("Create an Highway object with the valid non-default constantor");
        // Highway highway2 = new Highway(6, 3);
        // highway2.display();
        
        // System.out.println("Create an Highway object with the non-default constantor");
        // Highway highway3 = new Highway(-1, -2);
        // highway3.display();

        // System.out.println("Create an Highway object with the non-default constantor");
        // Highway highway4 = new Highway(' ', 2);
        // highway4.display();

        // System.out.println("test createRandomObstacleSymbol");
        // Highway highway5 = new Highway();
        // char obstacleSymbol = highway5.createRandomObstacleSymbol();//RandomGenerator Obstacle
        // System.out.println("Generated Obstacle Symbol:" + obstacleSymbol);

        // System.out.println("test set obstacle");
        // Highway highway6 = new Highway();
        // String obstacleInformation = highway6.initializeObstacles(6);
        // System.out.println("Generate Obstacle Information:\n " + obstacleInformation);
        // System.out.println("Updated Highway Information");
        // highway6.display();

        // System.out.println("Test toString");
        // Highway highway7 = new Highway();
        // String highwayInformation = highway7.toString();
        // System.out.println("Highway Information:\n" + highwayInformation);

    }
}
   
