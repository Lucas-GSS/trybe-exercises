position = ""

salary = 12000
if salary <= 2000:
    position = "estagiário"
elif 2000 == salary <= 5800:
    position = "Dev Júnior"
elif 5800 < salary <= 7500:
    position = "Dev Pleno"
elif 7500 < salary <= 10500:
    position = "Dev Senior"
else:
    position = "Tech Lead"

print(position)
