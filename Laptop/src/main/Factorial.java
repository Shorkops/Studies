package main;
import java.util.Scanner;
public class Factorial {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		int factor = 1;
		System.out.println("Insert a number to factorialize");
		int a = Integer.valueOf(input.nextLine());
		
		for (int i = 1; i <= a; i++) {
			factor = factor * i;
		}
		
		System.out.println(factor);
		input.close();
	}

}
