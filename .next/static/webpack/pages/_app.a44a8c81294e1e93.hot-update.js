"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/searchbar.js":
/*!*********************************!*\
  !*** ./components/searchbar.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Searchbar\": function() { return /* binding */ Searchbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Searchbar(param) {\n    var placeholder = param.placeholder, getSearch = param.getSearch, updateSearch = param.updateSearch, search = param.search;\n    var redirect = function redirect() {\n        getSearch();\n        router.push(\"./marketplace\");\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-1 w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: redirect,\n            className: \"\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"min-w-xs grow xl2:ml-60 border hover:drop-shadow dark:border-none py-2 h-[40px] mx-6 rounded-lg font-bold bg-white dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-400\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMagnifyingGlass,\n                                color: \"text-gray-600\",\n                                className: \"px-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/nft-marketplace/components/searchbar.js\",\n                                lineNumber: 19,\n                                columnNumber: 8\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: placeholder,\n                                className: \"w-3/4 bg-transparent outline-none\",\n                                value: search,\n                                onChange: updateSearch\n                            }, void 0, false, {\n                                fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/nft-marketplace/components/searchbar.js\",\n                                lineNumber: 20,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/nft-marketplace/components/searchbar.js\",\n                        lineNumber: 18,\n                        columnNumber: 8\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"flex-none ml-4 w-100px p-1 border-b hover:border dark:border-none rounded-lg text-white dark:text-gray-900 font-bold bg-blue-400 dark:bg-gray-200\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Search!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/nft-marketplace/components/searchbar.js\",\n                            lineNumber: 22,\n                            columnNumber: 169\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/nft-marketplace/components/searchbar.js\",\n                        lineNumber: 22,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/nft-marketplace/components/searchbar.js\",\n                lineNumber: 17,\n                columnNumber: 8\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/nft-marketplace/components/searchbar.js\",\n            lineNumber: 16,\n            columnNumber: 8\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/nft-marketplace/components/searchbar.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this));\n}\n_s(Searchbar, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Searchbar;\nvar _c;\n$RefreshReg$(_c, \"Searchbar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlYXJjaGJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0U7QUFDSztBQUM5Qjs7QUFFaEMsU0FBU0csU0FBUyxDQUFDLEtBQThDLEVBQUMsQ0FBQztRQUEvQ0MsV0FBVyxHQUFaLEtBQThDLENBQTdDQSxXQUFXLEVBQUVDLFNBQVMsR0FBdkIsS0FBOEMsQ0FBaENBLFNBQVMsRUFBRUMsWUFBWSxHQUFyQyxLQUE4QyxDQUFyQkEsWUFBWSxFQUFFQyxNQUFNLEdBQTdDLEtBQThDLENBQVBBLE1BQU07UUFHNURDLFFBQVEsR0FBakIsUUFBUSxDQUFDQSxRQUFRLEdBQUUsQ0FBQztRQUNsQkgsU0FBUztRQUNUSSxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFlO0lBQzNCLENBQUM7O0lBTEgsR0FBSyxDQUFDRCxNQUFNLEdBQUdQLHNEQUFTO0lBT3hCLE1BQU0sNkVBRUhTLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQWU7OEZBQzFCQyxDQUFJO1lBQUNDLFFBQVEsRUFBRU4sUUFBUTtZQUFFSSxTQUFTLEVBQUMsQ0FBRTtrR0FDckNELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFlOztnR0FDN0JELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUEwSzs7d0dBQ3hMWiwyRUFBZTtnQ0FBQ2UsSUFBSSxFQUFFZCxnRkFBaUI7Z0NBQUVlLEtBQUssRUFBQyxDQUFlO2dDQUFDSixTQUFTLEVBQUMsQ0FBTTs7Ozs7O3dHQUNsRkssQ0FBSztnQ0FBQ0MsSUFBSSxFQUFDLENBQU07Z0NBQUNkLFdBQVcsRUFBRUEsV0FBVztnQ0FBRVEsU0FBUyxFQUFDLENBQW1DO2dDQUFDTyxLQUFLLEVBQUVaLE1BQU07Z0NBQUVhLFFBQVEsRUFBRWQsWUFBWTs7Ozs7Ozs7Ozs7O2dHQUUvSGUsQ0FBSTt3QkFBQ1QsU0FBUyxFQUFDLENBQW1KOzhHQUFFVSxDQUFNOzRCQUFDSixJQUFJLEVBQUMsQ0FBUTtzQ0FBQyxDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNck0sQ0FBQztHQXZCZWYsU0FBUzs7UUFDUkQsa0RBQVM7OztLQURWQyxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2VhcmNoYmFyLmpzPzllMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IHsgZmFNYWduaWZ5aW5nR2xhc3MgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIFNlYXJjaGJhcih7cGxhY2Vob2xkZXIsIGdldFNlYXJjaCwgdXBkYXRlU2VhcmNoLCBzZWFyY2h9KXtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBmdW5jdGlvbiByZWRpcmVjdCgpe1xuICAgIGdldFNlYXJjaCgpXG4gICAgcm91dGVyLnB1c2goXCIuL21hcmtldHBsYWNlXCIpO1xuICAgIH1cblxuICByZXR1cm4oXG4gICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSB3LWZ1bGxcIj5cbiAgICAgICA8Zm9ybSBvblN1Ym1pdD17cmVkaXJlY3R9IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLXcteHMgZ3JvdyB4bDI6bWwtNjAgYm9yZGVyIGhvdmVyOmRyb3Atc2hhZG93IGRhcms6Ym9yZGVyLW5vbmUgcHktMiBoLVs0MHB4XSBteC02IHJvdW5kZWQtbGcgZm9udC1ib2xkIGJnLXdoaXRlIGRhcms6YmctZ3JheS02MDAgZGFyazpob3ZlcjpiZy1ncmF5LTUwMCB0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYU1hZ25pZnlpbmdHbGFzc30gY29sb3I9XCJ0ZXh0LWdyYXktNjAwXCIgY2xhc3NOYW1lPVwicHgtMlwiLz5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IGNsYXNzTmFtZT1cInctMy80IGJnLXRyYW5zcGFyZW50IG91dGxpbmUtbm9uZVwiIHZhbHVlPXtzZWFyY2h9IG9uQ2hhbmdlPXt1cGRhdGVTZWFyY2h9IC8+XG4gICAgPC9kaXY+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleC1ub25lIG1sLTQgdy0xMDBweCBwLTEgYm9yZGVyLWIgaG92ZXI6Ym9yZGVyIGRhcms6Ym9yZGVyLW5vbmUgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIGRhcms6dGV4dC1ncmF5LTkwMCBmb250LWJvbGQgYmctYmx1ZS00MDAgZGFyazpiZy1ncmF5LTIwMFwiPjxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlYXJjaCE8L2J1dHRvbj5cbiAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJGb250QXdlc29tZUljb24iLCJmYU1hZ25pZnlpbmdHbGFzcyIsInVzZVJvdXRlciIsIlNlYXJjaGJhciIsInBsYWNlaG9sZGVyIiwiZ2V0U2VhcmNoIiwidXBkYXRlU2VhcmNoIiwic2VhcmNoIiwicmVkaXJlY3QiLCJyb3V0ZXIiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaWNvbiIsImNvbG9yIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInNwYW4iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/searchbar.js\n");

/***/ })

});