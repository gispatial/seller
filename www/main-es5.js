function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app [dir]=\"rtlSide\">\n    <ion-router-outlet></ion-router-outlet>\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vt-popup/vt-popup.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vt-popup/vt-popup.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVtPopupVtPopupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n    <div class=\"cloes_btn ion-text-end\">\n        <ion-icon name=\"close-outline\" (click)=\"dismiss()\"></ion-icon>\n    </div>\n\n    <ion-card>\n        <div class=\"img_box\">\n            <img src=\"https://opuslabs.nyc3.digitaloceanspaces.com/AAFixItems/Other/popup_img_head.png\">\n        </div>\n\n        <div class=\"text_box\">\n            <h2>Stay in touch.</h2>\n            <p>Stay connected for Future <br>updates and new products.</p>\n        </div>\n        <ion-list lines=\"none\">\n\n            <ion-item lines=\"none\">\n                <ion-input type=\"email\" placeholder=\"Enter your email address\" [(ngModel)]=\"email_Id\"></ion-input>\n            </ion-item>\n\n            <ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"onSubscribe()\">\n                Subscribe Now\n            </ion-button>\n\n        </ion-list>\n    </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: '',
      redirectTo: '/phone-number',
      pathMatch: 'full'
    }, {
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      path: 'phone-number',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | phone-number-phone-number-module */
        "phone-number-phone-number-module").then(__webpack_require__.bind(null,
        /*! ./phone-number/phone-number.module */
        "./src/app/phone-number/phone-number.module.ts")).then(function (m) {
          return m.PhoneNumberPageModule;
        });
      }
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | register-register-module */
        "register-register-module").then(__webpack_require__.bind(null,
        /*! ./register/register.module */
        "./src/app/register/register.module.ts")).then(function (m) {
          return m.RegisterPageModule;
        });
      }
    }, {
      path: 'verification',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | verification-verification-module */
        "verification-verification-module").then(__webpack_require__.bind(null,
        /*! ./verification/verification.module */
        "./src/app/verification/verification.module.ts")).then(function (m) {
          return m.VerificationPageModule;
        });
      }
    }, {
      path: 'my-orders',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | my-orders-my-orders-module */
        "my-orders-my-orders-module").then(__webpack_require__.bind(null,
        /*! ./my-orders/my-orders.module */
        "./src/app/my-orders/my-orders.module.ts")).then(function (m) {
          return m.MyOrdersPageModule;
        });
      }
    }, {
      path: 'order-info',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | order-info-order-info-module */
        [__webpack_require__.e("default~chat-customer-chat-customer-module~order-info-order-info-module"), __webpack_require__.e("order-info-order-info-module")]).then(__webpack_require__.bind(null,
        /*! ./order-info/order-info.module */
        "./src/app/order-info/order-info.module.ts")).then(function (m) {
          return m.OrderInfoPageModule;
        });
      }
    }, {
      path: 'chat-customer',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | chat-customer-chat-customer-module */
        [__webpack_require__.e("default~chat-customer-chat-customer-module~order-info-order-info-module"), __webpack_require__.e("chat-customer-chat-customer-module")]).then(__webpack_require__.bind(null,
        /*! ./chat-customer/chat-customer.module */
        "./src/app/chat-customer/chat-customer.module.ts")).then(function (m) {
          return m.ChatCustomerPageModule;
        });
      }
    }, {
      path: 'items',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | items-items-module */
        "items-items-module").then(__webpack_require__.bind(null,
        /*! ./items/items.module */
        "./src/app/items/items.module.ts")).then(function (m) {
          return m.ItemsPageModule;
        });
      }
    }, {
      path: 'add-product',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | add-product-add-product-module */
        "add-product-add-product-module").then(__webpack_require__.bind(null,
        /*! ./add-product/add-product.module */
        "./src/app/add-product/add-product.module.ts")).then(function (m) {
          return m.AddProductPageModule;
        });
      }
    }, {
      path: 'edit-product',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | edit-product-edit-product-module */
        "edit-product-edit-product-module").then(__webpack_require__.bind(null,
        /*! ./edit-product/edit-product.module */
        "./src/app/edit-product/edit-product.module.ts")).then(function (m) {
          return m.EditProductPageModule;
        });
      }
    }, {
      path: 'my-account',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | my-account-my-account-module */
        [__webpack_require__.e("common"), __webpack_require__.e("my-account-my-account-module")]).then(__webpack_require__.bind(null,
        /*! ./my-account/my-account.module */
        "./src/app/my-account/my-account.module.ts")).then(function (m) {
          return m.MyAccountPageModule;
        });
      }
    }, {
      path: 'store-profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | store-profile-store-profile-module */
        "store-profile-store-profile-module").then(__webpack_require__.bind(null,
        /*! ./store-profile/store-profile.module */
        "./src/app/store-profile/store-profile.module.ts")).then(function (m) {
          return m.StoreProfilePageModule;
        });
      }
    }, {
      path: 'set-location',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | set-location-set-location-module */
        "set-location-set-location-module").then(__webpack_require__.bind(null,
        /*! ./set-location/set-location.module */
        "./src/app/set-location/set-location.module.ts")).then(function (m) {
          return m.SetLocationPageModule;
        });
      }
    }, {
      path: 'insight',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | insight-insight-module */
        "insight-insight-module").then(__webpack_require__.bind(null,
        /*! ./insight/insight.module */
        "./src/app/insight/insight.module.ts")).then(function (m) {
          return m.InsightPageModule;
        });
      }
    }, {
      path: 'wallet',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | wallet-wallet-module */
        "wallet-wallet-module").then(__webpack_require__.bind(null,
        /*! ./wallet/wallet.module */
        "./src/app/wallet/wallet.module.ts")).then(function (m) {
          return m.WalletPageModule;
        });
      }
    }, {
      path: 'send-to-bank',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | send-to-bank-send-to-bank-module */
        "send-to-bank-send-to-bank-module").then(__webpack_require__.bind(null,
        /*! ./send-to-bank/send-to-bank.module */
        "./src/app/send-to-bank/send-to-bank.module.ts")).then(function (m) {
          return m.SendToBankPageModule;
        });
      }
    }, {
      path: 'support',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | support-support-module */
        "support-support-module").then(__webpack_require__.bind(null,
        /*! ./support/support.module */
        "./src/app/support/support.module.ts")).then(function (m) {
          return m.SupportPageModule;
        });
      }
    }, {
      path: 'terms-conditions',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | terms-conditions-terms-conditions-module */
        "terms-conditions-terms-conditions-module").then(__webpack_require__.bind(null,
        /*! ./terms-conditions/terms-conditions.module */
        "./src/app/terms-conditions/terms-conditions.module.ts")).then(function (m) {
          return m.TermsConditionsPageModule;
        });
      }
    }, {
      path: 'buyappalert',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | buyappalert-buyappalert-module */
        [__webpack_require__.e("common"), __webpack_require__.e("buyappalert-buyappalert-module")]).then(__webpack_require__.bind(null,
        /*! ./buyappalert/buyappalert.module */
        "./src/app/buyappalert/buyappalert.module.ts")).then(function (m) {
          return m.BuyappalertPageModule;
        });
      }
    }, {
      path: 'reviews',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reviews-reviews-module */
        "reviews-reviews-module").then(__webpack_require__.bind(null,
        /*! ./reviews/reviews.module */
        "./src/app/reviews/reviews.module.ts")).then(function (m) {
          return m.ReviewsPageModule;
        });
      }
    }, {
      path: 'settings',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | settings-settings-module */
        "settings-settings-module").then(__webpack_require__.bind(null,
        /*! ./settings/settings.module */
        "./src/app/settings/settings.module.ts")).then(function (m) {
          return m.SettingsPageModule;
        });
      }
    }, {
      path: 'vt-popup',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | vt-popup-vt-popup-module */
        "vt-popup-vt-popup-module").then(__webpack_require__.bind(null,
        /*! ./vt-popup/vt-popup.module */
        "./src/app/vt-popup/vt-popup.module.ts")).then(function (m) {
          return m.VtPopupPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Italic.woff2') format(\"woff2\"), url('GoogleSans-Italic.woff') format(\"woff\");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Regular.woff2') format(\"woff2\"), url('GoogleSans-Regular.woff') format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-BoldItalic.woff2') format(\"woff2\"), url('GoogleSans-BoldItalic.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Bold.woff2') format(\"woff2\"), url('GoogleSans-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-MediumItalic.woff2') format(\"woff2\"), url('GoogleSans-MediumItalic.woff') format(\"woff\");\n  font-weight: 500;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Medium.woff2') format(\"woff2\"), url('GoogleSans-Medium.woff') format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n}\n*,\nbody,\nhtml,\np,\nspan,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nstrong,\nli {\n  --ion-font-family: \"Google Sans\";\n  font-family: \"Google Sans\";\n}\n.zmdi {\n  font: normal normal normal 14px/1 \"Material-Design-Iconic-Font\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcm9jc2x1dC9EZXNrdG9wL0dpdC9pb25pYy1kZWx5dmEvZGVsaXZvby1zZWxsZXItaW9uaWM1LW1hc3Rlci9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0ksMEJBQUE7RUFDQSxpR0FBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBTDtBREdDO0VBQ0ksMEJBQUE7RUFDQSxtR0FBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUNGTDtBREtDO0VBQ0ksMEJBQUE7RUFDQSx5R0FBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUNKTDtBRE9DO0VBQ0ksMEJBQUE7RUFDQSw2RkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUNOTDtBRFNDO0VBQ0ksMEJBQUE7RUFDQSw2R0FBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QUNSTDtBRFdDO0VBQ0ksMEJBQUE7RUFDQSxpR0FBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QUNWTDtBRGVDOzs7Ozs7Ozs7Ozs7O0VBYUksZ0NBQUE7RUFDQSwwQkFBQTtBQ2JMO0FEZ0JDO0VBQ0ksK0RBQUE7QUNiTCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiBAZm9udC1mYWNlIHtcbiAgICAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgIHVybCgnLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1JdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gfVxuXG4gQGZvbnQtZmFjZSB7XG4gICAgIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgdXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gfVxuXG4gQGZvbnQtZmFjZSB7XG4gICAgIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1Cb2xkSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgdXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUJvbGRJdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuIH1cblxuIEBmb250LWZhY2Uge1xuICAgICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiAgICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgIHVybCgnLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiB9XG5cbiBAZm9udC1mYWNlIHtcbiAgICAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLU1lZGl1bUl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgIHVybCgnLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1NZWRpdW1JdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gfVxuXG4gQGZvbnQtZmFjZSB7XG4gICAgIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1NZWRpdW0ud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICB1cmwoJy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtTWVkaXVtLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuIH1cblxuXG5cbiAqLFxuIGJvZHksXG4gaHRtbCxcbiBwLFxuIHNwYW4sXG4gaDEsXG4gaDIsXG4gaDMsXG4gaDQsXG4gaDUsXG4gaDYsXG4gc3Ryb25nLFxuIGxpIHtcbiAgICAgLS1pb24tZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gICAgIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuIH1cblxuIC56bWRpIHtcbiAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xICdNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnQnO1xuIH0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIjtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUl0YWxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1JdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIjtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtQm9sZEl0YWxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1Cb2xkSXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtTWVkaXVtSXRhbGljLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLU1lZGl1bUl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtTWVkaXVtLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLU1lZGl1bS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbiosXG5ib2R5LFxuaHRtbCxcbnAsXG5zcGFuLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuc3Ryb25nLFxubGkge1xuICAtLWlvbi1mb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiO1xuICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiO1xufVxuXG4uem1kaSB7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBcIk1hdGVyaWFsLURlc2lnbi1JY29uaWMtRm9udFwiO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.config */
    "./src/app/app.config.ts");
    /* harmony import */


    var src_services_myevent_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/services/myevent.services */
    "./src/services/myevent.services.ts");
    /* harmony import */


    var src_models_contants_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/models/contants.models */
    "./src/models/contants.models.ts");
    /* harmony import */


    var _vt_popup_vt_popup_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./vt-popup/vt-popup.page */
    "./src/app/vt-popup/vt-popup.page.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(config, platform, navCtrl, splashScreen, statusBar, modalController, translate, myEvent) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.config = config;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.modalController = modalController;
        this.translate = translate;
        this.myEvent = myEvent;
        this.rtlSide = "left";
        this.initializeApp();
        this.myEvent.getLanguageObservable().subscribe(function (value) {
          _this.navCtrl.navigateRoot(["./"]);

          _this.globalize(value);
        });
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this2 = this;

          this.platform.ready().then(function () {
            _this2.statusBar.styleDefault();

            _this2.splashScreen.hide();

            var defaultLang = window.localStorage.getItem(src_models_contants_models__WEBPACK_IMPORTED_MODULE_8__["Constants"].KEY_DEFAULT_LANGUAGE);

            _this2.globalize(defaultLang);
          });
        }
      }, {
        key: "globalize",
        value: function globalize(languagePriority) {
          this.translate.setDefaultLang("en");
          var defaultLangCode = this.config.availableLanguages[0].code;
          this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
          this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
        }
      }, {
        key: "setDirectionAccordingly",
        value: function setDirectionAccordingly(lang) {
          switch (lang) {
            case "ar":
              {
                this.rtlSide = "rtl";
                break;
              }

            default:
              {
                this.rtlSide = "ltr";
                break;
              }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          if (this.config.demoMode) {
            setTimeout(function () {
              _this3.presentModal();
            }, 15000);
          }

          var path = window.location.pathname.split("folder/")[1];

          if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(function (page) {
              return page.title.toLowerCase() === path.toLowerCase();
            });
          }
        }
      }, {
        key: "presentModal",
        value: function presentModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _vt_popup_vt_popup_page__WEBPACK_IMPORTED_MODULE_9__["VtPopupPage"]
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_app_config__WEBPACK_IMPORTED_MODULE_6__["APP_CONFIG"]]
        }]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: src_services_myevent_services__WEBPACK_IMPORTED_MODULE_7__["MyEvent"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_6__["APP_CONFIG"]))], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.config.ts":
  /*!*******************************!*\
    !*** ./src/app/app.config.ts ***!
    \*******************************/

  /*! exports provided: APP_CONFIG, BaseAppConfig */

  /***/
  function srcAppAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APP_CONFIG", function () {
      return APP_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseAppConfig", function () {
      return BaseAppConfig;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var APP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("app.config");
    var BaseAppConfig = {
      availableLanguages: [{
        code: 'en',
        name: 'English'
      }, {
        code: 'ar',
        name: 'Arabic'
      }, {
        code: 'es',
        name: 'Spanish'
      }, {
        code: 'fr',
        name: 'French'
      }, {
        code: 'id',
        name: 'Indonesian'
      }, {
        code: 'pt',
        name: 'Portuguese'
      }, {
        code: 'tr',
        name: 'Turkish'
      }, {
        code: 'it',
        name: 'Italian'
      }, {
        code: 'sw',
        name: 'Swahili'
      }],
      demoMode: true
    };
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: HttpLoaderFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app.config */
    "./src/app/app.config.ts");

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http);
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
        }
      })],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _app_config__WEBPACK_IMPORTED_MODULE_12__["APP_CONFIG"],
        useValue: _app_config__WEBPACK_IMPORTED_MODULE_12__["BaseAppConfig"]
      }, {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/vt-popup/vt-popup.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/vt-popup/vt-popup.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppVtPopupVtPopupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: rgba(0, 0, 0, 0.66) !important;\n}\n\n.cloes_btn {\n  padding: 25px;\n}\n\n.cloes_btn ion-icon {\n  color: #fff;\n  font-size: 1.7rem;\n  font-weight: 600;\n}\n\nion-card {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: calc(100% - 53px);\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 0;\n  background: none;\n  overflow: hidden;\n  box-shadow: none;\n  padding: 0 0 3px 0;\n}\n\nion-card::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 113px);\n  background: #fff;\n  border-radius: 5px;\n}\n\nion-card .img_box {\n  position: relative;\n  z-index: 99;\n  margin: auto;\n  width: 100%;\n  max-width: 275px;\n  min-height: 275px;\n}\n\nion-card .img_box img {\n  display: block;\n  margin: 0 auto;\n}\n\nion-card .text_box {\n  position: relative;\n  z-index: 99;\n  width: 100%;\n  padding: 0 25px;\n  top: -23px;\n}\n\nion-card .text_box h2 {\n  font-size: 2rem;\n  font-weight: 600;\n  color: #000;\n  margin: 0;\n  letter-spacing: 0;\n  padding-bottom: 18px;\n}\n\nion-card .text_box p {\n  margin: 0;\n  font-size: 1.1rem;\n  line-height: 19px;\n  color: #000;\n  font-weight: 400;\n  letter-spacing: 0;\n}\n\nion-card ion-list {\n  position: relative;\n  z-index: 99;\n  margin: 0;\n  padding: 0 25px;\n  padding-bottom: 25px;\n}\n\nion-card ion-list ion-item {\n  background: #f5f5f5;\n  padding: 0 17px;\n  width: calc(100% - 0px);\n  min-height: unset !important;\n  margin: 0 auto;\n  --background: none;\n  align-items: flex-start;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --ripple-color: var(--transparent) !important;\n  --background-focused: var(--transparent) !important;\n  margin-bottom: 20px;\n  border-radius: 5px;\n}\n\nion-card ion-list ion-item ion-input {\n  font-size: 0.95rem !important;\n  font-weight: 500 !important;\n  color: #000;\n  --padding-start: 0 !important;\n  --padding-end: 0 !important;\n  --padding-top: 0 !important;\n  --padding-bottom: 0px !important;\n  --placeholder-color: #b3b3b3 !important;\n  --placeholder-opacity: 1;\n  --placeholder-font-weight: 400 !important;\n  --padding: 0 !important;\n  min-height: 45px;\n}\n\nion-card ion-list button[ion-button] {\n  margin: 0;\n  background: linear-gradient(180deg, #f5839d 0%, #ee2d5a 70%);\n  height: 46px;\n  border-radius: 5px;\n  text-transform: unset;\n  font-size: 1.4rem;\n  box-shadow: 0 12px 18px -1px rgba(238, 45, 90, 0.34);\n}\n\nion-card ion-list .button.btn {\n  width: 100%;\n  font-size: 0.95rem;\n  font-weight: 400;\n  letter-spacing: 0.53px !important;\n  height: 46px;\n  --background: linear-gradient(180deg, #f5839d 0%, #ee2d5a 70%);\n  color: #fff;\n  margin: 0;\n  text-transform: unset !important;\n  --box-shadow: 0 12px 18px -1px rgba(238, 45, 90, 0.34);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcm9jc2x1dC9EZXNrdG9wL0dpdC9pb25pYy1kZWx5dmEvZGVsaXZvby1zZWxsZXItaW9uaWM1LW1hc3Rlci9zcmMvYXBwL3Z0LXBvcHVwL3Z0LXBvcHVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdnQtcG9wdXAvdnQtcG9wdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNENBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURBSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDRVI7O0FERUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNFUjs7QURBSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0VSOztBRERRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUNHWjs7QURBSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0VSOztBRERRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDR1o7O0FERFE7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDR1o7O0FEQUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDRVI7O0FERFE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNHWjs7QURGWTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1Q0FBQTtFQUNBLHdCQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDSWhCOztBREFZO0VBQ0ksU0FBQTtFQUNBLDREQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9EQUFBO0FDRWhCOztBREVZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSw4REFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzREFBQTtBQ0FoQiIsImZpbGUiOiJzcmMvYXBwL3Z0LXBvcHVwL3Z0LXBvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42NikgIWltcG9ydGFudDtcbn1cblxuLmNsb2VzX2J0biB7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG59XG5cbmlvbi1jYXJkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNTNweCk7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHBhZGRpbmc6IDAgMCAzcHggMDtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTEzcHgpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIC5pbWdfYm94IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAyNzVweDtcbiAgICAgICAgbWluLWhlaWdodDogMjc1cHg7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRleHRfYm94IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgICAgICAgdG9wOiAtMjNweDtcbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMThweDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24tbGlzdCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMCAyNXB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTdweDtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAwcHgpO1xuICAgICAgICAgICAgbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLXJpcHBsZS1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjYjNiM2IzICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICZbaW9uLWJ1dHRvbl0ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZjU4MzlkIDAlLCAjZWUyZDVhIDcwJSk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMnB4IDE4cHggLTFweCByZ2JhKDIzOCwgNDUsIDkwLCAwLjM0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICAgICYuYnRuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41M3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2Y1ODM5ZCAwJSwgI2VlMmQ1YSA3MCUpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLWJveC1zaGFkb3c6IDAgMTJweCAxOHB4IC0xcHggcmdiYSgyMzgsIDQ1LCA5MCwgMC4zNCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42NikgIWltcG9ydGFudDtcbn1cblxuLmNsb2VzX2J0biB7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG4uY2xvZXNfYnRuIGlvbi1pY29uIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5pb24tY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1M3B4KTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZzogMCAwIDNweCAwO1xufVxuaW9uLWNhcmQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMTNweCk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmlvbi1jYXJkIC5pbWdfYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAyNzVweDtcbiAgbWluLWhlaWdodDogMjc1cHg7XG59XG5pb24tY2FyZCAuaW1nX2JveCBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5pb24tY2FyZCAudGV4dF9ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAyNXB4O1xuICB0b3A6IC0yM3B4O1xufVxuaW9uLWNhcmQgLnRleHRfYm94IGgyIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luOiAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgcGFkZGluZy1ib3R0b206IDE4cHg7XG59XG5pb24tY2FyZCAudGV4dF9ib3ggcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5pb24tY2FyZCBpb24tbGlzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAyNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbn1cbmlvbi1jYXJkIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgcGFkZGluZzogMCAxN3B4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMHB4KTtcbiAgbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAtLXJpcHBsZS1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuaW9uLWNhcmQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgZm9udC1zaXplOiAwLjk1cmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDA7XG4gIC0tcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctZW5kOiAwICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICNiM2IzYjMgIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDQ1cHg7XG59XG5pb24tY2FyZCBpb24tbGlzdCBidXR0b25baW9uLWJ1dHRvbl0ge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmNTgzOWQgMCUsICNlZTJkNWEgNzAlKTtcbiAgaGVpZ2h0OiA0NnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1bnNldDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGJveC1zaGFkb3c6IDAgMTJweCAxOHB4IC0xcHggcmdiYSgyMzgsIDQ1LCA5MCwgMC4zNCk7XG59XG5pb24tY2FyZCBpb24tbGlzdCAuYnV0dG9uLmJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjUzcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NnB4O1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmNTgzOWQgMCUsICNlZTJkNWEgNzAlKTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tYm94LXNoYWRvdzogMCAxMnB4IDE4cHggLTFweCByZ2JhKDIzOCwgNDUsIDkwLCAwLjM0KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/vt-popup/vt-popup.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/vt-popup/vt-popup.page.ts ***!
    \*******************************************/

  /*! exports provided: VtPopupPage */

  /***/
  function srcAppVtPopupVtPopupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VtPopupPage", function () {
      return VtPopupPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var VtPopupPage = /*#__PURE__*/function () {
      function VtPopupPage(navCtrl, modalCtrl, modalController, http, toastController, loadingController) {
        _classCallCheck(this, VtPopupPage);

        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.modalController = modalController;
        this.http = http;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.email_Id = '';
      }

      _createClass(VtPopupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalController.dismiss();
        }
      }, {
        key: "onSubscribe",
        value: function onSubscribe() {
          var _this4 = this;

          var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

          if (this.email_Id.length <= 5 || !reg.test(this.email_Id)) {
            return this.presentToast('Please provide your Email.');
          }

          this.presentLoading('Sending...');
          var req = {
            "email": this.email_Id,
            "source": "opus_application_delivoo"
          };
          this.http.post("https://dashboard.vtlabs.dev/api/subscribe", req).subscribe(function (res) {
            _this4.presentToast('Submitted successfully.');

            _this4.modalController.dismiss();

            _this4.dismissLoading();
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast(body, position, duration) {
          this.toastController.create({
            message: body,
            duration: duration && duration > 0 ? duration : 2000,
            position: position && (position == "top" || position == "middle") ? position : 'bottom'
          }).then(function (toast) {
            return toast.present();
          });
        }
      }, {
        key: "presentLoading",
        value: function presentLoading(body) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.isLoading = true;
                    _context2.next = 3;
                    return this.loadingController.create({
                      message: body
                    }).then(function (overlay) {
                      overlay.present().then(function () {
                        if (!_this5.isLoading) {
                          try {
                            overlay.dismiss().then(function () {
                              return console.log('loading aborted');
                            });
                          } catch (error) {
                            console.log(error);
                          }
                        }
                      });
                    });

                  case 3:
                    return _context2.abrupt("return", _context2.sent);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "dismissLoading",
        value: function dismissLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.isLoading = false;
                    _context3.prev = 1;
                    _context3.next = 4;
                    return this.loadingController.dismiss();

                  case 4:
                    return _context3.abrupt("return", _context3.sent);

                  case 7:
                    _context3.prev = 7;
                    _context3.t0 = _context3["catch"](1);
                    console.log(_context3.t0);
                    return _context3.abrupt("return", null);

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[1, 7]]);
          }));
        }
      }]);

      return VtPopupPage;
    }();

    VtPopupPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    VtPopupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-vt-popup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./vt-popup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vt-popup/vt-popup.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./vt-popup.page.scss */
      "./src/app/vt-popup/vt-popup.page.scss"))["default"]]
    })], VtPopupPage);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  "./src/models/contants.models.ts":
  /*!***************************************!*\
    !*** ./src/models/contants.models.ts ***!
    \***************************************/

  /*! exports provided: Constants */

  /***/
  function srcModelsContantsModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Constants", function () {
      return Constants;
    });

    var Constants = function Constants() {
      _classCallCheck(this, Constants);
    };

    Constants.KEY_DEFAULT_LANGUAGE = 'ob_dl';
    /***/
  },

  /***/
  "./src/services/myevent.services.ts":
  /*!******************************************!*\
    !*** ./src/services/myevent.services.ts ***!
    \******************************************/

  /*! exports provided: MyEvent */

  /***/
  function srcServicesMyeventServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyEvent", function () {
      return MyEvent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"); // For rxjs 6


    var MyEvent = /*#__PURE__*/function () {
      function MyEvent() {
        _classCallCheck(this, MyEvent);

        this.selectedLanguage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(MyEvent, [{
        key: "getLanguageObservable",
        value: function getLanguageObservable() {
          return this.selectedLanguage.asObservable();
        }
      }, {
        key: "setLanguageData",
        value: function setLanguageData(data) {
          this.selectedLanguage.next(data);
        }
      }]);

      return MyEvent;
    }();

    MyEvent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MyEvent);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/crocslut/Desktop/Git/ionic-delyva/delivoo-seller-ionic5-master/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map