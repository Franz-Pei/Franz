public class Laundromat{
    // Minimum weight allowed
    private double minWeightAllowed = 1.0;
    // Maximum weight allowed
    private double maxWeightAllowed = 20.0;
    // Minimum drying time allowed
    private double minDryingTimeAllowed = 5.0;
    // Maximum drying time allowed
    private double maxDryingTimeAllowed = 60.0;
    // Cost per weight unit for the eco mode
    private double ecoModeWeightCost = 1.0;
    // Cost per drying time unit for the eco mode
    private double ecoModeDryingCost= 1.0;
    // Cost per weight unit for the heavy mode
    private double heavyModeWeightCost = 1.2;
    // Cost per drying time unit for the heavy mode
    private double heavyModeDryingCost = 1.2;
    // Discount factor for Monash students in eco mode
    private double ecoModeStudentDiscount = 0.95;
    // Discount factor for Monash students in heavy mode
    private double heavyModeStudentDiscount = 0.8;

    // Getter for minimum weight allowed
    public double getMinWeightAllowed(){
        return minWeightAllowed;
    }

    // Setter for minimum weight allowed
    public void setMinWeightAllowed(double minWeightAllowed)
    {
        this.minWeightAllowed = minWeightAllowed;
    }

    // Getter for maximum weight allowed
    public double getMaxWeightAllowed(){
        return maxWeightAllowed;
    }

    // Setter for maximum weight allowed
    public void setMaxWeightAllowed(double maxWeightAllowed){
        this.maxWeightAllowed = maxWeightAllowed;
    }

    // Getter for minimum drying time allowed
    public double getMinDryingTimeAllowed(){
        return minDryingTimeAllowed;
    }

    // Setter for minimum drying time allowed
    public void setMinDryingTimeAllowed(double minDryingTimeAllowed){
        this.minDryingTimeAllowed = minDryingTimeAllowed;
    }

    // Getter for maximum drying time allowed
    public double getMaxDryingTimeAllowed() {
        return maxDryingTimeAllowed;
    }

    // Setter for maximum drying time allowed
    public void setMaxDryingTimeAllowed(double maxDryingTimeAllowed) {
        this.maxDryingTimeAllowed = maxDryingTimeAllowed;
    }

    // Getter for eco mode weight cost
    public double getEcoModeWeightCost() {
        return ecoModeWeightCost;
    }

    // Setter for eco mode weight cost
    public void setEcoModeWeightCost(double ecoModeWeightCost) {
        this.ecoModeWeightCost = ecoModeWeightCost;
    }

    // Getter for eco mode drying cost
    public double getEcoModeDryingCost() {
        return ecoModeDryingCost;
    }

    // Setter for eco mode drying cost
    public void setEcoModeDryingCost(double ecoModeDryingCost) {
        this.ecoModeDryingCost = ecoModeDryingCost;
    }

    // Getter for heavy mode weight cost
    public double getHeavyModeWeightCost() {
        return heavyModeWeightCost;
    }

    // Setter for heavy mode weight cost
    public void setHeavyModeWeightCost(double heavyModeWeightCost) {
        this.heavyModeWeightCost = heavyModeWeightCost;
    }

    // Getter for heavy mode drying cost
    public double getHeavyModeDryingCost() {
        return heavyModeDryingCost;
    }

    // Setter for heavy mode drying cost
    public void setHeavyModeDryingCost(double heavyModeDryingCost) {
        this.heavyModeDryingCost = heavyModeDryingCost;
    }

    // Getter for eco mode student discount
    public double getEcoModeStudentDiscount() {
        return ecoModeStudentDiscount;
    }

    // Setter for eco mode student discount
    public void setEcoModeStudentDiscount(double ecoModeStudentDiscount) {
        this.ecoModeStudentDiscount = ecoModeStudentDiscount;
    }

    // Getter for heavy mode student discount
    public double getHeavyModeStudentDiscount() {
        return heavyModeStudentDiscount;
    }

    // Setter for heavy mode student discount
    public void setHeavyModeStudentDiscount(double heavyModeStudentDiscount) {
        this.heavyModeStudentDiscount = heavyModeStudentDiscount;
    }

    /**
     * Calcilates the cost of the laundry service
     *
     * @param isMonashStudent Whether the user is a Monash student
     * @param mode            The mode, either "eco" or "heavy"
     * @param weight          The weight of the Laundry in kilograms
     * @param drying_time     The drying time in minutes
     * @return The cost of the laundary service, rounded to decimal places
     */
    public double cost(boolean isMonashStudent, String mode, double weight, double dryingTime) {
        if(isInvalidInput(isMonashStudent, mode, weight, dryingTime)){
            return 0.0;
        }
        double calculatedCost;
        if ("eco".equalsIgnoreCase(mode)){
            calculatedCost = calculateEcoCost(weight, dryingTime, isMonashStudent);
        } else {
            calculatedCost = calculateHeavyCost(weight, dryingTime, isMonashStudent);
        }
        return Math.round(calculatedCost * 100.0) / 100.0;
    }

    /**
     * Checks if the input parameters are valid
     *
     * @param isMonashStudent Whether the user is a Monash student
     * @param mode            The mode, either "eco" or "heavy"
     * @param weight          The weight of the laundary in kilograms
     * @param dryingTime      The drying time in minutes
     * @return true if any input parameters is invalid, false otherwise
     */
    public boolean isInvalidInput(boolean isMonashStudent, String mode, double weight, double dryingTime){
        if (!("eco".equalsIgnoreCase(mode) || "heavy".equalsIgnoreCase(mode))){
            return true;
        }
        if (weight < getMinWeightAllowed() || weight > getMaxWeightAllowed()){
            return true;
        }
        if (dryingTime < getMinDryingTimeAllowed() || dryingTime > getMaxDryingTimeAllowed()){
            return true;
        }
        return false;
    }


    /**
     * Calculates the cost of the laundry service in eco mode
     *
     * @param weight         The weight of the laundary in kilograms
     * @param dryingTime     The drying time in minutes
     * @param isMonashStudent  Whether the user is a Monash {@link SubContextList}
     * @return The cost of the laundary service in eco mode
     */
    public double calculateEcoCost( double weight, double dryingTime, boolean isMonashStudent){
        double calculatedCost = weight * getEcoModeWeightCost() + dryingTime * getEcoModeDryingCost();

        if(isMonashStudent && weight >= 5.0 && dryingTime >= 30.0){
            calculatedCost *= getEcoModeStudentDiscount();
        }
        return calculatedCost;
    }

    /**
     * Calculates the cost of the laundry service in heavy mode
     *
     * @param weight        The weight of the laundary in killograms
     * @param dryingTime    The drying time in mimutes
     * @param isMonashStudent Whether the user is a Monash student
     * @return The cost of the laundary service in heavy mode
     */
     public double calculateHeavyCost(double weight, double dryingTime, boolean isMonashStudent){
        double weightCost = weight * getHeavyModeWeightCost();
        double dryingCost = dryingTime * getHeavyModeDryingCost();

        if(isMonashStudent && weight >= 8.0 && dryingTime >= 40.0){
            dryingCost *= getHeavyModeStudentDiscount();
        }
        return weightCost + dryingCost;
     }
}
