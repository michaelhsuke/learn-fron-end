# -*- coding:utf-8 -*-

import requests
from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
from pyquery import PyQuery as pq
from time import sleep 

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument('user-agent="Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"')
chrome_options.add_argument('--headless')
browser = webdriver.Chrome(options=chrome_options)
wait = WebDriverWait(browser, 100)

def decodeTKL(tkl): 
  # url = 'https://api.taokouling.com/tkl/tkljm?apikey=eyHcDaIfhP&tkl=【3M泡棉双面胶带固定墙面相框高粘度墙胶无痕贴加厚强力泡沫海绵超粘办公广告防水瓷砖不留痕车用两面白色批发】https://m.tb.cn/h.eJTxXqV?sm=a85723 嚸↑↓擊鏈バ接，再选择瀏覽→噐咑ぺ鐦；或椱ァ製这句话₤iHplYI7aweZ₤后咑閞綯℡寳'
  url = "https://api.taokouling.com/tkl/tkljm"
  params = {
    "apikey": "eyHcDaIfhP",
    "tkl": tkl
  }

  headers = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.75 Safari/537.36" }
  res = requests.post(url, params=params, headers=headers)
  resData = res.json()
  print(resData)
  return resData

def fetchGoodsFromUrl(url):
  browser.get(url)
  print('url: ' + url)
  f = open('urls.txt', 'a')
  f.write(url + '\n')
  # btn = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '#J_mod1 > div > section > div.scroller.preview-scroller > a.item')))
  # btn_comment = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#mui-tagscloud-i > div > div.mui-tagscloud-title > div')))
  # btn = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '#detailInfoContainer > div.bottom-bar > div.bottom-bar-btn.buy.btn-pos-right')))
  wait.until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, '#J_mod1 .preview-slider img')))
  
  return get_product_detail(url)

def get_product_detail(srcUrl): 
  html = browser.page_source
  # print(html)
  doc = pq(html)
  img_items= doc('#J_mod1 .preview-slider img').items()
  img_urls = []
  img_list = ''
  for item in img_items:
    url = item.attr('data-src')
    print(url)
    if url is not None:
      img_urls.append(url)
  if len(img_urls): 
    img_list = ','.join(img_urls)

  price = doc('#J_mod4 > div > div.real-price > span.ui-yen > span').text()
  title = doc('#J_mod6 > div > div > div').text()
  comment_count = doc('#mui-tagscloud-i > div > div.mui-tagscloud-title').text()
  postage = doc('#J_mod7 > div > span.postage').text()
  sales = doc('#J_mod7 > div > span.sales').text()
  delivery = doc('#J_mod7 > div > span.delivery').text()
  shop_name = doc('#J_mod18 > div > div.shop-main > div.shop-info > div.shop-name').text()
  print(shop_name)
  # browser.close()
  return {
    'price': price,
    'title': title,
    'comment_count': comment_count,
    'postage': postage,
    'sales': sales,
    'delivery': delivery,
    'shop_name': shop_name,
    'img_list': img_list,
    'link': srcUrl
  }