(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well well-sm\">\n    <div class=\"row\">\n        <div class=\"col-md-3\">\n            <div class=\"btn btn-default btn-block\">\n                <a routerLink=\"overview\">Overview</a>\n            </div>\n        </div>\n        <div class=\"col-md-3\">\n\n            <div class=\"btn btn-default btn-block\">\n                <a routerLink=\"toeVol1\">TOE Book  (2014)</a>\n            </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"btn btn-default btn-block\">\n                <a routerLink=\"toeVol2\">TOE Book (2017)</a>\n            </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"btn btn-default btn-block\">\n                <a routerLink=\"toeVol3\">TOE Book (2018)</a>\n            </div>\n        </div>\n        <!-- <div class=\"col-md-2\">\n            <div class=\"btn btn-default btn-block\">\n                <a routerLink=\"toeVol4\">TOE Book Vol-4</a>\n            </div>\n        </div> -->\n            \n   </div>\n</div>\n<div>\n    <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _books_toeVol1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./books/toeVol1.component */ "./src/app/books/toeVol1.component.ts");
/* harmony import */ var _books_toeVol2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./books/toeVol2.component */ "./src/app/books/toeVol2.component.ts");
/* harmony import */ var _books_toeVol3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./books/toeVol3.component */ "./src/app/books/toeVol3.component.ts");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overview/overview.component */ "./src/app/overview/overview.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _includes_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./includes/header.component */ "./src/app/includes/header.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: "", component: _overview_overview_component__WEBPACK_IMPORTED_MODULE_6__["OverviewComponent"] },
    { path: "overview", component: _overview_overview_component__WEBPACK_IMPORTED_MODULE_6__["OverviewComponent"] },
    { path: "toeVol1", component: _books_toeVol1_component__WEBPACK_IMPORTED_MODULE_3__["TOEVol1Component"] },
    { path: "toeVol2", component: _books_toeVol2_component__WEBPACK_IMPORTED_MODULE_4__["TOEVol2Component"] },
    { path: "toeVol3", component: _books_toeVol3_component__WEBPACK_IMPORTED_MODULE_5__["TOEVol3Component"] },
    { path: "contact", component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _books_toeVol1_component__WEBPACK_IMPORTED_MODULE_3__["TOEVol1Component"],
                _books_toeVol2_component__WEBPACK_IMPORTED_MODULE_4__["TOEVol2Component"],
                _books_toeVol3_component__WEBPACK_IMPORTED_MODULE_5__["TOEVol3Component"],
                _overview_overview_component__WEBPACK_IMPORTED_MODULE_6__["OverviewComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _includes_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    useHash: true,
                    enableTracing: false //for debugging router
                }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/books/toeVol1.component.html":
/*!**********************************************!*\
  !*** ./src/app/books/toeVol1.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" data-effect=\"slide-bottom\">\r\n  <div class=\"custom-box\">\r\n            <img src=\"./images/TOEVol3.jpg\" alt=\"\">\r\n\r\n      <div class=\"servicetitle\">\r\n        <h4>The Theory of Everything Volume 1 2014 edition</h4>\r\n        <hr>\r\n      </div>\r\n      <div>\r\n        <p>The 2014 Edition of the T0E (172 pages), starts with the basics of the wave principle and builds to a comprehensive understanding </p>\r\n        <p>of the twelve arithmetic forces (Zodiac signs), with illustrations and photographs of models.</p>\r\n        <p>It discusses the single digit numbers 0-9, then goes on to describe the pattern behind</p>\r\n        <p>the prime numbers from 11-131 in terms of the four states of mental and elemental forces.</p>\r\n        <p>This is finally followed by how the creative principle of the universe (or Logos), relates to our everyday lives and society in general.</p>\r\n      </div>\r\n      <div class=\"icn-main-container\">\r\n        <span class=\"icn-container\">$35</span>\r\n      </div>\r\n      <p>A Beginners Guide</p>\r\n      <ul class=\"pricing\">\r\n              <li>Colour Illustrations</li>\r\n              <li>Signed by the Author</li>\r\n              <li>Limited Edition</li>\r\n      </ul>\r\n      <div>\r\n        <a class=\"btn btn-primary\" href=\"./images/pdf/TOEVol1.pdf\">Download PDF</a>&nbsp;\r\n        <a class=\"btn btn-primary\" href=\"contact\">Order Hardcopy</a>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/books/toeVol1.component.ts":
/*!********************************************!*\
  !*** ./src/app/books/toeVol1.component.ts ***!
  \********************************************/
/*! exports provided: TOEVol1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOEVol1Component", function() { return TOEVol1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TOEVol1Component = /** @class */ (function () {
    function TOEVol1Component() {
        this.title = 'Theory of Everything Volume 1';
    }
    TOEVol1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'toeVol1',
            template: __webpack_require__(/*! ./toeVol1.component.html */ "./src/app/books/toeVol1.component.html"),
            styleUrls: []
        })
    ], TOEVol1Component);
    return TOEVol1Component;
}());



/***/ }),

/***/ "./src/app/books/toeVol2.component.html":
/*!**********************************************!*\
  !*** ./src/app/books/toeVol2.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" data-effect=\"slide-bottom\">\r\n        <div class=\"custom-box\">\r\n                <img src=\"./images/TOEVol2.jpg\" alt=\"\">\r\n\r\n          <div class=\"servicetitle\">\r\n            <h4>The Theory of Everything Volume 2 2014 Edition</h4>\r\n            <hr>\r\n          </div>\r\n          <div class=\"icn-main-container\">\r\n            <span class=\"icn-container\">$15</span>\r\n          </div>\r\n          <p>A Beginners Guide</p>\r\n          <ul class=\"pricing\">\r\n                  <li>44 pages</li>\r\n                  <li>Colour Illustrations</li>\r\n                  <li>Signed by the Author</li>\r\n                  <li>Limited Edition</li>\r\n          </ul>\r\n                <a class=\"btn btn-primary\" href=\"./images/pdf/TOEVol2.pdf\">Download PDF</a>&nbsp;\r\n                <a class=\"btn btn-primary\" href=\"contact\">Order Hardcopy</a>\r\n          <div>\r\n              <p>The 2017 Edition of the T0E (44 pages) is slightly more advanced than the previous edition but much shorter in its scope because it deals only with the understanding of the single digit numbers from zero to nine, some simple equations and how they relate to wave vibrations as being the basis of the Theory of Everything.</p>\r\n              <p>What this edition says is that everything, the entire universe, all living things and the creation is based on numbers including civilisation. </p>\r\n          </div>\r\n        </div>\r\n        <!-- end custombox -->\r\n      </div>\r\n      <!-- end col-4 -->\r\n"

/***/ }),

/***/ "./src/app/books/toeVol2.component.ts":
/*!********************************************!*\
  !*** ./src/app/books/toeVol2.component.ts ***!
  \********************************************/
/*! exports provided: TOEVol2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOEVol2Component", function() { return TOEVol2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TOEVol2Component = /** @class */ (function () {
    function TOEVol2Component() {
        this.title = 'Theory of Everything Volume 2';
    }
    TOEVol2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'toeVol2',
            template: __webpack_require__(/*! ./toeVol2.component.html */ "./src/app/books/toeVol2.component.html"),
            styleUrls: []
        })
    ], TOEVol2Component);
    return TOEVol2Component;
}());



/***/ }),

/***/ "./src/app/books/toeVol3.component.html":
/*!**********************************************!*\
  !*** ./src/app/books/toeVol3.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" data-effect=\"slide-bottom\">\r\n      <div class=\"custom-box\">\r\n                <img src=\"./images/TOEVol3.jpg\" alt=\"\">\r\n\r\n          <div class=\"servicetitle\">\r\n            <h4>The Theory of Everything Volume 3 2020 Edition</h4>\r\n            <hr>\r\n          </div>\r\n          <div>\r\n            <p>The 2020 Edition is the complete Theory of Everything.  to be released in 2020.</p>\r\n            <p>Still in the pipeline and to be released in 2020.  A beginners guide for all New Zealander's</p>\r\n            <p>It describes the simple, beautiful and elegant theory that is going to change the world</p>\r\n          </div>\r\n          <div class=\"icn-main-container\">\r\n            <span class=\"icn-container\">$55</span>\r\n          </div>\r\n          <p>A Beginners Guide</p>\r\n          <ul class=\"pricing\">\r\n                  <li>Colour Illustrations</li>\r\n                  <li>Signed by the Author</li>\r\n                  <li>Limited Edition</li>\r\n          </ul>\r\n          <div>\r\n            <a class=\"btn btn-primary\" href=\"./images/pdf/TOEVol3.pdf\">Download PDF</a>&nbsp;\r\n            <a class=\"btn btn-primary\" href=\"contact\">Order Hardcopy</a>\r\n          </div>\r\n      </div>\r\n        <!-- end custombox -->\r\n      </div>\r\n      <!-- end col-4 -->\r\n"

/***/ }),

/***/ "./src/app/books/toeVol3.component.ts":
/*!********************************************!*\
  !*** ./src/app/books/toeVol3.component.ts ***!
  \********************************************/
/*! exports provided: TOEVol3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOEVol3Component", function() { return TOEVol3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TOEVol3Component = /** @class */ (function () {
    function TOEVol3Component() {
        this.title = 'Theory of Everything Volume 3';
    }
    TOEVol3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'toeVol3',
            template: __webpack_require__(/*! ./toeVol3.component.html */ "./src/app/books/toeVol3.component.html"),
            styleUrls: []
        })
    ], TOEVol3Component);
    return TOEVol3Component;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <%- include includes/head.ejs-%>\r\n</head>\r\n\r\n<body> -->\r\n    <!-- <div class=\"topbar clearfix\">\r\n        <%- include includes/topbar.ejs -%>\r\n      </div> -->\r\n\r\n  <header></header>\r\n\r\n  <section class=\"section1\">\r\n    <div class=\"container clearfix\">\r\n      <div class=\"content col-lg-12 col-md-12 col-sm-12 clearfix\">\r\n        <div class=\"col-lg-6 col-md-6 col-sm-6\">\r\n          <h4 class=\"title\">Contact Form</h4>\r\n          <div id=\"message\"></div>\r\n          <form class=\"contact-form php-mail-form\" role=\"form\" action=\"contactform/contactform.php\" method=\"POST\">\r\n\r\n            <div class=\"form-group\">\r\n              <input type=\"name\" name=\"name\" class=\"form-control\" id=\"contact-name\" placeholder=\"Your Name\" data-rule=\"minlen:4\" data-msg=\"Please enter at least 4 chars\" >\r\n              <div class=\"validate\"></div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"email\" name=\"email\" class=\"form-control\" id=\"contact-email\" placeholder=\"Subject\" data-rule=\"email\" data-msg=\"Please enter a valid email\">\r\n              <div class=\"validate\"></div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" name=\"subject\" class=\"form-control\" id=\"contact-subject\" placeholder=\"Books to Order\" data-rule=\"minlen:4\" data-msg=\"Please enter at least 8 chars of subject\">\r\n              <div class=\"validate\"></div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <textarea class=\"form-control\" name=\"message\" id=\"contact-message\" placeholder=\"Details of Books you would like to order\" rows=\"5\" data-rule=\"required\" data-msg=\"Please write something for us\"></textarea>\r\n              <div class=\"validate\"></div>\r\n            </div>\r\n\r\n            <div class=\"loading\"><img src=\"lib/php-mail-form/loading.gif\"></div>\r\n            <div class=\"error-message\"></div>\r\n            <div class=\"sent-message\">Your message has been sent. Thank you!</div>\r\n\r\n            <div class=\"form-send\">\r\n              <button type=\"submit\" class=\"btn btn-large btn-primary\">Send Message</button>\r\n            </div>\r\n\r\n          </form>\r\n        </div>\r\n\r\n        <div class=\"col-lg-6 col-md-6 col-sm-6\">\r\n          <h4 class=\"title\">Contact Details</h4>\r\n          <p>Discovery Press is an independent publisher.</p>\r\n          <p>Discovery Press has been publishing books on archeology, alternative history and esoterica since the 1970's</p>\r\n            <ul class=\"contact_details\">\r\n            <li><i class=\"fa fa-envelope-o\"></i> &nbsp;&nbsp;7ross22@gmail.com</li>\r\n            <li><i class=\"fa fa-facebook\"></i>&nbsp;&nbsp;Facebook</li>\r\n            <li><i class=\"fa fa-home\"></i>&nbsp;&nbsp;22 Mountain Road, Auckland New Zealand 0612</li>\r\n          </ul>\r\n          <!-- contact_details -->\r\n        </div>\r\n\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"divider\"></div>\r\n\r\n        <h4 class=\"title\">Social Media</h4>\r\n        <div class=\"col-lg-3 col-md-3 col-sm-3\">\r\n          <div class=\"servicebox text-center\">\r\n            <div class=\"service-icon\">\r\n              <div class=\"dm-icon-effect-1\" data-effect=\"slide-bottom\">\r\n                <a href=\"https://www.facebook.com/The-Theory-of-Everything-A-beginners-guide-218831355373032\" class=\"\"> <i class=\"dm-icon fa fa-facebook fa-3x\"></i> </a>\r\n              </div>\r\n              <div class=\"servicetitle\">\r\n                <h4>Facebook</h4>\r\n              </div>\r\n            </div>\r\n            <!-- service-icon -->\r\n          </div>\r\n          <!-- servicebox -->\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3 col-sm-3\">\r\n          <div class=\"servicebox text-center\">\r\n            <div class=\"service-icon\">\r\n              <div class=\"dm-icon-effect-1\" data-effect=\"slide-bottom\">\r\n                <a href=\"#\" class=\"\"> <i class=\"dm-icon fa fa-youtube fa-3x\"></i> </a>\r\n              </div>\r\n              <div class=\"servicetitle\">\r\n                <h4>Youtube</h4>\r\n              </div>\r\n            </div>\r\n            <!-- service-icon -->\r\n          </div>\r\n          <!-- servicebox -->\r\n        </div>\r\n        <!-- large-3 -->\r\n\r\n      </div>\r\n      <!-- end content -->\r\n    </div>\r\n    <!-- end container -->\r\n  </section>\r\n\r\n  <!-- <footer class=\"footer\">\r\n      <%- include includes/footer.ejs-%>\r\n\r\n  </footer>\r\n  <!-- end footer -->\r\n  <div class=\"dmtop\">Scroll to Top</div>\r\n\r\n  <!-- JavaScript Libraries -->\r\n  <%- include includes/scripts.ejs -%> -->\r\n\r\n<!-- </body>\r\n</html> -->\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "contact",
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/includes/header.component.html":
/*!************************************************!*\
  !*** ./src/app/includes/header.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"site-header clearfix\">\r\n    <div class=\"col-lg-3 col-md-3 col-sm-12 title-area\">\r\n      <div class=\"site-title\" id=\"title\">\r\n        <a href=\"index\" title=\"\">\r\n          <h4>Discovery<span>Press</span></h4>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-9 col-md-12 col-sm-12\">\r\n      <div id=\"nav\" class=\"right\">\r\n        <div class=\"container clearfix\">\r\n          <ul id=\"jetmenu\" class=\"jetmenu blue\">\r\n            <li class=\"active\"><a href=\"index\">Home</a></li>\r\n            <li><a href=\"about\">About</a></li>\r\n            <li><a href=\"otherBooks\">Other Books</a></li>\r\n            <li><a href=\"contact\">Contact</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/includes/header.component.ts":
/*!**********************************************!*\
  !*** ./src/app/includes/header.component.ts ***!
  \**********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "header",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/includes/header.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/overview/overview.component.html":
/*!**************************************************!*\
  !*** ./src/app/overview/overview.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n    .container {\r\n      padding-right: 30px;\r\n    }\r\n</style>\r\n<div class=\"padding-right\">\r\n  <div class=\"container-fluid\">\r\n    <p><strong>The Theory of Everything is a spiritual and social theory because it goes to the ultimate cause of nature, and describes the universal energy that is all around us.</strong></p> \r\n    <p>This is the simple reality of how everything and everyone is connected. These relationships and connections rest upon the self-evident axioms of the single digit numbers and their referential interpretation.</p> \r\n    <p>Einstein and Hawking failed to deliver a Theory of Everything (T0E for short), because they got too caught up in the physical side. Take a look at this simple, beautiful and elegant theory that is going to change the world, for once you get a taste of it you will come to realise you needed this theory like a fish needs water.</p> \r\n    <p>You will come to realise we are not materialistic and consumeristic slaves as the 'masters of the economy' would have us realise, but rather exhalted spiritual beings of love, because love in its many forms is the primary motivation of humanity.</p>\r\n    <ul class=\"pricing\">\r\n      <li>Hardcopy available by contacting the author. This includes a free copy of Volume Two - 44 pages</li>\r\n      <li>150 pages with Colour Illustrations</li>\r\n      <li>Signed by the Author</li>\r\n      <li>Limited Edition</li>\r\n    </ul>\r\n    <a class=\"btn btn-primary\" href=\"./images/pdf/TOEVol1.pdf\">Download</a>&nbsp;\r\n    <a class=\"btn btn-primary\" href=\"contact\">Order Hardcopy</a>\r\n\r\n    <p>It was even known back in the last Ice Age (p31) and is known throughout the galaxy (p283). This is because the truth of the universe is open to everybody. In this regard, the TOE is the common matrix from which all the earliest civilizations sprung. Admittedly, we are now living in the grip of a spiritual Dark Age where pain, ignorance and suffering comes as easily as breakfast; however this simple, deep and self-empowering body of wisdom will have the potential to liberate you from the shackles of economic slavery, it will stir within you an intellectual revolution and hopefully bring about a paradigm shift in humanity.\r\n\r\n    <p>In his Theory of Everything, author Ross Wiseman will show you how the universe came from nothing and how numbers make up the entire universe including your own personality; and how those very forces created the five cycles we encounter unknowingly in our everyday lives: the yearly business cycle, the seven-year cycle, the socio-economic cycle, the civilisation cycle and finally the cosmic cycle of the universe itself …</p>\r\n    \r\n    <i>“You will walk away from this encounter a more self-sufficient and independent person, as the future like the past will become open unto your eyes.”</i>\r\n    \r\n    <p>Ross has provided a clarifying, elegant and simple understanding that lies well outside the Standard-Theory umbrella and is more straightforward than any of the current proposals. In short, he has discovered a whole new world that will give you a taste of reality. Ross comes from Auckland and has given talks to receptive audiences throughout New Zealand.</p>\r\n    \r\n    <p>After a university education in science and philosophy, he travelled through Asia and Europe during the early-1970s gaining first-hand knowledge of Eastern and Western philosophy. In 1996, he established Discovery Press and has published 30 of his own titles, including ‘The Portuguese Discovery of New Zealand in 1522’, and ‘The Spanish Discovery of New Zealand in December 1576’. While this latest book may be an easy read for some; it may take a bit of thinking for others, because some of the ideas expressed are new to most; but which he describes as the result of, “a lifetime quest to understand the ultimate truth of the universe”.</p>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n      <div class=\"col-lg-8 col-md-8 col-sm-8\">\r\n        <h3>Books are available in hardcopy</h3>\r\n        <p>Contact the author</p>\r\n      </div>\r\n\r\n      <div class=\"col-lg-3 col-md-3 col-sm-12\">\r\n        <a class=\"dmbutton button large\" href=\"contact\"><i class=\"fa fa-download\"></i>Order Now</a>\r\n      </div>\r\n  </div>\r\n\r\n    <div class=\"container-fluid\">\r\n      <div class=\"col-lg-3 col-md-3 col-sm-12\">\r\n      <div class=\"servicebox text-center\">\r\n        <div class=\"service-icon\">\r\n            <div class=\"dm-icon-effect-1\" data-effect=\"slide-left\">\r\n                <a routerLink=\"../toeVol1\" class=\"\"> <i class=\"active dm-icon fa fa-book fa-3x\"></i> </a>\r\n            </div>\r\n            <div class=\"servicetitle\">\r\n                <h4>The Theory of Everything Volume 1</h4>\r\n                <hr>\r\n            </div>\r\n            <p>The 2014 Edition of the T0E (172 pages), starts with the basics of the wave principle and builds to a comprehensive understanding of the twelve arithmetic forces (Zodiac signs),</p>\r\n            <p> with illustrations and photographs of models.</p>\r\n          </div>\r\n      </div>\r\n      </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n          <div class=\"servicebox text-center\">\r\n              <div class=\"service-icon\">\r\n              <div class=\"dm-icon-effect-1\" data-effect=\"slide-bottom\">\r\n                  <a routerLink=\"../toeVol2\" class=\"\"> <i class=\"active dm-icon fa fa-book fa-3x\"></i> </a>\r\n              </div>\r\n              <div class=\"servicetitle\">\r\n                  <h4>The Theory of Everything  Volume 2 </h4>\r\n                  <hr>\r\n              </div>\r\n              <p>The 2017 Edition of the T0E (44 pages) is slightly more advanced than the previous edition but much shorter in its scope because it deals only with the understanding of the single digit numbers from zero to nine.</p>\r\n              <p>Some simple equations and how they relate to wave vibrations as being the basis of the Theory of Everything.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n          <div class=\"servicebox text-center\">\r\n              <div class=\"service-icon\">\r\n                  <div class=\"dm-icon-effect-1\" data-effect=\"slide-right\">\r\n                      <a routerLink=\"../toeVol3\" class=\"\"> <i class=\"active dm-icon fa fa-book fa-3x\"></i> </a>\r\n                  </div>\r\n                  <div class=\"servicetitle\">\r\n                      <h4>Theory of Everything - Volume 3</h4>\r\n                      <hr>\r\n                  </div>\r\n                  <p>The 2020 Edition is the complete Theory of Everything.  to be released in 2020.</p>\r\n              </div>\r\n              <!-- service-icon -->\r\n          </div>\r\n          <!-- servicebox -->\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/overview/overview.component.ts":
/*!************************************************!*\
  !*** ./src/app/overview/overview.component.ts ***!
  \************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverviewComponent = /** @class */ (function () {
    function OverviewComponent() {
    }
    OverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "overview",
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/overview/overview.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\projects\TheoryEverything\new-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map