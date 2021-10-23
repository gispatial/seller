function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["store-profile-store-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/store-profile/store-profile.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/store-profile/store-profile.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStoreProfileStoreProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" mode=\"md\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            {{'edit_product' | translate}}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"bg_color\" fullscreen>\n    <ion-list lines=\"none\">\n        <ion-item class=\"feature_image animate__animated animate__fadeInUp\">\n            <div class=\"item_inner\">\n                <h2> {{'feature_image' | translate}}</h2>\n                <div class=\"d-flex\" style=\"align-items: flex-start;\">\n                    <div class=\"img_box center_img\">\n                        <img src=\"assets/images/store1.png\" class=\"crop_img\">\n                    </div>\n                    <h3 class=\"d-flex\">\n                        <ion-icon class=\"zmdi zmdi-camera ion-text-start\"></ion-icon>\n                        {{'upload_photo' | translate}}\n                    </h3>\n                </div>\n            </div>\n        </ion-item>\n\n        <div class=\"form animate__animated animate__fadeInUp\">\n            <h2>{{'store_info' | translate}}</h2>\n\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <div class=\"item_inner d-flex\">\n                    <div class=\"input_box\">\n                        <ion-label mode=\"md\" position=\"stacked\">{{\"store_name\" | translate}}</ion-label>\n                        <ion-input mode=\"md\" type=\"name\" placeholder=\"\" value=\"Silver Leaf Vegetables\"></ion-input>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <div class=\"item_inner d-flex\">\n                    <div class=\"input_box\">\n                        <ion-label mode=\"md\" position=\"stacked\">{{\"store_category\" | translate}}</ion-label>\n                        <div class=\"d-flex\" style=\"align-items: flex-end;\">\n                            <ion-select [(ngModel)]=\"store_category\">\n                                <ion-select-option value=\"1\">Vegetables & Fruits / Vegetables</ion-select-option>\n                                <ion-select-option value=\"2\">Fruits</ion-select-option>\n                                <ion-select-option value=\"3\">Vegetables</ion-select-option>\n                                <ion-select-option value=\"4\">Dary</ion-select-option>\n                                <ion-select-option value=\"5\">Grocery </ion-select-option>\n                            </ion-select>\n                            \n                            <ion-icon class=\"zmdi zmdi-chevron-down ion-text-end end\"></ion-icon>\n                        </div>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <div class=\"item_inner d-flex\">\n                    <div class=\"input_box\">\n                        <ion-label mode=\"md\" position=\"stacked\">{{\"phone_number\" | translate}}</ion-label>\n                        <ion-input mode=\"md\" type=\"text\" placeholder=\"\" value=\"+1 987 654 3210\"></ion-input>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <div class=\"item_inner d-flex\">\n                    <div class=\"input_box\">\n                        <ion-label mode=\"md\" position=\"stacked\">{{\"email_address\" | translate}}</ion-label>\n                        <ion-input mode=\"md\" type=\"text\" placeholder=\"\" value=\"storename@email\"></ion-input>\n                    </div>\n                </div>\n            </ion-item>\n        </div>\n\n        <ion-item  lines=\"none\" class=\"address animate__animated animate__fadeInUp\" (click)=\"set_location()\">\n            <div class=\"item_inner\">\n                <h2>{{'address' | translate}}</h2>\n                <p class=\"d-flex\">\n                    <ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\n                    1124, Veggy Garden, Union Market, United States\n                </p>\n            </div>\n        </ion-item>\n\n        <div class=\"form store_timings animate__animated animate__fadeInUp\">\n            <h2>{{'store_timings' | translate}}</h2>\n            <ion-row class=\"animate__animated animate__fadeInUp\">\n                <ion-col size=\"6\">\n                    <ion-item lines=\"none\">\n                        <div class=\"item_inner d-flex\">\n                            <div class=\"input_box\">\n                                <ion-label mode=\"md\" position=\"stacked\">{{\"opening_time\" | translate}}</ion-label>\n                                <ion-datetime mode=\"ios\" displayFormat=\"h:mm a\" value=\"11:30\"></ion-datetime>\n                            </div>\n                        </div>\n                    </ion-item>\n                </ion-col>\n\n                <ion-col size=\"6\">\n                    <ion-item lines=\"none\">\n                        <div class=\"item_inner d-flex\">\n                            <div class=\"input_box\">\n                                <ion-label mode=\"md\" position=\"stacked\">{{\"closing_time\" | translate}}</ion-label>\n                                <ion-datetime mode=\"ios\" displayFormat=\"h:mm a\" value=\"09:00\"></ion-datetime>\n                            </div>\n                        </div>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </div>\n    </ion-list>\n</ion-content>\n\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\n    <ion-button size=\"large\" expand=\"full\" class=\"btn\">{{'update_info' | translate}}</ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/store-profile/store-profile-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/store-profile/store-profile-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: StoreProfilePageRoutingModule */

  /***/
  function srcAppStoreProfileStoreProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreProfilePageRoutingModule", function () {
      return StoreProfilePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _store_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./store-profile.page */
    "./src/app/store-profile/store-profile.page.ts");

    var routes = [{
      path: '',
      component: _store_profile_page__WEBPACK_IMPORTED_MODULE_3__["StoreProfilePage"]
    }];

    var StoreProfilePageRoutingModule = function StoreProfilePageRoutingModule() {
      _classCallCheck(this, StoreProfilePageRoutingModule);
    };

    StoreProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StoreProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/store-profile/store-profile.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/store-profile/store-profile.module.ts ***!
    \*******************************************************/

  /*! exports provided: StoreProfilePageModule */

  /***/
  function srcAppStoreProfileStoreProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreProfilePageModule", function () {
      return StoreProfilePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _store_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./store-profile-routing.module */
    "./src/app/store-profile/store-profile-routing.module.ts");
    /* harmony import */


    var _store_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./store-profile.page */
    "./src/app/store-profile/store-profile.page.ts");

    var StoreProfilePageModule = function StoreProfilePageModule() {
      _classCallCheck(this, StoreProfilePageModule);
    };

    StoreProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _store_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__["StoreProfilePageRoutingModule"]],
      declarations: [_store_profile_page__WEBPACK_IMPORTED_MODULE_7__["StoreProfilePage"]]
    })], StoreProfilePageModule);
    /***/
  },

  /***/
  "./src/app/store-profile/store-profile.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/store-profile/store-profile.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStoreProfileStoreProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-list {\n  margin: 0;\n  background: none;\n  padding: 0;\n  padding-top: 8px;\n}\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.88rem;\n  font-weight: 400;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  padding-bottom: 14px;\n}\nion-list ion-item {\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --background: var(--transparent) !important;\n  background: var(--white);\n  padding: 13px 20px;\n  margin-bottom: 8px;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n}\nion-list ion-item.feature_image .item_inner .img_box {\n  min-width: 95px;\n  height: 95px;\n  margin-right: 24px;\n  border-radius: 4px;\n}\nion-list ion-item.feature_image .item_inner h3 {\n  margin: 0;\n  color: var(--primary);\n  font-weight: 400;\n  font-size: 0.93rem;\n  letter-spacing: 0.4px;\n}\nion-list ion-item.feature_image .item_inner h3 ion-icon {\n  font-size: 1.7rem;\n  min-width: 35px;\n}\nion-list ion-item.address p {\n  margin: 0;\n  font-size: 0.85rem !important;\n  font-weight: 400 !important;\n  color: var(--text-black);\n  width: 100%;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.6) !important;\n  padding-bottom: 7px;\n}\nion-list ion-item.address p ion-icon {\n  margin: 0;\n  font-size: 1.14rem;\n  color: var(--primary);\n  min-width: 25px;\n}\nion-list .form {\n  background: var(--white);\n  padding: 20px;\n  margin-bottom: 8px;\n}\nion-list .form ion-item {\n  padding-left: 0;\n  padding-right: 0;\n  margin-bottom: 0;\n}\nion-list .form ion-item.item-select ion-select::part(icon) {\n  display: none !important;\n}\nion-list .form ion-item.item-select ion-icon {\n  line-height: 13px;\n  height: 15px;\n  font-size: 1.6rem;\n  color: var(--text-black);\n}\nion-list .form.store_timings ion-row ion-col {\n  padding: 0 5px;\n}\nion-footer {\n  --animate-duration: .4s!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcm9jc2x1dC9EZXNrdG9wL0dpdC9pb25pYy1kZWx5dmEvZGVsaXZvby1zZWxsZXItaW9uaWM1LW1hc3Rlci9zcmMvYXBwL3N0b3JlLXByb2ZpbGUvc3RvcmUtcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3N0b3JlLXByb2ZpbGUvc3RvcmUtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENJO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0NSO0FERUk7RUFDSSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0FSO0FERVE7RUFDSSxXQUFBO0FDQVo7QURLZ0I7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNIcEI7QURNZ0I7RUFDSSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNKcEI7QURNb0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNKeEI7QURXWTtFQUNJLFNBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsNERBQUE7RUFDQSxtQkFBQTtBQ1RoQjtBRFdnQjtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ1RwQjtBRGVJO0VBQ0ksd0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNiUjtBRGVRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNiWjtBRGlCb0I7RUFDSSx3QkFBQTtBQ2Z4QjtBRG1CZ0I7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FDakJwQjtBRHVCZ0I7RUFDSSxjQUFBO0FDckJwQjtBRDJCQTtFQUNLLGlDQUFBO0FDeEJMIiwiZmlsZSI6InNyYy9hcHAvc3RvcmUtcHJvZmlsZS9zdG9yZS1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG5cbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgICAgICBmb250LXNpemU6IC44OHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE0cHg7XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIHBhZGRpbmc6IDEzcHggMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgICAgIC5pdGVtX2lubmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5mZWF0dXJlX2ltYWdlIHtcbiAgICAgICAgICAgIC5pdGVtX2lubmVyIHtcbiAgICAgICAgICAgICAgICAuaW1nX2JveCB7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogOTVweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5NXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC45M3JlbTtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC40cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmFkZHJlc3Mge1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjA0LCAyMDQsIDIwNCwgMC42KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG5cbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjE0cmVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9ybSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgICAgICAgICAmLml0ZW0tc2VsZWN0IHtcbiAgICAgICAgICAgICAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgICAgICAgICAgICAgJjo6cGFydChpY29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYuc3RvcmVfdGltaW5nc3tcbiAgICAgICAgICAgIGlvbi1yb3d7XG4gICAgICAgICAgICAgICAgaW9uLWNvbHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuaW9uLWZvb3RlcntcbiAgICAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNHMhaW1wb3J0YW50O1xufSIsImlvbi1saXN0IHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuaW9uLWxpc3QgaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBwYWRkaW5nOiAxM3B4IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tbGlzdCBpb24taXRlbS5mZWF0dXJlX2ltYWdlIC5pdGVtX2lubmVyIC5pbWdfYm94IHtcbiAgbWluLXdpZHRoOiA5NXB4O1xuICBoZWlnaHQ6IDk1cHg7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0uZmVhdHVyZV9pbWFnZSAuaXRlbV9pbm5lciBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuOTNyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtLmZlYXR1cmVfaW1hZ2UgLml0ZW1faW5uZXIgaDMgaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgbWluLXdpZHRoOiAzNXB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0uYWRkcmVzcyBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuODVyZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjYpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG59XG5pb24tbGlzdCBpb24taXRlbS5hZGRyZXNzIHAgaW9uLWljb24ge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4xNHJlbTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBtaW4td2lkdGg6IDI1cHg7XG59XG5pb24tbGlzdCAuZm9ybSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuaW9uLWxpc3QgLmZvcm0gaW9uLWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5pb24tbGlzdCAuZm9ybSBpb24taXRlbS5pdGVtLXNlbGVjdCBpb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuaW9uLWxpc3QgLmZvcm0gaW9uLWl0ZW0uaXRlbS1zZWxlY3QgaW9uLWljb24ge1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xufVxuaW9uLWxpc3QgLmZvcm0uc3RvcmVfdGltaW5ncyBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwIDVweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjRzIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/store-profile/store-profile.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/store-profile/store-profile.page.ts ***!
    \*****************************************************/

  /*! exports provided: StoreProfilePage */

  /***/
  function srcAppStoreProfileStoreProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreProfilePage", function () {
      return StoreProfilePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var StoreProfilePage = /*#__PURE__*/function () {
      function StoreProfilePage(route) {
        _classCallCheck(this, StoreProfilePage);

        this.route = route;
        this.store_category = "1";
      }

      _createClass(StoreProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "set_location",
        value: function set_location() {
          this.route.navigate(['./set-location']);
        }
      }]);

      return StoreProfilePage;
    }();

    StoreProfilePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    StoreProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-store-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./store-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/store-profile/store-profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./store-profile.page.scss */
      "./src/app/store-profile/store-profile.page.scss"))["default"]]
    })], StoreProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=store-profile-store-profile-module-es5.js.map