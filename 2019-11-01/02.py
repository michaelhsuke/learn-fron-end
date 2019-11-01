# -*- coding:utf-8 -*-

import numpy as np
import pandas as pd
from pandas import Series, DataFrame
import pandas_datareader as pdr
import matplotlib.pyplot as plt
from datetime import datetime

start = datetime(2009, 12, 31)
Apple = pdr.get_data_yahoo('AAPL', start=start)
Microsoft = pdr.get_data_yahoo('MSFT', start=start)

# 股价对比
Apple['Adj Close'].plot(legend=True, label='Apple.Inc')
Microsoft['Adj Close'].plot(legend=True, label='Microsoft')
plt.show()

# 交易量对比
Apple['Volume'].plot(legend=True, label='Apple.Inc')
Microsoft['Volume'].plot(legend=True, label='Microsoft')
plt.show()

# 股票价格极差对比
Apple['high-low'] = Apple['High'] - Apple['Low']
Microsoft['high-low'] = Apple['High'] - Apple['Low']
Apple['high-low'].plot(label='Apple.Inc')
Microsoft['high-low'].plot(label='Microsoft')
plt.show()

# daily return(每天变化情况)
Apple['daily return'] = Apple['Adj Close'].pct_change()
Apple['daily return'].plot(label='Apple.Inc',figsize=(15,8),linestyle='--',marker='o')
plt.show()
Apple['daily return'].plot(label='Apple.Inc',kind='hist')
plt.show()
