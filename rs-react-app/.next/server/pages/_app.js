/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./components/PeopleList/people.slice.ts":
/*!***********************************************!*\
  !*** ./components/PeopleList/people.slice.ts ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   peopleSlice: () => (/* binding */ peopleSlice),\n/* harmony export */   putPersonToStored: () => (/* binding */ putPersonToStored),\n/* harmony export */   removeAllPersonFromStored: () => (/* binding */ removeAllPersonFromStored),\n/* harmony export */   removePersonFromStored: () => (/* binding */ removePersonFromStored)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst initialState = {\n    saveEntities: {}\n};\nconst peopleSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'people',\n    initialState: initialState,\n    reducers: {\n        putPersonToStored: (state, action)=>{\n            state.saveEntities[action.payload.id] = action.payload.person;\n        },\n        removePersonFromStored: (state, action)=>{\n            const { [action.payload.id]: _, ...rest } = state.saveEntities;\n            state.saveEntities = rest;\n        },\n        removeAllPersonFromStored: (state)=>{\n            state.saveEntities = {};\n        }\n    },\n    selectors: {\n        takePerson: (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)((state)=>state, (_, personId)=>personId, (people, personId)=>people.find((person)=>{\n                return person.id === personId;\n            }))\n    }\n});\nconst { putPersonToStored, removePersonFromStored, removeAllPersonFromStored } = peopleSlice.actions;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvUGVvcGxlTGlzdC9wZW9wbGUuc2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBOEU7QUFTOUUsTUFBTUUsZUFBZ0M7SUFBRUMsY0FBYyxDQUFDO0FBQUU7QUFFbEQsTUFBTUMsY0FBY0gsNkRBQVdBLENBQUM7SUFDckNJLE1BQU07SUFDTkgsY0FBY0E7SUFDZEksVUFBVTtRQUNSQyxtQkFBbUIsQ0FDakJDLE9BQ0FDO1lBS0FELE1BQU1MLFlBQVksQ0FBQ00sT0FBT0MsT0FBTyxDQUFDQyxFQUFFLENBQUMsR0FBR0YsT0FBT0MsT0FBTyxDQUFDRSxNQUFNO1FBQy9EO1FBQ0FDLHdCQUF3QixDQUN0QkwsT0FDQUM7WUFFQSxNQUFNLEVBQUUsQ0FBQ0EsT0FBT0MsT0FBTyxDQUFDQyxFQUFFLENBQUMsRUFBRUcsQ0FBQyxFQUFFLEdBQUdDLE1BQU0sR0FBR1AsTUFBTUwsWUFBWTtZQUM5REssTUFBTUwsWUFBWSxHQUFHWTtRQUN2QjtRQUNBQywyQkFBMkIsQ0FBQ1I7WUFDMUJBLE1BQU1MLFlBQVksR0FBRyxDQUFDO1FBQ3hCO0lBQ0Y7SUFDQWMsV0FBVztRQUNUQyxZQUFZbEIsZ0VBQWNBLENBQ3hCLENBQUNRLFFBQVVBLE9BQ1gsQ0FBQ00sR0FBR0ssV0FBcUJBLFVBQ3pCLENBQUNDLFFBQVFELFdBQ1BDLE9BQU9DLElBQUksQ0FBQyxDQUFDVDtnQkFDWCxPQUFPQSxPQUFPRCxFQUFFLEtBQUtRO1lBQ3ZCO0lBRU47QUFDRixHQUFHO0FBRUksTUFBTSxFQUNYWixpQkFBaUIsRUFDakJNLHNCQUFzQixFQUN0QkcseUJBQXlCLEVBQzFCLEdBQUdaLFlBQVlrQixPQUFPLENBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbGViL0RvY3VtZW50cy9zY2hvb2xfZ2l0L1N0YWdlLTMtMjAyNS9ycy1yZWFjdC1hcHAvY29tcG9uZW50cy9QZW9wbGVMaXN0L3Blb3BsZS5zbGljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IFBlcnNvblRvUmVuZGVyIH0gZnJvbSAnQHBhZ2VzL3R5cGUnO1xuXG50eXBlIFBlb3BsZUlkID0gc3RyaW5nO1xuXG50eXBlIFNhdmVQZW9wbGVTdGF0ZSA9IHtcbiAgc2F2ZUVudGl0aWVzOiBSZWNvcmQ8UGVvcGxlSWQsIFBlcnNvblRvUmVuZGVyIHwgdW5kZWZpbmVkPjtcbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogU2F2ZVBlb3BsZVN0YXRlID0geyBzYXZlRW50aXRpZXM6IHt9IH07XG5cbmV4cG9ydCBjb25zdCBwZW9wbGVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3Blb3BsZScsXG4gIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHB1dFBlcnNvblRvU3RvcmVkOiAoXG4gICAgICBzdGF0ZSxcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XG4gICAgICAgIGlkOiBQZW9wbGVJZDtcbiAgICAgICAgcGVyc29uOiBQZXJzb25Ub1JlbmRlciB8IHVuZGVmaW5lZDtcbiAgICAgIH0+XG4gICAgKSA9PiB7XG4gICAgICBzdGF0ZS5zYXZlRW50aXRpZXNbYWN0aW9uLnBheWxvYWQuaWRdID0gYWN0aW9uLnBheWxvYWQucGVyc29uO1xuICAgIH0sXG4gICAgcmVtb3ZlUGVyc29uRnJvbVN0b3JlZDogKFxuICAgICAgc3RhdGUsXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBpZDogUGVvcGxlSWQgfT5cbiAgICApID0+IHtcbiAgICAgIGNvbnN0IHsgW2FjdGlvbi5wYXlsb2FkLmlkXTogXywgLi4ucmVzdCB9ID0gc3RhdGUuc2F2ZUVudGl0aWVzO1xuICAgICAgc3RhdGUuc2F2ZUVudGl0aWVzID0gcmVzdDtcbiAgICB9LFxuICAgIHJlbW92ZUFsbFBlcnNvbkZyb21TdG9yZWQ6IChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUuc2F2ZUVudGl0aWVzID0ge307XG4gICAgfSxcbiAgfSxcbiAgc2VsZWN0b3JzOiB7XG4gICAgdGFrZVBlcnNvbjogY3JlYXRlU2VsZWN0b3IoXG4gICAgICAoc3RhdGUpID0+IHN0YXRlLFxuICAgICAgKF8sIHBlcnNvbklkOiBzdHJpbmcpID0+IHBlcnNvbklkLFxuICAgICAgKHBlb3BsZSwgcGVyc29uSWQpID0+XG4gICAgICAgIHBlb3BsZS5maW5kKChwZXJzb246IFBlcnNvblRvUmVuZGVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHBlcnNvbi5pZCA9PT0gcGVyc29uSWQ7XG4gICAgICAgIH0pXG4gICAgKSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3Qge1xuICBwdXRQZXJzb25Ub1N0b3JlZCxcbiAgcmVtb3ZlUGVyc29uRnJvbVN0b3JlZCxcbiAgcmVtb3ZlQWxsUGVyc29uRnJvbVN0b3JlZCxcbn0gPSBwZW9wbGVTbGljZS5hY3Rpb25zO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNlbGVjdG9yIiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJzYXZlRW50aXRpZXMiLCJwZW9wbGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInB1dFBlcnNvblRvU3RvcmVkIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiaWQiLCJwZXJzb24iLCJyZW1vdmVQZXJzb25Gcm9tU3RvcmVkIiwiXyIsInJlc3QiLCJyZW1vdmVBbGxQZXJzb25Gcm9tU3RvcmVkIiwic2VsZWN0b3JzIiwidGFrZVBlcnNvbiIsInBlcnNvbklkIiwicGVvcGxlIiwiZmluZCIsImFjdGlvbnMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/PeopleList/people.slice.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./constants/api.tsx":
/*!***************************!*\
  !*** ./constants/api.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_ROOT: () => (/* binding */ API_ROOT),\n/* harmony export */   SWAPI_PEOPLE: () => (/* binding */ SWAPI_PEOPLE),\n/* harmony export */   SWAPI_ROOT: () => (/* binding */ SWAPI_ROOT),\n/* harmony export */   VISUALGUIDE_ROOT_IMG: () => (/* binding */ VISUALGUIDE_ROOT_IMG)\n/* harmony export */ });\nconst SWAPI_ROOT = 'https://swapi.dev/api/';\nconst SWAPI_PEOPLE = 'people';\nconst VISUALGUIDE_ROOT_IMG = 'https://starwars-visualguide.com/assets/img/characters';\nconst API_ROOT = SWAPI_ROOT + SWAPI_PEOPLE;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnN0YW50cy9hcGkudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxNQUFNQSxhQUFhLHlCQUF5QjtBQUM1QyxNQUFNQyxlQUFlLFNBQVM7QUFFOUIsTUFBTUMsdUJBQ1gseURBQXlEO0FBRXBELE1BQU1DLFdBQVdILGFBQWFDLGFBQWEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbGViL0RvY3VtZW50cy9zY2hvb2xfZ2l0L1N0YWdlLTMtMjAyNS9ycy1yZWFjdC1hcHAvY29uc3RhbnRzL2FwaS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFNXQVBJX1JPT1QgPSAnaHR0cHM6Ly9zd2FwaS5kZXYvYXBpLyc7XG5leHBvcnQgY29uc3QgU1dBUElfUEVPUExFID0gJ3Blb3BsZSc7XG5cbmV4cG9ydCBjb25zdCBWSVNVQUxHVUlERV9ST09UX0lNRyA9XG4gICdodHRwczovL3N0YXJ3YXJzLXZpc3VhbGd1aWRlLmNvbS9hc3NldHMvaW1nL2NoYXJhY3RlcnMnO1xuXG5leHBvcnQgY29uc3QgQVBJX1JPT1QgPSBTV0FQSV9ST09UICsgU1dBUElfUEVPUExFO1xuIl0sIm5hbWVzIjpbIlNXQVBJX1JPT1QiLCJTV0FQSV9QRU9QTEUiLCJWSVNVQUxHVUlERV9ST09UX0lNRyIsIkFQSV9ST09UIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./constants/api.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.css */ \"(pages-dir-node)/./pages/globals.css\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/store */ \"(pages-dir-node)/./store/store.ts\");\n/* harmony import */ var _services_ThemeContex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/ThemeContex */ \"(pages-dir-node)/./services/ThemeContex.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_redux__WEBPACK_IMPORTED_MODULE_3__, _store_store__WEBPACK_IMPORTED_MODULE_4__]);\n([react_redux__WEBPACK_IMPORTED_MODULE_3__, _store_store__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: _store_store__WEBPACK_IMPORTED_MODULE_4__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_services_ThemeContex__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/gleb/Documents/school_git/Stage-3-2025/rs-react-app/pages/_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/gleb/Documents/school_git/Stage-3-2025/rs-react-app/pages/_app.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/gleb/Documents/school_git/Stage-3-2025/rs-react-app/pages/_app.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0g7QUFHZ0I7QUFDRjtBQUNpQjtBQUV2QyxTQUFTSSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELHFCQUNFLDhEQUFDTCxpREFBUUE7UUFBQ0MsT0FBT0EsK0NBQUtBO2tCQUNwQiw0RUFBQ0MsZ0VBQWFBO3NCQUNaLDRFQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDIiwic291cmNlcyI6WyIvVXNlcnMvZ2xlYi9Eb2N1bWVudHMvc2Nob29sX2dpdC9TdGFnZS0zLTIwMjUvcnMtcmVhY3QtYXBwL3BhZ2VzL19hcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5cbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICdAc3RvcmUvc3RvcmUnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BzZXJ2aWNlcy9UaGVtZUNvbnRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8VGhlbWVQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm92aWRlciIsInN0b3JlIiwiVGhlbWVQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/globals.css":
/*!***************************!*\
  !*** ./pages/globals.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./services/ThemeContex.tsx":
/*!**********************************!*\
  !*** ./services/ThemeContex.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeContext: () => (/* binding */ ThemeContext),\n/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider),\n/* harmony export */   useTheme: () => (/* binding */ useTheme)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst useTheme = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);\n    if (!context) {\n        throw new Error('no context');\n    }\n    return context;\n};\nconst ThemeProvider = ({ children })=>{\n    const [isDark, setIsDark] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleTheme = ()=>{\n        setIsDark((prev)=>!prev);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            isDark,\n            toggleTheme\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/gleb/Documents/school_git/Stage-3-2025/rs-react-app/services/ThemeContex.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NlcnZpY2VzL1RoZW1lQ29udGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1RTtBQU9oRSxNQUFNRyw2QkFBZUgsb0RBQWFBLENBQTRCSSxXQUFXO0FBRXpFLE1BQU1DLFdBQVc7SUFDdEIsTUFBTUMsVUFBVUwsaURBQVVBLENBQUNFO0lBQzNCLElBQUksQ0FBQ0csU0FBUztRQUNaLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUNBLE9BQU9EO0FBQ1QsRUFBRTtBQU1LLE1BQU1FLGdCQUFnQixDQUFDLEVBQUVDLFFBQVEsRUFBc0I7SUFDNUQsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDO0lBRXJDLE1BQU1VLGNBQWM7UUFDbEJELFVBQVUsQ0FBQ0UsT0FBUyxDQUFDQTtJQUN2QjtJQUVBLHFCQUNFLDhEQUFDVixhQUFhVyxRQUFRO1FBQUNDLE9BQU87WUFBRUw7WUFBUUU7UUFBWTtrQkFDakRIOzs7Ozs7QUFHUCxFQUFFIiwic291cmNlcyI6WyIvVXNlcnMvZ2xlYi9Eb2N1bWVudHMvc2Nob29sX2dpdC9TdGFnZS0zLTIwMjUvcnMtcmVhY3QtYXBwL3NlcnZpY2VzL1RoZW1lQ29udGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgSXRoZW1lQ29udGV4dCB7XG4gIGlzRGFyazogYm9vbGVhbjtcbiAgdG9nZ2xlVGhlbWU6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PEl0aGVtZUNvbnRleHQgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbmV4cG9ydCBjb25zdCB1c2VUaGVtZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdubyBjb250ZXh0Jyk7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59O1xuXG5pbnRlcmZhY2UgVGhlbWVQcm92aWRlclByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGNvbnN0IFRoZW1lUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBUaGVtZVByb3ZpZGVyUHJvcHMpID0+IHtcbiAgY29uc3QgW2lzRGFyaywgc2V0SXNEYXJrXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+IHtcbiAgICBzZXRJc0RhcmsoKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaXNEYXJrLCB0b2dnbGVUaGVtZSB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlRoZW1lQ29udGV4dCIsInVuZGVmaW5lZCIsInVzZVRoZW1lIiwiY29udGV4dCIsIkVycm9yIiwiVGhlbWVQcm92aWRlciIsImNoaWxkcmVuIiwiaXNEYXJrIiwic2V0SXNEYXJrIiwidG9nZ2xlVGhlbWUiLCJwcmV2IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./services/ThemeContex.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./services/api.tsx":
/*!**************************!*\
  !*** ./services/api.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   baseApi: () => (/* binding */ baseApi)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @constants/api */ \"(pages-dir-node)/./constants/api.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst baseApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: _constants_api__WEBPACK_IMPORTED_MODULE_1__.API_ROOT\n    }),\n    endpoints: ()=>({})\n}); // export const baseApi = createApi({\n //   baseQuery: fetchBaseQuery({ baseUrl: SWAPI_ROOT }),\n //   endpoints: () => ({}),\n // });\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NlcnZpY2VzL2FwaS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlFO0FBQ25CO0FBRS9DLE1BQU1HLFVBQVVILHVFQUFTQSxDQUFDO0lBQy9CSSxXQUFXSCw0RUFBY0EsQ0FBQztRQUFFSSxTQUFTSCxvREFBUUE7SUFBQztJQUM5Q0ksV0FBVyxJQUFPLEVBQUM7QUFDckIsR0FBRyxDQUVILHFDQUFxQztDQUNyQyx3REFBd0Q7Q0FDeEQsMkJBQTJCO0NBQzNCLE1BQU0iLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbGViL0RvY3VtZW50cy9zY2hvb2xfZ2l0L1N0YWdlLTMtMjAyNS9ycy1yZWFjdC1hcHAvc2VydmljZXMvYXBpLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcGksIGZldGNoQmFzZVF1ZXJ5IH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdCc7XG5pbXBvcnQgeyBBUElfUk9PVCwgU1dBUElfUk9PVCB9IGZyb20gJ0Bjb25zdGFudHMvYXBpJztcblxuZXhwb3J0IGNvbnN0IGJhc2VBcGkgPSBjcmVhdGVBcGkoe1xuICBiYXNlUXVlcnk6IGZldGNoQmFzZVF1ZXJ5KHsgYmFzZVVybDogQVBJX1JPT1QgfSksXG4gIGVuZHBvaW50czogKCkgPT4gKHt9KSxcbn0pO1xuXG4vLyBleHBvcnQgY29uc3QgYmFzZUFwaSA9IGNyZWF0ZUFwaSh7XG4vLyAgIGJhc2VRdWVyeTogZmV0Y2hCYXNlUXVlcnkoeyBiYXNlVXJsOiBTV0FQSV9ST09UIH0pLFxuLy8gICBlbmRwb2ludHM6ICgpID0+ICh7fSksXG4vLyB9KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVBcGkiLCJmZXRjaEJhc2VRdWVyeSIsIkFQSV9ST09UIiwiYmFzZUFwaSIsImJhc2VRdWVyeSIsImJhc2VVcmwiLCJlbmRwb2ludHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./services/api.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./store/store.ts":
/*!************************!*\
  !*** ./store/store.ts ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAppSelector: () => (/* binding */ createAppSelector),\n/* harmony export */   store: () => (/* binding */ store),\n/* harmony export */   useAppDispatch: () => (/* binding */ useAppDispatch),\n/* harmony export */   useAppSelector: () => (/* binding */ useAppSelector),\n/* harmony export */   useAppStore: () => (/* binding */ useAppStore)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _components_PeopleList_people_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/PeopleList/people.slice */ \"(pages-dir-node)/./components/PeopleList/people.slice.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api */ \"(pages-dir-node)/./services/api.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _components_PeopleList_people_slice__WEBPACK_IMPORTED_MODULE_1__, react_redux__WEBPACK_IMPORTED_MODULE_2__, _services_api__WEBPACK_IMPORTED_MODULE_3__]);\n([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _components_PeopleList_people_slice__WEBPACK_IMPORTED_MODULE_1__, react_redux__WEBPACK_IMPORTED_MODULE_2__, _services_api__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n// import { peopleSlice } from './components/PeopleList/people.slice';\n\n// import { baseApi } from '@services/api';\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        people: _components_PeopleList_people_slice__WEBPACK_IMPORTED_MODULE_1__.peopleSlice.reducer,\n        [_services_api__WEBPACK_IMPORTED_MODULE_3__.baseApi.reducerPath]: _services_api__WEBPACK_IMPORTED_MODULE_3__.baseApi.reducer\n    },\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_services_api__WEBPACK_IMPORTED_MODULE_3__.baseApi.middleware)\n});\nconst useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector.withTypes();\nconst useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch.withTypes();\nconst useAppStore = react_redux__WEBPACK_IMPORTED_MODULE_2__.useStore.withTypes();\nconst createAppSelector = _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector.withTypes();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3N0b3JlL3N0b3JlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFrRTtBQUNBO0FBQ2xFLHNFQUFzRTtBQUVMO0FBQ2pFLDJDQUEyQztBQUNEO0FBRW5DLE1BQU1PLFFBQVFQLGdFQUFjQSxDQUFDO0lBQ2xDUSxTQUFTO1FBQ1BDLFFBQVFQLDRFQUFXQSxDQUFDTSxPQUFPO1FBQzNCLENBQUNGLGtEQUFPQSxDQUFDSSxXQUFXLENBQUMsRUFBRUosa0RBQU9BLENBQUNFLE9BQU87SUFDeEM7SUFDQUcsWUFBWSxDQUFDQyx1QkFDWEEsdUJBQXVCQyxNQUFNLENBQUNQLGtEQUFPQSxDQUFDSyxVQUFVO0FBQ3BELEdBQUc7QUFLSSxNQUFNRyxpQkFBaUJWLG9EQUFXQSxDQUFDVyxTQUFTLEdBQWE7QUFDekQsTUFBTUMsaUJBQWlCYixvREFBV0EsQ0FBQ1ksU0FBUyxHQUFnQjtBQUM1RCxNQUFNRSxjQUFjWixpREFBUUEsQ0FBQ1UsU0FBUyxHQUFpQjtBQUN2RCxNQUFNRyxvQkFBb0JqQiw0REFBY0EsQ0FBQ2MsU0FBUyxHQUFhIiwic291cmNlcyI6WyIvVXNlcnMvZ2xlYi9Eb2N1bWVudHMvc2Nob29sX2dpdC9TdGFnZS0zLTIwMjUvcnMtcmVhY3QtYXBwL3N0b3JlL3N0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgcGVvcGxlU2xpY2UgfSBmcm9tICdAY29tcG9uZW50cy9QZW9wbGVMaXN0L3Blb3BsZS5zbGljZSc7XG4vLyBpbXBvcnQgeyBwZW9wbGVTbGljZSB9IGZyb20gJy4vY29tcG9uZW50cy9QZW9wbGVMaXN0L3Blb3BsZS5zbGljZSc7XG5cbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciwgdXNlU3RvcmUgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG4vLyBpbXBvcnQgeyBiYXNlQXBpIH0gZnJvbSAnQHNlcnZpY2VzL2FwaSc7XG5pbXBvcnQgeyBiYXNlQXBpIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpJztcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyOiB7XG4gICAgcGVvcGxlOiBwZW9wbGVTbGljZS5yZWR1Y2VyLFxuICAgIFtiYXNlQXBpLnJlZHVjZXJQYXRoXTogYmFzZUFwaS5yZWR1Y2VyLFxuICB9LFxuICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+XG4gICAgZ2V0RGVmYXVsdE1pZGRsZXdhcmUoKS5jb25jYXQoYmFzZUFwaS5taWRkbGV3YXJlKSxcbn0pO1xuXG5leHBvcnQgdHlwZSBBcHBTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlLmdldFN0YXRlPjtcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoO1xuXG5leHBvcnQgY29uc3QgdXNlQXBwU2VsZWN0b3IgPSB1c2VTZWxlY3Rvci53aXRoVHlwZXM8QXBwU3RhdGU+KCk7XG5leHBvcnQgY29uc3QgdXNlQXBwRGlzcGF0Y2ggPSB1c2VEaXNwYXRjaC53aXRoVHlwZXM8QXBwRGlzcGF0Y2g+KCk7XG5leHBvcnQgY29uc3QgdXNlQXBwU3RvcmUgPSB1c2VTdG9yZS53aXRoVHlwZXM8dHlwZW9mIHN0b3JlPigpO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUFwcFNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3Iud2l0aFR5cGVzPEFwcFN0YXRlPigpO1xuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiY3JlYXRlU2VsZWN0b3IiLCJwZW9wbGVTbGljZSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJ1c2VTdG9yZSIsImJhc2VBcGkiLCJzdG9yZSIsInJlZHVjZXIiLCJwZW9wbGUiLCJyZWR1Y2VyUGF0aCIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsImNvbmNhdCIsInVzZUFwcFNlbGVjdG9yIiwid2l0aFR5cGVzIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTdG9yZSIsImNyZWF0ZUFwcFNlbGVjdG9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./store/store.ts\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reduxjs/toolkit");;

/***/ }),

/***/ "@reduxjs/toolkit/query/react":
/*!***********************************************!*\
  !*** external "@reduxjs/toolkit/query/react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reduxjs/toolkit/query/react");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();