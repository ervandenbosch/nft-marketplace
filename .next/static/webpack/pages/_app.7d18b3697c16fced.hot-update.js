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

/***/ "./components/provider.js":
/*!********************************!*\
  !*** ./components/provider.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppWrapper\": function() { return /* binding */ AppWrapper; },\n/* harmony export */   \"useLoginState\": function() { return /* binding */ useLoginState; }\n/* harmony export */ });\n/* harmony import */ var _Users_ezravandenbosch_Documents_GitHub_ervandenbosch_github_io_nft_marketplace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_ezravandenbosch_Documents_GitHub_ervandenbosch_github_io_nft_marketplace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ezravandenbosch_Documents_GitHub_ervandenbosch_github_io_nft_marketplace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nfunction AppWrapper(param) {\n    var children = param.children, connected = param.connected;\n    _s();\n    var ref = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React)(), active = ref.active, account = ref.account, library = ref.library, connector = ref.connector, activate = ref.activate, deactivate = ref.deactivate;\n    var web3 = new (web3__WEBPACK_IMPORTED_MODULE_4___default())(new (web3__WEBPACK_IMPORTED_MODULE_4___default().providers.HttpProvider)(\"https://rpc-mumbai.maticvigil.com\"));\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), balance = ref1[0], setBalance = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), accountEth = ref2[0], setAccountEth = ref2[1];\n    function checkWalletIsConnected() {\n        return _checkWalletIsConnected.apply(this, arguments);\n    }\n    function _checkWalletIsConnected() {\n        _checkWalletIsConnected = _asyncToGenerator(_Users_ezravandenbosch_Documents_GitHub_ervandenbosch_github_io_nft_marketplace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var accounts, metamaskAccount;\n            return _Users_ezravandenbosch_Documents_GitHub_ervandenbosch_github_io_nft_marketplace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return ethereum.request({\n                            method: 'eth_accounts'\n                        });\n                    case 2:\n                        accounts = _ctx.sent;\n                        if (accounts.length !== 0) {\n                            metamaskAccount = accounts[0];\n                            console.log(\"Found a connected account! Address: \", metamaskAccount);\n                            setAccountEth(metamaskAccount);\n                            loadBalance(metamaskAccount);\n                        } else {\n                            console.log(\"No connected account found\");\n                        }\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _checkWalletIsConnected.apply(this, arguments);\n    }\n    function loadBalance(currentAccount) {\n        return _loadBalance.apply(this, arguments);\n    }\n    function _loadBalance() {\n        _loadBalance = _asyncToGenerator(_Users_ezravandenbosch_Documents_GitHub_ervandenbosch_github_io_nft_marketplace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(currentAccount) {\n            var result1;\n            return _Users_ezravandenbosch_Documents_GitHub_ervandenbosch_github_io_nft_marketplace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return web3.eth.getBalance(currentAccount, function(error, result) {\n                            if (!error) {\n                                var balanceEth = web3.utils.fromWei(result, 'ether').substring(0, 6);\n                                setBalance(balanceEth);\n                            }\n                        });\n                    case 4:\n                        _ctx.next = 9;\n                        break;\n                    case 6:\n                        _ctx.prev = 6;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        alert(_ctx.t0);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    6\n                ]\n            ]);\n        }));\n        return _loadBalance.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (window.ethereum) {\n            setAccountListener(window.ethereum);\n            console.log('Wallet exists.');\n            checkWalletIsConnected();\n        } else {\n            alert('Install Metamask');\n            return;\n        }\n    }, []);\n    var setAccountListener = function(provider) {\n        provider.on(\"accountsChanged\", function(_) {\n            return window.location.reload();\n        });\n        provider.on(\"chainChanged\", function(_) {\n            return window.location.reload();\n        });\n    };\n    var state = {\n        balance: balance,\n        accountEth: accountEth\n    };\n    console.log(state);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AppContext.Provider, {\n        value: state,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/nft-marketplace/components/provider.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this));\n}\n_s(AppWrapper, \"4rAQIxhnd5/SAgvwA5/4uYSf1hk=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React\n    ];\n});\n_c = AppWrapper;\nfunction useLoginState() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(AppContext);\n}\n_s1(useLoginState, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AppWrapper\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWdCO1lBQzVCUixzQkFBc0I7UUFDeEIsQ0FBQyxNQUFNLENBQUM7WUFDTm1CLEtBQUssQ0FBQyxDQUFrQjtZQUN4QixNQUFNO1FBQ1IsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxHQUFLLENBQUNFLGtCQUFrQixHQUFHLFFBQVEsQ0FBUEMsUUFBUSxFQUFLLENBQUM7UUFDMUNBLFFBQVEsQ0FBQ0MsRUFBRSxDQUFDLENBQWlCLGtCQUFFLFFBQVEsQ0FBUEMsQ0FBQztZQUFLSixNQUFNLENBQU5BLE1BQU0sQ0FBQ0ssUUFBUSxDQUFDQyxNQUFNOztRQUM1REosUUFBUSxDQUFDQyxFQUFFLENBQUMsQ0FBYyxlQUFFLFFBQVEsQ0FBUEMsQ0FBQztZQUFLSixNQUFNLENBQU5BLE1BQU0sQ0FBQ0ssUUFBUSxDQUFDQyxNQUFNOztJQUN6RCxDQUFDO0lBR0QsR0FBSyxDQUFDQyxLQUFLLEdBQUcsQ0FBQy9CO1FBQUFBLE9BQU8sRUFBUEEsT0FBTztRQUFFRSxVQUFVLEVBQVZBLFVBQVU7SUFBQSxDQUFDO0lBRW5DUyxPQUFPLENBQUNDLEdBQUcsQ0FBQ21CLEtBQUs7SUFFZixNQUFNLDZFQUNINUMsVUFBVSxDQUFDNkMsUUFBUTtRQUFDQyxLQUFLLEVBQUVGLEtBQUs7a0JBQzlCMUMsUUFBUTs7Ozs7O0FBR2YsQ0FBQztHQTdEZUQsVUFBVTs7UUFFNENILDBEQUFZOzs7S0FGbEVHLFVBQVU7QUErRG5CLFNBQVM4QyxhQUFhLEdBQUcsQ0FBQzs7SUFDL0IsTUFBTSxDQUFDcEQsaURBQVUsQ0FBQ0ssVUFBVTtBQUM5QixDQUFDO0lBRmUrQyxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvdmlkZXIuanM/MWE5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSdcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnXG5cbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBBcHBXcmFwcGVyKHsgY2hpbGRyZW4sIGNvbm5lY3RlZCB9KSAge1xuXG5jb25zdCB7IGFjdGl2ZSwgYWNjb3VudCwgbGlicmFyeSwgY29ubmVjdG9yLCBhY3RpdmF0ZSwgZGVhY3RpdmF0ZSB9ID0gdXNlV2ViM1JlYWN0KClcblxuY29uc3Qgd2ViMyA9IG5ldyBXZWIzKG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoXCJodHRwczovL3JwYy1tdW1iYWkubWF0aWN2aWdpbC5jb21cIikpO1xuXG5jb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSgpO1xuY29uc3QgW2FjY291bnRFdGgsIHNldEFjY291bnRFdGhdID0gdXNlU3RhdGUoKTtcblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tXYWxsZXRJc0Nvbm5lY3RlZCgpIHtcbiBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfYWNjb3VudHMnfSlcbmlmIChhY2NvdW50cy5sZW5ndGggIT09IDApe1xuICBjb25zdCBtZXRhbWFza0FjY291bnQgPSBhY2NvdW50c1swXVxuICBjb25zb2xlLmxvZyhcIkZvdW5kIGEgY29ubmVjdGVkIGFjY291bnQhIEFkZHJlc3M6IFwiLCBtZXRhbWFza0FjY291bnQpO1xuICBzZXRBY2NvdW50RXRoKG1ldGFtYXNrQWNjb3VudCk7XG4gIGxvYWRCYWxhbmNlKG1ldGFtYXNrQWNjb3VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTm8gY29ubmVjdGVkIGFjY291bnQgZm91bmRcIilcbiAgICB9XG4gIH1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZEJhbGFuY2UoY3VycmVudEFjY291bnQpIHtcbiAgdmFyIHJlc3VsdFxuICB0cnkge1xuICAgYXdhaXQgd2ViMy5ldGguZ2V0QmFsYW5jZShjdXJyZW50QWNjb3VudCwgZnVuY3Rpb24gKGVycm9yLCByZXN1bHQpIHtcbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgIHZhciBiYWxhbmNlRXRoID0gd2ViMy51dGlscy5mcm9tV2VpKHJlc3VsdCwgJ2V0aGVyJykuc3Vic3RyaW5nKDAsNik7XG4gICAgICAgICAgc2V0QmFsYW5jZShiYWxhbmNlRXRoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSBjYXRjaCAoZXJyb3IpIHtcbiAgICBhbGVydChlcnJvcik7XG59XG59XG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICBzZXRBY2NvdW50TGlzdGVuZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICBjb25zb2xlLmxvZygnV2FsbGV0IGV4aXN0cy4nKVxuICAgIGNoZWNrV2FsbGV0SXNDb25uZWN0ZWQoKTtcbiAgfSBlbHNlIHtcbiAgICBhbGVydCgnSW5zdGFsbCBNZXRhbWFzaycpXG4gICAgcmV0dXJuO1xuICB9XG59LCBbXSlcblxuY29uc3Qgc2V0QWNjb3VudExpc3RlbmVyID0gKHByb3ZpZGVyKSA9PiB7XG5wcm92aWRlci5vbihcImFjY291bnRzQ2hhbmdlZFwiLCAoXykgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcbnByb3ZpZGVyLm9uKFwiY2hhaW5DaGFuZ2VkXCIsIChfKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkpO1xufTtcblxuXG5jb25zdCBzdGF0ZSA9IHtiYWxhbmNlLCBhY2NvdW50RXRofVxuXG5jb25zb2xlLmxvZyhzdGF0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvZ2luU3RhdGUoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlV2ViM1JlYWN0IiwiV2ViMyIsIkFwcENvbnRleHQiLCJBcHBXcmFwcGVyIiwiY2hpbGRyZW4iLCJjb25uZWN0ZWQiLCJhY3RpdmUiLCJhY2NvdW50IiwibGlicmFyeSIsImNvbm5lY3RvciIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsIndlYjMiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImFjY291bnRFdGgiLCJzZXRBY2NvdW50RXRoIiwiY2hlY2tXYWxsZXRJc0Nvbm5lY3RlZCIsImFjY291bnRzIiwibWV0YW1hc2tBY2NvdW50IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImxvYWRCYWxhbmNlIiwiY3VycmVudEFjY291bnQiLCJyZXN1bHQiLCJldGgiLCJnZXRCYWxhbmNlIiwiZXJyb3IiLCJiYWxhbmNlRXRoIiwidXRpbHMiLCJmcm9tV2VpIiwic3Vic3RyaW5nIiwiYWxlcnQiLCJ3aW5kb3ciLCJzZXRBY2NvdW50TGlzdGVuZXIiLCJwcm92aWRlciIsIm9uIiwiXyIsImxvY2F0aW9uIiwicmVsb2FkIiwic3RhdGUiLCJQcm92aWRlciIsInZhbHVlIiwidXNlTG9naW5TdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/provider.js\n");

/***/ })

});