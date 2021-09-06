/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./src/images/barbeque.jpg */ "./src/images/barbeque.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* #content {\n  background: url(\".mainpage.jpg\");\n} */\n* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height: 100%;\n  background-position: center;\n  background-repeat: inherit;\n  background-size: cover;\n}\n\nimg {\n  max-height: 350px;\n  max-width: 350px;\n  border-radius: 1%;\n}\n\n#content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n/* -------------------------- NAV ----------------------------- */\n\n#content-nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgba(58, 50, 50, 0.6);\n  width: 100%;\n  margin: 0;\n  height: auto;\n}\n#nav li {\n  display: inline;\n  font-size: 2vh;\n  /* padding: 20px; */\n  cursor: pointer;\n  margin-left: 15px;\n}\n\n#nav li:hover {\n  color: lightgray;\n  text-decoration: underline;\n}\n#nav {\n  color: blanchedalmond;\n  display: flex;\n  justify-content: space-evenly;\n  padding-left: 15px;\n  /* width: 100%;\n  max-width: 400px; */\n}\n\n#restaurant-name {\n  color: blanchedalmond;\n  font-size: 4vh;\n  padding-right: 20px;\n  margin-left: 20px;\n}\n\n/* ------------------------------------ HOME ---------------------------------- */\n\n#content-main-home {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 100%;\n  height: 100%;\n}\n\n#content-home {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 100%;\n  max-width: 350px;\n  background-color: rgba(58, 50, 50, 0.6);\n  border-radius: 1%;\n  padding: 10px;\n  border: 2px solid rgb(218, 181, 181);\n  font-size: 4vh;\n  color: rgb(148, 142, 132);\n}\n\n#title-home {\n  margin: 0 auto;\n  text-align: center;\n  font-size: 5vh;\n  color: blanchedalmond;\n}\n\n/* ------------------------------------ MENU -------------------------------------- */\n\n#content-main-menu {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 100%;\n  height: 100%;\n}\n\n#title-menu {\n  font-size: 5vh;\n  color: blanchedalmond;\n}\n\n@media (min-width: 600px) {\n  #content-menu {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (min-width: 900px) {\n  #content-menu {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n#content-menu {\n  display: grid;\n  /* grid-template-columns: repeat(auto-fill, minmax(299px, 1fr)); */\n  /* grid-template-columns: repeat(3, 1fr); */\n  grid-gap: 20px;\n  overflow: auto;\n}\n\n/* #dishOne,\n#dishTwo,\n#dishThree,\n#dishFour,\n#dishFive,\n#dishSix {\n  padding: 10px;\n} */\n\n#content-menu > div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(58, 50, 50, 0.6);\n  padding: 10px;\n}\n\n#content-menu > div > h4 {\n  font-size: 15px;\n  color: grey;\n}\n\n#content-menu > div > h2 {\n  color: white;\n}\n\n/* ------------------------------------- CONTACT -------------------------------------- */\n\n#title-contact {\n  font-size: 5vh;\n  color: blanchedalmond;\n  max-height: 300px;\n  max-width: 200px;\n}\n\n#content-main-contact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 100%;\n  height: 100%;\n}\n\n#content-contact {\n  display: flex;\n  align-items: center;\n}\n\n#contact-info {\n  height: 500px;\n  color: beige;\n  display: flex;\n  justify-content: space-evenly;\n  flex-direction: column;\n  text-align: center;\n  margin: 0 auto;\n  align-items: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;GAEG;AACH;EACE,SAAS;EACT,sBAAsB;AACxB;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,yDAAmG;EACnG,YAAY;EACZ,2BAA2B;EAC3B,0BAA0B;EAC1B,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA,iEAAiE;;AAEjE;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,uCAAuC;EACvC,WAAW;EACX,SAAS;EACT,YAAY;AACd;AACA;EACE,eAAe;EACf,cAAc;EACd,mBAAmB;EACnB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,0BAA0B;AAC5B;AACA;EACE,qBAAqB;EACrB,aAAa;EACb,6BAA6B;EAC7B,kBAAkB;EAClB;qBACmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,cAAc;EACd,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA,iFAAiF;;AAEjF;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,WAAW;EACX,gBAAgB;EAChB,uCAAuC;EACvC,iBAAiB;EACjB,aAAa;EACb,oCAAoC;EACpC,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,cAAc;EACd,qBAAqB;AACvB;;AAEA,qFAAqF;;AAErF;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,WAAW;EACX,YAAY;AACd;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE;IACE,qCAAqC;EACvC;AACF;;AAEA;EACE;IACE,qCAAqC;EACvC;AACF;;AAEA;EACE,aAAa;EACb,kEAAkE;EAClE,2CAA2C;EAC3C,cAAc;EACd,cAAc;AAChB;;AAEA;;;;;;;GAOG;;AAEH;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uCAAuC;EACvC,aAAa;AACf;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA,yFAAyF;;AAEzF;EACE,cAAc;EACd,qBAAqB;EACrB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,sBAAsB;EACtB,kBAAkB;EAClB,cAAc;EACd,mBAAmB;AACrB","sourcesContent":["/* #content {\n  background: url(\".mainpage.jpg\");\n} */\n* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  background-image: url(\"/home/luk/Desktop/the_odin_project/Restuarant-Page/src/images/barbeque.jpg\");\n  height: 100%;\n  background-position: center;\n  background-repeat: inherit;\n  background-size: cover;\n}\n\nimg {\n  max-height: 350px;\n  max-width: 350px;\n  border-radius: 1%;\n}\n\n#content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n/* -------------------------- NAV ----------------------------- */\n\n#content-nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgba(58, 50, 50, 0.6);\n  width: 100%;\n  margin: 0;\n  height: auto;\n}\n#nav li {\n  display: inline;\n  font-size: 2vh;\n  /* padding: 20px; */\n  cursor: pointer;\n  margin-left: 15px;\n}\n\n#nav li:hover {\n  color: lightgray;\n  text-decoration: underline;\n}\n#nav {\n  color: blanchedalmond;\n  display: flex;\n  justify-content: space-evenly;\n  padding-left: 15px;\n  /* width: 100%;\n  max-width: 400px; */\n}\n\n#restaurant-name {\n  color: blanchedalmond;\n  font-size: 4vh;\n  padding-right: 20px;\n  margin-left: 20px;\n}\n\n/* ------------------------------------ HOME ---------------------------------- */\n\n#content-main-home {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 100%;\n  height: 100%;\n}\n\n#content-home {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 100%;\n  max-width: 350px;\n  background-color: rgba(58, 50, 50, 0.6);\n  border-radius: 1%;\n  padding: 10px;\n  border: 2px solid rgb(218, 181, 181);\n  font-size: 4vh;\n  color: rgb(148, 142, 132);\n}\n\n#title-home {\n  margin: 0 auto;\n  text-align: center;\n  font-size: 5vh;\n  color: blanchedalmond;\n}\n\n/* ------------------------------------ MENU -------------------------------------- */\n\n#content-main-menu {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 100%;\n  height: 100%;\n}\n\n#title-menu {\n  font-size: 5vh;\n  color: blanchedalmond;\n}\n\n@media (min-width: 600px) {\n  #content-menu {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (min-width: 900px) {\n  #content-menu {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n#content-menu {\n  display: grid;\n  /* grid-template-columns: repeat(auto-fill, minmax(299px, 1fr)); */\n  /* grid-template-columns: repeat(3, 1fr); */\n  grid-gap: 20px;\n  overflow: auto;\n}\n\n/* #dishOne,\n#dishTwo,\n#dishThree,\n#dishFour,\n#dishFive,\n#dishSix {\n  padding: 10px;\n} */\n\n#content-menu > div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(58, 50, 50, 0.6);\n  padding: 10px;\n}\n\n#content-menu > div > h4 {\n  font-size: 15px;\n  color: grey;\n}\n\n#content-menu > div > h2 {\n  color: white;\n}\n\n/* ------------------------------------- CONTACT -------------------------------------- */\n\n#title-contact {\n  font-size: 5vh;\n  color: blanchedalmond;\n  max-height: 300px;\n  max-width: 200px;\n}\n\n#content-main-contact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 100%;\n  height: 100%;\n}\n\n#content-contact {\n  display: flex;\n  align-items: center;\n}\n\n#contact-info {\n  height: 500px;\n  color: beige;\n  display: flex;\n  justify-content: space-evenly;\n  flex-direction: column;\n  text-align: center;\n  margin: 0 auto;\n  align-items: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contactModule.js":
/*!******************************!*\
  !*** ./src/contactModule.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactPage": () => (/* binding */ contactPage)
/* harmony export */ });
/* harmony import */ var _images_aplauso_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/aplauso.jpg */ "./src/images/aplauso.jpg");


function contactPage() {
  let content = document.getElementById("content");

  //////// MAIN
  let containerMainContact = document.createElement("div");
  containerMainContact.id = "content-main-contact";
  content.appendChild(containerMainContact);
  ////// H1
  let titleContact = document.createElement("h1");
  titleContact.id = "title-contact";
  containerMainContact.appendChild(titleContact);
  titleContact.innerHTML = "Contact";
  ////// CONTACT
  let contentContact = document.createElement("div");
  contentContact.id = "content-contact";
  containerMainContact.appendChild(contentContact);
  //// INFO
  let contactInfo = document.createElement("div");
  contactInfo.id = "contact-info";
  contentContact.appendChild(contactInfo);
  let infoAddress = document.createElement("h3");
  infoAddress.innerHTML = "a Real Street, 101, A Real City, A Real Country";
  contactInfo.appendChild(infoAddress);

  let infoNumber = document.createElement("h2");
  infoNumber.innerHTML = "0800-AREALNUMBER-1337";
  contactInfo.appendChild(infoNumber);

  let infoMail = document.createElement("p");
  infoMail.innerHTML = "ARealEmail@ARealDomain.com";
  contactInfo.appendChild(infoMail);

  let aplauso = document.createElement("img");
  aplauso.src = _images_aplauso_jpg__WEBPACK_IMPORTED_MODULE_0__;
  contactInfo.appendChild(aplauso);

  let aplausoInfo = document.createElement("p");
  aplausoInfo.id = "aplauso-info";
  aplausoInfo.innerHTML =
    "This means a clap for the chef, tradition after a great meal!";
  contactInfo.appendChild(aplausoInfo);
}




/***/ }),

/***/ "./src/homeModule.js":
/*!***************************!*\
  !*** ./src/homeModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePage": () => (/* binding */ homePage)
/* harmony export */ });
function homePage() {
  let content = document.getElementById("content");

  ////// MAIN
  let contentMainHome = document.createElement("div");
  contentMainHome.id = "content-main-home";
  content.appendChild(contentMainHome);
  //// H1
  let titleHome = document.createElement("h1");
  titleHome.id = "title-home";
  contentMainHome.appendChild(titleHome);
  titleHome.innerHTML = "Welcome to GP's Grill";
  //// HOME
  let contentHome = document.createElement("div");
  contentHome.id = "content-home";
  contentMainHome.appendChild(contentHome);
  // PARAGRAPH
  let paragraph = document.createElement("p");
  contentHome.appendChild(paragraph);
  paragraph.innerHTML =
    "In Argentina, asado is everything. The factor that brings the family together on Sundays, and friends some night of the week. The Argentine barbecue is a cult, a ritual, something much bigger than a simple meal.";
}




/***/ }),

/***/ "./src/initialHomeModule.js":
/*!**********************************!*\
  !*** ./src/initialHomeModule.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialHomePage": () => (/* binding */ initialHomePage)
/* harmony export */ });
function initialHomePage() {
  let content = document.getElementById("content");

  ////// NAV
  let contentNav = document.createElement("div");
  contentNav.id = "content-nav";
  content.appendChild(contentNav);
  //// UL
  let nav = document.createElement("ul");
  nav.id = "nav";
  contentNav.appendChild(nav);
  // NAME
  let restaurantName = document.createElement("div");
  restaurantName.id = "restaurant-name";
  restaurantName.innerHTML = "GP's Parrilla";
  contentNav.appendChild(restaurantName);
  // LI
  let home = document.createElement("li");
  let menu = document.createElement("li");
  let contact = document.createElement("li");
  home.innerHTML = "HOME";
  menu.innerHTML = "MENU";
  contact.innerHTML = "CONTACT";
  home.id = "homeBtn";
  menu.id = "menuBtn";
  contact.id = "contactBtn";
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  ////// MAIN
  let contentMainHome = document.createElement("div");
  contentMainHome.id = "content-main-home";
  content.appendChild(contentMainHome);
  //// H1
  let titleHome = document.createElement("h1");
  titleHome.id = "title-home";
  contentMainHome.appendChild(titleHome);
  titleHome.innerHTML = "Welcome to GP's Grill";
  //// HOME
  let contentHome = document.createElement("div");
  contentHome.id = "content-home";
  contentMainHome.appendChild(contentHome);
  // PARAGRAPH
  let paragraph = document.createElement("p");
  contentHome.appendChild(paragraph);
  paragraph.innerHTML =
    "In Argentina, asado is everything. The factor that brings the family together on Sundays, and friends some night of the week. The Argentine barbecue is a cult, a ritual, something much bigger than a simple meal.";
}




/***/ }),

/***/ "./src/menuModule.js":
/*!***************************!*\
  !*** ./src/menuModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuPage": () => (/* binding */ menuPage)
/* harmony export */ });
/* harmony import */ var _images_beef_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/beef.jpg */ "./src/images/beef.jpg");
/* harmony import */ var _images_choripan_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/choripan.jpg */ "./src/images/choripan.jpg");
/* harmony import */ var _images_ensaladaMixta_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/ensaladaMixta.jpg */ "./src/images/ensaladaMixta.jpg");
/* harmony import */ var _images_grilledpork_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/grilledpork.jpg */ "./src/images/grilledpork.jpg");
/* harmony import */ var _images_morcilla_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/morcilla.jpg */ "./src/images/morcilla.jpg");
/* harmony import */ var _images_mollejas_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/mollejas.jpg */ "./src/images/mollejas.jpg");







function menuPage() {
  let content = document.getElementById("content");

  //////// MAIN
  let contentMainMenu = document.createElement("div");
  contentMainMenu.id = "content-main-menu";
  content.appendChild(contentMainMenu);
  ////// H1
  let titleMenu = document.createElement("h1");
  titleMenu.id = "title-menu";
  contentMainMenu.appendChild(titleMenu);
  titleMenu.innerHTML = "Menu";
  ////// MENU
  let contentMenu = document.createElement("div");
  contentMenu.id = "content-menu";
  contentMainMenu.appendChild(contentMenu);
  ////DISHES
  function dishFactory(dishName, dishDesc, dishImg) {
    let dish = document.createElement("div");
    contentMenu.appendChild(dish);
    //
    let dishN = document.createElement("h2");
    dishN.innerHTML = dishName;
    let dishD = document.createElement("h4");
    dishD.innerHTML = dishDesc;
    let dishI = document.createElement("img");
    dishI.src = dishImg;
    //
    dish.appendChild(dishN);
    dish.appendChild(dishD);
    dish.appendChild(dishI);
  }

  dishFactory(
    "Choripan",
    "Choripán is a meal that basically consists of a grilled chorizo ​​between two pieces of bread, typical of Argentine cuisine.",
    _images_choripan_jpg__WEBPACK_IMPORTED_MODULE_1__
  );
  dishFactory(
    "Bife",
    "Grilled or charcoal-grilled cut of beef. Traditionally it is accompanied with some hot sauce, guacamole, beans and tortillas",
    _images_beef_jpg__WEBPACK_IMPORTED_MODULE_0__
  );
  dishFactory(
    "Morcilla",
    "It can be consumed raw, roasted, grilled or fried and as a main dish, it is usually accompanied by piquillo peppers.",
    _images_morcilla_jpg__WEBPACK_IMPORTED_MODULE_4__
  );
  dishFactory(
    "Puerco al Gril",
    "Prepared either indoors or outdoors, juicy pork ribs are always a treat. There are two types of pork ribs, namely spare ribs and baby back ribs.",
    _images_grilledpork_jpg__WEBPACK_IMPORTED_MODULE_3__
  );
  dishFactory(
    "Mollejas",
    "The sweetbreads are in the Argentine barbecue where they have their place of honor and are the expression of a true national passion.",
    _images_mollejas_jpg__WEBPACK_IMPORTED_MODULE_5__
  );
  dishFactory(
    "Ensalada Mixta",
    "It's important to eat a variety of fresh fruits and vegetables, in as many different colors as possible. Combining them in a salad is both easy and delicious!",
    _images_ensaladaMixta_jpg__WEBPACK_IMPORTED_MODULE_2__
  );
}


//   let pictureTest = document.createElement("img");
//   pictureTest.src = "../src/beef.jpg";
//   contentMainMenu.appendChild(pictureTest);
// Grilled chorizo ​​between two pieces of bread, typical of Argentine cuisine.


/***/ }),

/***/ "./src/images/aplauso.jpg":
/*!********************************!*\
  !*** ./src/images/aplauso.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85df2518a8e126c0fd86.jpg";

/***/ }),

/***/ "./src/images/barbeque.jpg":
/*!*********************************!*\
  !*** ./src/images/barbeque.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6a7fc2024e2a367490a.jpg";

/***/ }),

/***/ "./src/images/beef.jpg":
/*!*****************************!*\
  !*** ./src/images/beef.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1010e8a84d8dd42ac0f4.jpg";

/***/ }),

/***/ "./src/images/choripan.jpg":
/*!*********************************!*\
  !*** ./src/images/choripan.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7302e135eadd1fb0247.jpg";

/***/ }),

/***/ "./src/images/ensaladaMixta.jpg":
/*!**************************************!*\
  !*** ./src/images/ensaladaMixta.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fdeb46d6b25d8ecb38a.jpg";

/***/ }),

/***/ "./src/images/grilledpork.jpg":
/*!************************************!*\
  !*** ./src/images/grilledpork.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9998fba0e9185d1db629.jpg";

/***/ }),

/***/ "./src/images/mollejas.jpg":
/*!*********************************!*\
  !*** ./src/images/mollejas.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "049547df39ca878fd2c4.jpg";

/***/ }),

/***/ "./src/images/morcilla.jpg":
/*!*********************************!*\
  !*** ./src/images/morcilla.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8511b4edef3d6bd7679f.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _initialHomeModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialHomeModule */ "./src/initialHomeModule.js");
/* harmony import */ var _homeModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeModule */ "./src/homeModule.js");
/* harmony import */ var _menuModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuModule */ "./src/menuModule.js");
/* harmony import */ var _contactModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactModule */ "./src/contactModule.js");







// var requireContext = require.context("./images", true, /^\.\/.*\.jpg$/);
// requireContext.keys().map(requireContext);

window.addEventListener("load", function () {
  //
  (0,_initialHomeModule__WEBPACK_IMPORTED_MODULE_1__.initialHomePage)();
  //
  let content = document.getElementById("content");
  //
  let homeBtn = document.getElementById("homeBtn");
  let menuBtn = document.getElementById("menuBtn");
  let contactBtn = document.getElementById("contactBtn");
  //
  homeBtn.addEventListener("click", function () {
    content.removeChild(content.lastChild);
    (0,_homeModule__WEBPACK_IMPORTED_MODULE_2__.homePage)();
  });
  menuBtn.addEventListener("click", function () {
    content.removeChild(content.lastChild);
    (0,_menuModule__WEBPACK_IMPORTED_MODULE_3__.menuPage)();
  });
  contactBtn.addEventListener("click", function () {
    content.removeChild(content.lastChild);
    (0,_contactModule__WEBPACK_IMPORTED_MODULE_4__.contactPage)();
  });
});

// while (content.hasChildNodes()) {
//     content.removeChild(content.lastChild);
//   }

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCcUI7O0FBRWlDO0FBQ2Q7QUFDQTtBQUNNOztBQUU5QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLG1FQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQVE7QUFDWixHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUkscURBQVE7QUFDWixHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUksMkRBQVc7QUFDZixHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvY29udGFjdE1vZHVsZS5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvaG9tZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbEhvbWVNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL21lbnVNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvaG9tZS9sdWsvRGVza3RvcC90aGVfb2Rpbl9wcm9qZWN0L1Jlc3R1YXJhbnQtUGFnZS9zcmMvaW1hZ2VzL2JhcmJlcXVlLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qICNjb250ZW50IHtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLm1haW5wYWdlLmpwZ1xcXCIpO1xcbn0gKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuaW1nIHtcXG4gIG1heC1oZWlnaHQ6IDM1MHB4O1xcbiAgbWF4LXdpZHRoOiAzNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDElO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIE5BViAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNjb250ZW50LW5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTgsIDUwLCA1MCwgMC42KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4jbmF2IGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZvbnQtc2l6ZTogMnZoO1xcbiAgLyogcGFkZGluZzogMjBweDsgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4jbmF2IGxpOmhvdmVyIHtcXG4gIGNvbG9yOiBsaWdodGdyYXk7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuI25hdiB7XFxuICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAvKiB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNDAwcHg7ICovXFxufVxcblxcbiNyZXN0YXVyYW50LW5hbWUge1xcbiAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgZm9udC1zaXplOiA0dmg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBIT01FIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4jY29udGVudC1tYWluLWhvbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2NvbnRlbnQtaG9tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1OCwgNTAsIDUwLCAwLjYpO1xcbiAgYm9yZGVyLXJhZGl1czogMSU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIxOCwgMTgxLCAxODEpO1xcbiAgZm9udC1zaXplOiA0dmg7XFxuICBjb2xvcjogcmdiKDE0OCwgMTQyLCAxMzIpO1xcbn1cXG5cXG4jdGl0bGUtaG9tZSB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNXZoO1xcbiAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gTUVOVSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNjb250ZW50LW1haW4tbWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jdGl0bGUtbWVudSB7XFxuICBmb250LXNpemU6IDV2aDtcXG4gIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XFxuICAjY29udGVudC1tZW51IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XFxuICAjY29udGVudC1tZW51IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIH1cXG59XFxuXFxuI2NvbnRlbnQtbWVudSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjk5cHgsIDFmcikpOyAqL1xcbiAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTsgKi9cXG4gIGdyaWQtZ2FwOiAyMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qICNkaXNoT25lLFxcbiNkaXNoVHdvLFxcbiNkaXNoVGhyZWUsXFxuI2Rpc2hGb3VyLFxcbiNkaXNoRml2ZSxcXG4jZGlzaFNpeCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn0gKi9cXG5cXG4jY29udGVudC1tZW51ID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTgsIDUwLCA1MCwgMC42KTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiNjb250ZW50LW1lbnUgPiBkaXYgPiBoNCB7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuI2NvbnRlbnQtbWVudSA+IGRpdiA+IGgyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBDT05UQUNUIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuI3RpdGxlLWNvbnRhY3Qge1xcbiAgZm9udC1zaXplOiA1dmg7XFxuICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxuICBtYXgtaGVpZ2h0OiAzMDBweDtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxufVxcblxcbiNjb250ZW50LW1haW4tY29udGFjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jY29udGVudC1jb250YWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY29udGFjdC1pbmZvIHtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBjb2xvcjogYmVpZ2U7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztHQUVHO0FBQ0g7RUFDRSxTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlEQUFtRztFQUNuRyxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUEsaUVBQWlFOztBQUVqRTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2QyxXQUFXO0VBQ1gsU0FBUztFQUNULFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQjtxQkFDbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUEsaUZBQWlGOztBQUVqRjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix1Q0FBdUM7RUFDdkMsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQSxxRkFBcUY7O0FBRXJGO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7SUFDRSxxQ0FBcUM7RUFDdkM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUNBQXFDO0VBQ3ZDO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0VBQWtFO0VBQ2xFLDJDQUEyQztFQUMzQyxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTs7Ozs7OztHQU9HOztBQUVIO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUNBQXVDO0VBQ3ZDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEseUZBQXlGOztBQUV6RjtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogI2NvbnRlbnQge1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIubWFpbnBhZ2UuanBnXFxcIik7XFxufSAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9ob21lL2x1ay9EZXNrdG9wL3RoZV9vZGluX3Byb2plY3QvUmVzdHVhcmFudC1QYWdlL3NyYy9pbWFnZXMvYmFyYmVxdWUuanBnXFxcIik7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbmltZyB7XFxuICBtYXgtaGVpZ2h0OiAzNTBweDtcXG4gIG1heC13aWR0aDogMzUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxJTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBOQVYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4jY29udGVudC1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU4LCA1MCwgNTAsIDAuNik7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuI25hdiBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmb250LXNpemU6IDJ2aDtcXG4gIC8qIHBhZGRpbmc6IDIwcHg7ICovXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuXFxuI25hdiBsaTpob3ZlciB7XFxuICBjb2xvcjogbGlnaHRncmF5O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbiNuYXYge1xcbiAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgLyogd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDQwMHB4OyAqL1xcbn1cXG5cXG4jcmVzdGF1cmFudC1uYW1lIHtcXG4gIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gIGZvbnQtc2l6ZTogNHZoO1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSE9NRSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuI2NvbnRlbnQtbWFpbi1ob21lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNjb250ZW50LWhvbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAzNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTgsIDUwLCA1MCwgMC42KTtcXG4gIGJvcmRlci1yYWRpdXM6IDElO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMTgsIDE4MSwgMTgxKTtcXG4gIGZvbnQtc2l6ZTogNHZoO1xcbiAgY29sb3I6IHJnYigxNDgsIDE0MiwgMTMyKTtcXG59XFxuXFxuI3RpdGxlLWhvbWUge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDV2aDtcXG4gIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIE1FTlUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4jY29udGVudC1tYWluLW1lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3RpdGxlLW1lbnUge1xcbiAgZm9udC1zaXplOiA1dmg7XFxuICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgI2NvbnRlbnQtbWVudSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xcbiAgI2NvbnRlbnQtbWVudSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICB9XFxufVxcblxcbiNjb250ZW50LW1lbnUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI5OXB4LCAxZnIpKTsgKi9cXG4gIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7ICovXFxuICBncmlkLWdhcDogMjBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKiAjZGlzaE9uZSxcXG4jZGlzaFR3byxcXG4jZGlzaFRocmVlLFxcbiNkaXNoRm91cixcXG4jZGlzaEZpdmUsXFxuI2Rpc2hTaXgge1xcbiAgcGFkZGluZzogMTBweDtcXG59ICovXFxuXFxuI2NvbnRlbnQtbWVudSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU4LCA1MCwgNTAsIDAuNik7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jY29udGVudC1tZW51ID4gZGl2ID4gaDQge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcbiNjb250ZW50LW1lbnUgPiBkaXYgPiBoMiB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQ09OVEFDVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiN0aXRsZS1jb250YWN0IHtcXG4gIGZvbnQtc2l6ZTogNXZoO1xcbiAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgbWF4LWhlaWdodDogMzAwcHg7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4jY29udGVudC1tYWluLWNvbnRhY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2NvbnRlbnQtY29udGFjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRhY3QtaW5mbyB7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgY29sb3I6IGJlaWdlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBBcGxhdXNvIGZyb20gXCIuL2ltYWdlcy9hcGxhdXNvLmpwZ1wiO1xuXG5mdW5jdGlvbiBjb250YWN0UGFnZSgpIHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgLy8vLy8vLy8gTUFJTlxuICBsZXQgY29udGFpbmVyTWFpbkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXJNYWluQ29udGFjdC5pZCA9IFwiY29udGVudC1tYWluLWNvbnRhY3RcIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXJNYWluQ29udGFjdCk7XG4gIC8vLy8vLyBIMVxuICBsZXQgdGl0bGVDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0aXRsZUNvbnRhY3QuaWQgPSBcInRpdGxlLWNvbnRhY3RcIjtcbiAgY29udGFpbmVyTWFpbkNvbnRhY3QuYXBwZW5kQ2hpbGQodGl0bGVDb250YWN0KTtcbiAgdGl0bGVDb250YWN0LmlubmVySFRNTCA9IFwiQ29udGFjdFwiO1xuICAvLy8vLy8gQ09OVEFDVFxuICBsZXQgY29udGVudENvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50Q29udGFjdC5pZCA9IFwiY29udGVudC1jb250YWN0XCI7XG4gIGNvbnRhaW5lck1haW5Db250YWN0LmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWN0KTtcbiAgLy8vLyBJTkZPXG4gIGxldCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhY3RJbmZvLmlkID0gXCJjb250YWN0LWluZm9cIjtcbiAgY29udGVudENvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pO1xuICBsZXQgaW5mb0FkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGluZm9BZGRyZXNzLmlubmVySFRNTCA9IFwiYSBSZWFsIFN0cmVldCwgMTAxLCBBIFJlYWwgQ2l0eSwgQSBSZWFsIENvdW50cnlcIjtcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoaW5mb0FkZHJlc3MpO1xuXG4gIGxldCBpbmZvTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBpbmZvTnVtYmVyLmlubmVySFRNTCA9IFwiMDgwMC1BUkVBTE5VTUJFUi0xMzM3XCI7XG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGluZm9OdW1iZXIpO1xuXG4gIGxldCBpbmZvTWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbmZvTWFpbC5pbm5lckhUTUwgPSBcIkFSZWFsRW1haWxAQVJlYWxEb21haW4uY29tXCI7XG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGluZm9NYWlsKTtcblxuICBsZXQgYXBsYXVzbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGFwbGF1c28uc3JjID0gQXBsYXVzbztcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoYXBsYXVzbyk7XG5cbiAgbGV0IGFwbGF1c29JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGFwbGF1c29JbmZvLmlkID0gXCJhcGxhdXNvLWluZm9cIjtcbiAgYXBsYXVzb0luZm8uaW5uZXJIVE1MID1cbiAgICBcIlRoaXMgbWVhbnMgYSBjbGFwIGZvciB0aGUgY2hlZiwgdHJhZGl0aW9uIGFmdGVyIGEgZ3JlYXQgbWVhbCFcIjtcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoYXBsYXVzb0luZm8pO1xufVxuXG5leHBvcnQgeyBjb250YWN0UGFnZSB9O1xuIiwiZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIC8vLy8vLyBNQUlOXG4gIGxldCBjb250ZW50TWFpbkhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50TWFpbkhvbWUuaWQgPSBcImNvbnRlbnQtbWFpbi1ob21lXCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudE1haW5Ib21lKTtcbiAgLy8vLyBIMVxuICBsZXQgdGl0bGVIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0aXRsZUhvbWUuaWQgPSBcInRpdGxlLWhvbWVcIjtcbiAgY29udGVudE1haW5Ib21lLmFwcGVuZENoaWxkKHRpdGxlSG9tZSk7XG4gIHRpdGxlSG9tZS5pbm5lckhUTUwgPSBcIldlbGNvbWUgdG8gR1AncyBHcmlsbFwiO1xuICAvLy8vIEhPTUVcbiAgbGV0IGNvbnRlbnRIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudEhvbWUuaWQgPSBcImNvbnRlbnQtaG9tZVwiO1xuICBjb250ZW50TWFpbkhvbWUuYXBwZW5kQ2hpbGQoY29udGVudEhvbWUpO1xuICAvLyBQQVJBR1JBUEhcbiAgbGV0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb250ZW50SG9tZS5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuICBwYXJhZ3JhcGguaW5uZXJIVE1MID1cbiAgICBcIkluIEFyZ2VudGluYSwgYXNhZG8gaXMgZXZlcnl0aGluZy4gVGhlIGZhY3RvciB0aGF0IGJyaW5ncyB0aGUgZmFtaWx5IHRvZ2V0aGVyIG9uIFN1bmRheXMsIGFuZCBmcmllbmRzIHNvbWUgbmlnaHQgb2YgdGhlIHdlZWsuIFRoZSBBcmdlbnRpbmUgYmFyYmVjdWUgaXMgYSBjdWx0LCBhIHJpdHVhbCwgc29tZXRoaW5nIG11Y2ggYmlnZ2VyIHRoYW4gYSBzaW1wbGUgbWVhbC5cIjtcbn1cblxuZXhwb3J0IHsgaG9tZVBhZ2UgfTtcbiIsImZ1bmN0aW9uIGluaXRpYWxIb21lUGFnZSgpIHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgLy8vLy8vIE5BVlxuICBsZXQgY29udGVudE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnROYXYuaWQgPSBcImNvbnRlbnQtbmF2XCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudE5hdik7XG4gIC8vLy8gVUxcbiAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgbmF2LmlkID0gXCJuYXZcIjtcbiAgY29udGVudE5hdi5hcHBlbmRDaGlsZChuYXYpO1xuICAvLyBOQU1FXG4gIGxldCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJlc3RhdXJhbnROYW1lLmlkID0gXCJyZXN0YXVyYW50LW5hbWVcIjtcbiAgcmVzdGF1cmFudE5hbWUuaW5uZXJIVE1MID0gXCJHUCdzIFBhcnJpbGxhXCI7XG4gIGNvbnRlbnROYXYuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuICAvLyBMSVxuICBsZXQgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBob21lLmlubmVySFRNTCA9IFwiSE9NRVwiO1xuICBtZW51LmlubmVySFRNTCA9IFwiTUVOVVwiO1xuICBjb250YWN0LmlubmVySFRNTCA9IFwiQ09OVEFDVFwiO1xuICBob21lLmlkID0gXCJob21lQnRuXCI7XG4gIG1lbnUuaWQgPSBcIm1lbnVCdG5cIjtcbiAgY29udGFjdC5pZCA9IFwiY29udGFjdEJ0blwiO1xuICBuYXYuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gIG5hdi5hcHBlbmRDaGlsZChtZW51KTtcbiAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG4gIC8vLy8vLyBNQUlOXG4gIGxldCBjb250ZW50TWFpbkhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50TWFpbkhvbWUuaWQgPSBcImNvbnRlbnQtbWFpbi1ob21lXCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudE1haW5Ib21lKTtcbiAgLy8vLyBIMVxuICBsZXQgdGl0bGVIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0aXRsZUhvbWUuaWQgPSBcInRpdGxlLWhvbWVcIjtcbiAgY29udGVudE1haW5Ib21lLmFwcGVuZENoaWxkKHRpdGxlSG9tZSk7XG4gIHRpdGxlSG9tZS5pbm5lckhUTUwgPSBcIldlbGNvbWUgdG8gR1AncyBHcmlsbFwiO1xuICAvLy8vIEhPTUVcbiAgbGV0IGNvbnRlbnRIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudEhvbWUuaWQgPSBcImNvbnRlbnQtaG9tZVwiO1xuICBjb250ZW50TWFpbkhvbWUuYXBwZW5kQ2hpbGQoY29udGVudEhvbWUpO1xuICAvLyBQQVJBR1JBUEhcbiAgbGV0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb250ZW50SG9tZS5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuICBwYXJhZ3JhcGguaW5uZXJIVE1MID1cbiAgICBcIkluIEFyZ2VudGluYSwgYXNhZG8gaXMgZXZlcnl0aGluZy4gVGhlIGZhY3RvciB0aGF0IGJyaW5ncyB0aGUgZmFtaWx5IHRvZ2V0aGVyIG9uIFN1bmRheXMsIGFuZCBmcmllbmRzIHNvbWUgbmlnaHQgb2YgdGhlIHdlZWsuIFRoZSBBcmdlbnRpbmUgYmFyYmVjdWUgaXMgYSBjdWx0LCBhIHJpdHVhbCwgc29tZXRoaW5nIG11Y2ggYmlnZ2VyIHRoYW4gYSBzaW1wbGUgbWVhbC5cIjtcbn1cblxuZXhwb3J0IHsgaW5pdGlhbEhvbWVQYWdlIH07XG4iLCJpbXBvcnQgQmlmZSBmcm9tIFwiLi9pbWFnZXMvYmVlZi5qcGdcIjtcbmltcG9ydCBDaG9yaXBhbiBmcm9tIFwiLi9pbWFnZXMvY2hvcmlwYW4uanBnXCI7XG5pbXBvcnQgRW5zYWxhZGFNaXh0YSBmcm9tIFwiLi9pbWFnZXMvZW5zYWxhZGFNaXh0YS5qcGdcIjtcbmltcG9ydCBHcmlsbGVkUG9yayBmcm9tIFwiLi9pbWFnZXMvZ3JpbGxlZHBvcmsuanBnXCI7XG5pbXBvcnQgTW9yY2lsbGEgZnJvbSBcIi4vaW1hZ2VzL21vcmNpbGxhLmpwZ1wiO1xuaW1wb3J0IE1vbGxlamFzIGZyb20gXCIuL2ltYWdlcy9tb2xsZWphcy5qcGdcIjtcblxuZnVuY3Rpb24gbWVudVBhZ2UoKSB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIC8vLy8vLy8vIE1BSU5cbiAgbGV0IGNvbnRlbnRNYWluTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnRNYWluTWVudS5pZCA9IFwiY29udGVudC1tYWluLW1lbnVcIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50TWFpbk1lbnUpO1xuICAvLy8vLy8gSDFcbiAgbGV0IHRpdGxlTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGl0bGVNZW51LmlkID0gXCJ0aXRsZS1tZW51XCI7XG4gIGNvbnRlbnRNYWluTWVudS5hcHBlbmRDaGlsZCh0aXRsZU1lbnUpO1xuICB0aXRsZU1lbnUuaW5uZXJIVE1MID0gXCJNZW51XCI7XG4gIC8vLy8vLyBNRU5VXG4gIGxldCBjb250ZW50TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnRNZW51LmlkID0gXCJjb250ZW50LW1lbnVcIjtcbiAgY29udGVudE1haW5NZW51LmFwcGVuZENoaWxkKGNvbnRlbnRNZW51KTtcbiAgLy8vL0RJU0hFU1xuICBmdW5jdGlvbiBkaXNoRmFjdG9yeShkaXNoTmFtZSwgZGlzaERlc2MsIGRpc2hJbWcpIHtcbiAgICBsZXQgZGlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudE1lbnUuYXBwZW5kQ2hpbGQoZGlzaCk7XG4gICAgLy9cbiAgICBsZXQgZGlzaE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgZGlzaE4uaW5uZXJIVE1MID0gZGlzaE5hbWU7XG4gICAgbGV0IGRpc2hEID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIGRpc2hELmlubmVySFRNTCA9IGRpc2hEZXNjO1xuICAgIGxldCBkaXNoSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZGlzaEkuc3JjID0gZGlzaEltZztcbiAgICAvL1xuICAgIGRpc2guYXBwZW5kQ2hpbGQoZGlzaE4pO1xuICAgIGRpc2guYXBwZW5kQ2hpbGQoZGlzaEQpO1xuICAgIGRpc2guYXBwZW5kQ2hpbGQoZGlzaEkpO1xuICB9XG5cbiAgZGlzaEZhY3RvcnkoXG4gICAgXCJDaG9yaXBhblwiLFxuICAgIFwiQ2hvcmlww6FuIGlzIGEgbWVhbCB0aGF0IGJhc2ljYWxseSBjb25zaXN0cyBvZiBhIGdyaWxsZWQgY2hvcml6byDigIvigItiZXR3ZWVuIHR3byBwaWVjZXMgb2YgYnJlYWQsIHR5cGljYWwgb2YgQXJnZW50aW5lIGN1aXNpbmUuXCIsXG4gICAgQ2hvcmlwYW5cbiAgKTtcbiAgZGlzaEZhY3RvcnkoXG4gICAgXCJCaWZlXCIsXG4gICAgXCJHcmlsbGVkIG9yIGNoYXJjb2FsLWdyaWxsZWQgY3V0IG9mIGJlZWYuIFRyYWRpdGlvbmFsbHkgaXQgaXMgYWNjb21wYW5pZWQgd2l0aCBzb21lIGhvdCBzYXVjZSwgZ3VhY2Ftb2xlLCBiZWFucyBhbmQgdG9ydGlsbGFzXCIsXG4gICAgQmlmZVxuICApO1xuICBkaXNoRmFjdG9yeShcbiAgICBcIk1vcmNpbGxhXCIsXG4gICAgXCJJdCBjYW4gYmUgY29uc3VtZWQgcmF3LCByb2FzdGVkLCBncmlsbGVkIG9yIGZyaWVkIGFuZCBhcyBhIG1haW4gZGlzaCwgaXQgaXMgdXN1YWxseSBhY2NvbXBhbmllZCBieSBwaXF1aWxsbyBwZXBwZXJzLlwiLFxuICAgIE1vcmNpbGxhXG4gICk7XG4gIGRpc2hGYWN0b3J5KFxuICAgIFwiUHVlcmNvIGFsIEdyaWxcIixcbiAgICBcIlByZXBhcmVkIGVpdGhlciBpbmRvb3JzIG9yIG91dGRvb3JzLCBqdWljeSBwb3JrIHJpYnMgYXJlIGFsd2F5cyBhIHRyZWF0LiBUaGVyZSBhcmUgdHdvIHR5cGVzIG9mIHBvcmsgcmlicywgbmFtZWx5IHNwYXJlIHJpYnMgYW5kIGJhYnkgYmFjayByaWJzLlwiLFxuICAgIEdyaWxsZWRQb3JrXG4gICk7XG4gIGRpc2hGYWN0b3J5KFxuICAgIFwiTW9sbGVqYXNcIixcbiAgICBcIlRoZSBzd2VldGJyZWFkcyBhcmUgaW4gdGhlIEFyZ2VudGluZSBiYXJiZWN1ZSB3aGVyZSB0aGV5IGhhdmUgdGhlaXIgcGxhY2Ugb2YgaG9ub3IgYW5kIGFyZSB0aGUgZXhwcmVzc2lvbiBvZiBhIHRydWUgbmF0aW9uYWwgcGFzc2lvbi5cIixcbiAgICBNb2xsZWphc1xuICApO1xuICBkaXNoRmFjdG9yeShcbiAgICBcIkVuc2FsYWRhIE1peHRhXCIsXG4gICAgXCJJdCdzIGltcG9ydGFudCB0byBlYXQgYSB2YXJpZXR5IG9mIGZyZXNoIGZydWl0cyBhbmQgdmVnZXRhYmxlcywgaW4gYXMgbWFueSBkaWZmZXJlbnQgY29sb3JzIGFzIHBvc3NpYmxlLiBDb21iaW5pbmcgdGhlbSBpbiBhIHNhbGFkIGlzIGJvdGggZWFzeSBhbmQgZGVsaWNpb3VzIVwiLFxuICAgIEVuc2FsYWRhTWl4dGFcbiAgKTtcbn1cbmV4cG9ydCB7IG1lbnVQYWdlIH07XG5cbi8vICAgbGV0IHBpY3R1cmVUZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbi8vICAgcGljdHVyZVRlc3Quc3JjID0gXCIuLi9zcmMvYmVlZi5qcGdcIjtcbi8vICAgY29udGVudE1haW5NZW51LmFwcGVuZENoaWxkKHBpY3R1cmVUZXN0KTtcbi8vIEdyaWxsZWQgY2hvcml6byDigIvigItiZXR3ZWVuIHR3byBwaWVjZXMgb2YgYnJlYWQsIHR5cGljYWwgb2YgQXJnZW50aW5lIGN1aXNpbmUuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmltcG9ydCB7IGluaXRpYWxIb21lUGFnZSB9IGZyb20gXCIuL2luaXRpYWxIb21lTW9kdWxlXCI7XG5pbXBvcnQgeyBob21lUGFnZSB9IGZyb20gXCIuL2hvbWVNb2R1bGVcIjtcbmltcG9ydCB7IG1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudU1vZHVsZVwiO1xuaW1wb3J0IHsgY29udGFjdFBhZ2UgfSBmcm9tIFwiLi9jb250YWN0TW9kdWxlXCI7XG5cbi8vIHZhciByZXF1aXJlQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcIi4vaW1hZ2VzXCIsIHRydWUsIC9eXFwuXFwvLipcXC5qcGckLyk7XG4vLyByZXF1aXJlQ29udGV4dC5rZXlzKCkubWFwKHJlcXVpcmVDb250ZXh0KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgLy9cbiAgaW5pdGlhbEhvbWVQYWdlKCk7XG4gIC8vXG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAvL1xuICBsZXQgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZUJ0blwiKTtcbiAgbGV0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVCdG5cIik7XG4gIGxldCBjb250YWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0QnRuXCIpO1xuICAvL1xuICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgaG9tZVBhZ2UoKTtcbiAgfSk7XG4gIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICBtZW51UGFnZSgpO1xuICB9KTtcbiAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIGNvbnRhY3RQYWdlKCk7XG4gIH0pO1xufSk7XG5cbi8vIHdoaWxlIChjb250ZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuLy8gICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuLy8gICB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=