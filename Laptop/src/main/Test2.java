package main;
import java.util.Scanner;

public class Test2 {

	public static void main(String[] args) {
		Scanner reader = new Scanner(System.in);
		
		System.out.println("Insert your number");
		int a = Integer.valueOf(reader.nextLine());
		int b = a % 2;
		
		if (b == 0) {
			System.out.println("It's even");
		}
		else {
			System.out.println("It's odd");
		}
		
	}
}
