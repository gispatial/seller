function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["send-to-bank-send-to-bank-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/send-to-bank/send-to-bank.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/send-to-bank/send-to-bank.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSendToBankSendToBankPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"bg_transparent\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{'send_to_bank' | translate}}</ion-title>\n    </ion-toolbar>\n    <div class=\"banner\">\n        <h2 class=\"animate__animated animate__fadeInUp\">{{'available_balance' | translate}}</h2>\n        <h1 class=\"animate__animated animate__fadeInUp\">$ 758.50</h1>\n    </div>\n</ion-header>\n\n\n<ion-content class=\"bg_color\">\n    <div class=\"form\">\n        <ion-list lines=\"none\">\n            <ion-card>\n                <h2>{{'bank_info' | translate}}</h2>\n\n                <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                    <div class=\"item_inner d-flex\">\n                        <div class=\"input_box\">\n                            <ion-label mode=\"md\" position=\"stacked\">{{\"account_holder_name\" | translate}}</ion-label>\n                            <ion-input mode=\"md\" type=\"name\" placeholder=\"\" value=\"Geroge D Smith\"></ion-input>\n                        </div>\n                    </div>\n                </ion-item>\n\n\n                <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                    <div class=\"item_inner d-flex\">\n                        <div class=\"input_box\">\n                            <ion-label mode=\"md\" position=\"stacked\">{{\"bank_name\" | translate}}</ion-label>\n                            <ion-input mode=\"md\" type=\"name\" placeholder=\"\" value=\"HBNC Bank of New York\"></ion-input>\n                        </div>\n                    </div>\n                </ion-item>\n\n                <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                    <div class=\"item_inner d-flex\">\n                        <div class=\"input_box\">\n                            <ion-label mode=\"md\" position=\"stacked\">{{\"branch_code\" | translate}}</ion-label>\n                            <ion-input mode=\"md\" type=\"name\" placeholder=\"\" value=\"+1 987 654 3210\"></ion-input>\n                        </div>\n                    </div>\n                </ion-item>\n\n                <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                    <div class=\"item_inner d-flex\">\n                        <div class=\"input_box\">\n                            <ion-label mode=\"md\" position=\"stacked\">{{\"account_number\" | translate}}</ion-label>\n                            <ion-input mode=\"md\" type=\"name\" placeholder=\"\" value=\"4321 4567 6789 8901\"></ion-input>\n                        </div>\n                    </div>\n                </ion-item>\n            </ion-card>\n\n            <ion-card>\n                <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                    <div class=\"item_inner d-flex\">\n                        <div class=\"input_box\">\n                            <ion-label mode=\"md\" position=\"stacked\">{{\"enter_amount_to_transfer\" | translate}}</ion-label>\n                            <ion-input mode=\"md\" type=\"name\" placeholder=\"\" value=\"$ 500\"></ion-input>\n                        </div>\n                    </div>\n                </ion-item>\n            </ion-card>\n        </ion-list>\n    </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\n    <ion-button size=\"large\" expand=\"full\" class=\"btn\">{{'send_to_bank' | translate}}</ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/send-to-bank/send-to-bank-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/send-to-bank/send-to-bank-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: SendToBankPageRoutingModule */

  /***/
  function srcAppSendToBankSendToBankRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendToBankPageRoutingModule", function () {
      return SendToBankPageRoutingModule;
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


    var _send_to_bank_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./send-to-bank.page */
    "./src/app/send-to-bank/send-to-bank.page.ts");

    var routes = [{
      path: '',
      component: _send_to_bank_page__WEBPACK_IMPORTED_MODULE_3__["SendToBankPage"]
    }];

    var SendToBankPageRoutingModule = function SendToBankPageRoutingModule() {
      _classCallCheck(this, SendToBankPageRoutingModule);
    };

    SendToBankPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SendToBankPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/send-to-bank/send-to-bank.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/send-to-bank/send-to-bank.module.ts ***!
    \*****************************************************/

  /*! exports provided: SendToBankPageModule */

  /***/
  function srcAppSendToBankSendToBankModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendToBankPageModule", function () {
      return SendToBankPageModule;
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


    var _send_to_bank_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./send-to-bank-routing.module */
    "./src/app/send-to-bank/send-to-bank-routing.module.ts");
    /* harmony import */


    var _send_to_bank_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./send-to-bank.page */
    "./src/app/send-to-bank/send-to-bank.page.ts");

    var SendToBankPageModule = function SendToBankPageModule() {
      _classCallCheck(this, SendToBankPageModule);
    };

    SendToBankPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _send_to_bank_routing_module__WEBPACK_IMPORTED_MODULE_6__["SendToBankPageRoutingModule"]],
      declarations: [_send_to_bank_page__WEBPACK_IMPORTED_MODULE_7__["SendToBankPage"]]
    })], SendToBankPageModule);
    /***/
  },

  /***/
  "./src/app/send-to-bank/send-to-bank.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/send-to-bank/send-to-bank.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSendToBankSendToBankPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 0px);\n  background: var(--white);\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: block;\n}\nion-header .banner {\n  position: relative;\n  z-index: 99;\n  padding: 20px 20px;\n}\nion-header .banner h2 {\n  margin: 0;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  font-weight: 400;\n  letter-spacing: 1px;\n  padding-bottom: 4px;\n  color: var(--text-light);\n}\nion-header .banner h1 {\n  margin: 0;\n  font-weight: 600;\n  font-size: 2.1rem;\n  color: var(--primary);\n}\n.form {\n  width: 100%;\n  margin-top: 8px;\n  padding: 0;\n}\n.form ion-list ion-card {\n  width: 100%;\n  border-radius: 0;\n  background: var(--white);\n  margin: 0;\n  box-shadow: none;\n  margin-bottom: 8px;\n  padding: 20px 20px;\n  background: var(--white);\n}\n.form ion-list ion-card:last-child {\n  margin-bottom: 0;\n}\n.form ion-list ion-card h2 {\n  margin: 0;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  font-weight: 400;\n  letter-spacing: 1px;\n  padding-bottom: 28px;\n  color: var(--text-light);\n}\n.form ion-list ion-card ion-item:last-child {\n  margin-bottom: 0;\n}\nion-footer {\n  --animate-duration: .4s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcm9jc2x1dC9EZXNrdG9wL0dpdC9pb25pYy1kZWx5dmEvZGVsaXZvby1zZWxsZXItaW9uaWM1LW1hc3Rlci9zcmMvYXBwL3NlbmQtdG8tYmFuay9zZW5kLXRvLWJhbmsucGFnZS5zY3NzIiwic3JjL2FwcC9zZW5kLXRvLWJhbmsvc2VuZC10by1iYW5rLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQ0FSO0FESUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtBQ0hSO0FES1E7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FDSFo7QURNUTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNKWjtBRFVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDUEo7QURVUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLHdCQUFBO0FDVFo7QURXWTtFQUNJLGdCQUFBO0FDVGhCO0FEWVk7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0FDVmhCO0FEY2dCO0VBQ0ksZ0JBQUE7QUNacEI7QURvQkE7RUFDSSxrQ0FBQTtBQ2pCSiIsImZpbGUiOiJzcmMvYXBwL3NlbmQtdG8tYmFuay9zZW5kLXRvLWJhbmsucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAwcHgpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuXG4gICAgLmJhbm5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogOTk7XG5cbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi5mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgcGFkZGluZzogMDtcblxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcblxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjhweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5pb24tZm9vdGVyIHtcbiAgICAtLWFuaW1hdGUtZHVyYXRpb246IC40cyAhaW1wb3J0YW50O1xufSIsImlvbi1oZWFkZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAwcHgpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWhlYWRlciAuYmFubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbiAgcGFkZGluZzogMjBweCAyMHB4O1xufVxuaW9uLWhlYWRlciAuYmFubmVyIGgyIHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xufVxuaW9uLWhlYWRlciAuYmFubmVyIGgxIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIuMXJlbTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG4uZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHBhZGRpbmc6IDA7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1jYXJkOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQgaDIge1xuICBtYXJnaW46IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjhweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQgaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmlvbi1mb290ZXIge1xuICAtLWFuaW1hdGUtZHVyYXRpb246IC40cyAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/send-to-bank/send-to-bank.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/send-to-bank/send-to-bank.page.ts ***!
    \***************************************************/

  /*! exports provided: SendToBankPage */

  /***/
  function srcAppSendToBankSendToBankPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendToBankPage", function () {
      return SendToBankPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SendToBankPage = /*#__PURE__*/function () {
      function SendToBankPage() {
        _classCallCheck(this, SendToBankPage);
      }

      _createClass(SendToBankPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SendToBankPage;
    }();

    SendToBankPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-send-to-bank',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./send-to-bank.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/send-to-bank/send-to-bank.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./send-to-bank.page.scss */
      "./src/app/send-to-bank/send-to-bank.page.scss"))["default"]]
    })], SendToBankPage);
    /***/
  }
}]);
//# sourceMappingURL=send-to-bank-send-to-bank-module-es5.js.map