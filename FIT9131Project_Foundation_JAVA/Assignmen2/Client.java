/**
 * Computes the total number of food bags in the given QuokkaCollection.
 * @param quokkaCollection The QuokkaCollection to compute the total food bags from.
 * @return The total number of food bags in the collection.
*@author Ziqi Pei
*@version 6.2
*/
import java.util.*;

public class Client {

    RandomSimulator randomSimulator = new RandomSimulator(1, 10);
    RandomSimulator timeRandomSimulator = new RandomSimulator(1, 60);

    public int computeTotalBags(QuokkaCollection quokkaCollection){
        List<Quokka> quokkas = quokkaCollection.getQuokkas();
        int totalBags = 0;
        for (Quokka quokka : quokkas) {
            List<QuokkaFood> quokkaFoods = quokka.getQuokkaFoods();
            for (QuokkaFood quokkaFood : quokkaFoods) {
                totalBags += quokkaFood.getFood();
            }
        }
        return totalBags;
    }

    public int computeAliveBaby(QuokkaCollection quokkaCollection){
        List<Quokka> quokkas = quokkaCollection.getQuokkas();
        int count = 0;
        for (Quokka quokka : quokkas) {
            if (quokka.isAlive() && !(quokka.getParentCode().equals(""))){
                count++;
            }
        }
        return count;
    }

    public double computeAvgDay(int died, QuokkaCollection quokkaCollection){
        int days = 0;
        List<Quokka> quokkas = quokkaCollection.getQuokkas();
        for (Quokka quokka : quokkas) {
            List<QuokkaFood> quokkaFoods = quokka.getQuokkaFoods();
            for (QuokkaFood quokkaFood : quokkaFoods) {
                if (quokka.getParentCode().equals("")){
                    if (quokkaFood.getFood() < 2){
                        days++;
                    }
                }else {
                    if (quokkaFood.getFood() == 0){
                        days++;
                    }
                }
            }
        }
        return (days / (died * 1.0));
    }

    public int computeDied(QuokkaCollection quokkaCollection){
        List<Quokka> quokkas = quokkaCollection.getQuokkas();
        int count = 0;
        for (Quokka quokka : quokkas) {
            if (!quokka.isAlive()){
             count++;
            }
        }
        return count;
    }

    public void oneDaySimulate(int day, QuokkaCollection quokkaCollection, int numOfGroups) {
        System.out.println("**** Day " + day + " *****");
        System.out.println("Current alive quokkas (incl babies): " + quokkaCollection.getNumberOfAliveQuokkas());
        computeCurrentDayFood(day, quokkaCollection);
        System.out.println("Current total food bags: " + SelfieType.CURRENT_DAY_FOOD);
        System.out.println("Sorting the quokkas based on their level of food supply");
        System.out.println("Number of tourist groups: "+numOfGroups);
    }

    public void computeSummary(int day, QuokkaCollection quokkaSimulate){
        System.out.println("Daily Summary");
        System.out.println("============");
        System.out.println("Selfie Stats");
        System.out.println("Live quokkas: "+quokkaSimulate.getNumberOfAliveQuokkas());
        System.out.println("Quokkas died today: "+SelfieType.CURRENT_DAY_DIED);
        List<Quokka> quokkas = quokkaSimulate.getQuokkas();
        List<Quokka> quokkaList = new ArrayList<>();
        int newbaby = 0;
        for (Quokka quokka : quokkas) {
            if (quokka.isAlive() && !(quokka.getHasBaby())){
                boolean isBaby = hasBaby();
                if (isBaby){
                    quokka.setHasBaby(true);
                    String babyCode = generateID(quokkaSimulate);
                    Quokka q = new Quokka(babyCode, false);
                    q.setParentCode(quokka.getIdentiCode());
                    quokkaList.add(q);
                    newbaby++;
                }
            }
        }
        quokkas.addAll(quokkaList);
        System.out.println("New baby today: "+newbaby);
        System.out.println("Consumed food bags: "+SelfieType.CURRENT_DAY_FOOD);
        System.out.println("Current food bags: "+SelfieType.CURRENT_FOOD);
    }

    public void computeTourist(int numOfGroups, QuokkaCollection quokkaSimulate){
        System.out.println("Initialising the tourist groups");
        System.out.println("Quokkas are now offering selfies to the tourist groups");
        System.out.println("Selfie Stats");
        System.out.println("=============");
        List<Integer> groupPeople = computeCurrentDayGroupPeople(numOfGroups);
        Map<String, Type> map = computeType(groupPeople);
        int selfies = 0;
        int bags = 0;
        Type groupVideoType = map.get(SelfieType.GROUP_VIDEO);
        if (null != groupVideoType){
            System.out.println("Group Video: "+groupVideoType.getCount());
            selfies += groupVideoType.getCount();
            int groupVideoFood = groupVideoType.getTime() / 20 * 2;
            SelfieType.CURRENT_FOOD += groupVideoFood;
            bags += groupVideoFood;
        }
        Type groupPhotoType = map.get(SelfieType.GROUP_VIDEO);
        if (null != groupPhotoType){
            System.out.println("Group Photo: "+groupPhotoType.getCount());
            selfies += groupPhotoType.getCount();
            int groupPhotoFood = groupPhotoType.getCount() * 2;
            SelfieType.CURRENT_FOOD += groupPhotoFood;
            bags += groupPhotoFood;
        }
        Type individualVideoType = map.get(SelfieType.GROUP_VIDEO);
        if (null != individualVideoType){
            System.out.println("Individual Video: "+individualVideoType.getCount());
            selfies += individualVideoType.getCount();
            int individualVideoFood = individualVideoType.getTime() / 20;
            SelfieType.CURRENT_FOOD += individualVideoFood;
            bags += individualVideoFood;
        }
        Type individualPhotoType = map.get(SelfieType.GROUP_VIDEO);
        if (null != individualPhotoType){
            System.out.println("Individual Photo: "+individualPhotoType.getCount());
            selfies += individualPhotoType.getCount();
            int individualPhotoFood = individualPhotoType.getCount();
            SelfieType.CURRENT_FOOD += individualPhotoFood;
            bags += individualPhotoFood;
        }
        Type individualSketchType = map.get(SelfieType.GROUP_VIDEO);
        if (null != individualSketchType){
            System.out.println("Individual Sketch: "+individualSketchType.getCount());
            selfies += individualSketchType.getCount();
            int time_10 = individualSketchType.getTime() / 10;
            int time_5 = individualSketchType.getTime() / 10 / 5;
            int individualSketchFood = time_10*10+time_5*6 ;
            SelfieType.CURRENT_FOOD += individualSketchFood;
            bags += individualSketchFood;
        }
        System.out.println("(Total selfies: "+ selfies +")");
        System.out.println("Earned food bags:"+ bags);
    }

    public Map<String, Type> computeType(List<Integer> groupPeople){
        Map<String, Type> map = new HashMap<>();
        Random random = new Random();
        int g = random.nextInt(10);
        int t = random.nextInt(100);
        for (Integer groupPerson : groupPeople) {
            for (int i = 0; i < groupPerson; i++){

                Type type = new Type();
                if (g <= 6){
                    if (map.containsKey(SelfieType.INDIVIDUAL_PHOTO)){
                        type.setCount(map.get(SelfieType.INDIVIDUAL_PHOTO).getCount()+1);
                    }else {
                        type.setCount(1);
                    }
                    map.put(SelfieType.INDIVIDUAL_PHOTO, type);
                }else if (g > 6 && g<= 9){

                    if (map.containsKey(SelfieType.INDIVIDUAL_VIDEO)){
                        type.setCount(map.get(SelfieType.INDIVIDUAL_VIDEO).getCount()+1);
                        type.setCount(map.get(SelfieType.INDIVIDUAL_VIDEO).getTime()+time);
                    }else {
                        type.setCount(1);
                        type.setTime(time);
                    }
                    map.put(SelfieType.INDIVIDUAL_VIDEO, type);
                }else {
                    int r = randomSimulator.getRandomNumber();
                    int time = 0;
                    if (r <= 5){
                        time = 5;
                    }else {
                        time = 10;
                    }
                    if (map.containsKey(SelfieType.INDIVIDUAL_SKETCH)){
                        type.setCount(map.get(SelfieType.INDIVIDUAL_SKETCH).getCount()+1);
                        type.setCount(map.get(SelfieType.INDIVIDUAL_SKETCH).getTime()+time);
                    }else {
                        type.setCount(1);
                        type.setTime(time);
                    }
                    map.put(SelfieType.INDIVIDUAL_SKETCH, type);
                }
            }
            if (groupPerson > 1){
                int g = randomSimulator.getRandomNumber();
                Type type = new Type();
                if (g <= 3){
                    if (map.containsKey(SelfieType.GROUP_PHOTO)){
                        type.setCount(map.get(SelfieType.GROUP_PHOTO).getCount()+1);
                    }else {
                        type.setCount(1);
                    }
                    map.put(SelfieType.GROUP_PHOTO, type);
                }else if (g > 3 && g <= 6){
                    int time = timeRandomSimulator.getRandomNumber();
                    if (map.containsKey(SelfieType.GROUP_VIDEO)){
                        type.setCount(map.get(SelfieType.GROUP_VIDEO).getCount()+1);
                        type.setTime(map.get(SelfieType.GROUP_VIDEO).getTime()+time);
                    }else {
                        type.setCount(1);
                        type.setTime(time);
                    }
                    map.put(SelfieType.GROUP_VIDEO, type);
                }
            }
        }
        return map;
    }

    public List<Integer> computeCurrentDayGroupPeople(int numOfGroups){
        List<Integer> group = new ArrayList<>();
        int totalGroup = 0;
        while(totalGroup < numOfGroups){
            int g = randomSimulator.getRandomNumber();
            if (g <= 3){
                group.add(1);
                totalGroup+=1;
            }else if (g > 3 && g <= 6){
                if (totalGroup+2>numOfGroups) continue;
                group.add(2);
                totalGroup+=2;
            }else if (g == 7){
                if (totalGroup+3>numOfGroups) continue;
                group.add(3);
                totalGroup+=3;
            }else if (g == 8){
                if (totalGroup+4>numOfGroups) continue;
                group.add(4);
                totalGroup+=4;
            }else if (g == 9){
                if (totalGroup+5>numOfGroups) continue;
                group.add(5);
                totalGroup+=5;
            }else {
                if (totalGroup+6>numOfGroups) continue;
                group.add(6);
                totalGroup+=6;
            }
        }
        return group;
    }

    public void computeCurrentDayAlive(QuokkaCollection quokkaCollection){
        List<Quokka> quokkas = quokkaCollection.getQuokkas();
        int currentDayDied = 0;
        for (Quokka quokka : quokkas) {
            List<QuokkaFood> quokkaFoods = quokka.getQuokkaFoods();
            if (!quokka.isAlive()) continue;
            int foodLackDay = 0;
            int foodEatingDay = 0;
            for (QuokkaFood quokkaFood : quokkaFoods) {
                if (quokka.getParentCode().equals("")){
                    if (quokkaFood.getFood() == 1){
                        foodLackDay += 1;
                    }
                    if (quokkaFood.getFood() == 0){
                        foodEatingDay += 1;
                    }
                }else {
                    if (quokkaFood.getFood() == 0){
                        foodEatingDay += 1;
                    }
                }
            }
            if (foodLackDay >= 7 || foodEatingDay >= 5){
                quokka.setAlive(false);
                currentDayDied += 1;
            }
        }
        SelfieType.CURRENT_DAY_DIED = currentDayDied;
    }

    public void computeCurrentDayFood(int day, QuokkaCollection quokkaCollection){
        List<Quokka> quokkas = quokkaCollection.getQuokkas();
        int foot = 0;
        for (Quokka quokka : quokkas) {
            if (quokka.isAlive()){
                QuokkaFood quokkaFood = new QuokkaFood();
                quokkaFood.setDay(day);
                if (quokka.getParentCode().equals("")) {
                    if (day != 1) {
                        if (SelfieType.CURRENT_FOOD >= 2){
                            foot+=2;
                            quokkaFood.setFood(2);
                            SelfieType.CURRENT_FOOD -= 2;
                        }else {
                            foot+=SelfieType.CURRENT_FOOD;
                            quokkaFood.setFood(SelfieType.CURRENT_FOOD);
                            SelfieType.CURRENT_FOOD = 0;
                        }
                    }else {
                        foot+=2;
                        quokkaFood.setFood(2);
                    }
                    quokka.getQuokkaFoods().add(quokkaFood);
                } else {
                    if (day != 1) {
                        if (SelfieType.CURRENT_FOOD >= 1){
                            foot+=1;
                            quokkaFood.setFood(1);
                            SelfieType.CURRENT_FOOD -= 1;
                        }else {
                            quokkaFood.setFood(SelfieType.CURRENT_FOOD);
                            SelfieType.CURRENT_FOOD = 0;
                        }
                    }else {
                        foot+=1;
                        quokkaFood.setFood(1);
                    }
                    quokka.getQuokkaFoods().add(quokkaFood);
                }
            }
        }
        SelfieType.CURRENT_DAY_FOOD = foot;
    }


    public void displayWelcomeMessage() {
        System.out.println("Welcome to Quokka Selfie Quest Simulation Game");
    }


    public int getNumOfQuokkas() {
        FileIO.appendMethod(SelfieType.OUT_PATH, "Welcome to the Quokka Selfie Quest Simulation");
        System.out.print("How many Quokkas: ");
        int quokkaNum = 0;
        while (true) {
            try {
                Scanner console = new Scanner(System.in);
                quokkaNum = console.nextInt();
                pbreak;
            } catch (Exception e) {
                System.out.println("Input error, please re-enter the koala initialization number!");
            }
        }
        FileIO.appendMethod(SelfieType.OUT_PATH, "How many quokkas? "+quokkaNum);
        return quokkaNum;
    }

    public QuokkaCollection setupQuokkas(int population) {
        QuokkaCollection newCollection = new QuokkaCollection();
        for (int i = 0; i < population; i++) {
            String newCode = generateID(newCollection);
            boolean hasBaby = hasBaby();
            Quokka quokka = new Quokka(newCode, hasBaby);
            newCollection.getQuokkas().add(quokka);
            if (hasBaby) {
                String babyCode = generateID(newCollection);
                Quokka newQuokka = new Quokka(babyCode, false);
                newQuokka.setParentCode(newCode);
                newCollection.getQuokkas().add(newQuokka);
            }
        }
        return newCollection;
    }

    public String generateID(QuokkaCollection quokkaCollection) {
        int initialCode = 1;
        String code = "";
        if (quokkaCollection.getNumberOfQuokkas() == 0) return "Q000";
        else {
            while (true) {
                code = "Q" + String.format("%03d", initialCode);
                boolean b = duplicateID(code, quokkaCollection);
                if (b) {
                    initialCode++;
                }
                else {
                    break;
                }
            }
        }
        return code;
    }


    public boolean duplicateID(String testID, QuokkaCollection quokkaCollection) {
        List<Quokka> quokkas = quokkaCollection.getQuokkas();
        for (Quokka quokka : quokkas) {
            if (quokka.getIdentiCode().equals(testID)){
                return true;
            }
        }
        return false;
    }


    public boolean hasBaby() {
        RandomSimulator drandomSimulator = new RandomSimulator(1, 10);
        int randomNum = randomSimulator.getRandomNumber();
        return randomNum <= 3;
    }

}



