package main;

//import java.lang.reflect.Method;
//import java.util.*;

public class Methovide {
	
	
	public static void main(String[] args) {
		printStars(5);printStars(3);printStars(9);
		printSquare(4);
		printRectangle(17,3);
		printTriangle(4);
		xmasTree(4);
		xmasTree(10);
	}
	static void printSpaces(int i) {
				System.out.print(" ");
	}
	static void printStars(int i) {
		for(int a = 1; a <= i; a++) {
			System.out.print("*");
		}
		System.out.println();
	}
	
	static void printSquare(int i) {
		System.out.println("--------------------------");
		for(int a = 1; a <= i; a++) {
			printStars(i);
			
		}
	}
	static void printRectangle(int i, int j) {
		System.out.println("--------------------------");
		for(int a = 1; a <= j; a++) {
			printStars(i);
		}
	}
	static void printTriangle(int i) {
		System.out.println("--------------------------");
		for(int a = 1; a <= i; a++) {
			for(int b = (i-a); b >= 1; b--) {
			printSpaces(a);
			}
			printStars(a);
		}
	}
	static void xmasTree(int i) {
		System.out.println("--------------------------");
		for(int a = 1; a<= (i*2); a = a+2) {
			for(int b = (i*2)-(a+2); b >= 1; b= b/2) {
				printSpaces(a);
			}
			printStars(a);
		}
		for(int a = 1; a <= i-2; a++) {
			printSpaces(i);
			printSpaces(i);
			printStars(i-1);
		}
	}
}
