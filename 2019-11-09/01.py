# -*- coding:utf-8 -*-

from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
from pyquery import PyQuery as pq
from time import sleep

login_url = 'https://passport.jd.com/new/login.aspx'
product_url = 'https://item.jd.com/100000177760.html'

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument('user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36')
browser = webdriver.Chrome(options=chrome_options)
wait = WebDriverWait(browser, 100)

browser.get(login_url)
wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, 'div.login-wrap div.qrcode-login div.qrcode-img')))
current_url = browser.current_url
while True:
    if browser.current_url != login_url:
        break

print(browser.current_url)
browser.get(product_url)
btn_color = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#choose-attr-1  a[clstag*=yanse-红色]')))
btn_color.click()

#choose-attr-2 > div.dd > div.item.selected > a
btn_size = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#choose-attr-2  a[clstag*=yanse-128GB]')))
btn_size.click()

#choose-attr-3 > div.dd > div.item.selected > a
btn_buy_method = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#choose-attr-3  a[clstag*=yanse-公开版]')))
btn_buy_method.click()

#InitCartUrl
btn_submit_order = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#InitCartUrl')))
btn_submit_order.click()

#GotoShoppingCart
btn_go_shopping_cart = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#GotoShoppingCart')))
btn_go_shopping_cart.click()

#cart-floatbar > div > div > div > div.options-box > div.toolbar-right.toolbar-right-new > div.normal > div > div.btn-area > a

btn_goto_order = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'a.submit-btn')))
btn_goto_order.click()

#order-submit
btn_submit_order = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#order-submit')))
btn_submit_order.click()





sleep(300)
browser.close()
