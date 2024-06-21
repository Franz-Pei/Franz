import java.util.Scanner;

/**
* The WordLength class represents a utility for working with word Length.
* It incldes method for checking length ranges and generating random word lengths.
*
*@author[Ziqi Pei]
*@version 6.0
**/
public class WordLength
{
   /**
    * Field
    */
    private int minLength;
    private int maxLength;

    /**
     *Deafault constructor that sets the default minimum and maximum word lengths.
     */
    public WordLength()
    {
        this.minLength = 4;
        this.maxLength = 6;
    }
   
    /**
     * Non-default constructor that allows setting custom minmum and maximum word lwngths.
     * @param minLength the minimum word length
     * @param maxLength the maximum word lengh
     **/
    public WordLength(int minLength,int maxLength)
    {
        this.minLength = minLength;
        this.maxLength = maxLength;
    }
    
    /**
     * Checks if the provided length is within the valid range.
     *
     * @param length the length to check
     * @param true if the length is within the valid range,otherwise false
     */
    public boolean checkLengthRange(int length)
    {
        return length >= minLength && length <= maxLength;
    }

    /**
     * Display information about the WordLength object.
     */
    public void display()
    {
        System.out.println("Word Length Unility");
        System.out.println("minimum Length: " + minLength);
        System.out.println("Maximum Length: " + maxLength);
    }

    /**
     * Generate a random word length betwwen min and max(inclusive)
     *
     *@return a random word length
     */    
    public int generateRandomKeywordLength()
    {
        int length;
        do
        {
            length = (int)(Math.random() * (maxLength - minLength + 1))+ minLength;
        }while(!checkLengthRange(length) || !Validation.validateWordLength(length,minLength,maxLength));
        return length;
    }

    /**
     * Return a string representation  of the WordLength object.
     *
     * @return a string containing the minmum and maximum word lengths
     */
    @Override
    public String toString()
    {
        return "Minimum Length: " + minLength + "\nMaximum Length: " + maxLength;
    }

    /**
     * Test
     *
     * @return wordLength
     */
    // public static void main(String[] args)
    // {
    //     WordLength wordLength = new WordLength();
    //     for(int i = 0; i < 10; i++)
    //     {
    //         System.out.println(wordLength.generateRandomKeywordLength());
    //     }
    // }
    
}
