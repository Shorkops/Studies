package main;
import java.util.Scanner;

public class Test3 {

	public static void main(String[] args) {
		Scanner number = new Scanner(System.in);
		
		System.out.println("Insert a number between 1 and 100:");
		int a = Integer.valueOf(number.nextLine());
		
		int fizz = a % 3;
		int buzz = a % 5;
		
		if (fizz == 0) {
			System.out.println("Fizz");
		}
	}

}
