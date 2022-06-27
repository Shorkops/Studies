package main;
import java.util.Scanner;
public class Patterns {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		int poz = 0;
		int neg = 0;
		int sum = 0;
				
		while(true) {
			System.out.println("Write a number");
			int a = Integer.valueOf(input.nextLine());
			
			if(a == 0) {
				break;
			}
			else if(a > 0) {
				poz++;
				sum = a+sum;
			}
			else {
				neg++;
				sum = a+sum;
			}
		}
		System.out.println("Amount of positive numbers: "+poz);
		System.out.println("Amount of negative numbers: "+neg);
		System.out.println("Your sum is: "+sum);
		
		input.close();
	}

}
