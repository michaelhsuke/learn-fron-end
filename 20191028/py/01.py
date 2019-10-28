# coding: utf-8
from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import by
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
from urllib.parse import quote

browser = webdriver.Chrome()
wait = WebDriverWait(browser, 10)
KEYWORD = 'iPad'

def index_page(page):
  print('正在爬取第', page, '页')
  try: 
    url = 'https://s.taobao.com/search?q=' + quote(KEYWORD)
    browser.get(url)
    if page > 1:
      input = wait.until()

