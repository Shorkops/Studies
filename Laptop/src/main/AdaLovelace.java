package main;
import java.util.Scanner;

public class AdaLovelace {
    public static void main(String[] args) {
    	Scanner scanner = new Scanner(System.in);
    	
    	System.out.println("Insert your grade:");
    	int a = scanner.nextInt();
    	
    	if(a < 0 || a > 100) {
    		System.out.println("Impossible!");
    	}
    	else if(a >= 0 && a <= 49) {
    		System.out.println("You Failed.");
    	}
    	else if(a >= 50 && a <= 59) {
    		System.out.println("You got grade 1.");
    	}
    	else if(a >= 60 && a <= 69) {
    		System.out.println("You got grade 2.");
    	}
    	else if(a >= 70 && a <= 79) {
    		System.out.println("You got grade 3.");
    	}
    	else if(a >= 80 && a <= 89) {
    		System.out.println("You got grade 4.");
    	}
    	else if(a >= 90 && a <= 100){
    		System.out.println("You got grade 5.");
    	}
    	scanner.close();
    	
    }
}
