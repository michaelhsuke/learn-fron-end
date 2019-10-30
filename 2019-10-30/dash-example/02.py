# -*- coding: utf8 -*-
import dash
from dash.dependencies import Input, Output
import dash_core_components as dcc
import dash_html_components as html
from datetime import datetime as dt
import tushare as ts

app = dash.Dash()

app.layout = html.Div([
  html.H1('k-30'),
  dcc.Dropdown(
    id='my-dropdown',
    options=[
      { 'label': '爱柯迪', 'value': '600933' },
      { 'label': '赣锋锂业', 'value': '002460' },
      { 'label': '中国神华', 'value': '601088' },
      { 'label': '广汽集团', 'value': '601238' },
      { 'label': '春秋航空', 'value': '601021' },
    ],
    value='600933'
  ),
  dcc.Graph(id='my-graph')
])

@app.callback(Output('my-graph', 'figure'), [Input('my-dropdown', 'value')])
def update_graph(selected_dropdown_value):
  df = ts.get_k_data(selected_dropdown_value, ktype='30')
  return {
    'data': [{
      'x': df.index,
      'y': df.close
    }]
  }

if __name__ == '__main__':
  app.run_server(debug=True, port=9001)
