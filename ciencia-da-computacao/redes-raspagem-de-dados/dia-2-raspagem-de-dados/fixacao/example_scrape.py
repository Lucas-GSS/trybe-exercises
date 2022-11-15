from parsel import Selector
import requests
from pymongo import MongoClient


client = MongoClient("mongodb://127.0.0.1:27017/")

default_url = "http://books.toscrape.com"
response = requests.get(default_url)
selector = Selector(text=response.text)
next_page_url = selector.css('.pager .next a::attr(href)').get()



while next_page_url:
    response = requests.get(default_url + next_page_url)
    titles = selector.css('.product_pod h3 a::attr(title)').getall()
    prices = selector.css('.product_price .price_color::text').getall()

print(titles)