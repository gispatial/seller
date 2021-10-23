function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n\n    <ion-tab-bar class=\"animate__animated animate__fadeInUp\" slot=\"bottom\">\n        <ion-tab-button tab=\"my_orders\">\n            <div class=\"tab-button\">\n                <div class=\"tab-button-inner\">\n                    <div class=\"icon_box\">\n                        <img src=\"assets/images/ic_orders.png\" class=\"light-them-icon\">\n                        <img src=\"assets/images/ic_ordersact_wt.png\" class=\"dark-them-icon\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"tab-button selected\">\n                <div class=\"tab-button-inner\">\n                    <div class=\"icon_box\">\n                        <img src=\"assets/images/ic_ordersact.png\">\n                    </div>\n                    <h2>{{\"orders\" | translate}}</h2>\n                </div>\n            </div>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"items\">\n            <div class=\"tab-button\">\n                <div class=\"tab-button-inner\">\n                    <div class=\"icon_box\">\n                        <img src=\"assets/images/ic_item.png\" class=\"light-them-icon\">\n                        <img src=\"assets/images/ic_itemact_wt.png\" class=\"dark-them-icon\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"tab-button selected\">\n                <div class=\"tab-button-inner\">\n                    <div class=\"icon_box\">\n                        <img src=\"assets/images/ic_itemact.png\">\n                    </div>\n                    <h2>{{\"products\" | translate}}</h2>\n                </div>\n            </div>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"my_account\">\n            <div class=\"tab-button\">\n                <div class=\"tab-button-inner\">\n                    <div class=\"icon_box\">\n                        <img src=\"assets/images/ic_profile.png\" class=\"light-them-icon\">\n                        <img src=\"assets/images/ic_profileact_wt.png\" class=\"dark-them-icon\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"tab-button selected\">\n                <div class=\"tab-button-inner\">\n                    <div class=\"icon_box\">\n                        <img src=\"assets/images/ic_profileact.png\">\n                    </div>\n                    <h2>{{\"account\" | translate}}</h2>\n                </div>\n            </div>\n        </ion-tab-button>\n    </ion-tab-bar>\n\n</ion-tabs>";
    /***/
  },

  /***/
  "./src/app/tabs/tabs-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tabs/tabs-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
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


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    var routes = [{
      path: 'tabs',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'my_orders',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | my-orders-my-orders-module */
          "my-orders-my-orders-module").then(__webpack_require__.bind(null,
          /*! ../my-orders/my-orders.module */
          "./src/app/my-orders/my-orders.module.ts")).then(function (m) {
            return m.MyOrdersPageModule;
          });
        }
      }, {
        path: 'items',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | items-items-module */
          "items-items-module").then(__webpack_require__.bind(null,
          /*! ../items/items.module */
          "./src/app/items/items.module.ts")).then(function (m) {
            return m.ItemsPageModule;
          });
        }
      }, {
        path: 'my_account',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | my-account-my-account-module */
          [__webpack_require__.e("common"), __webpack_require__.e("my-account-my-account-module")]).then(__webpack_require__.bind(null,
          /*! ../my-account/my-account.module */
          "./src/app/my-account/my-account.module.ts")).then(function (m) {
            return m.MyAccountPageModule;
          });
        }
      }, {
        path: '',
        redirectTo: '/tabs/items',
        pathMatch: 'full'
      }]
    }, {
      path: '',
      redirectTo: '/tabs/items',
      pathMatch: 'full'
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.module.ts ***!
    \*************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs-routing.module */
    "./src/app/tabs/tabs-routing.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_6__["TabsPageRoutingModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-tabs ion-tab-bar {\n  --background: var(--white);\n  --ripple-color: var(--transparent) !important;\n  box-shadow: 0 39px 49px 16px rgba(0, 0, 0, 0.37) !important;\n  --animate-duration: 0.4s !important;\n}\nion-tabs ion-tab-bar ion-tab-button {\n  --ripple-color: var(--transparent) !important;\n  position: relative;\n  overflow: hidden;\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\nion-tabs ion-tab-bar ion-tab-button .tab-button {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 20px);\n  background: var(--white);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: 0.5s;\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n}\nion-tabs ion-tab-bar ion-tab-button .tab-button .tab-button-inner {\n  display: flex;\n  align-items: center;\n  margin: auto;\n}\nion-tabs ion-tab-bar ion-tab-button .tab-button h2 {\n  margin: 0;\n  color: var(--text-black);\n  font-size: 0.75rem;\n  font-weight: 600;\n}\nion-tabs ion-tab-bar ion-tab-button .tab-button .icon_box {\n  width: 25px;\n  margin: auto;\n}\nion-tabs ion-tab-bar ion-tab-button .tab-button .icon_box img.dark-them-icon {\n  display: none;\n}\nion-tabs ion-tab-bar ion-tab-button .tab-button.selected {\n  background: var(--bg-color);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  bottom: -1000%;\n}\nion-tabs ion-tab-bar ion-tab-button .tab-button.selected .icon_box {\n  margin-right: 8px;\n}\nion-tabs ion-tab-bar ion-tab-button.tab-selected .tab-button {\n  top: -1000%;\n}\nion-tabs ion-tab-bar ion-tab-button.tab-selected .tab-button.selected {\n  top: 0;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcm9jc2x1dC9EZXNrdG9wL0dpdC9pb25pYy1kZWx5dmEvZGVsaXZvby1zZWxsZXItaW9uaWM1LW1hc3Rlci9zcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSwwQkFBQTtFQUNBLDZDQUFBO0VBQ0EsMkRBQUE7RUFDQSxtQ0FBQTtBQ0FSO0FERVE7RUFDSSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQVo7QURFWTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNBaEI7QURFZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQXBCO0FER2dCO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0RwQjtBRElnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDRnBCO0FES3dCO0VBQ0ksYUFBQTtBQ0g1QjtBRFFnQjtFQUNJLDJCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGNBQUE7QUNOcEI7QURRb0I7RUFDSSxpQkFBQTtBQ054QjtBRFlnQjtFQUNJLFdBQUE7QUNWcEI7QURZb0I7RUFDSSxNQUFBO0VBQ0EsU0FBQTtBQ1Z4QiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFicyB7XG4gICAgaW9uLXRhYi1iYXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgLS1yaXBwbGUtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgICAgICBib3gtc2hhZG93OiAwIDM5cHggNDlweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4zNykgIWltcG9ydGFudDtcbiAgICAgICAgLS1hbmltYXRlLWR1cmF0aW9uOiAwLjRzICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgaW9uLXRhYi1idXR0b24ge1xuICAgICAgICAgICAgLS1yaXBwbGUtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG5cbiAgICAgICAgICAgIC50YWItYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIC50YWItYnV0dG9uLWlubmVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaWNvbl9ib3gge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAmLmRhcmstdGhlbS1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IC0xMDAwJTtcblxuICAgICAgICAgICAgICAgICAgICAuaWNvbl9ib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYudGFiLXNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICAudGFiLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTEwMDAlO1xuXG4gICAgICAgICAgICAgICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW9uLXRhYnMgaW9uLXRhYi1iYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgLS1yaXBwbGUtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDM5cHggNDlweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4zNykgIWltcG9ydGFudDtcbiAgLS1hbmltYXRlLWR1cmF0aW9uOiAwLjRzICFpbXBvcnRhbnQ7XG59XG5pb24tdGFicyBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbiB7XG4gIC0tcmlwcGxlLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG59XG5pb24tdGFicyBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbiAudGFiLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLXRhYnMgaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24gLnRhYi1idXR0b24gLnRhYi1idXR0b24taW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG59XG5pb24tdGFicyBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbiAudGFiLWJ1dHRvbiBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5pb24tdGFicyBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbiAudGFiLWJ1dHRvbiAuaWNvbl9ib3gge1xuICB3aWR0aDogMjVweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuaW9uLXRhYnMgaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24gLnRhYi1idXR0b24gLmljb25fYm94IGltZy5kYXJrLXRoZW0taWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5pb24tdGFicyBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbiAudGFiLWJ1dHRvbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBib3R0b206IC0xMDAwJTtcbn1cbmlvbi10YWJzIGlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uIC50YWItYnV0dG9uLnNlbGVjdGVkIC5pY29uX2JveCB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuaW9uLXRhYnMgaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIC50YWItYnV0dG9uIHtcbiAgdG9wOiAtMTAwMCU7XG59XG5pb24tdGFicyBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQgLnRhYi1idXR0b24uc2VsZWN0ZWQge1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tabs/tabs.page.ts ***!
    \***********************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TabsPage = function TabsPage() {
      _classCallCheck(this, TabsPage);
    };

    TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/tabs/tabs.page.scss"))["default"]]
    })], TabsPage);
    /***/
  }
}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map