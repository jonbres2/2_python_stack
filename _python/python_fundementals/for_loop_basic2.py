# Biggie Size - Given a list, write a function that changes all positive numbers in the list to "big".
# Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now [-1, "big", "big", -5]
# def biggie_size(list):
#     for x in range(len(list)):
#         if list[x] > 0:
#             list[x] = "big"
#     return list

# print(biggie_size([-1, 3, 5, -5]))
# print(biggie_size([-1, 3, 5, -5, 0, -2, -3, 1, 2, 3]))



# Count Positives - Given a list of numbers, create a function to replace the last value with the number of positive values. (Note that zero is not considered to be a positive number).
# Example: count_positives([-1,1,1,1]) changes the original list to [-1,1,1,3] and returns it
# Example: count_positives([1,6,-4,-2,-7,-2]) changes the list to [1,6,-4,-2,-7,2] and returns it

# def count_positives(list):
#     count = 0
#     for x in range(len(list)):
#         if list[x] > 0:
#             count += 1
#     list[len(list) - 1] = count
#     return list

# print(count_positives([-1,1,1,1]))
# print(count_positives([1,6,-4,-2,-7,-2]))



# Sum Total - Create a function that takes a list and returns the sum of all the values in the list.
# Example: sum_total([1,2,3,4]) should return 10
# Example: sum_total([6,3,-2]) should return 7

# def sum_total(list):
#     final_sum = 0
#     for x in range(len(list)):
#         final_sum += list[x]
#     return final_sum

# print(sum_total([1,2,3,4]))
# print(sum_total([6,3,-2]))



# Average - Create a function that takes a list and returns the average of all the values.x
# Example: average([1,2,3,4]) should return 2.5



# Length - Create a function that takes a list and returns the length of the list.
# Example: length([37,2,1,-9]) should return 4
# Example: length([]) should return 0

# def length(list):
#     final_length = 0
#     for x in range(len(list)):
#         final_length += 1
#     return final_length

# print(length([37, 2, 1, -9]))
# print(length([]))
# print(length(["apple", "banana", "carrot"]))



# Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. If the list is empty, have the function return False.
# Example: minimum([37,2,1,-9]) should return -9
# Example: minimum([]) should return False

# def minimum(list):
#     minimum = 0
#     if len(list) == 0:
#         return False
#     for x in range(len(list)):
#         if list[x] < minimum:
#             minimum = list[x]
#     return minimum

# print(minimum([37, 2, 1, -9]))
# print(minimum([]))



# Maximum - Create a function that takes a list and returns the maximum value in the list. If the list is empty, have the function return False.
# Example: maximum([37,2,1,-9]) should return 37
# Example: maximum([]) should return False

# def maximum(list):
#     maximum = 0
    # if len(list) == 0:
    #     return False
    # for x in range(len(list)):
    #     if list[x] > maximum:
    #         maximum = list[x]
    # return maximum

# print(maximum([37, 2, 1, -9]))
# print(maximum([]))



# Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the list.
# Example: ultimate_analysis([37,2,1,-9]) should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4 }

# def ultimate_analysis(list):
#     ultimate_dictionary = {'sumTotal': 0, 'average': 0, 'minimum': 0, 'maximum': 0, 'length': 0}
#     for x in range(len(list)):
#         ultimate_dictionary['sumTotal'] += list[x]
#         ultimate_dictionary['length'] += 1
#         if list[x] < ultimate_dictionary['minimum']:
#             ultimate_dictionary['minimum'] = list[x]        
#         elif list[x] > ultimate_dictionary['maximum']:
#             ultimate_dictionary['maximum'] = list[x]
#     ultimate_dictionary['average'] = ultimate_dictionary['sumTotal'] / ultimate_dictionary['length']
#     return ultimate_dictionary

# print(ultimate_analysis([37,2,1,-9]))
#I can't believe this worked on my first try, lol



# Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
# Example: reverse_list([37,2,1,-9]) should return [-9,1,2,37]

# def reverse_list(list):
#     temp = 0
#     for x in range(len(list)):
#         if x >= len(list)/2:
#             break
#         temp = list[x]
#         list[x] = list[len(list) - (x + 1)]
#         list[len(list) - (x + 1)] = temp
#     return list

# print(reverse_list([37,2,1,-9]))
# print(reverse_list([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]))