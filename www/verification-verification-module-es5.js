function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verification-verification-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVerificationVerificationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            {{'verification' | translate}}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n    <div class=\"form animate__animated animate__fadeInUp\">\n        <ion-list lines=\"none\">\n            <h2> {{'enter_verification_code__we_ve_sent_on_given_number' | translate}}.</h2>\n            <ion-item lines=\"none\">\n                <div class=\"item_inner d-flex\">\n<!--                    <div class=\"icon_box ion-text-start\"><img src=\"assets/images/ic_profile.png\"></div>-->\n                    <div class=\"input_box\">\n                        <ion-label mode=\"md\" position=\"stacked\">{{\"enter_verification_code\" | translate}}</ion-label>\n                        <ion-input mode=\"md\" type=\"text\" placeholder=\"\" value=\"578410\"></ion-input>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\n    <h3 class=\"d-flex\">0:20 &nbsp;{{'min' | translate}} <span class=\"end\"> {{'resend' | translate}}</span></h3>\n    <ion-button size=\"large\" expand=\"full\" class=\"btn\" (click)=\"tabs()\">{{'continue' | translate}}</ion-button>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/verification/verification-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/verification/verification-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: VerificationPageRoutingModule */

  /***/
  function srcAppVerificationVerificationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationPageRoutingModule", function () {
      return VerificationPageRoutingModule;
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


    var _verification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./verification.page */
    "./src/app/verification/verification.page.ts");

    var routes = [{
      path: '',
      component: _verification_page__WEBPACK_IMPORTED_MODULE_3__["VerificationPage"]
    }];

    var VerificationPageRoutingModule = function VerificationPageRoutingModule() {
      _classCallCheck(this, VerificationPageRoutingModule);
    };

    VerificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VerificationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/verification/verification.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/verification/verification.module.ts ***!
    \*****************************************************/

  /*! exports provided: VerificationPageModule */

  /***/
  function srcAppVerificationVerificationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationPageModule", function () {
      return VerificationPageModule;
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


    var _verification_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./verification-routing.module */
    "./src/app/verification/verification-routing.module.ts");
    /* harmony import */


    var _verification_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./verification.page */
    "./src/app/verification/verification.page.ts");

    var VerificationPageModule = function VerificationPageModule() {
      _classCallCheck(this, VerificationPageModule);
    };

    VerificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _verification_routing_module__WEBPACK_IMPORTED_MODULE_6__["VerificationPageRoutingModule"]],
      declarations: [_verification_page__WEBPACK_IMPORTED_MODULE_7__["VerificationPage"]]
    })], VerificationPageModule);
    /***/
  },

  /***/
  "./src/app/verification/verification.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/verification/verification.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVerificationVerificationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form {\n  border-top: 6px solid var(--bg-color);\n  padding-top: 34px;\n  --animate-duration: .2s !important;\n}\n.form h2 {\n  margin: 0;\n  font-size: 1.13rem;\n  line-height: 21px;\n  width: calc(100% - 33px);\n  padding-bottom: 45px;\n  font-weight: 600;\n}\n.form ion-list ion-item ion-label {\n  margin-bottom: 14px !important;\n}\n.form ion-list ion-item ion-input {\n  letter-spacing: 4px !important;\n  font-size: 1.1rem !important;\n}\n.form p {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.7rem;\n  letter-spacing: 0.5px;\n  font-weight: 400;\n}\n.form p span {\n  width: calc(100% - 35px);\n}\nion-footer {\n  --animate-duration: .3s !important;\n}\nion-footer h3 {\n  padding: 0 20px;\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  padding-bottom: 16px;\n}\nion-footer h3 span {\n  color: var(--primary);\n  font-weight: 500;\n  letter-spacing: 0.4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcm9jc2x1dC9EZXNrdG9wL0dpdC9pb25pYy1kZWx5dmEvZGVsaXZvby1zZWxsZXItaW9uaWM1LW1hc3Rlci9zcmMvYXBwL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC92ZXJpZmljYXRpb24vdmVyaWZpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtBQ0NKO0FEQ0k7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0NSO0FESVk7RUFDSSw4QkFBQTtBQ0ZoQjtBREtZO0VBQ0ksOEJBQUE7RUFDQSw0QkFBQTtBQ0hoQjtBRFFJO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDTlI7QURRUTtFQUNJLHdCQUFBO0FDTlo7QURXQTtFQUNJLGtDQUFBO0FDUko7QURVSTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDUlI7QURVUTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ1JaIiwiZmlsZSI6InNyYy9hcHAvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XG4gICAgYm9yZGVyLXRvcDogNnB4IHNvbGlkIHZhcigtLWJnLWNvbG9yKTtcbiAgICBwYWRkaW5nLXRvcDogMzRweDtcbiAgICAtLWFuaW1hdGUtZHVyYXRpb246IC4ycyAhaW1wb3J0YW50O1xuXG4gICAgaDIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xM3JlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzM3B4KTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQ1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzVweCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1mb290ZXIge1xuICAgIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjNzICFpbXBvcnRhbnQ7XG5cbiAgICBoMyB7XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC40cHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmZvcm0ge1xuICBib3JkZXItdG9wOiA2cHggc29saWQgdmFyKC0tYmctY29sb3IpO1xuICBwYWRkaW5nLXRvcDogMzRweDtcbiAgLS1hbmltYXRlLWR1cmF0aW9uOiAuMnMgIWltcG9ydGFudDtcbn1cbi5mb3JtIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMTNyZW07XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzNweCk7XG4gIHBhZGRpbmctYm90dG9tOiA0NXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTRweCAhaW1wb3J0YW50O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xufVxuLmZvcm0gcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmZvcm0gcCBzcGFuIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDM1cHgpO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgLS1hbmltYXRlLWR1cmF0aW9uOiAuM3MgIWltcG9ydGFudDtcbn1cbmlvbi1mb290ZXIgaDMge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuaW9uLWZvb3RlciBoMyBzcGFuIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/verification/verification.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/verification/verification.page.ts ***!
    \***************************************************/

  /*! exports provided: VerificationPage */

  /***/
  function srcAppVerificationVerificationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationPage", function () {
      return VerificationPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var VerificationPage = /*#__PURE__*/function () {
      function VerificationPage(navCtrl) {
        _classCallCheck(this, VerificationPage);

        this.navCtrl = navCtrl;
      }

      _createClass(VerificationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "tabs",
        value: function tabs() {
          this.navCtrl.navigateRoot(['./tabs']);
        }
      }]);

      return VerificationPage;
    }();

    VerificationPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    VerificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-verification',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./verification.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./verification.page.scss */
      "./src/app/verification/verification.page.scss"))["default"]]
    })], VerificationPage);
    /***/
  }
}]);
//# sourceMappingURL=verification-verification-module-es5.js.map