"""

Given an a list of ints find the 3 ints
with the highest product.

>>> highest_three_product([2, 5, 4])
40

>>> highest_three_product([2, 4, 1, 5])
40

>>> highest_three_product([2, -5, 3, 6])
36

>>> highest_three_product([3, -5, 2, -6])
90

>>> highest_three_product([3, 11, 2, -4, 6, -3, 7, 8, -7])
616

>>> highest_three_product([3, -11, 2, -4, 6, -3, 7, -8, -7])
616

"""

# highest_three_product :: [Int] -> Int
# Find the highest product of 3 ints in a given list
def highest_three_product(xs):

    if len(xs) < 3:
        print("List must have at least three integers")

    # initial state
    largestProductOf3 = xs[0] * xs[1] * xs[2]
    largestProductOf2 = xs[0] * xs[1]
    smallestProductOf2 = xs[0] * xs[1]
    largest = max(xs[0], xs[1])
    smallest = min(xs[0], xs[1])

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
