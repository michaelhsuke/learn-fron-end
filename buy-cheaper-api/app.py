# -*- coding:utf-8 -*-
# https://dash.plot.ly/integrating-dash dash与各种框架的集成
import flask
import dash
import dash_html_components as html
from comm.func import *
from flask import request

server = flask.Flask(__name__)

@server.route('/goods/decoder', methods=['POST'])
def index():
  # print(flask.request.form)
  # print(flask.request.args)
  # print(request.json)
  # id = flask.request.args.get('id')
  try: 
    content = request.json.get('content')
    tkl_info = decodeTKL(content)
    print(tkl_info.get('url'))
    # return tkl_info
    if tkl_info.get('url'):
      return fetchGoodsFromUrl(tkl_info.get('url'))
  except Exception as e:
  	return { 'error': '50001', 'msg': e }

app = dash.Dash(__name__, server=server, routes_pathname_prefix='/')
app.layout = html.Div("My Dash App")

if __name__ == '__main__':
  app.run_server(debug=False, port=8999)