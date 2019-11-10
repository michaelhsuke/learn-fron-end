# -*- coding:utf-8 -*-

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

# url = 'https://open.weixin.qq.com/connect/qrconnect?appid=wx827225356b689e24'
# print(re.match(r'https://open.weixin.qq.com/', url))
# sleep(100000)

login_url = 'https://passport.jd.com/new/login.aspx'
product_url = 'https://item.jd.com/100000177760.html'
weixin = 'https://open.weixin.qq.com/'

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument('user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36')
chrome_options.add_argument('--headless')
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

# sleep(100000)

resp = requests.get(img_src)
## save QR code
image_file = 'qr.png'
with open(image_file, 'wb') as f:
    for chunk in resp.iter_content(chunk_size=1024):
        f.write(chunk)

## scan QR code with phone
if os.name == "nt":
    # for windows
    os.system('start ' + image_file)
else:
    if os.uname()[0] == "Linux":
        # for linux platform
        os.system("eog " + image_file)
    else:
        # for Mac platform
        os.system("open " + image_file)





# sleep(5)

# hidden_inputs = wait.until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, 'form#formlogin input[type=hidden]')))
# # hiddenInputItems = hiddenInputs.item()

# for item in hidden_inputs:
#     print('{0} = {1}'.format(item.get_attribute('name'), item.get_attribute('value')))

# print(hiddenInputs)



# exit()

while True:
    if re.match(r'https://open.weixin.qq.com/', browser.current_url) == None:
        break

print('扫码成功')
browser.get(product_url)
btn_color = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#choose-attr-1  a[clstag*=yanse-红色]')))
btn_color.click()
print('选中颜色为红色')

# choose-attr-2 > div.dd > div.item.selected > a
btn_size = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#choose-attr-2  a[clstag*=yanse-128GB]')))
browser.execute_script('document.querySelector("#choose-attr-2  a[clstag*=yanse-128GB]").click()')
print('选中128G')
# sleep(5)
# btn_size.click()

#choose-attr-3 > div.dd > div.item.selected > a
btn_buy_method = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#choose-attr-3  a[clstag*=yanse-公开版]')))
btn_buy_method.click()
print('选中公开版')

#InitCartUrl
btn_submit_order = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#InitCartUrl')))
btn_submit_order.click()
print('加入购物车成功')

#GotoShoppingCart
btn_go_shopping_cart = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#GotoShoppingCart')))
btn_go_shopping_cart.click()
print('进入结算页')

#cart-floatbar > div > div > div > div.options-box > div.toolbar-right.toolbar-right-new > div.normal > div > div.btn-area > a

btn_goto_order = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'a.submit-btn')))
# print('倒数10个数')
# sleep(10)
# btn_goto_order.click()
browser.execute_script('document.querySelector("a.submit-btn").click()')
print('点击结算按钮')

sum_pay_price = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#sumPayPriceId')))
print(sum_pay_price.text)

#order-submit
btn_submit_order = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#order-submit')))
btn_submit_order.click()
# sleep(3)
# browser.execute_script('document.querySelector("a.submit-btn").click()')
print('点击提交订单按钮')


print('done....')

browser.close()

##J_babelOptPage > div > div.bab-opt-mod.bab-opt-mod-1_7.free_coupon > div > div > a:nth-child(1)
