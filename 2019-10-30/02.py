# -*- coding: utf-8 -*-

import dash
app = dash.Dash()
app.layout = 
server = app.server

@server.route('/input', methods=['GET'])
def input():
  return { 'hello': 'world' } 

if __name__ == '__main__':
  app.run_server(debug=True, port=9002)