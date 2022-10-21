def media(numbersList):
    result = 0
    for num in numbersList:
        result += num
    return result / len(numbersList)


print(media([1, 2, 3, 4, 5]))

print(media([10, 20, 30]))
