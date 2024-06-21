import java.util.ArrayList;
import java.util.List;

/**
 * The PenguinFamily class represents a simulation of a penguin family in a virtual environment.
 * It tracks various statistics about the prnguins about the penguins and their offspring.
 *
 * @author Ziqi Pei
 * @Version 12.0
 */
public class PenguinFamily
{ 
    private RandomGenerator randomGenerator;

    // Fileds for Tracking various completeCount
    private int livePenguins;
    private int liveChickCount;
    private int penguinFamiliesCount;
    private int newChicksCount;
    private int uneatenEggCount;

    /**
     * Default constructor for the PenguinFamily.
     * Initializes all count fields to zero.
     */
    public PenguinFamily()
    {
        livePenguins = 0;
        liveChickCount = 0;
        penguinFamiliesCount = 0;
        newChicksCount = 0;
        uneatenEggCount = 0;
    }

    /**
     * Constructor to create a PenguinFamily with a random generator and set initial counts.
     *
     * @param randomGenerator The  generator to be used
     */
    public PenguinFamily(RandomGenerator randomGenerator)
    {
        this.randomGenerator = randomGenerator;
        this.liveChickCount = liveChickCount;
        this.penguinFamiliesCount = penguinFamiliesCount;
        this.newChicksCount = newChicksCount;
        this.uneatenEggCount = uneatenEggCount;
    }

    /**
     * Set the Count of live penguins
     *
     * @param livePenguinCount The count of live penguins to be set
     */
    public void setLivePenguinCount(int livePenguinCount)
    {
        this.livePenguins = livePenguins;
    }

    /**
     * Set the count of live chicks.
     *
     * @param liveChickCount The count of live chicks to be set.
     */
    public void setLiveChickCount(int liveChickCount)
    {
        this.liveChickCount = liveChickCount;
    }

    /**
     * Get the count of penguin families.
     *
     * @return The count of penguin familes.
     */
    public int getPenguinFamiliesCount()
    {
        return penguinFamiliesCount;
    }

    /**
     * Set the count of penguin familes.
     *
     * @param penguinFamiliesCount The count of penguin families to be set.
     */
    public  void setPenguinFamiliesCount(int penguinFamiliesCount)
    {
        this.penguinFamiliesCount = penguinFamiliesCount;
    }

    /**
     * Get the count of new chicks.
     *
     * @return The count of new chicks.
     */
    public int getNewChicksCount()
    {
        return newChicksCount;
    }

    /**
     * Set the counts of new chicks
     *
     * @param newChicksCount The count of new chicks to be set.
     */
    public void setNewChickCount(int newChicksCount)
    {
        this.newChicksCount = newChicksCount;
    }

    /**
     * Get the count of uneaten eggs. 
     *
     * @return The count of uneaten eggs.
     */
    public int getUneatenEggCount()
    {
        return uneatenEggCount;
    }

    /**
     * set the count of uneaten eggs.
     *
     * @param The count of uneaten eggs to be set.
     */
    public void setUneatenEggCount(int uneatenEggCount)
    {
        this.uneatenEggCount = uneatenEggCount;
    }

    /**
     * Get the count of live penguins from the provided list of penguins.
     *
     * @param penguins The list of penguins to count live penguins from.
     * @return The count of live penguins.
     */  
    public int getLivePenguinCount(List<Penguin> penguins)
    {
        int livePenguins = 0;
        for(Penguin penguin : penguins)
        {
            if(penguin.getIsAlive())
            {
                livePenguins ++;
            }
        }
        return livePenguins;
    }

    /**
     * Get the count of live chicks from provided list of chicks.
     *
     * @param chicks The list of chicks to count live chicks
     * @return The count of live chicks.
     */
    public int getLiveChickCount(List<Chick> chicks)
    {
        int liveChicks = 0;
        for(Chick chick : chicks)
        {
            if(chick.isAlive())
            {
                liveChicks ++;
            }
        }
        return liveChicks;
    }

    /**
     * Calculate the numbe of penguin families from the provided list of penguins.
     *
     * @param penguins The list of penguins to calculate penguins familes from.
     * @return The number of penguin familes.
     */ 
    public int penguinFamilies(List<Penguin> penguins)
    {
        int penguinFamiliesCount = 0;
        for(Penguin penguin : penguins)
        {
            if(!"".equals(penguin.getMateId()))
            {
                penguinFamiliesCount++;
            }
        }
        return penguinFamiliesCount / 2;
    }

    /**
     * Calculate the count of new chicks from the provide list of chicks
     *
     * @param chicks The list of chicks to calculate new chicks from.
     * @return The count of new chicks.
     */
    public  int calculateNewChicks(List<Chick> chicks)
    {
        int liveChickCount = 0;
        for(Chick chick : chicks)
        {
            if(chick.getIsPrey() && chick.getIsAlive())
            {
                liveChickCount++;
            }
        }
        return liveChickCount;
    }

    /**
     * Get the count of uneaten egg from the provides list of chicks.
     *
     * @param chicks The list of chicks to count uneaten egg from.
     * @return The count of uneaen eggs.
     */
    public int getUneatenEggCount(List<Chick> chicks)
    {
        int uneatenEggCount = 0;
        for(Chick chick : chicks) 
        {
            if(chick.getIsPrey())
            {
                uneatenEggCount++;
            }
        }
        return uneatenEggCount;
    }

    /**
     * Generate a unique penguin ID based on the provided list of penguins.
     * if the list is empty . the method return the initial ID"P000."
     *
     * @param penguins The list of penguins to check for ID uniquences.
     * @return A unique penguin ID.
     */
    public String generatePenguinID(List<Penguin> penguins)
    {
        int initialCode = 1;
        String code = "";
        if(penguins.size() == 0) 
        {
            return "P000";
        }
        else
        {
            while (true){
                code = "P" + String.format("%03d", initialCode);
                boolean idFlag = duplicatePenguinID(code, penguins);
                if(!idFlag) //id statement
                {
                    break;
                }
                initialCode++;
            }
        }
        return code;
    }

    /**
     * Check if the generated penguin ID is a duplicate within the provided list of penguins.
     *
     * @param code The penguin ID to check for  duplication.
     * @param penguins The list of penguins to check for duplicate IDs
     * @return True if the ID is a duplicate. 
     */
    public boolean duplicatePenguinID(String code, List<Penguin> penguins)
    {
        for(Penguin penguin : penguins)
        {
           if(penguin.getId().equals(code))
           {
                return true;
           }
        }
        return false;
    }

    /**
     * Generate a unique fox ID based on the provided list of Fox.
     * if the list is empty . the method return the initial ID"F000."
     *
     * @param foxes The list of foxes to check for ID uniquences.
     * @return A unique fox ID.
     */
    public String generateFoxID(List<Fox> foxes)
    {
        int initialCode = 1;
        String code = "";
        if(foxes.size() == 0)
        {
            return "F000";
        }
        else
        {
            while(true)
            {
                code = "F" + String.format("%03d", initialCode);
                boolean idFlage = duplicateFoxID(code,foxes);
                if(!idFlage)
                {
                    break;
                }
                initialCode++;
            }
        }
        return code;
    }

    /**
     * Check if the generated foxes ID is a duplicate within the provided list of Fox.
     *
     * @param code The Fox ID to check for  duplication.
     * @param foxes The list of foxes to check for duplicate IDs
     * @return True if the ID is a duplicate. 
     */
    public boolean duplicateFoxID(String code, List<Fox> foxes)
    {
        for(Fox fox : foxes)
        {
            if(fox.getId().equals(code))
            {
                return true;
            }
        }
        return false;
    }

    /**
     * Generate a unique Cat ID based on the provided list of Cat.
     * if the list is empty . the method return the initial ID"C000."
     *
     * @param cats The list of cat to check for ID uniquences.
     * @return A unique cat ID.
     */
    public String generateCatID(List<Cat> cats)
    {
        int initialCode = 1;
        String code = "";
        if(cats.size() == 0)
        {
            return "C000";
        }
        else
        {
            while(true)
            {
                code = "C" + String.format("%03d", initialCode);
                boolean idFlag = duplicateCatID(code, cats);
                if(!idFlag)
                {
                    break;
                }
                initialCode++;
            }
        }
        return code;
    }

     /**
     * Check if the generated cats ID is a duplicate within the provided list of cat.
     *
     * @param code The cat ID to check for  duplication.
     * @param cats The list of cats to check for duplicate IDs
     * @return True if the ID is a duplicate. 
     */
    public boolean duplicateCatID(String code, List<Cat> cats)
    {
        for(Cat cat : cats)
        {
            if(cat.getId().equals(code))
            {
                return true;
            }
        }
        return false;
    }

    /**
     * Generate a unique Shark ID based on the provided list of Shark.
     * if the list is empty . the method return the initial ID"S000."
     *
     * @param sharks The list of shark to check for ID uniquences.
     * @return A unique shark ID.
     */
    public String generateSharkID(List<Shark> sharks)
    {
        
        int initialCode = 1;
        String code = "";
        if(sharks.size() == 0)
        {
            return "S000";
        }
        else
        {
            while(true)
            {
                code  =  "S" + String.format("%03d", initialCode);
                boolean idFlag = duplicateSharkID(code, sharks);
                if(!idFlag)
                {
                    break;
                }
                initialCode++;
            }
        }
        return code;
    }

    /**
     * Check if the generated sharks ID is a duplicate within the provided list of shark.
     *
     * @param code The shark ID to check for  duplication.
     * @param The list of sharks to check for duplicate IDs
     * @return True if the ID is a duplicate. 
     */
    public boolean duplicateSharkID(String code, List<Shark> sharks)
    {
        for(Shark shark : sharks)
        {
            if(shark.getId().equals(code))
            {
                return true;
            }
        }
        return false;
    }

    /**
     * Generate a unique chick ID based on the provided list of chick.
     * if the list is empty . the method return the initial ID"H000."
     *
     * @param chicks The list of chick to check for ID uniquences.
     * @return A unique chick ID.
     */
    public String generateChickID(List<Chick> chicks)
    {
        int initialCode = 1;
        String code = "";
        if(chicks.size() == 0)
        {
            return "H000";
        }
        else
        {
            while(true)
            {
                code = "H" + String.format("%03d", initialCode);
                boolean idFlag = duplicateChickID(code, chicks);
                if(!idFlag)
                {
                    break;
                }
                initialCode++;
            }
        }
        return code;
    }

    
    /**
     * Check if the generated chicks ID is a duplicate within the provided list of chick.
     *
     * @param code The chick ID to check for  duplication.
     * @param The list of chicks to check for duplicate IDs
     * @return True if the ID is a duplicate. 
     */
    public boolean duplicateChickID(String code, List<Chick> chicks)
    {
        for(Chick chick : chicks)
        {
            if(chick.getId().equals(code))
            {
                return true;
            }
        }
        return false;
    }
    /**
     * Initilize the number of different animal species by generating and adding tehm to their respective list.
     *
     * @param penguinNumber The number of penguins to initialize.
     * @param foxNumber     The number of foxes to initoalize.
     * @param catNumber     The number of cats to  initialize.
     * @param sharkNumber   The number of sharks to initialize. 
     * @param penguins      The list of penguins to add initialized penguins.
     * @param foxes         The list of penguins to add initialized foxes.
     * @param cats          The list of cats to add initialized cats.
     * @param sharks        The list of sharks to add initialized sharks.
     */    
    public void initilizeAnimalNumber(int penguinNumber, int foxNumber, int catNumber, int sharkNumber, List<Penguin> penguins,
                                      List<Fox> foxes, List<Cat> cats, List<Shark> sharks)
    {
        for(int i = 0; i < penguinNumber; i++)
        {
            String id = generatePenguinID(penguins);
            int n = randomGenerator.generateRandomInt(1, 10);
            boolean isMale = n <= 5;
            Penguin penguin = new Penguin(id, isMale);
            penguins.add(penguin);
        }
        for(int i = 0; i < foxNumber; i++)
        {
            String id = generateFoxID(foxes);
            Fox fox = new Fox(id);
            foxes.add(fox);
        }
        for(int i = 0; i < catNumber; i++)
        {
            String id = generateCatID(cats);
            Cat cat = new Cat(id);
            cats.add(cat);
        }
        for(int i = 0; i < sharkNumber; i++)
        {
            String id = generateSharkID(sharks);
            Shark shark = new Shark(id);
            sharks.add(shark);
        }
    }

    /**
     * Encourage penguins to find mates. if a penguin doestn't have a mate and is male,it looks for a female mate.
     * If a penguin is female and doesn't have a mate, it looks for a male mate.
     *
     * @param penguins The list of penguins to encourage mating among
     */
    public void penguinMate(List<Penguin> penguins)
    {
        for(Penguin penguin : penguins)
        {
            if(!"".equals(penguin.getMateId()))
            {
                continue;
            }
            if(penguin.getIsMale())
            {
                for(Penguin female : penguins)
                {
                    if(!female.getIsMale() && "".equals(female.getMateId()))
                    {
                        penguin.mate(female.getId());
                        female.mate(penguin.getId());
                        break;
                    }
                }
            }
            else
            {
                for(Penguin male : penguins)
                {
                    if(male.getIsMale()  && "".equals(male.getMateId()))
                    {
                        penguin.mate(male.getId());
                        male.mate(penguin.getId());
                        break;    
                    }   

                }
            }
        }
    }

    /**
     * Determine a randon event's success based on a given probability.
     *
     * @param min  The minmun value for random generation.
     * @param max  The maximun value for randon generation.
     * @param percentage The threshold for success as a percentage.
     * @return True if the random event is successful; otherwise false.
     */
    public boolean probability(int min, int max, int percentage)
    {
        int i = randomGenerator.generateRandomInt(min, max);
        if(i > percentage)
        {
            return true;
        }
        return false;
    }

    /**
     * Set the month for all live chicks to advance their growth.
     *
     * @param chicks The list of live chicks to undate their age.
     *
     */
    public void addEggMonth(List<Chick> chicks)
    {
        for(Chick chick : chicks)
        {
            if(chick.getIsAlive())
            {
                chick.setMonth();
            }
        }
    }

    /**
     * Simulate the hatching of new chick eggs based on the availability of potential parent penguins.
     *
     * @param month The current month
     * @param chicks The list o chicks to add newly hatched chicks.
     * @param penguins The list of penguins to identify petential parents.
     * @return The number of new chick egg hatched.
     */
    public int newEgg(int month, List<Chick> chicks, List<Penguin> penguins)
    {
        int newEggNumber = 0;
        if(month < 8 && month > 2)
        {
            return newEggNumber;
        }
        for(Penguin penguin : penguins)
        {
            if(!penguin.getIsAlive() || "".equals(penguin.getMateId()) || penguin.getChickNumber() >= 2)
            {
                continue;
            }
            for(Penguin mate : penguins)
            {
                if(mate.getMateId().equals(penguin.getMateId()) && mate.getIsAlive())
                {
                    String id = generateChickID(chicks);
                    Chick chick = new Chick(id);
                    chicks.add(chick);
                    penguin.setChickNumber(id);
                    mate.setChickNumber(id);
                    newEggNumber++;
                    break;
                }
            }
        }
        return newEggNumber;
    }

    /**
     * Check and count complete penguin familes where both mates are alive and paired.
     *
     * @param penguins The list of penguins to assess family completences.
     * @return The number of complete penguin families.
     */
    public int isComplete(List<Penguin> penguins)
    {
        int completeCount = 0;
        for(Penguin penguin : penguins)
        {
            if(!penguin.getIsAlive())
            {
                continue;
            }
            for(Penguin mate : penguins)
            {
                if(penguin.getMateId().equals(mate.getId()) && mate.getIsAlive())
                {
                    completeCount++;
                    break;
                }
            }
        }
        return completeCount / 2;
    }

    /**
     * Count the number of live, num prey chicks.
     *
     * @param chicks The list of chick to count live, non prey chicks.
     * @return The count of live , non pery  chicks.
     */
    public int liveChick(List<Chick> chicks)
    {
        int liveChickCount = 0;
        for(Chick chick : chicks)
        {
            if(chick.getIsAlive() && chick.getIsPrey())
            {
                liveChickCount++;
            }
        }
        return liveChickCount;
    }

    /**
     * Count the number of live eggs.
     *
     * @param chicks The list of chicks to count live eggs.
     * @return The count of live eggs.
     */
    public int liveEgg(List<Chick> chicks)
    {
        int liveEggCount = 0;
        for(Chick chick : chicks)
        {
            if(chick.getIsAlive() && !chick.getIsPrey())
            {
                liveEggCount++;
            }
        }
        return liveEggCount;
    }

    /**
     * Identify and count chick without parents(chicks whose parent are deceased).
     *
     * @param penguins The list of penguins to track chick relationships
     * @param chicks The list of chicks to check for parentless chicks
     * @param Alist constaining the counts of parentless ggs and parentless chicks.
     */
    public List<Integer> chickWithoutParents(List<Penguin> penguins, List<Chick> chicks)
    {
        int eggKilledCount = 0;
        int chickKilledCount = 0;
        for(Penguin penguin : penguins)
        {
            if(!penguin.getIsAlive() || "".equals(penguin.getMateId()))
            {
                continue;
            }
            List<String> chickIds = new ArrayList<>();
            for(Penguin mate : penguins)
            {
                if(penguin.getMateId().equals(mate.getId()) && !mate.getIsAlive())
                {
                    chickIds = penguin.getChickIds();
                }
            }
            if(chickIds.size() == 0)
            {
                continue;
            }
            for(String chickId : chickIds)
            {
                for(Chick chick : chicks)
                {
                    if(chick.getId().equals(chickId) && chick.getIsAlive())
                    {
                        chick.death();
                        if(chick.getIsPrey())
                        {
                             chickKilledCount++;
                        }
                        else
                        {
                            eggKilledCount++;
                        }
                        break;  
                    }
                }
            }
        }
        List<Integer> eggAndChickKilledCount = new ArrayList<>();
        eggAndChickKilledCount.add(eggKilledCount);
        eggAndChickKilledCount.add(chickKilledCount);
        return eggAndChickKilledCount;
    }

    /**
     * Simulate the hatching and potential predation of chick eggs based on a probability threshold.
     *
     * @param chicks The list of chick eggs to simulate hatching and predation.
     * @return  Alist constaining the counts of hatched chick egg and predated chicks.
     */
    public List<Integer> hatchChick(List<Chick> chicks)
    {
        int eggKilledCount = 0;
        int preyChickCount = 0;
        for(Chick chick : chicks)
        {
            if(!chick.getIsAlive() || chick.getMonth() != 1)
            {
                continue;
            }
            if(!probability(1, 10, 7))
            {
                chick.prey();
                preyChickCount++;
            }
            else
            {
                chick.death();
                eggKilledCount++;
            }     
        }
        List<Integer> chickNumbers = new ArrayList<>();
        chickNumbers.add(eggKilledCount);
        chickNumbers.add(preyChickCount);
        return chickNumbers;
    }

    /**
     * Display the currrent statistics of the Penguin Family ,includeing live penguins.
     * new chicks, add uneaten eggs.
     */
    public void display()
    {
        System.out.println("Live Penguins: " + livePenguins);
        System.out.println("Live Chicks: " + liveChickCount); 
        System.out.println("penguinFamilies " + penguinFamiliesCount);
        System.out.println("New Chicks: " + newChicksCount);
        System.out.println("Uneaten Eggs: " + uneatenEggCount);
    }

    /**
     * Provide a string representation of the PenguinFamily object, including  details on live prnguins, live chick.
     * penguin families, new chicks, and uneaten eggs.
     *
     * @ return A String representation of the PenguinFamily object。
     */
    @Override
    public String toString()
    {
        return "PenguinFamily{" + 
                "livePenguinCount=" + livePenguins +
                ", liveChickCount=" +liveChickCount +
                ", penguinFamiliesCount=" + penguinFamiliesCount +
                ", newChicksCount=" + newChicksCount +
                ", uneatenEggCount=" + uneatenEggCount +
                "}";
    }
} 
