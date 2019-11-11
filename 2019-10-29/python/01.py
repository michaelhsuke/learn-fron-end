# -*- coding: utf-8 -*-
#python模拟键盘操作
#https://www.jianshu.com/p/7058c735bc96
#https://blog.csdn.net/u012474716/article/details/79072497
#https://blog.csdn.net/lshdp/article/details/83788812
# https://blog.csdn.net/Xylon_/article/details/100176606

TARGET_LINE_NO = 4

from pykeyboard import *
from pymouse import * 
from time import sleep
import win32api
m = PyMouse()
k = PyKeyboard()

file = open('./04.txt', 'r', encoding="UTF-8")
# file = open('./01.txt', 'rb')
count = 0
# targetUrl = ''
# targetLineNo = TARGET_LINE_NO
# for line in file:
#   count = count + 1
#   if count == TARGET_LINE_NO:
#     targetUrl = line
#     break

# win32api.ShellExecute(0, 'open', r'D:\Program Files (x86)\Tencent\微信web开发者工具\微信开发者工具.exe', '','',1)
# sleep(3)
# k.press_keys([k.control_l_key, 'l'])
# k.press_keys([k.control_l_key, 'a'])
# k.type_string(targetUrl)
# sleep(1)
# k.tap_key(k.enter_key)
# # k.tap_key(k.enter_key)
# print(TARGET_LINE_NO)


for line in file: 
  count = count + 1
  # win32api.ShellExecute(0, 'open', r'D:\Program Files (x86)\Tencent\微信web开发者工具\微信开发者工具.exe', '','',1)
  win32api.ShellExecute(0, 'open', r'D:\微信web开发者工具\微信web开发者工具.exe', '','',1)
  sleep(1)
  k.press_keys([k.control_l_key, 'l'])
  k.press_keys([k.control_l_key, 'a'])
  k.tap_key(k.backspace_key)
  k.tap_key(k.escape_key)
  k.type_string(line)
  sleep(1)
  k.tap_key(k.enter_key)
  # k.tap_key(k.enter_key)
  print(str(count) + ':' + line)
  # sleep(5)
  a = input('任意键继续')



# k.tap_key('L')
# k.type_string(‘abcdefg’) --输入内容
# k.press_key(‘a’) --按a键
# k.release_key(‘a’) --松开a键
# k.tap_key(‘a’) --点击a键
# k.tap_key(‘a’, n=2, interval=5) --点击a键2次，每次间隔5秒
# k.tap_key(k.function_keys[5]) --功能键F5

# m.click(1145, 700)
# k.type_string('123456')
# k.tap_key(k.enter_key)
