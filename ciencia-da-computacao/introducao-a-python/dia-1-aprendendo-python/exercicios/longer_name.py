def longer_name(namesList):
    return max(namesList, key=len)


print(longer_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
