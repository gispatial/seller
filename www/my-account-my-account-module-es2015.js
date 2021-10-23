(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-account-my-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-title>{{'my_account' | translate}}</ion-title>\n    </ion-toolbar>\n    <div class=\"profile_info d-flex\" (click)=\"store_profile()\">\n        <div class=\"img_box center_img\">\n            <img src=\"assets/images/store1.png\" class=\"crop_img\">\n        </div>\n        <div class=\"text_box\">\n            <h2 class=\"animate__animated animate__fadeInUp\">Fresh Leaf Vegetables</h2>\n            <p class=\"d-flex animate__animated animate__fadeInUp\">\n                <ion-icon class=\"zmdi zmdi-pin\"></ion-icon>\n                <span>Delyva Grocer</span>\n            </p>\n            <h4 class=\"animate__animated animate__fadeInUp\">{{'store_profile' | translate}}</h4>\n        </div>\n    </div>\n</ion-header>\n\n<ion-content fullscreen>\n\n    <ion-list lines=\"none\">\n        <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"insight()\">\n            <div class=\"item_inner d-flex\">\n                <div class=\"icon_box ion-text-start\">\n                    <img src=\"assets/images/ic_menu_insight.png\">\n                </div>\n                <h2>{{'insight' | translate}}</h2>\n            </div>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"wallet()\">\n            <div class=\"item_inner d-flex\">\n                <div class=\"icon_box ion-text-start\">\n                    <img src=\"assets/images/ic_menu_wallet.png\">\n                </div>\n                <h2>{{'wallet' | translate}}</h2>\n            </div>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"reviews()\">\n            <div class=\"item_inner d-flex\">\n                <div class=\"icon_box ion-text-start\">\n                    <img src=\"assets/images/ic_menu_reviewact.png\">\n                </div>\n                <h2>{{'my_reviews' | translate}}</h2>\n            </div>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"settings()\">\n            <div class=\"item_inner d-flex\">\n                <div class=\"icon_box ion-text-start\">\n                    <img src=\"assets/images/ic_menu_setting.png\">\n                </div>\n                <h2>{{'settings' | translate}}</h2>\n            </div>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"terms_conditions()\">\n            <div class=\"item_inner d-flex\">\n                <div class=\"icon_box ion-text-start\">\n                    <img src=\"assets/images/ic_menu_tncact.png\">\n                </div>\n                <h2>{{'terms_conditions' | translate}}</h2>\n            </div>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"support()\">\n            <div class=\"item_inner d-flex\">\n                <div class=\"icon_box ion-text-start\">\n                    <img src=\"assets/images/ic_menu_supportact.png\">\n                </div>\n                <h2>{{'support' | translate}}</h2>\n            </div>\n        </ion-item>\n\n<!--\n        <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"about_us()\">\n            <div class=\"item_inner d-flex\">\n                <div class=\"icon_box ion-text-start\">\n                    <img src=\"assets/images/ic_menu_aboutact.png\">\n                </div>\n                <h2>{{'about_us' | translate}}</h2>\n            </div>\n        </ion-item>\n-->\n\n<!--\n        <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"select_language()\">\n            <div class=\"item_inner d-flex\">\n                <div class=\"icon_box ion-text-start\">\n                    <img src=\"assets/images/ic_menu_aboutact.png\">\n                </div>\n                <h2>{{'change_language' | translate}}</h2>\n            </div>\n        </ion-item>\n-->\n\n        <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"phone_number()\">\n            <div class=\"item_inner d-flex\">\n                <div class=\"icon_box ion-text-start\">\n                    <img src=\"assets/images/ic_menu_logoutact.png\">\n                </div>\n                <h2>{{'logout' | translate}}</h2>\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n    <div class=\"developed_by d-flex\" *ngIf=\"config.demoMode\"  (click)=\"developed_by()\">\n        <h2>{{\"developed_by\" | translate}}</h2>\n        <div class=\"img_box ion-text-end\">\n            <img src=\"assets/images/opus.png\" class=\"light-theme-logo\">\n            <img src=\"assets/images/opus_logo_light.png\" class=\"dark-theme-logo\">\n        </div>\n    </div>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/my-account/my-account-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/my-account/my-account-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MyAccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountPageRoutingModule", function() { return MyAccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-account.page */ "./src/app/my-account/my-account.page.ts");




const routes = [
    {
        path: '',
        component: _my_account_page__WEBPACK_IMPORTED_MODULE_3__["MyAccountPage"]
    }
];
let MyAccountPageRoutingModule = class MyAccountPageRoutingModule {
};
MyAccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyAccountPageRoutingModule);



/***/ }),

/***/ "./src/app/my-account/my-account.module.ts":
/*!*************************************************!*\
  !*** ./src/app/my-account/my-account.module.ts ***!
  \*************************************************/
/*! exports provided: MyAccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountPageModule", function() { return MyAccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _my_account_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-account-routing.module */ "./src/app/my-account/my-account-routing.module.ts");
/* harmony import */ var _my_account_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-account.page */ "./src/app/my-account/my-account.page.ts");








let MyAccountPageModule = class MyAccountPageModule {
};
MyAccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _my_account_routing_module__WEBPACK_IMPORTED_MODULE_6__["MyAccountPageRoutingModule"]
        ],
        declarations: [_my_account_page__WEBPACK_IMPORTED_MODULE_7__["MyAccountPage"]]
    })
], MyAccountPageModule);



/***/ }),

/***/ "./src/app/my-account/my-account.page.scss":
/*!*************************************************!*\
  !*** ./src/app/my-account/my-account.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  background: var(--white);\n}\nion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  text-align: center !important;\n}\nion-header .profile_info {\n  padding: 0px 20px 23px 20px;\n  align-items: flex-start;\n}\nion-header .profile_info .img_box {\n  min-width: 95px;\n  height: 95px;\n  margin-right: 15px;\n  border-radius: 4px;\n}\nion-header .profile_info .text_box {\n  width: 100%;\n}\nion-header .profile_info .text_box h2 {\n  margin: 0;\n  color: var(--text-black);\n  font-size: 1.1rem;\n  font-weight: 500;\n  padding-bottom: 10px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\nion-header .profile_info .text_box p {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--text-black);\n}\nion-header .profile_info .text_box p span {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\nion-header .profile_info .text_box p ion-icon {\n  color: var(--text-light);\n  font-size: 0.8rem;\n  padding: 0 1px;\n}\nion-header .profile_info .text_box h4 {\n  margin: 0;\n  color: var(--primary);\n  font-size: 0.93rem;\n  font-weight: 400;\n  padding-top: 18px;\n}\n.buy_this_app {\n  background: var(--primary);\n  border-radius: 50px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  min-width: 143px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 0 13px;\n  position: fixed;\n  z-index: 9999;\n  top: 170px;\n  right: 20px;\n}\n.buy_this_app h2 {\n  color: var(--white) !important;\n  font-size: 1.1rem !important;\n  font-weight: 500 !important;\n  margin: 0 auto !important;\n  display: flex;\n  align-items: center;\n  letter-spacing: 0 !important;\n}\n.buy_this_app h2 ion-icon {\n  font-size: 1rem;\n  min-width: 23px;\n}\nion-list {\n  border-top: 8px solid var(--bg-color);\n  background: none;\n  margin: 0;\n  padding: 0;\n  padding-top: 15px;\n}\nion-list ion-item {\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --background: var(--transparent) !important;\n  background: var(--white);\n  padding: 12px 22px;\n}\nion-list ion-item .icon_box {\n  min-width: 45px;\n}\nion-list ion-item .icon_box img {\n  width: 25px;\n  display: block;\n}\nion-list ion-item h2 {\n  margin: 0;\n  color: var(--text-black);\n  font-size: 1.15rem;\n}\nion-list ion-item ion-toggle {\n  margin: 0 auto;\n  --background: var(--text-light);\n  --background-checked: var(--text-light);\n  --handle-background-checked: var(--primary);\n}\nion-footer {\n  background: var(--bg-color);\n  z-index: 999;\n  position: relative;\n}\nion-footer .developed_by {\n  padding: 10px 20px 10px 20px;\n}\nion-footer .developed_by h2 {\n  margin: 0;\n  color: var(--text-black);\n  font-size: 1.1rem;\n  font-weight: 500;\n  min-width: 41%;\n  letter-spacing: 0;\n}\nion-footer .developed_by .img_box {\n  width: 100%;\n}\nion-footer .developed_by .img_box img {\n  max-width: 160px;\n}\nion-footer .developed_by .img_box img.dark-theme-logo {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcm9jc2x1dC9EZXNrdG9wL0dpdC9pb25pYy1kZWx5dmEvZGVsaXZvby1zZWxsZXItaW9uaWM1LW1hc3Rlci9zcmMvYXBwL215LWFjY291bnQvbXktYWNjb3VudC5wYWdlLnNjc3MiLCJzcmMvYXBwL215LWFjY291bnQvbXktYWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtBQ0NKO0FEQ0k7RUFDSSwwQkFBQTtFQUNBLDZCQUFBO0FDQ1I7QURFSTtFQUNJLDJCQUFBO0VBQ0EsdUJBQUE7QUNBUjtBREVRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQVo7QURHUTtFQUNJLFdBQUE7QUNEWjtBREdZO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRGhCO0FES1k7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQ0hoQjtBREtnQjtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0hwQjtBRE1nQjtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSnBCO0FEUVk7RUFDSSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNOaEI7QURhQTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ1ZKO0FEWUk7RUFDSSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDVlI7QURZUTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDVlo7QURlQTtFQUNJLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDWko7QURjSTtFQUNJLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQ1pSO0FEY1E7RUFDSSxlQUFBO0FDWlo7QURjWTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDWmhCO0FEZ0JRO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUNkWjtBRGlCUTtFQUNJLGNBQUE7RUFDQSwrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsMkNBQUE7QUNmWjtBRG9CQTtFQUNJLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDakJKO0FEbUJJO0VBQ0ksNEJBQUE7QUNqQlI7QURtQlE7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDakJaO0FEb0JRO0VBQ0ksV0FBQTtBQ2xCWjtBRG9CWTtFQUNJLGdCQUFBO0FDbEJoQjtBRG1CZ0I7RUFDSSxhQUFBO0FDakJwQiIsImZpbGUiOiJzcmMvYXBwL215LWFjY291bnQvbXktYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG5cbiAgICBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnByb2ZpbGVfaW5mbyB7XG4gICAgICAgIHBhZGRpbmc6IDBweCAyMHB4IDIzcHggMjBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICAgICAgLmltZ19ib3gge1xuICAgICAgICAgICAgbWluLXdpZHRoOiA5NXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA5NXB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHRfYm94IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjkzcmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLmJ1eV90aGlzX2FwcCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi13aWR0aDogMTQzcHg7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIHBhZGRpbmc6IDAgMTNweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICB0b3A6IDE3MHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuXG4gICAgaDIge1xuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAgIWltcG9ydGFudDtcblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBtaW4td2lkdGg6IDIzcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1saXN0IHtcbiAgICBib3JkZXItdG9wOiA4cHggc29saWQgdmFyKC0tYmctY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgcGFkZGluZzogMTJweCAyMnB4O1xuXG4gICAgICAgIC5pY29uX2JveCB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDQ1cHg7XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMTVyZW07XG4gICAgICAgIH1cblxuICAgICAgICBpb24tdG9nZ2xlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICAgICAgICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1mb290ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLmRldmVsb3BlZF9ieSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbWluLXdpZHRoOiA0MSU7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWdfYm94IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTYwcHg7XG4gICAgICAgICAgICAgICAgJi5kYXJrLXRoZW1lLWxvZ28ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufSIsImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbmlvbi1oZWFkZXIgLnByb2ZpbGVfaW5mbyB7XG4gIHBhZGRpbmc6IDBweCAyMHB4IDIzcHggMjBweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5pb24taGVhZGVyIC5wcm9maWxlX2luZm8gLmltZ19ib3gge1xuICBtaW4td2lkdGg6IDk1cHg7XG4gIGhlaWdodDogOTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5pb24taGVhZGVyIC5wcm9maWxlX2luZm8gLnRleHRfYm94IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24taGVhZGVyIC5wcm9maWxlX2luZm8gLnRleHRfYm94IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5pb24taGVhZGVyIC5wcm9maWxlX2luZm8gLnRleHRfYm94IHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG59XG5pb24taGVhZGVyIC5wcm9maWxlX2luZm8gLnRleHRfYm94IHAgc3BhbiB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuaW9uLWhlYWRlciAucHJvZmlsZV9pbmZvIC50ZXh0X2JveCBwIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgcGFkZGluZzogMCAxcHg7XG59XG5pb24taGVhZGVyIC5wcm9maWxlX2luZm8gLnRleHRfYm94IGg0IHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMC45M3JlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZy10b3A6IDE4cHg7XG59XG5cbi5idXlfdGhpc19hcHAge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4td2lkdGg6IDE0M3B4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDAgMTNweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5O1xuICB0b3A6IDE3MHB4O1xuICByaWdodDogMjBweDtcbn1cbi5idXlfdGhpc19hcHAgaDIge1xuICBjb2xvcjogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAgIWltcG9ydGFudDtcbn1cbi5idXlfdGhpc19hcHAgaDIgaW9uLWljb24ge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1pbi13aWR0aDogMjNweDtcbn1cblxuaW9uLWxpc3Qge1xuICBib3JkZXItdG9wOiA4cHggc29saWQgdmFyKC0tYmctY29sb3IpO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmc6IDEycHggMjJweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pY29uX2JveCB7XG4gIG1pbi13aWR0aDogNDVweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pY29uX2JveCBpbWcge1xuICB3aWR0aDogMjVweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5pb24tbGlzdCBpb24taXRlbSBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBmb250LXNpemU6IDEuMTVyZW07XG59XG5pb24tbGlzdCBpb24taXRlbSBpb24tdG9nZ2xlIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdGV4dC1saWdodCk7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgei1pbmRleDogOTk5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24tZm9vdGVyIC5kZXZlbG9wZWRfYnkge1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xufVxuaW9uLWZvb3RlciAuZGV2ZWxvcGVkX2J5IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtaW4td2lkdGg6IDQxJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5pb24tZm9vdGVyIC5kZXZlbG9wZWRfYnkgLmltZ19ib3gge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1mb290ZXIgLmRldmVsb3BlZF9ieSAuaW1nX2JveCBpbWcge1xuICBtYXgtd2lkdGg6IDE2MHB4O1xufVxuaW9uLWZvb3RlciAuZGV2ZWxvcGVkX2J5IC5pbWdfYm94IGltZy5kYXJrLXRoZW1lLWxvZ28ge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/my-account/my-account.page.ts":
/*!***********************************************!*\
  !*** ./src/app/my-account/my-account.page.ts ***!
  \***********************************************/
/*! exports provided: MyAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountPage", function() { return MyAccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _buyappalert_buyappalert_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buyappalert/buyappalert.page */ "./src/app/buyappalert/buyappalert.page.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");







let MyAccountPage = class MyAccountPage {
    constructor(config, route, navCtrl, modalController) {
        this.config = config;
        this.route = route;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    store_profile() {
        this.route.navigate(['./store-profile']);
    }
    insight() {
        this.route.navigate(['./insight']);
    }
    wallet() {
        this.route.navigate(['./wallet']);
    }
    terms_conditions() {
        this.route.navigate(['./terms-conditions']);
    }
    support() {
        this.route.navigate(['./support']);
    }
    reviews() {
        this.route.navigate(['./reviews']);
    }
    settings() {
        this.route.navigate(['./settings']);
    }
    //about_us() {
    //    this.route.navigate(['./about-us']);
    //  }
    //select_language() {
    //    this.route.navigate(['./select-language']);
    //  }
    phone_number() {
        this.route.navigate(['./phone-number']);
    }
    developed_by() {
        window.open("https://rizq.us/v2/", '_system', 'location=no');
    }
    buyappalert() {
        this.modalController.create({ component: _buyappalert_buyappalert_page__WEBPACK_IMPORTED_MODULE_4__["BuyappalertPage"] }).then((modalElement) => {
            modalElement.present();
        });
    }
};
MyAccountPage.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_app_config__WEBPACK_IMPORTED_MODULE_5__["APP_CONFIG"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
MyAccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-account.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-account.page.scss */ "./src/app/my-account/my-account.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_5__["APP_CONFIG"]))
], MyAccountPage);



/***/ })

}]);
//# sourceMappingURL=my-account-my-account-module-es2015.js.map