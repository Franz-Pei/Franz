import java.util.*;

/**
 * This class represents the Subway system for calculating the cost of a subway sandwich.
 */
public class Subway{

	// List of valid food types and their corresponding base prices
	private static final List<String> foodTypes = Arrays.asList("sub", "salad", "wrap");
	private static final List<Integer> foodTypePrices = Arrays.asList(2, 5, 3);

	// List of valid sizes and their corresponding surcharges
	private static final List<String> sizes = Arrays.asList("6-inch", "footlong", "");
	private static final List<Integer> sizeSurcharges= Arrays.asList(2, 4, 0);

	// List of valid breads and their corresponding surcharges
	private static final List<String> breads = Arrays.asList("garlic", "plain", "wholewheat", "gluten-free");
	private static final List<Integer> breadSurcharges = Arrays.asList(0, 0, 0, 1);

	// List of valid cheese options and their corresponding surcharges
	private static final List<String> cheeses = Arrays.asList("yes", "no");
	private static final List<Integer> cheeseSurcharges = Arrays.asList(1, 0);

	// List of valid veggies and their corresponding surcharges
	private static final List<String> veggiesList = Arrays.asList("standard", "premium");
	private static final List<Integer> veggieSurcharges = Arrays.asList(3, 4);

	// List of valid meats and their corresponding costs
	private static final List<String> meats = Arrays.asList("meatball", "blt", "standard steak", "wagyu steak");
	private static final List<Integer> meatCosts = Arrays.asList(3, 4, 4, 6);
	
	/**
     * Checks if the input for creating a subway sandwich is valid.
     *
     * @param food_type The food type (sub, salad, wrap)
     * @param size      The size (6-inch, footlong, empty for salad/wrap)
     * @param bread     The bread type (garlic, plain, wholewheat, gluten-free)
     * @param cheese    Whether to include cheese (yes, no)
     * @param veggies   The type of veggies (standard, premium)
     * @param meat      The type of meat (meatball, blt, standard steak, wagyu steak)
     * @return true if the input is valid, false otherwise
     */
	public static boolean validInputs(String food_type, String size, String bread, String cheese, String veggies, String meat)
	{
		if(!foodTypes.contains(food_type) || !sizes.contains(size) || !breads.contains(bread)
			|| !cheeses.contains(cheese) || !veggiesList.contains(veggies) || !meats.contains(meat)){
			return false;
		}
		if (food_type.equals("sub") && size.isEmpty()){
			return false;
		}
		return true;
	
	}

	/**
     * Calculates the cost of a subway sandwich based on the provided options.
     *
     * @param food_type The food type (sub, salad, wrap)
     * @param size      The size (6-inch, footlong, empty for salad/wrap)
     * @param bread     The bread type (garlic, plain, wholewheat, gluten-free)
     * @param cheese    Whether to include cheese (yes, no)
     * @param veggies   The type of veggies (standard, premium)
     * @param meat      The type of meat (meatball, blt, standard steak, wagyu steak)
     * @return The total cost of the subway sandwich, or -1 if the input is invalid
     */
    public static int subway_price(String food_type, String size, String bread, String cheese, String veggies, String meat) {
        // Convert input strings to lowercase for case-insensitive comparison
		food_type = food_type.toLowerCase();
		size = size.toLowerCase();
		bread = bread.toLowerCase();
		cheese = cheese.toLowerCase();
		veggies = veggies.toLowerCase();
		meat = meat.toLowerCase();

		// Check if the input is valid
		if (!validInputs(food_type,size, bread, cheese, veggies, meat)){
			return -1;
		}

		// Calculate the base price based on the food type
		int basePrice = getFoodTypePrice(food_type);
		
		// Calculate the size surcharge (skip for salad)
		int sizeSurcharge = 0;
		if(!food_type.equals("salad")){
			sizeSurcharge = getSizeSurcharge(size);
		}
		// Calculate the bread surcharge (skip for salad)
		int breadSurcharge = 0;
		if(!food_type.equals("salad")){
			breadSurcharge = getBreadSurcharge(bread);
		} 
		// Calculate the cheese surcharge (skip for salad)
		int cheeseSurcharge = 0;
		if(!food_type.equals("salad")){
			cheeseSurcharge = getCheeseSurcharge(cheese);
		}
		// Calculate the veggies surcharge
		int veggiesSurcharge = getVeggiesSurcharge(veggies, food_type);
		
		// Calculate the meat cost
		int meatCost = getMeatCost(meat, food_type);

		// If the meat cost is invalid, return -1
		if (meatCost == -1){
			return -1;
		}
		// Calculate the total cost by summing all components
		return basePrice + sizeSurcharge + breadSurcharge + cheeseSurcharge + veggiesSurcharge + meatCost;
    }

	/**
     * Retrieves the base price for the given food type.
     *
     * @param food_type The food type (sub, salad, wrap)
     * @return The base price, or -1 if the food type is invalid
     */
	public static int getFoodTypePrice(String food_type){
		int index = foodTypes.indexOf(food_type);
		return index == -1 ? -1 : foodTypePrices.get(index);
	}
	
	/**
     * Retrieves the size surcharge for the given size.
     *
     * @param size The size (6-inch, footlong, empty for salad/wrap)
     * @return The size surcharge, or -1 if the size is invalid
     */
	public static int getSizeSurcharge(String size){
		int index = sizes.indexOf(size);
		return index == -1 ? -1 : sizeSurcharges.get(index);
	}

	/**
     * Retrieves the bread surcharge for the given bread type.
     *
     * @param bread The bread type (garlic, plain, wholewheat, gluten-free)
     * @return The bread surcharge, or -1 if the bread type is invalid
     */
	public static int getBreadSurcharge(String bread){
		int index = breads.indexOf(bread);
		return index == -1 ? -1 : breadSurcharges.get(index);
	}

	/**
     * Retrieves the cheese surcharge for the given cheese option.
     *
     * @param cheese Whether to include cheese (yes, no)
     * @return The cheese surcharge, or -1 if the cheese option is invalid
     */
	public static int getCheeseSurcharge(String cheese)	{
		int index = cheeses.indexOf(cheese);
		return index == -1 ? -1 : cheeseSurcharges.get(index);
	}

	/**
     * Retrieves the veggies surcharge for the given veggies type and food type.
     *
     * @param veggies   The type of veggies (standard, premium)
     * @param food_type The food type (sub, salad, wrap)
     * @return The veggies surcharge, or -1 if the veggies type is invalid
     */
	public static int getVeggiesSurcharge(String veggies, String food_type){
		if (food_type.equals("salad")){
			int index = veggiesList.indexOf(veggies);
			return index == -1 ?  3 : veggieSurcharges.get(index); 
		}else{
			int index = getVeggiesIndex(veggies);
			return index == -1 ? -1 : veggieSurcharges.get(index);
		}
	}

	/**
     * Retrieves the index of the given veggies type in the veggiesList.
     *
     * @param veggies The type of veggies (standard, premium)
     * @return The index of the veggies type, or -1 if not found
     */
	private static int getVeggiesIndex(String veggies)
	{
		return veggiesList.indexOf(veggies);
	}

	/**
     * Retrieves the cost for the given meat type and food type.
     *
     * @param meat      The type of meat (meatball, blt, standard steak, wagyu steak)
     * @param food_type The food type (sub, salad, wrap)
     * @return The meat cost, or -1 if the meat type is invalid or if "wagyu steak" is selected for a food type other than "wrap"
     */
	public static int getMeatCost(String meat, String food_type){
		int index = meats.indexOf(meat);

		if(index == -1  ||(meat.equals("wagyu steak") && !food_type.equals("wrap"))){
			return -1;
		}
		return meatCosts.get(index);
	}
}	


