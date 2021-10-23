function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-wallet-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWalletWalletPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"bg_transparent\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{'wallet' | translate}}</ion-title>\n    </ion-toolbar>\n    <div class=\"banner\">\n        <h2 class=\"animate__animated animate__fadeInUp\">{{'available_balance' | translate}}</h2>\n        <h1 class=\"animate__animated animate__fadeInUp\">$ 758.50</h1>\n    </div>\n     <ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"send_to_bank()\">{{'send_to_bank' | translate}}</ion-button>\n</ion-header>\n\n\n<ion-content class=\"bg_color\" fullscreen>\n    <ion-list lines=\"none\">\n        <h2>{{'recent' | translate}}</h2>\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 212217</strong></h3>\n                    <p>3 {{'items' | translate}} | 30 Jun 2018, 11:59 am</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$80.00</h3>\n                    <p>Online</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$5.20</h3>\n                    <p>{{'earnings' | translate}} </p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 232313</strong></h3>\n                    <p>2 {{'items' | translate}} | 30 Jun 2018, 09:59 am</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$110.00</h3>\n                    <p>COD</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$5.20</h3>\n                    <p>{{'earnings' | translate}}</p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>Sent to Bank</strong></h3>\n                    <p>2 {{'items' | translate}} | 29 Jun 2018, 09:12 am</p>\n                </ion-col>\n\n                <ion-col size=\"6\" class=\"ion-text-end\">\n                    <h3>-100.00</h3>\n                    <p>Sent to Bank</p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 212114</strong></h3>\n                    <p>3 {{'items' | translate}} | 30 Jun 2018, 11:59 am</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$80.00</h3>\n                    <p>COD</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$6.50</h3>\n                    <p>{{'earnings' | translate}} </p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 212521</strong></h3>\n                    <p>Delivered 3 {{'items' | translate}}</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$110.00</h3>\n                    <p>Order Value</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$68.50</h3>\n                    <p>{{'earnings' | translate}}</p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 212217</strong></h3>\n                    <p>3 {{'items' | translate}} | 30 Jun 2018, 11:59 am</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$80.00</h3>\n                    <p>Online</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$5.20</h3>\n                    <p>{{'earnings' | translate}} </p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 232313</strong></h3>\n                    <p>2 {{'items' | translate}} | 30 Jun 2018, 09:59 am</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$110.00</h3>\n                    <p>COD</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$5.20</h3>\n                    <p>{{'earnings' | translate}}</p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>Sent to Bank</strong></h3>\n                    <p>2 {{'items' | translate}} | 29 Jun 2018, 09:12 am</p>\n                </ion-col>\n\n                <ion-col size=\"6\" class=\"ion-text-end\">\n                    <h3>-100.00</h3>\n                    <p>Sent to Bank</p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 212114</strong></h3>\n                    <p>3 {{'items' | translate}} | 30 Jun 2018, 11:59 am</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$80.00</h3>\n                    <p>COD</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$6.50</h3>\n                    <p>{{'earnings' | translate}} </p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 212521</strong></h3>\n                    <p>Delivered 3 {{'items' | translate}}</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$110.00</h3>\n                    <p>Order Value</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$68.50</h3>\n                    <p>{{'earnings' | translate}}</p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 212217</strong></h3>\n                    <p>3 {{'items' | translate}} | 30 Jun 2018, 11:59 am</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$80.00</h3>\n                    <p>Online</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$5.20</h3>\n                    <p>{{'earnings' | translate}} </p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 232313</strong></h3>\n                    <p>2 {{'items' | translate}} | 30 Jun 2018, 09:59 am</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$110.00</h3>\n                    <p>COD</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$5.20</h3>\n                    <p>{{'earnings' | translate}}</p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>Sent to Bank</strong></h3>\n                    <p>2 {{'items' | translate}} | 29 Jun 2018, 09:12 am</p>\n                </ion-col>\n\n                <ion-col size=\"6\" class=\"ion-text-end\">\n                    <h3>-100.00</h3>\n                    <p>Sent to Bank</p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 212114</strong></h3>\n                    <p>3 {{'items' | translate}} | 30 Jun 2018, 11:59 am</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$80.00</h3>\n                    <p>COD</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$6.50</h3>\n                    <p>{{'earnings' | translate}} </p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 212521</strong></h3>\n                    <p>Delivered 3 {{'items' | translate}}</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$110.00</h3>\n                    <p>Order Value</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$68.50</h3>\n                    <p>{{'earnings' | translate}}</p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 212217</strong></h3>\n                    <p>3 {{'items' | translate}} | 30 Jun 2018, 11:59 am</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$80.00</h3>\n                    <p>Online</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$5.20</h3>\n                    <p>{{'earnings' | translate}} </p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 232313</strong></h3>\n                    <p>2 {{'items' | translate}} | 30 Jun 2018, 09:59 am</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$110.00</h3>\n                    <p>COD</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$5.20</h3>\n                    <p>{{'earnings' | translate}}</p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>Sent to Bank</strong></h3>\n                    <p>2 {{'items' | translate}} | 29 Jun 2018, 09:12 am</p>\n                </ion-col>\n\n                <ion-col size=\"6\" class=\"ion-text-end\">\n                    <h3>-100.00</h3>\n                    <p>Sent to Bank</p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 212114</strong></h3>\n                    <p>3 {{'items' | translate}} | 30 Jun 2018, 11:59 am</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$80.00</h3>\n                    <p>COD</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$6.50</h3>\n                    <p>{{'earnings' | translate}} </p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 212521</strong></h3>\n                    <p>Delivered 3 {{'items' | translate}}</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$110.00</h3>\n                    <p>Order Value</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$68.50</h3>\n                    <p>{{'earnings' | translate}}</p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 212217</strong></h3>\n                    <p>3 {{'items' | translate}} | 30 Jun 2018, 11:59 am</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$80.00</h3>\n                    <p>Online</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$5.20</h3>\n                    <p>{{'earnings' | translate}} </p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 232313</strong></h3>\n                    <p>2 {{'items' | translate}} | 30 Jun 2018, 09:59 am</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$110.00</h3>\n                    <p>COD</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$5.20</h3>\n                    <p>{{'earnings' | translate}}</p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>Sent to Bank</strong></h3>\n                    <p>2 {{'items' | translate}} | 29 Jun 2018, 09:12 am</p>\n                </ion-col>\n\n                <ion-col size=\"6\" class=\"ion-text-end\">\n                    <h3>-100.00</h3>\n                    <p>Sent to Bank</p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 212114</strong></h3>\n                    <p>3 {{'items' | translate}} | 30 Jun 2018, 11:59 am</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$80.00</h3>\n                    <p>COD</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$6.50</h3>\n                    <p>{{'earnings' | translate}} </p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 212521</strong></h3>\n                    <p>Delivered 3 {{'items' | translate}}</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$110.00</h3>\n                    <p>Order Value</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$68.50</h3>\n                    <p>{{'earnings' | translate}}</p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 212217</strong></h3>\n                    <p>3 {{'items' | translate}} | 30 Jun 2018, 11:59 am</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$80.00</h3>\n                    <p>Online</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$5.20</h3>\n                    <p>{{'earnings' | translate}} </p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 232313</strong></h3>\n                    <p>2 {{'items' | translate}} | 30 Jun 2018, 09:59 am</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$110.00</h3>\n                    <p>COD</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$5.20</h3>\n                    <p>{{'earnings' | translate}}</p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>Sent to Bank</strong></h3>\n                    <p>2 {{'items' | translate}} | 29 Jun 2018, 09:12 am</p>\n                </ion-col>\n\n                <ion-col size=\"6\" class=\"ion-text-end\">\n                    <h3>-100.00</h3>\n                    <p>Sent to Bank</p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 212114</strong></h3>\n                    <p>3 {{'items' | translate}} | 30 Jun 2018, 11:59 am</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$80.00</h3>\n                    <p>COD</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$6.50</h3>\n                    <p>{{'earnings' | translate}} </p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 212521</strong></h3>\n                    <p>Delivered 3 {{'items' | translate}}</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$110.00</h3>\n                    <p>Order Value</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$68.50</h3>\n                    <p>{{'earnings' | translate}}</p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 212217</strong></h3>\n                    <p>3 {{'items' | translate}} | 30 Jun 2018, 11:59 am</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$80.00</h3>\n                    <p>Online</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$5.20</h3>\n                    <p>{{'earnings' | translate}} </p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 232313</strong></h3>\n                    <p>2 {{'items' | translate}} | 30 Jun 2018, 09:59 am</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$110.00</h3>\n                    <p>COD</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$5.20</h3>\n                    <p>{{'earnings' | translate}}</p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>Sent to Bank</strong></h3>\n                    <p>2 {{'items' | translate}} | 29 Jun 2018, 09:12 am</p>\n                </ion-col>\n\n                <ion-col size=\"6\" class=\"ion-text-end\">\n                    <h3>-100.00</h3>\n                    <p>Sent to Bank</p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 212114</strong></h3>\n                    <p>3 {{'items' | translate}} | 30 Jun 2018, 11:59 am</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$80.00</h3>\n                    <p>COD</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$6.50</h3>\n                    <p>{{'earnings' | translate}} </p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <h3><strong>{{'order_num' | translate}} 212521</strong></h3>\n                    <p>Delivered 3 {{'items' | translate}}</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$110.00</h3>\n                    <p>Order Value</p>\n                </ion-col>\n\n                <ion-col size=\"3\" class=\"ion-text-end\">\n                    <h3>$68.50</h3>\n                    <p>{{'earnings' | translate}}</p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n    </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/wallet/wallet-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/wallet/wallet-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: WalletPageRoutingModule */

  /***/
  function srcAppWalletWalletRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletPageRoutingModule", function () {
      return WalletPageRoutingModule;
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


    var _wallet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./wallet.page */
    "./src/app/wallet/wallet.page.ts");

    var routes = [{
      path: '',
      component: _wallet_page__WEBPACK_IMPORTED_MODULE_3__["WalletPage"]
    }];

    var WalletPageRoutingModule = function WalletPageRoutingModule() {
      _classCallCheck(this, WalletPageRoutingModule);
    };

    WalletPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WalletPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/wallet/wallet.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/wallet/wallet.module.ts ***!
    \*****************************************/

  /*! exports provided: WalletPageModule */

  /***/
  function srcAppWalletWalletModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletPageModule", function () {
      return WalletPageModule;
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


    var _wallet_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./wallet-routing.module */
    "./src/app/wallet/wallet-routing.module.ts");
    /* harmony import */


    var _wallet_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./wallet.page */
    "./src/app/wallet/wallet.page.ts");

    var WalletPageModule = function WalletPageModule() {
      _classCallCheck(this, WalletPageModule);
    };

    WalletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _wallet_routing_module__WEBPACK_IMPORTED_MODULE_6__["WalletPageRoutingModule"]],
      declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_7__["WalletPage"]]
    })], WalletPageModule);
    /***/
  },

  /***/
  "./src/app/wallet/wallet.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/wallet/wallet.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppWalletWalletPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 0px);\n  background: var(--white);\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: block;\n}\nion-header .banner {\n  position: relative;\n  z-index: 99;\n  padding: 20px 20px;\n}\nion-header .banner h2 {\n  margin: 0;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  font-weight: 400;\n  letter-spacing: 1px;\n  padding-bottom: 4px;\n  color: var(--text-light);\n}\nion-header .banner h1 {\n  margin: 0;\n  font-weight: 600;\n  font-size: 2.1rem;\n  color: var(--primary);\n}\nion-header .button.btn {\n  --background: var(--secondary);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: fixed;\n  top: 143px;\n  z-index: 9999;\n  right: 20px;\n  font-size: 0.95rem;\n  min-width: 140px;\n  height: 48px;\n  text-transform: none;\n  font-weight: 400;\n}\nion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  padding-top: 20px;\n}\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 1rem;\n  padding: 0 20px 10px 20px;\n}\nion-list ion-item {\n  padding: 13px 20px;\n  min-height: unset !important;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  margin-bottom: 5px;\n  background: var(--white);\n  transition: all 0.5s;\n}\nion-list ion-item ion-row {\n  margin: 0 -5px;\n  width: 100%;\n}\nion-list ion-item ion-row ion-col h3 {\n  margin: 0;\n  color: var(--text-black);\n  font-size: 0.93rem;\n  padding-bottom: 6px;\n}\nion-list ion-item ion-row ion-col p {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.8rem;\n  white-space: nowrap;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcm9jc2x1dC9EZXNrdG9wL0dpdC9pb25pYy1kZWx5dmEvZGVsaXZvby1zZWxsZXItaW9uaWM1LW1hc3Rlci9zcmMvYXBwL3dhbGxldC93YWxsZXQucGFnZS5zY3NzIiwic3JjL2FwcC93YWxsZXQvd2FsbGV0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQ0FSO0FESUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtBQ0hSO0FES1E7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FDSFo7QURNUTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNKWjtBRFFJO0VBQ0ksOEJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDTlI7QURXQTtFQUNJLHlDQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ1JKO0FEVUk7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNSUjtBRFdJO0VBQ0ksa0JBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHVEQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0FDVFI7QURXUTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FDVFo7QURZZ0I7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDVnBCO0FEYWdCO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDWHBCIiwiZmlsZSI6InNyYy9hcHAvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDBweCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG5cbiAgICAuYmFubmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiA5OTtcblxuICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjFyZW07XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYnV0dG9uLmJ0biB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMTQzcHg7XG4gICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IC45NXJlbTtcbiAgICAgICAgbWluLXdpZHRoOiAxNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG59XG5cblxuaW9uLWxpc3Qge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuXG4gICAgaDIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHggMTBweCAyMHB4O1xuICAgIH1cblxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgcGFkZGluZzogMTNweCAyMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcblxuICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAtNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjkzcmVtO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW9uLWhlYWRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDBweCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5pb24taGVhZGVyIC5iYW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG59XG5pb24taGVhZGVyIC5iYW5uZXIgaDIge1xuICBtYXJnaW46IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG59XG5pb24taGVhZGVyIC5iYW5uZXIgaDEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMi4xcmVtO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5pb24taGVhZGVyIC5idXR0b24uYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxNDNweDtcbiAgei1pbmRleDogOTk5OTtcbiAgcmlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgbWluLXdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbmlvbi1saXN0IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMCAyMHB4IDEwcHggMjBweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMTNweCAyMHB4O1xuICBtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5pb24tbGlzdCBpb24taXRlbSBpb24tcm93IHtcbiAgbWFyZ2luOiAwIC01cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXJvdyBpb24tY29sIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIGZvbnQtc2l6ZTogMC45M3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIGlvbi1yb3cgaW9uLWNvbCBwIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXdlaWdodDogNDAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/wallet/wallet.page.ts":
  /*!***************************************!*\
    !*** ./src/app/wallet/wallet.page.ts ***!
    \***************************************/

  /*! exports provided: WalletPage */

  /***/
  function srcAppWalletWalletPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletPage", function () {
      return WalletPage;
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

    var WalletPage = /*#__PURE__*/function () {
      function WalletPage(route) {
        _classCallCheck(this, WalletPage);

        this.route = route;
      }

      _createClass(WalletPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "send_to_bank",
        value: function send_to_bank() {
          this.route.navigate(['./send-to-bank']);
        }
      }]);

      return WalletPage;
    }();

    WalletPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    WalletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wallet',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./wallet.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./wallet.page.scss */
      "./src/app/wallet/wallet.page.scss"))["default"]]
    })], WalletPage);
    /***/
  }
}]);
//# sourceMappingURL=wallet-wallet-module-es5.js.map