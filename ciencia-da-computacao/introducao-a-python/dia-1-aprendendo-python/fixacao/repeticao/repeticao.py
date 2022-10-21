restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

for restaurant in restaurants:
    print(f"nota: {restaurant['nota']}")

# List comprehensions
top_restaurants = [
    restaurant["name"] for restaurant in restaurants if restaurant["nota"] > 4
]
print(f"Top 2 restaurantes: {top_restaurants}")

contador = 1
fatorial = 5
resultado = 1
while contador <= fatorial:
    resultado = contador * resultado
    contador += 1
print(resultado)

ratings = [6, 8, 5, 9, 10]
newRatings = [rating * 10 for rating in ratings]

print(newRatings)

for rating in newRatings:
    if rating % 3 == 0:
        print(f"{rating} é múltiplo de 3")
