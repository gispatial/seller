(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            {{'settings' | translate}}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg_color\" fullscreen>\n    <ion-list lines=\"none\">\n        <div class=\"display_setting\">\n            <h2 class=\"animate__animated animate__fadeInUp\">{{'display_setting' | translate}}</h2>\n            <ion-item class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item_inner\">\n                    <h3 class=\"d-flex\">{{'dark_mode' | translate}}\n                        <ion-toggle mode=\"ios\" class=\"end\" (ionChange)=\"onClick($event)\"></ion-toggle>\n                    </h3>\n                    <p>{{'experience_an_excitiing_dark_mode' | translate}}</p>\n                </div>\n            </ion-item>\n        </div>\n\n        <div class=\"select_language\">\n            <h2 class=\"animate__animated animate__fadeInUp\">{{'select_language' | translate}}</h2>\n\n            <ion-radio-group [(ngModel)]=\"defaultLanguageCode\">\n                <ion-item class=\"animate__animated animate__fadeInUp\" *ngFor=\"let language of languages\" (click)=\"onLanguageClick(language)\">\n                    <div class=\"item_inner d-flex\">\n                        <h3>{{language.name}}</h3>\n                        <ion-radio class=\"end\" value=\"{{language.code}}\"></ion-radio>\n                    </div>\n                </ion-item>\n            </ion-radio-group>\n        </div>\n    </ion-list>\n</ion-content>\n\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\n    <ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"languageConfirm()\"> {{'submit' | translate}} </ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/settings/settings-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/settings/settings-routing.module.ts");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");








let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_6__["SettingsPageRoutingModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_7__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  padding-top: 8px;\n}\nion-list h2 {\n  margin: 0;\n  padding: 20px;\n  color: var(--text-light);\n  font-size: 1.1rem;\n}\nion-list ion-item {\n  padding: 13px 19px;\n  --min-height: unset !important;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--transparent) !important;\n  --background-activated: var(--transparent) !important;\n  --background-activated-opacity: 1;\n  --background-hover: var(--transparent) !important;\n  --ripple-color: var(--transparent) !important;\n  background: var(--white);\n  transition: all 0.5s;\n  margin-bottom: 8px;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n}\nion-list ion-item ion-toggle {\n  --background: #F4F7F1;\n  --background-checked: #F4F7F1;\n  --handle-background: var(--text-light);\n  --handle-background-checked: var(--primary);\n  --handle-height: 13px;\n  --handle-width: 13px;\n  --handle-box-shadow: none;\n  height: 19px;\n  width: 34px;\n}\nion-list ion-item h3 {\n  margin: 0;\n  letter-spacing: 0;\n  font-size: 1.3rem;\n  color: var(--text-black);\n  font-weight: 600;\n}\nion-list ion-item p {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.9rem;\n  letter-spacing: 0.3px;\n  padding-top: 12px;\n}\nion-list ion-item ion-radio {\n  --color-checked: var(--primary);\n}\nion-list .select_language ion-item {\n  margin-bottom: 4px;\n}\nion-footer {\n  --animate-duration: .4s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcm9jc2x1dC9EZXNrdG9wL0dpdC9pb25pYy1kZWx5dmEvZGVsaXZvby1zZWxsZXItaW9uaWM1LW1hc3Rlci9zcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0kseUNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQ0w7QURDSztFQUNJLFNBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtBQ0NUO0FERUs7RUFDSSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdURBQUE7RUFDQSwyQ0FBQTtFQUNBLHFEQUFBO0VBQ0EsaUNBQUE7RUFDQSxpREFBQTtFQUNBLDZDQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDQVQ7QURFUztFQUNJLFdBQUE7QUNBYjtBREdTO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtFQUNBLHNDQUFBO0VBQ0EsMkNBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0RiO0FESVM7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNGYjtBRE1TO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDSmI7QURPUztFQUNJLCtCQUFBO0FDTGI7QURVUztFQUNJLGtCQUFBO0FDUmI7QURjQztFQUNJLGtDQUFBO0FDWEwiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgaW9uLWxpc3Qge1xuICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgICAgbWFyZ2luOiAwO1xuICAgICBwYWRkaW5nOiAwO1xuICAgICBwYWRkaW5nLXRvcDogOHB4O1xuXG4gICAgIGgyIHtcbiAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgfVxuXG4gICAgIGlvbi1pdGVtIHtcbiAgICAgICAgIHBhZGRpbmc6IDEzcHggMTlweDtcbiAgICAgICAgIC0tbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gICAgICAgICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgICAgICAgLS1yaXBwbGUtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcblxuICAgICAgICAgLml0ZW1faW5uZXIge1xuICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgfVxuXG4gICAgICAgICBpb24tdG9nZ2xlIHtcbiAgICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNGNEY3RjE7XG4gICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNGNEY3RjE7XG4gICAgICAgICAgICAgLS1oYW5kbGUtYmFja2dyb3VuZDogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgICAgICAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAtLWhhbmRsZS1oZWlnaHQ6IDEzcHg7XG4gICAgICAgICAgICAgLS1oYW5kbGUtd2lkdGg6IDEzcHg7XG4gICAgICAgICAgICAgLS1oYW5kbGUtYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICBoZWlnaHQ6IDE5cHg7XG4gICAgICAgICAgICAgd2lkdGg6IDM0cHg7XG4gICAgICAgICB9XG5cbiAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICAgICAgIH1cblxuICAgICAgICAgcCB7XG4gICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuM3B4O1xuICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgICAgfVxuXG4gICAgICAgICBpb24tcmFkaW8ge1xuICAgICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICB9XG4gICAgIH1cblxuICAgICAuc2VsZWN0X2xhbmd1YWdlIHtcbiAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICB9XG4gICAgIH1cbiB9XG5cblxuIGlvbi1mb290ZXIge1xuICAgICAtLWFuaW1hdGUtZHVyYXRpb246IC40cyAhaW1wb3J0YW50O1xuIH0iLCJpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5pb24tbGlzdCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMTNweCAxOXB4O1xuICAtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIC0tcmlwcGxlLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIGlvbi10b2dnbGUge1xuICAtLWJhY2tncm91bmQ6ICNGNEY3RjE7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjRjRGN0YxO1xuICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1wcmltYXJ5KTtcbiAgLS1oYW5kbGUtaGVpZ2h0OiAxM3B4O1xuICAtLWhhbmRsZS13aWR0aDogMTNweDtcbiAgLS1oYW5kbGUtYm94LXNoYWRvdzogbm9uZTtcbiAgaGVpZ2h0OiAxOXB4O1xuICB3aWR0aDogMzRweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG59XG5pb24tbGlzdCBpb24taXRlbSBpb24tcmFkaW8ge1xuICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLXByaW1hcnkpO1xufVxuaW9uLWxpc3QgLnNlbGVjdF9sYW5ndWFnZSBpb24taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjRzICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var src_services_myevent_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/myevent.services */ "./src/services/myevent.services.ts");
/* harmony import */ var src_models_contants_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/contants.models */ "./src/models/contants.models.ts");





let SettingsPage = class SettingsPage {
    constructor(config, myEvent) {
        this.config = config;
        this.myEvent = myEvent;
        this.languages = this.config.availableLanguages;
        this.defaultLanguageCode = config.availableLanguages[0].code;
        let defaultLang = window.localStorage.getItem(src_models_contants_models__WEBPACK_IMPORTED_MODULE_4__["Constants"].KEY_DEFAULT_LANGUAGE);
        if (defaultLang)
            this.defaultLanguageCode = defaultLang;
    }
    ngOnInit() {
    }
    onLanguageClick(language) {
        this.defaultLanguageCode = language.code;
    }
    languageConfirm() {
        this.myEvent.setLanguageData(this.defaultLanguageCode);
        window.localStorage.setItem(src_models_contants_models__WEBPACK_IMPORTED_MODULE_4__["Constants"].KEY_DEFAULT_LANGUAGE, this.defaultLanguageCode);
    }
    onClick(event) {
        let systemDark = window.matchMedia("(class: dark-theme)");
        systemDark.addListener(this.colorTest);
        if (event.detail.checked) {
            document.body.setAttribute('class', 'dark-theme');
        }
        else {
            document.body.setAttribute('class', 'light-theme');
        }
    }
    colorTest(systemInitiatedDark) {
        if (systemInitiatedDark.matches) {
            document.body.setAttribute('class', 'dark-theme');
        }
        else {
            document.body.setAttribute('class', 'light-theme');
        }
    }
};
SettingsPage.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"],] }] },
    { type: src_services_myevent_services__WEBPACK_IMPORTED_MODULE_3__["MyEvent"] }
];
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"]))
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map