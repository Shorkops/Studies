package main;
import java.util.Scanner;
public class Loopios {

	
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		int a = 0;
		int sum = 0;
		int i = 0;
		int even = 0;
		int odd = 0;
		System.out.println("Number up");
		while(a != -1) {
			a = Integer.valueOf(input.nextLine());
			
			sum = sum + a;
			i++;
			
			if(a%2 == 0) {
				even++;
			}
			else {
				odd++;
			}
		}
		sum++;
		i--;
		odd--;
		double g = (double) sum/i;
		System.out.println("Thxbye");
		System.out.println("Sum:"+sum);
		System.out.println("Numbers:"+i);
		System.out.println("Average:"+g);
		System.out.println("Even:"+even);
		System.out.println("Odd:"+odd);
		
		
		input.close();
	}

}
