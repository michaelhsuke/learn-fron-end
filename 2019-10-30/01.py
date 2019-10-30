# -*- coding: utf-8 -*-
import requests

# url = 'https://api.taokouling.com/tkl/tkljm?apikey=eyHcDaIfhP&tkl=【3M泡棉双面胶带固定墙面相框高粘度墙胶无痕贴加厚强力泡沫海绵超粘办公广告防水瓷砖不留痕车用两面白色批发】https://m.tb.cn/h.eJTxXqV?sm=a85723 嚸↑↓擊鏈バ接，再选择瀏覽→噐咑ぺ鐦；或椱ァ製这句话₤iHplYI7aweZ₤后咑閞綯℡寳'
url = "https://api.taokouling.com/tkl/tkljm"
params = {
  "apikey": "eyHcDaIfhP",
  "tkl": '''【3M泡棉双面胶带固定墙面相框高粘度墙胶无痕贴加厚强力泡沫海绵超粘办公广告防水瓷砖不留痕车用两面白色批发】https://m.tb.cn/h.eJTxXqV?sm=a85723 嚸↑↓擊鏈バ接，再选择瀏覽→噐咑ぺ鐦；或椱ァ製这句话₤iHplYI7aweZ₤后咑閞綯℡寳'''
}

headers = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.75 Safari/537.36" }
res = requests.post(url, params=params, headers=headers)
resData = res.json()

print(resData)