# lib requests serve para simplificar requisições http - pip install requests
# ela é o primeiro passo para obter os dados de um site retornando o html da aplicação.
import requests

# Parsel é uma lib que serve para extrair dados do html/xml de uma aplicação por meio de seletores CSS
from parsel import Selector # pip install parsel
import time

def fetch_content(url: str, wait: int) -> str:
  try:
      response = requests.get(url, timeout=wait)
      response.raise_for_status()
  except (requests.HTTPError, requests.ReadTimeout): # captura erros http ou tempo(segundos) de espera seja excedido
      raise ValueError("deu ruim")
  else:
      return response

# response = fetch_content('http://betrybe.com', 1)
# print(response.headers)
# print(response.content)

# response2 = requests.get("http://httpbin.org/get")

# print(response2)

for _ in range(15):
    response = fetch_content("https://www.cloudflare.com/rate-limit-test/", 2)
    print(response)
    time.sleep(5)
