function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            {{'register' | translate}}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n    <div class=\"form\">\n        <ion-list lines=\"none\">\n            <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item_inner d-flex\">\n                    <div class=\"icon_box ion-text-start\"><img src=\"assets/images/ic_name.png\"></div>\n                    <div class=\"input_box\">\n                        <ion-label mode=\"md\" position=\"stacked\">{{\"full_name\" | translate}}</ion-label>\n                        <ion-input mode=\"md\" type=\"name\" placeholder=\"\" value=\"Samantha Smith\"></ion-input>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item_inner d-flex\">\n                    <div class=\"icon_box ion-text-start\"><img src=\"assets/images/ic_mail.png\"></div>\n                    <div class=\"input_box\">\n                        <ion-label mode=\"md\" position=\"stacked\">{{\"email_address\" | translate}}</ion-label>\n                        <ion-input mode=\"md\" type=\"email\" placeholder=\"\" value=\"samanthasmithn@mail.com\"></ion-input>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item_inner d-flex\">\n                    <div class=\"icon_box ion-text-start\"><img src=\"assets/images/ic_phone.png\"></div>\n                    <div class=\"input_box\">\n                        <ion-label mode=\"md\" position=\"stacked\">{{\"phone_number\" | translate}}</ion-label>\n                        <ion-input mode=\"md\" type=\"text\" placeholder=\"\" value=\"+1 987 654 3210\"></ion-input>\n                    </div>\n                </div>\n            </ion-item> \n\n            <p class=\"d-flex animate__animated animate__fadeInUp\"><span class=\"end\">{{\"we_ll_send_verification_code_on_adove_given_number\" | translate}}</span></p>\n        </ion-list>\n    </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\n    <ion-button size=\"large\" expand=\"full\" class=\"btn\" (click)=\"verification()\">{{'continue' | translate}}</ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/register/register-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/register/register-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: RegisterPageRoutingModule */

  /***/
  function srcAppRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
      return RegisterPageRoutingModule;
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


    var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/register/register.page.ts");

    var routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }];

    var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
      _classCallCheck(this, RegisterPageRoutingModule);
    };

    RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/register/register.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/register/register.module.ts ***!
    \*********************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
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


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/register/register-routing.module.ts");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/register/register.page.ts");

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_6__["RegisterPageRoutingModule"]],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_7__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/register/register.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/register/register.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form {\n  border-top: 6px solid var(--bg-color);\n  padding-top: 34px;\n}\n.form ion-list ion-item:last-of-type {\n  margin-bottom: 15px !important;\n}\n.form p {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.7rem;\n  letter-spacing: 0.5px;\n  font-weight: 400;\n}\n.form p span {\n  width: calc(100% - 35px);\n}\n.animate__animated.animate__fadeInUp:nth-child(1) {\n  --animate-duration: .15s;\n}\n.animate__animated.animate__fadeInUp:nth-child(2) {\n  --animate-duration: .2s;\n}\n.animate__animated.animate__fadeInUp:nth-child(3) {\n  --animate-duration: .25s;\n}\n.animate__animated.animate__fadeInUp:nth-child(4) {\n  --animate-duration: .3s;\n}\n.animate__animated.animate__fadeInUp:nth-child(5) {\n  --animate-duration: .35s;\n}\n.animate__animated.animate__fadeInUp:nth-child(6) {\n  --animate-duration: .4s;\n}\n.animate__animated.animate__fadeInUp:nth-child(7) {\n  --animate-duration: .45s;\n}\n.animate__animated.animate__fadeInUp:nth-child(8) {\n  --animate-duration: .5s;\n}\nion-footer {\n  --animate-duration: .4s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcm9jc2x1dC9EZXNrdG9wL0dpdC9pb25pYy1kZWx5dmEvZGVsaXZvby1zZWxsZXItaW9uaWM1LW1hc3Rlci9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUNBQUE7RUFDQSxpQkFBQTtBQ0NKO0FER1k7RUFDSSw4QkFBQTtBQ0RoQjtBRE1JO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDSlI7QURNUTtFQUNJLHdCQUFBO0FDSlo7QURVSTtFQUNJLHdCQUFBO0FDUFI7QURVSTtFQUNJLHVCQUFBO0FDUlI7QURXSTtFQUNJLHdCQUFBO0FDVFI7QURZSTtFQUNJLHVCQUFBO0FDVlI7QURhSTtFQUNJLHdCQUFBO0FDWFI7QURjSTtFQUNJLHVCQUFBO0FDWlI7QURlSTtFQUNJLHdCQUFBO0FDYlI7QURnQkk7RUFDSSx1QkFBQTtBQ2RSO0FEbUJBO0VBQ0ksa0NBQUE7QUNoQkoiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XG4gICAgYm9yZGVyLXRvcDogNnB4IHNvbGlkIHZhcigtLWJnLWNvbG9yKTtcbiAgICBwYWRkaW5nLXRvcDogMzRweDtcblxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzVweCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19mYWRlSW5VcCB7XG4gICAgJjpudGgtY2hpbGQoMSkge1xuICAgICAgICAtLWFuaW1hdGUtZHVyYXRpb246IC4xNXM7XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICAtLWFuaW1hdGUtZHVyYXRpb246IC4ycztcbiAgICB9XG5cbiAgICAmOm50aC1jaGlsZCgzKSB7XG4gICAgICAgIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjI1cztcbiAgICB9XG5cbiAgICAmOm50aC1jaGlsZCg0KSB7XG4gICAgICAgIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjNzO1xuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgLS1hbmltYXRlLWR1cmF0aW9uOiAuMzVzO1xuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDYpIHtcbiAgICAgICAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNHM7XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoNykge1xuICAgICAgICAtLWFuaW1hdGUtZHVyYXRpb246IC40NXM7XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoOCkge1xuICAgICAgICAtLWFuaW1hdGUtZHVyYXRpb246IC41cztcbiAgICB9XG5cbn1cblxuaW9uLWZvb3RlciB7XG4gICAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNHMgIWltcG9ydGFudDtcbn0iLCIuZm9ybSB7XG4gIGJvcmRlci10b3A6IDZweCBzb2xpZCB2YXIoLS1iZy1jb2xvcik7XG4gIHBhZGRpbmctdG9wOiAzNHB4O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW06bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xufVxuLmZvcm0gcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmZvcm0gcCBzcGFuIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDM1cHgpO1xufVxuXG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZmFkZUluVXA6bnRoLWNoaWxkKDEpIHtcbiAgLS1hbmltYXRlLWR1cmF0aW9uOiAuMTVzO1xufVxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2ZhZGVJblVwOm50aC1jaGlsZCgyKSB7XG4gIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjJzO1xufVxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2ZhZGVJblVwOm50aC1jaGlsZCgzKSB7XG4gIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjI1cztcbn1cbi5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19mYWRlSW5VcDpudGgtY2hpbGQoNCkge1xuICAtLWFuaW1hdGUtZHVyYXRpb246IC4zcztcbn1cbi5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19mYWRlSW5VcDpudGgtY2hpbGQoNSkge1xuICAtLWFuaW1hdGUtZHVyYXRpb246IC4zNXM7XG59XG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZmFkZUluVXA6bnRoLWNoaWxkKDYpIHtcbiAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNHM7XG59XG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZmFkZUluVXA6bnRoLWNoaWxkKDcpIHtcbiAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNDVzO1xufVxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2ZhZGVJblVwOm50aC1jaGlsZCg4KSB7XG4gIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjVzO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNHMgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/register/register.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/register/register.page.ts ***!
    \*******************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
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

    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(route) {
        _classCallCheck(this, RegisterPage);

        this.route = route;
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "verification",
        value: function verification() {
          this.route.navigate(['./verification']);
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/register/register.page.scss"))["default"]]
    })], RegisterPage);
    /***/
  }
}]);
//# sourceMappingURL=register-register-module-es5.js.map