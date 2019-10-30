#!/usr/bin/env python
# -*- coding:utf-8 -*-
# dash example https://www.cnblogs.com/wumingxiaoyao/p/8317862.html
import dash
import dash_core_components
import dash_html_components
import numpy


t = numpy.linspace(0, 2 * numpy.pi, 100)
x = 10 * (2 * numpy.sin(t) - numpy.sin(2 * t))
y = 10 * (2 * numpy.cos(t) - numpy.cos(2 * t))

app = dash.Dash()
app.layout = dash_html_components.Div(children = [
  dash_html_components.H1(children="Hello! Dash love YOU!"),
  dash_core_components.Graph(
    id='heart-curve',
    figure={
      'data': [{
        'x': x,
        'y': y,
        'type': 'Scatter',
        'name': 'Heart'
      }],
      'layout': {
        'title': 'Heart Curve'
      },
    }
  )
])

if __name__ == '__main__':
  app.run_server(debug=True, port=8999)