# Prediction: Will print 5 to console
# def a():
#     return 5
# print(a())
# Outcome: Printed 5 to console.


# Prediction: Will print 10 to console
# def a():
#     return 5
# print(a()+a())
# Outcome: Prints 10


# Prediction: Will only return 1st statement, 5, and print it
# def a():
#     return 5
#     return 10
# print(a())
# Outcome: prints 5


# Prediction: Will only return 5 and print 10, return statement will exit function
# def a():
#     return 5
#     print(10)
# print(a())
# Outcome: Printed 5


# Prediction: Will print 5, as x is set to be 5 by the 3rd line
# def a():
#     print(5)
# x = a()
# print(x)
# Outcome: Printed 5, but then printed "None" because the function never actually returned the value at the point it was called. 


# Prediction: Similar to above, never returns a value to the point where it is called. Will print 3 and 5 though, from the function itself. But might throw an error for the final line, or produce null or undefined
# def a(b,c):
#     print(b+c)
# print(a(1,2) + a(2,3))
# Outcome: Throws an error because it is attempting to add two non-values, but still returns the 3 and 5


# Prediction: Will print "25" because the integers have been converted to strings, so the + is concatenation now
# def a(b,c):
#     return str(b)+str(c)
# print(a(2,5))
# Outcome: Prints 25


# Prediction: Will print "100", then check the if/else combo, go through the "else" statement, return 10, and exit the function. So the final output will be "100", then "10"
# def a():
#     b = 100
#     print(b)
#     if b < 10:
#         return 5
#     else:
#         return 10
#     return 7
# print(a())
# Outcome: 100, then 10


# Prediction: First call will print 7. Second call will print 14. Third call will print 21
# def a(b,c):
#     if b<c:
#         return 7
#     else:
#         return 14
#     return 3
# print(a(2,3))
# print(a(5,3))
# print(a(2,3) + a(5,3))
# Outcome: As predicted


# Prediction: Will print 8, as the first return statement will exit the function
# def a(b,c):
#     return b+c
#     return 10
# print(a(3,5))
# Outcome: as predicted


# Prediction: Will print "500" "500" "300" "500", as the re-assignment of B to 300 only exists within the function call
# b = 500
# print(b)
# def a():
#     b = 300
#     print(b)
# print(b)
# a()
# print(b)
# Outcome: as predicted


# Prediction: Will print "500", "500", "300", "300", as the function now returns the value of b
# b = 500
# print(b)
# def a():
#     b = 300
#     print(b)
#     return b
# print(b)
# a()
# print(b)
# Outcome: Still had 500 as the final print. I'm guessing because the return was not used to re-capture the vaue of b. Would have to be like "b = a()"


# Prediction: Yeah, like that, haha. Should be 500, 500, 300, 300
# b = 500
# print(b)
# def a():
#     b = 300
#     print(b)
#     return b
# print(b)
# b=a()
# print(b)
# Outcome: As predicted


# Prediction: Will print "1", "3", "2"
# def a():
#     print(1)
#     b()
#     print(2)
# def b():
#     print(3)
# a()
# Outcome: As predicted


# Prediction: Will print "1", "3", "5", "10"
# def a():
#     print(1)
#     x = b()
#     print(x)
#     return 10
# def b():
#     print(3)
#     return 5
# y = a()
# print(y)
# Outcome: As predicted