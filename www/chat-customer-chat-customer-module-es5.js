function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-customer-chat-customer-module"], {
  /***/
  "./src/app/chat-customer/chat-customer-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/chat-customer/chat-customer-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: ChatCustomerPageRoutingModule */

  /***/
  function srcAppChatCustomerChatCustomerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatCustomerPageRoutingModule", function () {
      return ChatCustomerPageRoutingModule;
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


    var _chat_customer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat-customer.page */
    "./src/app/chat-customer/chat-customer.page.ts");

    var routes = [{
      path: '',
      component: _chat_customer_page__WEBPACK_IMPORTED_MODULE_3__["ChatCustomerPage"]
    }];

    var ChatCustomerPageRoutingModule = function ChatCustomerPageRoutingModule() {
      _classCallCheck(this, ChatCustomerPageRoutingModule);
    };

    ChatCustomerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChatCustomerPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/chat-customer/chat-customer.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/chat-customer/chat-customer.module.ts ***!
    \*******************************************************/

  /*! exports provided: ChatCustomerPageModule */

  /***/
  function srcAppChatCustomerChatCustomerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatCustomerPageModule", function () {
      return ChatCustomerPageModule;
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


    var _chat_customer_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat-customer-routing.module */
    "./src/app/chat-customer/chat-customer-routing.module.ts");
    /* harmony import */


    var _chat_customer_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./chat-customer.page */
    "./src/app/chat-customer/chat-customer.page.ts");

    var ChatCustomerPageModule = function ChatCustomerPageModule() {
      _classCallCheck(this, ChatCustomerPageModule);
    };

    ChatCustomerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _chat_customer_routing_module__WEBPACK_IMPORTED_MODULE_6__["ChatCustomerPageRoutingModule"]],
      declarations: [_chat_customer_page__WEBPACK_IMPORTED_MODULE_7__["ChatCustomerPage"]]
    })], ChatCustomerPageModule);
    /***/
  }
}]);
//# sourceMappingURL=chat-customer-chat-customer-module-es5.js.map