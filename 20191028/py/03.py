# coding:utf-8
# https://a.m.taobao.com/i536723508188.htm?price=10.5-35&sourceType=item&sourceType=item&suid=9132df7e-d77d-4214-a4ba-e26e5dd9d935&ut_sk=1.WMypLj2%2Br04DAN620Y18IAAb_21646297_1572232277652.Copy.1&un=d1e07fd86e2876debbeeeafdb2768e28&share_crt_v=1&spm=a2159r.13376460.0.0&sp_tk=4oKkaUhwbFlJN2F3ZVrigqQ=
# https://www.cnblogs.com/yanshw/p/10852860.html  // selenium的配置

import pymongo
from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
from pyquery import PyQuery as pq
# from config import *
from urllib.parse import quote
import time

MONGO_URL = 'localhost'
MONGO_DB = 'taobao'
MONGO_COLLECTION = 'products2'

# browser = webdriver.Chrome()
# browser = webdriver.PhantomJS(service_args=SERVICE_ARGS)

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument('user-agent="Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"')
chrome_options.add_argument('--headless')
browser = webdriver.Chrome(options=chrome_options)

wait = WebDriverWait(browser, 10)
client = pymongo.MongoClient(MONGO_URL)
db = client[MONGO_DB]


def index_page(page):
    """
    抓取索引页
    :param page: 页码
    """
    print('正在获取商品信息')
    try:
        # url = 'https://a.m.taobao.com/i536723508188.htm?price=10.5-35&sourceType=item&sourceType=item&suid=9132df7e-d77d-4214-a4ba-e26e5dd9d935&ut_sk=1.WMypLj2%2Br04DAN620Y18IAAb_21646297_1572232277652.Copy.1&un=d1e07fd86e2876debbeeeafdb2768e28&share_crt_v=1&spm=a2159r.13376460.0.0&sp_tk=4oKkaUhwbFlJN2F3ZVrigqQ='
        url = 'https://m.tb.cn/h.eJTxXqV?sm=a85723'
        browser.get(url)
        btn = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '#J_mod1 > div > section > div.scroller.preview-scroller > a.item')))
        btn_comment = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#mui-tagscloud-i > div > div.mui-tagscloud-title > div')))
        get_product_detail()
        # browser.execute_script('document.querySelector("#mui-tagscloud-i > div > div.mui-tagscloud-title > div").click()')
        # print(type(btn))
        # if page > 1:
        #     input = wait.until(
        #         EC.presence_of_element_located((By.CSS_SELECTOR, '#mainsrp-pager div.form > input')))
        #     submit = wait.until(
        #         EC.element_to_be_clickable((By.CSS_SELECTOR, '#mainsrp-pager div.form > span.btn.J_Submit')))
        #     input.clear()
        #     input.send_keys(page)
        #     submit.click()
        # wait.until(
        #     EC.text_to_be_present_in_element((By.CSS_SELECTOR, '#mainsrp-pager li.item.active > span'), str(page)))
        # wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '.m-itemlist .items .item')))
        # get_products()
    except TimeoutException:
        print('error')
        # index_page(page)


def get_product_detail():
    """
    提取商品数据
    """
    html = browser.page_source
    doc = pq(html)
    img_items= doc('#J_mod1 > div > section > div.scroller.preview-scroller > a.item').items()
    img_urls = []
    for item in img_items:
      url = item.find('img').attr('data-src')
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
    product = {
      'price': price,
      'title': title,
      'comment_count': comment_count,
      'postage': postage,
      'sales': sales,
      'delivery': delivery,
      'shop_name': shop_name,
      'img_list': img_list,
    }
    save_to_mongo(product)
    # print(shop_name)
    # print(img_list)
    # print(type(img_items))

    #J_mod1 > div > section > div.scroller.preview-scroller > a.item > img
    #J_mod1 > div > section > div.scroller.preview-scroller > a:nth-child(2)
    # items = doc('#mainsrp-itemlist .items .item').items()
    # for item in items:
    #     product = {
    #         'image': item.find('.pic .img').attr('data-src'),
    #         'price': item.find('.price').text(),
    #         'deal': item.find('.deal-cnt').text(),
    #         'title': item.find('.title').text(),
    #         'shop': item.find('.shop').text(),
    #         'location': item.find('.location').text()
    #     }
    #     print(product)
#         save_to_mongo(product)


def save_to_mongo(result):
    """
    保存至MongoDB
    :param result: 结果
    """
    try:
        if db[MONGO_COLLECTION].insert(result):
            print('存储到MongoDB成功')
    except Exception:
        print('存储到MongoDB失败')


def main():
    """
    遍历每一页
    """
    # for i in range(1, 10):
    index_page(1)
    browser.close()


if __name__ == '__main__':
    main()
