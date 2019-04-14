/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/Accessibility/SkipTo.js":
/*!*****************************************************!*\
  !*** ./resources/assets/js/Accessibility/SkipTo.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var plugin = {};
var defaults = {
  attributes: {
    trigger: 'data-js-skipto',
    links: 'data-js-skipto-link'
  }
};

var findTarget = function findTarget(element) {
  if (!element.hasAttribute('href')) {
    return false;
  }

  var target = element.getAttribute('href');
  return document.querySelector(target);
};

var skipToAnchor = function skipToAnchor(element) {
  var target = findTarget(element);

  if (!target) {
    return;
  }

  target.setAttribute('tabindex', '-1');
  target.addEventListener('blur', function () {
    target.removeAttribute('tabindex');
  });
  target.focus();
};

var eventListener = function eventListener(element) {
  element.addEventListener('click', function (e) {
    skipToAnchor(element);
    e.preventDefault();
  });
};

plugin.init = function () {
  var skipToSelector = "[".concat(defaults.attributes.trigger, "]");
  var skipToItems = "[".concat(defaults.attributes.links, "]");
  var skipToSections = document.querySelectorAll(skipToSelector);

  if (!skipToSections.length) {
    return;
  }

  skipToSections.forEach(function (item) {
    var links = item.querySelectorAll(skipToItems);
    links.forEach(function (link) {
      eventListener(link);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  plugin: plugin
});

/***/ }),

/***/ "./resources/assets/js/Accessibility/index.js":
/*!****************************************************!*\
  !*** ./resources/assets/js/Accessibility/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SkipTo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SkipTo */ "./resources/assets/js/Accessibility/SkipTo.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  SkipTo: _SkipTo__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./resources/assets/js/Navigation/index.js":
/*!*************************************************!*\
  !*** ./resources/assets/js/Navigation/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var plugin = {};
var defaults = {
  attributes: {
    trigger: 'data-navigation-trigger',
    currentStatus: 'aria-expanded'
  }
};

var triggerCurrentStatus = function triggerCurrentStatus(element) {
  if (!element.hasAttribute(defaults.attributes.currentStatus)) {
    element.setAttribute(defaults.attributes.currentStatus, 'false');
  }

  return element.getAttribute(defaults.attributes.currentStatus);
};

var triggerNavigation = function triggerNavigation(element) {
  var currentStatus = triggerCurrentStatus(element);

  if (currentStatus === 'true') {
    element.setAttribute(defaults.attributes.currentStatus, 'false');
    return;
  }

  element.setAttribute(defaults.attributes.currentStatus, 'true');
};

var focusManagement = function focusManagement(element) {
  var currentStatus = triggerCurrentStatus(element);

  if (currentStatus === 'false') {
    element.focus();
  }

  element.nextElementSibling.firstElementChild.focus();
};

var eventListeners = function eventListeners() {
  var selector = "[".concat(defaults.attributes.currentStatus, "]");
  var navigationTriggers = document.querySelectorAll(selector);
  navigationTriggers.forEach(function (item) {
    item.addEventListener('click', function () {
      triggerNavigation(item);
      focusManagement(item);
    });
  });
};

plugin.init = function () {
  eventListeners();
};

/* harmony default export */ __webpack_exports__["default"] = ({
  plugin: plugin
});

/***/ }),

/***/ "./resources/assets/js/main.js":
/*!*************************************!*\
  !*** ./resources/assets/js/main.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation */ "./resources/assets/js/Navigation/index.js");
/* harmony import */ var _Accessibility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Accessibility */ "./resources/assets/js/Accessibility/index.js");


_Navigation__WEBPACK_IMPORTED_MODULE_0__["default"].plugin.init();
_Accessibility__WEBPACK_IMPORTED_MODULE_1__["default"].SkipTo.plugin.init();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9BY2Nlc3NpYmlsaXR5L1NraXBUby5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0FjY2Vzc2liaWxpdHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9OYXZpZ2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWFpbi5qcyJdLCJuYW1lcyI6WyJwbHVnaW4iLCJkZWZhdWx0cyIsImF0dHJpYnV0ZXMiLCJ0cmlnZ2VyIiwibGlua3MiLCJmaW5kVGFyZ2V0IiwiZWxlbWVudCIsImhhc0F0dHJpYnV0ZSIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNraXBUb0FuY2hvciIsInNldEF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJmb2N1cyIsImV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbml0Iiwic2tpcFRvU2VsZWN0b3IiLCJza2lwVG9JdGVtcyIsInNraXBUb1NlY3Rpb25zIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImZvckVhY2giLCJpdGVtIiwibGluayIsIlNraXBUbyIsImN1cnJlbnRTdGF0dXMiLCJ0cmlnZ2VyQ3VycmVudFN0YXR1cyIsInRyaWdnZXJOYXZpZ2F0aW9uIiwiZm9jdXNNYW5hZ2VtZW50IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJldmVudExpc3RlbmVycyIsInNlbGVjdG9yIiwibmF2aWdhdGlvblRyaWdnZXJzIiwiTmF2aWdhdGlvbiIsIkFjY2Vzc2liaWxpdHlTY3JpcHRzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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LE9BQUQsQ0FBMUM7O0FBRUEsTUFBSXdCLGFBQWEsS0FBSyxPQUF0QixFQUErQjtBQUM3QnhCLFdBQU8sQ0FBQ1UsS0FBUjtBQUNEOztBQUVEVixTQUFPLENBQUM0QixrQkFBUixDQUEyQkMsaUJBQTNCLENBQTZDbkIsS0FBN0M7QUFDRCxDQVJEOztBQVVBLElBQU1vQixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsTUFBTUMsUUFBUSxjQUFPcEMsUUFBUSxDQUFDQyxVQUFULENBQW9CNEIsYUFBM0IsTUFBZDtBQUNBLE1BQU1RLGtCQUFrQixHQUFHNUIsUUFBUSxDQUFDYyxnQkFBVCxDQUEwQmEsUUFBMUIsQ0FBM0I7QUFFQUMsb0JBQWtCLENBQUNaLE9BQW5CLENBQTJCLFVBQUNDLElBQUQsRUFBVTtBQUNuQ0EsUUFBSSxDQUFDYixnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFNO0FBQ25Da0IsdUJBQWlCLENBQUNMLElBQUQsQ0FBakI7QUFDQU0scUJBQWUsQ0FBQ04sSUFBRCxDQUFmO0FBQ0QsS0FIRDtBQUlELEdBTEQ7QUFNRCxDQVZEOztBQVlBM0IsTUFBTSxDQUFDb0IsSUFBUCxHQUFjLFlBQU07QUFDbEJnQixnQkFBYztBQUNmLENBRkQ7O0FBSWU7QUFBRXBDLFFBQU0sRUFBTkE7QUFBRixDQUFmLEU7Ozs7Ozs7Ozs7OztBQ3REQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUF1QyxtREFBVSxDQUFDdkMsTUFBWCxDQUFrQm9CLElBQWxCO0FBQ0FvQixzREFBb0IsQ0FBQ1gsTUFBckIsQ0FBNEI3QixNQUE1QixDQUFtQ29CLElBQW5DLEciLCJmaWxlIjoianMvc2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tYWluLmpzXCIpO1xuIiwiY29uc3QgcGx1Z2luID0ge307XG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuICBhdHRyaWJ1dGVzOiB7XG4gICAgdHJpZ2dlcjogJ2RhdGEtanMtc2tpcHRvJyxcbiAgICBsaW5rczogJ2RhdGEtanMtc2tpcHRvLWxpbmsnLFxuICB9LFxufTtcblxuY29uc3QgZmluZFRhcmdldCA9IChlbGVtZW50KSA9PiB7XG4gIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHRhcmdldCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG5cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbmNvbnN0IHNraXBUb0FuY2hvciA9IChlbGVtZW50KSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGZpbmRUYXJnZXQoZWxlbWVudCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0YXJnZXQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICB9KTtcbiAgdGFyZ2V0LmZvY3VzKCk7XG59O1xuXG5jb25zdCBldmVudExpc3RlbmVyID0gKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgc2tpcFRvQW5jaG9yKGVsZW1lbnQpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG59O1xuXG5wbHVnaW4uaW5pdCA9ICgpID0+IHtcbiAgY29uc3Qgc2tpcFRvU2VsZWN0b3IgPSBgWyR7ZGVmYXVsdHMuYXR0cmlidXRlcy50cmlnZ2VyfV1gO1xuICBjb25zdCBza2lwVG9JdGVtcyA9IGBbJHtkZWZhdWx0cy5hdHRyaWJ1dGVzLmxpbmtzfV1gO1xuICBjb25zdCBza2lwVG9TZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2tpcFRvU2VsZWN0b3IpO1xuXG4gIGlmICghc2tpcFRvU2VjdGlvbnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc2tpcFRvU2VjdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGxpbmtzID0gaXRlbS5xdWVyeVNlbGVjdG9yQWxsKHNraXBUb0l0ZW1zKTtcblxuICAgIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgIGV2ZW50TGlzdGVuZXIobGluayk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgeyBwbHVnaW4gfTtcbiIsImltcG9ydCBTa2lwVG8gZnJvbSAnLi9Ta2lwVG8nO1xuXG5leHBvcnQgZGVmYXVsdCB7IFNraXBUbyB9O1xuIiwiY29uc3QgcGx1Z2luID0ge307XG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuICBhdHRyaWJ1dGVzOiB7XG4gICAgdHJpZ2dlcjogJ2RhdGEtbmF2aWdhdGlvbi10cmlnZ2VyJyxcbiAgICBjdXJyZW50U3RhdHVzOiAnYXJpYS1leHBhbmRlZCcsXG4gIH0sXG59O1xuXG5jb25zdCB0cmlnZ2VyQ3VycmVudFN0YXR1cyA9IChlbGVtZW50KSA9PiB7XG4gIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoZGVmYXVsdHMuYXR0cmlidXRlcy5jdXJyZW50U3RhdHVzKSkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGRlZmF1bHRzLmF0dHJpYnV0ZXMuY3VycmVudFN0YXR1cywgJ2ZhbHNlJyk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoZGVmYXVsdHMuYXR0cmlidXRlcy5jdXJyZW50U3RhdHVzKTtcbn07XG5cbmNvbnN0IHRyaWdnZXJOYXZpZ2F0aW9uID0gKGVsZW1lbnQpID0+IHtcbiAgY29uc3QgY3VycmVudFN0YXR1cyA9IHRyaWdnZXJDdXJyZW50U3RhdHVzKGVsZW1lbnQpO1xuXG4gIGlmIChjdXJyZW50U3RhdHVzID09PSAndHJ1ZScpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShkZWZhdWx0cy5hdHRyaWJ1dGVzLmN1cnJlbnRTdGF0dXMsICdmYWxzZScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKGRlZmF1bHRzLmF0dHJpYnV0ZXMuY3VycmVudFN0YXR1cywgJ3RydWUnKTtcbn07XG5cbmNvbnN0IGZvY3VzTWFuYWdlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRTdGF0dXMgPSB0cmlnZ2VyQ3VycmVudFN0YXR1cyhlbGVtZW50KTtcblxuICBpZiAoY3VycmVudFN0YXR1cyA9PT0gJ2ZhbHNlJykge1xuICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmZvY3VzKCk7XG59O1xuXG5jb25zdCBldmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBgWyR7ZGVmYXVsdHMuYXR0cmlidXRlcy5jdXJyZW50U3RhdHVzfV1gO1xuICBjb25zdCBuYXZpZ2F0aW9uVHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICBuYXZpZ2F0aW9uVHJpZ2dlcnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0cmlnZ2VyTmF2aWdhdGlvbihpdGVtKTtcbiAgICAgIGZvY3VzTWFuYWdlbWVudChpdGVtKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5wbHVnaW4uaW5pdCA9ICgpID0+IHtcbiAgZXZlbnRMaXN0ZW5lcnMoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHsgcGx1Z2luIH07XG4iLCJpbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb24nO1xuaW1wb3J0IEFjY2Vzc2liaWxpdHlTY3JpcHRzIGZyb20gJy4vQWNjZXNzaWJpbGl0eSc7XG5cbk5hdmlnYXRpb24ucGx1Z2luLmluaXQoKTtcbkFjY2Vzc2liaWxpdHlTY3JpcHRzLlNraXBUby5wbHVnaW4uaW5pdCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==