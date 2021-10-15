# Answers for Part 2
1. print 3, because this is the last value of i before we break from the for loop with the condition 3 < prices.length == 3 < 3 (false).
   
2. print 150, because this is the discounted price of the 3rd element in the "prices" array which we pass into the function. discountedPrice's last value is = prices[2] * ( 1 - 0.5) == 300 * .5 == 150.

3. print 150, because finalPrice is essentially just the possibly rounded value of the discounted price, all that is done in line 8 is multiply by 100, call round (which returns a value of a number rounded to the nearest int) and divide the same # by 100.

4. the function returns an array with elements [50, 100, 150] as the for loop essentially computes the discount given for each element in the passed in "prices" array, and then pushes these new discounted elements into the back of a new array called "discounted" and returns that new array.

5. error. because i's scope is block and declared in the for loop, the scope only lasts until the for loop completes. therefore we cannot compile as we are attempting to log a variable which does not exist.

6. error. similarly to 5 because discountedPrice is block scope and declared inside the for loop, the code will not compile if we try to print it outside the for loop.

7. prints 150. although finalPrice's scope is a block type, it is declared inside the function's scope, and therefore since we call the console.log statement inside the function scope, the last value which it was set to inside the for loop (150) is printed and was updated inside the scope of the function before we returned.

8. the function returns [50, 100, 150], the same discounted prices array as before. using let still allows the function to execute properly and thus we get the same return result as in #4.

9. error. similarly to #5 i's scope is block and declared in the for loop, the scope only lasts until the for loop completes. therefore we cannot compile as we are attempting to log a variable which does not exist.

10.prints 3. length is set to be the .length of prices, which is the array we pass into the function. this is true because since we have 3 elements, .length returns 3, aka the correct size.

11. [50, 100, 150]. again the scope of the variables in this case do not affect the overall function execution and the discounted prices are allowed to be computed and inserted into the "discounted" array.

12. a)student['name'];
    b)student['Grad Year'];
    c)student.greeting();
    d)student['Favorite Teacher']['name'];
    e)student['courseLoad'][0];

13. a) 32 interpreted as string, string concatenation
    b) 1 interpreted as integer, subtraction
    c) 3 interpreted as integer, 
    d) 3null interpreted as string, string concatenation
    e) 4, true interpreted as a 1, integer addition
    f) 0, false interpreted as a 0, null as 0, integer addition.
    g) 3undefined, string concatenation
    h) NaN, attempts to subtract undefined from an integer (not a number)

14. a) true, 2 interpreted as # because compared with #, 2>1 true
    b) false, dictionary comparison, the first char 2 is greater than first char of '12' 1.
    c) true, equality operator, attempts to convert and compare operands of different types thus 2 == 2 is true.
    d)false, strict equality operator, compares types and since int != char it returns false.
    e) false, since the equality operator attempts to convert types, the true is converted to a 1 and thus 1==2 is false.
    f) true, the strict equality operator compares type boolean with boolean thus boolean==boolean is true.

15. The main difference between == and === is that === is strict, and compares the types of the operands only. In comparison, == attempts to convert the operands firrst and then perform an equal comparison.  
16. see js file
17. the result is an array [2,4,6]. we pass in doSomething as a function to be called in the modifyArray function. callback AKA doSomething is called 3 times in each iteration of the for loop respectively, as the for loop is controlled by the length of the array we passed in (array of length 3).so, in each iteration of the for loop, we are passing in the respective index of the given array we called modifyArray with [1,2,3] respectively, and so for example we call doSomething(1) which returns 1*2 == 2 which we then store in the newArr. when done for every value in our original array, we eventually multiply all numbers in the original array by 2, thus we land at [2,4,6] as our result.
18. see js file
19. the output is 1 4 3 2, because 1 and 4 have no setTimeout, they are run practically instantly. 3 is printed next because although there is a setTimeout delay, it is set to be 0ms or practically no delay (only the runtime execution of the function), and then 2 is printed last as it is set to have a 1000ms delay or 1 second delay.
