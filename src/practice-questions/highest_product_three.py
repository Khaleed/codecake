"""

Given an array ints find the 3 ints
with the highest product.

Constraints: 1. list can't be less than 3 (Fail Fast)
            2. if 3 then multiply those 3 ints
            3. if 4 ints ex: [2, 4, 1, 5] --> 2 * 4 * 5
            4. 4 ints [2, -5, 3, 6] --> 2 * 3 * 6
            5. 4 ints [3, -5, 2, -6] --> 3 * -5 * -6

>>> find_highest_three([2, 5, 4])
40

>>> find_highest_three([2, 4, 1, 5])
40

>>> find_highest_three([2, -5, 3, 6])
36

>>> find_highest_three([3, -5, 2, -6])
90

"""


# find_highest_three :: [Int] --> Int
# Find the highest product of 3 ints in a given list
def find_highest_three(xs):

    if len(xs) < 3:
        print("List must have at least three integers")

    # initial state
    largestProductOf3 = xs[0] * xs[1] * xs[2]  # 3 * -5 * 2 = -30
    largestProductOf2 = xs[0] * xs[1]  # 3 * - 5 = -15
    smallestProductOf2 = xs[0] * xs[1]  # 3 * -5 = -15
    largest = max(xs[0], xs[1])  # 3, - 5 --> 3
    smallest = min(xs[0], xs[1])  # 3,- 5 --> -5

    for i in range(2, len(xs)):
        # do we have a new largestProductOf3?
        x = xs[i]
        largestProductOf3 = max(largestProductOf3, x * largestProductOf2, x * smallestProductOf2)
        largestProductOf2 = max(largestProductOf2, x * largest, x * smallest)
        smallestProductOf2 = min(smallestProductOf2, x * largest, x * smallest)
        largest = max(x, largest)
        smallest = min(x, smallest)
    return largestProductOf3


if __name__ == "__main__":
    import doctest
    doctest.testmod()
