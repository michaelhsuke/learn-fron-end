# https://dash.plot.ly/integrating-dash dash与各种框架的集成
import flask
import dash
import dash_html_components as html

server = flask.Flask(__name__)

@server.route('/')
def index():
  return {'title': 'Hello Flask app'}

app = dash.Dash(__name__, server=server, routes_pathname_prefix='/dash/')
app.layout = html.Div("My Dash App")

if __name__ == '__main__':
  app.run_server(debug=True)