(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-0d5784f9.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-0d5784f9.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-44bf8136.js */ "./node_modules/@ionic/core/dist/esm/index-44bf8136.js");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");




const createButtonActiveGesture = (el, isButton) => {
    let currentTouchedButton;
    let initialTouchedButton;
    const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
        if (typeof document === 'undefined') {
            return;
        }
        const target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
            clearActiveButton();
            return;
        }
        if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
        }
    };
    const setActiveButton = (button, hapticFeedbackFn) => {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
        hapticFeedbackFn();
    };
    const clearActiveButton = (dispatchClick = false) => {
        if (!currentTouchedButton) {
            return;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */
        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
        }
        currentTouchedButton = undefined;
    };
    return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
        onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
        onEnd: () => {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
        }
    });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionEnd();
        }
        else {
            engine.gestureSelectionEnd();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction, animation);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/buyappalert/buyappalert.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buyappalert/buyappalert.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div class=\"clear_button\">\n        <ion-icon name=\"close\" (click)=\"dismiss()\"></ion-icon>\n    </div>\n    <div class=\"container no_backend\">\n        <h2>Buy this <br> Template Now</h2>\n        <p>IONIC template only, No Backend.</p>\n        <div class=\"button\">\n            <div class=\"icon_box\">\n                <img src=\"https://opuslabs.nyc3.digitaloceanspaces.com/AAFixItems/Other/ic_codecanyon.png\">\n            </div>\n            <h3 (click)=\"buyAppAction()\">Get it on <strong>Codecanoyon</strong></h3>\n        </div>\n    </div>\n\n    <div class=\"container complete_backend\">\n        <h2>Buy this App with <br>Complete Backend </h2>\n        <p>Full App solution with complete Backend.</p>\n        <div class=\"button\" (click)=\"navWhatsapp()\">\n            <div class=\"icon_box\">\n                <img src=\"https://opuslabs.nyc3.digitaloceanspaces.com/AAFixItems/Other/ic_whatsapp.png\">\n            </div>\n            <h3>Message on <strong>WhatsApp</strong></h3>\n        </div>\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/buyappalert/buyappalert.page.scss":
/*!***************************************************!*\
  !*** ./src/app/buyappalert/buyappalert.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".clear_button {\n  background: #14990A;\n  padding: 15px 24px;\n}\n.clear_button ion-icon {\n  color: #fff;\n  font-size: 1.65rem !important;\n}\n.container {\n  padding: 51px 34px;\n}\n.container h2 {\n  margin: 0;\n  font-size: 1.55rem;\n  font-weight: 600;\n  letter-spacing: 0;\n  padding-bottom: 12px;\n}\n.container p {\n  margin: 0;\n  font-size: 0.87rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  padding-bottom: 32px;\n}\n.container .button {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  border-radius: 50px;\n  height: 58px;\n  padding: 0 18px;\n  box-shadow: 0 5px 9px -2px rgba(0, 0, 0, 0.3);\n}\n.container .button .icon_box {\n  min-width: 45px;\n}\n.container .button .icon_box img {\n  width: 35px;\n  display: block;\n}\n.container .button h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  letter-spacing: 0;\n}\n.container .button h3 strong {\n  font-weight: 700;\n}\n.container.no_backend {\n  background: #14990A;\n}\n.container.no_backend h2 {\n  color: #fff;\n}\n.container.no_backend p {\n  color: #fff;\n}\n.container.no_backend .button {\n  background: #fff;\n  color: #000000;\n}\n.container.complete_backend {\n  background: #FFFFFF;\n}\n.container.complete_backend h2 {\n  color: #000000;\n}\n.container.complete_backend p {\n  color: #7F7F7F;\n}\n.container.complete_backend .button {\n  background: #14990A;\n  color: #FFFFFF;\n}\n.container.complete_backend .button .icon_box img {\n  width: 33px;\n}\n.container.complete_backend .button h3 {\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcm9jc2x1dC9EZXNrdG9wL0dpdC9pb25pYy1kZWx5dmEvZGVsaXZvby1zZWxsZXItaW9uaWM1LW1hc3Rlci9zcmMvYXBwL2J1eWFwcGFsZXJ0L2J1eWFwcGFsZXJ0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYnV5YXBwYWxlcnQvYnV5YXBwYWxlcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0VBQ0EsNkJBQUE7QUNDUjtBREdBO0VBQ0ksa0JBQUE7QUNBSjtBREVJO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQVI7QURHSTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0RSO0FES0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDZDQUFBO0FDSFI7QURLUTtFQUNJLGVBQUE7QUNIWjtBREtZO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUNIaEI7QURPUTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDTFo7QURPWTtFQUNJLGdCQUFBO0FDTGhCO0FEVUk7RUFDSSxtQkFBQTtBQ1JSO0FEVVE7RUFDSSxXQUFBO0FDUlo7QURZUTtFQUNJLFdBQUE7QUNWWjtBRGFRO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDWFo7QURnQkk7RUFDSSxtQkFBQTtBQ2RSO0FEZ0JRO0VBQ0ksY0FBQTtBQ2RaO0FEa0JRO0VBQ0ksY0FBQTtBQ2hCWjtBRG1CUTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQ2pCWjtBRG9CZ0I7RUFDSSxXQUFBO0FDbEJwQjtBRHNCWTtFQUNJLGdCQUFBO0FDcEJoQiIsImZpbGUiOiJzcmMvYXBwL2J1eWFwcGFsZXJ0L2J1eWFwcGFsZXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGVhcl9idXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICMxNDk5MEE7XG4gICAgcGFkZGluZzogMTVweCAyNHB4O1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAxLjY1cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA1MXB4IDM0cHg7XG5cbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjU1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAuODdyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcblxuICAgIH1cblxuICAgIC5idXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1OHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDE4cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDlweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcblxuICAgICAgICAuaWNvbl9ib3gge1xuICAgICAgICAgICAgbWluLXdpZHRoOiA0NXB4O1xuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcblxuICAgICAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5ub19iYWNrZW5kIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzE0OTkwQTtcblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcblxuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmNvbXBsZXRlX2JhY2tlbmQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuXG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAjN0Y3RjdGO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTQ5OTBBO1xuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG5cbiAgICAgICAgICAgIC5pY29uX2JveCB7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIuY2xlYXJfYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzE0OTkwQTtcbiAgcGFkZGluZzogMTVweCAyNHB4O1xufVxuLmNsZWFyX2J1dHRvbiBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuNjVyZW0gIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDUxcHggMzRweDtcbn1cbi5jb250YWluZXIgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS41NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xufVxuLmNvbnRhaW5lciBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuODdyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbn1cbi5jb250YWluZXIgLmJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDU4cHg7XG4gIHBhZGRpbmc6IDAgMThweDtcbiAgYm94LXNoYWRvdzogMCA1cHggOXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLmNvbnRhaW5lciAuYnV0dG9uIC5pY29uX2JveCB7XG4gIG1pbi13aWR0aDogNDVweDtcbn1cbi5jb250YWluZXIgLmJ1dHRvbiAuaWNvbl9ib3ggaW1nIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNvbnRhaW5lciAuYnV0dG9uIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4uY29udGFpbmVyIC5idXR0b24gaDMgc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5jb250YWluZXIubm9fYmFja2VuZCB7XG4gIGJhY2tncm91bmQ6ICMxNDk5MEE7XG59XG4uY29udGFpbmVyLm5vX2JhY2tlbmQgaDIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jb250YWluZXIubm9fYmFja2VuZCBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uY29udGFpbmVyLm5vX2JhY2tlbmQgLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmNvbnRhaW5lci5jb21wbGV0ZV9iYWNrZW5kIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbn1cbi5jb250YWluZXIuY29tcGxldGVfYmFja2VuZCBoMiB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmNvbnRhaW5lci5jb21wbGV0ZV9iYWNrZW5kIHAge1xuICBjb2xvcjogIzdGN0Y3Rjtcbn1cbi5jb250YWluZXIuY29tcGxldGVfYmFja2VuZCAuYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzE0OTkwQTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uY29udGFpbmVyLmNvbXBsZXRlX2JhY2tlbmQgLmJ1dHRvbiAuaWNvbl9ib3ggaW1nIHtcbiAgd2lkdGg6IDMzcHg7XG59XG4uY29udGFpbmVyLmNvbXBsZXRlX2JhY2tlbmQgLmJ1dHRvbiBoMyB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/buyappalert/buyappalert.page.ts":
/*!*************************************************!*\
  !*** ./src/app/buyappalert/buyappalert.page.ts ***!
  \*************************************************/
/*! exports provided: BuyappalertPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyappalertPage", function() { return BuyappalertPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




let BuyappalertPage = class BuyappalertPage {
    constructor(modalController, http) {
        this.modalController = modalController;
        this.http = http;
    }
    ngOnInit() {
    }
    dismiss() {
        this.modalController.dismiss();
    }
    buyAppAction() {
        this.modalController.dismiss();
        window.open("https://bit.ly/cc2_Delivoo_ionic", '_system', 'location=no');
    }
    navWhatsapp() {
        let projectName = "delivoo";
        this.http.get("https://dashboard.vtlabs.dev/whatsapp.php?product_name=" + projectName, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
        }).subscribe(res => {
            window.open(res['link'], '_system', 'location=no');
        }, err => { });
        this.dismiss();
    }
};
BuyappalertPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
BuyappalertPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buyappalert',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./buyappalert.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/buyappalert/buyappalert.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./buyappalert.page.scss */ "./src/app/buyappalert/buyappalert.page.scss")).default]
    })
], BuyappalertPage);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map