(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["support-support-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/support/support.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/support/support.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            {{'support' | translate}}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"banner\">\n        <div class=\"logo ion-text-center animate__animated animate__zoomIn\">\n            <img src=\"assets/images/Logo.png\" class=\"light_theme_logo\">\n            <img src=\"assets/images/logo_store_dark.png\" class=\"dark_theme_logo\">\n        </div>\n    </div>\n\n    <div class=\"form\">\n        <ion-list lines=\"none\">\n            <h2 class=\"animate__animated animate__fadeInUp\">{{'or_write_us_your_queries' | translate}}</h2>\n            <p class=\"animate__animated animate__fadeInUp\">{{'will_get_back_to_soon' | translate}}.</p>\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <div class=\"item_inner d-flex\">\n                    <div class=\"icon_box ion-text-start\"><img src=\"assets/images/ic_phone.png\"></div>\n                    <div class=\"input_box\">\n                        <ion-label mode=\"md\" position=\"stacked\">{{\"phone_number\" | translate}}</ion-label>\n                        <ion-input mode=\"md\" type=\"text\" placeholder=\"\" value=\"+1 987 654 3210\"></ion-input>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <div class=\"item_inner d-flex\">\n                    <div class=\"icon_box ion-text-start\"><img src=\"assets/images/ic_mail.png\"></div>\n                    <div class=\"input_box\">\n                        <ion-label mode=\"md\" position=\"stacked\">{{\"your_message\" | translate}}</ion-label>\n                        <ion-textarea rows=\"4\" mode=\"md\" type=\"text\" placeholder=\"{{'enter_your_message_heare' | translate}}\"></ion-textarea>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\n    <ion-button size=\"large\" expand=\"full\" class=\"btn\">{{'submit' | translate}}</ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/support/support-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/support/support-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SupportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageRoutingModule", function() { return SupportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./support.page */ "./src/app/support/support.page.ts");




const routes = [
    {
        path: '',
        component: _support_page__WEBPACK_IMPORTED_MODULE_3__["SupportPage"]
    }
];
let SupportPageRoutingModule = class SupportPageRoutingModule {
};
SupportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SupportPageRoutingModule);



/***/ }),

/***/ "./src/app/support/support.module.ts":
/*!*******************************************!*\
  !*** ./src/app/support/support.module.ts ***!
  \*******************************************/
/*! exports provided: SupportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageModule", function() { return SupportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support-routing.module */ "./src/app/support/support-routing.module.ts");
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./support.page */ "./src/app/support/support.page.ts");








let SupportPageModule = class SupportPageModule {
};
SupportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _support_routing_module__WEBPACK_IMPORTED_MODULE_6__["SupportPageRoutingModule"]
        ],
        declarations: [_support_page__WEBPACK_IMPORTED_MODULE_7__["SupportPage"]]
    })
], SupportPageModule);



/***/ }),

/***/ "./src/app/support/support.page.scss":
/*!*******************************************!*\
  !*** ./src/app/support/support.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".banner {\n  background: var(--bg-color);\n  min-height: 240px;\n  display: flex;\n  align-items: center;\n}\n.banner .logo {\n  display: block;\n  width: 105px;\n  margin: auto;\n}\n.banner .logo img.dark_theme_logo {\n  display: none;\n}\n.form {\n  padding-top: 30px;\n  padding-bottom: 23px;\n}\n.form h2 {\n  margin: 0;\n  color: var(--text-black);\n  font-size: 1.23rem;\n  font-weight: 600;\n  padding-bottom: 5px;\n}\n.form p {\n  margin: 0;\n  font-size: 0.94rem;\n  line-height: 24px;\n  letter-spacing: 0.4px;\n  padding-bottom: 35px;\n}\nion-footer {\n  --animate-duration: .4s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcm9jc2x1dC9EZXNrdG9wL0dpdC9pb25pYy1kZWx5dmEvZGVsaXZvby1zZWxsZXItaW9uaWM1LW1hc3Rlci9zcmMvYXBwL3N1cHBvcnQvc3VwcG9ydC5wYWdlLnNjc3MiLCJzcmMvYXBwL3N1cHBvcnQvc3VwcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURDSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NSO0FERVk7RUFDSSxhQUFBO0FDQWhCO0FETUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FDSEo7QURLSTtFQUNJLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0hSO0FET0k7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUNMUjtBRFVBO0VBQ0ksa0NBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL3N1cHBvcnQvc3VwcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG4gICAgbWluLWhlaWdodDogMjQwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmxvZ28ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwNXB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICYuZGFya190aGVtZV9sb2dvIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uZm9ybSB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIzcHg7XG5cbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICAgICAgICBmb250LXNpemU6IDEuMjNyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG5cbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IC45NHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAuNHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzVweDtcblxuICAgIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gICAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNHMgIWltcG9ydGFudDtcbn0iLCIuYmFubmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xuICBtaW4taGVpZ2h0OiAyNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5iYW5uZXIgLmxvZ28ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwNXB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uYmFubmVyIC5sb2dvIGltZy5kYXJrX3RoZW1lX2xvZ28ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZm9ybSB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjNweDtcbn1cbi5mb3JtIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIGZvbnQtc2l6ZTogMS4yM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5mb3JtIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45NHJlbTtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgcGFkZGluZy1ib3R0b206IDM1cHg7XG59XG5cbmlvbi1mb290ZXIge1xuICAtLWFuaW1hdGUtZHVyYXRpb246IC40cyAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/support/support.page.ts":
/*!*****************************************!*\
  !*** ./src/app/support/support.page.ts ***!
  \*****************************************/
/*! exports provided: SupportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPage", function() { return SupportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SupportPage = class SupportPage {
    constructor() { }
    ngOnInit() {
    }
};
SupportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-support',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./support.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/support/support.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./support.page.scss */ "./src/app/support/support.page.scss")).default]
    })
], SupportPage);



/***/ })

}]);
//# sourceMappingURL=support-support-module-es2015.js.map