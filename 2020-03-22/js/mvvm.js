function mvvm(options) {
  this.$el = options.el;
  this.$el = Utils.isDomNode(this.$el) ? this.$el : document.querySelector(this.$el);
  this.$data = options.data || {}
  observe(this.$data);
  var fragment = compile(this.$el, this.$data);
  this.$el.appendChild(fragment);
}

function observe(data) {
  if (typeof data === 'object') {
    var dep = new Dep()
    Object.keys(data).forEach(function (key) {
      var value = data[key]
      Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get() {
          Dep.target && dep.addSub(Dep.target)
          return value;
          // return data[key]
        },
        set(newValue) {
          if (value !== newValue) {
            value = newValue
            dep.notify()
          }
        }
      })
      observe(data[key]);
    });
  }
}

function compile(el, data) {
  var frag = document.createDocumentFragment();
  var firstChild;
  while (firstChild = el.firstChild) {
    frag.appendChild(firstChild);
  }

  doCompile(frag, data);

  return frag;
}

function doCompile(parent, data) {
  var childNodes = parent.childNodes || []
  if (childNodes.length) {
    childNodes.forEach(function (node) {
      compileOneNode(node, data);
      if (node.childNodes) {
        doCompile(node, data);  // 循环遍历
      }
    });
  }
}

function compileOneNode(node, data) {
  if (Utils.isDomNode(node)) {
    _compileDomNode(node, data);
  } else if (Utils.isTextNode(node)) {
    _compileTextNode(node, data);
  }

  function _compileDomNode(node, data) {
    var attrs = node.attributes
    Object.keys(attrs).forEach(function (key) {
      var oneAttr = attrs[key];
      if (Utils.isDirective(oneAttr.name)) {
        node.value = Utils.getExprValue(oneAttr.value, data);
        new watcher(data, oneAttr.value, function (newValue) {
          node.value = newValue
        })
      }
    })
  }

  function _compileTextNode(node, data) {
    if (Utils.containTextExpr(node.textContent)) {
      node.textContent = Utils.getFullExprValue(node.textContent, data)
    }
  }
}

function watcher(data, expr, cb) {
  this.data = data;
  this.expr = expr;
  this.cb = cb;
  Dep.target = this;
  this.value = Utils.getExprValue(this.expr, this.data);
  Dep.target = null;
  var self = this;
}
watcher.prototype.update = function () {
  var newValue = Utils.getExprValue(this.expr, this.data)
  if (newValue != this.value) {
    this.value = newValue;
    this.cb(newValue)
  }
}


function Dep() {
  this.subs = []
  var self = this;

  return {
    addSub(fn) {
      self.subs.push(fn)
    },
    notify() {
      self.subs.forEach(function (fn) {
        fn.update()
      })
    }
  }
}


