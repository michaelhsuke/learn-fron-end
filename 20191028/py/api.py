# -*- coding: utf-8 -*-
# https://www.cnblogs.com/zhxwind/p/11202629.html
# https://www.jianshu.com/p/89564acbd6d0

from flask import Flask
import json
from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
from pyquery import PyQuery as pq

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument('user-agent="Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"')
chrome_options.add_argument('--headless')
browser = webdriver.Chrome(options=chrome_options)
wait = WebDriverWait(browser, 10)

server = Flask(__name__)
@server.route('/index', methods=['get'])
def index():
  url = 'https://m.tb.cn/h.eJTxXqV?sm=a85723'
  browser.get(url)
  wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '#J_mod1 > div > section > div.scroller.preview-scroller > a.item')))

  html = browser.page_source
  doc = pq(html)
  shop_name = doc('#J_mod18 > div > div.shop-main > div.shop-info > div.shop-name').text()
  title = doc('#J_mod6 > div > div > div').text()

  res = { 'shop_name': shop_name, 'title': title, 'code': 0 }
  return json.dumps(res)

server.run(port=8999, debug=True)

# export FLASK_APP = api.py
# flask run