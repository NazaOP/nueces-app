"use strict";
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
exports.id = "app/api/auth/recuperar-password/route";
exports.ids = ["app/api/auth/recuperar-password/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "prettier/plugins/html":
/*!****************************************!*\
  !*** external "prettier/plugins/html" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("prettier/plugins/html");;

/***/ }),

/***/ "prettier/standalone":
/*!**************************************!*\
  !*** external "prettier/standalone" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("prettier/standalone");;

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Frecuperar-password%2Froute&page=%2Fapi%2Fauth%2Frecuperar-password%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Frecuperar-password%2Froute.ts&appDir=C%3A%5CUsers%5Cnazab%5COneDrive%5CDocumentos%5Cnueces-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnazab%5COneDrive%5CDocumentos%5Cnueces-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Frecuperar-password%2Froute&page=%2Fapi%2Fauth%2Frecuperar-password%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Frecuperar-password%2Froute.ts&appDir=C%3A%5CUsers%5Cnazab%5COneDrive%5CDocumentos%5Cnueces-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnazab%5COneDrive%5CDocumentos%5Cnueces-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_nazab_OneDrive_Documentos_nueces_app_src_app_api_auth_recuperar_password_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/recuperar-password/route.ts */ \"(rsc)/./src/app/api/auth/recuperar-password/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/recuperar-password/route\",\n        pathname: \"/api/auth/recuperar-password\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/recuperar-password/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\nazab\\\\OneDrive\\\\Documentos\\\\nueces-app\\\\src\\\\app\\\\api\\\\auth\\\\recuperar-password\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_nazab_OneDrive_Documentos_nueces_app_src_app_api_auth_recuperar_password_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/recuperar-password/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGcmVjdXBlcmFyLXBhc3N3b3JkJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhdXRoJTJGcmVjdXBlcmFyLXBhc3N3b3JkJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYXV0aCUyRnJlY3VwZXJhci1wYXNzd29yZCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNuYXphYiU1Q09uZURyaXZlJTVDRG9jdW1lbnRvcyU1Q251ZWNlcy1hcHAlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q25hemFiJTVDT25lRHJpdmUlNUNEb2N1bWVudG9zJTVDbnVlY2VzLWFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDcUQ7QUFDbEk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS12MC1wcm9qZWN0Lz80YzY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXG5hemFiXFxcXE9uZURyaXZlXFxcXERvY3VtZW50b3NcXFxcbnVlY2VzLWFwcFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXHJlY3VwZXJhci1wYXNzd29yZFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9yZWN1cGVyYXItcGFzc3dvcmQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL3JlY3VwZXJhci1wYXNzd29yZFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9yZWN1cGVyYXItcGFzc3dvcmQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxuYXphYlxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudG9zXFxcXG51ZWNlcy1hcHBcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxyZWN1cGVyYXItcGFzc3dvcmRcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvcmVjdXBlcmFyLXBhc3N3b3JkL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Frecuperar-password%2Froute&page=%2Fapi%2Fauth%2Frecuperar-password%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Frecuperar-password%2Froute.ts&appDir=C%3A%5CUsers%5Cnazab%5COneDrive%5CDocumentos%5Cnueces-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnazab%5COneDrive%5CDocumentos%5Cnueces-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/recuperar-password/route.ts":
/*!******************************************************!*\
  !*** ./src/app/api/auth/recuperar-password/route.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! resend */ \"(rsc)/./node_modules/resend/dist/index.mjs\");\n// src/app/api/auth/recuperar-password/route.ts\n\n\n\n\n// Validamos que las variables de entorno necesarias estén definidas\nconst JWT_SECRET = process.env.JWT_SECRET;\nconst RESEND_API_KEY = process.env.RESEND_API_KEY;\nconst BASE_URL = \"http://localhost:3000\";\nif (!JWT_SECRET || !RESEND_API_KEY || !BASE_URL) {\n    // Manejamos el caso en el que las variables de entorno no están configuradas\n    console.error(\"Faltan variables de entorno para la recuperaci\\xf3n de contrase\\xf1a.\");\n}\nconst resend = new resend__WEBPACK_IMPORTED_MODULE_3__.Resend(RESEND_API_KEY);\nasync function POST(request) {\n    try {\n        const { email } = await request.json();\n        console.log(\"Llamada a la API de recuperaci\\xf3n de contrase\\xf1a para:\", email);\n        if (!email) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"El correo electr\\xf3nico es requerido.\"\n            }, {\n                status: 400\n            });\n        }\n        const user = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.usuario.findUnique({\n            where: {\n                email\n            }\n        });\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"Si el usuario existe, se le enviar\\xe1 un correo electr\\xf3nico.\"\n            }, {\n                status: 200\n            });\n        }\n        const resetToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__.sign({\n            userId: user.id\n        }, JWT_SECRET, {\n            expiresIn: \"1h\"\n        });\n        await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.usuario.update({\n            where: {\n                id: user.id\n            },\n            data: {\n                resetToken,\n                resetTokenExpiry: new Date(Date.now() + 3600000)\n            }\n        });\n        const resetUrl = `${BASE_URL}/restablecer-password?token=${resetToken}`;\n        // Enviamos el correo usando la API de Resend\n        await resend.emails.send({\n            from: \"onboarding@resend.dev\",\n            to: user.email,\n            subject: \"Recuperaci\\xf3n de Contrase\\xf1a para NuecesApp\",\n            html: `<p>Hola,</p>\r\n             <p>Has solicitado restablecer tu contraseña. Haz clic en el siguiente enlace para continuar:</p>\r\n             <a href=\"${resetUrl}\">Restablecer Contraseña</a>\r\n             <p>Este enlace es válido por 1 hora.</p>\r\n             <p>Si no solicitaste esto, puedes ignorar este correo.</p>`\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Si el usuario existe, se le enviar\\xe1 un correo electr\\xf3nico.\"\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error en la solicitud de recuperaci\\xf3n:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Error interno del servidor. Por favor, intente de nuevo.\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL3JlY3VwZXJhci1wYXNzd29yZC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwrQ0FBK0M7QUFFSjtBQUNiO0FBQ007QUFDSjtBQUVoQyxvRUFBb0U7QUFDcEUsTUFBTUksYUFBYUMsUUFBUUMsR0FBRyxDQUFDRixVQUFVO0FBQ3pDLE1BQU1HLGlCQUFpQkYsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ2pELE1BQU1DLFdBQVdILHVCQUFnQztBQUVqRCxJQUFJLENBQUNELGNBQWMsQ0FBQ0csa0JBQWtCLENBQUNDLFVBQVU7SUFDL0MsNkVBQTZFO0lBQzdFRSxRQUFRQyxLQUFLLENBQUM7QUFDaEI7QUFFQSxNQUFNQyxTQUFTLElBQUlULDBDQUFNQSxDQUFDSTtBQUVuQixlQUFlTSxLQUFLQyxPQUFnQjtJQUN6QyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNRCxRQUFRRSxJQUFJO1FBQ3BDTixRQUFRTyxHQUFHLENBQUMsOERBQXdERjtRQUVwRSxJQUFJLENBQUNBLE9BQU87WUFDVixPQUFPZixxREFBWUEsQ0FBQ2dCLElBQUksQ0FBQztnQkFBRUwsT0FBTztZQUFzQyxHQUFHO2dCQUFFTyxRQUFRO1lBQUk7UUFDM0Y7UUFFQSxNQUFNQyxPQUFPLE1BQU1sQix1Q0FBRUEsQ0FBQ21CLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDO1lBQ3ZDQyxPQUFPO2dCQUFFUDtZQUFNO1FBQ2pCO1FBRUEsSUFBSSxDQUFDSSxNQUFNO1lBQ1QsT0FBT25CLHFEQUFZQSxDQUFDZ0IsSUFBSSxDQUFDO2dCQUFFTyxTQUFTO1lBQTZELEdBQUc7Z0JBQUVMLFFBQVE7WUFBSTtRQUNwSDtRQUVBLE1BQU1NLGFBQWF0Qiw4Q0FBUSxDQUN6QjtZQUFFd0IsUUFBUVAsS0FBS1EsRUFBRTtRQUFDLEdBQ2xCdkIsWUFDQTtZQUFFd0IsV0FBVztRQUFLO1FBR3BCLE1BQU0zQix1Q0FBRUEsQ0FBQ21CLE9BQU8sQ0FBQ1MsTUFBTSxDQUFDO1lBQ3RCUCxPQUFPO2dCQUFFSyxJQUFJUixLQUFLUSxFQUFFO1lBQUM7WUFDckJHLE1BQU07Z0JBQ0pOO2dCQUNBTyxrQkFBa0IsSUFBSUMsS0FBS0EsS0FBS0MsR0FBRyxLQUFLO1lBQzFDO1FBQ0Y7UUFFQSxNQUFNQyxXQUFXLENBQUMsRUFBRTFCLFNBQVMsNEJBQTRCLEVBQUVnQixXQUFXLENBQUM7UUFFdkUsNkNBQTZDO1FBQzdDLE1BQU1aLE9BQU91QixNQUFNLENBQUNDLElBQUksQ0FBQztZQUN2QkMsTUFBTTtZQUNOQyxJQUFJbkIsS0FBS0osS0FBSztZQUNkd0IsU0FBUztZQUNUQyxNQUFNLENBQUM7O3NCQUVTLEVBQUVOLFNBQVM7O3VFQUVzQyxDQUFDO1FBQ3BFO1FBRUEsT0FBT2xDLHFEQUFZQSxDQUFDZ0IsSUFBSSxDQUFDO1lBQUVPLFNBQVM7UUFBNkQsR0FBRztZQUFFTCxRQUFRO1FBQUk7SUFFcEgsRUFBRSxPQUFPUCxPQUFPO1FBQ2RELFFBQVFDLEtBQUssQ0FBQyw2Q0FBMENBO1FBQ3hELE9BQU9YLHFEQUFZQSxDQUFDZ0IsSUFBSSxDQUFDO1lBQUVMLE9BQU87UUFBMkQsR0FBRztZQUFFTyxRQUFRO1FBQUk7SUFDaEg7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL215LXYwLXByb2plY3QvLi9zcmMvYXBwL2FwaS9hdXRoL3JlY3VwZXJhci1wYXNzd29yZC9yb3V0ZS50cz9kZDQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9hcHAvYXBpL2F1dGgvcmVjdXBlcmFyLXBhc3N3b3JkL3JvdXRlLnRzXHJcblxyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9saWIvZGJcIjtcclxuaW1wb3J0ICogYXMgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IHsgUmVzZW5kIH0gZnJvbSAncmVzZW5kJztcclxuXHJcbi8vIFZhbGlkYW1vcyBxdWUgbGFzIHZhcmlhYmxlcyBkZSBlbnRvcm5vIG5lY2VzYXJpYXMgZXN0w6luIGRlZmluaWRhc1xyXG5jb25zdCBKV1RfU0VDUkVUID0gcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVDtcclxuY29uc3QgUkVTRU5EX0FQSV9LRVkgPSBwcm9jZXNzLmVudi5SRVNFTkRfQVBJX0tFWTtcclxuY29uc3QgQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTDtcclxuXHJcbmlmICghSldUX1NFQ1JFVCB8fCAhUkVTRU5EX0FQSV9LRVkgfHwgIUJBU0VfVVJMKSB7XHJcbiAgLy8gTWFuZWphbW9zIGVsIGNhc28gZW4gZWwgcXVlIGxhcyB2YXJpYWJsZXMgZGUgZW50b3JubyBubyBlc3TDoW4gY29uZmlndXJhZGFzXHJcbiAgY29uc29sZS5lcnJvcihcIkZhbHRhbiB2YXJpYWJsZXMgZGUgZW50b3JubyBwYXJhIGxhIHJlY3VwZXJhY2nDs24gZGUgY29udHJhc2XDsWEuXCIpO1xyXG59XHJcblxyXG5jb25zdCByZXNlbmQgPSBuZXcgUmVzZW5kKFJFU0VORF9BUElfS0VZKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBlbWFpbCB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkxsYW1hZGEgYSBsYSBBUEkgZGUgcmVjdXBlcmFjacOzbiBkZSBjb250cmFzZcOxYSBwYXJhOlwiLCBlbWFpbCk7XHJcblxyXG4gICAgaWYgKCFlbWFpbCkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJFbCBjb3JyZW8gZWxlY3Ryw7NuaWNvIGVzIHJlcXVlcmlkby5cIiB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c3VhcmlvLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZTogeyBlbWFpbCB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiU2kgZWwgdXN1YXJpbyBleGlzdGUsIHNlIGxlIGVudmlhcsOhIHVuIGNvcnJlbyBlbGVjdHLDs25pY28uXCIgfSwgeyBzdGF0dXM6IDIwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXNldFRva2VuID0gand0LnNpZ24oXHJcbiAgICAgIHsgdXNlcklkOiB1c2VyLmlkIH0sXHJcbiAgICAgIEpXVF9TRUNSRVQsXHJcbiAgICAgIHsgZXhwaXJlc0luOiBcIjFoXCIgfVxyXG4gICAgKTtcclxuXHJcbiAgICBhd2FpdCBkYi51c3VhcmlvLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiB1c2VyLmlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICByZXNldFRva2VuLFxyXG4gICAgICAgIHJlc2V0VG9rZW5FeHBpcnk6IG5ldyBEYXRlKERhdGUubm93KCkgKyAzNjAwMDAwKSwgLy8gRXhwaXJhIGVuIDEgaG9yYVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzZXRVcmwgPSBgJHtCQVNFX1VSTH0vcmVzdGFibGVjZXItcGFzc3dvcmQ/dG9rZW49JHtyZXNldFRva2VufWA7XHJcblxyXG4gICAgLy8gRW52aWFtb3MgZWwgY29ycmVvIHVzYW5kbyBsYSBBUEkgZGUgUmVzZW5kXHJcbiAgICBhd2FpdCByZXNlbmQuZW1haWxzLnNlbmQoe1xyXG4gICAgICBmcm9tOiAnb25ib2FyZGluZ0ByZXNlbmQuZGV2JywgLy8gPC0tIEFzZWfDunJhdGUgZGUgcXVlIGVzdGEgZGlyZWNjacOzbiBlc3TDqSB2ZXJpZmljYWRhIGVuIFJlc2VuZFxyXG4gICAgICB0bzogdXNlci5lbWFpbCwgLy8gPC0tIEVudmlhbW9zIGVsIGNvcnJlbyBhbCB1c3VhcmlvIHF1ZSBsbyBzb2xpY2l0w7NcclxuICAgICAgc3ViamVjdDogXCJSZWN1cGVyYWNpw7NuIGRlIENvbnRyYXNlw7FhIHBhcmEgTnVlY2VzQXBwXCIsXHJcbiAgICAgIGh0bWw6IGA8cD5Ib2xhLDwvcD5cclxuICAgICAgICAgICAgIDxwPkhhcyBzb2xpY2l0YWRvIHJlc3RhYmxlY2VyIHR1IGNvbnRyYXNlw7FhLiBIYXogY2xpYyBlbiBlbCBzaWd1aWVudGUgZW5sYWNlIHBhcmEgY29udGludWFyOjwvcD5cclxuICAgICAgICAgICAgIDxhIGhyZWY9XCIke3Jlc2V0VXJsfVwiPlJlc3RhYmxlY2VyIENvbnRyYXNlw7FhPC9hPlxyXG4gICAgICAgICAgICAgPHA+RXN0ZSBlbmxhY2UgZXMgdsOhbGlkbyBwb3IgMSBob3JhLjwvcD5cclxuICAgICAgICAgICAgIDxwPlNpIG5vIHNvbGljaXRhc3RlIGVzdG8sIHB1ZWRlcyBpZ25vcmFyIGVzdGUgY29ycmVvLjwvcD5gLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJTaSBlbCB1c3VhcmlvIGV4aXN0ZSwgc2UgbGUgZW52aWFyw6EgdW4gY29ycmVvIGVsZWN0csOzbmljby5cIiB9LCB7IHN0YXR1czogMjAwIH0pO1xyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGVuIGxhIHNvbGljaXR1ZCBkZSByZWN1cGVyYWNpw7NuOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJFcnJvciBpbnRlcm5vIGRlbCBzZXJ2aWRvci4gUG9yIGZhdm9yLCBpbnRlbnRlIGRlIG51ZXZvLlwiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImRiIiwiand0IiwiUmVzZW5kIiwiSldUX1NFQ1JFVCIsInByb2Nlc3MiLCJlbnYiLCJSRVNFTkRfQVBJX0tFWSIsIkJBU0VfVVJMIiwiTkVYVF9QVUJMSUNfQkFTRV9VUkwiLCJjb25zb2xlIiwiZXJyb3IiLCJyZXNlbmQiLCJQT1NUIiwicmVxdWVzdCIsImVtYWlsIiwianNvbiIsImxvZyIsInN0YXR1cyIsInVzZXIiLCJ1c3VhcmlvIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwibWVzc2FnZSIsInJlc2V0VG9rZW4iLCJzaWduIiwidXNlcklkIiwiaWQiLCJleHBpcmVzSW4iLCJ1cGRhdGUiLCJkYXRhIiwicmVzZXRUb2tlbkV4cGlyeSIsIkRhdGUiLCJub3ciLCJyZXNldFVybCIsImVtYWlscyIsInNlbmQiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwiaHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/recuperar-password/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// src/lib/db.ts\n\nconsole.log(\"Cargando el m\\xf3dulo de db.ts...\");\nconst prismaClientSingleton = ()=>{\n    console.log(\"Creando una nueva instancia de PrismaClient...\");\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\nconst db = globalThis.prismaGlobal ?? prismaClientSingleton();\n\nif (true) {\n    globalThis.prismaGlobal = db;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdCQUFnQjtBQUM4QjtBQUU5Q0MsUUFBUUMsR0FBRyxDQUFDO0FBRVosTUFBTUMsd0JBQXdCO0lBQzVCRixRQUFRQyxHQUFHLENBQUM7SUFDWixPQUFPLElBQUlGLHdEQUFZQTtBQUN6QjtBQU1BLE1BQU1JLEtBQUtDLFdBQVdDLFlBQVksSUFBSUg7QUFFeEI7QUFFZCxJQUFJSSxJQUFxQyxFQUFFO0lBQ3pDRixXQUFXQyxZQUFZLEdBQUdGO0FBQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktdjAtcHJvamVjdC8uL3NyYy9saWIvZGIudHM/OWU0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvbGliL2RiLnRzXHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5cclxuY29uc29sZS5sb2coXCJDYXJnYW5kbyBlbCBtw7NkdWxvIGRlIGRiLnRzLi4uXCIpO1xyXG5cclxuY29uc3QgcHJpc21hQ2xpZW50U2luZ2xldG9uID0gKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiQ3JlYW5kbyB1bmEgbnVldmEgaW5zdGFuY2lhIGRlIFByaXNtYUNsaWVudC4uLlwiKTtcclxuICByZXR1cm4gbmV3IFByaXNtYUNsaWVudCgpO1xyXG59O1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIHZhciBwcmlzbWFHbG9iYWw6IHVuZGVmaW5lZCB8IFJldHVyblR5cGU8dHlwZW9mIHByaXNtYUNsaWVudFNpbmdsZXRvbj47XHJcbn1cclxuXHJcbmNvbnN0IGRiID0gZ2xvYmFsVGhpcy5wcmlzbWFHbG9iYWwgPz8gcHJpc21hQ2xpZW50U2luZ2xldG9uKCk7XHJcblxyXG5leHBvcnQgeyBkYiB9O1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gIGdsb2JhbFRoaXMucHJpc21hR2xvYmFsID0gZGI7XHJcbn0iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiY29uc29sZSIsImxvZyIsInByaXNtYUNsaWVudFNpbmdsZXRvbiIsImRiIiwiZ2xvYmFsVGhpcyIsInByaXNtYUdsb2JhbCIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/jws","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/resend","vendor-chunks/safe-buffer","vendor-chunks/ms","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Frecuperar-password%2Froute&page=%2Fapi%2Fauth%2Frecuperar-password%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Frecuperar-password%2Froute.ts&appDir=C%3A%5CUsers%5Cnazab%5COneDrive%5CDocumentos%5Cnueces-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnazab%5COneDrive%5CDocumentos%5Cnueces-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();