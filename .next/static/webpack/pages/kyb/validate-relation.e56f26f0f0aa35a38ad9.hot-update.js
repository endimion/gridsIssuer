webpackHotUpdate_N_E("pages/kyb/validate-relation",{

/***/ "./pages/kyb/validate-relation.js":
/*!****************************************!*\
  !*** ./pages/kyb/validate-relation.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_ValidateKYBComp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ValidateKYBComp */ \"./components/ValidateKYBComp.js\");\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar Wizard = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Wizard, _React$Component);\n\n  var _super = _createSuper(Wizard);\n\n  function Wizard(props) {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Wizard);\n\n    return _super.call(this, props);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Wizard, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"div\", {\n        className: \"container\"\n      }, __jsx(\"div\", {\n        className: \"row\",\n        style: {\n          marginBottom: \"3rem\"\n        }\n      }, \"Please validate your relationship with the declared company. To do so, click the Sign button. This will result in the signing a qualified One Time Signature (issued using your eIDAS eID profile) a document validating your relationship with the declared document. To review the document please click here\"), __jsx(\"div\", {\n        className: \"row\",\n        style: {\n          marginBottom: \"3rem\"\n        }\n      }, \"Document:\"), __jsx(\"div\", {\n        className: \"row\"\n      }, \"I\", \" \", __jsx(\"b\", null, this.props.userDetails.given_name, \" \", this.props.userDetails.family_name), \", born at: \", __jsx(\"b\", null, this.props.userDetails.birthdate), \"identified by the eIDAS personal Identifier:\", \" \", __jsx(\"b\", null, this.props.userDetails.personal_number), \"attest that I am affiliated the company: \", __jsx(\"b\", null, this.props.selfLei), \".\"));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {\n        var reduxStore, req;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                reduxStore = _ref.reduxStore, req = _ref.req;\n                return _context.abrupt(\"return\", {\n                  userDetails: req.userDetails,\n                  selfLei: req.selfLei\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps(_x) {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return Wizard;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\nfunction mapStateToProps(state) {\n  return {\n    test: \"Test\"\n  };\n}\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {};\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Wizard));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMva3liL3ZhbGlkYXRlLXJlbGF0aW9uLmpzPzBkOGQiXSwibmFtZXMiOlsiV2l6YXJkIiwicHJvcHMiLCJtYXJnaW5Cb3R0b20iLCJ1c2VyRGV0YWlscyIsImdpdmVuX25hbWUiLCJmYW1pbHlfbmFtZSIsImJpcnRoZGF0ZSIsInBlcnNvbmFsX251bWJlciIsInNlbGZMZWkiLCJyZWR1eFN0b3JlIiwicmVxIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInRlc3QiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsTTs7Ozs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNYQSxLQURXO0FBRWxCOzs7O1dBV0Qsa0JBQVM7QUFDUCxhQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBRUU7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBcUIsYUFBSyxFQUFFO0FBQUVDLHNCQUFZLEVBQUU7QUFBaEI7QUFBNUIsMlRBRkYsRUFTRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFxQixhQUFLLEVBQUU7QUFBRUEsc0JBQVksRUFBRTtBQUFoQjtBQUE1QixxQkFURixFQVlFO0FBQUssaUJBQVMsRUFBQztBQUFmLGNBQ0ksR0FESixFQUVFLGlCQUNHLEtBQUtELEtBQUwsQ0FBV0UsV0FBWCxDQUF1QkMsVUFEMUIsRUFDc0MsR0FEdEMsRUFFRyxLQUFLSCxLQUFMLENBQVdFLFdBQVgsQ0FBdUJFLFdBRjFCLENBRkYsaUJBTWEsaUJBQUksS0FBS0osS0FBTCxDQUFXRSxXQUFYLENBQXVCRyxTQUEzQixDQU5iLGtEQU8rQyxHQVAvQyxFQVFFLGlCQUFJLEtBQUtMLEtBQUwsQ0FBV0UsV0FBWCxDQUF1QkksZUFBM0IsQ0FSRiwrQ0FTMkMsaUJBQUksS0FBS04sS0FBTCxDQUFXTyxPQUFmLENBVDNDLE1BWkYsQ0FERjtBQTBCRDs7Ozs4TUFwQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCQywwQkFBL0IsUUFBK0JBLFVBQS9CLEVBQTJDQyxHQUEzQyxRQUEyQ0EsR0FBM0M7QUFBQSxpREFHUztBQUNMUCw2QkFBVyxFQUFFTyxHQUFHLENBQUNQLFdBRFo7QUFFTEsseUJBQU8sRUFBRUUsR0FBRyxDQUFDRjtBQUZSLGlCQUhUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7O0VBTG1CRyw0Q0FBSyxDQUFDQyxTOztBQTRDM0IsU0FBU0MsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFDOUIsU0FBTztBQUNMQyxRQUFJLEVBQUU7QUFERCxHQUFQO0FBR0Q7O0FBRUQsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTyxFQUFQO0FBQ0QsQ0FGRDs7QUFHZUMsMkhBQU8sQ0FBQ0wsZUFBRCxFQUFrQkcsa0JBQWxCLENBQVAsQ0FBNkNoQixNQUE3QyxDQUFmIiwiZmlsZSI6Ii4vcGFnZXMva3liL3ZhbGlkYXRlLXJlbGF0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBWYWxpZGF0ZVRhYmxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1ZhbGlkYXRlS1lCQ29tcFwiO1xuXG5jbGFzcyBXaXphcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZWR1eFN0b3JlLCByZXEgfSkge1xuICAgIC8vcmV0dXJuZWQgdmFsdWUgaGVyZSBpcyBnZXR0aW5nIG1lcmVkIHdpdGggdGhlIG1hcHN0YXRldG9wcm9wc1xuICAgIC8vIG1hcHN0YXRldG9wcm9wcyBvdmVycmlkZXMgdGhlc2UgdmFsdWVzIGlmIHRoZXkgbWF0Y2hcbiAgICByZXR1cm4ge1xuICAgICAgdXNlckRldGFpbHM6IHJlcS51c2VyRGV0YWlscyxcbiAgICAgIHNlbGZMZWk6IHJlcS5zZWxmTGVpLFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIHsvKiA8VmFsaWRhdGVUYWJsZSB1c2VyRGV0YWlscz17dGhpcy5wcm9wcy51c2VyRGV0YWlsc30+PC9WYWxpZGF0ZVRhYmxlPiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiM3JlbVwiIH19PlxuICAgICAgICAgIFBsZWFzZSB2YWxpZGF0ZSB5b3VyIHJlbGF0aW9uc2hpcCB3aXRoIHRoZSBkZWNsYXJlZCBjb21wYW55LiBUbyBkbyBzbyxcbiAgICAgICAgICBjbGljayB0aGUgU2lnbiBidXR0b24uIFRoaXMgd2lsbCByZXN1bHQgaW4gdGhlIHNpZ25pbmcgYSBxdWFsaWZpZWQgT25lXG4gICAgICAgICAgVGltZSBTaWduYXR1cmUgKGlzc3VlZCB1c2luZyB5b3VyIGVJREFTIGVJRCBwcm9maWxlKSBhIGRvY3VtZW50XG4gICAgICAgICAgdmFsaWRhdGluZyB5b3VyIHJlbGF0aW9uc2hpcCB3aXRoIHRoZSBkZWNsYXJlZCBkb2N1bWVudC4gVG8gcmV2aWV3IHRoZVxuICAgICAgICAgIGRvY3VtZW50IHBsZWFzZSBjbGljayBoZXJlXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIzcmVtXCIgfX0+XG4gICAgICAgICAgRG9jdW1lbnQ6XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIEl7XCIgXCJ9XG4gICAgICAgICAgPGI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy51c2VyRGV0YWlscy5naXZlbl9uYW1lfXtcIiBcIn1cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnVzZXJEZXRhaWxzLmZhbWlseV9uYW1lfVxuICAgICAgICAgIDwvYj5cbiAgICAgICAgICAsIGJvcm4gYXQ6IDxiPnt0aGlzLnByb3BzLnVzZXJEZXRhaWxzLmJpcnRoZGF0ZX08L2I+XG4gICAgICAgICAgaWRlbnRpZmllZCBieSB0aGUgZUlEQVMgcGVyc29uYWwgSWRlbnRpZmllcjp7XCIgXCJ9XG4gICAgICAgICAgPGI+e3RoaXMucHJvcHMudXNlckRldGFpbHMucGVyc29uYWxfbnVtYmVyfTwvYj5cbiAgICAgICAgICBhdHRlc3QgdGhhdCBJIGFtIGFmZmlsaWF0ZWQgdGhlIGNvbXBhbnk6IDxiPnt0aGlzLnByb3BzLnNlbGZMZWl9PC9iPi5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIHRlc3Q6IFwiVGVzdFwiLFxuICB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHt9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFdpemFyZCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/kyb/validate-relation.js\n");

/***/ })

})