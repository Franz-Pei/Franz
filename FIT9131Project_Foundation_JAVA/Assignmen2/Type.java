/**
*The Type class represents a certain tape of item or events.
*It includes properties for count and timee associated with the type.
*@author Ziqi Pei
*@version 6.2
*/public class Type {

    private int count = 0; // Count of a certain type
    private int time = 0; // Time associated with the type

    public int getCount() {
        return this.count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public int getTime() {
        return this.time;
    }

    public void setTime(int time) {
        this.time = time;
    }
}

