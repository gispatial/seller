function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~chat-customer-chat-customer-module~order-info-order-info-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-customer/chat-customer.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-customer/chat-customer.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatCustomerChatCustomerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            <ion-icon class=\"zmdi zmdi-chevron-down\" (click)=\"dismiss()\"></ion-icon>\n        </ion-title>\n    </ion-toolbar>\n    <div class=\"profile_info d-flex\">\n        <div class=\"img_box center_img\">\n            <img src=\"assets/images/Vegetables_Fruitsact.png\" class=\"crop_img\">\n        </div>\n        <div class=\"text_box\">\n            <h2 class=\"animate__animated animate__fadeInUp\">Samantha Smith</h2>\n            <h3 class=\"animate__animated animate__fadeInUp\">20 Jun, 11:35 am</h3>\n        </div>\n        <div class=\"icon_box end\">  \n            <ion-icon class=\"zmdi zmdi-phone ion-text-end\"></ion-icon>\n        </div>\n    </div>\n</ion-header>\n\n<ion-content  fullscreen>\n    <div class=\"chat_container d-flex\">\n        <div class=\"chat_box d-flex animate__animated animate__zoomIn send\">\n            <div class=\"chat\">\n                <h2>Hey there? <br> How much time?</h2>\n                <p>11:58 am</p>\n            </div>\n        </div>\n\n        <div class=\"chat_box d-flex animate__animated animate__zoomIn received\">\n            <div class=\"chat\">\n                <h2>On my way ma'm <br>Will reach in 10 mins.</h2>\n                <p>11:59 am</p>\n            </div>\n        </div>\n    </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\n    <div class=\"form\">\n        <ion-list lines=\"none d-flex\">\n            <ion-item lines=\"none\">\n                <ion-textarea rows=\"1\"  auto-grow=\"true\" placeholder=\"{{'type_your_meassage' | translate}}\"></ion-textarea>\n            </ion-item>\n            <div class=\"send_btn end\">\n                <ion-icon class=\"zmdi zmdi-mail-send\"></ion-icon>\n            </div>\n        </ion-list>\n    </div>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/chat-customer/chat-customer.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/chat-customer/chat-customer.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatCustomerChatCustomerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  background: var(--white);\n}\nion-header ion-toolbar ion-title {\n  padding: 0 20px !important;\n}\nion-header ion-toolbar ion-title ion-icon {\n  font-size: 2.1rem;\n}\nion-header .profile_info {\n  padding: 0 20px 20px 20px;\n}\nion-header .profile_info .img_box {\n  min-width: 45px;\n  height: 45px;\n  margin-right: 15px;\n}\nion-header .profile_info .text_box h2 {\n  margin: 0;\n  color: var(--text-black);\n  font-size: 1rem;\n  padding-bottom: 4px;\n}\nion-header .profile_info .text_box h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.81rem;\n  font-weight: 400;\n  letter-spacing: 0.5px;\n}\nion-header .profile_info .icon_box {\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\nion-header .profile_info .icon_box ion-icon {\n  color: var(--primary);\n  font-size: 1.35rem;\n  min-width: 34px;\n}\nion-content {\n  --background: url('chat_bg.png') 0 0/100% 100% no-repeat;\n}\n.chat_container {\n  padding: 15px 15px;\n  flex-wrap: wrap;\n}\n.chat_container .chat_box {\n  width: auto !important;\n  margin-bottom: 20px;\n  min-width: 70%;\n  align-items: flex-start;\n}\n.chat_container .chat_box .chat {\n  min-width: 90px;\n  border-radius: 5px;\n  max-width: 100%;\n  box-shadow: 0 2px 10px 0px rgba(0, 0, 0, 0.1);\n}\n.chat_container .chat_box .chat h2 {\n  margin: 0;\n  font-size: 1rem;\n  color: var(--text-black);\n  line-height: 20px;\n  padding-bottom: 8px;\n}\n.chat_container .chat_box p {\n  margin: 0;\n  font-size: 0.8rem;\n  font-weight: 400;\n  color: var(--text-light);\n}\n.chat_container .chat_box.received .chat {\n  background: var(--white);\n  padding: 9px 20px 10px 14px;\n}\n.chat_container .chat_box.send {\n  margin-left: auto;\n  margin-right: 0;\n}\n.chat_container .chat_box.send .chat {\n  background: var(--primary);\n  padding: 9px 14px 10px 40px;\n  margin-left: auto;\n  margin-right: 0;\n}\n.chat_container .chat_box.send .chat h2 {\n  text-align: right;\n  color: var(--white);\n  font-weight: 400;\n}\n.chat_container .chat_box.send .chat p {\n  text-align: right;\n  color: var(--white);\n  opacity: 0.4;\n}\nion-footer {\n  background: var(--white);\n  box-shadow: 0 12px 38px 10px rgba(0, 0, 0, 0.1);\n  --animate-duration: .4s !important;\n}\nion-footer .form {\n  margin: 0;\n  width: 100%;\n  padding: 0;\n}\nion-footer .form ion-list {\n  padding: 0 !important;\n}\nion-footer .form ion-list ion-item {\n  border: none !important;\n  background: none;\n  margin: 0;\n  align-items: center;\n  border: 0 !important;\n  padding: 10px 17px !important;\n  --min-height: unset !important;\n  font-weight: 500 !important;\n}\nion-footer .form ion-list ion-item ion-textarea {\n  font-size: 1rem !important;\n  --placeholder-color: var(--text-black) !important;\n  --placeholder-font-weight: 500 !important;\n  padding: 10px 0 !important;\n  font-weight: 500 !important;\n  margin: 0;\n  max-height: 100px;\n}\nion-footer .form ion-list .send_btn {\n  padding: 0 17px;\n  min-width: 30px;\n  position: relative;\n  top: 3px;\n}\nion-footer .form ion-list .send_btn ion-icon {\n  color: var(--primary);\n  font-size: 1.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcm9jc2x1dC9EZXNrdG9wL0dpdC9pb25pYy1kZWx5dmEvZGVsaXZvby1zZWxsZXItaW9uaWM1LW1hc3Rlci9zcmMvYXBwL2NoYXQtY3VzdG9tZXIvY2hhdC1jdXN0b21lci5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYXQtY3VzdG9tZXIvY2hhdC1jdXN0b21lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtBQ0NKO0FEQ0k7RUFDSSwwQkFBQTtBQ0NSO0FEQ1E7RUFDSSxpQkFBQTtBQ0NaO0FER0k7RUFDSSx5QkFBQTtBQ0RSO0FER1E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRFo7QURLWTtFQUNJLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0hoQjtBRE1ZO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDSmhCO0FEUVE7RUFDSSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7QUNOWjtBRFFZO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNOaEI7QURZQTtFQUNJLHdEQUFBO0FDVEo7QURZQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ1RKO0FEV0k7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FDVFI7QURXUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtBQ1RaO0FEV1k7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ1RoQjtBRGFRO0VBQ0ksU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQ1haO0FEZVk7RUFDSSx3QkFBQTtFQUNBLDJCQUFBO0FDYmhCO0FEaUJRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDZlo7QURpQlk7RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDZmhCO0FEa0JnQjtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ2hCcEI7QURtQmdCO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNqQnBCO0FEd0JBO0VBQ0ksd0JBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0FDckJKO0FEdUJJO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDckJSO0FEdUJRO0VBQ0kscUJBQUE7QUNyQlo7QUR1Qlk7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7QUNyQmhCO0FEdUJnQjtFQUNJLDBCQUFBO0VBQ0EsaURBQUE7RUFDQSx5Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNyQnBCO0FEMEJZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUN4QmhCO0FEMEJnQjtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUN4QnBCIiwiZmlsZSI6InNyYy9hcHAvY2hhdC1jdXN0b21lci9jaGF0LWN1c3RvbWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcblxuICAgIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweCAhaW1wb3J0YW50O1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnByb2ZpbGVfaW5mbyB7XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweCAyMHB4IDIwcHg7XG5cbiAgICAgICAgLmltZ19ib3gge1xuICAgICAgICAgICAgbWluLXdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHRfYm94IHtcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC44MXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmljb25fYm94IHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjM1cmVtO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2NoYXRfYmcucG5nJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG5cbi5jaGF0X2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTVweCAxNXB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC5jaGF0X2JveCB7XG4gICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIG1pbi13aWR0aDogNzAlO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgICAuY2hhdCB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDkwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYucmVjZWl2ZWQge1xuICAgICAgICAgICAgLmNoYXQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA5cHggMjBweCAxMHB4IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLnNlbmQge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAgICAgICAgIC5jaGF0IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA5cHggMTRweCAxMHB4IDQwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuXG5cbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDM4cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNHMgIWltcG9ydGFudDtcblxuICAgIC5mb3JtIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICBpb24tbGlzdCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTdweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0tbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICBpb24tdGV4dGFyZWEge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0tdGV4dC1ibGFjaykgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZW5kX2J0biB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxN3B4O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiAzcHg7XG5cbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDAgMjBweCAhaW1wb3J0YW50O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIuMXJlbTtcbn1cbmlvbi1oZWFkZXIgLnByb2ZpbGVfaW5mbyB7XG4gIHBhZGRpbmc6IDAgMjBweCAyMHB4IDIwcHg7XG59XG5pb24taGVhZGVyIC5wcm9maWxlX2luZm8gLmltZ19ib3gge1xuICBtaW4td2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuaW9uLWhlYWRlciAucHJvZmlsZV9pbmZvIC50ZXh0X2JveCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG59XG5pb24taGVhZGVyIC5wcm9maWxlX2luZm8gLnRleHRfYm94IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC44MXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuaW9uLWhlYWRlciAucHJvZmlsZV9pbmZvIC5pY29uX2JveCB7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG59XG5pb24taGVhZGVyIC5wcm9maWxlX2luZm8gLmljb25fYm94IGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDEuMzVyZW07XG4gIG1pbi13aWR0aDogMzRweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvY2hhdF9iZy5wbmdcIikgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG5cbi5jaGF0X2NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHggMTVweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmNoYXRfY29udGFpbmVyIC5jaGF0X2JveCB7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1pbi13aWR0aDogNzAlO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5jaGF0X2NvbnRhaW5lciAuY2hhdF9ib3ggLmNoYXQge1xuICBtaW4td2lkdGg6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uY2hhdF9jb250YWluZXIgLmNoYXRfYm94IC5jaGF0IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG4uY2hhdF9jb250YWluZXIgLmNoYXRfYm94IHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG59XG4uY2hhdF9jb250YWluZXIgLmNoYXRfYm94LnJlY2VpdmVkIC5jaGF0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBwYWRkaW5nOiA5cHggMjBweCAxMHB4IDE0cHg7XG59XG4uY2hhdF9jb250YWluZXIgLmNoYXRfYm94LnNlbmQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLmNoYXRfY29udGFpbmVyIC5jaGF0X2JveC5zZW5kIC5jaGF0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDlweCAxNHB4IDEwcHggNDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5jaGF0X2NvbnRhaW5lciAuY2hhdF9ib3guc2VuZCAuY2hhdCBoMiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmNoYXRfY29udGFpbmVyIC5jaGF0X2JveC5zZW5kIC5jaGF0IHAge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgb3BhY2l0eTogMC40O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3gtc2hhZG93OiAwIDEycHggMzhweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNHMgIWltcG9ydGFudDtcbn1cbmlvbi1mb290ZXIgLmZvcm0ge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbmlvbi1mb290ZXIgLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAxN3B4ICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCBpb24taXRlbSBpb24tdGV4dGFyZWEge1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0tdGV4dC1ibGFjaykgIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG59XG5pb24tZm9vdGVyIC5mb3JtIGlvbi1saXN0IC5zZW5kX2J0biB7XG4gIHBhZGRpbmc6IDAgMTdweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3B4O1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCAuc2VuZF9idG4gaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/chat-customer/chat-customer.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/chat-customer/chat-customer.page.ts ***!
    \*****************************************************/

  /*! exports provided: ChatCustomerPage */

  /***/
  function srcAppChatCustomerChatCustomerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatCustomerPage", function () {
      return ChatCustomerPage;
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

    var ChatCustomerPage = /*#__PURE__*/function () {
      function ChatCustomerPage(modalController) {
        _classCallCheck(this, ChatCustomerPage);

        this.modalController = modalController;
      }

      _createClass(ChatCustomerPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalController.dismiss();
        }
      }]);

      return ChatCustomerPage;
    }();

    ChatCustomerPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    ChatCustomerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-customer',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./chat-customer.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-customer/chat-customer.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./chat-customer.page.scss */
      "./src/app/chat-customer/chat-customer.page.scss"))["default"]]
    })], ChatCustomerPage);
    /***/
  }
}]);
//# sourceMappingURL=default~chat-customer-chat-customer-module~order-info-order-info-module-es5.js.map