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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Searchbar\": function() { return /* binding */ Searchbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Searchbar(param) {\n    var placeholder = param.placeholder, getSearch = param.getSearch, updateSearch = param.updateSearch, search = param.search;\n    var redirect = function redirect() {\n        router.push(\"../marketplace\");\n        return false;\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-1 w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: redirect(),\n            className: \"\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"min-w-xs grow xl2:ml-60 border hover:drop-shadow dark:border-none py-2 h-[40px] mx-6 rounded-lg font-bold bg-white dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-400\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMagnifyingGlass,\n                                color: \"text-gray-600\",\n                                className: \"px-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/nft-marketplace/components/searchbar.js\",\n                                lineNumber: 18,\n                                columnNumber: 8\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: placeholder,\n                                className: \"w-3/4 bg-transparent outline-none\",\n                                value: search,\n                                onChange: updateSearch\n                            }, void 0, false, {\n                                fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/nft-marketplace/components/searchbar.js\",\n                                lineNumber: 19,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/nft-marketplace/components/searchbar.js\",\n                        lineNumber: 17,\n                        columnNumber: 8\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"flex-none ml-4 w-100px p-1 border-b hover:border dark:border-none rounded-lg text-white dark:text-gray-900 font-bold bg-blue-400 dark:bg-gray-200\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Search!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/nft-marketplace/components/searchbar.js\",\n                            lineNumber: 21,\n                            columnNumber: 169\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/nft-marketplace/components/searchbar.js\",\n                        lineNumber: 21,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/nft-marketplace/components/searchbar.js\",\n                lineNumber: 16,\n                columnNumber: 8\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/nft-marketplace/components/searchbar.js\",\n            lineNumber: 15,\n            columnNumber: 8\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/nft-marketplace/components/searchbar.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this));\n}\n_s(Searchbar, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Searchbar;\nvar _c;\n$RefreshReg$(_c, \"Searchbar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlYXJjaGJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0U7QUFDSztBQUM5Qjs7QUFFaEMsU0FBU0csU0FBUyxDQUFDLEtBQThDLEVBQUMsQ0FBQztRQUEvQ0MsV0FBVyxHQUFaLEtBQThDLENBQTdDQSxXQUFXLEVBQUVDLFNBQVMsR0FBdkIsS0FBOEMsQ0FBaENBLFNBQVMsRUFBRUMsWUFBWSxHQUFyQyxLQUE4QyxDQUFyQkEsWUFBWSxFQUFFQyxNQUFNLEdBQTdDLEtBQThDLENBQVBBLE1BQU07UUFHNURDLFFBQVEsR0FBakIsUUFBUSxDQUFDQSxRQUFRLEdBQUUsQ0FBQztRQUNsQkMsTUFBTSxDQUFDQyxJQUFJLENBQUMsQ0FBZ0I7UUFDNUIsTUFBTSxDQUFDLEtBQUs7SUFDaEIsQ0FBQzs7SUFMQyxHQUFLLENBQUNELE1BQU0sR0FBR1Asc0RBQVM7SUFNeEIsTUFBTSw2RUFFSFMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBZTs4RkFDMUJDLENBQUk7WUFBQ0MsUUFBUSxFQUFFTixRQUFRO1lBQUlJLFNBQVMsRUFBQyxDQUFFO2tHQUN2Q0QsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQWU7O2dHQUM3QkQsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQTBLOzt3R0FDeExaLDJFQUFlO2dDQUFDZSxJQUFJLEVBQUVkLGdGQUFpQjtnQ0FBRWUsS0FBSyxFQUFDLENBQWU7Z0NBQUNKLFNBQVMsRUFBQyxDQUFNOzs7Ozs7d0dBQ2xGSyxDQUFLO2dDQUFDQyxJQUFJLEVBQUMsQ0FBTTtnQ0FBQ2QsV0FBVyxFQUFFQSxXQUFXO2dDQUFFUSxTQUFTLEVBQUMsQ0FBbUM7Z0NBQUNPLEtBQUssRUFBRVosTUFBTTtnQ0FBRWEsUUFBUSxFQUFFZCxZQUFZOzs7Ozs7Ozs7Ozs7Z0dBRS9IZSxDQUFJO3dCQUFDVCxTQUFTLEVBQUMsQ0FBbUo7OEdBQUVVLENBQU07NEJBQUNKLElBQUksRUFBQyxDQUFRO3NDQUFDLENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yTSxDQUFDO0dBdEJlZixTQUFTOztRQUNSRCxrREFBUzs7O0tBRFZDLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWFyY2hiYXIuanM/OWUxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5pbXBvcnQgeyBmYU1hZ25pZnlpbmdHbGFzcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gU2VhcmNoYmFyKHtwbGFjZWhvbGRlciwgZ2V0U2VhcmNoLCB1cGRhdGVTZWFyY2gsIHNlYXJjaH0pe1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGZ1bmN0aW9uIHJlZGlyZWN0KCl7XG4gICAgcm91dGVyLnB1c2goXCIuLi9tYXJrZXRwbGFjZVwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG4gIHJldHVybihcbiAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHctZnVsbFwiPlxuICAgICAgIDxmb3JtIG9uU3VibWl0PXtyZWRpcmVjdCgpfSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LXhzIGdyb3cgeGwyOm1sLTYwIGJvcmRlciBob3Zlcjpkcm9wLXNoYWRvdyBkYXJrOmJvcmRlci1ub25lIHB5LTIgaC1bNDBweF0gbXgtNiByb3VuZGVkLWxnIGZvbnQtYm9sZCBiZy13aGl0ZSBkYXJrOmJnLWdyYXktNjAwIGRhcms6aG92ZXI6YmctZ3JheS01MDAgdGV4dC1ncmF5LTQwMFwiPlxuICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFNYWduaWZ5aW5nR2xhc3N9IGNvbG9yPVwidGV4dC1ncmF5LTYwMFwiIGNsYXNzTmFtZT1cInB4LTJcIi8+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSBjbGFzc05hbWU9XCJ3LTMvNCBiZy10cmFuc3BhcmVudCBvdXRsaW5lLW5vbmVcIiB2YWx1ZT17c2VhcmNofSBvbkNoYW5nZT17dXBkYXRlU2VhcmNofSAvPlxuICAgIDwvZGl2PlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXgtbm9uZSBtbC00IHctMTAwcHggcC0xIGJvcmRlci1iIGhvdmVyOmJvcmRlciBkYXJrOmJvcmRlci1ub25lIHJvdW5kZWQtbGcgdGV4dC13aGl0ZSBkYXJrOnRleHQtZ3JheS05MDAgZm9udC1ib2xkIGJnLWJsdWUtNDAwIGRhcms6YmctZ3JheS0yMDBcIj48YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2ghPC9idXR0b24+XG4gICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiRm9udEF3ZXNvbWVJY29uIiwiZmFNYWduaWZ5aW5nR2xhc3MiLCJ1c2VSb3V0ZXIiLCJTZWFyY2hiYXIiLCJwbGFjZWhvbGRlciIsImdldFNlYXJjaCIsInVwZGF0ZVNlYXJjaCIsInNlYXJjaCIsInJlZGlyZWN0Iiwicm91dGVyIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImljb24iLCJjb2xvciIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJzcGFuIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/searchbar.js\n");

/***/ })

});