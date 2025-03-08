# Anagram Check Program

This repository contains two Java implementations to check whether two given strings are anagrams of each other.

## Table of Contents
- [Introduction](#introduction)
- [Approach 1: Sorting Method](#approach-1-sorting-method)
- [Approach 2: Optimized HashMap Method](#approach-2-optimized-hashmap-method)
- [How to Run](#how-to-run)
- [Screenshots](#screenshots)
- [Conclusion](#conclusion)

## Introduction
An anagram is a word or phrase formed by rearranging the letters of another. For example, "listen" and "silent" are anagrams.

## Approach 1: Sorting Method
This approach follows these steps:
1. Remove spaces and convert both strings to lowercase.
2. Convert the strings into character arrays and sort them.
3. Compare the sorted arrays. If they match, the words are anagrams.

### Code: `AnagramCheck.java`
```java
import java.util.Arrays;
import java.util.Scanner;

public class AnagramCheck {
    public static boolean areAnagrams(String str1, String str2) {
        str1 = str1.replaceAll("\\s", "").toLowerCase();
        str2 = str2.replaceAll("\\s", "").toLowerCase();

        if (str1.length() != str2.length()) {
            return false;
        }

        char[] charArray1 = str1.toCharArray();
        char[] charArray2 = str2.toCharArray();
        Arrays.sort(charArray1);
        Arrays.sort(charArray2);

        return Arrays.equals(charArray1, charArray2);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter first string: ");
        String str1 = scanner.nextLine();
        
        System.out.print("Enter second string: ");
        String str2 = scanner.nextLine();
        
        if (areAnagrams(str1, str2)) {
            System.out.println("Output: true");
        } else {
            System.out.println("Output: false");
        }
        
        scanner.close();
    }
}
```

## Approach 2: Optimized HashMap Method
This optimized approach uses a HashMap to count character occurrences:
1. Remove spaces and convert both strings to lowercase.
2. Use a HashMap to count character frequencies.
3. Compare character frequencies between the two strings.

### Code: `AnagramCheckHashed.java`
```java
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class AnagramCheckHashed {
    public static boolean areAnagrams(String str1, String str2) {
        str1 = str1.replaceAll("\\s", "").toLowerCase();
        str2 = str2.replaceAll("\\s", "").toLowerCase();

        if (str1.length() != str2.length()) {
            return false;
        }

        Map<Character, Integer> charCount = new HashMap<>();

        for (char c : str1.toCharArray()) {
            charCount.put(c, charCount.getOrDefault(c, 0) + 1);
        }

        for (char c : str2.toCharArray()) {
            if (!charCount.containsKey(c) || charCount.get(c) == 0) {
                return false;
            }
            charCount.put(c, charCount.get(c) - 1);
        }

        return true;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter first string: ");
        String str1 = scanner.nextLine();
        
        System.out.print("Enter second string: ");
        String str2 = scanner.nextLine();
        
        System.out.println("Output: " + areAnagrams(str1, str2));
        
        scanner.close();
    }
}
```

## How to Run
1. Copy the desired Java program into a file (e.g., `AnagramCheck.java` or `AnagramCheckHashed.java`).
2. Open a terminal or command prompt and navigate to the file's directory.
3. Compile the Java file using:
   ```sh
   javac AnagramCheck.java
   ```
   or
   ```sh
   javac AnagramCheckHashed.java
   ```
4. Run the program using:
   ```sh
   java AnagramCheck
   ```
   or
   ```sh
   java AnagramCheckHashed
   ```
5. Enter two strings when prompted and check the output.

## Screenshots
![image](https://github.com/user-attachments/assets/12d5632f-992a-46e7-a22d-68deddf92ba0)


## Conclusion
- **Approach 1** (Sorting) is simpler but has a time complexity of O(n log n).
- **Approach 2** (HashMap) is more optimized with O(n) time complexity.

Use the HashMap approach for better performance with larger strings!

