(function (modules) {
  var installedModules = {};

  function __webpack_require__(moduleId) {

    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };

    // Execute the module function
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    // Flag the module as loaded
    module.l = true;

    // Return the exports of the module
    return module.exports;
  }



  // define __esModule on exports
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    }
    Object.defineProperty(exports, '__esModule', { value: true });
  };


  // Load entry module and return exports
  return __webpack_require__(__webpack_require__.s = "./index.js");
})
  ({

    "./a.js": (function (module, exports) {
      eval("module.exports = 'aaaaa'\n\n//# sourceURL=webpack:///./a.js?");
    }),

    "./b.js":
      (function (module, exports) {
        eval("module.exports = 'bbbbb'\n\n//# sourceURL=webpack:///./b.js?");
      }),

    "./index.js":
      (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ \"./a.js\");\n/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_a__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b */ \"./b.js\");\n/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_b__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nlet result = _a__WEBPACK_IMPORTED_MODULE_0___default.a + _b__WEBPACK_IMPORTED_MODULE_1___default.a\nconsole.log(result)\n\n//# sourceURL=webpack:///./index.js?");
      })
  });