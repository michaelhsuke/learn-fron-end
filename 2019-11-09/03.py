# -*- coding:utf-8 -*-

#E2AEAB093F2B6D6058C6734B9460B86B_babel


from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
from pyquery import PyQuery as pq
from time import sleep
import requests
import os
import re
from pykeyboard import *
from pymouse import * 
import win32api
m = PyMouse()
k = PyKeyboard()

# url = 'https://open.weixin.qq.com/connect/qrconnect?appid=wx827225356b689e24'
# print(re.match(r'https://open.weixin.qq.com/', url))
# sleep(100000)

login_url = 'https://passport.jd.com/new/login.aspx'
# product_url = 'https://item.jd.com/100000177760.html'
product_url = 'https://pro.jd.com/mall/active/4VkT6xwambh1JFV5zkXKPovyG1tz/index.html'
weixin = 'https://open.weixin.qq.com/'

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument('user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36')
# chrome_options.add_argument('--headless')
browser = webdriver.Chrome(options=chrome_options)
wait = WebDriverWait(browser, 100)

browser.get(login_url)
qrcode_img = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, 'div.login-wrap div.qrcode-login div.qrcode-img img')))

#kbCoagent > ul > li:nth-child(2) > a

btn_weixin = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#kbCoagent > ul > li:nth-child(2) > a')))
btn_weixin.click()

qrcode_img = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, 'div.wrp_code > img')))


img_src = qrcode_img.get_attribute('src')
print(img_src)  # todo

# resp = requests.get(img_src)
# ## save QR code
# image_file = 'qr.png'
# with open(image_file, 'wb') as f:
#     for chunk in resp.iter_content(chunk_size=1024):
#         f.write(chunk)

# ## scan QR code with phone
# if os.name == "nt":
#     # for windows
#     os.system('start ' + image_file)
# else:
#     if os.uname()[0] == "Linux":
#         # for linux platform
#         os.system("eog " + image_file)
#     else:
#         # for Mac platform
#         os.system("open " + image_file)

while True:
    if re.match(r'https://open.weixin.qq.com/', browser.current_url) == None:
        break

print('扫码成功')
browser.get(product_url)


# 等到所有优惠券都展示
# wait.until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, '.coupon-item')))

#J_babelOptPage > div > div.bab-opt-mod.bab-opt-mod-1_7.free_coupon > div > div > a:nth-child(1)

#J_babelOptPage > div > div.bab-opt-mod.bab-opt-mod-1_8.free_coupon > div > div > a.coupon-item.coupon_today_empty.upload
print('获取到了产品页')
browser.execute_script('document.documentElement.scrollTop=1101')

#J_babelOptPage > div > div.bab-opt-mod.bab-opt-mod-1_6.hotzone > div > div > div:nth-child(3)
#J_babelOptPage > div > div.bab-opt-mod.bab-opt-mod-1_5.hotzone > div > div > div:nth-child(3)
btn_1111 =  wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#J_babelOptPage > div > div.bab-opt-mod.bab-opt-mod-1_5.hotzone > div > div > div:nth-child(3)')))

count = 0
while count < 1000:
  count = count + 1
  print('点击了{0}次'.format(count))
  browser.execute_script('document.querySelector("#J_babelOptPage > div > div.bab-opt-mod.bab-opt-mod-1_5.hotzone > div > div > div:nth-child(3)").click()')
  sleep(1)
  k.press_key(k.control_l_key)#按住alt键
  k.tap_key('w')#点击tab键
  k.release_key('w')#松开alt键
  k.release_key(k.control_l_key)#松开alt键


#   k.press_keys([k.control_l_key, 'w'])
#   k.release_key(k.control_l_key)
#   k.release_key('w') 
  
 
# print('第一次点击')
# sleep(3)
# btn_1111.click()
# print('第二次点击')
print('done....')
# browser.close()



