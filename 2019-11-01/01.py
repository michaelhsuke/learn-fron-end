# -*- coding:utf-8 -*-

import pandas_datareader as pdr
apple = pdr.get_data_yahoo('AAPL')

print(apple.head())
print(apple.shape)
print(apple.tail())
print(apple.describe())
print(apple.info())