(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buyappalert-buyappalert-module"],{

/***/ "./src/app/buyappalert/buyappalert-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/buyappalert/buyappalert-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: BuyappalertPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyappalertPageRoutingModule", function() { return BuyappalertPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _buyappalert_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buyappalert.page */ "./src/app/buyappalert/buyappalert.page.ts");




const routes = [
    {
        path: '',
        component: _buyappalert_page__WEBPACK_IMPORTED_MODULE_3__["BuyappalertPage"]
    }
];
let BuyappalertPageRoutingModule = class BuyappalertPageRoutingModule {
};
BuyappalertPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BuyappalertPageRoutingModule);



/***/ }),

/***/ "./src/app/buyappalert/buyappalert.module.ts":
/*!***************************************************!*\
  !*** ./src/app/buyappalert/buyappalert.module.ts ***!
  \***************************************************/
/*! exports provided: BuyappalertPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyappalertPageModule", function() { return BuyappalertPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _buyappalert_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buyappalert-routing.module */ "./src/app/buyappalert/buyappalert-routing.module.ts");
/* harmony import */ var _buyappalert_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buyappalert.page */ "./src/app/buyappalert/buyappalert.page.ts");







let BuyappalertPageModule = class BuyappalertPageModule {
};
BuyappalertPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _buyappalert_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuyappalertPageRoutingModule"]
        ],
        declarations: [_buyappalert_page__WEBPACK_IMPORTED_MODULE_6__["BuyappalertPage"]]
    })
], BuyappalertPageModule);



/***/ })

}]);
//# sourceMappingURL=buyappalert-buyappalert-module-es2015.js.map