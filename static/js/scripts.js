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

/***/ "./resources/assets/js/Navigation/index.js":
/*!*************************************************!*\
  !*** ./resources/assets/js/Navigation/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Navigation = function Navigation() {
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
  }();

  return plugin;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  Navigation: Navigation
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
/* harmony import */ var _Navigation_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation/index.js */ "./resources/assets/js/Navigation/index.js");

_Navigation_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].Navigation();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9OYXZpZ2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWFpbi5qcyJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uIiwicGx1Z2luIiwiZGVmYXVsdHMiLCJhdHRyaWJ1dGVzIiwidHJpZ2dlciIsImN1cnJlbnRTdGF0dXMiLCJ0cmlnZ2VyQ3VycmVudFN0YXR1cyIsImVsZW1lbnQiLCJoYXNBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJ0cmlnZ2VyTmF2aWdhdGlvbiIsImZvY3VzTWFuYWdlbWVudCIsImZvY3VzIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJldmVudExpc3RlbmVycyIsInNlbGVjdG9yIiwibmF2aWdhdGlvblRyaWdnZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdCIsIk5hdmlnYXRpb25TY3JpcHQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLE1BQU1DLE1BQU0sR0FBRyxFQUFmO0FBRUEsTUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLGNBQVUsRUFBRTtBQUNWQyxhQUFPLEVBQUUseUJBREM7QUFFVkMsbUJBQWEsRUFBRTtBQUZMO0FBREcsR0FBakI7O0FBT0EsTUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxPQUFELEVBQWE7QUFDeEMsUUFBSSxDQUFDQSxPQUFPLENBQUNDLFlBQVIsQ0FBcUJOLFFBQVEsQ0FBQ0MsVUFBVCxDQUFvQkUsYUFBekMsQ0FBTCxFQUE4RDtBQUM1REUsYUFBTyxDQUFDRSxZQUFSLENBQXFCUCxRQUFRLENBQUNDLFVBQVQsQ0FBb0JFLGFBQXpDLEVBQXdELE9BQXhEO0FBQ0Q7O0FBRUQsV0FBT0UsT0FBTyxDQUFDRyxZQUFSLENBQXFCUixRQUFRLENBQUNDLFVBQVQsQ0FBb0JFLGFBQXpDLENBQVA7QUFDRCxHQU5EOztBQVFBLE1BQU1NLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0osT0FBRCxFQUFhO0FBQ3JDLFFBQU1GLGFBQWEsR0FBR0Msb0JBQW9CLENBQUNDLE9BQUQsQ0FBMUM7O0FBRUEsUUFBSUYsYUFBYSxLQUFLLE1BQXRCLEVBQThCO0FBQzVCRSxhQUFPLENBQUNFLFlBQVIsQ0FBcUJQLFFBQVEsQ0FBQ0MsVUFBVCxDQUFvQkUsYUFBekMsRUFBd0QsT0FBeEQ7QUFDQTtBQUNEOztBQUVERSxXQUFPLENBQUNFLFlBQVIsQ0FBcUJQLFFBQVEsQ0FBQ0MsVUFBVCxDQUFvQkUsYUFBekMsRUFBd0QsTUFBeEQ7QUFDRCxHQVREOztBQVdBLE1BQU1PLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0wsT0FBRCxFQUFhO0FBQ25DLFFBQU1GLGFBQWEsR0FBR0Msb0JBQW9CLENBQUNDLE9BQUQsQ0FBMUM7O0FBRUEsUUFBSUYsYUFBYSxLQUFLLE9BQXRCLEVBQStCO0FBQzdCRSxhQUFPLENBQUNNLEtBQVI7QUFDRDs7QUFFRE4sV0FBTyxDQUFDTyxrQkFBUixDQUEyQkMsaUJBQTNCLENBQTZDRixLQUE3QztBQUNELEdBUkQ7O0FBVUEsTUFBTUcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLFFBQU1DLFFBQVEsY0FBT2YsUUFBUSxDQUFDQyxVQUFULENBQW9CRSxhQUEzQixNQUFkO0FBQ0EsUUFBTWEsa0JBQWtCLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEJILFFBQTFCLENBQTNCO0FBRUFDLHNCQUFrQixDQUFDRyxPQUFuQixDQUEyQixVQUFDQyxJQUFELEVBQVU7QUFDbkNBLFVBQUksQ0FBQ0MsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBTTtBQUNuQ1oseUJBQWlCLENBQUNXLElBQUQsQ0FBakI7QUFDQVYsdUJBQWUsQ0FBQ1UsSUFBRCxDQUFmO0FBQ0QsT0FIRDtBQUlELEtBTEQ7QUFNRCxHQVZEOztBQVlBckIsUUFBTSxDQUFDdUIsSUFBUCxHQUFlLFlBQU07QUFDbkJSLGtCQUFjO0FBQ2YsR0FGYSxFQUFkOztBQUlBLFNBQU9mLE1BQVA7QUFDRCxDQXhERDs7QUEwRGU7QUFBRUQsWUFBVSxFQUFWQTtBQUFGLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDMURBO0FBQUE7QUFBQTtBQUVBeUIsNERBQWdCLENBQUN6QixVQUFqQixHIiwiZmlsZSI6ImpzL3NjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3Jlc291cmNlcy9hc3NldHMvanMvbWFpbi5qc1wiKTtcbiIsImNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHBsdWdpbiA9IHt9O1xuXG4gIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIHRyaWdnZXI6ICdkYXRhLW5hdmlnYXRpb24tdHJpZ2dlcicsXG4gICAgICBjdXJyZW50U3RhdHVzOiAnYXJpYS1leHBhbmRlZCcsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCB0cmlnZ2VyQ3VycmVudFN0YXR1cyA9IChlbGVtZW50KSA9PiB7XG4gICAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZShkZWZhdWx0cy5hdHRyaWJ1dGVzLmN1cnJlbnRTdGF0dXMpKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShkZWZhdWx0cy5hdHRyaWJ1dGVzLmN1cnJlbnRTdGF0dXMsICdmYWxzZScpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShkZWZhdWx0cy5hdHRyaWJ1dGVzLmN1cnJlbnRTdGF0dXMpO1xuICB9O1xuXG4gIGNvbnN0IHRyaWdnZXJOYXZpZ2F0aW9uID0gKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjdXJyZW50U3RhdHVzID0gdHJpZ2dlckN1cnJlbnRTdGF0dXMoZWxlbWVudCk7XG5cbiAgICBpZiAoY3VycmVudFN0YXR1cyA9PT0gJ3RydWUnKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShkZWZhdWx0cy5hdHRyaWJ1dGVzLmN1cnJlbnRTdGF0dXMsICdmYWxzZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGRlZmF1bHRzLmF0dHJpYnV0ZXMuY3VycmVudFN0YXR1cywgJ3RydWUnKTtcbiAgfTtcblxuICBjb25zdCBmb2N1c01hbmFnZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRTdGF0dXMgPSB0cmlnZ2VyQ3VycmVudFN0YXR1cyhlbGVtZW50KTtcblxuICAgIGlmIChjdXJyZW50U3RhdHVzID09PSAnZmFsc2UnKSB7XG4gICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuZm9jdXMoKTtcbiAgfTtcblxuICBjb25zdCBldmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGBbJHtkZWZhdWx0cy5hdHRyaWJ1dGVzLmN1cnJlbnRTdGF0dXN9XWA7XG4gICAgY29uc3QgbmF2aWdhdGlvblRyaWdnZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cbiAgICBuYXZpZ2F0aW9uVHJpZ2dlcnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdHJpZ2dlck5hdmlnYXRpb24oaXRlbSk7XG4gICAgICAgIGZvY3VzTWFuYWdlbWVudChpdGVtKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHBsdWdpbi5pbml0ID0gKCgpID0+IHtcbiAgICBldmVudExpc3RlbmVycygpO1xuICB9KSgpO1xuXG4gIHJldHVybiBwbHVnaW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IE5hdmlnYXRpb24gfTtcbiIsImltcG9ydCBOYXZpZ2F0aW9uU2NyaXB0IGZyb20gJy4vTmF2aWdhdGlvbi9pbmRleC5qcyc7XG5cbk5hdmlnYXRpb25TY3JpcHQuTmF2aWdhdGlvbigpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==