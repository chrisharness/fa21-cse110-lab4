# Answers for DevTools Part 2

1. The bug was that when we initialized num1, num2 in our js file, we were reading the values from the input as a string. Thus when we tried to add the two numbers, the js code was performing string concatenation and so example "2" + "3" = 23

2. To fix this, I wrapped document.getElementbyId('num1').value in the the parseInt function, which will instead read this string value as an integer and store it in num1,num2 respectively so that when calculateSum is called, it will perform as intended (add two numbers). See fix.png.