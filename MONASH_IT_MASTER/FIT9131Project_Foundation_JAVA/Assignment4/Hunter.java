import java.util.ArrayList;
import java.util.List;

/**
 * The Hunter class represents a hunter that interactes with various animals, such as penguins, foxed, cats and sharks.
 * It simulates the hunting activities based on the number of dog and animal probabilities.
 * It tracks the number of numberof dogs then calculate cat fox malePenguin femalePenguin egg chick killed count.
 *
 * @author Ziqi Pei
 * @version 3.0 
 */
public class Hunter
{
    private PenguinFamily penguinFamily;
    private int malePenguinKilledCount;
    private int femalePenguinKilledCount;
    private int chickKilledCount;
    private int eggKilledCount;
    private int foxKilledCount;
    private int catKilledCount;

    /**
     * Default constructor for theHunter clss
     *
     */
    public Hunter()
    {
        malePenguinKilledCount = 0;
        femalePenguinKilledCount = 0;
        chickKilledCount = 0;
        eggKilledCount = 0;
        foxKilledCount = 0;
        catKilledCount = 0;
    }
    /**
     * Constructor to create a Hunter object with a reference to a PenguinFamily object.
     *
     * @param penguinFamily The penguin family used for a animal probability calculations.
     */
    public Hunter(PenguinFamily penguinFamily)
    {
        this.penguinFamily = penguinFamily;
        this.malePenguinKilledCount = malePenguinKilledCount;
        this.femalePenguinKilledCount = femalePenguinKilledCount;
        this.chickKilledCount = chickKilledCount;
        this.eggKilledCount = eggKilledCount;
        this.foxKilledCount = foxKilledCount;
        this.catKilledCount = catKilledCount;
    }

    /**
     * Gets the count of male penguins killed by the hunter.
     *
     * @return The count of male penguins killed.
     */
    public int getMalePenguinKilledCount()
    {
        return malePenguinKilledCount;
    }

    /**
     * Set the count of male penguins killed by the hunter.
     * 
     * @param malePenguinKilledCount The count of male penguins killed  to be set.
     */
    public void setPenguinFamiliesCount(int malePenguinKilledCount)
    {
        this.malePenguinKilledCount = malePenguinKilledCount;
    }

    /**
     * Gets the count of female penguins killed by the hunter.
     *
     * @return The count of female penguin killed
     */
    public int getFemalePenguinKilledCount()
    {
        return femalePenguinKilledCount;
    }

    /**
     * Sets the counts of female penguin killed by the hunter
     *
     * @param femalePenguinKilledCount The count of female penguins killed to be set.
     */
    public void setFemalePenguinKilledCount(int femalePenguinKilledCount)
    {
        this.femalePenguinKilledCount = femalePenguinKilledCount;
    }

    /**
     * Get  the count of chick kiled by the hunter.
     *
     * @return The count of chicks killed.
     */
    public int getchickKilledCount()
    {
        return chickKilledCount;
    }

    /**
     * Set the count of chicks killed by the hunter.
     *
     * @param chickKilledCount The count of chicks kiled to be set.
     */
    public void setChickKilledCount(int chickKilledCount)
    {
        this.chickKilledCount = chickKilledCount;
    }

    /**
     * Get the count of eggs killed by the hunter.
     *
     * @return the count of egg killed.
     */
    public int getEggKilledCount()
    {
        return eggKilledCount;
    }

    /**
     * Set the cout of egg killed by the hunter.
     *
     * @param eggKilledCount This count of egg killed to be set.
     */
    public void setEggKilledCount(int eggKilledCount)
    {
        this.eggKilledCount = eggKilledCount;
    }

   /**
     * Get the count of foxes killed by the hunter.
     *
     * @return the count of foxes killed.
     */
    public int getFoxKilledCount()
    {
        return foxKilledCount;
    }

    /**
     * Set the cout of fox killed by the hunter.
     *
     * @param foxKilledCount This count of egg killed to be set.
     */
    public void setFoxKilledCount(int foxKilledCount)
    {
        this.foxKilledCount = foxKilledCount;
    }

   /**
     * Get the count of cats killed by the hunter.
     *
     * @return the count of cats killed.
     */
    public int getCatKilledCount()
    {
        return catKilledCount;
    }

    /**
     * Set the cout of cat killed .
     *
     * @param foxKilledCount This count of egg killed to be set.
     */
    public void setCatKilledCount(int catKilledCount)
    {
        this.catKilledCount = catKilledCount;
    }
    
    /**
     * Simulation the hunting cativities based on the number of dogs and animal probabilited.
     * It tracks the number of killed animals and  returns the result as a list of integers.
     * 
     * @param numberOfDogs the number of dogs  a varilable for hunting.
     * @param penguins The list of penguins to be hunted.
     * @param fox The list of foxes to be hunted.
     * @param cats The list of cats to be hunted.
     * @param sharks The list of sharks to be hunted.
     * @param chicks The list of chicks to be hunted.
     * @param A list of integer representing the number of killed animal in the fllowing order:
     * [malePenguinKilledCount, femalePenguinKilledCount, chickKilledCount, eggKilledCount, foxKilledCount, catKilledCount]
     */
    public List<Integer> monthKilledAnimal(int numberOfDogs, List<Penguin> penguins, List<Fox> foxes, 
                                                   List<Cat> cats, List<Shark> sharks, List<Chick> chicks)
    {
        //initializing of counters for different types of killed animals.
        int malePenguinKilledCount = 0;
        int femalePenguinKilledCount = 0;
        int chickKilledCount = 0;
        int eggKilledCount = 0;
        int foxKilledCount = 0;
        int catKilledCount = 0;
        
        //Hunting logic for foxes
        for(Fox fox : foxes)
        {
            if(!fox.getIsAlive())
            {
                continue;
            }
            if(numberOfDogs == 0)
            {
                for(Penguin penguin : penguins)
                {
                    if(!penguin.getIsAlive())
                    {
                        continue;
                    }
                    //(min 1, max 100, percentage)
                    if(penguinFamily.probability(1, 100, 8))
                    {
                        continue;
                    }
                    penguin.death();
                    if(penguin.getIsMale())
                    {
                        malePenguinKilledCount++;
                    }
                    else
                    {
                        femalePenguinKilledCount++;
                    }
                }
                for(Chick chick : chicks)
                {
                    if(!chick.getIsAlive())
                    {
                        continue;
                    }
                    //(min 8, max100,percentage8)
                    if(penguinFamily.probability(1, 100, 8))
                    {
                        continue;
                    }
                    chick.death();
                    if(chick.getIsPrey())
                    {
                        eggKilledCount++;
                    }
                    else
                    {
                        chickKilledCount++;
                    }
                }
            }
            else if(numberOfDogs == 1)
            {
                for(Penguin penguin : penguins)
                {
                    if(!penguin.getIsAlive())
                    {
                        continue;
                    }
                    //min1 max 100, 0.02 percentage killed
                    if(penguinFamily.probability(1, 100, 2))
                    {
                        continue;
                    }
                    penguin.death();
                    if(penguin.getIsMale())
                    {
                        malePenguinKilledCount++;
                    }
                    else
                    {
                        femalePenguinKilledCount++;
                    }
                }
                for(Chick chick : chicks)
                {
                    if(!chick.getIsAlive())
                    {
                        continue;
                    }
                    if(penguinFamily.probability(1, 100, 2))
                    {
                        continue;
                    }
                    chick.death();
                    if(chick.getIsPrey())
                    {
                        eggKilledCount++;
                    }
                    else
                    {
                        chickKilledCount++;
                    }
                }
                //min 1, max 100, percentage 1
                if(penguinFamily.probability(1, 100, 1))
                {
                    continue;
                }
                fox.death();
                foxKilledCount++;
            }
            else
            {
                for(Penguin penguin : penguins)
                {
                    if(!penguin.getIsAlive())
                    {
                        continue;
                    } 
                    //0.008 hunted by fox
                    if(penguinFamily.probability(1, 1000, 8))
                    {
                        continue;
                    }
                    penguin.death();
                    if(penguin.getIsMale())
                    {
                        malePenguinKilledCount++;
                    }
                    else
                    {
                        femalePenguinKilledCount++;
                    }
                }
                for(Chick chick : chicks)
                {
                    if(!chick.getIsAlive())
                    {
                        continue;
                    }
                    //min 1, max100 , 8% beeaten
                    if(penguinFamily.probability(1, 100, 8))
                    {
                        continue;
                    }
                    chick.death();
                    if(chick.getIsPrey())
                    {
                        eggKilledCount++;
                    }
                    else
                    {
                        chickKilledCount++;
                    }
                }
                if(penguinFamily.probability(1, 100, 10))
                {
                    continue;
                }
                fox.death();
                foxKilledCount++;
            }
        }

        // Hunting logic for cats
        for(Cat cat : cats)
        {
            if(!cat.getIsAlive())
            {
                continue;
            }
            if(numberOfDogs == 2)
            {
                for(Penguin penguin : penguins)
                {
                    if(!penguin.getIsAlive())
                    {
                        continue;
                    }
                    // 0.004 be eatenChickCount
                    if(penguinFamily.probability(1, 1000, 4))
                    {
                        continue;
                    }
                    penguin.death();
                    if(penguin.getIsMale())
                    {
                        malePenguinKilledCount++;
                    }
                    else
                    {
                        femalePenguinKilledCount++;
                    }
                }
                for(Chick chick : chicks)
                {
                    if(!chick.getIsAlive())
                    {
                        continue;
                    }
                    //min 1 max 1000, percemtage 0.004
                    if(penguinFamily.probability(1, 100, 4))
                    {
                        continue;
                    }
                    chick.death();
                    if(chick.getIsPrey())
                    {
                        eggKilledCount++;
                    }
                    else
                    {
                        chickKilledCount++;
                    }
                }
                // 0.1 percentage
                if(penguinFamily.probability(1, 100, 10))
                {
                    continue;
                }
                cat.death();
                catKilledCount++;
            }
            else
            {
                for(Penguin penguin : penguins)
                {
                    if(!penguin.getIsAlive())
                    {
                        continue;
                    }
                    //0.04
                    if(penguinFamily.probability(1, 100, 4))
                    {
                        continue;
                    }
                    penguin.death();
                    if(penguin.getIsMale())
                    {
                        malePenguinKilledCount++;
                    }
                    else
                    {
                        femalePenguinKilledCount++;
                    }
                }
                for(Chick chick : chicks)
                {
                    if(!chick.getIsAlive())
                    {
                        continue;
                    }
                    if(penguinFamily.probability(1, 100, 4))
                    {
                        continue;
                    }
                    chick.death();
                    if(chick.getIsPrey())
                    {
                        eggKilledCount++;
                    }
                    else
                    {
                        chickKilledCount++;
                    }
                }
            }
            if(numberOfDogs == 1 && penguinFamily.probability(1, 100, 1))
            {
                cat.death();
                catKilledCount++;
            }
        }
        
        //Hunting logic for sharks
        for(Shark shark : sharks)
        {
            for(Penguin penguin : penguins)
            {
                if(!penguin.getIsAlive())
                {
                    continue;
                }
                if(penguinFamily.probability(1, 100, 2))
                {
                    continue;
                }
                penguin.death();
                if(penguin.getIsMale())
                {
                    malePenguinKilledCount++;
                }
                else
                {
                    femalePenguinKilledCount++;
                }
            }
        }

        // Create a list of integers to represents the number of killed animalKilledCounts
        List<Integer> numbers = new ArrayList<>();
        numbers.add(malePenguinKilledCount);
        numbers.add(femalePenguinKilledCount);
        numbers.add(chickKilledCount);
        numbers.add(eggKilledCount);
        numbers.add(foxKilledCount);
        numbers.add(catKilledCount);
        return numbers;  
    }

    /**
     * Display a Welcome Message for Hunter class.
     */
     public void display()
     {
        System.out.println("Welcome, Hunter!");
        System.out.println("This is the Hunter class for aniaml hunting.");
     }
    /**
     * Covert the Hunter object to a string representation
     *
     * @return A String representing th Hunter object.
     */
    @Override
    public String toString()
    {
        return "Hunter{" + 
                "PenguinFamily" + penguinFamily +
                '}';
    } 
    
}
