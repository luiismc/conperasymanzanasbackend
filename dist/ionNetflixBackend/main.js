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

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-background-color=\"brown\" data-active-color=\"danger\">\r\n        <!--\r\n          Tip 1: you can change the color of the sidebar's background using: data-background-color=\"white | black\"\r\n          Tip 2: you can change the color of the active button using the data-active-color=\"primary | info | success | warning | danger\"\r\n      -->\r\n\r\n        <div class=\"sidebar-wrapper\">\r\n            <div class=\"logo\">\r\n                <a class=\"simple-text logo-mini\">\r\n                    Como peras y manzanas\r\n                </a>\r\n\r\n                <a class=\"simple-text\"> Portal de Administrador\r\n                </a>\r\n            </div>\r\n\r\n            <ul class=\"nav\">\r\n                <li id=\"dashboardMenuItem\" class=\"active\">\r\n                    <a routerLink=\"/\">\r\n                        <i class=\"ti-panel\"></i>\r\n                        <p>Dashboard</p>\r\n                    </a>\r\n                </li>\r\n\r\n                <li id=\"tvShowsMenuItem\">\r\n                    <a routerLink=\"/tv-shows\">\r\n                        <i class=\"ti-book\"></i>\r\n                        <p>Cursos</p>\r\n                    </a>\r\n                </li>\r\n\r\n                <li id=\"moviesMenuItem\">\r\n                    <a routerLink=\"/movies\">\r\n                        <i class=\"ti-ruler-pencil\"></i>\r\n                        <p>Guias</p>\r\n                    </a>\r\n                </li>\r\n\r\n                <li id=\"homeMenuItem\">\r\n                    <a routerLink=\"/home\">\r\n                        <i class=\"ti-home\"></i>\r\n                        <p>Home Screen</p>\r\n                    </a>\r\n                </li>\r\n\r\n                <li id=\"categoriesMenuItem\">\r\n                    <a routerLink=\"/categories\">\r\n                        <i class=\"ti-layers\"></i>\r\n                        <p>Categorias</p>\r\n                    </a>\r\n                </li>\r\n\r\n                <li id=\"comingSoonMenuItem\">\r\n                    <a routerLink=\"/comingSoon\">\r\n                        <i class=\"ti-gift\"></i>\r\n                        <p>Proximamente</p>\r\n                    </a>\r\n                </li>\r\n\r\n                <li class=\"active-pro\">\r\n                    <a (click)=\"signOut()\" routerLink=\"/login\">\r\n                        <i class=\"ti-direction\"></i>\r\n                        <p>LOG OUT</p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"main-panel\">\r\n        <nav class=\"navbar navbar-default\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"navbar-minimize\">\r\n                    <button id=\"minimizeSidebar\" class=\"btn btn-fill btn-icon\">\r\n                        <i class=\"ti-more-alt\"></i>\r\n                    </button>\r\n                </div>\r\n\r\n                <div class=\"navbar-header\">\r\n                    <button type=\"button\" class=\"navbar-toggle\">\r\n                        <span class=\"sr-only\">Toggle navigation</span>\r\n                        <span class=\"icon-bar bar1\"></span>\r\n                        <span class=\"icon-bar bar2\"></span>\r\n                        <span class=\"icon-bar bar3\"></span>\r\n                    </button>\r\n                    <a class=\"navbar-brand\" href=\"#\">{{ title }}</a>\r\n                </div>\r\n\r\n                <div class=\"collapse navbar-collapse\">\r\n                    <ul class=\"nav navbar-nav navbar-right\">\r\n                        <li class=\"dropdown\">\r\n                            <a *ngIf=\"storageService.getNotifications().length > 0\" style=\"font-size: 40px; color: #e50914; font-weight: bolder;\" class=\"dropdown-toggle btn-rotate\"\r\n                                data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                <i class=\"ti-bell\"></i>\r\n                                <span class=\"notification\">{{storageService.getNotifications().length}}</span>\r\n                            </a>\r\n\r\n                            <ul class=\"dropdown-menu\">\r\n                                <li *ngFor=\"let notification of storageService.getNotifications()\" style=\"width: 450px; padding: 20px;\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-3\">\r\n                                            <img style=\"height: 80px; width: 80px;\" src=\"{{notification.picture}}\">\r\n                                        </div>\r\n\r\n                                        <div class=\"col-sm-9\" style=\"margin-top: 15px;\">\r\n                                            <p style=\"color: #e50914; font-weight: bold;\">Uploading '{{notification.name}}'...</p>\r\n\r\n                                            <div aria-valuemin=\"0\" role=\"progressbar\" class=\"progress-bar progress-bar-animated progress-bar-striped\" attr.aria-valuenow=\"{{notification.progress}}\"\r\n                                                aria-valuemax=\"100\" [ngStyle]=\"{width:notification.progress/100 | percent:'1.0-1'}\"\r\n                                                style=\"background-color: #e50914\">\r\n                                                <strong style=\"color: white\">{{notification.progress}} %</strong>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </nav>\r\n\r\n        <div class=\"content\">\r\n            <div class=\"container-fluid\">\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n        </div>\r\n\r\n        <footer class=\"footer\">\r\n            <div class=\"container-fluid\">\r\n                <nav class=\"pull-left\"></nav>\r\n\r\n                <div class=\"copyright pull-right\">\r\n                    &copy; 2020\r\n                    <strong>YoContigo-IT</strong>\r\n                </div>\r\n            </div>\r\n        </footer>\r\n    </div>\r\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_AuthService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/AuthService/auth.service */ "./src/app/services/AuthService/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login-modal/login-modal.component */ "./src/app/components/login-modal/login-modal.component.ts");
/* harmony import */ var _services_FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/FirebaseStorage/firebase-storage.service */ "./src/app/services/FirebaseStorage/firebase-storage.service.ts");
/* harmony import */ var _services_Firestore_CategoriesService_categories_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/Firestore/CategoriesService/categories.service */ "./src/app/services/Firestore/CategoriesService/categories.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = /** @class */ (function () {
    function AppComponent(router, storageService, authService, dialog, categoriesService) {
        var _this = this;
        this.router = router;
        this.storageService = storageService;
        this.authService = authService;
        this.dialog = dialog;
        this.categoriesService = categoriesService;
        this.title = "Dashboard";
        this.checkAuth();
        this.initialiseCategories();
        router.events.subscribe(function (val) {
            var elements = document.getElementsByClassName("active");
            Array.prototype.forEach.call(elements, function (element) {
                element.classList.remove("active");
            });
            switch (val.urlAfterRedirects) {
                case "/dashboard":
                    var dashboardMenuItem = document.getElementById("dashboardMenuItem");
                    dashboardMenuItem.classList.add("active");
                    _this.title = "Dashboard";
                    break;
                case "/tv-shows":
                    var tvShowsMenuItem = document.getElementById("tvShowsMenuItem");
                    tvShowsMenuItem.classList.add("active");
                    _this.title = "TV Shows";
                    break;
                case "/movies":
                    var moviesMenuItem = document.getElementById("moviesMenuItem");
                    moviesMenuItem.classList.add("active");
                    _this.title = "Movies";
                    break;
                case "/home":
                    var homeMenuItem = document.getElementById("homeMenuItem");
                    homeMenuItem.classList.add("active");
                    _this.title = "Home Screen";
                    break;
                case "/categories":
                    var categoriesMenuItem = document.getElementById("categoriesMenuItem");
                    categoriesMenuItem.classList.add("active");
                    _this.title = "Categories";
                    break;
                case "/comingSoon":
                    var comingSoonMenuItem = document.getElementById("comingSoonMenuItem");
                    comingSoonMenuItem.classList.add("active");
                    _this.title = "Coming Soon";
                    break;
            }
        });
    }
    AppComponent.prototype.checkAuth = function () {
        var _this = this;
        this.authService.afAuth.authState.subscribe(function (user) {
            if (!user) {
                var dialogRef = _this.dialog.open(_components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_5__["LoginModalComponent"], {
                    panelClass: "my-panel"
                });
                dialogRef.afterClosed().subscribe(function (result) {
                    if (_this.authService.afAuth.auth.currentUser === null) {
                        _this.checkAuth();
                    }
                });
            }
            else {
                _this.dialog.closeAll();
            }
        });
    };
    AppComponent.prototype.initialiseCategories = function () {
        var _this = this;
        this.categoriesService.getCategories().then(function (result) {
            if (result.categories.length <= 0) {
                _this.categoriesService.initialiseCategories();
            }
        });
    };
    AppComponent.prototype.signOut = function () {
        var _this = this;
        setTimeout(function () {
            firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]()
                .signOut()
                .then(function () {
                _this.router.navigate(["login"]);
            });
        }, 500);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseStorageService"],
            _services_AuthService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _services_Firestore_CategoriesService_categories_service__WEBPACK_IMPORTED_MODULE_7__["CategoriesService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login-modal/login-modal.component */ "./src/app/components/login-modal/login-modal.component.ts");
/* harmony import */ var _components_tv_shows_tv_shows_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/tv-shows/tv-shows.component */ "./src/app/components/tv-shows/tv-shows.component.ts");
/* harmony import */ var _components_tv_show_editor_tv_show_editor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/tv-show-editor/tv-show-editor.component */ "./src/app/components/tv-show-editor/tv-show-editor.component.ts");
/* harmony import */ var _components_tv_show_seasons_tv_show_seasons_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/tv-show-seasons/tv-show-seasons.component */ "./src/app/components/tv-show-seasons/tv-show-seasons.component.ts");
/* harmony import */ var _components_seasons_episodes_seasons_episodes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/seasons-episodes/seasons-episodes.component */ "./src/app/components/seasons-episodes/seasons-episodes.component.ts");
/* harmony import */ var _components_tv_show_season_editor_tv_show_season_editor_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/tv-show-season-editor/tv-show-season-editor.component */ "./src/app/components/tv-show-season-editor/tv-show-season-editor.component.ts");
/* harmony import */ var _components_season_episode_editor_season_episode_editor_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/season-episode-editor/season-episode-editor.component */ "./src/app/components/season-episode-editor/season-episode-editor.component.ts");
/* harmony import */ var _components_season_episode_player_season_episode_player_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/season-episode-player/season-episode-player.component */ "./src/app/components/season-episode-player/season-episode-player.component.ts");
/* harmony import */ var _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/movies/movies.component */ "./src/app/components/movies/movies.component.ts");
/* harmony import */ var _components_movies_editor_movies_editor_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/movies-editor/movies-editor.component */ "./src/app/components/movies-editor/movies-editor.component.ts");
/* harmony import */ var _components_movie_player_movie_player_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/movie-player/movie-player.component */ "./src/app/components/movie-player/movie-player.component.ts");
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/categories/categories.component */ "./src/app/components/categories/categories.component.ts");
/* harmony import */ var _components_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/coming-soon/coming-soon.component */ "./src/app/components/coming-soon/coming-soon.component.ts");
/* harmony import */ var _components_categories_editor_categories_editor_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/categories-editor/categories-editor.component */ "./src/app/components/categories-editor/categories-editor.component.ts");
/* harmony import */ var _components_coming_soon_editor_coming_soon_editor_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/coming-soon-editor/coming-soon-editor.component */ "./src/app/components/coming-soon-editor/coming-soon-editor.component.ts");
/* harmony import */ var _components_home_screen_home_screen_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/home-screen/home-screen.component */ "./src/app/components/home-screen/home-screen.component.ts");
/* harmony import */ var _components_home_screen_group_editor_home_screen_group_editor_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/home-screen-group-editor/home-screen-group-editor.component */ "./src/app/components/home-screen-group-editor/home-screen-group-editor.component.ts");
/* harmony import */ var _components_home_screen_group_items_home_screen_group_items_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/home-screen-group-items/home-screen-group-items.component */ "./src/app/components/home-screen-group-items/home-screen-group-items.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDGl-9YivuUbUOVAkysBAtH1PerWKXC22E",
    authDomain: "como-peras-y-manzanas.firebaseapp.com",
    databaseURL: "https://como-peras-y-manzanas.firebaseio.com",
    projectId: "como-peras-y-manzanas",
    storageBucket: "como-peras-y-manzanas.appspot.com",
    messagingSenderId: "227789689145"
};
firebase__WEBPACK_IMPORTED_MODULE_3__["initializeApp"](firebaseConfig);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_13__["LoginModalComponent"],
                _components_tv_shows_tv_shows_component__WEBPACK_IMPORTED_MODULE_14__["TvShowsComponent"],
                _components_tv_show_editor_tv_show_editor_component__WEBPACK_IMPORTED_MODULE_15__["TvShowEditorComponent"],
                _components_tv_show_seasons_tv_show_seasons_component__WEBPACK_IMPORTED_MODULE_16__["TvShowSeasonsComponent"],
                _components_seasons_episodes_seasons_episodes_component__WEBPACK_IMPORTED_MODULE_17__["SeasonsEpisodesComponent"],
                _components_tv_show_season_editor_tv_show_season_editor_component__WEBPACK_IMPORTED_MODULE_18__["TvShowSeasonEditorComponent"],
                _components_season_episode_editor_season_episode_editor_component__WEBPACK_IMPORTED_MODULE_19__["SeasonEpisodeEditorComponent"],
                _components_season_episode_player_season_episode_player_component__WEBPACK_IMPORTED_MODULE_20__["SeasonEpisodePlayerComponent"],
                _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_21__["MoviesComponent"],
                _components_movies_editor_movies_editor_component__WEBPACK_IMPORTED_MODULE_22__["MoviesEditorComponent"],
                _components_movie_player_movie_player_component__WEBPACK_IMPORTED_MODULE_23__["MoviePlayerComponent"],
                _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_24__["CategoriesComponent"],
                _components_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_25__["ComingSoonComponent"],
                _components_categories_editor_categories_editor_component__WEBPACK_IMPORTED_MODULE_26__["CategoriesEditorComponent"],
                _components_coming_soon_editor_coming_soon_editor_component__WEBPACK_IMPORTED_MODULE_27__["ComingSoonEditorComponent"],
                _components_home_screen_home_screen_component__WEBPACK_IMPORTED_MODULE_28__["HomeScreenComponent"],
                _components_home_screen_group_editor_home_screen_group_editor_component__WEBPACK_IMPORTED_MODULE_29__["HomeScreenGroupEditorComponent"],
                _components_home_screen_group_items_home_screen_group_items_component__WEBPACK_IMPORTED_MODULE_30__["HomeScreenGroupItemsComponent"]
            ],
            entryComponents: [
                _components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_13__["LoginModalComponent"],
                _components_tv_show_editor_tv_show_editor_component__WEBPACK_IMPORTED_MODULE_15__["TvShowEditorComponent"],
                _components_tv_show_seasons_tv_show_seasons_component__WEBPACK_IMPORTED_MODULE_16__["TvShowSeasonsComponent"],
                _components_tv_show_season_editor_tv_show_season_editor_component__WEBPACK_IMPORTED_MODULE_18__["TvShowSeasonEditorComponent"],
                _components_seasons_episodes_seasons_episodes_component__WEBPACK_IMPORTED_MODULE_17__["SeasonsEpisodesComponent"],
                _components_season_episode_editor_season_episode_editor_component__WEBPACK_IMPORTED_MODULE_19__["SeasonEpisodeEditorComponent"],
                _components_season_episode_player_season_episode_player_component__WEBPACK_IMPORTED_MODULE_20__["SeasonEpisodePlayerComponent"],
                _components_movies_editor_movies_editor_component__WEBPACK_IMPORTED_MODULE_22__["MoviesEditorComponent"],
                _components_movie_player_movie_player_component__WEBPACK_IMPORTED_MODULE_23__["MoviePlayerComponent"],
                _components_categories_editor_categories_editor_component__WEBPACK_IMPORTED_MODULE_26__["CategoriesEditorComponent"],
                _components_coming_soon_editor_coming_soon_editor_component__WEBPACK_IMPORTED_MODULE_27__["ComingSoonEditorComponent"],
                _components_home_screen_group_editor_home_screen_group_editor_component__WEBPACK_IMPORTED_MODULE_29__["HomeScreenGroupEditorComponent"],
                _components_home_screen_group_items_home_screen_group_items_component__WEBPACK_IMPORTED_MODULE_30__["HomeScreenGroupItemsComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(firebaseConfig),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_tv_shows_tv_shows_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tv-shows/tv-shows.component */ "./src/app/components/tv-shows/tv-shows.component.ts");
/* harmony import */ var _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/movies/movies.component */ "./src/app/components/movies/movies.component.ts");
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/categories/categories.component */ "./src/app/components/categories/categories.component.ts");
/* harmony import */ var _components_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/coming-soon/coming-soon.component */ "./src/app/components/coming-soon/coming-soon.component.ts");
/* harmony import */ var _components_home_screen_home_screen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home-screen/home-screen.component */ "./src/app/components/home-screen/home-screen.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: "", pathMatch: "full", redirectTo: "/dashboard" },
    { path: "dashboard", component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: "tv-shows", component: _components_tv_shows_tv_shows_component__WEBPACK_IMPORTED_MODULE_3__["TvShowsComponent"] },
    { path: "movies", component: _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_4__["MoviesComponent"] },
    { path: "home", component: _components_home_screen_home_screen_component__WEBPACK_IMPORTED_MODULE_7__["HomeScreenComponent"] },
    { path: "categories", component: _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesComponent"] },
    { path: "comingSoon", component: _components_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_6__["ComingSoonComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/categories-editor/categories-editor.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/categories-editor/categories-editor.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/categories-editor/categories-editor.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/categories-editor/categories-editor.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(0, 0, 0, 0.0)\" size=\"medium\" color=\"#e50914\" type=\"timer\"></ngx-spinner>\n\n<mat-dialog-content>\n    <mat-tab-group>\n        <mat-tab label=\"Movies\">\n            <br>\n            <app-movies [isCategoryEditing]=\"isCategoryEditing\" [category]=\"category\" [categoryMovies]=\"categoryMovies\"></app-movies>\n        </mat-tab>\n\n        <mat-tab label=\"TV Shows\">\n            <br>\n            <app-tv-shows [isCategoryEditing]=\"isCategoryEditing\" [category]=\"category\" [categoryTvShows]=\"categoryTvShows\"></app-tv-shows>\n        </mat-tab>\n    </mat-tab-group>\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/components/categories-editor/categories-editor.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/categories-editor/categories-editor.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CategoriesEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesEditorComponent", function() { return CategoriesEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_Firestore_CategoriesService_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/Firestore/CategoriesService/categories.service */ "./src/app/services/Firestore/CategoriesService/categories.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var CategoriesEditorComponent = /** @class */ (function () {
    function CategoriesEditorComponent(categoriesService, data, spinner) {
        this.categoriesService = categoriesService;
        this.data = data;
        this.spinner = spinner;
        this.isCategoryEditing = false;
        this.categoryMovies = [];
        this.categoryTvShows = [];
        this.category = data.category;
    }
    CategoriesEditorComponent.prototype.ngOnInit = function () {
        this.isCategoryEditing = true;
        this.getCategoryMovies();
        this.getCategoryTvShows();
    };
    CategoriesEditorComponent.prototype.getCategoryMovies = function () {
        var _this = this;
        this.spinner.show();
        this.categoriesService.getCategoryMovies(this.category).then(function (result) {
            _this.categoryMovies = result.categoryMovies;
            _this.spinner.hide();
        });
    };
    CategoriesEditorComponent.prototype.getCategoryTvShows = function () {
        var _this = this;
        this.spinner.show();
        this.categoriesService.getCategoryTvShows(this.category).then(function (result) {
            _this.categoryTvShows = result.categoryTvShows;
            _this.spinner.hide();
        });
    };
    CategoriesEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-categories-editor",
            template: __webpack_require__(/*! ./categories-editor.component.html */ "./src/app/components/categories-editor/categories-editor.component.html"),
            styles: [__webpack_require__(/*! ./categories-editor.component.css */ "./src/app/components/categories-editor/categories-editor.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_Firestore_CategoriesService_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"], Object, ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], CategoriesEditorComponent);
    return CategoriesEditorComponent;
}());



/***/ }),

/***/ "./src/app/components/categories/categories.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/categories/categories.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/categories/categories.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/categories/categories.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(0, 0, 0, 0.0)\" size=\"medium\" color=\"#e50914\" type=\"timer\"></ngx-spinner>\n\n<div class=\"col-md-3\" *ngFor=\"let category of categories\" style=\"min-width: 300px; min-height: 150px;\">\n  <div class=\"card card-profile\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">{{category.name}}</h4>\n\n      <div class=\"card-footer text-center\">\n        <a (click)=\"openCategory(category)\" class=\"btn btn-with-icon btn-outline-success btn-success\" style=\"margin: 20px 5px 10px 5px\"\n          data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Episodes/Movies\">\n          <i class=\"ti-desktop\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/categories/categories.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/categories/categories.component.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_Firestore_CategoriesService_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Firestore/CategoriesService/categories.service */ "./src/app/services/Firestore/CategoriesService/categories.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _categories_editor_categories_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../categories-editor/categories-editor.component */ "./src/app/components/categories-editor/categories-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(categoriesService, spinner, dialog) {
        this.categoriesService = categoriesService;
        this.spinner = spinner;
        this.dialog = dialog;
        this.categories = [];
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    CategoriesComponent.prototype.getCategories = function () {
        var _this = this;
        this.spinner.show();
        this.categoriesService.getCategories().then(function (result) {
            _this.categories = result.categories;
            _this.spinner.hide();
        });
    };
    CategoriesComponent.prototype.openCategory = function (category) {
        var dialogRef = this.dialog.open(_categories_editor_categories_editor_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesEditorComponent"], {
            data: {
                category: category
            }
        });
        dialogRef.afterClosed().subscribe(function (result) { });
    };
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-categories",
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/components/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/components/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [_services_Firestore_CategoriesService_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/components/coming-soon-editor/coming-soon-editor.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/coming-soon-editor/coming-soon-editor.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/coming-soon-editor/coming-soon-editor.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/coming-soon-editor/coming-soon-editor.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(0, 0, 0, 0.0)\" size=\"medium\" color=\"#e50914\" type=\"timer\"></ngx-spinner>\n\n<div class=\"row\">\n  <button type=\"button\" style=\"float: right;\" (click)=\"closeEditor()\" class=\"btn btn-default btn-icon\">\n    <i class=\"ti-close\"></i>\n  </button>\n</div>\n\n<div class=\"row\">\n  <h2 *ngIf=\"!isEditMode\" style=\"margin-top: -20px;\">Add New</h2>\n  <h2 *ngIf=\"isEditMode\" style=\"margin-top: -20px;\">Edit Existing</h2>\n</div>\n\n<br>\n\n<div class=\"row\">\n  <div class=\"col-sm-10\">\n    <div class=\"form-group\">\n      <label for=\"comingSoonName\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"comingSoonName\" [(ngModel)]=\"comingSoonName\" placeholder=\"Name\">\n    </div>\n  </div>\n\n  <div class=\"col-sm-2\">\n    <button *ngIf=\"isEditMode\" style=\"margin-top: 25px;\" (click)=\"updateComingSoonName()\" class=\"btn btn-primary\">Update</button>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-10\">\n    <div class=\"form-group\">\n      <label for=\"comingSoonPicture\">Picture</label>\n      <input type=\"file\" class=\"form-control\" id=\"comingSoonPicture\">\n    </div>\n  </div>\n\n  <div class=\"col-sm-2\">\n    <button *ngIf=\"isEditMode\" style=\"margin-top: 25px;\" (click)=\"updateComingSoonPicture()\" class=\"btn btn-primary\">Update</button>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <strong style=\"color: #e50914; font-size: 13px\">NB: Recommended picture size is 680px by 400px (width by height)</strong>\n  </div>\n</div>\n\n<br>\n\n<div class=\"row\">\n  <div class=\"col-sm-10\">\n    <div class=\"form-group\">\n      <label for=\"comingSoonDescription\">Description</label>\n      <textarea rows=\"4\" cols=\"50\" class=\"form-control\" id=\"comingSoonDescription\" [(ngModel)]=\"comingSoonDescription\" placeholder=\"Description\"></textarea>\n    </div>\n  </div>\n\n  <div class=\"col-sm-2\">\n    <button *ngIf=\"isEditMode\" style=\"margin-top: 25px;\" (click)=\"updateComingSoonDescription()\" class=\"btn btn-primary\">Update</button>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-10\">\n    <div class=\"form-group\">\n      <label for=\"comingSoonReleaseDate\">Release Date</label>\n      <input type=\"text\" class=\"form-control\" id=\"comingSoonReleaseDate\" [(ngModel)]=\"comingSoonReleaseDate\" placeholder=\"Release Date\">\n\n      <!-- <mat-form-field>\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field> -->\n    </div>\n  </div>\n\n  <div class=\"col-sm-2\">\n    <button *ngIf=\"isEditMode\" style=\"margin-top: 25px;\" (click)=\"updateComingSoonReleaseDate()\" class=\"btn btn-primary\">Update</button>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-10\">\n    <div *ngIf=\"showProgress\" aria-valuemin=\"0\" role=\"progressbar\" class=\"progress-bar progress-bar-animated progress-bar-striped\"\n      attr.aria-valuenow=\"{{progress}}\" aria-valuemax=\"100\" [ngStyle]=\"{width:progress/100 | percent:'1.0-1'}\" style=\" background-color: #e50914\">\n      <strong style=\"color: white\">{{progress}}%</strong>\n    </div>\n  </div>\n</div>\n\n<br>\n\n<div class=\"row\">\n  <button type=\"submit\" style=\"float: right;\" *ngIf=\"!isEditMode\" (click)=\"addNewComingSoon()\" class=\"btn btn-primary\">Add</button>\n</div>"

/***/ }),

/***/ "./src/app/components/coming-soon-editor/coming-soon-editor.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/coming-soon-editor/coming-soon-editor.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ComingSoonEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonEditorComponent", function() { return ComingSoonEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_Firestore_ComingSoonService_coming_soon_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Firestore/ComingSoonService/coming-soon.service.js */ "./src/app/services/Firestore/ComingSoonService/coming-soon.service.js");
/* harmony import */ var _services_FirebaseStorage_firebase_storage_service_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/FirebaseStorage/firebase-storage.service.js */ "./src/app/services/FirebaseStorage/firebase-storage.service.js");
/* harmony import */ var _assets_js_demo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/js/demo.js */ "./src/assets/js/demo.js");
/* harmony import */ var _assets_js_demo_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_js_demo_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_ComingSoon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/ComingSoon.js */ "./src/app/models/ComingSoon.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ComingSoonEditorComponent = /** @class */ (function () {
    function ComingSoonEditorComponent(comingSoonService, firebaseStorage, spinner, dialogRef, data) {
        this.comingSoonService = comingSoonService;
        this.firebaseStorage = firebaseStorage;
        this.spinner = spinner;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isEditMode = false;
        this.showProgress = false;
        this.progress = 0;
        this.isEditMode = data.isEditMode;
        if (this.isEditMode) {
            this.comingSoonId = data.comingSoon.comingSoonId;
            this.comingSoonName = data.comingSoon.name;
            this.comingSoonDescription = data.comingSoon.description;
            this.comingSoonReleaseDate = data.comingSoon.releaseDate;
        }
    }
    ComingSoonEditorComponent.prototype.ngOnInit = function () { };
    ComingSoonEditorComponent.prototype.addNewComingSoon = function () {
        var _this = this;
        if (!this.comingSoonName) {
            demo.showWarningNotification("Please provide a name.");
            return;
        }
        var comingSoonPicture = (document.getElementById("comingSoonPicture")).files[0];
        if (!comingSoonPicture) {
            demo.showWarningNotification("Please select an image file to upload.");
            return;
        }
        if (!this.comingSoonDescription) {
            demo.showWarningNotification("Please provide a description.");
            return;
        }
        if (!this.comingSoonReleaseDate) {
            demo.showWarningNotification("Please provide a release date.");
            return;
        }
        this.spinner.show();
        this.showProgress = true;
        var pictureUploadPath = "/Coming Soon/" + this.comingSoonName + "/comingSoonPicture";
        // Upload picture
        this.firebaseStorage
            .uploadPicture(pictureUploadPath, comingSoonPicture, function (progress) {
            console.log("Uploading... " + Math.round(progress) + "% done");
            _this.progress = Math.round(progress);
        })
            .then(function (pictureUploadResult) {
            var newComingSoon = new _models_ComingSoon_js__WEBPACK_IMPORTED_MODULE_6__["ComingSoon"]();
            newComingSoon.name = _this.comingSoonName;
            newComingSoon.picture = pictureUploadResult.downloadURL;
            newComingSoon.description = _this.comingSoonDescription;
            newComingSoon.releaseDate = _this.comingSoonReleaseDate;
            // If upload is successful, add to the firestore
            _this.comingSoonService.addNewComingSoon(newComingSoon).then(function (result) {
                _this.spinner.hide();
                _this.showProgress = false;
                newComingSoon.comingSoonId = result.newComingSoonId;
                _this.dialogRef.close({
                    isSuccess: true,
                    newComingSoon: newComingSoon
                });
            }, function (error) {
                _this.spinner.hide();
                _this.showProgress = false;
                demo.showErrorNotification("An error occured: " + error);
            });
        }, function (error) {
            _this.spinner.hide();
            _this.showProgress = false;
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    ComingSoonEditorComponent.prototype.updateComingSoonName = function () {
        var _this = this;
        if (!this.comingSoonName) {
            demo.showWarningNotification("Please provide a name.");
            return;
        }
        this.comingSoonService
            .editComingSoonName(this.comingSoonId, this.comingSoonName)
            .then(function (result) {
            _this.dialogRef.close({
                isSuccess: true,
                comingSoonNameUpdated: true,
                newComingSoonName: _this.comingSoonName
            });
        }, function (error) {
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    ComingSoonEditorComponent.prototype.updateComingSoonDescription = function () {
        var _this = this;
        if (!this.comingSoonDescription) {
            demo.showWarningNotification("Please provide a description.");
            return;
        }
        this.comingSoonService
            .editComingSoonDescription(this.comingSoonId, this.comingSoonDescription)
            .then(function (result) {
            _this.dialogRef.close({
                isSuccess: true,
                comingSoonDescriptionUpdated: true,
                newComingSoonDescription: _this.comingSoonDescription
            });
        }, function (error) {
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    ComingSoonEditorComponent.prototype.updateComingSoonReleaseDate = function () {
        var _this = this;
        if (!this.comingSoonReleaseDate) {
            demo.showWarningNotification("Please provide a release date.");
            return;
        }
        this.comingSoonService
            .editComingSoonReleaseDate(this.comingSoonId, this.comingSoonReleaseDate)
            .then(function (result) {
            _this.dialogRef.close({
                isSuccess: true,
                comingSoonReleaseDateUpdated: true,
                newComingSoonReleaseDate: _this.comingSoonDescription
            });
        }, function (error) {
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    ComingSoonEditorComponent.prototype.updateComingSoonPicture = function () {
        var _this = this;
        var comingSoonPicture = (document.getElementById("comingSoonPicture")).files[0];
        if (!comingSoonPicture) {
            demo.showWarningNotification("Please select an image file to upload.");
            return;
        }
        this.spinner.show();
        this.showProgress = true;
        var pictureUploadPath = "/Coming Soon/" + this.comingSoonName + "/comingSoonPicture";
        // Upload picture
        this.firebaseStorage
            .uploadPicture(pictureUploadPath, comingSoonPicture, function (progress) {
            console.log("Uploading... " + Math.round(progress) + "% done");
            _this.progress = Math.round(progress);
        })
            .then(function (pictureUploadResult) {
            // If upload is successful
            _this.comingSoonService
                .editComingSoonPicture(_this.comingSoonId, pictureUploadResult.downloadURL)
                .then(function (result) {
                _this.spinner.hide();
                _this.showProgress = false;
                _this.dialogRef.close({
                    isSuccess: true,
                    comingSoonPictureUpdated: true,
                    newComingSoonPicture: pictureUploadResult.downloadURL
                });
            }, function (error) {
                _this.spinner.hide();
                _this.showProgress = false;
                demo.showErrorNotification("An error occured: " + error);
            });
        }, function (error) {
            _this.spinner.hide();
            _this.showProgress = false;
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    ComingSoonEditorComponent.prototype.closeEditor = function () {
        this.dialogRef.close({
            isSuccess: false
        });
    };
    ComingSoonEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-coming-soon-editor",
            template: __webpack_require__(/*! ./coming-soon-editor.component.html */ "./src/app/components/coming-soon-editor/coming-soon-editor.component.html"),
            styles: [__webpack_require__(/*! ./coming-soon-editor.component.css */ "./src/app/components/coming-soon-editor/coming-soon-editor.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_Firestore_ComingSoonService_coming_soon_service_js__WEBPACK_IMPORTED_MODULE_3__["ComingSoonService"],
            _services_FirebaseStorage_firebase_storage_service_js__WEBPACK_IMPORTED_MODULE_4__["FirebaseStorageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ComingSoonEditorComponent);
    return ComingSoonEditorComponent;
}());



/***/ }),

/***/ "./src/app/components/coming-soon/coming-soon.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/coming-soon/coming-soon.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".line-break {\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n.image-size {\r\n  max-width: 270px;\r\n  max-height: 155px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/coming-soon/coming-soon.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/coming-soon/coming-soon.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(0, 0, 0, 0.0)\" size=\"medium\" color=\"#e50914\" type=\"timer\"></ngx-spinner>\n\n<div class=\"row\">\n  <div class=\"col-md-7\">\n    <button type=\"button\" (click)=\"addNewComingSoon()\" style=\"margin-left: 30px;\" class=\"btn btn-default btn-with-icon\">\n      Add New\n    </button>\n  </div>\n</div>\n\n<div class=\"col-md-3\" *ngFor=\"let comingSoon of comingSoonList\" style=\"min-width: 300px; max-height: 500px;\">\n  <div class=\"card card-profile\">\n    <img class=\"image-size\" src=\"{{comingSoon.picture}}\" alt=\"...\">\n\n    <div class=\"card-body\">\n      <h4 class=\"card-title line-break\">{{comingSoon.name}}</h4>\n\n      <div class=\"card-footer text-center\">\n        <a (click)=\"edit(comingSoon)\" class=\"btn btn-with-icon btn-outline-info btn-info\" style=\"margin: 20px 5px 10px 5px\" data-toggle=\"tooltip\"\n          data-placement=\"bottom\" title=\"Edit\">\n          <i class=\"ti-pencil\" aria-hidden=\"true\"></i>\n        </a>\n\n        <a (click)=\"delete(comingSoon)\" class=\"btn btn-with-icon btn-outline-danger btn-danger\" style=\"margin: 20px 5px 10px 5px\" data-toggle=\"tooltip\"\n          data-placement=\"bottom\" title=\"Delete\">\n          <i class=\"ti-trash\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/coming-soon/coming-soon.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/coming-soon/coming-soon.component.ts ***!
  \*****************************************************************/
/*! exports provided: ComingSoonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonComponent", function() { return ComingSoonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_Firestore_ComingSoonService_coming_soon_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Firestore/ComingSoonService/coming-soon.service */ "./src/app/services/Firestore/ComingSoonService/coming-soon.service.ts");
/* harmony import */ var _coming_soon_editor_coming_soon_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../coming-soon-editor/coming-soon-editor.component */ "./src/app/components/coming-soon-editor/coming-soon-editor.component.ts");
/* harmony import */ var _assets_js_demo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/js/demo.js */ "./src/assets/js/demo.js");
/* harmony import */ var _assets_js_demo_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_js_demo_js__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ComingSoonComponent = /** @class */ (function () {
    function ComingSoonComponent(spinner, dialog, comingSoonService) {
        this.spinner = spinner;
        this.dialog = dialog;
        this.comingSoonService = comingSoonService;
        this.comingSoonList = [];
    }
    ComingSoonComponent.prototype.ngOnInit = function () {
        this.getComingSoon();
    };
    ComingSoonComponent.prototype.getComingSoon = function () {
        var _this = this;
        this.spinner.show();
        this.comingSoonService.getComingSoon().then(function (result) {
            _this.comingSoonList = result.comingSoonList;
            _this.spinner.hide();
        });
    };
    ComingSoonComponent.prototype.addNewComingSoon = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_coming_soon_editor_coming_soon_editor_component__WEBPACK_IMPORTED_MODULE_4__["ComingSoonEditorComponent"], {
            width: "500px",
            data: {
                isEditMode: false
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.isSuccess) {
                // Add new coming soon
                _this.comingSoonList.unshift(result.newComingSoon);
                demo.showSuccessNotification("Coming Soon successfully added!");
            }
        });
    };
    ComingSoonComponent.prototype.edit = function (comingSoon) {
        var dialogRef = this.dialog.open(_coming_soon_editor_coming_soon_editor_component__WEBPACK_IMPORTED_MODULE_4__["ComingSoonEditorComponent"], {
            width: "650px",
            data: {
                isEditMode: true,
                comingSoon: comingSoon
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.isSuccess) {
                // Edit name
                if (result.comingSoonNameUpdated) {
                    comingSoon.name = result.newComingSoonName;
                    demo.showSuccessNotification("Coming soon name successfully updated!");
                }
                else if (result.comingSoonPictureUpdated) {
                    comingSoon.picture = result.newComingSoonPicture;
                    demo.showSuccessNotification("Coming soon picture successfully updated!");
                }
                else if (result.comingSoonDescriptionUpdated) {
                    comingSoon.description = result.newComingSoonDescription;
                    demo.showSuccessNotification("Coming soon description successfully updated!");
                }
                else if (result.comingSoonReleaseDateUpdated) {
                    comingSoon.releaseDate = result.newComingSoonReleaseDate;
                    demo.showSuccessNotification("Coming soon release date successfully updated!");
                }
            }
        });
    };
    ComingSoonComponent.prototype.delete = function (comingSoon) {
        var _this = this;
        var options = {
            title: "Delete?",
            text: "Are you sure you want to delete this?",
            icon: "error",
            buttons: ["Cancel", "Ok"],
            dangerMode: true
        };
        swal(options).then(function (willDelete) {
            if (willDelete) {
                _this.spinner.show();
                // Delete
                _this.comingSoonService.deleteComingSoon(comingSoon).then(function (result) {
                    _this.removeComingSoonFromList(comingSoon);
                    demo.showSuccessNotification("Successfully deleted!");
                    _this.spinner.hide();
                }, function (error) {
                    _this.spinner.hide();
                    demo.showErrorNotification("An error occured: " + error);
                });
            }
        });
    };
    ComingSoonComponent.prototype.removeComingSoonFromList = function (comingSoon) {
        var index = this.comingSoonList.indexOf(comingSoon);
        if (index > -1) {
            this.comingSoonList.splice(index, 1);
        }
    };
    ComingSoonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-coming-soon",
            template: __webpack_require__(/*! ./coming-soon.component.html */ "./src/app/components/coming-soon/coming-soon.component.html"),
            styles: [__webpack_require__(/*! ./coming-soon.component.css */ "./src/app/components/coming-soon/coming-soon.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _services_Firestore_ComingSoonService_coming_soon_service__WEBPACK_IMPORTED_MODULE_3__["ComingSoonService"]])
    ], ComingSoonComponent);
    return ComingSoonComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(0, 0, 0, 0.0)\" size=\"medium\" color=\"#e50914\" type=\"timer\"></ngx-spinner>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-content\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-5\">\r\n                        <div class=\"icon-big icon-warning text-center\">\r\n                            <i class=\"ti-book\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-7\">\r\n                        <div class=\"numbers\">\r\n                            <p>Cursos</p>\r\n                            {{tvShowsCount}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-content\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-5\">\r\n                        <div class=\"icon-big icon-success text-center\">\r\n                            <i class=\"ti-ruler-pencil\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-7\">\r\n                        <div class=\"numbers\">\r\n                            <p>Guias</p>\r\n                            {{moviesCount}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-content\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-5\">\r\n                        <div class=\"icon-big icon-danger text-center\">\r\n                            <i class=\"ti-home\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-7\">\r\n                        <div class=\"numbers\">\r\n                            <p>Home Screen Groups</p>\r\n                            {{homeScreenGroupsCount}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n\r\n    <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-content\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-5\">\r\n                        <div class=\"icon-big icon-danger text-center\">\r\n                            <i class=\"ti-layers\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-7\">\r\n                        <div class=\"numbers\">\r\n                            <p>Categorias</p>\r\n                            {{categoriesCount}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-content\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-5\">\r\n                        <div class=\"icon-big icon-info text-center\">\r\n                            <i class=\"ti-gift\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-7\">\r\n                        <div class=\"numbers\">\r\n                            <p>Proximamente</p>\r\n                            {{comingSoonCount}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_Firestore_TvShowsService_tv_shows_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Firestore/TvShowsService/tv-shows-service.service */ "./src/app/services/Firestore/TvShowsService/tv-shows-service.service.ts");
/* harmony import */ var _services_Firestore_MoviesService_movies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/Firestore/MoviesService/movies.service */ "./src/app/services/Firestore/MoviesService/movies.service.ts");
/* harmony import */ var _services_Firestore_HomeScreenService_home_screen_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/Firestore/HomeScreenService/home-screen.service */ "./src/app/services/Firestore/HomeScreenService/home-screen.service.ts");
/* harmony import */ var _services_Firestore_CategoriesService_categories_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/Firestore/CategoriesService/categories.service */ "./src/app/services/Firestore/CategoriesService/categories.service.ts");
/* harmony import */ var _services_Firestore_ComingSoonService_coming_soon_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/Firestore/ComingSoonService/coming-soon.service */ "./src/app/services/Firestore/ComingSoonService/coming-soon.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(spinner, router, tvShowService, moviesService, homeScreenService, categoriesService, comingSoonService) {
        this.spinner = spinner;
        this.router = router;
        this.tvShowService = tvShowService;
        this.moviesService = moviesService;
        this.homeScreenService = homeScreenService;
        this.categoriesService = categoriesService;
        this.comingSoonService = comingSoonService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        var promises = [
            this.tvShowService.getTvShowsCount(),
            this.moviesService.getMoviesCount(),
            this.homeScreenService.getHomeScreenGroupCount(),
            this.categoriesService.getCategoriesCount(),
            this.comingSoonService.getComingSoonCount()
        ];
        Promise.all(promises).then(function (values) {
            _this.tvShowsCount = values[0].count;
            _this.moviesCount = values[1].count;
            _this.homeScreenGroupsCount = values[2].count;
            _this.categoriesCount = values[3].count;
            _this.comingSoonCount = values[4].count;
            _this.spinner.hide();
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-dashboard",
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_Firestore_TvShowsService_tv_shows_service_service__WEBPACK_IMPORTED_MODULE_3__["TvShowsService"],
            _services_Firestore_MoviesService_movies_service__WEBPACK_IMPORTED_MODULE_4__["MoviesService"],
            _services_Firestore_HomeScreenService_home_screen_service__WEBPACK_IMPORTED_MODULE_5__["HomeScreenService"],
            _services_Firestore_CategoriesService_categories_service__WEBPACK_IMPORTED_MODULE_6__["CategoriesService"],
            _services_Firestore_ComingSoonService_coming_soon_service__WEBPACK_IMPORTED_MODULE_7__["ComingSoonService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home-screen-group-editor/home-screen-group-editor.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/home-screen-group-editor/home-screen-group-editor.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home-screen-group-editor/home-screen-group-editor.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/home-screen-group-editor/home-screen-group-editor.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(0, 0, 0, 0.0)\" size=\"medium\" color=\"#e50914\" type=\"timer\"></ngx-spinner>\n\n<div class=\"row\">\n  <button type=\"button\" style=\"float: right;\" (click)=\"closeEditor()\" class=\"btn btn-default btn-icon\">\n    <i class=\"ti-close\"></i>\n  </button>\n</div>\n\n<div class=\"row\">\n  <h2 *ngIf=\"!isEditMode\" style=\"margin-top: -20px;\">Create New Group</h2>\n  <h2 *ngIf=\"isEditMode\" style=\"margin-top: -20px;\">Edit Existing Group</h2>\n</div>\n\n<br>\n\n<div class=\"row\">\n  <div class=\"col-sm-10\">\n    <div class=\"form-group\">\n      <label for=\"homeScreenGroupName\">Home Screen Group Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"homeScreenGroupName\" [(ngModel)]=\"homeScreenGroupName\" placeholder=\"Group name\">\n    </div>\n  </div>\n\n  <div class=\"col-sm-2\">\n    <button *ngIf=\"isEditMode\" style=\"margin-top: 25px;\" (click)=\"updateHomeScreenGroupName()\" class=\"btn btn-primary\">Update</button>\n  </div>\n</div>\n\n<br>\n\n<div class=\"row\">\n  <button type=\"submit\" style=\"float: right;\" *ngIf=\"!isEditMode\" (click)=\"addNewHomeScreenGroup()\" class=\"btn btn-primary\">Add Group</button>\n</div>"

/***/ }),

/***/ "./src/app/components/home-screen-group-editor/home-screen-group-editor.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/home-screen-group-editor/home-screen-group-editor.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: HomeScreenGroupEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeScreenGroupEditorComponent", function() { return HomeScreenGroupEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_Firestore_HomeScreenService_home_screen_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Firestore/HomeScreenService/home-screen.service.js */ "./src/app/services/Firestore/HomeScreenService/home-screen.service.js");
/* harmony import */ var _assets_js_demo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/js/demo.js */ "./src/assets/js/demo.js");
/* harmony import */ var _assets_js_demo_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_js_demo_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_HomeScreenGroup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/HomeScreenGroup.js */ "./src/app/models/HomeScreenGroup.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var HomeScreenGroupEditorComponent = /** @class */ (function () {
    function HomeScreenGroupEditorComponent(homeScreenService, spinner, dialogRef, data) {
        this.homeScreenService = homeScreenService;
        this.spinner = spinner;
        this.dialogRef = dialogRef;
        this.data = data;
        this.homeScreenGroupName = "";
        this.homeScreenGroupId = "";
        this.isEditMode = false;
        this.isEditMode = data.isEditMode;
        if (this.isEditMode) {
            this.homeScreenGroupName = data.homeScreenGroup.name;
            this.homeScreenGroupId = data.homeScreenGroup.groupId;
        }
    }
    HomeScreenGroupEditorComponent.prototype.ngOnInit = function () { };
    HomeScreenGroupEditorComponent.prototype.addNewHomeScreenGroup = function () {
        var _this = this;
        if (!this.homeScreenGroupName) {
            demo.showWarningNotification("Please provide a name for the home screen group.");
            return;
        }
        this.spinner.show();
        var newHomeScreenGroup = new _models_HomeScreenGroup_js__WEBPACK_IMPORTED_MODULE_5__["HomeScreenGroup"]();
        newHomeScreenGroup.name = this.homeScreenGroupName;
        this.homeScreenService.addNewHomeScreenGroup(newHomeScreenGroup).then(function (result) {
            _this.spinner.hide();
            newHomeScreenGroup.groupId = result.newHomeScreenGroupId;
            _this.dialogRef.close({
                isSuccess: true,
                newHomeScreenGroup: newHomeScreenGroup
            });
        }, function (error) {
            _this.spinner.hide();
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    HomeScreenGroupEditorComponent.prototype.updateHomeScreenGroupName = function () {
        var _this = this;
        if (!this.homeScreenGroupName) {
            demo.showWarningNotification("Please provide a name for the home screen group.");
            return;
        }
        console.log(this.homeScreenGroupId);
        this.homeScreenService
            .editHomeScreenGroupName(this.homeScreenGroupId, this.homeScreenGroupName)
            .then(function (result) {
            _this.dialogRef.close({
                isSuccess: true,
                homeScreenGroupNameUpdated: true,
                newHomeScreenGroupName: _this.homeScreenGroupName
            });
        }, function (error) {
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    HomeScreenGroupEditorComponent.prototype.closeEditor = function () {
        this.dialogRef.close({
            isSuccess: false
        });
    };
    HomeScreenGroupEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-home-screen-group-editor",
            template: __webpack_require__(/*! ./home-screen-group-editor.component.html */ "./src/app/components/home-screen-group-editor/home-screen-group-editor.component.html"),
            styles: [__webpack_require__(/*! ./home-screen-group-editor.component.css */ "./src/app/components/home-screen-group-editor/home-screen-group-editor.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_Firestore_HomeScreenService_home_screen_service_js__WEBPACK_IMPORTED_MODULE_3__["HomeScreenService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], HomeScreenGroupEditorComponent);
    return HomeScreenGroupEditorComponent;
}());



/***/ }),

/***/ "./src/app/components/home-screen-group-items/home-screen-group-items.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/home-screen-group-items/home-screen-group-items.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home-screen-group-items/home-screen-group-items.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/home-screen-group-items/home-screen-group-items.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(0, 0, 0, 0.0)\" size=\"medium\" color=\"#e50914\" type=\"timer\"></ngx-spinner>\n\n<mat-dialog-content>\n  <mat-tab-group>\n    <mat-tab label=\"Movies\">\n      <br>\n      <app-movies [isHomeScreenGroupEditing]=\"isHomeScreenGroupEditing\" [homeScreenGroup]=\"homeScreenGroup\" [homeScreenGroupMovies]=\"homeScreenGroupMovies\">\n      </app-movies>\n    </mat-tab>\n\n    <mat-tab label=\"TV Shows\">\n      <br>\n      <app-tv-shows [isHomeScreenGroupEditing]=\"isHomeScreenGroupEditing\" [homeScreenGroup]=\"homeScreenGroup\" [homeScreenGroupTvShows]=\"homeScreenGroupTvShows\"></app-tv-shows>\n    </mat-tab>\n  </mat-tab-group>\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/components/home-screen-group-items/home-screen-group-items.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/home-screen-group-items/home-screen-group-items.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: HomeScreenGroupItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeScreenGroupItemsComponent", function() { return HomeScreenGroupItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_Firestore_HomeScreenService_home_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Firestore/HomeScreenService/home-screen.service */ "./src/app/services/Firestore/HomeScreenService/home-screen.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var HomeScreenGroupItemsComponent = /** @class */ (function () {
    function HomeScreenGroupItemsComponent(homeScreenService, data, spinner) {
        this.homeScreenService = homeScreenService;
        this.data = data;
        this.spinner = spinner;
        this.isHomeScreenGroupEditing = false;
        this.homeScreenGroupMovies = [];
        this.homeScreenGroupTvShows = [];
        this.homeScreenGroup = data.homeScreenGroup;
    }
    HomeScreenGroupItemsComponent.prototype.ngOnInit = function () {
        this.isHomeScreenGroupEditing = true;
        this.getHomeScreenGroupMovies();
        this.getHomeScreenGroupTvShows();
    };
    HomeScreenGroupItemsComponent.prototype.getHomeScreenGroupMovies = function () {
        var _this = this;
        this.spinner.show();
        this.homeScreenService
            .getHomeScreenGroupMovies(this.homeScreenGroup)
            .then(function (result) {
            _this.homeScreenGroupMovies = result.homeScreenGroupMovies;
            console.log(_this.homeScreenGroupMovies);
            _this.spinner.hide();
        });
    };
    HomeScreenGroupItemsComponent.prototype.getHomeScreenGroupTvShows = function () {
        var _this = this;
        this.spinner.show();
        this.homeScreenService
            .getHomeScreenGroupTvShows(this.homeScreenGroup)
            .then(function (result) {
            _this.homeScreenGroupTvShows = result.homeScreenGroupTvShows;
            _this.spinner.hide();
        });
    };
    HomeScreenGroupItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-home-screen-group-items",
            template: __webpack_require__(/*! ./home-screen-group-items.component.html */ "./src/app/components/home-screen-group-items/home-screen-group-items.component.html"),
            styles: [__webpack_require__(/*! ./home-screen-group-items.component.css */ "./src/app/components/home-screen-group-items/home-screen-group-items.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_Firestore_HomeScreenService_home_screen_service__WEBPACK_IMPORTED_MODULE_2__["HomeScreenService"], Object, ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], HomeScreenGroupItemsComponent);
    return HomeScreenGroupItemsComponent;
}());



/***/ }),

/***/ "./src/app/components/home-screen/home-screen.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/home-screen/home-screen.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".line-break {\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/home-screen/home-screen.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/home-screen/home-screen.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(0, 0, 0, 0.0)\" size=\"medium\" color=\"#e50914\" type=\"timer\"></ngx-spinner>\n\n<div class=\"row\">\n  <div class=\"col-md-7\">\n    <button type=\"button\" (click)=\"addHomeScreenGroup()\" style=\"margin-left: 30px;\" class=\"btn btn-default btn-with-icon\">\n      Add Home Screen Group\n    </button>\n  </div>\n</div>\n\n<div class=\"col-md-3\" *ngFor=\"let group of homeScreenGroups\" style=\"min-width: 300px; max-height: 500px;\">\n  <div class=\"card card-profile\" style=\"margin-top: 50px;\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title line-break\">{{group.name}}</h4>\n\n      <div class=\"card-footer text-center\">\n        <a (click)=\"edit(group)\" class=\"btn btn-with-icon btn-outline-info btn-info\" style=\"margin: 20px 5px 10px 5px\" data-toggle=\"tooltip\"\n          data-placement=\"bottom\" title=\"Edit\">\n          <i class=\"ti-pencil\" aria-hidden=\"true\"></i>\n        </a>\n\n        <a (click)=\"delete(group)\" class=\"btn btn-with-icon btn-outline-danger btn-danger\" style=\"margin: 20px 5px 10px 5px\"\n          data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Delete\">\n          <i class=\"ti-trash\" aria-hidden=\"true\"></i>\n        </a>\n\n        <a (click)=\"openHomeScreenGroup(group)\" class=\"btn btn-with-icon btn-outline-success btn-success\" style=\"margin: 20px 5px 10px 5px\"\n          data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Episodes/Movies\">\n          <i class=\"ti-desktop\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home-screen/home-screen.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/home-screen/home-screen.component.ts ***!
  \*****************************************************************/
/*! exports provided: HomeScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeScreenComponent", function() { return HomeScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_Firestore_HomeScreenService_home_screen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Firestore/HomeScreenService/home-screen.service */ "./src/app/services/Firestore/HomeScreenService/home-screen.service.ts");
/* harmony import */ var _assets_js_demo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/js/demo.js */ "./src/assets/js/demo.js");
/* harmony import */ var _assets_js_demo_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_js_demo_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_screen_group_editor_home_screen_group_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home-screen-group-editor/home-screen-group-editor.component */ "./src/app/components/home-screen-group-editor/home-screen-group-editor.component.ts");
/* harmony import */ var _home_screen_group_items_home_screen_group_items_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../home-screen-group-items/home-screen-group-items.component */ "./src/app/components/home-screen-group-items/home-screen-group-items.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeScreenComponent = /** @class */ (function () {
    function HomeScreenComponent(homeScreenService, spinner, dialog) {
        this.homeScreenService = homeScreenService;
        this.spinner = spinner;
        this.dialog = dialog;
        this.homeScreenGroups = [];
    }
    HomeScreenComponent.prototype.ngOnInit = function () {
        this.getHomeScreenGroups();
    };
    HomeScreenComponent.prototype.getHomeScreenGroups = function () {
        var _this = this;
        this.spinner.show();
        this.homeScreenService.getHomeScreenGroups().then(function (result) {
            _this.homeScreenGroups = result.homeScreenGroups;
            _this.spinner.hide();
        });
    };
    HomeScreenComponent.prototype.addHomeScreenGroup = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_home_screen_group_editor_home_screen_group_editor_component__WEBPACK_IMPORTED_MODULE_5__["HomeScreenGroupEditorComponent"], {
            width: "500px",
            data: {
                isEditMode: false
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.isSuccess) {
                // Add new home screen group
                _this.homeScreenGroups.unshift(result.newHomeScreenGroup);
                demo.showSuccessNotification("Home Screen Group successfully added!");
            }
        });
    };
    HomeScreenComponent.prototype.edit = function (homeScreenGroup) {
        var dialogRef = this.dialog.open(_home_screen_group_editor_home_screen_group_editor_component__WEBPACK_IMPORTED_MODULE_5__["HomeScreenGroupEditorComponent"], {
            width: "650px",
            data: {
                isEditMode: true,
                homeScreenGroup: homeScreenGroup
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.isSuccess) {
                // Edit name
                if (result.homeScreenGroupNameUpdated) {
                    homeScreenGroup.name = result.newHomeScreenGroupName;
                    demo.showSuccessNotification("Home Screen Group name successfully updated!");
                }
            }
        });
    };
    HomeScreenComponent.prototype.delete = function (homeScreenGroup) {
        var _this = this;
        var options = {
            title: "Delete Home Screen Group?",
            text: "Are you sure you want to delete this?",
            icon: "error",
            buttons: ["Cancel", "Ok"],
            dangerMode: true
        };
        swal(options).then(function (willDelete) {
            if (willDelete) {
                _this.spinner.show();
                // Delete
                _this.homeScreenService.deleteHomeScreenGroup(homeScreenGroup).then(function (result) {
                    _this.removeHomeScreenGroupFromList(homeScreenGroup);
                    demo.showSuccessNotification("Home Screen Group successfully deleted!");
                    _this.spinner.hide();
                }, function (error) {
                    _this.spinner.hide();
                    demo.showErrorNotification("An error occured: " + error);
                });
            }
        });
    };
    HomeScreenComponent.prototype.removeHomeScreenGroupFromList = function (homeScreenGroup) {
        var index = this.homeScreenGroups.indexOf(homeScreenGroup);
        if (index > -1) {
            this.homeScreenGroups.splice(index, 1);
        }
    };
    HomeScreenComponent.prototype.openHomeScreenGroup = function (homeScreenGroup) {
        var dialogRef = this.dialog.open(_home_screen_group_items_home_screen_group_items_component__WEBPACK_IMPORTED_MODULE_6__["HomeScreenGroupItemsComponent"], {
            data: {
                homeScreenGroup: homeScreenGroup
            }
        });
        dialogRef.afterClosed().subscribe(function (result) { });
    };
    HomeScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-home-screen",
            template: __webpack_require__(/*! ./home-screen.component.html */ "./src/app/components/home-screen/home-screen.component.html"),
            styles: [__webpack_require__(/*! ./home-screen.component.css */ "./src/app/components/home-screen/home-screen.component.css")]
        }),
        __metadata("design:paramtypes", [_services_Firestore_HomeScreenService_home_screen_service__WEBPACK_IMPORTED_MODULE_3__["HomeScreenService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], HomeScreenComponent);
    return HomeScreenComponent;
}());



/***/ }),

/***/ "./src/app/components/login-modal/login-modal.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/login-modal/login-modal.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*//////////////////////////////////////////////////////////////////\r\n  [ RESTYLE TAG ]*/\r\n\r\n* {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  height: 100%;\r\n  font-family: Poppins-Regular, sans-serif;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\na {\r\n  font-family: Poppins-Regular;\r\n  font-size: 14px;\r\n  line-height: 1.7;\r\n  color: #666666;\r\n  margin: 0px;\r\n  transition: all 0.4s;\r\n  -webkit-transition: all 0.4s;\r\n  -o-transition: all 0.4s;\r\n  -moz-transition: all 0.4s;\r\n}\r\n\r\na:focus {\r\n  outline: none !important;\r\n}\r\n\r\na:hover {\r\n  text-decoration: none;\r\n  color: #a2d400;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  margin: 0px;\r\n}\r\n\r\np {\r\n  font-family: Poppins-Regular;\r\n  font-size: 14px;\r\n  line-height: 1.7;\r\n  color: #666666;\r\n  margin: 0px;\r\n}\r\n\r\nul,\r\nli {\r\n  margin: 0px;\r\n  list-style-type: none;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\ninput {\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\ntextarea {\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\ntextarea:focus,\r\ninput:focus {\r\n  border-color: transparent !important;\r\n}\r\n\r\ninput:focus::-webkit-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\ninput:focus:-moz-placeholder {\r\n  color: transparent;\r\n}\r\n\r\ninput:focus::-moz-placeholder {\r\n  color: transparent;\r\n}\r\n\r\ninput:focus:-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\ntextarea:focus::-webkit-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\ntextarea:focus:-moz-placeholder {\r\n  color: transparent;\r\n}\r\n\r\ntextarea:focus::-moz-placeholder {\r\n  color: transparent;\r\n}\r\n\r\ntextarea:focus:-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\ninput::-webkit-input-placeholder {\r\n  color: #adadad;\r\n}\r\n\r\ninput:-moz-placeholder {\r\n  color: #adadad;\r\n}\r\n\r\ninput::-moz-placeholder {\r\n  color: #adadad;\r\n}\r\n\r\ninput:-ms-input-placeholder {\r\n  color: #adadad;\r\n}\r\n\r\ntextarea::-webkit-input-placeholder {\r\n  color: #adadad;\r\n}\r\n\r\ntextarea:-moz-placeholder {\r\n  color: #adadad;\r\n}\r\n\r\ntextarea::-moz-placeholder {\r\n  color: #adadad;\r\n}\r\n\r\ntextarea:-ms-input-placeholder {\r\n  color: #adadad;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\nbutton {\r\n  outline: none !important;\r\n  border: none;\r\n  background: transparent;\r\n}\r\n\r\nbutton:hover {\r\n  cursor: pointer;\r\n}\r\n\r\niframe {\r\n  border: none !important;\r\n}\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n  [ Utility ]*/\r\n\r\n.txt1 {\r\n  font-family: Poppins-Regular;\r\n  font-size: 14px;\r\n  line-height: 1.5;\r\n  color: white;\r\n}\r\n\r\n.txt2 {\r\n  font-family: Poppins-Regular;\r\n  font-size: 14px;\r\n  line-height: 1.5;\r\n  color: #333333;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.bg1 {\r\n  background-color: #3b5998;\r\n}\r\n\r\n.bg2 {\r\n  background-color: #1da1f2;\r\n}\r\n\r\n.bg3 {\r\n  background-color: #ea4335;\r\n}\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n  [ login ]*/\r\n\r\n.limiter {\r\n  margin: 0 auto;\r\n}\r\n\r\n.container-login100 {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 15px;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\n.wrap-login100 {\r\n  width: 500px;\r\n  background: #fff;\r\n  border-radius: 10px;\r\n  overflow: hidden;\r\n}\r\n\r\n/*------------------------------------------------------------------\r\n  [ Form ]*/\r\n\r\n.login100-form {\r\n  width: 100%;\r\n  background-color: black;\r\n}\r\n\r\n.login100-form-title {\r\n  display: block;\r\n  font-family: Poppins-Bold;\r\n  font-size: 39px;\r\n  color: white;\r\n  line-height: 1.2;\r\n  text-align: center;\r\n}\r\n\r\n/*------------------------------------------------------------------\r\n  [ Input ]*/\r\n\r\n.wrap-input100 {\r\n  width: 100%;\r\n  position: relative;\r\n  border-bottom: 2px solid #d9d9d9;\r\n}\r\n\r\n.label-input100 {\r\n  font-family: Poppins-Regular;\r\n  font-size: 14px;\r\n  color: white;\r\n  line-height: 1.5;\r\n  padding-left: 7px;\r\n}\r\n\r\n.input100 {\r\n  font-family: Poppins-Medium;\r\n  font-size: 16px;\r\n  color: white;\r\n  line-height: 1.2;\r\n\r\n  display: block;\r\n  width: 100%;\r\n  height: 55px;\r\n  background: transparent;\r\n  padding: 0 7px 0 43px;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\n.focus-input100 {\r\n  position: absolute;\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  pointer-events: none;\r\n}\r\n\r\n.focus-input100::after {\r\n  content: attr(data-symbol);\r\n  font-family: Material-Design-Iconic-Font;\r\n  color: #adadad;\r\n  font-size: 22px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: absolute;\r\n  height: calc(100% - 20px);\r\n  bottom: 0;\r\n  left: 0;\r\n  padding-left: 13px;\r\n  padding-top: 3px;\r\n}\r\n\r\n.focus-input100::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  bottom: -2px;\r\n  left: 0;\r\n  width: 0;\r\n  height: 2px;\r\n  background: #7f7f7f;\r\n  transition: all 0.4s;\r\n}\r\n\r\n.input100:focus + .focus-input100::before {\r\n  width: 100%;\r\n}\r\n\r\n.has-val.input100 + .focus-input100::before {\r\n  width: 100%;\r\n}\r\n\r\n.input100:focus + .focus-input100::after {\r\n  color: #a2d400;\r\n}\r\n\r\n.has-val.input100 + .focus-input100::after {\r\n  color: #a2d400;\r\n}\r\n\r\n.login100-form-logo {\r\n  max-height: 200px;\r\n  text-align: center;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  display: block;\r\n}\r\n\r\n/*------------------------------------------------------------------\r\n  [ Button ]*/\r\n\r\n.container-login100-form-btn {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.wrap-login100-form-btn {\r\n  width: 100%;\r\n  display: block;\r\n  position: relative;\r\n  z-index: 1;\r\n  border-radius: 25px;\r\n  overflow: hidden;\r\n  margin: 0 auto;\r\n\r\n  box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);\r\n  -moz-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);\r\n  -webkit-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);\r\n  -o-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);\r\n  -ms-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);\r\n}\r\n\r\n.container-login100-form-btn {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.login100-form-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 0 20px;\r\n  width: 40%;\r\n  height: 50px;\r\n  border-radius: 10px;\r\n  background: #e50914;\r\n\r\n  font-family: Poppins-Medium;\r\n  font-size: 12px;\r\n  color: #fff;\r\n  line-height: 1.2;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n  transition: all 0.4s;\r\n  margin: 0 10px;\r\n}\r\n\r\n.login100-form-btn:hover {\r\n  background: #333333;\r\n}\r\n\r\n/*------------------------------------------------------------------\r\n  [ Alert validate ]*/\r\n\r\n.validate-input {\r\n  position: relative;\r\n}\r\n\r\n.alert-validate::before {\r\n  content: attr(data-validate);\r\n  position: absolute;\r\n  max-width: 70%;\r\n  background-color: #fff;\r\n  border: 1px solid #c80000;\r\n  border-radius: 2px;\r\n  padding: 4px 25px 4px 10px;\r\n  bottom: calc((100% - 20px) / 2);\r\n  -webkit-transform: translateY(50%);\r\n  transform: translateY(50%);\r\n  right: 2px;\r\n  pointer-events: none;\r\n\r\n  font-family: Poppins-Regular;\r\n  color: #c80000;\r\n  font-size: 13px;\r\n  line-height: 1.4;\r\n  text-align: left;\r\n\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: opacity 0.4s;\r\n}\r\n\r\n.alert-validate::after {\r\n  content: \"\\f06a\";\r\n  font-family: FontAwesome;\r\n  display: block;\r\n  position: absolute;\r\n  color: #c80000;\r\n  font-size: 16px;\r\n  bottom: calc((100% - 20px) / 2);\r\n  -webkit-transform: translateY(50%);\r\n  transform: translateY(50%);\r\n  right: 8px;\r\n}\r\n\r\n.alert-validate:hover:before {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .alert-validate::before {\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n  [ Social item ]*/\r\n\r\n.login100-social-item {\r\n  font-size: 25px;\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 50%;\r\n  margin: 5px;\r\n}\r\n\r\n.login100-social-item:hover {\r\n  color: #fff;\r\n  background-color: #333333;\r\n}\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n  [ Responsive ]*/\r\n\r\n@media (max-width: 576px) {\r\n  .wrap-login100 {\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n  }\r\n}\r\n\r\n/*[ FONT SIZE ]\r\n///////////////////////////////////////////////////////////\r\n*/\r\n\r\n.fs-1 {\r\n  font-size: 1px;\r\n}\r\n\r\n.fs-2 {\r\n  font-size: 2px;\r\n}\r\n\r\n.fs-3 {\r\n  font-size: 3px;\r\n}\r\n\r\n.fs-4 {\r\n  font-size: 4px;\r\n}\r\n\r\n.fs-5 {\r\n  font-size: 5px;\r\n}\r\n\r\n.fs-6 {\r\n  font-size: 6px;\r\n}\r\n\r\n.fs-7 {\r\n  font-size: 7px;\r\n}\r\n\r\n.fs-8 {\r\n  font-size: 8px;\r\n}\r\n\r\n.fs-9 {\r\n  font-size: 9px;\r\n}\r\n\r\n.fs-10 {\r\n  font-size: 10px;\r\n}\r\n\r\n.fs-11 {\r\n  font-size: 11px;\r\n}\r\n\r\n.fs-12 {\r\n  font-size: 12px;\r\n}\r\n\r\n.fs-13 {\r\n  font-size: 13px;\r\n}\r\n\r\n.fs-14 {\r\n  font-size: 14px;\r\n}\r\n\r\n.fs-15 {\r\n  font-size: 15px;\r\n}\r\n\r\n.fs-16 {\r\n  font-size: 16px;\r\n}\r\n\r\n.fs-17 {\r\n  font-size: 17px;\r\n}\r\n\r\n.fs-18 {\r\n  font-size: 18px;\r\n}\r\n\r\n.fs-19 {\r\n  font-size: 19px;\r\n}\r\n\r\n.fs-20 {\r\n  font-size: 20px;\r\n}\r\n\r\n.fs-21 {\r\n  font-size: 21px;\r\n}\r\n\r\n.fs-22 {\r\n  font-size: 22px;\r\n}\r\n\r\n.fs-23 {\r\n  font-size: 23px;\r\n}\r\n\r\n.fs-24 {\r\n  font-size: 24px;\r\n}\r\n\r\n.fs-25 {\r\n  font-size: 25px;\r\n}\r\n\r\n.fs-26 {\r\n  font-size: 26px;\r\n}\r\n\r\n.fs-27 {\r\n  font-size: 27px;\r\n}\r\n\r\n.fs-28 {\r\n  font-size: 28px;\r\n}\r\n\r\n.fs-29 {\r\n  font-size: 29px;\r\n}\r\n\r\n.fs-30 {\r\n  font-size: 30px;\r\n}\r\n\r\n.fs-31 {\r\n  font-size: 31px;\r\n}\r\n\r\n.fs-32 {\r\n  font-size: 32px;\r\n}\r\n\r\n.fs-33 {\r\n  font-size: 33px;\r\n}\r\n\r\n.fs-34 {\r\n  font-size: 34px;\r\n}\r\n\r\n.fs-35 {\r\n  font-size: 35px;\r\n}\r\n\r\n.fs-36 {\r\n  font-size: 36px;\r\n}\r\n\r\n.fs-37 {\r\n  font-size: 37px;\r\n}\r\n\r\n.fs-38 {\r\n  font-size: 38px;\r\n}\r\n\r\n.fs-39 {\r\n  font-size: 39px;\r\n}\r\n\r\n.fs-40 {\r\n  font-size: 40px;\r\n}\r\n\r\n.fs-41 {\r\n  font-size: 41px;\r\n}\r\n\r\n.fs-42 {\r\n  font-size: 42px;\r\n}\r\n\r\n.fs-43 {\r\n  font-size: 43px;\r\n}\r\n\r\n.fs-44 {\r\n  font-size: 44px;\r\n}\r\n\r\n.fs-45 {\r\n  font-size: 45px;\r\n}\r\n\r\n.fs-46 {\r\n  font-size: 46px;\r\n}\r\n\r\n.fs-47 {\r\n  font-size: 47px;\r\n}\r\n\r\n.fs-48 {\r\n  font-size: 48px;\r\n}\r\n\r\n.fs-49 {\r\n  font-size: 49px;\r\n}\r\n\r\n.fs-50 {\r\n  font-size: 50px;\r\n}\r\n\r\n.fs-51 {\r\n  font-size: 51px;\r\n}\r\n\r\n.fs-52 {\r\n  font-size: 52px;\r\n}\r\n\r\n.fs-53 {\r\n  font-size: 53px;\r\n}\r\n\r\n.fs-54 {\r\n  font-size: 54px;\r\n}\r\n\r\n.fs-55 {\r\n  font-size: 55px;\r\n}\r\n\r\n.fs-56 {\r\n  font-size: 56px;\r\n}\r\n\r\n.fs-57 {\r\n  font-size: 57px;\r\n}\r\n\r\n.fs-58 {\r\n  font-size: 58px;\r\n}\r\n\r\n.fs-59 {\r\n  font-size: 59px;\r\n}\r\n\r\n.fs-60 {\r\n  font-size: 60px;\r\n}\r\n\r\n.fs-61 {\r\n  font-size: 61px;\r\n}\r\n\r\n.fs-62 {\r\n  font-size: 62px;\r\n}\r\n\r\n.fs-63 {\r\n  font-size: 63px;\r\n}\r\n\r\n.fs-64 {\r\n  font-size: 64px;\r\n}\r\n\r\n.fs-65 {\r\n  font-size: 65px;\r\n}\r\n\r\n.fs-66 {\r\n  font-size: 66px;\r\n}\r\n\r\n.fs-67 {\r\n  font-size: 67px;\r\n}\r\n\r\n.fs-68 {\r\n  font-size: 68px;\r\n}\r\n\r\n.fs-69 {\r\n  font-size: 69px;\r\n}\r\n\r\n.fs-70 {\r\n  font-size: 70px;\r\n}\r\n\r\n.fs-71 {\r\n  font-size: 71px;\r\n}\r\n\r\n.fs-72 {\r\n  font-size: 72px;\r\n}\r\n\r\n.fs-73 {\r\n  font-size: 73px;\r\n}\r\n\r\n.fs-74 {\r\n  font-size: 74px;\r\n}\r\n\r\n.fs-75 {\r\n  font-size: 75px;\r\n}\r\n\r\n.fs-76 {\r\n  font-size: 76px;\r\n}\r\n\r\n.fs-77 {\r\n  font-size: 77px;\r\n}\r\n\r\n.fs-78 {\r\n  font-size: 78px;\r\n}\r\n\r\n.fs-79 {\r\n  font-size: 79px;\r\n}\r\n\r\n.fs-80 {\r\n  font-size: 80px;\r\n}\r\n\r\n.fs-81 {\r\n  font-size: 81px;\r\n}\r\n\r\n.fs-82 {\r\n  font-size: 82px;\r\n}\r\n\r\n.fs-83 {\r\n  font-size: 83px;\r\n}\r\n\r\n.fs-84 {\r\n  font-size: 84px;\r\n}\r\n\r\n.fs-85 {\r\n  font-size: 85px;\r\n}\r\n\r\n.fs-86 {\r\n  font-size: 86px;\r\n}\r\n\r\n.fs-87 {\r\n  font-size: 87px;\r\n}\r\n\r\n.fs-88 {\r\n  font-size: 88px;\r\n}\r\n\r\n.fs-89 {\r\n  font-size: 89px;\r\n}\r\n\r\n.fs-90 {\r\n  font-size: 90px;\r\n}\r\n\r\n.fs-91 {\r\n  font-size: 91px;\r\n}\r\n\r\n.fs-92 {\r\n  font-size: 92px;\r\n}\r\n\r\n.fs-93 {\r\n  font-size: 93px;\r\n}\r\n\r\n.fs-94 {\r\n  font-size: 94px;\r\n}\r\n\r\n.fs-95 {\r\n  font-size: 95px;\r\n}\r\n\r\n.fs-96 {\r\n  font-size: 96px;\r\n}\r\n\r\n.fs-97 {\r\n  font-size: 97px;\r\n}\r\n\r\n.fs-98 {\r\n  font-size: 98px;\r\n}\r\n\r\n.fs-99 {\r\n  font-size: 99px;\r\n}\r\n\r\n.fs-100 {\r\n  font-size: 100px;\r\n}\r\n\r\n.fs-101 {\r\n  font-size: 101px;\r\n}\r\n\r\n.fs-102 {\r\n  font-size: 102px;\r\n}\r\n\r\n.fs-103 {\r\n  font-size: 103px;\r\n}\r\n\r\n.fs-104 {\r\n  font-size: 104px;\r\n}\r\n\r\n.fs-105 {\r\n  font-size: 105px;\r\n}\r\n\r\n.fs-106 {\r\n  font-size: 106px;\r\n}\r\n\r\n.fs-107 {\r\n  font-size: 107px;\r\n}\r\n\r\n.fs-108 {\r\n  font-size: 108px;\r\n}\r\n\r\n.fs-109 {\r\n  font-size: 109px;\r\n}\r\n\r\n.fs-110 {\r\n  font-size: 110px;\r\n}\r\n\r\n.fs-111 {\r\n  font-size: 111px;\r\n}\r\n\r\n.fs-112 {\r\n  font-size: 112px;\r\n}\r\n\r\n.fs-113 {\r\n  font-size: 113px;\r\n}\r\n\r\n.fs-114 {\r\n  font-size: 114px;\r\n}\r\n\r\n.fs-115 {\r\n  font-size: 115px;\r\n}\r\n\r\n.fs-116 {\r\n  font-size: 116px;\r\n}\r\n\r\n.fs-117 {\r\n  font-size: 117px;\r\n}\r\n\r\n.fs-118 {\r\n  font-size: 118px;\r\n}\r\n\r\n.fs-119 {\r\n  font-size: 119px;\r\n}\r\n\r\n.fs-120 {\r\n  font-size: 120px;\r\n}\r\n\r\n.fs-121 {\r\n  font-size: 121px;\r\n}\r\n\r\n.fs-122 {\r\n  font-size: 122px;\r\n}\r\n\r\n.fs-123 {\r\n  font-size: 123px;\r\n}\r\n\r\n.fs-124 {\r\n  font-size: 124px;\r\n}\r\n\r\n.fs-125 {\r\n  font-size: 125px;\r\n}\r\n\r\n.fs-126 {\r\n  font-size: 126px;\r\n}\r\n\r\n.fs-127 {\r\n  font-size: 127px;\r\n}\r\n\r\n.fs-128 {\r\n  font-size: 128px;\r\n}\r\n\r\n.fs-129 {\r\n  font-size: 129px;\r\n}\r\n\r\n.fs-130 {\r\n  font-size: 130px;\r\n}\r\n\r\n.fs-131 {\r\n  font-size: 131px;\r\n}\r\n\r\n.fs-132 {\r\n  font-size: 132px;\r\n}\r\n\r\n.fs-133 {\r\n  font-size: 133px;\r\n}\r\n\r\n.fs-134 {\r\n  font-size: 134px;\r\n}\r\n\r\n.fs-135 {\r\n  font-size: 135px;\r\n}\r\n\r\n.fs-136 {\r\n  font-size: 136px;\r\n}\r\n\r\n.fs-137 {\r\n  font-size: 137px;\r\n}\r\n\r\n.fs-138 {\r\n  font-size: 138px;\r\n}\r\n\r\n.fs-139 {\r\n  font-size: 139px;\r\n}\r\n\r\n.fs-140 {\r\n  font-size: 140px;\r\n}\r\n\r\n.fs-141 {\r\n  font-size: 141px;\r\n}\r\n\r\n.fs-142 {\r\n  font-size: 142px;\r\n}\r\n\r\n.fs-143 {\r\n  font-size: 143px;\r\n}\r\n\r\n.fs-144 {\r\n  font-size: 144px;\r\n}\r\n\r\n.fs-145 {\r\n  font-size: 145px;\r\n}\r\n\r\n.fs-146 {\r\n  font-size: 146px;\r\n}\r\n\r\n.fs-147 {\r\n  font-size: 147px;\r\n}\r\n\r\n.fs-148 {\r\n  font-size: 148px;\r\n}\r\n\r\n.fs-149 {\r\n  font-size: 149px;\r\n}\r\n\r\n.fs-150 {\r\n  font-size: 150px;\r\n}\r\n\r\n.fs-151 {\r\n  font-size: 151px;\r\n}\r\n\r\n.fs-152 {\r\n  font-size: 152px;\r\n}\r\n\r\n.fs-153 {\r\n  font-size: 153px;\r\n}\r\n\r\n.fs-154 {\r\n  font-size: 154px;\r\n}\r\n\r\n.fs-155 {\r\n  font-size: 155px;\r\n}\r\n\r\n.fs-156 {\r\n  font-size: 156px;\r\n}\r\n\r\n.fs-157 {\r\n  font-size: 157px;\r\n}\r\n\r\n.fs-158 {\r\n  font-size: 158px;\r\n}\r\n\r\n.fs-159 {\r\n  font-size: 159px;\r\n}\r\n\r\n.fs-160 {\r\n  font-size: 160px;\r\n}\r\n\r\n.fs-161 {\r\n  font-size: 161px;\r\n}\r\n\r\n.fs-162 {\r\n  font-size: 162px;\r\n}\r\n\r\n.fs-163 {\r\n  font-size: 163px;\r\n}\r\n\r\n.fs-164 {\r\n  font-size: 164px;\r\n}\r\n\r\n.fs-165 {\r\n  font-size: 165px;\r\n}\r\n\r\n.fs-166 {\r\n  font-size: 166px;\r\n}\r\n\r\n.fs-167 {\r\n  font-size: 167px;\r\n}\r\n\r\n.fs-168 {\r\n  font-size: 168px;\r\n}\r\n\r\n.fs-169 {\r\n  font-size: 169px;\r\n}\r\n\r\n.fs-170 {\r\n  font-size: 170px;\r\n}\r\n\r\n.fs-171 {\r\n  font-size: 171px;\r\n}\r\n\r\n.fs-172 {\r\n  font-size: 172px;\r\n}\r\n\r\n.fs-173 {\r\n  font-size: 173px;\r\n}\r\n\r\n.fs-174 {\r\n  font-size: 174px;\r\n}\r\n\r\n.fs-175 {\r\n  font-size: 175px;\r\n}\r\n\r\n.fs-176 {\r\n  font-size: 176px;\r\n}\r\n\r\n.fs-177 {\r\n  font-size: 177px;\r\n}\r\n\r\n.fs-178 {\r\n  font-size: 178px;\r\n}\r\n\r\n.fs-179 {\r\n  font-size: 179px;\r\n}\r\n\r\n.fs-180 {\r\n  font-size: 180px;\r\n}\r\n\r\n.fs-181 {\r\n  font-size: 181px;\r\n}\r\n\r\n.fs-182 {\r\n  font-size: 182px;\r\n}\r\n\r\n.fs-183 {\r\n  font-size: 183px;\r\n}\r\n\r\n.fs-184 {\r\n  font-size: 184px;\r\n}\r\n\r\n.fs-185 {\r\n  font-size: 185px;\r\n}\r\n\r\n.fs-186 {\r\n  font-size: 186px;\r\n}\r\n\r\n.fs-187 {\r\n  font-size: 187px;\r\n}\r\n\r\n.fs-188 {\r\n  font-size: 188px;\r\n}\r\n\r\n.fs-189 {\r\n  font-size: 189px;\r\n}\r\n\r\n.fs-190 {\r\n  font-size: 190px;\r\n}\r\n\r\n.fs-191 {\r\n  font-size: 191px;\r\n}\r\n\r\n.fs-192 {\r\n  font-size: 192px;\r\n}\r\n\r\n.fs-193 {\r\n  font-size: 193px;\r\n}\r\n\r\n.fs-194 {\r\n  font-size: 194px;\r\n}\r\n\r\n.fs-195 {\r\n  font-size: 195px;\r\n}\r\n\r\n.fs-196 {\r\n  font-size: 196px;\r\n}\r\n\r\n.fs-197 {\r\n  font-size: 197px;\r\n}\r\n\r\n.fs-198 {\r\n  font-size: 198px;\r\n}\r\n\r\n.fs-199 {\r\n  font-size: 199px;\r\n}\r\n\r\n.fs-200 {\r\n  font-size: 200px;\r\n}\r\n\r\n/*[ PADDING ]\r\n///////////////////////////////////////////////////////////\r\n*/\r\n\r\n.p-t-0 {\r\n  padding-top: 0px;\r\n}\r\n\r\n.p-t-1 {\r\n  padding-top: 1px;\r\n}\r\n\r\n.p-t-2 {\r\n  padding-top: 2px;\r\n}\r\n\r\n.p-t-3 {\r\n  padding-top: 3px;\r\n}\r\n\r\n.p-t-4 {\r\n  padding-top: 4px;\r\n}\r\n\r\n.p-t-5 {\r\n  padding-top: 5px;\r\n}\r\n\r\n.p-t-6 {\r\n  padding-top: 6px;\r\n}\r\n\r\n.p-t-7 {\r\n  padding-top: 7px;\r\n}\r\n\r\n.p-t-8 {\r\n  padding-top: 8px;\r\n}\r\n\r\n.p-t-9 {\r\n  padding-top: 9px;\r\n}\r\n\r\n.p-t-10 {\r\n  padding-top: 10px;\r\n}\r\n\r\n.p-t-11 {\r\n  padding-top: 11px;\r\n}\r\n\r\n.p-t-12 {\r\n  padding-top: 12px;\r\n}\r\n\r\n.p-t-13 {\r\n  padding-top: 13px;\r\n}\r\n\r\n.p-t-14 {\r\n  padding-top: 14px;\r\n}\r\n\r\n.p-t-15 {\r\n  padding-top: 15px;\r\n}\r\n\r\n.p-t-16 {\r\n  padding-top: 16px;\r\n}\r\n\r\n.p-t-17 {\r\n  padding-top: 17px;\r\n}\r\n\r\n.p-t-18 {\r\n  padding-top: 18px;\r\n}\r\n\r\n.p-t-19 {\r\n  padding-top: 19px;\r\n}\r\n\r\n.p-t-20 {\r\n  padding-top: 20px;\r\n}\r\n\r\n.p-t-21 {\r\n  padding-top: 21px;\r\n}\r\n\r\n.p-t-22 {\r\n  padding-top: 22px;\r\n}\r\n\r\n.p-t-23 {\r\n  padding-top: 23px;\r\n}\r\n\r\n.p-t-24 {\r\n  padding-top: 24px;\r\n}\r\n\r\n.p-t-25 {\r\n  padding-top: 25px;\r\n}\r\n\r\n.p-t-26 {\r\n  padding-top: 26px;\r\n}\r\n\r\n.p-t-27 {\r\n  padding-top: 27px;\r\n}\r\n\r\n.p-t-28 {\r\n  padding-top: 28px;\r\n}\r\n\r\n.p-t-29 {\r\n  padding-top: 29px;\r\n}\r\n\r\n.p-t-30 {\r\n  padding-top: 30px;\r\n}\r\n\r\n.p-t-31 {\r\n  padding-top: 31px;\r\n}\r\n\r\n.p-t-32 {\r\n  padding-top: 32px;\r\n}\r\n\r\n.p-t-33 {\r\n  padding-top: 33px;\r\n}\r\n\r\n.p-t-34 {\r\n  padding-top: 34px;\r\n}\r\n\r\n.p-t-35 {\r\n  padding-top: 35px;\r\n}\r\n\r\n.p-t-36 {\r\n  padding-top: 36px;\r\n}\r\n\r\n.p-t-37 {\r\n  padding-top: 37px;\r\n}\r\n\r\n.p-t-38 {\r\n  padding-top: 38px;\r\n}\r\n\r\n.p-t-39 {\r\n  padding-top: 39px;\r\n}\r\n\r\n.p-t-40 {\r\n  padding-top: 40px;\r\n}\r\n\r\n.p-t-41 {\r\n  padding-top: 41px;\r\n}\r\n\r\n.p-t-42 {\r\n  padding-top: 42px;\r\n}\r\n\r\n.p-t-43 {\r\n  padding-top: 43px;\r\n}\r\n\r\n.p-t-44 {\r\n  padding-top: 44px;\r\n}\r\n\r\n.p-t-45 {\r\n  padding-top: 45px;\r\n}\r\n\r\n.p-t-46 {\r\n  padding-top: 46px;\r\n}\r\n\r\n.p-t-47 {\r\n  padding-top: 47px;\r\n}\r\n\r\n.p-t-48 {\r\n  padding-top: 48px;\r\n}\r\n\r\n.p-t-49 {\r\n  padding-top: 49px;\r\n}\r\n\r\n.p-t-50 {\r\n  padding-top: 50px;\r\n}\r\n\r\n.p-t-51 {\r\n  padding-top: 51px;\r\n}\r\n\r\n.p-t-52 {\r\n  padding-top: 52px;\r\n}\r\n\r\n.p-t-53 {\r\n  padding-top: 53px;\r\n}\r\n\r\n.p-t-54 {\r\n  padding-top: 54px;\r\n}\r\n\r\n.p-t-55 {\r\n  padding-top: 55px;\r\n}\r\n\r\n.p-t-56 {\r\n  padding-top: 56px;\r\n}\r\n\r\n.p-t-57 {\r\n  padding-top: 57px;\r\n}\r\n\r\n.p-t-58 {\r\n  padding-top: 58px;\r\n}\r\n\r\n.p-t-59 {\r\n  padding-top: 59px;\r\n}\r\n\r\n.p-t-60 {\r\n  padding-top: 60px;\r\n}\r\n\r\n.p-t-61 {\r\n  padding-top: 61px;\r\n}\r\n\r\n.p-t-62 {\r\n  padding-top: 62px;\r\n}\r\n\r\n.p-t-63 {\r\n  padding-top: 63px;\r\n}\r\n\r\n.p-t-64 {\r\n  padding-top: 64px;\r\n}\r\n\r\n.p-t-65 {\r\n  padding-top: 65px;\r\n}\r\n\r\n.p-t-66 {\r\n  padding-top: 66px;\r\n}\r\n\r\n.p-t-67 {\r\n  padding-top: 67px;\r\n}\r\n\r\n.p-t-68 {\r\n  padding-top: 68px;\r\n}\r\n\r\n.p-t-69 {\r\n  padding-top: 69px;\r\n}\r\n\r\n.p-t-70 {\r\n  padding-top: 70px;\r\n}\r\n\r\n.p-t-71 {\r\n  padding-top: 71px;\r\n}\r\n\r\n.p-t-72 {\r\n  padding-top: 72px;\r\n}\r\n\r\n.p-t-73 {\r\n  padding-top: 73px;\r\n}\r\n\r\n.p-t-74 {\r\n  padding-top: 74px;\r\n}\r\n\r\n.p-t-75 {\r\n  padding-top: 75px;\r\n}\r\n\r\n.p-t-76 {\r\n  padding-top: 76px;\r\n}\r\n\r\n.p-t-77 {\r\n  padding-top: 77px;\r\n}\r\n\r\n.p-t-78 {\r\n  padding-top: 78px;\r\n}\r\n\r\n.p-t-79 {\r\n  padding-top: 79px;\r\n}\r\n\r\n.p-t-80 {\r\n  padding-top: 80px;\r\n}\r\n\r\n.p-t-81 {\r\n  padding-top: 81px;\r\n}\r\n\r\n.p-t-82 {\r\n  padding-top: 82px;\r\n}\r\n\r\n.p-t-83 {\r\n  padding-top: 83px;\r\n}\r\n\r\n.p-t-84 {\r\n  padding-top: 84px;\r\n}\r\n\r\n.p-t-85 {\r\n  padding-top: 85px;\r\n}\r\n\r\n.p-t-86 {\r\n  padding-top: 86px;\r\n}\r\n\r\n.p-t-87 {\r\n  padding-top: 87px;\r\n}\r\n\r\n.p-t-88 {\r\n  padding-top: 88px;\r\n}\r\n\r\n.p-t-89 {\r\n  padding-top: 89px;\r\n}\r\n\r\n.p-t-90 {\r\n  padding-top: 90px;\r\n}\r\n\r\n.p-t-91 {\r\n  padding-top: 91px;\r\n}\r\n\r\n.p-t-92 {\r\n  padding-top: 92px;\r\n}\r\n\r\n.p-t-93 {\r\n  padding-top: 93px;\r\n}\r\n\r\n.p-t-94 {\r\n  padding-top: 94px;\r\n}\r\n\r\n.p-t-95 {\r\n  padding-top: 95px;\r\n}\r\n\r\n.p-t-96 {\r\n  padding-top: 96px;\r\n}\r\n\r\n.p-t-97 {\r\n  padding-top: 97px;\r\n}\r\n\r\n.p-t-98 {\r\n  padding-top: 98px;\r\n}\r\n\r\n.p-t-99 {\r\n  padding-top: 99px;\r\n}\r\n\r\n.p-t-100 {\r\n  padding-top: 100px;\r\n}\r\n\r\n.p-t-101 {\r\n  padding-top: 101px;\r\n}\r\n\r\n.p-t-102 {\r\n  padding-top: 102px;\r\n}\r\n\r\n.p-t-103 {\r\n  padding-top: 103px;\r\n}\r\n\r\n.p-t-104 {\r\n  padding-top: 104px;\r\n}\r\n\r\n.p-t-105 {\r\n  padding-top: 105px;\r\n}\r\n\r\n.p-t-106 {\r\n  padding-top: 106px;\r\n}\r\n\r\n.p-t-107 {\r\n  padding-top: 107px;\r\n}\r\n\r\n.p-t-108 {\r\n  padding-top: 108px;\r\n}\r\n\r\n.p-t-109 {\r\n  padding-top: 109px;\r\n}\r\n\r\n.p-t-110 {\r\n  padding-top: 110px;\r\n}\r\n\r\n.p-t-111 {\r\n  padding-top: 111px;\r\n}\r\n\r\n.p-t-112 {\r\n  padding-top: 112px;\r\n}\r\n\r\n.p-t-113 {\r\n  padding-top: 113px;\r\n}\r\n\r\n.p-t-114 {\r\n  padding-top: 114px;\r\n}\r\n\r\n.p-t-115 {\r\n  padding-top: 115px;\r\n}\r\n\r\n.p-t-116 {\r\n  padding-top: 116px;\r\n}\r\n\r\n.p-t-117 {\r\n  padding-top: 117px;\r\n}\r\n\r\n.p-t-118 {\r\n  padding-top: 118px;\r\n}\r\n\r\n.p-t-119 {\r\n  padding-top: 119px;\r\n}\r\n\r\n.p-t-120 {\r\n  padding-top: 120px;\r\n}\r\n\r\n.p-t-121 {\r\n  padding-top: 121px;\r\n}\r\n\r\n.p-t-122 {\r\n  padding-top: 122px;\r\n}\r\n\r\n.p-t-123 {\r\n  padding-top: 123px;\r\n}\r\n\r\n.p-t-124 {\r\n  padding-top: 124px;\r\n}\r\n\r\n.p-t-125 {\r\n  padding-top: 125px;\r\n}\r\n\r\n.p-t-126 {\r\n  padding-top: 126px;\r\n}\r\n\r\n.p-t-127 {\r\n  padding-top: 127px;\r\n}\r\n\r\n.p-t-128 {\r\n  padding-top: 128px;\r\n}\r\n\r\n.p-t-129 {\r\n  padding-top: 129px;\r\n}\r\n\r\n.p-t-130 {\r\n  padding-top: 130px;\r\n}\r\n\r\n.p-t-131 {\r\n  padding-top: 131px;\r\n}\r\n\r\n.p-t-132 {\r\n  padding-top: 132px;\r\n}\r\n\r\n.p-t-133 {\r\n  padding-top: 133px;\r\n}\r\n\r\n.p-t-134 {\r\n  padding-top: 134px;\r\n}\r\n\r\n.p-t-135 {\r\n  padding-top: 135px;\r\n}\r\n\r\n.p-t-136 {\r\n  padding-top: 136px;\r\n}\r\n\r\n.p-t-137 {\r\n  padding-top: 137px;\r\n}\r\n\r\n.p-t-138 {\r\n  padding-top: 138px;\r\n}\r\n\r\n.p-t-139 {\r\n  padding-top: 139px;\r\n}\r\n\r\n.p-t-140 {\r\n  padding-top: 140px;\r\n}\r\n\r\n.p-t-141 {\r\n  padding-top: 141px;\r\n}\r\n\r\n.p-t-142 {\r\n  padding-top: 142px;\r\n}\r\n\r\n.p-t-143 {\r\n  padding-top: 143px;\r\n}\r\n\r\n.p-t-144 {\r\n  padding-top: 144px;\r\n}\r\n\r\n.p-t-145 {\r\n  padding-top: 145px;\r\n}\r\n\r\n.p-t-146 {\r\n  padding-top: 146px;\r\n}\r\n\r\n.p-t-147 {\r\n  padding-top: 147px;\r\n}\r\n\r\n.p-t-148 {\r\n  padding-top: 148px;\r\n}\r\n\r\n.p-t-149 {\r\n  padding-top: 149px;\r\n}\r\n\r\n.p-t-150 {\r\n  padding-top: 150px;\r\n}\r\n\r\n.p-t-151 {\r\n  padding-top: 151px;\r\n}\r\n\r\n.p-t-152 {\r\n  padding-top: 152px;\r\n}\r\n\r\n.p-t-153 {\r\n  padding-top: 153px;\r\n}\r\n\r\n.p-t-154 {\r\n  padding-top: 154px;\r\n}\r\n\r\n.p-t-155 {\r\n  padding-top: 155px;\r\n}\r\n\r\n.p-t-156 {\r\n  padding-top: 156px;\r\n}\r\n\r\n.p-t-157 {\r\n  padding-top: 157px;\r\n}\r\n\r\n.p-t-158 {\r\n  padding-top: 158px;\r\n}\r\n\r\n.p-t-159 {\r\n  padding-top: 159px;\r\n}\r\n\r\n.p-t-160 {\r\n  padding-top: 160px;\r\n}\r\n\r\n.p-t-161 {\r\n  padding-top: 161px;\r\n}\r\n\r\n.p-t-162 {\r\n  padding-top: 162px;\r\n}\r\n\r\n.p-t-163 {\r\n  padding-top: 163px;\r\n}\r\n\r\n.p-t-164 {\r\n  padding-top: 164px;\r\n}\r\n\r\n.p-t-165 {\r\n  padding-top: 165px;\r\n}\r\n\r\n.p-t-166 {\r\n  padding-top: 166px;\r\n}\r\n\r\n.p-t-167 {\r\n  padding-top: 167px;\r\n}\r\n\r\n.p-t-168 {\r\n  padding-top: 168px;\r\n}\r\n\r\n.p-t-169 {\r\n  padding-top: 169px;\r\n}\r\n\r\n.p-t-170 {\r\n  padding-top: 170px;\r\n}\r\n\r\n.p-t-171 {\r\n  padding-top: 171px;\r\n}\r\n\r\n.p-t-172 {\r\n  padding-top: 172px;\r\n}\r\n\r\n.p-t-173 {\r\n  padding-top: 173px;\r\n}\r\n\r\n.p-t-174 {\r\n  padding-top: 174px;\r\n}\r\n\r\n.p-t-175 {\r\n  padding-top: 175px;\r\n}\r\n\r\n.p-t-176 {\r\n  padding-top: 176px;\r\n}\r\n\r\n.p-t-177 {\r\n  padding-top: 177px;\r\n}\r\n\r\n.p-t-178 {\r\n  padding-top: 178px;\r\n}\r\n\r\n.p-t-179 {\r\n  padding-top: 179px;\r\n}\r\n\r\n.p-t-180 {\r\n  padding-top: 180px;\r\n}\r\n\r\n.p-t-181 {\r\n  padding-top: 181px;\r\n}\r\n\r\n.p-t-182 {\r\n  padding-top: 182px;\r\n}\r\n\r\n.p-t-183 {\r\n  padding-top: 183px;\r\n}\r\n\r\n.p-t-184 {\r\n  padding-top: 184px;\r\n}\r\n\r\n.p-t-185 {\r\n  padding-top: 185px;\r\n}\r\n\r\n.p-t-186 {\r\n  padding-top: 186px;\r\n}\r\n\r\n.p-t-187 {\r\n  padding-top: 187px;\r\n}\r\n\r\n.p-t-188 {\r\n  padding-top: 188px;\r\n}\r\n\r\n.p-t-189 {\r\n  padding-top: 189px;\r\n}\r\n\r\n.p-t-190 {\r\n  padding-top: 190px;\r\n}\r\n\r\n.p-t-191 {\r\n  padding-top: 191px;\r\n}\r\n\r\n.p-t-192 {\r\n  padding-top: 192px;\r\n}\r\n\r\n.p-t-193 {\r\n  padding-top: 193px;\r\n}\r\n\r\n.p-t-194 {\r\n  padding-top: 194px;\r\n}\r\n\r\n.p-t-195 {\r\n  padding-top: 195px;\r\n}\r\n\r\n.p-t-196 {\r\n  padding-top: 196px;\r\n}\r\n\r\n.p-t-197 {\r\n  padding-top: 197px;\r\n}\r\n\r\n.p-t-198 {\r\n  padding-top: 198px;\r\n}\r\n\r\n.p-t-199 {\r\n  padding-top: 199px;\r\n}\r\n\r\n.p-t-200 {\r\n  padding-top: 200px;\r\n}\r\n\r\n.p-t-201 {\r\n  padding-top: 201px;\r\n}\r\n\r\n.p-t-202 {\r\n  padding-top: 202px;\r\n}\r\n\r\n.p-t-203 {\r\n  padding-top: 203px;\r\n}\r\n\r\n.p-t-204 {\r\n  padding-top: 204px;\r\n}\r\n\r\n.p-t-205 {\r\n  padding-top: 205px;\r\n}\r\n\r\n.p-t-206 {\r\n  padding-top: 206px;\r\n}\r\n\r\n.p-t-207 {\r\n  padding-top: 207px;\r\n}\r\n\r\n.p-t-208 {\r\n  padding-top: 208px;\r\n}\r\n\r\n.p-t-209 {\r\n  padding-top: 209px;\r\n}\r\n\r\n.p-t-210 {\r\n  padding-top: 210px;\r\n}\r\n\r\n.p-t-211 {\r\n  padding-top: 211px;\r\n}\r\n\r\n.p-t-212 {\r\n  padding-top: 212px;\r\n}\r\n\r\n.p-t-213 {\r\n  padding-top: 213px;\r\n}\r\n\r\n.p-t-214 {\r\n  padding-top: 214px;\r\n}\r\n\r\n.p-t-215 {\r\n  padding-top: 215px;\r\n}\r\n\r\n.p-t-216 {\r\n  padding-top: 216px;\r\n}\r\n\r\n.p-t-217 {\r\n  padding-top: 217px;\r\n}\r\n\r\n.p-t-218 {\r\n  padding-top: 218px;\r\n}\r\n\r\n.p-t-219 {\r\n  padding-top: 219px;\r\n}\r\n\r\n.p-t-220 {\r\n  padding-top: 220px;\r\n}\r\n\r\n.p-t-221 {\r\n  padding-top: 221px;\r\n}\r\n\r\n.p-t-222 {\r\n  padding-top: 222px;\r\n}\r\n\r\n.p-t-223 {\r\n  padding-top: 223px;\r\n}\r\n\r\n.p-t-224 {\r\n  padding-top: 224px;\r\n}\r\n\r\n.p-t-225 {\r\n  padding-top: 225px;\r\n}\r\n\r\n.p-t-226 {\r\n  padding-top: 226px;\r\n}\r\n\r\n.p-t-227 {\r\n  padding-top: 227px;\r\n}\r\n\r\n.p-t-228 {\r\n  padding-top: 228px;\r\n}\r\n\r\n.p-t-229 {\r\n  padding-top: 229px;\r\n}\r\n\r\n.p-t-230 {\r\n  padding-top: 230px;\r\n}\r\n\r\n.p-t-231 {\r\n  padding-top: 231px;\r\n}\r\n\r\n.p-t-232 {\r\n  padding-top: 232px;\r\n}\r\n\r\n.p-t-233 {\r\n  padding-top: 233px;\r\n}\r\n\r\n.p-t-234 {\r\n  padding-top: 234px;\r\n}\r\n\r\n.p-t-235 {\r\n  padding-top: 235px;\r\n}\r\n\r\n.p-t-236 {\r\n  padding-top: 236px;\r\n}\r\n\r\n.p-t-237 {\r\n  padding-top: 237px;\r\n}\r\n\r\n.p-t-238 {\r\n  padding-top: 238px;\r\n}\r\n\r\n.p-t-239 {\r\n  padding-top: 239px;\r\n}\r\n\r\n.p-t-240 {\r\n  padding-top: 240px;\r\n}\r\n\r\n.p-t-241 {\r\n  padding-top: 241px;\r\n}\r\n\r\n.p-t-242 {\r\n  padding-top: 242px;\r\n}\r\n\r\n.p-t-243 {\r\n  padding-top: 243px;\r\n}\r\n\r\n.p-t-244 {\r\n  padding-top: 244px;\r\n}\r\n\r\n.p-t-245 {\r\n  padding-top: 245px;\r\n}\r\n\r\n.p-t-246 {\r\n  padding-top: 246px;\r\n}\r\n\r\n.p-t-247 {\r\n  padding-top: 247px;\r\n}\r\n\r\n.p-t-248 {\r\n  padding-top: 248px;\r\n}\r\n\r\n.p-t-249 {\r\n  padding-top: 249px;\r\n}\r\n\r\n.p-t-250 {\r\n  padding-top: 250px;\r\n}\r\n\r\n.p-b-0 {\r\n  padding-bottom: 0px;\r\n}\r\n\r\n.p-b-1 {\r\n  padding-bottom: 1px;\r\n}\r\n\r\n.p-b-2 {\r\n  padding-bottom: 2px;\r\n}\r\n\r\n.p-b-3 {\r\n  padding-bottom: 3px;\r\n}\r\n\r\n.p-b-4 {\r\n  padding-bottom: 4px;\r\n}\r\n\r\n.p-b-5 {\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.p-b-6 {\r\n  padding-bottom: 6px;\r\n}\r\n\r\n.p-b-7 {\r\n  padding-bottom: 7px;\r\n}\r\n\r\n.p-b-8 {\r\n  padding-bottom: 8px;\r\n}\r\n\r\n.p-b-9 {\r\n  padding-bottom: 9px;\r\n}\r\n\r\n.p-b-10 {\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.p-b-11 {\r\n  padding-bottom: 11px;\r\n}\r\n\r\n.p-b-12 {\r\n  padding-bottom: 12px;\r\n}\r\n\r\n.p-b-13 {\r\n  padding-bottom: 13px;\r\n}\r\n\r\n.p-b-14 {\r\n  padding-bottom: 14px;\r\n}\r\n\r\n.p-b-15 {\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.p-b-16 {\r\n  padding-bottom: 16px;\r\n}\r\n\r\n.p-b-17 {\r\n  padding-bottom: 17px;\r\n}\r\n\r\n.p-b-18 {\r\n  padding-bottom: 18px;\r\n}\r\n\r\n.p-b-19 {\r\n  padding-bottom: 19px;\r\n}\r\n\r\n.p-b-20 {\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.p-b-21 {\r\n  padding-bottom: 21px;\r\n}\r\n\r\n.p-b-22 {\r\n  padding-bottom: 22px;\r\n}\r\n\r\n.p-b-23 {\r\n  padding-bottom: 23px;\r\n}\r\n\r\n.p-b-24 {\r\n  padding-bottom: 24px;\r\n}\r\n\r\n.p-b-25 {\r\n  padding-bottom: 25px;\r\n}\r\n\r\n.p-b-26 {\r\n  padding-bottom: 26px;\r\n}\r\n\r\n.p-b-27 {\r\n  padding-bottom: 27px;\r\n}\r\n\r\n.p-b-28 {\r\n  padding-bottom: 28px;\r\n}\r\n\r\n.p-b-29 {\r\n  padding-bottom: 29px;\r\n}\r\n\r\n.p-b-30 {\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.p-b-31 {\r\n  padding-bottom: 31px;\r\n}\r\n\r\n.p-b-32 {\r\n  padding-bottom: 32px;\r\n}\r\n\r\n.p-b-33 {\r\n  padding-bottom: 33px;\r\n}\r\n\r\n.p-b-34 {\r\n  padding-bottom: 34px;\r\n}\r\n\r\n.p-b-35 {\r\n  padding-bottom: 35px;\r\n}\r\n\r\n.p-b-36 {\r\n  padding-bottom: 36px;\r\n}\r\n\r\n.p-b-37 {\r\n  padding-bottom: 37px;\r\n}\r\n\r\n.p-b-38 {\r\n  padding-bottom: 38px;\r\n}\r\n\r\n.p-b-39 {\r\n  padding-bottom: 39px;\r\n}\r\n\r\n.p-b-40 {\r\n  padding-bottom: 40px;\r\n}\r\n\r\n.p-b-41 {\r\n  padding-bottom: 41px;\r\n}\r\n\r\n.p-b-42 {\r\n  padding-bottom: 42px;\r\n}\r\n\r\n.p-b-43 {\r\n  padding-bottom: 43px;\r\n}\r\n\r\n.p-b-44 {\r\n  padding-bottom: 44px;\r\n}\r\n\r\n.p-b-45 {\r\n  padding-bottom: 45px;\r\n}\r\n\r\n.p-b-46 {\r\n  padding-bottom: 46px;\r\n}\r\n\r\n.p-b-47 {\r\n  padding-bottom: 47px;\r\n}\r\n\r\n.p-b-48 {\r\n  padding-bottom: 48px;\r\n}\r\n\r\n.p-b-49 {\r\n  padding-bottom: 49px;\r\n}\r\n\r\n.p-b-50 {\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.p-b-51 {\r\n  padding-bottom: 51px;\r\n}\r\n\r\n.p-b-52 {\r\n  padding-bottom: 52px;\r\n}\r\n\r\n.p-b-53 {\r\n  padding-bottom: 53px;\r\n}\r\n\r\n.p-b-54 {\r\n  padding-bottom: 54px;\r\n}\r\n\r\n.p-b-55 {\r\n  padding-bottom: 55px;\r\n}\r\n\r\n.p-b-56 {\r\n  padding-bottom: 56px;\r\n}\r\n\r\n.p-b-57 {\r\n  padding-bottom: 57px;\r\n}\r\n\r\n.p-b-58 {\r\n  padding-bottom: 58px;\r\n}\r\n\r\n.p-b-59 {\r\n  padding-bottom: 59px;\r\n}\r\n\r\n.p-b-60 {\r\n  padding-bottom: 60px;\r\n}\r\n\r\n.p-b-61 {\r\n  padding-bottom: 61px;\r\n}\r\n\r\n.p-b-62 {\r\n  padding-bottom: 62px;\r\n}\r\n\r\n.p-b-63 {\r\n  padding-bottom: 63px;\r\n}\r\n\r\n.p-b-64 {\r\n  padding-bottom: 64px;\r\n}\r\n\r\n.p-b-65 {\r\n  padding-bottom: 65px;\r\n}\r\n\r\n.p-b-66 {\r\n  padding-bottom: 66px;\r\n}\r\n\r\n.p-b-67 {\r\n  padding-bottom: 67px;\r\n}\r\n\r\n.p-b-68 {\r\n  padding-bottom: 68px;\r\n}\r\n\r\n.p-b-69 {\r\n  padding-bottom: 69px;\r\n}\r\n\r\n.p-b-70 {\r\n  padding-bottom: 70px;\r\n}\r\n\r\n.p-b-71 {\r\n  padding-bottom: 71px;\r\n}\r\n\r\n.p-b-72 {\r\n  padding-bottom: 72px;\r\n}\r\n\r\n.p-b-73 {\r\n  padding-bottom: 73px;\r\n}\r\n\r\n.p-b-74 {\r\n  padding-bottom: 74px;\r\n}\r\n\r\n.p-b-75 {\r\n  padding-bottom: 75px;\r\n}\r\n\r\n.p-b-76 {\r\n  padding-bottom: 76px;\r\n}\r\n\r\n.p-b-77 {\r\n  padding-bottom: 77px;\r\n}\r\n\r\n.p-b-78 {\r\n  padding-bottom: 78px;\r\n}\r\n\r\n.p-b-79 {\r\n  padding-bottom: 79px;\r\n}\r\n\r\n.p-b-80 {\r\n  padding-bottom: 80px;\r\n}\r\n\r\n.p-b-81 {\r\n  padding-bottom: 81px;\r\n}\r\n\r\n.p-b-82 {\r\n  padding-bottom: 82px;\r\n}\r\n\r\n.p-b-83 {\r\n  padding-bottom: 83px;\r\n}\r\n\r\n.p-b-84 {\r\n  padding-bottom: 84px;\r\n}\r\n\r\n.p-b-85 {\r\n  padding-bottom: 85px;\r\n}\r\n\r\n.p-b-86 {\r\n  padding-bottom: 86px;\r\n}\r\n\r\n.p-b-87 {\r\n  padding-bottom: 87px;\r\n}\r\n\r\n.p-b-88 {\r\n  padding-bottom: 88px;\r\n}\r\n\r\n.p-b-89 {\r\n  padding-bottom: 89px;\r\n}\r\n\r\n.p-b-90 {\r\n  padding-bottom: 90px;\r\n}\r\n\r\n.p-b-91 {\r\n  padding-bottom: 91px;\r\n}\r\n\r\n.p-b-92 {\r\n  padding-bottom: 92px;\r\n}\r\n\r\n.p-b-93 {\r\n  padding-bottom: 93px;\r\n}\r\n\r\n.p-b-94 {\r\n  padding-bottom: 94px;\r\n}\r\n\r\n.p-b-95 {\r\n  padding-bottom: 95px;\r\n}\r\n\r\n.p-b-96 {\r\n  padding-bottom: 96px;\r\n}\r\n\r\n.p-b-97 {\r\n  padding-bottom: 97px;\r\n}\r\n\r\n.p-b-98 {\r\n  padding-bottom: 98px;\r\n}\r\n\r\n.p-b-99 {\r\n  padding-bottom: 99px;\r\n}\r\n\r\n.p-b-100 {\r\n  padding-bottom: 100px;\r\n}\r\n\r\n.p-b-101 {\r\n  padding-bottom: 101px;\r\n}\r\n\r\n.p-b-102 {\r\n  padding-bottom: 102px;\r\n}\r\n\r\n.p-b-103 {\r\n  padding-bottom: 103px;\r\n}\r\n\r\n.p-b-104 {\r\n  padding-bottom: 104px;\r\n}\r\n\r\n.p-b-105 {\r\n  padding-bottom: 105px;\r\n}\r\n\r\n.p-b-106 {\r\n  padding-bottom: 106px;\r\n}\r\n\r\n.p-b-107 {\r\n  padding-bottom: 107px;\r\n}\r\n\r\n.p-b-108 {\r\n  padding-bottom: 108px;\r\n}\r\n\r\n.p-b-109 {\r\n  padding-bottom: 109px;\r\n}\r\n\r\n.p-b-110 {\r\n  padding-bottom: 110px;\r\n}\r\n\r\n.p-b-111 {\r\n  padding-bottom: 111px;\r\n}\r\n\r\n.p-b-112 {\r\n  padding-bottom: 112px;\r\n}\r\n\r\n.p-b-113 {\r\n  padding-bottom: 113px;\r\n}\r\n\r\n.p-b-114 {\r\n  padding-bottom: 114px;\r\n}\r\n\r\n.p-b-115 {\r\n  padding-bottom: 115px;\r\n}\r\n\r\n.p-b-116 {\r\n  padding-bottom: 116px;\r\n}\r\n\r\n.p-b-117 {\r\n  padding-bottom: 117px;\r\n}\r\n\r\n.p-b-118 {\r\n  padding-bottom: 118px;\r\n}\r\n\r\n.p-b-119 {\r\n  padding-bottom: 119px;\r\n}\r\n\r\n.p-b-120 {\r\n  padding-bottom: 120px;\r\n}\r\n\r\n.p-b-121 {\r\n  padding-bottom: 121px;\r\n}\r\n\r\n.p-b-122 {\r\n  padding-bottom: 122px;\r\n}\r\n\r\n.p-b-123 {\r\n  padding-bottom: 123px;\r\n}\r\n\r\n.p-b-124 {\r\n  padding-bottom: 124px;\r\n}\r\n\r\n.p-b-125 {\r\n  padding-bottom: 125px;\r\n}\r\n\r\n.p-b-126 {\r\n  padding-bottom: 126px;\r\n}\r\n\r\n.p-b-127 {\r\n  padding-bottom: 127px;\r\n}\r\n\r\n.p-b-128 {\r\n  padding-bottom: 128px;\r\n}\r\n\r\n.p-b-129 {\r\n  padding-bottom: 129px;\r\n}\r\n\r\n.p-b-130 {\r\n  padding-bottom: 130px;\r\n}\r\n\r\n.p-b-131 {\r\n  padding-bottom: 131px;\r\n}\r\n\r\n.p-b-132 {\r\n  padding-bottom: 132px;\r\n}\r\n\r\n.p-b-133 {\r\n  padding-bottom: 133px;\r\n}\r\n\r\n.p-b-134 {\r\n  padding-bottom: 134px;\r\n}\r\n\r\n.p-b-135 {\r\n  padding-bottom: 135px;\r\n}\r\n\r\n.p-b-136 {\r\n  padding-bottom: 136px;\r\n}\r\n\r\n.p-b-137 {\r\n  padding-bottom: 137px;\r\n}\r\n\r\n.p-b-138 {\r\n  padding-bottom: 138px;\r\n}\r\n\r\n.p-b-139 {\r\n  padding-bottom: 139px;\r\n}\r\n\r\n.p-b-140 {\r\n  padding-bottom: 140px;\r\n}\r\n\r\n.p-b-141 {\r\n  padding-bottom: 141px;\r\n}\r\n\r\n.p-b-142 {\r\n  padding-bottom: 142px;\r\n}\r\n\r\n.p-b-143 {\r\n  padding-bottom: 143px;\r\n}\r\n\r\n.p-b-144 {\r\n  padding-bottom: 144px;\r\n}\r\n\r\n.p-b-145 {\r\n  padding-bottom: 145px;\r\n}\r\n\r\n.p-b-146 {\r\n  padding-bottom: 146px;\r\n}\r\n\r\n.p-b-147 {\r\n  padding-bottom: 147px;\r\n}\r\n\r\n.p-b-148 {\r\n  padding-bottom: 148px;\r\n}\r\n\r\n.p-b-149 {\r\n  padding-bottom: 149px;\r\n}\r\n\r\n.p-b-150 {\r\n  padding-bottom: 150px;\r\n}\r\n\r\n.p-b-151 {\r\n  padding-bottom: 151px;\r\n}\r\n\r\n.p-b-152 {\r\n  padding-bottom: 152px;\r\n}\r\n\r\n.p-b-153 {\r\n  padding-bottom: 153px;\r\n}\r\n\r\n.p-b-154 {\r\n  padding-bottom: 154px;\r\n}\r\n\r\n.p-b-155 {\r\n  padding-bottom: 155px;\r\n}\r\n\r\n.p-b-156 {\r\n  padding-bottom: 156px;\r\n}\r\n\r\n.p-b-157 {\r\n  padding-bottom: 157px;\r\n}\r\n\r\n.p-b-158 {\r\n  padding-bottom: 158px;\r\n}\r\n\r\n.p-b-159 {\r\n  padding-bottom: 159px;\r\n}\r\n\r\n.p-b-160 {\r\n  padding-bottom: 160px;\r\n}\r\n\r\n.p-b-161 {\r\n  padding-bottom: 161px;\r\n}\r\n\r\n.p-b-162 {\r\n  padding-bottom: 162px;\r\n}\r\n\r\n.p-b-163 {\r\n  padding-bottom: 163px;\r\n}\r\n\r\n.p-b-164 {\r\n  padding-bottom: 164px;\r\n}\r\n\r\n.p-b-165 {\r\n  padding-bottom: 165px;\r\n}\r\n\r\n.p-b-166 {\r\n  padding-bottom: 166px;\r\n}\r\n\r\n.p-b-167 {\r\n  padding-bottom: 167px;\r\n}\r\n\r\n.p-b-168 {\r\n  padding-bottom: 168px;\r\n}\r\n\r\n.p-b-169 {\r\n  padding-bottom: 169px;\r\n}\r\n\r\n.p-b-170 {\r\n  padding-bottom: 170px;\r\n}\r\n\r\n.p-b-171 {\r\n  padding-bottom: 171px;\r\n}\r\n\r\n.p-b-172 {\r\n  padding-bottom: 172px;\r\n}\r\n\r\n.p-b-173 {\r\n  padding-bottom: 173px;\r\n}\r\n\r\n.p-b-174 {\r\n  padding-bottom: 174px;\r\n}\r\n\r\n.p-b-175 {\r\n  padding-bottom: 175px;\r\n}\r\n\r\n.p-b-176 {\r\n  padding-bottom: 176px;\r\n}\r\n\r\n.p-b-177 {\r\n  padding-bottom: 177px;\r\n}\r\n\r\n.p-b-178 {\r\n  padding-bottom: 178px;\r\n}\r\n\r\n.p-b-179 {\r\n  padding-bottom: 179px;\r\n}\r\n\r\n.p-b-180 {\r\n  padding-bottom: 180px;\r\n}\r\n\r\n.p-b-181 {\r\n  padding-bottom: 181px;\r\n}\r\n\r\n.p-b-182 {\r\n  padding-bottom: 182px;\r\n}\r\n\r\n.p-b-183 {\r\n  padding-bottom: 183px;\r\n}\r\n\r\n.p-b-184 {\r\n  padding-bottom: 184px;\r\n}\r\n\r\n.p-b-185 {\r\n  padding-bottom: 185px;\r\n}\r\n\r\n.p-b-186 {\r\n  padding-bottom: 186px;\r\n}\r\n\r\n.p-b-187 {\r\n  padding-bottom: 187px;\r\n}\r\n\r\n.p-b-188 {\r\n  padding-bottom: 188px;\r\n}\r\n\r\n.p-b-189 {\r\n  padding-bottom: 189px;\r\n}\r\n\r\n.p-b-190 {\r\n  padding-bottom: 190px;\r\n}\r\n\r\n.p-b-191 {\r\n  padding-bottom: 191px;\r\n}\r\n\r\n.p-b-192 {\r\n  padding-bottom: 192px;\r\n}\r\n\r\n.p-b-193 {\r\n  padding-bottom: 193px;\r\n}\r\n\r\n.p-b-194 {\r\n  padding-bottom: 194px;\r\n}\r\n\r\n.p-b-195 {\r\n  padding-bottom: 195px;\r\n}\r\n\r\n.p-b-196 {\r\n  padding-bottom: 196px;\r\n}\r\n\r\n.p-b-197 {\r\n  padding-bottom: 197px;\r\n}\r\n\r\n.p-b-198 {\r\n  padding-bottom: 198px;\r\n}\r\n\r\n.p-b-199 {\r\n  padding-bottom: 199px;\r\n}\r\n\r\n.p-b-200 {\r\n  padding-bottom: 200px;\r\n}\r\n\r\n.p-b-201 {\r\n  padding-bottom: 201px;\r\n}\r\n\r\n.p-b-202 {\r\n  padding-bottom: 202px;\r\n}\r\n\r\n.p-b-203 {\r\n  padding-bottom: 203px;\r\n}\r\n\r\n.p-b-204 {\r\n  padding-bottom: 204px;\r\n}\r\n\r\n.p-b-205 {\r\n  padding-bottom: 205px;\r\n}\r\n\r\n.p-b-206 {\r\n  padding-bottom: 206px;\r\n}\r\n\r\n.p-b-207 {\r\n  padding-bottom: 207px;\r\n}\r\n\r\n.p-b-208 {\r\n  padding-bottom: 208px;\r\n}\r\n\r\n.p-b-209 {\r\n  padding-bottom: 209px;\r\n}\r\n\r\n.p-b-210 {\r\n  padding-bottom: 210px;\r\n}\r\n\r\n.p-b-211 {\r\n  padding-bottom: 211px;\r\n}\r\n\r\n.p-b-212 {\r\n  padding-bottom: 212px;\r\n}\r\n\r\n.p-b-213 {\r\n  padding-bottom: 213px;\r\n}\r\n\r\n.p-b-214 {\r\n  padding-bottom: 214px;\r\n}\r\n\r\n.p-b-215 {\r\n  padding-bottom: 215px;\r\n}\r\n\r\n.p-b-216 {\r\n  padding-bottom: 216px;\r\n}\r\n\r\n.p-b-217 {\r\n  padding-bottom: 217px;\r\n}\r\n\r\n.p-b-218 {\r\n  padding-bottom: 218px;\r\n}\r\n\r\n.p-b-219 {\r\n  padding-bottom: 219px;\r\n}\r\n\r\n.p-b-220 {\r\n  padding-bottom: 220px;\r\n}\r\n\r\n.p-b-221 {\r\n  padding-bottom: 221px;\r\n}\r\n\r\n.p-b-222 {\r\n  padding-bottom: 222px;\r\n}\r\n\r\n.p-b-223 {\r\n  padding-bottom: 223px;\r\n}\r\n\r\n.p-b-224 {\r\n  padding-bottom: 224px;\r\n}\r\n\r\n.p-b-225 {\r\n  padding-bottom: 225px;\r\n}\r\n\r\n.p-b-226 {\r\n  padding-bottom: 226px;\r\n}\r\n\r\n.p-b-227 {\r\n  padding-bottom: 227px;\r\n}\r\n\r\n.p-b-228 {\r\n  padding-bottom: 228px;\r\n}\r\n\r\n.p-b-229 {\r\n  padding-bottom: 229px;\r\n}\r\n\r\n.p-b-230 {\r\n  padding-bottom: 230px;\r\n}\r\n\r\n.p-b-231 {\r\n  padding-bottom: 231px;\r\n}\r\n\r\n.p-b-232 {\r\n  padding-bottom: 232px;\r\n}\r\n\r\n.p-b-233 {\r\n  padding-bottom: 233px;\r\n}\r\n\r\n.p-b-234 {\r\n  padding-bottom: 234px;\r\n}\r\n\r\n.p-b-235 {\r\n  padding-bottom: 235px;\r\n}\r\n\r\n.p-b-236 {\r\n  padding-bottom: 236px;\r\n}\r\n\r\n.p-b-237 {\r\n  padding-bottom: 237px;\r\n}\r\n\r\n.p-b-238 {\r\n  padding-bottom: 238px;\r\n}\r\n\r\n.p-b-239 {\r\n  padding-bottom: 239px;\r\n}\r\n\r\n.p-b-240 {\r\n  padding-bottom: 240px;\r\n}\r\n\r\n.p-b-241 {\r\n  padding-bottom: 241px;\r\n}\r\n\r\n.p-b-242 {\r\n  padding-bottom: 242px;\r\n}\r\n\r\n.p-b-243 {\r\n  padding-bottom: 243px;\r\n}\r\n\r\n.p-b-244 {\r\n  padding-bottom: 244px;\r\n}\r\n\r\n.p-b-245 {\r\n  padding-bottom: 245px;\r\n}\r\n\r\n.p-b-246 {\r\n  padding-bottom: 246px;\r\n}\r\n\r\n.p-b-247 {\r\n  padding-bottom: 247px;\r\n}\r\n\r\n.p-b-248 {\r\n  padding-bottom: 248px;\r\n}\r\n\r\n.p-b-249 {\r\n  padding-bottom: 249px;\r\n}\r\n\r\n.p-b-250 {\r\n  padding-bottom: 250px;\r\n}\r\n\r\n.p-l-0 {\r\n  padding-left: 0px;\r\n}\r\n\r\n.p-l-1 {\r\n  padding-left: 1px;\r\n}\r\n\r\n.p-l-2 {\r\n  padding-left: 2px;\r\n}\r\n\r\n.p-l-3 {\r\n  padding-left: 3px;\r\n}\r\n\r\n.p-l-4 {\r\n  padding-left: 4px;\r\n}\r\n\r\n.p-l-5 {\r\n  padding-left: 5px;\r\n}\r\n\r\n.p-l-6 {\r\n  padding-left: 6px;\r\n}\r\n\r\n.p-l-7 {\r\n  padding-left: 7px;\r\n}\r\n\r\n.p-l-8 {\r\n  padding-left: 8px;\r\n}\r\n\r\n.p-l-9 {\r\n  padding-left: 9px;\r\n}\r\n\r\n.p-l-10 {\r\n  padding-left: 10px;\r\n}\r\n\r\n.p-l-11 {\r\n  padding-left: 11px;\r\n}\r\n\r\n.p-l-12 {\r\n  padding-left: 12px;\r\n}\r\n\r\n.p-l-13 {\r\n  padding-left: 13px;\r\n}\r\n\r\n.p-l-14 {\r\n  padding-left: 14px;\r\n}\r\n\r\n.p-l-15 {\r\n  padding-left: 15px;\r\n}\r\n\r\n.p-l-16 {\r\n  padding-left: 16px;\r\n}\r\n\r\n.p-l-17 {\r\n  padding-left: 17px;\r\n}\r\n\r\n.p-l-18 {\r\n  padding-left: 18px;\r\n}\r\n\r\n.p-l-19 {\r\n  padding-left: 19px;\r\n}\r\n\r\n.p-l-20 {\r\n  padding-left: 20px;\r\n}\r\n\r\n.p-l-21 {\r\n  padding-left: 21px;\r\n}\r\n\r\n.p-l-22 {\r\n  padding-left: 22px;\r\n}\r\n\r\n.p-l-23 {\r\n  padding-left: 23px;\r\n}\r\n\r\n.p-l-24 {\r\n  padding-left: 24px;\r\n}\r\n\r\n.p-l-25 {\r\n  padding-left: 25px;\r\n}\r\n\r\n.p-l-26 {\r\n  padding-left: 26px;\r\n}\r\n\r\n.p-l-27 {\r\n  padding-left: 27px;\r\n}\r\n\r\n.p-l-28 {\r\n  padding-left: 28px;\r\n}\r\n\r\n.p-l-29 {\r\n  padding-left: 29px;\r\n}\r\n\r\n.p-l-30 {\r\n  padding-left: 30px;\r\n}\r\n\r\n.p-l-31 {\r\n  padding-left: 31px;\r\n}\r\n\r\n.p-l-32 {\r\n  padding-left: 32px;\r\n}\r\n\r\n.p-l-33 {\r\n  padding-left: 33px;\r\n}\r\n\r\n.p-l-34 {\r\n  padding-left: 34px;\r\n}\r\n\r\n.p-l-35 {\r\n  padding-left: 35px;\r\n}\r\n\r\n.p-l-36 {\r\n  padding-left: 36px;\r\n}\r\n\r\n.p-l-37 {\r\n  padding-left: 37px;\r\n}\r\n\r\n.p-l-38 {\r\n  padding-left: 38px;\r\n}\r\n\r\n.p-l-39 {\r\n  padding-left: 39px;\r\n}\r\n\r\n.p-l-40 {\r\n  padding-left: 40px;\r\n}\r\n\r\n.p-l-41 {\r\n  padding-left: 41px;\r\n}\r\n\r\n.p-l-42 {\r\n  padding-left: 42px;\r\n}\r\n\r\n.p-l-43 {\r\n  padding-left: 43px;\r\n}\r\n\r\n.p-l-44 {\r\n  padding-left: 44px;\r\n}\r\n\r\n.p-l-45 {\r\n  padding-left: 45px;\r\n}\r\n\r\n.p-l-46 {\r\n  padding-left: 46px;\r\n}\r\n\r\n.p-l-47 {\r\n  padding-left: 47px;\r\n}\r\n\r\n.p-l-48 {\r\n  padding-left: 48px;\r\n}\r\n\r\n.p-l-49 {\r\n  padding-left: 49px;\r\n}\r\n\r\n.p-l-50 {\r\n  padding-left: 50px;\r\n}\r\n\r\n.p-l-51 {\r\n  padding-left: 51px;\r\n}\r\n\r\n.p-l-52 {\r\n  padding-left: 52px;\r\n}\r\n\r\n.p-l-53 {\r\n  padding-left: 53px;\r\n}\r\n\r\n.p-l-54 {\r\n  padding-left: 54px;\r\n}\r\n\r\n.p-l-55 {\r\n  padding-left: 55px;\r\n}\r\n\r\n.p-l-56 {\r\n  padding-left: 56px;\r\n}\r\n\r\n.p-l-57 {\r\n  padding-left: 57px;\r\n}\r\n\r\n.p-l-58 {\r\n  padding-left: 58px;\r\n}\r\n\r\n.p-l-59 {\r\n  padding-left: 59px;\r\n}\r\n\r\n.p-l-60 {\r\n  padding-left: 60px;\r\n}\r\n\r\n.p-l-61 {\r\n  padding-left: 61px;\r\n}\r\n\r\n.p-l-62 {\r\n  padding-left: 62px;\r\n}\r\n\r\n.p-l-63 {\r\n  padding-left: 63px;\r\n}\r\n\r\n.p-l-64 {\r\n  padding-left: 64px;\r\n}\r\n\r\n.p-l-65 {\r\n  padding-left: 65px;\r\n}\r\n\r\n.p-l-66 {\r\n  padding-left: 66px;\r\n}\r\n\r\n.p-l-67 {\r\n  padding-left: 67px;\r\n}\r\n\r\n.p-l-68 {\r\n  padding-left: 68px;\r\n}\r\n\r\n.p-l-69 {\r\n  padding-left: 69px;\r\n}\r\n\r\n.p-l-70 {\r\n  padding-left: 70px;\r\n}\r\n\r\n.p-l-71 {\r\n  padding-left: 71px;\r\n}\r\n\r\n.p-l-72 {\r\n  padding-left: 72px;\r\n}\r\n\r\n.p-l-73 {\r\n  padding-left: 73px;\r\n}\r\n\r\n.p-l-74 {\r\n  padding-left: 74px;\r\n}\r\n\r\n.p-l-75 {\r\n  padding-left: 75px;\r\n}\r\n\r\n.p-l-76 {\r\n  padding-left: 76px;\r\n}\r\n\r\n.p-l-77 {\r\n  padding-left: 77px;\r\n}\r\n\r\n.p-l-78 {\r\n  padding-left: 78px;\r\n}\r\n\r\n.p-l-79 {\r\n  padding-left: 79px;\r\n}\r\n\r\n.p-l-80 {\r\n  padding-left: 80px;\r\n}\r\n\r\n.p-l-81 {\r\n  padding-left: 81px;\r\n}\r\n\r\n.p-l-82 {\r\n  padding-left: 82px;\r\n}\r\n\r\n.p-l-83 {\r\n  padding-left: 83px;\r\n}\r\n\r\n.p-l-84 {\r\n  padding-left: 84px;\r\n}\r\n\r\n.p-l-85 {\r\n  padding-left: 85px;\r\n}\r\n\r\n.p-l-86 {\r\n  padding-left: 86px;\r\n}\r\n\r\n.p-l-87 {\r\n  padding-left: 87px;\r\n}\r\n\r\n.p-l-88 {\r\n  padding-left: 88px;\r\n}\r\n\r\n.p-l-89 {\r\n  padding-left: 89px;\r\n}\r\n\r\n.p-l-90 {\r\n  padding-left: 90px;\r\n}\r\n\r\n.p-l-91 {\r\n  padding-left: 91px;\r\n}\r\n\r\n.p-l-92 {\r\n  padding-left: 92px;\r\n}\r\n\r\n.p-l-93 {\r\n  padding-left: 93px;\r\n}\r\n\r\n.p-l-94 {\r\n  padding-left: 94px;\r\n}\r\n\r\n.p-l-95 {\r\n  padding-left: 95px;\r\n}\r\n\r\n.p-l-96 {\r\n  padding-left: 96px;\r\n}\r\n\r\n.p-l-97 {\r\n  padding-left: 97px;\r\n}\r\n\r\n.p-l-98 {\r\n  padding-left: 98px;\r\n}\r\n\r\n.p-l-99 {\r\n  padding-left: 99px;\r\n}\r\n\r\n.p-l-100 {\r\n  padding-left: 100px;\r\n}\r\n\r\n.p-l-101 {\r\n  padding-left: 101px;\r\n}\r\n\r\n.p-l-102 {\r\n  padding-left: 102px;\r\n}\r\n\r\n.p-l-103 {\r\n  padding-left: 103px;\r\n}\r\n\r\n.p-l-104 {\r\n  padding-left: 104px;\r\n}\r\n\r\n.p-l-105 {\r\n  padding-left: 105px;\r\n}\r\n\r\n.p-l-106 {\r\n  padding-left: 106px;\r\n}\r\n\r\n.p-l-107 {\r\n  padding-left: 107px;\r\n}\r\n\r\n.p-l-108 {\r\n  padding-left: 108px;\r\n}\r\n\r\n.p-l-109 {\r\n  padding-left: 109px;\r\n}\r\n\r\n.p-l-110 {\r\n  padding-left: 110px;\r\n}\r\n\r\n.p-l-111 {\r\n  padding-left: 111px;\r\n}\r\n\r\n.p-l-112 {\r\n  padding-left: 112px;\r\n}\r\n\r\n.p-l-113 {\r\n  padding-left: 113px;\r\n}\r\n\r\n.p-l-114 {\r\n  padding-left: 114px;\r\n}\r\n\r\n.p-l-115 {\r\n  padding-left: 115px;\r\n}\r\n\r\n.p-l-116 {\r\n  padding-left: 116px;\r\n}\r\n\r\n.p-l-117 {\r\n  padding-left: 117px;\r\n}\r\n\r\n.p-l-118 {\r\n  padding-left: 118px;\r\n}\r\n\r\n.p-l-119 {\r\n  padding-left: 119px;\r\n}\r\n\r\n.p-l-120 {\r\n  padding-left: 120px;\r\n}\r\n\r\n.p-l-121 {\r\n  padding-left: 121px;\r\n}\r\n\r\n.p-l-122 {\r\n  padding-left: 122px;\r\n}\r\n\r\n.p-l-123 {\r\n  padding-left: 123px;\r\n}\r\n\r\n.p-l-124 {\r\n  padding-left: 124px;\r\n}\r\n\r\n.p-l-125 {\r\n  padding-left: 125px;\r\n}\r\n\r\n.p-l-126 {\r\n  padding-left: 126px;\r\n}\r\n\r\n.p-l-127 {\r\n  padding-left: 127px;\r\n}\r\n\r\n.p-l-128 {\r\n  padding-left: 128px;\r\n}\r\n\r\n.p-l-129 {\r\n  padding-left: 129px;\r\n}\r\n\r\n.p-l-130 {\r\n  padding-left: 130px;\r\n}\r\n\r\n.p-l-131 {\r\n  padding-left: 131px;\r\n}\r\n\r\n.p-l-132 {\r\n  padding-left: 132px;\r\n}\r\n\r\n.p-l-133 {\r\n  padding-left: 133px;\r\n}\r\n\r\n.p-l-134 {\r\n  padding-left: 134px;\r\n}\r\n\r\n.p-l-135 {\r\n  padding-left: 135px;\r\n}\r\n\r\n.p-l-136 {\r\n  padding-left: 136px;\r\n}\r\n\r\n.p-l-137 {\r\n  padding-left: 137px;\r\n}\r\n\r\n.p-l-138 {\r\n  padding-left: 138px;\r\n}\r\n\r\n.p-l-139 {\r\n  padding-left: 139px;\r\n}\r\n\r\n.p-l-140 {\r\n  padding-left: 140px;\r\n}\r\n\r\n.p-l-141 {\r\n  padding-left: 141px;\r\n}\r\n\r\n.p-l-142 {\r\n  padding-left: 142px;\r\n}\r\n\r\n.p-l-143 {\r\n  padding-left: 143px;\r\n}\r\n\r\n.p-l-144 {\r\n  padding-left: 144px;\r\n}\r\n\r\n.p-l-145 {\r\n  padding-left: 145px;\r\n}\r\n\r\n.p-l-146 {\r\n  padding-left: 146px;\r\n}\r\n\r\n.p-l-147 {\r\n  padding-left: 147px;\r\n}\r\n\r\n.p-l-148 {\r\n  padding-left: 148px;\r\n}\r\n\r\n.p-l-149 {\r\n  padding-left: 149px;\r\n}\r\n\r\n.p-l-150 {\r\n  padding-left: 150px;\r\n}\r\n\r\n.p-l-151 {\r\n  padding-left: 151px;\r\n}\r\n\r\n.p-l-152 {\r\n  padding-left: 152px;\r\n}\r\n\r\n.p-l-153 {\r\n  padding-left: 153px;\r\n}\r\n\r\n.p-l-154 {\r\n  padding-left: 154px;\r\n}\r\n\r\n.p-l-155 {\r\n  padding-left: 155px;\r\n}\r\n\r\n.p-l-156 {\r\n  padding-left: 156px;\r\n}\r\n\r\n.p-l-157 {\r\n  padding-left: 157px;\r\n}\r\n\r\n.p-l-158 {\r\n  padding-left: 158px;\r\n}\r\n\r\n.p-l-159 {\r\n  padding-left: 159px;\r\n}\r\n\r\n.p-l-160 {\r\n  padding-left: 160px;\r\n}\r\n\r\n.p-l-161 {\r\n  padding-left: 161px;\r\n}\r\n\r\n.p-l-162 {\r\n  padding-left: 162px;\r\n}\r\n\r\n.p-l-163 {\r\n  padding-left: 163px;\r\n}\r\n\r\n.p-l-164 {\r\n  padding-left: 164px;\r\n}\r\n\r\n.p-l-165 {\r\n  padding-left: 165px;\r\n}\r\n\r\n.p-l-166 {\r\n  padding-left: 166px;\r\n}\r\n\r\n.p-l-167 {\r\n  padding-left: 167px;\r\n}\r\n\r\n.p-l-168 {\r\n  padding-left: 168px;\r\n}\r\n\r\n.p-l-169 {\r\n  padding-left: 169px;\r\n}\r\n\r\n.p-l-170 {\r\n  padding-left: 170px;\r\n}\r\n\r\n.p-l-171 {\r\n  padding-left: 171px;\r\n}\r\n\r\n.p-l-172 {\r\n  padding-left: 172px;\r\n}\r\n\r\n.p-l-173 {\r\n  padding-left: 173px;\r\n}\r\n\r\n.p-l-174 {\r\n  padding-left: 174px;\r\n}\r\n\r\n.p-l-175 {\r\n  padding-left: 175px;\r\n}\r\n\r\n.p-l-176 {\r\n  padding-left: 176px;\r\n}\r\n\r\n.p-l-177 {\r\n  padding-left: 177px;\r\n}\r\n\r\n.p-l-178 {\r\n  padding-left: 178px;\r\n}\r\n\r\n.p-l-179 {\r\n  padding-left: 179px;\r\n}\r\n\r\n.p-l-180 {\r\n  padding-left: 180px;\r\n}\r\n\r\n.p-l-181 {\r\n  padding-left: 181px;\r\n}\r\n\r\n.p-l-182 {\r\n  padding-left: 182px;\r\n}\r\n\r\n.p-l-183 {\r\n  padding-left: 183px;\r\n}\r\n\r\n.p-l-184 {\r\n  padding-left: 184px;\r\n}\r\n\r\n.p-l-185 {\r\n  padding-left: 185px;\r\n}\r\n\r\n.p-l-186 {\r\n  padding-left: 186px;\r\n}\r\n\r\n.p-l-187 {\r\n  padding-left: 187px;\r\n}\r\n\r\n.p-l-188 {\r\n  padding-left: 188px;\r\n}\r\n\r\n.p-l-189 {\r\n  padding-left: 189px;\r\n}\r\n\r\n.p-l-190 {\r\n  padding-left: 190px;\r\n}\r\n\r\n.p-l-191 {\r\n  padding-left: 191px;\r\n}\r\n\r\n.p-l-192 {\r\n  padding-left: 192px;\r\n}\r\n\r\n.p-l-193 {\r\n  padding-left: 193px;\r\n}\r\n\r\n.p-l-194 {\r\n  padding-left: 194px;\r\n}\r\n\r\n.p-l-195 {\r\n  padding-left: 195px;\r\n}\r\n\r\n.p-l-196 {\r\n  padding-left: 196px;\r\n}\r\n\r\n.p-l-197 {\r\n  padding-left: 197px;\r\n}\r\n\r\n.p-l-198 {\r\n  padding-left: 198px;\r\n}\r\n\r\n.p-l-199 {\r\n  padding-left: 199px;\r\n}\r\n\r\n.p-l-200 {\r\n  padding-left: 200px;\r\n}\r\n\r\n.p-l-201 {\r\n  padding-left: 201px;\r\n}\r\n\r\n.p-l-202 {\r\n  padding-left: 202px;\r\n}\r\n\r\n.p-l-203 {\r\n  padding-left: 203px;\r\n}\r\n\r\n.p-l-204 {\r\n  padding-left: 204px;\r\n}\r\n\r\n.p-l-205 {\r\n  padding-left: 205px;\r\n}\r\n\r\n.p-l-206 {\r\n  padding-left: 206px;\r\n}\r\n\r\n.p-l-207 {\r\n  padding-left: 207px;\r\n}\r\n\r\n.p-l-208 {\r\n  padding-left: 208px;\r\n}\r\n\r\n.p-l-209 {\r\n  padding-left: 209px;\r\n}\r\n\r\n.p-l-210 {\r\n  padding-left: 210px;\r\n}\r\n\r\n.p-l-211 {\r\n  padding-left: 211px;\r\n}\r\n\r\n.p-l-212 {\r\n  padding-left: 212px;\r\n}\r\n\r\n.p-l-213 {\r\n  padding-left: 213px;\r\n}\r\n\r\n.p-l-214 {\r\n  padding-left: 214px;\r\n}\r\n\r\n.p-l-215 {\r\n  padding-left: 215px;\r\n}\r\n\r\n.p-l-216 {\r\n  padding-left: 216px;\r\n}\r\n\r\n.p-l-217 {\r\n  padding-left: 217px;\r\n}\r\n\r\n.p-l-218 {\r\n  padding-left: 218px;\r\n}\r\n\r\n.p-l-219 {\r\n  padding-left: 219px;\r\n}\r\n\r\n.p-l-220 {\r\n  padding-left: 220px;\r\n}\r\n\r\n.p-l-221 {\r\n  padding-left: 221px;\r\n}\r\n\r\n.p-l-222 {\r\n  padding-left: 222px;\r\n}\r\n\r\n.p-l-223 {\r\n  padding-left: 223px;\r\n}\r\n\r\n.p-l-224 {\r\n  padding-left: 224px;\r\n}\r\n\r\n.p-l-225 {\r\n  padding-left: 225px;\r\n}\r\n\r\n.p-l-226 {\r\n  padding-left: 226px;\r\n}\r\n\r\n.p-l-227 {\r\n  padding-left: 227px;\r\n}\r\n\r\n.p-l-228 {\r\n  padding-left: 228px;\r\n}\r\n\r\n.p-l-229 {\r\n  padding-left: 229px;\r\n}\r\n\r\n.p-l-230 {\r\n  padding-left: 230px;\r\n}\r\n\r\n.p-l-231 {\r\n  padding-left: 231px;\r\n}\r\n\r\n.p-l-232 {\r\n  padding-left: 232px;\r\n}\r\n\r\n.p-l-233 {\r\n  padding-left: 233px;\r\n}\r\n\r\n.p-l-234 {\r\n  padding-left: 234px;\r\n}\r\n\r\n.p-l-235 {\r\n  padding-left: 235px;\r\n}\r\n\r\n.p-l-236 {\r\n  padding-left: 236px;\r\n}\r\n\r\n.p-l-237 {\r\n  padding-left: 237px;\r\n}\r\n\r\n.p-l-238 {\r\n  padding-left: 238px;\r\n}\r\n\r\n.p-l-239 {\r\n  padding-left: 239px;\r\n}\r\n\r\n.p-l-240 {\r\n  padding-left: 240px;\r\n}\r\n\r\n.p-l-241 {\r\n  padding-left: 241px;\r\n}\r\n\r\n.p-l-242 {\r\n  padding-left: 242px;\r\n}\r\n\r\n.p-l-243 {\r\n  padding-left: 243px;\r\n}\r\n\r\n.p-l-244 {\r\n  padding-left: 244px;\r\n}\r\n\r\n.p-l-245 {\r\n  padding-left: 245px;\r\n}\r\n\r\n.p-l-246 {\r\n  padding-left: 246px;\r\n}\r\n\r\n.p-l-247 {\r\n  padding-left: 247px;\r\n}\r\n\r\n.p-l-248 {\r\n  padding-left: 248px;\r\n}\r\n\r\n.p-l-249 {\r\n  padding-left: 249px;\r\n}\r\n\r\n.p-l-250 {\r\n  padding-left: 250px;\r\n}\r\n\r\n.p-r-0 {\r\n  padding-right: 0px;\r\n}\r\n\r\n.p-r-1 {\r\n  padding-right: 1px;\r\n}\r\n\r\n.p-r-2 {\r\n  padding-right: 2px;\r\n}\r\n\r\n.p-r-3 {\r\n  padding-right: 3px;\r\n}\r\n\r\n.p-r-4 {\r\n  padding-right: 4px;\r\n}\r\n\r\n.p-r-5 {\r\n  padding-right: 5px;\r\n}\r\n\r\n.p-r-6 {\r\n  padding-right: 6px;\r\n}\r\n\r\n.p-r-7 {\r\n  padding-right: 7px;\r\n}\r\n\r\n.p-r-8 {\r\n  padding-right: 8px;\r\n}\r\n\r\n.p-r-9 {\r\n  padding-right: 9px;\r\n}\r\n\r\n.p-r-10 {\r\n  padding-right: 10px;\r\n}\r\n\r\n.p-r-11 {\r\n  padding-right: 11px;\r\n}\r\n\r\n.p-r-12 {\r\n  padding-right: 12px;\r\n}\r\n\r\n.p-r-13 {\r\n  padding-right: 13px;\r\n}\r\n\r\n.p-r-14 {\r\n  padding-right: 14px;\r\n}\r\n\r\n.p-r-15 {\r\n  padding-right: 15px;\r\n}\r\n\r\n.p-r-16 {\r\n  padding-right: 16px;\r\n}\r\n\r\n.p-r-17 {\r\n  padding-right: 17px;\r\n}\r\n\r\n.p-r-18 {\r\n  padding-right: 18px;\r\n}\r\n\r\n.p-r-19 {\r\n  padding-right: 19px;\r\n}\r\n\r\n.p-r-20 {\r\n  padding-right: 20px;\r\n}\r\n\r\n.p-r-21 {\r\n  padding-right: 21px;\r\n}\r\n\r\n.p-r-22 {\r\n  padding-right: 22px;\r\n}\r\n\r\n.p-r-23 {\r\n  padding-right: 23px;\r\n}\r\n\r\n.p-r-24 {\r\n  padding-right: 24px;\r\n}\r\n\r\n.p-r-25 {\r\n  padding-right: 25px;\r\n}\r\n\r\n.p-r-26 {\r\n  padding-right: 26px;\r\n}\r\n\r\n.p-r-27 {\r\n  padding-right: 27px;\r\n}\r\n\r\n.p-r-28 {\r\n  padding-right: 28px;\r\n}\r\n\r\n.p-r-29 {\r\n  padding-right: 29px;\r\n}\r\n\r\n.p-r-30 {\r\n  padding-right: 30px;\r\n}\r\n\r\n.p-r-31 {\r\n  padding-right: 31px;\r\n}\r\n\r\n.p-r-32 {\r\n  padding-right: 32px;\r\n}\r\n\r\n.p-r-33 {\r\n  padding-right: 33px;\r\n}\r\n\r\n.p-r-34 {\r\n  padding-right: 34px;\r\n}\r\n\r\n.p-r-35 {\r\n  padding-right: 35px;\r\n}\r\n\r\n.p-r-36 {\r\n  padding-right: 36px;\r\n}\r\n\r\n.p-r-37 {\r\n  padding-right: 37px;\r\n}\r\n\r\n.p-r-38 {\r\n  padding-right: 38px;\r\n}\r\n\r\n.p-r-39 {\r\n  padding-right: 39px;\r\n}\r\n\r\n.p-r-40 {\r\n  padding-right: 40px;\r\n}\r\n\r\n.p-r-41 {\r\n  padding-right: 41px;\r\n}\r\n\r\n.p-r-42 {\r\n  padding-right: 42px;\r\n}\r\n\r\n.p-r-43 {\r\n  padding-right: 43px;\r\n}\r\n\r\n.p-r-44 {\r\n  padding-right: 44px;\r\n}\r\n\r\n.p-r-45 {\r\n  padding-right: 45px;\r\n}\r\n\r\n.p-r-46 {\r\n  padding-right: 46px;\r\n}\r\n\r\n.p-r-47 {\r\n  padding-right: 47px;\r\n}\r\n\r\n.p-r-48 {\r\n  padding-right: 48px;\r\n}\r\n\r\n.p-r-49 {\r\n  padding-right: 49px;\r\n}\r\n\r\n.p-r-50 {\r\n  padding-right: 50px;\r\n}\r\n\r\n.p-r-51 {\r\n  padding-right: 51px;\r\n}\r\n\r\n.p-r-52 {\r\n  padding-right: 52px;\r\n}\r\n\r\n.p-r-53 {\r\n  padding-right: 53px;\r\n}\r\n\r\n.p-r-54 {\r\n  padding-right: 54px;\r\n}\r\n\r\n.p-r-55 {\r\n  padding-right: 55px;\r\n}\r\n\r\n.p-r-56 {\r\n  padding-right: 56px;\r\n}\r\n\r\n.p-r-57 {\r\n  padding-right: 57px;\r\n}\r\n\r\n.p-r-58 {\r\n  padding-right: 58px;\r\n}\r\n\r\n.p-r-59 {\r\n  padding-right: 59px;\r\n}\r\n\r\n.p-r-60 {\r\n  padding-right: 60px;\r\n}\r\n\r\n.p-r-61 {\r\n  padding-right: 61px;\r\n}\r\n\r\n.p-r-62 {\r\n  padding-right: 62px;\r\n}\r\n\r\n.p-r-63 {\r\n  padding-right: 63px;\r\n}\r\n\r\n.p-r-64 {\r\n  padding-right: 64px;\r\n}\r\n\r\n.p-r-65 {\r\n  padding-right: 65px;\r\n}\r\n\r\n.p-r-66 {\r\n  padding-right: 66px;\r\n}\r\n\r\n.p-r-67 {\r\n  padding-right: 67px;\r\n}\r\n\r\n.p-r-68 {\r\n  padding-right: 68px;\r\n}\r\n\r\n.p-r-69 {\r\n  padding-right: 69px;\r\n}\r\n\r\n.p-r-70 {\r\n  padding-right: 70px;\r\n}\r\n\r\n.p-r-71 {\r\n  padding-right: 71px;\r\n}\r\n\r\n.p-r-72 {\r\n  padding-right: 72px;\r\n}\r\n\r\n.p-r-73 {\r\n  padding-right: 73px;\r\n}\r\n\r\n.p-r-74 {\r\n  padding-right: 74px;\r\n}\r\n\r\n.p-r-75 {\r\n  padding-right: 75px;\r\n}\r\n\r\n.p-r-76 {\r\n  padding-right: 76px;\r\n}\r\n\r\n.p-r-77 {\r\n  padding-right: 77px;\r\n}\r\n\r\n.p-r-78 {\r\n  padding-right: 78px;\r\n}\r\n\r\n.p-r-79 {\r\n  padding-right: 79px;\r\n}\r\n\r\n.p-r-80 {\r\n  padding-right: 80px;\r\n}\r\n\r\n.p-r-81 {\r\n  padding-right: 81px;\r\n}\r\n\r\n.p-r-82 {\r\n  padding-right: 82px;\r\n}\r\n\r\n.p-r-83 {\r\n  padding-right: 83px;\r\n}\r\n\r\n.p-r-84 {\r\n  padding-right: 84px;\r\n}\r\n\r\n.p-r-85 {\r\n  padding-right: 85px;\r\n}\r\n\r\n.p-r-86 {\r\n  padding-right: 86px;\r\n}\r\n\r\n.p-r-87 {\r\n  padding-right: 87px;\r\n}\r\n\r\n.p-r-88 {\r\n  padding-right: 88px;\r\n}\r\n\r\n.p-r-89 {\r\n  padding-right: 89px;\r\n}\r\n\r\n.p-r-90 {\r\n  padding-right: 90px;\r\n}\r\n\r\n.p-r-91 {\r\n  padding-right: 91px;\r\n}\r\n\r\n.p-r-92 {\r\n  padding-right: 92px;\r\n}\r\n\r\n.p-r-93 {\r\n  padding-right: 93px;\r\n}\r\n\r\n.p-r-94 {\r\n  padding-right: 94px;\r\n}\r\n\r\n.p-r-95 {\r\n  padding-right: 95px;\r\n}\r\n\r\n.p-r-96 {\r\n  padding-right: 96px;\r\n}\r\n\r\n.p-r-97 {\r\n  padding-right: 97px;\r\n}\r\n\r\n.p-r-98 {\r\n  padding-right: 98px;\r\n}\r\n\r\n.p-r-99 {\r\n  padding-right: 99px;\r\n}\r\n\r\n.p-r-100 {\r\n  padding-right: 100px;\r\n}\r\n\r\n.p-r-101 {\r\n  padding-right: 101px;\r\n}\r\n\r\n.p-r-102 {\r\n  padding-right: 102px;\r\n}\r\n\r\n.p-r-103 {\r\n  padding-right: 103px;\r\n}\r\n\r\n.p-r-104 {\r\n  padding-right: 104px;\r\n}\r\n\r\n.p-r-105 {\r\n  padding-right: 105px;\r\n}\r\n\r\n.p-r-106 {\r\n  padding-right: 106px;\r\n}\r\n\r\n.p-r-107 {\r\n  padding-right: 107px;\r\n}\r\n\r\n.p-r-108 {\r\n  padding-right: 108px;\r\n}\r\n\r\n.p-r-109 {\r\n  padding-right: 109px;\r\n}\r\n\r\n.p-r-110 {\r\n  padding-right: 110px;\r\n}\r\n\r\n.p-r-111 {\r\n  padding-right: 111px;\r\n}\r\n\r\n.p-r-112 {\r\n  padding-right: 112px;\r\n}\r\n\r\n.p-r-113 {\r\n  padding-right: 113px;\r\n}\r\n\r\n.p-r-114 {\r\n  padding-right: 114px;\r\n}\r\n\r\n.p-r-115 {\r\n  padding-right: 115px;\r\n}\r\n\r\n.p-r-116 {\r\n  padding-right: 116px;\r\n}\r\n\r\n.p-r-117 {\r\n  padding-right: 117px;\r\n}\r\n\r\n.p-r-118 {\r\n  padding-right: 118px;\r\n}\r\n\r\n.p-r-119 {\r\n  padding-right: 119px;\r\n}\r\n\r\n.p-r-120 {\r\n  padding-right: 120px;\r\n}\r\n\r\n.p-r-121 {\r\n  padding-right: 121px;\r\n}\r\n\r\n.p-r-122 {\r\n  padding-right: 122px;\r\n}\r\n\r\n.p-r-123 {\r\n  padding-right: 123px;\r\n}\r\n\r\n.p-r-124 {\r\n  padding-right: 124px;\r\n}\r\n\r\n.p-r-125 {\r\n  padding-right: 125px;\r\n}\r\n\r\n.p-r-126 {\r\n  padding-right: 126px;\r\n}\r\n\r\n.p-r-127 {\r\n  padding-right: 127px;\r\n}\r\n\r\n.p-r-128 {\r\n  padding-right: 128px;\r\n}\r\n\r\n.p-r-129 {\r\n  padding-right: 129px;\r\n}\r\n\r\n.p-r-130 {\r\n  padding-right: 130px;\r\n}\r\n\r\n.p-r-131 {\r\n  padding-right: 131px;\r\n}\r\n\r\n.p-r-132 {\r\n  padding-right: 132px;\r\n}\r\n\r\n.p-r-133 {\r\n  padding-right: 133px;\r\n}\r\n\r\n.p-r-134 {\r\n  padding-right: 134px;\r\n}\r\n\r\n.p-r-135 {\r\n  padding-right: 135px;\r\n}\r\n\r\n.p-r-136 {\r\n  padding-right: 136px;\r\n}\r\n\r\n.p-r-137 {\r\n  padding-right: 137px;\r\n}\r\n\r\n.p-r-138 {\r\n  padding-right: 138px;\r\n}\r\n\r\n.p-r-139 {\r\n  padding-right: 139px;\r\n}\r\n\r\n.p-r-140 {\r\n  padding-right: 140px;\r\n}\r\n\r\n.p-r-141 {\r\n  padding-right: 141px;\r\n}\r\n\r\n.p-r-142 {\r\n  padding-right: 142px;\r\n}\r\n\r\n.p-r-143 {\r\n  padding-right: 143px;\r\n}\r\n\r\n.p-r-144 {\r\n  padding-right: 144px;\r\n}\r\n\r\n.p-r-145 {\r\n  padding-right: 145px;\r\n}\r\n\r\n.p-r-146 {\r\n  padding-right: 146px;\r\n}\r\n\r\n.p-r-147 {\r\n  padding-right: 147px;\r\n}\r\n\r\n.p-r-148 {\r\n  padding-right: 148px;\r\n}\r\n\r\n.p-r-149 {\r\n  padding-right: 149px;\r\n}\r\n\r\n.p-r-150 {\r\n  padding-right: 150px;\r\n}\r\n\r\n.p-r-151 {\r\n  padding-right: 151px;\r\n}\r\n\r\n.p-r-152 {\r\n  padding-right: 152px;\r\n}\r\n\r\n.p-r-153 {\r\n  padding-right: 153px;\r\n}\r\n\r\n.p-r-154 {\r\n  padding-right: 154px;\r\n}\r\n\r\n.p-r-155 {\r\n  padding-right: 155px;\r\n}\r\n\r\n.p-r-156 {\r\n  padding-right: 156px;\r\n}\r\n\r\n.p-r-157 {\r\n  padding-right: 157px;\r\n}\r\n\r\n.p-r-158 {\r\n  padding-right: 158px;\r\n}\r\n\r\n.p-r-159 {\r\n  padding-right: 159px;\r\n}\r\n\r\n.p-r-160 {\r\n  padding-right: 160px;\r\n}\r\n\r\n.p-r-161 {\r\n  padding-right: 161px;\r\n}\r\n\r\n.p-r-162 {\r\n  padding-right: 162px;\r\n}\r\n\r\n.p-r-163 {\r\n  padding-right: 163px;\r\n}\r\n\r\n.p-r-164 {\r\n  padding-right: 164px;\r\n}\r\n\r\n.p-r-165 {\r\n  padding-right: 165px;\r\n}\r\n\r\n.p-r-166 {\r\n  padding-right: 166px;\r\n}\r\n\r\n.p-r-167 {\r\n  padding-right: 167px;\r\n}\r\n\r\n.p-r-168 {\r\n  padding-right: 168px;\r\n}\r\n\r\n.p-r-169 {\r\n  padding-right: 169px;\r\n}\r\n\r\n.p-r-170 {\r\n  padding-right: 170px;\r\n}\r\n\r\n.p-r-171 {\r\n  padding-right: 171px;\r\n}\r\n\r\n.p-r-172 {\r\n  padding-right: 172px;\r\n}\r\n\r\n.p-r-173 {\r\n  padding-right: 173px;\r\n}\r\n\r\n.p-r-174 {\r\n  padding-right: 174px;\r\n}\r\n\r\n.p-r-175 {\r\n  padding-right: 175px;\r\n}\r\n\r\n.p-r-176 {\r\n  padding-right: 176px;\r\n}\r\n\r\n.p-r-177 {\r\n  padding-right: 177px;\r\n}\r\n\r\n.p-r-178 {\r\n  padding-right: 178px;\r\n}\r\n\r\n.p-r-179 {\r\n  padding-right: 179px;\r\n}\r\n\r\n.p-r-180 {\r\n  padding-right: 180px;\r\n}\r\n\r\n.p-r-181 {\r\n  padding-right: 181px;\r\n}\r\n\r\n.p-r-182 {\r\n  padding-right: 182px;\r\n}\r\n\r\n.p-r-183 {\r\n  padding-right: 183px;\r\n}\r\n\r\n.p-r-184 {\r\n  padding-right: 184px;\r\n}\r\n\r\n.p-r-185 {\r\n  padding-right: 185px;\r\n}\r\n\r\n.p-r-186 {\r\n  padding-right: 186px;\r\n}\r\n\r\n.p-r-187 {\r\n  padding-right: 187px;\r\n}\r\n\r\n.p-r-188 {\r\n  padding-right: 188px;\r\n}\r\n\r\n.p-r-189 {\r\n  padding-right: 189px;\r\n}\r\n\r\n.p-r-190 {\r\n  padding-right: 190px;\r\n}\r\n\r\n.p-r-191 {\r\n  padding-right: 191px;\r\n}\r\n\r\n.p-r-192 {\r\n  padding-right: 192px;\r\n}\r\n\r\n.p-r-193 {\r\n  padding-right: 193px;\r\n}\r\n\r\n.p-r-194 {\r\n  padding-right: 194px;\r\n}\r\n\r\n.p-r-195 {\r\n  padding-right: 195px;\r\n}\r\n\r\n.p-r-196 {\r\n  padding-right: 196px;\r\n}\r\n\r\n.p-r-197 {\r\n  padding-right: 197px;\r\n}\r\n\r\n.p-r-198 {\r\n  padding-right: 198px;\r\n}\r\n\r\n.p-r-199 {\r\n  padding-right: 199px;\r\n}\r\n\r\n.p-r-200 {\r\n  padding-right: 200px;\r\n}\r\n\r\n.p-r-201 {\r\n  padding-right: 201px;\r\n}\r\n\r\n.p-r-202 {\r\n  padding-right: 202px;\r\n}\r\n\r\n.p-r-203 {\r\n  padding-right: 203px;\r\n}\r\n\r\n.p-r-204 {\r\n  padding-right: 204px;\r\n}\r\n\r\n.p-r-205 {\r\n  padding-right: 205px;\r\n}\r\n\r\n.p-r-206 {\r\n  padding-right: 206px;\r\n}\r\n\r\n.p-r-207 {\r\n  padding-right: 207px;\r\n}\r\n\r\n.p-r-208 {\r\n  padding-right: 208px;\r\n}\r\n\r\n.p-r-209 {\r\n  padding-right: 209px;\r\n}\r\n\r\n.p-r-210 {\r\n  padding-right: 210px;\r\n}\r\n\r\n.p-r-211 {\r\n  padding-right: 211px;\r\n}\r\n\r\n.p-r-212 {\r\n  padding-right: 212px;\r\n}\r\n\r\n.p-r-213 {\r\n  padding-right: 213px;\r\n}\r\n\r\n.p-r-214 {\r\n  padding-right: 214px;\r\n}\r\n\r\n.p-r-215 {\r\n  padding-right: 215px;\r\n}\r\n\r\n.p-r-216 {\r\n  padding-right: 216px;\r\n}\r\n\r\n.p-r-217 {\r\n  padding-right: 217px;\r\n}\r\n\r\n.p-r-218 {\r\n  padding-right: 218px;\r\n}\r\n\r\n.p-r-219 {\r\n  padding-right: 219px;\r\n}\r\n\r\n.p-r-220 {\r\n  padding-right: 220px;\r\n}\r\n\r\n.p-r-221 {\r\n  padding-right: 221px;\r\n}\r\n\r\n.p-r-222 {\r\n  padding-right: 222px;\r\n}\r\n\r\n.p-r-223 {\r\n  padding-right: 223px;\r\n}\r\n\r\n.p-r-224 {\r\n  padding-right: 224px;\r\n}\r\n\r\n.p-r-225 {\r\n  padding-right: 225px;\r\n}\r\n\r\n.p-r-226 {\r\n  padding-right: 226px;\r\n}\r\n\r\n.p-r-227 {\r\n  padding-right: 227px;\r\n}\r\n\r\n.p-r-228 {\r\n  padding-right: 228px;\r\n}\r\n\r\n.p-r-229 {\r\n  padding-right: 229px;\r\n}\r\n\r\n.p-r-230 {\r\n  padding-right: 230px;\r\n}\r\n\r\n.p-r-231 {\r\n  padding-right: 231px;\r\n}\r\n\r\n.p-r-232 {\r\n  padding-right: 232px;\r\n}\r\n\r\n.p-r-233 {\r\n  padding-right: 233px;\r\n}\r\n\r\n.p-r-234 {\r\n  padding-right: 234px;\r\n}\r\n\r\n.p-r-235 {\r\n  padding-right: 235px;\r\n}\r\n\r\n.p-r-236 {\r\n  padding-right: 236px;\r\n}\r\n\r\n.p-r-237 {\r\n  padding-right: 237px;\r\n}\r\n\r\n.p-r-238 {\r\n  padding-right: 238px;\r\n}\r\n\r\n.p-r-239 {\r\n  padding-right: 239px;\r\n}\r\n\r\n.p-r-240 {\r\n  padding-right: 240px;\r\n}\r\n\r\n.p-r-241 {\r\n  padding-right: 241px;\r\n}\r\n\r\n.p-r-242 {\r\n  padding-right: 242px;\r\n}\r\n\r\n.p-r-243 {\r\n  padding-right: 243px;\r\n}\r\n\r\n.p-r-244 {\r\n  padding-right: 244px;\r\n}\r\n\r\n.p-r-245 {\r\n  padding-right: 245px;\r\n}\r\n\r\n.p-r-246 {\r\n  padding-right: 246px;\r\n}\r\n\r\n.p-r-247 {\r\n  padding-right: 247px;\r\n}\r\n\r\n.p-r-248 {\r\n  padding-right: 248px;\r\n}\r\n\r\n.p-r-249 {\r\n  padding-right: 249px;\r\n}\r\n\r\n.p-r-250 {\r\n  padding-right: 250px;\r\n}\r\n\r\n/*[ MARGIN ]\r\n///////////////////////////////////////////////////////////\r\n*/\r\n\r\n.m-t-0 {\r\n  margin-top: 0px;\r\n}\r\n\r\n.m-t-1 {\r\n  margin-top: 1px;\r\n}\r\n\r\n.m-t-2 {\r\n  margin-top: 2px;\r\n}\r\n\r\n.m-t-3 {\r\n  margin-top: 3px;\r\n}\r\n\r\n.m-t-4 {\r\n  margin-top: 4px;\r\n}\r\n\r\n.m-t-5 {\r\n  margin-top: 5px;\r\n}\r\n\r\n.m-t-6 {\r\n  margin-top: 6px;\r\n}\r\n\r\n.m-t-7 {\r\n  margin-top: 7px;\r\n}\r\n\r\n.m-t-8 {\r\n  margin-top: 8px;\r\n}\r\n\r\n.m-t-9 {\r\n  margin-top: 9px;\r\n}\r\n\r\n.m-t-10 {\r\n  margin-top: 10px;\r\n}\r\n\r\n.m-t-11 {\r\n  margin-top: 11px;\r\n}\r\n\r\n.m-t-12 {\r\n  margin-top: 12px;\r\n}\r\n\r\n.m-t-13 {\r\n  margin-top: 13px;\r\n}\r\n\r\n.m-t-14 {\r\n  margin-top: 14px;\r\n}\r\n\r\n.m-t-15 {\r\n  margin-top: 15px;\r\n}\r\n\r\n.m-t-16 {\r\n  margin-top: 16px;\r\n}\r\n\r\n.m-t-17 {\r\n  margin-top: 17px;\r\n}\r\n\r\n.m-t-18 {\r\n  margin-top: 18px;\r\n}\r\n\r\n.m-t-19 {\r\n  margin-top: 19px;\r\n}\r\n\r\n.m-t-20 {\r\n  margin-top: 20px;\r\n}\r\n\r\n.m-t-21 {\r\n  margin-top: 21px;\r\n}\r\n\r\n.m-t-22 {\r\n  margin-top: 22px;\r\n}\r\n\r\n.m-t-23 {\r\n  margin-top: 23px;\r\n}\r\n\r\n.m-t-24 {\r\n  margin-top: 24px;\r\n}\r\n\r\n.m-t-25 {\r\n  margin-top: 25px;\r\n}\r\n\r\n.m-t-26 {\r\n  margin-top: 26px;\r\n}\r\n\r\n.m-t-27 {\r\n  margin-top: 27px;\r\n}\r\n\r\n.m-t-28 {\r\n  margin-top: 28px;\r\n}\r\n\r\n.m-t-29 {\r\n  margin-top: 29px;\r\n}\r\n\r\n.m-t-30 {\r\n  margin-top: 30px;\r\n}\r\n\r\n.m-t-31 {\r\n  margin-top: 31px;\r\n}\r\n\r\n.m-t-32 {\r\n  margin-top: 32px;\r\n}\r\n\r\n.m-t-33 {\r\n  margin-top: 33px;\r\n}\r\n\r\n.m-t-34 {\r\n  margin-top: 34px;\r\n}\r\n\r\n.m-t-35 {\r\n  margin-top: 35px;\r\n}\r\n\r\n.m-t-36 {\r\n  margin-top: 36px;\r\n}\r\n\r\n.m-t-37 {\r\n  margin-top: 37px;\r\n}\r\n\r\n.m-t-38 {\r\n  margin-top: 38px;\r\n}\r\n\r\n.m-t-39 {\r\n  margin-top: 39px;\r\n}\r\n\r\n.m-t-40 {\r\n  margin-top: 40px;\r\n}\r\n\r\n.m-t-41 {\r\n  margin-top: 41px;\r\n}\r\n\r\n.m-t-42 {\r\n  margin-top: 42px;\r\n}\r\n\r\n.m-t-43 {\r\n  margin-top: 43px;\r\n}\r\n\r\n.m-t-44 {\r\n  margin-top: 44px;\r\n}\r\n\r\n.m-t-45 {\r\n  margin-top: 45px;\r\n}\r\n\r\n.m-t-46 {\r\n  margin-top: 46px;\r\n}\r\n\r\n.m-t-47 {\r\n  margin-top: 47px;\r\n}\r\n\r\n.m-t-48 {\r\n  margin-top: 48px;\r\n}\r\n\r\n.m-t-49 {\r\n  margin-top: 49px;\r\n}\r\n\r\n.m-t-50 {\r\n  margin-top: 50px;\r\n}\r\n\r\n.m-t-51 {\r\n  margin-top: 51px;\r\n}\r\n\r\n.m-t-52 {\r\n  margin-top: 52px;\r\n}\r\n\r\n.m-t-53 {\r\n  margin-top: 53px;\r\n}\r\n\r\n.m-t-54 {\r\n  margin-top: 54px;\r\n}\r\n\r\n.m-t-55 {\r\n  margin-top: 55px;\r\n}\r\n\r\n.m-t-56 {\r\n  margin-top: 56px;\r\n}\r\n\r\n.m-t-57 {\r\n  margin-top: 57px;\r\n}\r\n\r\n.m-t-58 {\r\n  margin-top: 58px;\r\n}\r\n\r\n.m-t-59 {\r\n  margin-top: 59px;\r\n}\r\n\r\n.m-t-60 {\r\n  margin-top: 60px;\r\n}\r\n\r\n.m-t-61 {\r\n  margin-top: 61px;\r\n}\r\n\r\n.m-t-62 {\r\n  margin-top: 62px;\r\n}\r\n\r\n.m-t-63 {\r\n  margin-top: 63px;\r\n}\r\n\r\n.m-t-64 {\r\n  margin-top: 64px;\r\n}\r\n\r\n.m-t-65 {\r\n  margin-top: 65px;\r\n}\r\n\r\n.m-t-66 {\r\n  margin-top: 66px;\r\n}\r\n\r\n.m-t-67 {\r\n  margin-top: 67px;\r\n}\r\n\r\n.m-t-68 {\r\n  margin-top: 68px;\r\n}\r\n\r\n.m-t-69 {\r\n  margin-top: 69px;\r\n}\r\n\r\n.m-t-70 {\r\n  margin-top: 70px;\r\n}\r\n\r\n.m-t-71 {\r\n  margin-top: 71px;\r\n}\r\n\r\n.m-t-72 {\r\n  margin-top: 72px;\r\n}\r\n\r\n.m-t-73 {\r\n  margin-top: 73px;\r\n}\r\n\r\n.m-t-74 {\r\n  margin-top: 74px;\r\n}\r\n\r\n.m-t-75 {\r\n  margin-top: 75px;\r\n}\r\n\r\n.m-t-76 {\r\n  margin-top: 76px;\r\n}\r\n\r\n.m-t-77 {\r\n  margin-top: 77px;\r\n}\r\n\r\n.m-t-78 {\r\n  margin-top: 78px;\r\n}\r\n\r\n.m-t-79 {\r\n  margin-top: 79px;\r\n}\r\n\r\n.m-t-80 {\r\n  margin-top: 80px;\r\n}\r\n\r\n.m-t-81 {\r\n  margin-top: 81px;\r\n}\r\n\r\n.m-t-82 {\r\n  margin-top: 82px;\r\n}\r\n\r\n.m-t-83 {\r\n  margin-top: 83px;\r\n}\r\n\r\n.m-t-84 {\r\n  margin-top: 84px;\r\n}\r\n\r\n.m-t-85 {\r\n  margin-top: 85px;\r\n}\r\n\r\n.m-t-86 {\r\n  margin-top: 86px;\r\n}\r\n\r\n.m-t-87 {\r\n  margin-top: 87px;\r\n}\r\n\r\n.m-t-88 {\r\n  margin-top: 88px;\r\n}\r\n\r\n.m-t-89 {\r\n  margin-top: 89px;\r\n}\r\n\r\n.m-t-90 {\r\n  margin-top: 90px;\r\n}\r\n\r\n.m-t-91 {\r\n  margin-top: 91px;\r\n}\r\n\r\n.m-t-92 {\r\n  margin-top: 92px;\r\n}\r\n\r\n.m-t-93 {\r\n  margin-top: 93px;\r\n}\r\n\r\n.m-t-94 {\r\n  margin-top: 94px;\r\n}\r\n\r\n.m-t-95 {\r\n  margin-top: 95px;\r\n}\r\n\r\n.m-t-96 {\r\n  margin-top: 96px;\r\n}\r\n\r\n.m-t-97 {\r\n  margin-top: 97px;\r\n}\r\n\r\n.m-t-98 {\r\n  margin-top: 98px;\r\n}\r\n\r\n.m-t-99 {\r\n  margin-top: 99px;\r\n}\r\n\r\n.m-t-100 {\r\n  margin-top: 100px;\r\n}\r\n\r\n.m-t-101 {\r\n  margin-top: 101px;\r\n}\r\n\r\n.m-t-102 {\r\n  margin-top: 102px;\r\n}\r\n\r\n.m-t-103 {\r\n  margin-top: 103px;\r\n}\r\n\r\n.m-t-104 {\r\n  margin-top: 104px;\r\n}\r\n\r\n.m-t-105 {\r\n  margin-top: 105px;\r\n}\r\n\r\n.m-t-106 {\r\n  margin-top: 106px;\r\n}\r\n\r\n.m-t-107 {\r\n  margin-top: 107px;\r\n}\r\n\r\n.m-t-108 {\r\n  margin-top: 108px;\r\n}\r\n\r\n.m-t-109 {\r\n  margin-top: 109px;\r\n}\r\n\r\n.m-t-110 {\r\n  margin-top: 110px;\r\n}\r\n\r\n.m-t-111 {\r\n  margin-top: 111px;\r\n}\r\n\r\n.m-t-112 {\r\n  margin-top: 112px;\r\n}\r\n\r\n.m-t-113 {\r\n  margin-top: 113px;\r\n}\r\n\r\n.m-t-114 {\r\n  margin-top: 114px;\r\n}\r\n\r\n.m-t-115 {\r\n  margin-top: 115px;\r\n}\r\n\r\n.m-t-116 {\r\n  margin-top: 116px;\r\n}\r\n\r\n.m-t-117 {\r\n  margin-top: 117px;\r\n}\r\n\r\n.m-t-118 {\r\n  margin-top: 118px;\r\n}\r\n\r\n.m-t-119 {\r\n  margin-top: 119px;\r\n}\r\n\r\n.m-t-120 {\r\n  margin-top: 120px;\r\n}\r\n\r\n.m-t-121 {\r\n  margin-top: 121px;\r\n}\r\n\r\n.m-t-122 {\r\n  margin-top: 122px;\r\n}\r\n\r\n.m-t-123 {\r\n  margin-top: 123px;\r\n}\r\n\r\n.m-t-124 {\r\n  margin-top: 124px;\r\n}\r\n\r\n.m-t-125 {\r\n  margin-top: 125px;\r\n}\r\n\r\n.m-t-126 {\r\n  margin-top: 126px;\r\n}\r\n\r\n.m-t-127 {\r\n  margin-top: 127px;\r\n}\r\n\r\n.m-t-128 {\r\n  margin-top: 128px;\r\n}\r\n\r\n.m-t-129 {\r\n  margin-top: 129px;\r\n}\r\n\r\n.m-t-130 {\r\n  margin-top: 130px;\r\n}\r\n\r\n.m-t-131 {\r\n  margin-top: 131px;\r\n}\r\n\r\n.m-t-132 {\r\n  margin-top: 132px;\r\n}\r\n\r\n.m-t-133 {\r\n  margin-top: 133px;\r\n}\r\n\r\n.m-t-134 {\r\n  margin-top: 134px;\r\n}\r\n\r\n.m-t-135 {\r\n  margin-top: 135px;\r\n}\r\n\r\n.m-t-136 {\r\n  margin-top: 136px;\r\n}\r\n\r\n.m-t-137 {\r\n  margin-top: 137px;\r\n}\r\n\r\n.m-t-138 {\r\n  margin-top: 138px;\r\n}\r\n\r\n.m-t-139 {\r\n  margin-top: 139px;\r\n}\r\n\r\n.m-t-140 {\r\n  margin-top: 140px;\r\n}\r\n\r\n.m-t-141 {\r\n  margin-top: 141px;\r\n}\r\n\r\n.m-t-142 {\r\n  margin-top: 142px;\r\n}\r\n\r\n.m-t-143 {\r\n  margin-top: 143px;\r\n}\r\n\r\n.m-t-144 {\r\n  margin-top: 144px;\r\n}\r\n\r\n.m-t-145 {\r\n  margin-top: 145px;\r\n}\r\n\r\n.m-t-146 {\r\n  margin-top: 146px;\r\n}\r\n\r\n.m-t-147 {\r\n  margin-top: 147px;\r\n}\r\n\r\n.m-t-148 {\r\n  margin-top: 148px;\r\n}\r\n\r\n.m-t-149 {\r\n  margin-top: 149px;\r\n}\r\n\r\n.m-t-150 {\r\n  margin-top: 150px;\r\n}\r\n\r\n.m-t-151 {\r\n  margin-top: 151px;\r\n}\r\n\r\n.m-t-152 {\r\n  margin-top: 152px;\r\n}\r\n\r\n.m-t-153 {\r\n  margin-top: 153px;\r\n}\r\n\r\n.m-t-154 {\r\n  margin-top: 154px;\r\n}\r\n\r\n.m-t-155 {\r\n  margin-top: 155px;\r\n}\r\n\r\n.m-t-156 {\r\n  margin-top: 156px;\r\n}\r\n\r\n.m-t-157 {\r\n  margin-top: 157px;\r\n}\r\n\r\n.m-t-158 {\r\n  margin-top: 158px;\r\n}\r\n\r\n.m-t-159 {\r\n  margin-top: 159px;\r\n}\r\n\r\n.m-t-160 {\r\n  margin-top: 160px;\r\n}\r\n\r\n.m-t-161 {\r\n  margin-top: 161px;\r\n}\r\n\r\n.m-t-162 {\r\n  margin-top: 162px;\r\n}\r\n\r\n.m-t-163 {\r\n  margin-top: 163px;\r\n}\r\n\r\n.m-t-164 {\r\n  margin-top: 164px;\r\n}\r\n\r\n.m-t-165 {\r\n  margin-top: 165px;\r\n}\r\n\r\n.m-t-166 {\r\n  margin-top: 166px;\r\n}\r\n\r\n.m-t-167 {\r\n  margin-top: 167px;\r\n}\r\n\r\n.m-t-168 {\r\n  margin-top: 168px;\r\n}\r\n\r\n.m-t-169 {\r\n  margin-top: 169px;\r\n}\r\n\r\n.m-t-170 {\r\n  margin-top: 170px;\r\n}\r\n\r\n.m-t-171 {\r\n  margin-top: 171px;\r\n}\r\n\r\n.m-t-172 {\r\n  margin-top: 172px;\r\n}\r\n\r\n.m-t-173 {\r\n  margin-top: 173px;\r\n}\r\n\r\n.m-t-174 {\r\n  margin-top: 174px;\r\n}\r\n\r\n.m-t-175 {\r\n  margin-top: 175px;\r\n}\r\n\r\n.m-t-176 {\r\n  margin-top: 176px;\r\n}\r\n\r\n.m-t-177 {\r\n  margin-top: 177px;\r\n}\r\n\r\n.m-t-178 {\r\n  margin-top: 178px;\r\n}\r\n\r\n.m-t-179 {\r\n  margin-top: 179px;\r\n}\r\n\r\n.m-t-180 {\r\n  margin-top: 180px;\r\n}\r\n\r\n.m-t-181 {\r\n  margin-top: 181px;\r\n}\r\n\r\n.m-t-182 {\r\n  margin-top: 182px;\r\n}\r\n\r\n.m-t-183 {\r\n  margin-top: 183px;\r\n}\r\n\r\n.m-t-184 {\r\n  margin-top: 184px;\r\n}\r\n\r\n.m-t-185 {\r\n  margin-top: 185px;\r\n}\r\n\r\n.m-t-186 {\r\n  margin-top: 186px;\r\n}\r\n\r\n.m-t-187 {\r\n  margin-top: 187px;\r\n}\r\n\r\n.m-t-188 {\r\n  margin-top: 188px;\r\n}\r\n\r\n.m-t-189 {\r\n  margin-top: 189px;\r\n}\r\n\r\n.m-t-190 {\r\n  margin-top: 190px;\r\n}\r\n\r\n.m-t-191 {\r\n  margin-top: 191px;\r\n}\r\n\r\n.m-t-192 {\r\n  margin-top: 192px;\r\n}\r\n\r\n.m-t-193 {\r\n  margin-top: 193px;\r\n}\r\n\r\n.m-t-194 {\r\n  margin-top: 194px;\r\n}\r\n\r\n.m-t-195 {\r\n  margin-top: 195px;\r\n}\r\n\r\n.m-t-196 {\r\n  margin-top: 196px;\r\n}\r\n\r\n.m-t-197 {\r\n  margin-top: 197px;\r\n}\r\n\r\n.m-t-198 {\r\n  margin-top: 198px;\r\n}\r\n\r\n.m-t-199 {\r\n  margin-top: 199px;\r\n}\r\n\r\n.m-t-200 {\r\n  margin-top: 200px;\r\n}\r\n\r\n.m-t-201 {\r\n  margin-top: 201px;\r\n}\r\n\r\n.m-t-202 {\r\n  margin-top: 202px;\r\n}\r\n\r\n.m-t-203 {\r\n  margin-top: 203px;\r\n}\r\n\r\n.m-t-204 {\r\n  margin-top: 204px;\r\n}\r\n\r\n.m-t-205 {\r\n  margin-top: 205px;\r\n}\r\n\r\n.m-t-206 {\r\n  margin-top: 206px;\r\n}\r\n\r\n.m-t-207 {\r\n  margin-top: 207px;\r\n}\r\n\r\n.m-t-208 {\r\n  margin-top: 208px;\r\n}\r\n\r\n.m-t-209 {\r\n  margin-top: 209px;\r\n}\r\n\r\n.m-t-210 {\r\n  margin-top: 210px;\r\n}\r\n\r\n.m-t-211 {\r\n  margin-top: 211px;\r\n}\r\n\r\n.m-t-212 {\r\n  margin-top: 212px;\r\n}\r\n\r\n.m-t-213 {\r\n  margin-top: 213px;\r\n}\r\n\r\n.m-t-214 {\r\n  margin-top: 214px;\r\n}\r\n\r\n.m-t-215 {\r\n  margin-top: 215px;\r\n}\r\n\r\n.m-t-216 {\r\n  margin-top: 216px;\r\n}\r\n\r\n.m-t-217 {\r\n  margin-top: 217px;\r\n}\r\n\r\n.m-t-218 {\r\n  margin-top: 218px;\r\n}\r\n\r\n.m-t-219 {\r\n  margin-top: 219px;\r\n}\r\n\r\n.m-t-220 {\r\n  margin-top: 220px;\r\n}\r\n\r\n.m-t-221 {\r\n  margin-top: 221px;\r\n}\r\n\r\n.m-t-222 {\r\n  margin-top: 222px;\r\n}\r\n\r\n.m-t-223 {\r\n  margin-top: 223px;\r\n}\r\n\r\n.m-t-224 {\r\n  margin-top: 224px;\r\n}\r\n\r\n.m-t-225 {\r\n  margin-top: 225px;\r\n}\r\n\r\n.m-t-226 {\r\n  margin-top: 226px;\r\n}\r\n\r\n.m-t-227 {\r\n  margin-top: 227px;\r\n}\r\n\r\n.m-t-228 {\r\n  margin-top: 228px;\r\n}\r\n\r\n.m-t-229 {\r\n  margin-top: 229px;\r\n}\r\n\r\n.m-t-230 {\r\n  margin-top: 230px;\r\n}\r\n\r\n.m-t-231 {\r\n  margin-top: 231px;\r\n}\r\n\r\n.m-t-232 {\r\n  margin-top: 232px;\r\n}\r\n\r\n.m-t-233 {\r\n  margin-top: 233px;\r\n}\r\n\r\n.m-t-234 {\r\n  margin-top: 234px;\r\n}\r\n\r\n.m-t-235 {\r\n  margin-top: 235px;\r\n}\r\n\r\n.m-t-236 {\r\n  margin-top: 236px;\r\n}\r\n\r\n.m-t-237 {\r\n  margin-top: 237px;\r\n}\r\n\r\n.m-t-238 {\r\n  margin-top: 238px;\r\n}\r\n\r\n.m-t-239 {\r\n  margin-top: 239px;\r\n}\r\n\r\n.m-t-240 {\r\n  margin-top: 240px;\r\n}\r\n\r\n.m-t-241 {\r\n  margin-top: 241px;\r\n}\r\n\r\n.m-t-242 {\r\n  margin-top: 242px;\r\n}\r\n\r\n.m-t-243 {\r\n  margin-top: 243px;\r\n}\r\n\r\n.m-t-244 {\r\n  margin-top: 244px;\r\n}\r\n\r\n.m-t-245 {\r\n  margin-top: 245px;\r\n}\r\n\r\n.m-t-246 {\r\n  margin-top: 246px;\r\n}\r\n\r\n.m-t-247 {\r\n  margin-top: 247px;\r\n}\r\n\r\n.m-t-248 {\r\n  margin-top: 248px;\r\n}\r\n\r\n.m-t-249 {\r\n  margin-top: 249px;\r\n}\r\n\r\n.m-t-250 {\r\n  margin-top: 250px;\r\n}\r\n\r\n.m-b-0 {\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.m-b-1 {\r\n  margin-bottom: 1px;\r\n}\r\n\r\n.m-b-2 {\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.m-b-3 {\r\n  margin-bottom: 3px;\r\n}\r\n\r\n.m-b-4 {\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.m-b-5 {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.m-b-6 {\r\n  margin-bottom: 6px;\r\n}\r\n\r\n.m-b-7 {\r\n  margin-bottom: 7px;\r\n}\r\n\r\n.m-b-8 {\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.m-b-9 {\r\n  margin-bottom: 9px;\r\n}\r\n\r\n.m-b-10 {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.m-b-11 {\r\n  margin-bottom: 11px;\r\n}\r\n\r\n.m-b-12 {\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.m-b-13 {\r\n  margin-bottom: 13px;\r\n}\r\n\r\n.m-b-14 {\r\n  margin-bottom: 14px;\r\n}\r\n\r\n.m-b-15 {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.m-b-16 {\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.m-b-17 {\r\n  margin-bottom: 17px;\r\n}\r\n\r\n.m-b-18 {\r\n  margin-bottom: 18px;\r\n}\r\n\r\n.m-b-19 {\r\n  margin-bottom: 19px;\r\n}\r\n\r\n.m-b-20 {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.m-b-21 {\r\n  margin-bottom: 21px;\r\n}\r\n\r\n.m-b-22 {\r\n  margin-bottom: 22px;\r\n}\r\n\r\n.m-b-23 {\r\n  margin-bottom: 23px;\r\n}\r\n\r\n.m-b-24 {\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.m-b-25 {\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.m-b-26 {\r\n  margin-bottom: 26px;\r\n}\r\n\r\n.m-b-27 {\r\n  margin-bottom: 27px;\r\n}\r\n\r\n.m-b-28 {\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.m-b-29 {\r\n  margin-bottom: 29px;\r\n}\r\n\r\n.m-b-30 {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.m-b-31 {\r\n  margin-bottom: 31px;\r\n}\r\n\r\n.m-b-32 {\r\n  margin-bottom: 32px;\r\n}\r\n\r\n.m-b-33 {\r\n  margin-bottom: 33px;\r\n}\r\n\r\n.m-b-34 {\r\n  margin-bottom: 34px;\r\n}\r\n\r\n.m-b-35 {\r\n  margin-bottom: 35px;\r\n}\r\n\r\n.m-b-36 {\r\n  margin-bottom: 36px;\r\n}\r\n\r\n.m-b-37 {\r\n  margin-bottom: 37px;\r\n}\r\n\r\n.m-b-38 {\r\n  margin-bottom: 38px;\r\n}\r\n\r\n.m-b-39 {\r\n  margin-bottom: 39px;\r\n}\r\n\r\n.m-b-40 {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.m-b-41 {\r\n  margin-bottom: 41px;\r\n}\r\n\r\n.m-b-42 {\r\n  margin-bottom: 42px;\r\n}\r\n\r\n.m-b-43 {\r\n  margin-bottom: 43px;\r\n}\r\n\r\n.m-b-44 {\r\n  margin-bottom: 44px;\r\n}\r\n\r\n.m-b-45 {\r\n  margin-bottom: 45px;\r\n}\r\n\r\n.m-b-46 {\r\n  margin-bottom: 46px;\r\n}\r\n\r\n.m-b-47 {\r\n  margin-bottom: 47px;\r\n}\r\n\r\n.m-b-48 {\r\n  margin-bottom: 48px;\r\n}\r\n\r\n.m-b-49 {\r\n  margin-bottom: 49px;\r\n}\r\n\r\n.m-b-50 {\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.m-b-51 {\r\n  margin-bottom: 51px;\r\n}\r\n\r\n.m-b-52 {\r\n  margin-bottom: 52px;\r\n}\r\n\r\n.m-b-53 {\r\n  margin-bottom: 53px;\r\n}\r\n\r\n.m-b-54 {\r\n  margin-bottom: 54px;\r\n}\r\n\r\n.m-b-55 {\r\n  margin-bottom: 55px;\r\n}\r\n\r\n.m-b-56 {\r\n  margin-bottom: 56px;\r\n}\r\n\r\n.m-b-57 {\r\n  margin-bottom: 57px;\r\n}\r\n\r\n.m-b-58 {\r\n  margin-bottom: 58px;\r\n}\r\n\r\n.m-b-59 {\r\n  margin-bottom: 59px;\r\n}\r\n\r\n.m-b-60 {\r\n  margin-bottom: 60px;\r\n}\r\n\r\n.m-b-61 {\r\n  margin-bottom: 61px;\r\n}\r\n\r\n.m-b-62 {\r\n  margin-bottom: 62px;\r\n}\r\n\r\n.m-b-63 {\r\n  margin-bottom: 63px;\r\n}\r\n\r\n.m-b-64 {\r\n  margin-bottom: 64px;\r\n}\r\n\r\n.m-b-65 {\r\n  margin-bottom: 65px;\r\n}\r\n\r\n.m-b-66 {\r\n  margin-bottom: 66px;\r\n}\r\n\r\n.m-b-67 {\r\n  margin-bottom: 67px;\r\n}\r\n\r\n.m-b-68 {\r\n  margin-bottom: 68px;\r\n}\r\n\r\n.m-b-69 {\r\n  margin-bottom: 69px;\r\n}\r\n\r\n.m-b-70 {\r\n  margin-bottom: 70px;\r\n}\r\n\r\n.m-b-71 {\r\n  margin-bottom: 71px;\r\n}\r\n\r\n.m-b-72 {\r\n  margin-bottom: 72px;\r\n}\r\n\r\n.m-b-73 {\r\n  margin-bottom: 73px;\r\n}\r\n\r\n.m-b-74 {\r\n  margin-bottom: 74px;\r\n}\r\n\r\n.m-b-75 {\r\n  margin-bottom: 75px;\r\n}\r\n\r\n.m-b-76 {\r\n  margin-bottom: 76px;\r\n}\r\n\r\n.m-b-77 {\r\n  margin-bottom: 77px;\r\n}\r\n\r\n.m-b-78 {\r\n  margin-bottom: 78px;\r\n}\r\n\r\n.m-b-79 {\r\n  margin-bottom: 79px;\r\n}\r\n\r\n.m-b-80 {\r\n  margin-bottom: 80px;\r\n}\r\n\r\n.m-b-81 {\r\n  margin-bottom: 81px;\r\n}\r\n\r\n.m-b-82 {\r\n  margin-bottom: 82px;\r\n}\r\n\r\n.m-b-83 {\r\n  margin-bottom: 83px;\r\n}\r\n\r\n.m-b-84 {\r\n  margin-bottom: 84px;\r\n}\r\n\r\n.m-b-85 {\r\n  margin-bottom: 85px;\r\n}\r\n\r\n.m-b-86 {\r\n  margin-bottom: 86px;\r\n}\r\n\r\n.m-b-87 {\r\n  margin-bottom: 87px;\r\n}\r\n\r\n.m-b-88 {\r\n  margin-bottom: 88px;\r\n}\r\n\r\n.m-b-89 {\r\n  margin-bottom: 89px;\r\n}\r\n\r\n.m-b-90 {\r\n  margin-bottom: 90px;\r\n}\r\n\r\n.m-b-91 {\r\n  margin-bottom: 91px;\r\n}\r\n\r\n.m-b-92 {\r\n  margin-bottom: 92px;\r\n}\r\n\r\n.m-b-93 {\r\n  margin-bottom: 93px;\r\n}\r\n\r\n.m-b-94 {\r\n  margin-bottom: 94px;\r\n}\r\n\r\n.m-b-95 {\r\n  margin-bottom: 95px;\r\n}\r\n\r\n.m-b-96 {\r\n  margin-bottom: 96px;\r\n}\r\n\r\n.m-b-97 {\r\n  margin-bottom: 97px;\r\n}\r\n\r\n.m-b-98 {\r\n  margin-bottom: 98px;\r\n}\r\n\r\n.m-b-99 {\r\n  margin-bottom: 99px;\r\n}\r\n\r\n.m-b-100 {\r\n  margin-bottom: 100px;\r\n}\r\n\r\n.m-b-101 {\r\n  margin-bottom: 101px;\r\n}\r\n\r\n.m-b-102 {\r\n  margin-bottom: 102px;\r\n}\r\n\r\n.m-b-103 {\r\n  margin-bottom: 103px;\r\n}\r\n\r\n.m-b-104 {\r\n  margin-bottom: 104px;\r\n}\r\n\r\n.m-b-105 {\r\n  margin-bottom: 105px;\r\n}\r\n\r\n.m-b-106 {\r\n  margin-bottom: 106px;\r\n}\r\n\r\n.m-b-107 {\r\n  margin-bottom: 107px;\r\n}\r\n\r\n.m-b-108 {\r\n  margin-bottom: 108px;\r\n}\r\n\r\n.m-b-109 {\r\n  margin-bottom: 109px;\r\n}\r\n\r\n.m-b-110 {\r\n  margin-bottom: 110px;\r\n}\r\n\r\n.m-b-111 {\r\n  margin-bottom: 111px;\r\n}\r\n\r\n.m-b-112 {\r\n  margin-bottom: 112px;\r\n}\r\n\r\n.m-b-113 {\r\n  margin-bottom: 113px;\r\n}\r\n\r\n.m-b-114 {\r\n  margin-bottom: 114px;\r\n}\r\n\r\n.m-b-115 {\r\n  margin-bottom: 115px;\r\n}\r\n\r\n.m-b-116 {\r\n  margin-bottom: 116px;\r\n}\r\n\r\n.m-b-117 {\r\n  margin-bottom: 117px;\r\n}\r\n\r\n.m-b-118 {\r\n  margin-bottom: 118px;\r\n}\r\n\r\n.m-b-119 {\r\n  margin-bottom: 119px;\r\n}\r\n\r\n.m-b-120 {\r\n  margin-bottom: 120px;\r\n}\r\n\r\n.m-b-121 {\r\n  margin-bottom: 121px;\r\n}\r\n\r\n.m-b-122 {\r\n  margin-bottom: 122px;\r\n}\r\n\r\n.m-b-123 {\r\n  margin-bottom: 123px;\r\n}\r\n\r\n.m-b-124 {\r\n  margin-bottom: 124px;\r\n}\r\n\r\n.m-b-125 {\r\n  margin-bottom: 125px;\r\n}\r\n\r\n.m-b-126 {\r\n  margin-bottom: 126px;\r\n}\r\n\r\n.m-b-127 {\r\n  margin-bottom: 127px;\r\n}\r\n\r\n.m-b-128 {\r\n  margin-bottom: 128px;\r\n}\r\n\r\n.m-b-129 {\r\n  margin-bottom: 129px;\r\n}\r\n\r\n.m-b-130 {\r\n  margin-bottom: 130px;\r\n}\r\n\r\n.m-b-131 {\r\n  margin-bottom: 131px;\r\n}\r\n\r\n.m-b-132 {\r\n  margin-bottom: 132px;\r\n}\r\n\r\n.m-b-133 {\r\n  margin-bottom: 133px;\r\n}\r\n\r\n.m-b-134 {\r\n  margin-bottom: 134px;\r\n}\r\n\r\n.m-b-135 {\r\n  margin-bottom: 135px;\r\n}\r\n\r\n.m-b-136 {\r\n  margin-bottom: 136px;\r\n}\r\n\r\n.m-b-137 {\r\n  margin-bottom: 137px;\r\n}\r\n\r\n.m-b-138 {\r\n  margin-bottom: 138px;\r\n}\r\n\r\n.m-b-139 {\r\n  margin-bottom: 139px;\r\n}\r\n\r\n.m-b-140 {\r\n  margin-bottom: 140px;\r\n}\r\n\r\n.m-b-141 {\r\n  margin-bottom: 141px;\r\n}\r\n\r\n.m-b-142 {\r\n  margin-bottom: 142px;\r\n}\r\n\r\n.m-b-143 {\r\n  margin-bottom: 143px;\r\n}\r\n\r\n.m-b-144 {\r\n  margin-bottom: 144px;\r\n}\r\n\r\n.m-b-145 {\r\n  margin-bottom: 145px;\r\n}\r\n\r\n.m-b-146 {\r\n  margin-bottom: 146px;\r\n}\r\n\r\n.m-b-147 {\r\n  margin-bottom: 147px;\r\n}\r\n\r\n.m-b-148 {\r\n  margin-bottom: 148px;\r\n}\r\n\r\n.m-b-149 {\r\n  margin-bottom: 149px;\r\n}\r\n\r\n.m-b-150 {\r\n  margin-bottom: 150px;\r\n}\r\n\r\n.m-b-151 {\r\n  margin-bottom: 151px;\r\n}\r\n\r\n.m-b-152 {\r\n  margin-bottom: 152px;\r\n}\r\n\r\n.m-b-153 {\r\n  margin-bottom: 153px;\r\n}\r\n\r\n.m-b-154 {\r\n  margin-bottom: 154px;\r\n}\r\n\r\n.m-b-155 {\r\n  margin-bottom: 155px;\r\n}\r\n\r\n.m-b-156 {\r\n  margin-bottom: 156px;\r\n}\r\n\r\n.m-b-157 {\r\n  margin-bottom: 157px;\r\n}\r\n\r\n.m-b-158 {\r\n  margin-bottom: 158px;\r\n}\r\n\r\n.m-b-159 {\r\n  margin-bottom: 159px;\r\n}\r\n\r\n.m-b-160 {\r\n  margin-bottom: 160px;\r\n}\r\n\r\n.m-b-161 {\r\n  margin-bottom: 161px;\r\n}\r\n\r\n.m-b-162 {\r\n  margin-bottom: 162px;\r\n}\r\n\r\n.m-b-163 {\r\n  margin-bottom: 163px;\r\n}\r\n\r\n.m-b-164 {\r\n  margin-bottom: 164px;\r\n}\r\n\r\n.m-b-165 {\r\n  margin-bottom: 165px;\r\n}\r\n\r\n.m-b-166 {\r\n  margin-bottom: 166px;\r\n}\r\n\r\n.m-b-167 {\r\n  margin-bottom: 167px;\r\n}\r\n\r\n.m-b-168 {\r\n  margin-bottom: 168px;\r\n}\r\n\r\n.m-b-169 {\r\n  margin-bottom: 169px;\r\n}\r\n\r\n.m-b-170 {\r\n  margin-bottom: 170px;\r\n}\r\n\r\n.m-b-171 {\r\n  margin-bottom: 171px;\r\n}\r\n\r\n.m-b-172 {\r\n  margin-bottom: 172px;\r\n}\r\n\r\n.m-b-173 {\r\n  margin-bottom: 173px;\r\n}\r\n\r\n.m-b-174 {\r\n  margin-bottom: 174px;\r\n}\r\n\r\n.m-b-175 {\r\n  margin-bottom: 175px;\r\n}\r\n\r\n.m-b-176 {\r\n  margin-bottom: 176px;\r\n}\r\n\r\n.m-b-177 {\r\n  margin-bottom: 177px;\r\n}\r\n\r\n.m-b-178 {\r\n  margin-bottom: 178px;\r\n}\r\n\r\n.m-b-179 {\r\n  margin-bottom: 179px;\r\n}\r\n\r\n.m-b-180 {\r\n  margin-bottom: 180px;\r\n}\r\n\r\n.m-b-181 {\r\n  margin-bottom: 181px;\r\n}\r\n\r\n.m-b-182 {\r\n  margin-bottom: 182px;\r\n}\r\n\r\n.m-b-183 {\r\n  margin-bottom: 183px;\r\n}\r\n\r\n.m-b-184 {\r\n  margin-bottom: 184px;\r\n}\r\n\r\n.m-b-185 {\r\n  margin-bottom: 185px;\r\n}\r\n\r\n.m-b-186 {\r\n  margin-bottom: 186px;\r\n}\r\n\r\n.m-b-187 {\r\n  margin-bottom: 187px;\r\n}\r\n\r\n.m-b-188 {\r\n  margin-bottom: 188px;\r\n}\r\n\r\n.m-b-189 {\r\n  margin-bottom: 189px;\r\n}\r\n\r\n.m-b-190 {\r\n  margin-bottom: 190px;\r\n}\r\n\r\n.m-b-191 {\r\n  margin-bottom: 191px;\r\n}\r\n\r\n.m-b-192 {\r\n  margin-bottom: 192px;\r\n}\r\n\r\n.m-b-193 {\r\n  margin-bottom: 193px;\r\n}\r\n\r\n.m-b-194 {\r\n  margin-bottom: 194px;\r\n}\r\n\r\n.m-b-195 {\r\n  margin-bottom: 195px;\r\n}\r\n\r\n.m-b-196 {\r\n  margin-bottom: 196px;\r\n}\r\n\r\n.m-b-197 {\r\n  margin-bottom: 197px;\r\n}\r\n\r\n.m-b-198 {\r\n  margin-bottom: 198px;\r\n}\r\n\r\n.m-b-199 {\r\n  margin-bottom: 199px;\r\n}\r\n\r\n.m-b-200 {\r\n  margin-bottom: 200px;\r\n}\r\n\r\n.m-b-201 {\r\n  margin-bottom: 201px;\r\n}\r\n\r\n.m-b-202 {\r\n  margin-bottom: 202px;\r\n}\r\n\r\n.m-b-203 {\r\n  margin-bottom: 203px;\r\n}\r\n\r\n.m-b-204 {\r\n  margin-bottom: 204px;\r\n}\r\n\r\n.m-b-205 {\r\n  margin-bottom: 205px;\r\n}\r\n\r\n.m-b-206 {\r\n  margin-bottom: 206px;\r\n}\r\n\r\n.m-b-207 {\r\n  margin-bottom: 207px;\r\n}\r\n\r\n.m-b-208 {\r\n  margin-bottom: 208px;\r\n}\r\n\r\n.m-b-209 {\r\n  margin-bottom: 209px;\r\n}\r\n\r\n.m-b-210 {\r\n  margin-bottom: 210px;\r\n}\r\n\r\n.m-b-211 {\r\n  margin-bottom: 211px;\r\n}\r\n\r\n.m-b-212 {\r\n  margin-bottom: 212px;\r\n}\r\n\r\n.m-b-213 {\r\n  margin-bottom: 213px;\r\n}\r\n\r\n.m-b-214 {\r\n  margin-bottom: 214px;\r\n}\r\n\r\n.m-b-215 {\r\n  margin-bottom: 215px;\r\n}\r\n\r\n.m-b-216 {\r\n  margin-bottom: 216px;\r\n}\r\n\r\n.m-b-217 {\r\n  margin-bottom: 217px;\r\n}\r\n\r\n.m-b-218 {\r\n  margin-bottom: 218px;\r\n}\r\n\r\n.m-b-219 {\r\n  margin-bottom: 219px;\r\n}\r\n\r\n.m-b-220 {\r\n  margin-bottom: 220px;\r\n}\r\n\r\n.m-b-221 {\r\n  margin-bottom: 221px;\r\n}\r\n\r\n.m-b-222 {\r\n  margin-bottom: 222px;\r\n}\r\n\r\n.m-b-223 {\r\n  margin-bottom: 223px;\r\n}\r\n\r\n.m-b-224 {\r\n  margin-bottom: 224px;\r\n}\r\n\r\n.m-b-225 {\r\n  margin-bottom: 225px;\r\n}\r\n\r\n.m-b-226 {\r\n  margin-bottom: 226px;\r\n}\r\n\r\n.m-b-227 {\r\n  margin-bottom: 227px;\r\n}\r\n\r\n.m-b-228 {\r\n  margin-bottom: 228px;\r\n}\r\n\r\n.m-b-229 {\r\n  margin-bottom: 229px;\r\n}\r\n\r\n.m-b-230 {\r\n  margin-bottom: 230px;\r\n}\r\n\r\n.m-b-231 {\r\n  margin-bottom: 231px;\r\n}\r\n\r\n.m-b-232 {\r\n  margin-bottom: 232px;\r\n}\r\n\r\n.m-b-233 {\r\n  margin-bottom: 233px;\r\n}\r\n\r\n.m-b-234 {\r\n  margin-bottom: 234px;\r\n}\r\n\r\n.m-b-235 {\r\n  margin-bottom: 235px;\r\n}\r\n\r\n.m-b-236 {\r\n  margin-bottom: 236px;\r\n}\r\n\r\n.m-b-237 {\r\n  margin-bottom: 237px;\r\n}\r\n\r\n.m-b-238 {\r\n  margin-bottom: 238px;\r\n}\r\n\r\n.m-b-239 {\r\n  margin-bottom: 239px;\r\n}\r\n\r\n.m-b-240 {\r\n  margin-bottom: 240px;\r\n}\r\n\r\n.m-b-241 {\r\n  margin-bottom: 241px;\r\n}\r\n\r\n.m-b-242 {\r\n  margin-bottom: 242px;\r\n}\r\n\r\n.m-b-243 {\r\n  margin-bottom: 243px;\r\n}\r\n\r\n.m-b-244 {\r\n  margin-bottom: 244px;\r\n}\r\n\r\n.m-b-245 {\r\n  margin-bottom: 245px;\r\n}\r\n\r\n.m-b-246 {\r\n  margin-bottom: 246px;\r\n}\r\n\r\n.m-b-247 {\r\n  margin-bottom: 247px;\r\n}\r\n\r\n.m-b-248 {\r\n  margin-bottom: 248px;\r\n}\r\n\r\n.m-b-249 {\r\n  margin-bottom: 249px;\r\n}\r\n\r\n.m-b-250 {\r\n  margin-bottom: 250px;\r\n}\r\n\r\n.m-l-0 {\r\n  margin-left: 0px;\r\n}\r\n\r\n.m-l-1 {\r\n  margin-left: 1px;\r\n}\r\n\r\n.m-l-2 {\r\n  margin-left: 2px;\r\n}\r\n\r\n.m-l-3 {\r\n  margin-left: 3px;\r\n}\r\n\r\n.m-l-4 {\r\n  margin-left: 4px;\r\n}\r\n\r\n.m-l-5 {\r\n  margin-left: 5px;\r\n}\r\n\r\n.m-l-6 {\r\n  margin-left: 6px;\r\n}\r\n\r\n.m-l-7 {\r\n  margin-left: 7px;\r\n}\r\n\r\n.m-l-8 {\r\n  margin-left: 8px;\r\n}\r\n\r\n.m-l-9 {\r\n  margin-left: 9px;\r\n}\r\n\r\n.m-l-10 {\r\n  margin-left: 10px;\r\n}\r\n\r\n.m-l-11 {\r\n  margin-left: 11px;\r\n}\r\n\r\n.m-l-12 {\r\n  margin-left: 12px;\r\n}\r\n\r\n.m-l-13 {\r\n  margin-left: 13px;\r\n}\r\n\r\n.m-l-14 {\r\n  margin-left: 14px;\r\n}\r\n\r\n.m-l-15 {\r\n  margin-left: 15px;\r\n}\r\n\r\n.m-l-16 {\r\n  margin-left: 16px;\r\n}\r\n\r\n.m-l-17 {\r\n  margin-left: 17px;\r\n}\r\n\r\n.m-l-18 {\r\n  margin-left: 18px;\r\n}\r\n\r\n.m-l-19 {\r\n  margin-left: 19px;\r\n}\r\n\r\n.m-l-20 {\r\n  margin-left: 20px;\r\n}\r\n\r\n.m-l-21 {\r\n  margin-left: 21px;\r\n}\r\n\r\n.m-l-22 {\r\n  margin-left: 22px;\r\n}\r\n\r\n.m-l-23 {\r\n  margin-left: 23px;\r\n}\r\n\r\n.m-l-24 {\r\n  margin-left: 24px;\r\n}\r\n\r\n.m-l-25 {\r\n  margin-left: 25px;\r\n}\r\n\r\n.m-l-26 {\r\n  margin-left: 26px;\r\n}\r\n\r\n.m-l-27 {\r\n  margin-left: 27px;\r\n}\r\n\r\n.m-l-28 {\r\n  margin-left: 28px;\r\n}\r\n\r\n.m-l-29 {\r\n  margin-left: 29px;\r\n}\r\n\r\n.m-l-30 {\r\n  margin-left: 30px;\r\n}\r\n\r\n.m-l-31 {\r\n  margin-left: 31px;\r\n}\r\n\r\n.m-l-32 {\r\n  margin-left: 32px;\r\n}\r\n\r\n.m-l-33 {\r\n  margin-left: 33px;\r\n}\r\n\r\n.m-l-34 {\r\n  margin-left: 34px;\r\n}\r\n\r\n.m-l-35 {\r\n  margin-left: 35px;\r\n}\r\n\r\n.m-l-36 {\r\n  margin-left: 36px;\r\n}\r\n\r\n.m-l-37 {\r\n  margin-left: 37px;\r\n}\r\n\r\n.m-l-38 {\r\n  margin-left: 38px;\r\n}\r\n\r\n.m-l-39 {\r\n  margin-left: 39px;\r\n}\r\n\r\n.m-l-40 {\r\n  margin-left: 40px;\r\n}\r\n\r\n.m-l-41 {\r\n  margin-left: 41px;\r\n}\r\n\r\n.m-l-42 {\r\n  margin-left: 42px;\r\n}\r\n\r\n.m-l-43 {\r\n  margin-left: 43px;\r\n}\r\n\r\n.m-l-44 {\r\n  margin-left: 44px;\r\n}\r\n\r\n.m-l-45 {\r\n  margin-left: 45px;\r\n}\r\n\r\n.m-l-46 {\r\n  margin-left: 46px;\r\n}\r\n\r\n.m-l-47 {\r\n  margin-left: 47px;\r\n}\r\n\r\n.m-l-48 {\r\n  margin-left: 48px;\r\n}\r\n\r\n.m-l-49 {\r\n  margin-left: 49px;\r\n}\r\n\r\n.m-l-50 {\r\n  margin-left: 50px;\r\n}\r\n\r\n.m-l-51 {\r\n  margin-left: 51px;\r\n}\r\n\r\n.m-l-52 {\r\n  margin-left: 52px;\r\n}\r\n\r\n.m-l-53 {\r\n  margin-left: 53px;\r\n}\r\n\r\n.m-l-54 {\r\n  margin-left: 54px;\r\n}\r\n\r\n.m-l-55 {\r\n  margin-left: 55px;\r\n}\r\n\r\n.m-l-56 {\r\n  margin-left: 56px;\r\n}\r\n\r\n.m-l-57 {\r\n  margin-left: 57px;\r\n}\r\n\r\n.m-l-58 {\r\n  margin-left: 58px;\r\n}\r\n\r\n.m-l-59 {\r\n  margin-left: 59px;\r\n}\r\n\r\n.m-l-60 {\r\n  margin-left: 60px;\r\n}\r\n\r\n.m-l-61 {\r\n  margin-left: 61px;\r\n}\r\n\r\n.m-l-62 {\r\n  margin-left: 62px;\r\n}\r\n\r\n.m-l-63 {\r\n  margin-left: 63px;\r\n}\r\n\r\n.m-l-64 {\r\n  margin-left: 64px;\r\n}\r\n\r\n.m-l-65 {\r\n  margin-left: 65px;\r\n}\r\n\r\n.m-l-66 {\r\n  margin-left: 66px;\r\n}\r\n\r\n.m-l-67 {\r\n  margin-left: 67px;\r\n}\r\n\r\n.m-l-68 {\r\n  margin-left: 68px;\r\n}\r\n\r\n.m-l-69 {\r\n  margin-left: 69px;\r\n}\r\n\r\n.m-l-70 {\r\n  margin-left: 70px;\r\n}\r\n\r\n.m-l-71 {\r\n  margin-left: 71px;\r\n}\r\n\r\n.m-l-72 {\r\n  margin-left: 72px;\r\n}\r\n\r\n.m-l-73 {\r\n  margin-left: 73px;\r\n}\r\n\r\n.m-l-74 {\r\n  margin-left: 74px;\r\n}\r\n\r\n.m-l-75 {\r\n  margin-left: 75px;\r\n}\r\n\r\n.m-l-76 {\r\n  margin-left: 76px;\r\n}\r\n\r\n.m-l-77 {\r\n  margin-left: 77px;\r\n}\r\n\r\n.m-l-78 {\r\n  margin-left: 78px;\r\n}\r\n\r\n.m-l-79 {\r\n  margin-left: 79px;\r\n}\r\n\r\n.m-l-80 {\r\n  margin-left: 80px;\r\n}\r\n\r\n.m-l-81 {\r\n  margin-left: 81px;\r\n}\r\n\r\n.m-l-82 {\r\n  margin-left: 82px;\r\n}\r\n\r\n.m-l-83 {\r\n  margin-left: 83px;\r\n}\r\n\r\n.m-l-84 {\r\n  margin-left: 84px;\r\n}\r\n\r\n.m-l-85 {\r\n  margin-left: 85px;\r\n}\r\n\r\n.m-l-86 {\r\n  margin-left: 86px;\r\n}\r\n\r\n.m-l-87 {\r\n  margin-left: 87px;\r\n}\r\n\r\n.m-l-88 {\r\n  margin-left: 88px;\r\n}\r\n\r\n.m-l-89 {\r\n  margin-left: 89px;\r\n}\r\n\r\n.m-l-90 {\r\n  margin-left: 90px;\r\n}\r\n\r\n.m-l-91 {\r\n  margin-left: 91px;\r\n}\r\n\r\n.m-l-92 {\r\n  margin-left: 92px;\r\n}\r\n\r\n.m-l-93 {\r\n  margin-left: 93px;\r\n}\r\n\r\n.m-l-94 {\r\n  margin-left: 94px;\r\n}\r\n\r\n.m-l-95 {\r\n  margin-left: 95px;\r\n}\r\n\r\n.m-l-96 {\r\n  margin-left: 96px;\r\n}\r\n\r\n.m-l-97 {\r\n  margin-left: 97px;\r\n}\r\n\r\n.m-l-98 {\r\n  margin-left: 98px;\r\n}\r\n\r\n.m-l-99 {\r\n  margin-left: 99px;\r\n}\r\n\r\n.m-l-100 {\r\n  margin-left: 100px;\r\n}\r\n\r\n.m-l-101 {\r\n  margin-left: 101px;\r\n}\r\n\r\n.m-l-102 {\r\n  margin-left: 102px;\r\n}\r\n\r\n.m-l-103 {\r\n  margin-left: 103px;\r\n}\r\n\r\n.m-l-104 {\r\n  margin-left: 104px;\r\n}\r\n\r\n.m-l-105 {\r\n  margin-left: 105px;\r\n}\r\n\r\n.m-l-106 {\r\n  margin-left: 106px;\r\n}\r\n\r\n.m-l-107 {\r\n  margin-left: 107px;\r\n}\r\n\r\n.m-l-108 {\r\n  margin-left: 108px;\r\n}\r\n\r\n.m-l-109 {\r\n  margin-left: 109px;\r\n}\r\n\r\n.m-l-110 {\r\n  margin-left: 110px;\r\n}\r\n\r\n.m-l-111 {\r\n  margin-left: 111px;\r\n}\r\n\r\n.m-l-112 {\r\n  margin-left: 112px;\r\n}\r\n\r\n.m-l-113 {\r\n  margin-left: 113px;\r\n}\r\n\r\n.m-l-114 {\r\n  margin-left: 114px;\r\n}\r\n\r\n.m-l-115 {\r\n  margin-left: 115px;\r\n}\r\n\r\n.m-l-116 {\r\n  margin-left: 116px;\r\n}\r\n\r\n.m-l-117 {\r\n  margin-left: 117px;\r\n}\r\n\r\n.m-l-118 {\r\n  margin-left: 118px;\r\n}\r\n\r\n.m-l-119 {\r\n  margin-left: 119px;\r\n}\r\n\r\n.m-l-120 {\r\n  margin-left: 120px;\r\n}\r\n\r\n.m-l-121 {\r\n  margin-left: 121px;\r\n}\r\n\r\n.m-l-122 {\r\n  margin-left: 122px;\r\n}\r\n\r\n.m-l-123 {\r\n  margin-left: 123px;\r\n}\r\n\r\n.m-l-124 {\r\n  margin-left: 124px;\r\n}\r\n\r\n.m-l-125 {\r\n  margin-left: 125px;\r\n}\r\n\r\n.m-l-126 {\r\n  margin-left: 126px;\r\n}\r\n\r\n.m-l-127 {\r\n  margin-left: 127px;\r\n}\r\n\r\n.m-l-128 {\r\n  margin-left: 128px;\r\n}\r\n\r\n.m-l-129 {\r\n  margin-left: 129px;\r\n}\r\n\r\n.m-l-130 {\r\n  margin-left: 130px;\r\n}\r\n\r\n.m-l-131 {\r\n  margin-left: 131px;\r\n}\r\n\r\n.m-l-132 {\r\n  margin-left: 132px;\r\n}\r\n\r\n.m-l-133 {\r\n  margin-left: 133px;\r\n}\r\n\r\n.m-l-134 {\r\n  margin-left: 134px;\r\n}\r\n\r\n.m-l-135 {\r\n  margin-left: 135px;\r\n}\r\n\r\n.m-l-136 {\r\n  margin-left: 136px;\r\n}\r\n\r\n.m-l-137 {\r\n  margin-left: 137px;\r\n}\r\n\r\n.m-l-138 {\r\n  margin-left: 138px;\r\n}\r\n\r\n.m-l-139 {\r\n  margin-left: 139px;\r\n}\r\n\r\n.m-l-140 {\r\n  margin-left: 140px;\r\n}\r\n\r\n.m-l-141 {\r\n  margin-left: 141px;\r\n}\r\n\r\n.m-l-142 {\r\n  margin-left: 142px;\r\n}\r\n\r\n.m-l-143 {\r\n  margin-left: 143px;\r\n}\r\n\r\n.m-l-144 {\r\n  margin-left: 144px;\r\n}\r\n\r\n.m-l-145 {\r\n  margin-left: 145px;\r\n}\r\n\r\n.m-l-146 {\r\n  margin-left: 146px;\r\n}\r\n\r\n.m-l-147 {\r\n  margin-left: 147px;\r\n}\r\n\r\n.m-l-148 {\r\n  margin-left: 148px;\r\n}\r\n\r\n.m-l-149 {\r\n  margin-left: 149px;\r\n}\r\n\r\n.m-l-150 {\r\n  margin-left: 150px;\r\n}\r\n\r\n.m-l-151 {\r\n  margin-left: 151px;\r\n}\r\n\r\n.m-l-152 {\r\n  margin-left: 152px;\r\n}\r\n\r\n.m-l-153 {\r\n  margin-left: 153px;\r\n}\r\n\r\n.m-l-154 {\r\n  margin-left: 154px;\r\n}\r\n\r\n.m-l-155 {\r\n  margin-left: 155px;\r\n}\r\n\r\n.m-l-156 {\r\n  margin-left: 156px;\r\n}\r\n\r\n.m-l-157 {\r\n  margin-left: 157px;\r\n}\r\n\r\n.m-l-158 {\r\n  margin-left: 158px;\r\n}\r\n\r\n.m-l-159 {\r\n  margin-left: 159px;\r\n}\r\n\r\n.m-l-160 {\r\n  margin-left: 160px;\r\n}\r\n\r\n.m-l-161 {\r\n  margin-left: 161px;\r\n}\r\n\r\n.m-l-162 {\r\n  margin-left: 162px;\r\n}\r\n\r\n.m-l-163 {\r\n  margin-left: 163px;\r\n}\r\n\r\n.m-l-164 {\r\n  margin-left: 164px;\r\n}\r\n\r\n.m-l-165 {\r\n  margin-left: 165px;\r\n}\r\n\r\n.m-l-166 {\r\n  margin-left: 166px;\r\n}\r\n\r\n.m-l-167 {\r\n  margin-left: 167px;\r\n}\r\n\r\n.m-l-168 {\r\n  margin-left: 168px;\r\n}\r\n\r\n.m-l-169 {\r\n  margin-left: 169px;\r\n}\r\n\r\n.m-l-170 {\r\n  margin-left: 170px;\r\n}\r\n\r\n.m-l-171 {\r\n  margin-left: 171px;\r\n}\r\n\r\n.m-l-172 {\r\n  margin-left: 172px;\r\n}\r\n\r\n.m-l-173 {\r\n  margin-left: 173px;\r\n}\r\n\r\n.m-l-174 {\r\n  margin-left: 174px;\r\n}\r\n\r\n.m-l-175 {\r\n  margin-left: 175px;\r\n}\r\n\r\n.m-l-176 {\r\n  margin-left: 176px;\r\n}\r\n\r\n.m-l-177 {\r\n  margin-left: 177px;\r\n}\r\n\r\n.m-l-178 {\r\n  margin-left: 178px;\r\n}\r\n\r\n.m-l-179 {\r\n  margin-left: 179px;\r\n}\r\n\r\n.m-l-180 {\r\n  margin-left: 180px;\r\n}\r\n\r\n.m-l-181 {\r\n  margin-left: 181px;\r\n}\r\n\r\n.m-l-182 {\r\n  margin-left: 182px;\r\n}\r\n\r\n.m-l-183 {\r\n  margin-left: 183px;\r\n}\r\n\r\n.m-l-184 {\r\n  margin-left: 184px;\r\n}\r\n\r\n.m-l-185 {\r\n  margin-left: 185px;\r\n}\r\n\r\n.m-l-186 {\r\n  margin-left: 186px;\r\n}\r\n\r\n.m-l-187 {\r\n  margin-left: 187px;\r\n}\r\n\r\n.m-l-188 {\r\n  margin-left: 188px;\r\n}\r\n\r\n.m-l-189 {\r\n  margin-left: 189px;\r\n}\r\n\r\n.m-l-190 {\r\n  margin-left: 190px;\r\n}\r\n\r\n.m-l-191 {\r\n  margin-left: 191px;\r\n}\r\n\r\n.m-l-192 {\r\n  margin-left: 192px;\r\n}\r\n\r\n.m-l-193 {\r\n  margin-left: 193px;\r\n}\r\n\r\n.m-l-194 {\r\n  margin-left: 194px;\r\n}\r\n\r\n.m-l-195 {\r\n  margin-left: 195px;\r\n}\r\n\r\n.m-l-196 {\r\n  margin-left: 196px;\r\n}\r\n\r\n.m-l-197 {\r\n  margin-left: 197px;\r\n}\r\n\r\n.m-l-198 {\r\n  margin-left: 198px;\r\n}\r\n\r\n.m-l-199 {\r\n  margin-left: 199px;\r\n}\r\n\r\n.m-l-200 {\r\n  margin-left: 200px;\r\n}\r\n\r\n.m-l-201 {\r\n  margin-left: 201px;\r\n}\r\n\r\n.m-l-202 {\r\n  margin-left: 202px;\r\n}\r\n\r\n.m-l-203 {\r\n  margin-left: 203px;\r\n}\r\n\r\n.m-l-204 {\r\n  margin-left: 204px;\r\n}\r\n\r\n.m-l-205 {\r\n  margin-left: 205px;\r\n}\r\n\r\n.m-l-206 {\r\n  margin-left: 206px;\r\n}\r\n\r\n.m-l-207 {\r\n  margin-left: 207px;\r\n}\r\n\r\n.m-l-208 {\r\n  margin-left: 208px;\r\n}\r\n\r\n.m-l-209 {\r\n  margin-left: 209px;\r\n}\r\n\r\n.m-l-210 {\r\n  margin-left: 210px;\r\n}\r\n\r\n.m-l-211 {\r\n  margin-left: 211px;\r\n}\r\n\r\n.m-l-212 {\r\n  margin-left: 212px;\r\n}\r\n\r\n.m-l-213 {\r\n  margin-left: 213px;\r\n}\r\n\r\n.m-l-214 {\r\n  margin-left: 214px;\r\n}\r\n\r\n.m-l-215 {\r\n  margin-left: 215px;\r\n}\r\n\r\n.m-l-216 {\r\n  margin-left: 216px;\r\n}\r\n\r\n.m-l-217 {\r\n  margin-left: 217px;\r\n}\r\n\r\n.m-l-218 {\r\n  margin-left: 218px;\r\n}\r\n\r\n.m-l-219 {\r\n  margin-left: 219px;\r\n}\r\n\r\n.m-l-220 {\r\n  margin-left: 220px;\r\n}\r\n\r\n.m-l-221 {\r\n  margin-left: 221px;\r\n}\r\n\r\n.m-l-222 {\r\n  margin-left: 222px;\r\n}\r\n\r\n.m-l-223 {\r\n  margin-left: 223px;\r\n}\r\n\r\n.m-l-224 {\r\n  margin-left: 224px;\r\n}\r\n\r\n.m-l-225 {\r\n  margin-left: 225px;\r\n}\r\n\r\n.m-l-226 {\r\n  margin-left: 226px;\r\n}\r\n\r\n.m-l-227 {\r\n  margin-left: 227px;\r\n}\r\n\r\n.m-l-228 {\r\n  margin-left: 228px;\r\n}\r\n\r\n.m-l-229 {\r\n  margin-left: 229px;\r\n}\r\n\r\n.m-l-230 {\r\n  margin-left: 230px;\r\n}\r\n\r\n.m-l-231 {\r\n  margin-left: 231px;\r\n}\r\n\r\n.m-l-232 {\r\n  margin-left: 232px;\r\n}\r\n\r\n.m-l-233 {\r\n  margin-left: 233px;\r\n}\r\n\r\n.m-l-234 {\r\n  margin-left: 234px;\r\n}\r\n\r\n.m-l-235 {\r\n  margin-left: 235px;\r\n}\r\n\r\n.m-l-236 {\r\n  margin-left: 236px;\r\n}\r\n\r\n.m-l-237 {\r\n  margin-left: 237px;\r\n}\r\n\r\n.m-l-238 {\r\n  margin-left: 238px;\r\n}\r\n\r\n.m-l-239 {\r\n  margin-left: 239px;\r\n}\r\n\r\n.m-l-240 {\r\n  margin-left: 240px;\r\n}\r\n\r\n.m-l-241 {\r\n  margin-left: 241px;\r\n}\r\n\r\n.m-l-242 {\r\n  margin-left: 242px;\r\n}\r\n\r\n.m-l-243 {\r\n  margin-left: 243px;\r\n}\r\n\r\n.m-l-244 {\r\n  margin-left: 244px;\r\n}\r\n\r\n.m-l-245 {\r\n  margin-left: 245px;\r\n}\r\n\r\n.m-l-246 {\r\n  margin-left: 246px;\r\n}\r\n\r\n.m-l-247 {\r\n  margin-left: 247px;\r\n}\r\n\r\n.m-l-248 {\r\n  margin-left: 248px;\r\n}\r\n\r\n.m-l-249 {\r\n  margin-left: 249px;\r\n}\r\n\r\n.m-l-250 {\r\n  margin-left: 250px;\r\n}\r\n\r\n.m-r-0 {\r\n  margin-right: 0px;\r\n}\r\n\r\n.m-r-1 {\r\n  margin-right: 1px;\r\n}\r\n\r\n.m-r-2 {\r\n  margin-right: 2px;\r\n}\r\n\r\n.m-r-3 {\r\n  margin-right: 3px;\r\n}\r\n\r\n.m-r-4 {\r\n  margin-right: 4px;\r\n}\r\n\r\n.m-r-5 {\r\n  margin-right: 5px;\r\n}\r\n\r\n.m-r-6 {\r\n  margin-right: 6px;\r\n}\r\n\r\n.m-r-7 {\r\n  margin-right: 7px;\r\n}\r\n\r\n.m-r-8 {\r\n  margin-right: 8px;\r\n}\r\n\r\n.m-r-9 {\r\n  margin-right: 9px;\r\n}\r\n\r\n.m-r-10 {\r\n  margin-right: 10px;\r\n}\r\n\r\n.m-r-11 {\r\n  margin-right: 11px;\r\n}\r\n\r\n.m-r-12 {\r\n  margin-right: 12px;\r\n}\r\n\r\n.m-r-13 {\r\n  margin-right: 13px;\r\n}\r\n\r\n.m-r-14 {\r\n  margin-right: 14px;\r\n}\r\n\r\n.m-r-15 {\r\n  margin-right: 15px;\r\n}\r\n\r\n.m-r-16 {\r\n  margin-right: 16px;\r\n}\r\n\r\n.m-r-17 {\r\n  margin-right: 17px;\r\n}\r\n\r\n.m-r-18 {\r\n  margin-right: 18px;\r\n}\r\n\r\n.m-r-19 {\r\n  margin-right: 19px;\r\n}\r\n\r\n.m-r-20 {\r\n  margin-right: 20px;\r\n}\r\n\r\n.m-r-21 {\r\n  margin-right: 21px;\r\n}\r\n\r\n.m-r-22 {\r\n  margin-right: 22px;\r\n}\r\n\r\n.m-r-23 {\r\n  margin-right: 23px;\r\n}\r\n\r\n.m-r-24 {\r\n  margin-right: 24px;\r\n}\r\n\r\n.m-r-25 {\r\n  margin-right: 25px;\r\n}\r\n\r\n.m-r-26 {\r\n  margin-right: 26px;\r\n}\r\n\r\n.m-r-27 {\r\n  margin-right: 27px;\r\n}\r\n\r\n.m-r-28 {\r\n  margin-right: 28px;\r\n}\r\n\r\n.m-r-29 {\r\n  margin-right: 29px;\r\n}\r\n\r\n.m-r-30 {\r\n  margin-right: 30px;\r\n}\r\n\r\n.m-r-31 {\r\n  margin-right: 31px;\r\n}\r\n\r\n.m-r-32 {\r\n  margin-right: 32px;\r\n}\r\n\r\n.m-r-33 {\r\n  margin-right: 33px;\r\n}\r\n\r\n.m-r-34 {\r\n  margin-right: 34px;\r\n}\r\n\r\n.m-r-35 {\r\n  margin-right: 35px;\r\n}\r\n\r\n.m-r-36 {\r\n  margin-right: 36px;\r\n}\r\n\r\n.m-r-37 {\r\n  margin-right: 37px;\r\n}\r\n\r\n.m-r-38 {\r\n  margin-right: 38px;\r\n}\r\n\r\n.m-r-39 {\r\n  margin-right: 39px;\r\n}\r\n\r\n.m-r-40 {\r\n  margin-right: 40px;\r\n}\r\n\r\n.m-r-41 {\r\n  margin-right: 41px;\r\n}\r\n\r\n.m-r-42 {\r\n  margin-right: 42px;\r\n}\r\n\r\n.m-r-43 {\r\n  margin-right: 43px;\r\n}\r\n\r\n.m-r-44 {\r\n  margin-right: 44px;\r\n}\r\n\r\n.m-r-45 {\r\n  margin-right: 45px;\r\n}\r\n\r\n.m-r-46 {\r\n  margin-right: 46px;\r\n}\r\n\r\n.m-r-47 {\r\n  margin-right: 47px;\r\n}\r\n\r\n.m-r-48 {\r\n  margin-right: 48px;\r\n}\r\n\r\n.m-r-49 {\r\n  margin-right: 49px;\r\n}\r\n\r\n.m-r-50 {\r\n  margin-right: 50px;\r\n}\r\n\r\n.m-r-51 {\r\n  margin-right: 51px;\r\n}\r\n\r\n.m-r-52 {\r\n  margin-right: 52px;\r\n}\r\n\r\n.m-r-53 {\r\n  margin-right: 53px;\r\n}\r\n\r\n.m-r-54 {\r\n  margin-right: 54px;\r\n}\r\n\r\n.m-r-55 {\r\n  margin-right: 55px;\r\n}\r\n\r\n.m-r-56 {\r\n  margin-right: 56px;\r\n}\r\n\r\n.m-r-57 {\r\n  margin-right: 57px;\r\n}\r\n\r\n.m-r-58 {\r\n  margin-right: 58px;\r\n}\r\n\r\n.m-r-59 {\r\n  margin-right: 59px;\r\n}\r\n\r\n.m-r-60 {\r\n  margin-right: 60px;\r\n}\r\n\r\n.m-r-61 {\r\n  margin-right: 61px;\r\n}\r\n\r\n.m-r-62 {\r\n  margin-right: 62px;\r\n}\r\n\r\n.m-r-63 {\r\n  margin-right: 63px;\r\n}\r\n\r\n.m-r-64 {\r\n  margin-right: 64px;\r\n}\r\n\r\n.m-r-65 {\r\n  margin-right: 65px;\r\n}\r\n\r\n.m-r-66 {\r\n  margin-right: 66px;\r\n}\r\n\r\n.m-r-67 {\r\n  margin-right: 67px;\r\n}\r\n\r\n.m-r-68 {\r\n  margin-right: 68px;\r\n}\r\n\r\n.m-r-69 {\r\n  margin-right: 69px;\r\n}\r\n\r\n.m-r-70 {\r\n  margin-right: 70px;\r\n}\r\n\r\n.m-r-71 {\r\n  margin-right: 71px;\r\n}\r\n\r\n.m-r-72 {\r\n  margin-right: 72px;\r\n}\r\n\r\n.m-r-73 {\r\n  margin-right: 73px;\r\n}\r\n\r\n.m-r-74 {\r\n  margin-right: 74px;\r\n}\r\n\r\n.m-r-75 {\r\n  margin-right: 75px;\r\n}\r\n\r\n.m-r-76 {\r\n  margin-right: 76px;\r\n}\r\n\r\n.m-r-77 {\r\n  margin-right: 77px;\r\n}\r\n\r\n.m-r-78 {\r\n  margin-right: 78px;\r\n}\r\n\r\n.m-r-79 {\r\n  margin-right: 79px;\r\n}\r\n\r\n.m-r-80 {\r\n  margin-right: 80px;\r\n}\r\n\r\n.m-r-81 {\r\n  margin-right: 81px;\r\n}\r\n\r\n.m-r-82 {\r\n  margin-right: 82px;\r\n}\r\n\r\n.m-r-83 {\r\n  margin-right: 83px;\r\n}\r\n\r\n.m-r-84 {\r\n  margin-right: 84px;\r\n}\r\n\r\n.m-r-85 {\r\n  margin-right: 85px;\r\n}\r\n\r\n.m-r-86 {\r\n  margin-right: 86px;\r\n}\r\n\r\n.m-r-87 {\r\n  margin-right: 87px;\r\n}\r\n\r\n.m-r-88 {\r\n  margin-right: 88px;\r\n}\r\n\r\n.m-r-89 {\r\n  margin-right: 89px;\r\n}\r\n\r\n.m-r-90 {\r\n  margin-right: 90px;\r\n}\r\n\r\n.m-r-91 {\r\n  margin-right: 91px;\r\n}\r\n\r\n.m-r-92 {\r\n  margin-right: 92px;\r\n}\r\n\r\n.m-r-93 {\r\n  margin-right: 93px;\r\n}\r\n\r\n.m-r-94 {\r\n  margin-right: 94px;\r\n}\r\n\r\n.m-r-95 {\r\n  margin-right: 95px;\r\n}\r\n\r\n.m-r-96 {\r\n  margin-right: 96px;\r\n}\r\n\r\n.m-r-97 {\r\n  margin-right: 97px;\r\n}\r\n\r\n.m-r-98 {\r\n  margin-right: 98px;\r\n}\r\n\r\n.m-r-99 {\r\n  margin-right: 99px;\r\n}\r\n\r\n.m-r-100 {\r\n  margin-right: 100px;\r\n}\r\n\r\n.m-r-101 {\r\n  margin-right: 101px;\r\n}\r\n\r\n.m-r-102 {\r\n  margin-right: 102px;\r\n}\r\n\r\n.m-r-103 {\r\n  margin-right: 103px;\r\n}\r\n\r\n.m-r-104 {\r\n  margin-right: 104px;\r\n}\r\n\r\n.m-r-105 {\r\n  margin-right: 105px;\r\n}\r\n\r\n.m-r-106 {\r\n  margin-right: 106px;\r\n}\r\n\r\n.m-r-107 {\r\n  margin-right: 107px;\r\n}\r\n\r\n.m-r-108 {\r\n  margin-right: 108px;\r\n}\r\n\r\n.m-r-109 {\r\n  margin-right: 109px;\r\n}\r\n\r\n.m-r-110 {\r\n  margin-right: 110px;\r\n}\r\n\r\n.m-r-111 {\r\n  margin-right: 111px;\r\n}\r\n\r\n.m-r-112 {\r\n  margin-right: 112px;\r\n}\r\n\r\n.m-r-113 {\r\n  margin-right: 113px;\r\n}\r\n\r\n.m-r-114 {\r\n  margin-right: 114px;\r\n}\r\n\r\n.m-r-115 {\r\n  margin-right: 115px;\r\n}\r\n\r\n.m-r-116 {\r\n  margin-right: 116px;\r\n}\r\n\r\n.m-r-117 {\r\n  margin-right: 117px;\r\n}\r\n\r\n.m-r-118 {\r\n  margin-right: 118px;\r\n}\r\n\r\n.m-r-119 {\r\n  margin-right: 119px;\r\n}\r\n\r\n.m-r-120 {\r\n  margin-right: 120px;\r\n}\r\n\r\n.m-r-121 {\r\n  margin-right: 121px;\r\n}\r\n\r\n.m-r-122 {\r\n  margin-right: 122px;\r\n}\r\n\r\n.m-r-123 {\r\n  margin-right: 123px;\r\n}\r\n\r\n.m-r-124 {\r\n  margin-right: 124px;\r\n}\r\n\r\n.m-r-125 {\r\n  margin-right: 125px;\r\n}\r\n\r\n.m-r-126 {\r\n  margin-right: 126px;\r\n}\r\n\r\n.m-r-127 {\r\n  margin-right: 127px;\r\n}\r\n\r\n.m-r-128 {\r\n  margin-right: 128px;\r\n}\r\n\r\n.m-r-129 {\r\n  margin-right: 129px;\r\n}\r\n\r\n.m-r-130 {\r\n  margin-right: 130px;\r\n}\r\n\r\n.m-r-131 {\r\n  margin-right: 131px;\r\n}\r\n\r\n.m-r-132 {\r\n  margin-right: 132px;\r\n}\r\n\r\n.m-r-133 {\r\n  margin-right: 133px;\r\n}\r\n\r\n.m-r-134 {\r\n  margin-right: 134px;\r\n}\r\n\r\n.m-r-135 {\r\n  margin-right: 135px;\r\n}\r\n\r\n.m-r-136 {\r\n  margin-right: 136px;\r\n}\r\n\r\n.m-r-137 {\r\n  margin-right: 137px;\r\n}\r\n\r\n.m-r-138 {\r\n  margin-right: 138px;\r\n}\r\n\r\n.m-r-139 {\r\n  margin-right: 139px;\r\n}\r\n\r\n.m-r-140 {\r\n  margin-right: 140px;\r\n}\r\n\r\n.m-r-141 {\r\n  margin-right: 141px;\r\n}\r\n\r\n.m-r-142 {\r\n  margin-right: 142px;\r\n}\r\n\r\n.m-r-143 {\r\n  margin-right: 143px;\r\n}\r\n\r\n.m-r-144 {\r\n  margin-right: 144px;\r\n}\r\n\r\n.m-r-145 {\r\n  margin-right: 145px;\r\n}\r\n\r\n.m-r-146 {\r\n  margin-right: 146px;\r\n}\r\n\r\n.m-r-147 {\r\n  margin-right: 147px;\r\n}\r\n\r\n.m-r-148 {\r\n  margin-right: 148px;\r\n}\r\n\r\n.m-r-149 {\r\n  margin-right: 149px;\r\n}\r\n\r\n.m-r-150 {\r\n  margin-right: 150px;\r\n}\r\n\r\n.m-r-151 {\r\n  margin-right: 151px;\r\n}\r\n\r\n.m-r-152 {\r\n  margin-right: 152px;\r\n}\r\n\r\n.m-r-153 {\r\n  margin-right: 153px;\r\n}\r\n\r\n.m-r-154 {\r\n  margin-right: 154px;\r\n}\r\n\r\n.m-r-155 {\r\n  margin-right: 155px;\r\n}\r\n\r\n.m-r-156 {\r\n  margin-right: 156px;\r\n}\r\n\r\n.m-r-157 {\r\n  margin-right: 157px;\r\n}\r\n\r\n.m-r-158 {\r\n  margin-right: 158px;\r\n}\r\n\r\n.m-r-159 {\r\n  margin-right: 159px;\r\n}\r\n\r\n.m-r-160 {\r\n  margin-right: 160px;\r\n}\r\n\r\n.m-r-161 {\r\n  margin-right: 161px;\r\n}\r\n\r\n.m-r-162 {\r\n  margin-right: 162px;\r\n}\r\n\r\n.m-r-163 {\r\n  margin-right: 163px;\r\n}\r\n\r\n.m-r-164 {\r\n  margin-right: 164px;\r\n}\r\n\r\n.m-r-165 {\r\n  margin-right: 165px;\r\n}\r\n\r\n.m-r-166 {\r\n  margin-right: 166px;\r\n}\r\n\r\n.m-r-167 {\r\n  margin-right: 167px;\r\n}\r\n\r\n.m-r-168 {\r\n  margin-right: 168px;\r\n}\r\n\r\n.m-r-169 {\r\n  margin-right: 169px;\r\n}\r\n\r\n.m-r-170 {\r\n  margin-right: 170px;\r\n}\r\n\r\n.m-r-171 {\r\n  margin-right: 171px;\r\n}\r\n\r\n.m-r-172 {\r\n  margin-right: 172px;\r\n}\r\n\r\n.m-r-173 {\r\n  margin-right: 173px;\r\n}\r\n\r\n.m-r-174 {\r\n  margin-right: 174px;\r\n}\r\n\r\n.m-r-175 {\r\n  margin-right: 175px;\r\n}\r\n\r\n.m-r-176 {\r\n  margin-right: 176px;\r\n}\r\n\r\n.m-r-177 {\r\n  margin-right: 177px;\r\n}\r\n\r\n.m-r-178 {\r\n  margin-right: 178px;\r\n}\r\n\r\n.m-r-179 {\r\n  margin-right: 179px;\r\n}\r\n\r\n.m-r-180 {\r\n  margin-right: 180px;\r\n}\r\n\r\n.m-r-181 {\r\n  margin-right: 181px;\r\n}\r\n\r\n.m-r-182 {\r\n  margin-right: 182px;\r\n}\r\n\r\n.m-r-183 {\r\n  margin-right: 183px;\r\n}\r\n\r\n.m-r-184 {\r\n  margin-right: 184px;\r\n}\r\n\r\n.m-r-185 {\r\n  margin-right: 185px;\r\n}\r\n\r\n.m-r-186 {\r\n  margin-right: 186px;\r\n}\r\n\r\n.m-r-187 {\r\n  margin-right: 187px;\r\n}\r\n\r\n.m-r-188 {\r\n  margin-right: 188px;\r\n}\r\n\r\n.m-r-189 {\r\n  margin-right: 189px;\r\n}\r\n\r\n.m-r-190 {\r\n  margin-right: 190px;\r\n}\r\n\r\n.m-r-191 {\r\n  margin-right: 191px;\r\n}\r\n\r\n.m-r-192 {\r\n  margin-right: 192px;\r\n}\r\n\r\n.m-r-193 {\r\n  margin-right: 193px;\r\n}\r\n\r\n.m-r-194 {\r\n  margin-right: 194px;\r\n}\r\n\r\n.m-r-195 {\r\n  margin-right: 195px;\r\n}\r\n\r\n.m-r-196 {\r\n  margin-right: 196px;\r\n}\r\n\r\n.m-r-197 {\r\n  margin-right: 197px;\r\n}\r\n\r\n.m-r-198 {\r\n  margin-right: 198px;\r\n}\r\n\r\n.m-r-199 {\r\n  margin-right: 199px;\r\n}\r\n\r\n.m-r-200 {\r\n  margin-right: 200px;\r\n}\r\n\r\n.m-r-201 {\r\n  margin-right: 201px;\r\n}\r\n\r\n.m-r-202 {\r\n  margin-right: 202px;\r\n}\r\n\r\n.m-r-203 {\r\n  margin-right: 203px;\r\n}\r\n\r\n.m-r-204 {\r\n  margin-right: 204px;\r\n}\r\n\r\n.m-r-205 {\r\n  margin-right: 205px;\r\n}\r\n\r\n.m-r-206 {\r\n  margin-right: 206px;\r\n}\r\n\r\n.m-r-207 {\r\n  margin-right: 207px;\r\n}\r\n\r\n.m-r-208 {\r\n  margin-right: 208px;\r\n}\r\n\r\n.m-r-209 {\r\n  margin-right: 209px;\r\n}\r\n\r\n.m-r-210 {\r\n  margin-right: 210px;\r\n}\r\n\r\n.m-r-211 {\r\n  margin-right: 211px;\r\n}\r\n\r\n.m-r-212 {\r\n  margin-right: 212px;\r\n}\r\n\r\n.m-r-213 {\r\n  margin-right: 213px;\r\n}\r\n\r\n.m-r-214 {\r\n  margin-right: 214px;\r\n}\r\n\r\n.m-r-215 {\r\n  margin-right: 215px;\r\n}\r\n\r\n.m-r-216 {\r\n  margin-right: 216px;\r\n}\r\n\r\n.m-r-217 {\r\n  margin-right: 217px;\r\n}\r\n\r\n.m-r-218 {\r\n  margin-right: 218px;\r\n}\r\n\r\n.m-r-219 {\r\n  margin-right: 219px;\r\n}\r\n\r\n.m-r-220 {\r\n  margin-right: 220px;\r\n}\r\n\r\n.m-r-221 {\r\n  margin-right: 221px;\r\n}\r\n\r\n.m-r-222 {\r\n  margin-right: 222px;\r\n}\r\n\r\n.m-r-223 {\r\n  margin-right: 223px;\r\n}\r\n\r\n.m-r-224 {\r\n  margin-right: 224px;\r\n}\r\n\r\n.m-r-225 {\r\n  margin-right: 225px;\r\n}\r\n\r\n.m-r-226 {\r\n  margin-right: 226px;\r\n}\r\n\r\n.m-r-227 {\r\n  margin-right: 227px;\r\n}\r\n\r\n.m-r-228 {\r\n  margin-right: 228px;\r\n}\r\n\r\n.m-r-229 {\r\n  margin-right: 229px;\r\n}\r\n\r\n.m-r-230 {\r\n  margin-right: 230px;\r\n}\r\n\r\n.m-r-231 {\r\n  margin-right: 231px;\r\n}\r\n\r\n.m-r-232 {\r\n  margin-right: 232px;\r\n}\r\n\r\n.m-r-233 {\r\n  margin-right: 233px;\r\n}\r\n\r\n.m-r-234 {\r\n  margin-right: 234px;\r\n}\r\n\r\n.m-r-235 {\r\n  margin-right: 235px;\r\n}\r\n\r\n.m-r-236 {\r\n  margin-right: 236px;\r\n}\r\n\r\n.m-r-237 {\r\n  margin-right: 237px;\r\n}\r\n\r\n.m-r-238 {\r\n  margin-right: 238px;\r\n}\r\n\r\n.m-r-239 {\r\n  margin-right: 239px;\r\n}\r\n\r\n.m-r-240 {\r\n  margin-right: 240px;\r\n}\r\n\r\n.m-r-241 {\r\n  margin-right: 241px;\r\n}\r\n\r\n.m-r-242 {\r\n  margin-right: 242px;\r\n}\r\n\r\n.m-r-243 {\r\n  margin-right: 243px;\r\n}\r\n\r\n.m-r-244 {\r\n  margin-right: 244px;\r\n}\r\n\r\n.m-r-245 {\r\n  margin-right: 245px;\r\n}\r\n\r\n.m-r-246 {\r\n  margin-right: 246px;\r\n}\r\n\r\n.m-r-247 {\r\n  margin-right: 247px;\r\n}\r\n\r\n.m-r-248 {\r\n  margin-right: 248px;\r\n}\r\n\r\n.m-r-249 {\r\n  margin-right: 249px;\r\n}\r\n\r\n.m-r-250 {\r\n  margin-right: 250px;\r\n}\r\n\r\n.m-l-r-auto {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.m-l-auto {\r\n  margin-left: auto;\r\n}\r\n\r\n.m-r-auto {\r\n  margin-right: auto;\r\n}\r\n\r\n/*[ TEXT ]\r\n///////////////////////////////////////////////////////////\r\n*/\r\n\r\n/* ------------------------------------ */\r\n\r\n.text-white {\r\n  color: white;\r\n}\r\n\r\n.text-black {\r\n  color: black;\r\n}\r\n\r\n.text-hov-white:hover {\r\n  color: white;\r\n}\r\n\r\n/* ------------------------------------ */\r\n\r\n.text-up {\r\n  text-transform: uppercase;\r\n}\r\n\r\n/* ------------------------------------ */\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n.text-left {\r\n  text-align: left;\r\n}\r\n\r\n.text-right {\r\n  text-align: right;\r\n}\r\n\r\n.text-middle {\r\n  vertical-align: middle;\r\n}\r\n\r\n/* ------------------------------------ */\r\n\r\n.lh-1-0 {\r\n  line-height: 1;\r\n}\r\n\r\n.lh-1-1 {\r\n  line-height: 1.1;\r\n}\r\n\r\n.lh-1-2 {\r\n  line-height: 1.2;\r\n}\r\n\r\n.lh-1-3 {\r\n  line-height: 1.3;\r\n}\r\n\r\n.lh-1-4 {\r\n  line-height: 1.4;\r\n}\r\n\r\n.lh-1-5 {\r\n  line-height: 1.5;\r\n}\r\n\r\n.lh-1-6 {\r\n  line-height: 1.6;\r\n}\r\n\r\n.lh-1-7 {\r\n  line-height: 1.7;\r\n}\r\n\r\n.lh-1-8 {\r\n  line-height: 1.8;\r\n}\r\n\r\n.lh-1-9 {\r\n  line-height: 1.9;\r\n}\r\n\r\n.lh-2-0 {\r\n  line-height: 2;\r\n}\r\n\r\n.lh-2-1 {\r\n  line-height: 2.1;\r\n}\r\n\r\n.lh-2-2 {\r\n  line-height: 2.2;\r\n}\r\n\r\n.lh-2-3 {\r\n  line-height: 2.3;\r\n}\r\n\r\n.lh-2-4 {\r\n  line-height: 2.4;\r\n}\r\n\r\n.lh-2-5 {\r\n  line-height: 2.5;\r\n}\r\n\r\n.lh-2-6 {\r\n  line-height: 2.6;\r\n}\r\n\r\n.lh-2-7 {\r\n  line-height: 2.7;\r\n}\r\n\r\n.lh-2-8 {\r\n  line-height: 2.8;\r\n}\r\n\r\n.lh-2-9 {\r\n  line-height: 2.9;\r\n}\r\n\r\n/*[ SHAPE ]\r\n///////////////////////////////////////////////////////////\r\n*/\r\n\r\n/*[ Display ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n.dis-none {\r\n  display: none;\r\n}\r\n\r\n.dis-block {\r\n  display: block;\r\n}\r\n\r\n.dis-inline {\r\n  display: inline;\r\n}\r\n\r\n.dis-inline-block {\r\n  display: inline-block;\r\n}\r\n\r\n.dis-flex {\r\n  display: flex;\r\n}\r\n\r\n/*[ Position ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n.pos-relative {\r\n  position: relative;\r\n}\r\n\r\n.pos-absolute {\r\n  position: absolute;\r\n}\r\n\r\n.pos-fixed {\r\n  position: fixed;\r\n}\r\n\r\n/*[ float ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n.float-l {\r\n  float: left;\r\n}\r\n\r\n.float-r {\r\n  float: right;\r\n}\r\n\r\n/*[ Width & Height ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n.sizefull {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.w-full {\r\n  width: 100%;\r\n}\r\n\r\n.h-full {\r\n  height: 100%;\r\n}\r\n\r\n.max-w-full {\r\n  max-width: 100%;\r\n}\r\n\r\n.max-h-full {\r\n  max-height: 100%;\r\n}\r\n\r\n.min-w-full {\r\n  min-width: 100%;\r\n}\r\n\r\n.min-h-full {\r\n  min-height: 100%;\r\n}\r\n\r\n/*[ Top Bottom Left Right ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n.top-0 {\r\n  top: 0;\r\n}\r\n\r\n.bottom-0 {\r\n  bottom: 0;\r\n}\r\n\r\n.left-0 {\r\n  left: 0;\r\n}\r\n\r\n.right-0 {\r\n  right: 0;\r\n}\r\n\r\n.top-auto {\r\n  top: auto;\r\n}\r\n\r\n.bottom-auto {\r\n  bottom: auto;\r\n}\r\n\r\n.left-auto {\r\n  left: auto;\r\n}\r\n\r\n.right-auto {\r\n  right: auto;\r\n}\r\n\r\n/*[ Opacity ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n.op-0-0 {\r\n  opacity: 0;\r\n}\r\n\r\n.op-0-1 {\r\n  opacity: 0.1;\r\n}\r\n\r\n.op-0-2 {\r\n  opacity: 0.2;\r\n}\r\n\r\n.op-0-3 {\r\n  opacity: 0.3;\r\n}\r\n\r\n.op-0-4 {\r\n  opacity: 0.4;\r\n}\r\n\r\n.op-0-5 {\r\n  opacity: 0.5;\r\n}\r\n\r\n.op-0-6 {\r\n  opacity: 0.6;\r\n}\r\n\r\n.op-0-7 {\r\n  opacity: 0.7;\r\n}\r\n\r\n.op-0-8 {\r\n  opacity: 0.8;\r\n}\r\n\r\n.op-0-9 {\r\n  opacity: 0.9;\r\n}\r\n\r\n.op-1-0 {\r\n  opacity: 1;\r\n}\r\n\r\n/*[ Background ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n.bgwhite {\r\n  background-color: white;\r\n}\r\n\r\n.bgblack {\r\n  background-color: black;\r\n}\r\n\r\n/*[ Wrap Picture ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n.wrap-pic-w img {\r\n  width: 100%;\r\n}\r\n\r\n.wrap-pic-max-w img {\r\n  max-width: 100%;\r\n}\r\n\r\n/* ------------------------------------ */\r\n\r\n.wrap-pic-h img {\r\n  height: 100%;\r\n}\r\n\r\n.wrap-pic-max-h img {\r\n  max-height: 100%;\r\n}\r\n\r\n/* ------------------------------------ */\r\n\r\n.wrap-pic-cir {\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n}\r\n\r\n.wrap-pic-cir img {\r\n  width: 100%;\r\n}\r\n\r\n/*[ Hover ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n.hov-pointer:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n/* ------------------------------------ */\r\n\r\n.hov-img-zoom {\r\n  display: block;\r\n  overflow: hidden;\r\n}\r\n\r\n.hov-img-zoom img {\r\n  width: 100%;\r\n  transition: all 0.6s;\r\n}\r\n\r\n.hov-img-zoom:hover img {\r\n  -webkit-transform: scale(1.1);\r\n  transform: scale(1.1);\r\n}\r\n\r\n/*[  ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n.bo-cir {\r\n  border-radius: 50%;\r\n}\r\n\r\n.of-hidden {\r\n  overflow: hidden;\r\n}\r\n\r\n.visible-false {\r\n  visibility: hidden;\r\n}\r\n\r\n.visible-true {\r\n  visibility: visible;\r\n}\r\n\r\n/*[ Transition ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n.trans-0-1 {\r\n  transition: all 0.1s;\r\n}\r\n\r\n.trans-0-2 {\r\n  transition: all 0.2s;\r\n}\r\n\r\n.trans-0-3 {\r\n  transition: all 0.3s;\r\n}\r\n\r\n.trans-0-4 {\r\n  transition: all 0.4s;\r\n}\r\n\r\n.trans-0-5 {\r\n  transition: all 0.5s;\r\n}\r\n\r\n.trans-0-6 {\r\n  transition: all 0.6s;\r\n}\r\n\r\n.trans-0-9 {\r\n  transition: all 0.9s;\r\n}\r\n\r\n.trans-1-0 {\r\n  transition: all 1s;\r\n}\r\n\r\n/*[ Layout ]\r\n///////////////////////////////////////////////////////////\r\n*/\r\n\r\n/*[ Flex ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n/* ------------------------------------ */\r\n\r\n.flex-w {\r\n  display: flex;\r\n  -o-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n/* ------------------------------------ */\r\n\r\n.flex-l {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.flex-r {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.flex-c {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.flex-sa {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.flex-sb {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n/* ------------------------------------ */\r\n\r\n.flex-t {\r\n  display: flex;\r\n  -ms-align-items: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n.flex-b {\r\n  display: flex;\r\n  -ms-align-items: flex-end;\r\n  align-items: flex-end;\r\n}\r\n\r\n.flex-m {\r\n  display: flex;\r\n  -ms-align-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.flex-str {\r\n  display: flex;\r\n  -ms-align-items: stretch;\r\n  align-items: stretch;\r\n}\r\n\r\n/* ------------------------------------ */\r\n\r\n.flex-row {\r\n  display: flex;\r\n  -moz-flex-direction: row;\r\n  -o-flex-direction: row;\r\n  flex-direction: row;\r\n}\r\n\r\n.flex-row-rev {\r\n  display: flex;\r\n  -moz-flex-direction: row-reverse;\r\n  -o-flex-direction: row-reverse;\r\n  flex-direction: row-reverse;\r\n}\r\n\r\n.flex-col {\r\n  display: flex;\r\n  -moz-flex-direction: column;\r\n  -o-flex-direction: column;\r\n  flex-direction: column;\r\n}\r\n\r\n.flex-col-rev {\r\n  display: flex;\r\n  -moz-flex-direction: column-reverse;\r\n  -o-flex-direction: column-reverse;\r\n  flex-direction: column-reverse;\r\n}\r\n\r\n/* ------------------------------------ */\r\n\r\n.flex-c-m {\r\n  display: flex;\r\n  justify-content: center;\r\n  -ms-align-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.flex-c-t {\r\n  display: flex;\r\n  justify-content: center;\r\n  -ms-align-items: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n.flex-c-b {\r\n  display: flex;\r\n  justify-content: center;\r\n  -ms-align-items: flex-end;\r\n  align-items: flex-end;\r\n}\r\n\r\n.flex-c-str {\r\n  display: flex;\r\n  justify-content: center;\r\n  -ms-align-items: stretch;\r\n  align-items: stretch;\r\n}\r\n\r\n.flex-l-m {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  -ms-align-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.flex-r-m {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  -ms-align-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.flex-sa-m {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  -ms-align-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.flex-sb-m {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  -ms-align-items: center;\r\n  align-items: center;\r\n}\r\n\r\n/* ------------------------------------ */\r\n\r\n.flex-col-l {\r\n  display: flex;\r\n  -moz-flex-direction: column;\r\n  -o-flex-direction: column;\r\n  flex-direction: column;\r\n  -ms-align-items: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n.flex-col-r {\r\n  display: flex;\r\n  -moz-flex-direction: column;\r\n  -o-flex-direction: column;\r\n  flex-direction: column;\r\n  -ms-align-items: flex-end;\r\n  align-items: flex-end;\r\n}\r\n\r\n.flex-col-c {\r\n  display: flex;\r\n  -moz-flex-direction: column;\r\n  -o-flex-direction: column;\r\n  flex-direction: column;\r\n  -ms-align-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.flex-col-l-m {\r\n  display: flex;\r\n  -moz-flex-direction: column;\r\n  -o-flex-direction: column;\r\n  flex-direction: column;\r\n  -ms-align-items: flex-start;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n}\r\n\r\n.flex-col-r-m {\r\n  display: flex;\r\n  -moz-flex-direction: column;\r\n  -o-flex-direction: column;\r\n  flex-direction: column;\r\n  -ms-align-items: flex-end;\r\n  align-items: flex-end;\r\n  justify-content: center;\r\n}\r\n\r\n.flex-col-c-m {\r\n  display: flex;\r\n  -moz-flex-direction: column;\r\n  -o-flex-direction: column;\r\n  flex-direction: column;\r\n  -ms-align-items: center;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.flex-col-str {\r\n  display: flex;\r\n  -moz-flex-direction: column;\r\n  -o-flex-direction: column;\r\n  flex-direction: column;\r\n  -ms-align-items: stretch;\r\n  align-items: stretch;\r\n}\r\n\r\n.flex-col-sb {\r\n  display: flex;\r\n  -moz-flex-direction: column;\r\n  -o-flex-direction: column;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n\r\n/* ------------------------------------ */\r\n\r\n.flex-col-rev-l {\r\n  display: flex;\r\n  -moz-flex-direction: column-reverse;\r\n  -o-flex-direction: column-reverse;\r\n  flex-direction: column-reverse;\r\n  -ms-align-items: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n.flex-col-rev-r {\r\n  display: flex;\r\n  -moz-flex-direction: column-reverse;\r\n  -o-flex-direction: column-reverse;\r\n  flex-direction: column-reverse;\r\n  -ms-align-items: flex-end;\r\n  align-items: flex-end;\r\n}\r\n\r\n.flex-col-rev-c {\r\n  display: flex;\r\n  -moz-flex-direction: column-reverse;\r\n  -o-flex-direction: column-reverse;\r\n  flex-direction: column-reverse;\r\n  -ms-align-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.flex-col-rev-str {\r\n  display: flex;\r\n  -moz-flex-direction: column-reverse;\r\n  -o-flex-direction: column-reverse;\r\n  flex-direction: column-reverse;\r\n  -ms-align-items: stretch;\r\n  align-items: stretch;\r\n}\r\n\r\n/*[ Absolute ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n.ab-c-m {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.ab-c-t {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n  transform: translateX(-50%);\r\n}\r\n\r\n.ab-c-b {\r\n  position: absolute;\r\n  bottom: 0px;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n  transform: translateX(-50%);\r\n}\r\n\r\n.ab-l-m {\r\n  position: absolute;\r\n  left: 0px;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.ab-r-m {\r\n  position: absolute;\r\n  right: 0px;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.ab-t-l {\r\n  position: absolute;\r\n  left: 0px;\r\n  top: 0px;\r\n}\r\n\r\n.ab-t-r {\r\n  position: absolute;\r\n  right: 0px;\r\n  top: 0px;\r\n}\r\n\r\n.ab-b-l {\r\n  position: absolute;\r\n  left: 0px;\r\n  bottom: 0px;\r\n}\r\n\r\n.ab-b-r {\r\n  position: absolute;\r\n  right: 0px;\r\n  bottom: 0px;\r\n}\r\n\r\n@keyframes lds-spinner {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes lds-spinner {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.lds-spinner {\r\n  position: relative;\r\n}\r\n\r\n.lds-spinner div {\r\n  left: 94px;\r\n  top: 48px;\r\n  position: absolute;\r\n  -webkit-animation: lds-spinner linear 0.6s infinite;\r\n  animation: lds-spinner linear 0.6s infinite;\r\n  background: #e50914;\r\n  width: 12px;\r\n  height: 24px;\r\n  border-radius: 40%;\r\n  -webkit-transform-origin: 6px 52px;\r\n  transform-origin: 6px 52px;\r\n}\r\n\r\n.lds-spinner div:nth-child(1) {\r\n  -webkit-transform: rotate(0deg);\r\n  transform: rotate(0deg);\r\n  -webkit-animation-delay: -0.55s;\r\n  animation-delay: -0.55s;\r\n}\r\n\r\n.lds-spinner div:nth-child(2) {\r\n  -webkit-transform: rotate(30deg);\r\n  transform: rotate(30deg);\r\n  -webkit-animation-delay: -0.5s;\r\n  animation-delay: -0.5s;\r\n}\r\n\r\n.lds-spinner div:nth-child(3) {\r\n  -webkit-transform: rotate(60deg);\r\n  transform: rotate(60deg);\r\n  -webkit-animation-delay: -0.45s;\r\n  animation-delay: -0.45s;\r\n}\r\n\r\n.lds-spinner div:nth-child(4) {\r\n  -webkit-transform: rotate(90deg);\r\n  transform: rotate(90deg);\r\n  -webkit-animation-delay: -0.4s;\r\n  animation-delay: -0.4s;\r\n}\r\n\r\n.lds-spinner div:nth-child(5) {\r\n  -webkit-transform: rotate(120deg);\r\n  transform: rotate(120deg);\r\n  -webkit-animation-delay: -0.35s;\r\n  animation-delay: -0.35s;\r\n}\r\n\r\n.lds-spinner div:nth-child(6) {\r\n  -webkit-transform: rotate(150deg);\r\n  transform: rotate(150deg);\r\n  -webkit-animation-delay: -0.3s;\r\n  animation-delay: -0.3s;\r\n}\r\n\r\n.lds-spinner div:nth-child(7) {\r\n  -webkit-transform: rotate(180deg);\r\n  transform: rotate(180deg);\r\n  -webkit-animation-delay: -0.25s;\r\n  animation-delay: -0.25s;\r\n}\r\n\r\n.lds-spinner div:nth-child(8) {\r\n  -webkit-transform: rotate(210deg);\r\n  transform: rotate(210deg);\r\n  -webkit-animation-delay: -0.2s;\r\n  animation-delay: -0.2s;\r\n}\r\n\r\n.lds-spinner div:nth-child(9) {\r\n  -webkit-transform: rotate(240deg);\r\n  transform: rotate(240deg);\r\n  -webkit-animation-delay: -0.15s;\r\n  animation-delay: -0.15s;\r\n}\r\n\r\n.lds-spinner div:nth-child(10) {\r\n  -webkit-transform: rotate(270deg);\r\n  transform: rotate(270deg);\r\n  -webkit-animation-delay: -0.1s;\r\n  animation-delay: -0.1s;\r\n}\r\n\r\n.lds-spinner div:nth-child(11) {\r\n  -webkit-transform: rotate(300deg);\r\n  transform: rotate(300deg);\r\n  -webkit-animation-delay: -0.05s;\r\n  animation-delay: -0.05s;\r\n}\r\n\r\n.lds-spinner div:nth-child(12) {\r\n  -webkit-transform: rotate(330deg);\r\n  transform: rotate(330deg);\r\n  -webkit-animation-delay: 0s;\r\n  animation-delay: 0s;\r\n}\r\n\r\n.lds-spinner {\r\n  width: 101px !important;\r\n  height: 101px !important;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  -webkit-transform: translate(-50.5px, -50.5px) scale(0.505) translate(50.5px, 50.5px);\r\n  transform: translate(-50.5px, -50.5px) scale(0.505) translate(50.5px, 50.5px);\r\n}"

/***/ }),

/***/ "./src/app/components/login-modal/login-modal.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/login-modal/login-modal.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter\">\n  <div class=\"container-login100\">\n    <div class=\"wrap-login100\">\n      <form class=\"login100-form validate-form\">\n        <img class=\"login100-form-logo\" src=\"assets/img/logo.png\">\n\n        <span class=\"login100-form-title p-b-49\">\n          Login\n        </span>\n\n        <div class=\"wrap-input100 validate-input m-b-23\" data-validate=\"Username is required\">\n          <span class=\"label-input100\">Email</span>\n          <input [(ngModel)]=\"loginData.email\" class=\"input100\" type=\"text\" name=\"username\" placeholder=\"Type your username\">\n        </div>\n\n        <div class=\"wrap-input100 validate-input\" data-validate=\"Password is required\">\n          <span class=\"label-input100\">Contraseña</span>\n          <input [(ngModel)]=\"loginData.password\" class=\"input100\" type=\"password\" name=\"pass\" placeholder=\"Type your password\">\n        </div>\n\n        <div class=\"text-right p-t-8 p-b-31\">\n        </div>\n\n        <div class=\"container-login100-form-btn\">\n          <button (click)=\"signIn()\" class=\"login100-form-btn\">\n            Log In\n          </button>\n\n          <button (click)=\"signUp()\" class=\"login100-form-btn\">\n            Registrar\n          </button>\n        </div>\n\n        <!-- Spinner -->\n        <div *ngIf=\"isLoading\" class=\"login100-form-title\">\n          <div class=\"lds-css ng-scope\">\n            <div class=\"lds-spinner\" style=\"width:100%; height:100%\">\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n            </div>\n          </div>\n        </div>\n        <!-- End Spinner -->\n\n        <div class=\"txt1 text-center p-t-54 p-b-20\">\n          <span>\n            Or Sign Up Using\n          </span>\n        </div>\n\n        <div class=\"flex-c-m\">\n          <a (click)=\"signInWithFacebook()\" class=\"login100-social-item bg1\">\n            <i class=\"fa fa-facebook\"></i>\n          </a>\n\n          <a (click)=\"signInWithTwitter()\" class=\"login100-social-item bg2\">\n            <i class=\"fa fa-twitter\"></i>\n          </a>\n\n          <a (click)=\"signInWithGoogle()\" class=\"login100-social-item bg3\">\n            <i class=\"fa fa-google\"></i>\n          </a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login-modal/login-modal.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/login-modal/login-modal.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoginModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModalComponent", function() { return LoginModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_AuthService_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/AuthService/auth.service */ "./src/app/services/AuthService/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginModalComponent = /** @class */ (function () {
    function LoginModalComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
        this.loginData = { email: "", password: "" };
    }
    LoginModalComponent.prototype.ngOnInit = function () { };
    LoginModalComponent.prototype.signIn = function () {
        var _this = this;
        this.isLoading = true;
        this.authService
            .signIn(this.loginData.email, this.loginData.password)
            .then(function (x) {
            _this.isLoading = false;
            demo.showSuccessNotification("Log in successful");
        })
            .catch(function (error) {
            _this.isLoading = false;
            console.error(error);
            demo.showErrorNotification("Log in failed:\n" + error);
        });
    };
    LoginModalComponent.prototype.signUp = function () {
        var _this = this;
        this.isLoading = true;
        this.authService
            .registerUser(this.loginData.email, this.loginData.password)
            .then(function (x) {
            _this.isLoading = false;
            demo.showSuccessNotification("Sign up successful");
        })
            .catch(function (error) {
            _this.isLoading = false;
            console.error(error);
            demo.showErrorNotification("Sign up failed:\n" + error);
        });
    };
    LoginModalComponent.prototype.signInWithFacebook = function () {
        var _this = this;
        this.isLoading = true;
        this.authService
            .signInWithFacebook()
            .then(function () {
            _this.isLoading = false;
            demo.showSuccessNotification("Log in successful");
        })
            .catch(function (error) {
            _this.isLoading = false;
            console.error(error);
            demo.showErrorNotification("Log in failed:\n" + error);
        });
    };
    LoginModalComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.isLoading = true;
        this.authService
            .signInWithGoogle()
            .then(function () {
            _this.isLoading = false;
            demo.showSuccessNotification("Log in successful");
        })
            .catch(function (error) {
            _this.isLoading = false;
            console.error(error);
            demo.showErrorNotification("Log in failed:\n" + error);
        });
    };
    LoginModalComponent.prototype.signInWithTwitter = function () {
        var _this = this;
        this.isLoading = true;
        this.authService
            .signInWithTwitter()
            .then(function () {
            _this.isLoading = false;
            demo.showSuccessNotification("Log in successful");
        })
            .catch(function (error) {
            _this.isLoading = false;
            console.error(error);
            demo.showErrorNotification("Log in failed:\n" + error);
        });
    };
    LoginModalComponent.prototype.signInWithGithub = function () {
        var _this = this;
        this.isLoading = true;
        this.authService
            .signInWithGithub()
            .then(function () {
            _this.isLoading = false;
            demo.showSuccessNotification("Log in successful");
        })
            .catch(function (error) {
            _this.isLoading = false;
            console.error(error);
            demo.showErrorNotification("Log in failed:\n" + error);
        });
    };
    LoginModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login-modal",
            template: __webpack_require__(/*! ./login-modal.component.html */ "./src/app/components/login-modal/login-modal.component.html"),
            styles: [__webpack_require__(/*! ./login-modal.component.css */ "./src/app/components/login-modal/login-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_services_AuthService_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginModalComponent);
    return LoginModalComponent;
}());



/***/ }),

/***/ "./src/app/components/movie-player/movie-player.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/movie-player/movie-player.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/movie-player/movie-player.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/movie-player/movie-player.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<video style=\"width: 500px; height: 400px;\" controls autoplay>\n  <source src=\"{{movie.videoUrl}}\" type=\"video/mp4\">\n</video>"

/***/ }),

/***/ "./src/app/components/movie-player/movie-player.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/movie-player/movie-player.component.ts ***!
  \*******************************************************************/
/*! exports provided: MoviePlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviePlayerComponent", function() { return MoviePlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MoviePlayerComponent = /** @class */ (function () {
    function MoviePlayerComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.movie = data.movie;
    }
    MoviePlayerComponent.prototype.ngOnInit = function () { };
    MoviePlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-movie-player",
            template: __webpack_require__(/*! ./movie-player.component.html */ "./src/app/components/movie-player/movie-player.component.html"),
            styles: [__webpack_require__(/*! ./movie-player.component.css */ "./src/app/components/movie-player/movie-player.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], MoviePlayerComponent);
    return MoviePlayerComponent;
}());



/***/ }),

/***/ "./src/app/components/movies-editor/movies-editor.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/movies-editor/movies-editor.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/movies-editor/movies-editor.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/movies-editor/movies-editor.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(0, 0, 0, 0.0)\" size=\"medium\" color=\"#e50914\" type=\"timer\"></ngx-spinner>\n\n<div class=\"row\">\n  <button type=\"button\" style=\"float: right;\" (click)=\"closeEditor()\" class=\"btn btn-default btn-icon\">\n    <i class=\"ti-close\"></i>\n  </button>\n</div>\n\n<div class=\"row\">\n  <h2 *ngIf=\"!isEditMode\" style=\"margin-top: -20px;\">Add New Movie</h2>\n  <h2 *ngIf=\"isEditMode\" style=\"margin-top: -20px;\">Edit Existing Movie</h2>\n</div>\n\n<br>\n\n<div class=\"row\">\n  <div class=\"col-sm-10\">\n    <div class=\"form-group\">\n      <label for=\"movieName\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"movieName\" [(ngModel)]=\"movieName\" placeholder=\"Movie name\">\n    </div>\n  </div>\n\n  <div class=\"col-sm-2\">\n    <button *ngIf=\"isEditMode\" style=\"margin-top: 25px;\" (click)=\"updateMovieName()\" class=\"btn btn-primary\">Update</button>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-10\">\n    <div class=\"form-group\">\n      <label for=\"homeScreenPicture\">Home Screen Picture</label>\n      <input type=\"file\" class=\"form-control\" id=\"homeScreenPicture\">\n    </div>\n  </div>\n\n  <div class=\"col-sm-2\">\n    <button *ngIf=\"isEditMode\" style=\"margin-top: 25px;\" (click)=\"updateHomeScreenPicture()\" class=\"btn btn-primary\">Update</button>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <strong style=\"color: #e50914; font-size: 13px\">NB: Recommended picture size is 200px by 280px (width by height)</strong>\n  </div>\n</div>\n\n<br>\n\n<div class=\"row\">\n  <div class=\"col-sm-10\">\n    <div class=\"form-group\">\n      <label for=\"detailsPicture\">Details Picture</label>\n      <input type=\"file\" class=\"form-control\" id=\"detailsPicture\">\n    </div>\n  </div>\n\n  <div class=\"col-sm-2\">\n    <button *ngIf=\"isEditMode\" style=\"margin-top: 25px;\" (click)=\"updateDetailsPicture()\" class=\"btn btn-primary\">Update</button>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <strong style=\"color: #e50914; font-size: 13px\">NB: Recommended picture size is 800px by 450px (width by height)</strong>\n  </div>\n</div>\n\n<br>\n\n<div class=\"row\">\n  <div class=\"col-sm-10\">\n    <div class=\"form-group\">\n      <label for=\"movieYear\">Release Year</label>\n      <select class=\"form-control\" [(ngModel)]=\"movieYear\">\n        <option *ngFor=\"let year of years\" id=\"movieYear\" [ngValue]=\"year\">{{year}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"col-sm-2\">\n    <button *ngIf=\"isEditMode\" style=\"margin-top: 25px;\" (click)=\"updateMovieReleaseYear()\" class=\"btn btn-primary\">Update</button>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-10\">\n    <div class=\"form-group\">\n      <label for=\"movieRating\">Rating</label>\n      <select class=\"form-control\" [(ngModel)]=\"movieRating\">\n        <option *ngFor=\"let rating of ratings\" id=\"movieRating\" [ngValue]=\"rating\">{{rating}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"col-sm-2\">\n    <button *ngIf=\"isEditMode\" style=\"margin-top: 25px;\" (click)=\"updateMovieRating()\" class=\"btn btn-primary\">Update</button>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-10\">\n    <div class=\"form-group\">\n      <label for=\"movieDescription\">Description</label>\n      <textarea rows=\"4\" cols=\"50\" class=\"form-control\" id=\"movieDescription\" [(ngModel)]=\"movieDescription\" placeholder=\"Movie description\"></textarea>\n    </div>\n  </div>\n\n  <div class=\"col-sm-2\">\n    <button *ngIf=\"isEditMode\" style=\"margin-top: 25px;\" (click)=\"updateMovieDescription()\" class=\"btn btn-primary\">Update</button>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-10\">\n    <div class=\"form-group\">\n      <label for=\"movie\">Movie to upload:</label>\n      <input type=\"file\" class=\"form-control\" id=\"movie\">\n    </div>\n  </div>\n\n  <div class=\"col-sm-2\">\n    <button *ngIf=\"isEditMode\" style=\"margin-top: 25px;\" (click)=\"updateMovieVideo()\" class=\"btn btn-primary\">Update</button>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-10\">\n    <div *ngIf=\"showProgress\" aria-valuemin=\"0\" role=\"progressbar\" class=\"progress-bar progress-bar-animated progress-bar-striped\"\n      attr.aria-valuenow=\"{{progress}}\" aria-valuemax=\"100\" [ngStyle]=\"{width:progress/100 | percent:'1.0-1'}\" style=\" background-color: #e50914\">\n      <strong style=\"color: white\">{{progress}}%</strong>\n    </div>\n  </div>\n</div>\n\n<br>\n\n<div class=\"row\">\n  <button type=\"submit\" style=\"float: right;\" *ngIf=\"!isEditMode\" (click)=\"addNewMovie()\" class=\"btn btn-primary\">Add Movie</button>\n</div>"

/***/ }),

/***/ "./src/app/components/movies-editor/movies-editor.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/movies-editor/movies-editor.component.ts ***!
  \*********************************************************************/
/*! exports provided: MoviesEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesEditorComponent", function() { return MoviesEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/FirebaseStorage/firebase-storage.service */ "./src/app/services/FirebaseStorage/firebase-storage.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _assets_js_demo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/js/demo.js */ "./src/assets/js/demo.js");
/* harmony import */ var _assets_js_demo_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_js_demo_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_Movie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/Movie */ "./src/app/models/Movie.ts");
/* harmony import */ var _services_Firestore_MoviesService_movies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/Firestore/MoviesService/movies.service */ "./src/app/services/Firestore/MoviesService/movies.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var MoviesEditorComponent = /** @class */ (function () {
    function MoviesEditorComponent(moviesService, firebaseStorage, spinner, dialogRef, data) {
        this.moviesService = moviesService;
        this.firebaseStorage = firebaseStorage;
        this.spinner = spinner;
        this.dialogRef = dialogRef;
        this.data = data;
        this.movieName = "";
        this.movieId = "";
        this.moviePicture = "";
        this.movieYear = new Date().getFullYear();
        this.movieRating = "G";
        this.movieDescription = "";
        this.isEditMode = false;
        this.showProgress = false;
        this.progress = 0;
        this.years = [];
        this.ratings = [];
        this.isEditMode = data.isEditMode;
        if (this.isEditMode) {
            this.movieId = data.movie.movieId;
            this.movieName = data.movie.name;
            this.moviePicture = data.movie.picture;
            this.movieYear = data.movie.releaseYear;
            this.movieRating = data.movie.rating;
            this.movieDescription = data.movie.description;
        }
    }
    MoviesEditorComponent.prototype.ngOnInit = function () {
        this.initialiseYears();
        this.initialiseRatings();
    };
    MoviesEditorComponent.prototype.initialiseYears = function () {
        for (var year = 1900; year <= new Date().getFullYear(); year++) {
            this.years.push(year);
        }
    };
    MoviesEditorComponent.prototype.initialiseRatings = function () {
        this.ratings = ["G", "PG", "M", "MA 15+", "R18+"];
    };
    MoviesEditorComponent.prototype.addNewMovie = function () {
        var _this = this;
        if (!this.movieName) {
            demo.showWarningNotification("Please provide a name for the movie.");
            return;
        }
        var homeScreenPicture = (document.getElementById("homeScreenPicture")).files[0];
        if (!homeScreenPicture) {
            demo.showWarningNotification("Please select a home screen image file to upload.");
            return;
        }
        var detailsPicture = (document.getElementById("detailsPicture")).files[0];
        if (!detailsPicture) {
            demo.showWarningNotification("Please select a details image file to upload.");
            return;
        }
        if (!this.movieDescription) {
            demo.showWarningNotification("Please provide a description for the movie.");
            return;
        }
        var movie = document.getElementById("movie").files[0];
        if (!movie) {
            demo.showWarningNotification("Please select a video file to upload.");
            return;
        }
        this.spinner.show();
        this.showProgress = true;
        var homeScreenpictureUploadPath = "/Movies/" + this.movieName + "/homeScreenPicture";
        // Upload movie picture
        this.firebaseStorage
            .uploadPicture(homeScreenpictureUploadPath, homeScreenPicture, function (progress) {
            console.log("Uploading... " + Math.round(progress) + "% done");
            _this.progress = Math.round(progress);
        })
            .then(function (homeScreenPictureUploadResult) {
            _this.progress = 0;
            var detailsPictureUploadPath = "/Movies/" + _this.movieName + "/detailsPicture";
            _this.firebaseStorage
                .uploadPicture(detailsPictureUploadPath, detailsPicture, function (progress) {
                console.log("Uploading... " + Math.round(progress) + "% done");
                _this.progress = Math.round(progress);
            })
                .then(function (detailsPictureUploadResult) {
                var videoUploadPath = "/Movies/" + _this.movieName + "/movieVideo";
                _this.firebaseStorage
                    .uploadVideo(videoUploadPath, _this.movieName, homeScreenPictureUploadResult.downloadURL, movie)
                    .then(function (uploadResult) {
                    uploadResult.uploadTask.then(function (snapshot) {
                        if (snapshot.state !== "success") {
                            demo.showErrorNotification("An error occured.");
                            return;
                        }
                        snapshot.ref.getDownloadURL().then(function (videoDownloadURL) {
                            var newMovie = new _models_Movie__WEBPACK_IMPORTED_MODULE_5__["Movie"]();
                            newMovie.name = _this.movieName;
                            newMovie.picture =
                                homeScreenPictureUploadResult.downloadURL;
                            newMovie.detailsPicture =
                                detailsPictureUploadResult.downloadURL;
                            newMovie.releaseYear = _this.movieYear;
                            newMovie.rating = _this.movieRating;
                            newMovie.description = _this.movieDescription;
                            newMovie.videoUrl = videoDownloadURL;
                            // If upload is successful, add the movie to the firestore
                            _this.moviesService.addNewMovie(newMovie).then(function (result) {
                                _this.spinner.hide();
                                _this.showProgress = false;
                                newMovie.movieId = result.newMovieId;
                            }, function (error) {
                                _this.spinner.hide();
                                _this.showProgress = false;
                                demo.showErrorNotification("An error occured: " + error);
                            });
                        });
                    });
                });
                _this.spinner.hide();
                _this.dialogRef.close();
            }, function (error) {
                _this.spinner.hide();
                _this.showProgress = false;
                demo.showErrorNotification("An error occured: " + error);
            });
        });
    };
    MoviesEditorComponent.prototype.updateMovieName = function () {
        var _this = this;
        if (!this.movieName) {
            demo.showWarningNotification("Please provide a name for the movie.");
            return;
        }
        this.moviesService.editMovieName(this.movieId, this.movieName).then(function (result) {
            _this.dialogRef.close({
                isSuccess: true,
                movieNameUpdated: true,
                newMovieName: _this.movieName
            });
        }, function (error) {
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    MoviesEditorComponent.prototype.updateHomeScreenPicture = function () {
        var _this = this;
        var homeScreenPicture = (document.getElementById("homeScreenPicture")).files[0];
        if (!homeScreenPicture) {
            demo.showWarningNotification("Please select an image file to upload.");
            return;
        }
        this.spinner.show();
        this.showProgress = true;
        var uploadPath = "/Movies/" + this.movieName + "/homeScreenPicture";
        // Update movie picture
        this.firebaseStorage
            .uploadPicture(uploadPath, homeScreenPicture, function (progress) {
            console.log("Uploading... " + Math.round(progress) + "% done");
            _this.progress = Math.round(progress);
        })
            .then(function (uploadResult) {
            // If upload is successful, edit the movie picture
            _this.moviesService
                .editHomeScreenPicture(_this.movieId, uploadResult.downloadURL)
                .then(function (result) {
                _this.spinner.hide();
                _this.showProgress = false;
                _this.dialogRef.close({
                    isSuccess: true,
                    moviePictureUpdated: true,
                    newMoviePicture: uploadResult.downloadURL
                });
            }, function (error) {
                _this.spinner.hide();
                _this.showProgress = false;
                demo.showErrorNotification("An error occured: " + error);
            });
        }, function (error) {
            _this.spinner.hide();
            _this.showProgress = false;
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    MoviesEditorComponent.prototype.updateDetailsPicture = function () {
        var _this = this;
        var detailsPicture = (document.getElementById("detailsPicture")).files[0];
        if (!detailsPicture) {
            demo.showWarningNotification("Please select a details image file to upload.");
            return;
        }
        this.spinner.show();
        this.showProgress = true;
        var detailsPictureUploadPath = "/Movies/" + this.movieName + "/detailsPicture";
        // Update movie picture
        this.firebaseStorage
            .uploadPicture(detailsPictureUploadPath, detailsPicture, function (progress) {
            console.log("Uploading... " + Math.round(progress) + "% done");
            _this.progress = Math.round(progress);
        })
            .then(function (detailsPictureUploadResult) {
            // If upload is successful, edit the movie picture
            _this.moviesService
                .editDetailsPicture(_this.movieId, detailsPictureUploadResult.downloadURL)
                .then(function (result) {
                _this.spinner.hide();
                _this.showProgress = false;
                _this.dialogRef.close({
                    isSuccess: true,
                    detailsPictureUpdated: true,
                    newDetailsPicture: detailsPictureUploadResult.downloadURL
                });
            }, function (error) {
                _this.spinner.hide();
                _this.showProgress = false;
                demo.showErrorNotification("An error occured: " + error);
            });
        }, function (error) {
            _this.spinner.hide();
            _this.showProgress = false;
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    MoviesEditorComponent.prototype.updateMovieReleaseYear = function () {
        var _this = this;
        this.moviesService.editMovieReleaseYear(this.movieId, this.movieYear).then(function (result) {
            _this.dialogRef.close({
                isSuccess: true,
                movieYearUpdated: true,
                newMovieYear: _this.movieYear
            });
        }, function (error) {
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    MoviesEditorComponent.prototype.updateMovieRating = function () {
        var _this = this;
        this.moviesService.editMovieRating(this.movieId, this.movieRating).then(function (result) {
            _this.dialogRef.close({
                isSuccess: true,
                movieRatingUpdated: true,
                newMovieRating: _this.movieRating
            });
        }, function (error) {
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    MoviesEditorComponent.prototype.updateMovieDescription = function () {
        var _this = this;
        this.moviesService
            .editMovieDescription(this.movieId, this.movieDescription)
            .then(function (result) {
            _this.dialogRef.close({
                isSuccess: true,
                movieDescriptionUpdated: true,
                newMovieDescription: _this.movieDescription
            });
        }, function (error) {
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    MoviesEditorComponent.prototype.updateMovieVideo = function () {
        var _this = this;
        var movie = document.getElementById("movie").files[0];
        if (!movie) {
            demo.showWarningNotification("Please select a video file to upload.");
            return;
        }
        var videoUploadPath = "/Movies/" + this.movieName + "/movieVideo";
        this.firebaseStorage
            .uploadVideo(videoUploadPath, this.movieName, this.moviePicture, movie)
            .then(function (uploadResult) {
            uploadResult.uploadTask.then(function (snapshot) {
                if (snapshot.state !== "success") {
                    demo.showErrorNotification("An error occured.");
                    return;
                }
                snapshot.ref.getDownloadURL().then(function (videoDownloadURL) {
                    // If upload is successful, edit the movie video
                    _this.moviesService.editMovieVideo(_this.movieId, videoDownloadURL).then(function (result) {
                        _this.spinner.hide();
                        _this.showProgress = false;
                    }, function (error) {
                        _this.spinner.hide();
                        _this.showProgress = false;
                        demo.showErrorNotification("An error occured: " + error);
                    });
                });
            });
        });
        this.spinner.hide();
        this.dialogRef.close();
    };
    MoviesEditorComponent.prototype.closeEditor = function () {
        this.dialogRef.close({
            isSuccess: false
        });
    };
    MoviesEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-movies-editor",
            template: __webpack_require__(/*! ./movies-editor.component.html */ "./src/app/components/movies-editor/movies-editor.component.html"),
            styles: [__webpack_require__(/*! ./movies-editor.component.css */ "./src/app/components/movies-editor/movies-editor.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_Firestore_MoviesService_movies_service__WEBPACK_IMPORTED_MODULE_6__["MoviesService"],
            _services_FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseStorageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], MoviesEditorComponent);
    return MoviesEditorComponent;
}());



/***/ }),

/***/ "./src/app/components/movies/movies.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/movies/movies.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".line-break {\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n.image-size {\r\n  max-width: 200px;\r\n  max-height: 280px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/movies/movies.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/movies/movies.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(0, 0, 0, 0.0)\" size=\"medium\" color=\"#e50914\" type=\"timer\"></ngx-spinner>\n\n<div class=\"row\" *ngIf=\"!isCategoryEditing && !isHomeScreenGroupEditing\">\n  <div class=\"col-md-7\">\n    <button type=\"button\" (click)=\"addNewMovie()\" style=\"margin-left: 30px;\" class=\"btn btn-default btn-with-icon\">\n      Add New Movie\n    </button>\n  </div>\n\n  <div class=\"col-md-3\">\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\">\n        <i class=\"fa fa-search\"></i>\n      </span>\n\n      <input id=\"searchInput\" type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search Movies...\">\n    </div>\n  </div>\n\n  <div class=\"col-md-2\">\n    <button type=\"button\" (click)=\"clearSearchInput()\" class=\"btn btn-xs btn-with-icon\" style=\"margin-top: 5px;\" [disabled]=\"!isSearching\">\n      Clear\n    </button>\n  </div>\n</div>\n\n<div class=\"col-md-3\" *ngFor=\"let movie of movies\" style=\"min-width: 300px; max-height: 500px;\">\n  <div class=\"card card-profile\">\n    <img class=\"image-size\" src=\"{{movie.picture}}\" alt=\"...\">\n\n    <div class=\"card-body\">\n      <h4 class=\"card-title line-break\">{{movie.name}}</h4>\n\n      <div *ngIf=\"!isCategoryEditing && !isHomeScreenGroupEditing\" class=\"card-footer text-center\">\n        <a (click)=\"edit(movie)\" class=\"btn btn-with-icon btn-outline-info btn-info\" style=\"margin: 20px 5px 10px 5px\" data-toggle=\"tooltip\"\n          data-placement=\"bottom\" title=\"Edit\">\n          <i class=\"ti-pencil\" aria-hidden=\"true\"></i>\n        </a>\n\n        <a (click)=\"delete(movie)\" class=\"btn btn-with-icon btn-outline-danger btn-danger\" style=\"margin: 20px 5px 10px 5px\" data-toggle=\"tooltip\"\n          data-placement=\"bottom\" title=\"Delete\">\n          <i class=\"ti-trash\" aria-hidden=\"true\"></i>\n        </a>\n\n        <a (click)=\"preview(movie)\" class=\"btn btn-with-icon btn-outline-success btn-success\" style=\"margin: 20px 5px 10px 5px\" data-toggle=\"tooltip\"\n          data-placement=\"bottom\" title=\"Preview episode\">\n          <i class=\"ti-control-play\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n\n      <div *ngIf=\"isCategoryEditing\" class=\"card-footer text-center\">\n        <br>\n\n        <button (click)=\"addMovieToCategory(movie)\" *ngIf=\"!movie.isPartOfCategory\" type=\"button\" class=\"btn btn-default\">\n          Add\n        </button>\n\n        <button (click)=\"removeMovieFromCategory(movie)\" *ngIf=\"movie.isPartOfCategory\" type=\"button\" class=\"btn btn-fill btn-success\">\n          Added\n        </button>\n      </div>\n\n\n      <div *ngIf=\"isHomeScreenGroupEditing\" class=\"card-footer text-center\">\n        <br>\n\n        <button (click)=\"addMovieToHomeScreenGroup(movie)\" *ngIf=\"!movie.isPartOfHomeScreenGroup\" type=\"button\" class=\"btn btn-default\">\n          Add\n        </button>\n\n        <button (click)=\"removeMovieFromHomeScreenGroup(movie)\" *ngIf=\"movie.isPartOfHomeScreenGroup\" type=\"button\" class=\"btn btn-fill btn-success\">\n          Added\n        </button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/movies/movies.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/movies/movies.component.ts ***!
  \*******************************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_Firestore_MoviesService_movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/Firestore/MoviesService/movies.service */ "./src/app/services/Firestore/MoviesService/movies.service.ts");
/* harmony import */ var _services_FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/FirebaseStorage/firebase-storage.service */ "./src/app/services/FirebaseStorage/firebase-storage.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_Firestore_CategoriesService_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/Firestore/CategoriesService/categories.service */ "./src/app/services/Firestore/CategoriesService/categories.service.ts");
/* harmony import */ var _services_Firestore_HomeScreenService_home_screen_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/Firestore/HomeScreenService/home-screen.service */ "./src/app/services/Firestore/HomeScreenService/home-screen.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _movies_editor_movies_editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../movies-editor/movies-editor.component */ "./src/app/components/movies-editor/movies-editor.component.ts");
/* harmony import */ var _movie_player_movie_player_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../movie-player/movie-player.component */ "./src/app/components/movie-player/movie-player.component.ts");
/* harmony import */ var _models_Category__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/Category */ "./src/app/models/Category.ts");
/* harmony import */ var _models_HomeScreenGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/HomeScreenGroup */ "./src/app/models/HomeScreenGroup.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(moviesService, categoriesService, homeScreenService, firebaseStorage, spinner, dialog) {
        this.moviesService = moviesService;
        this.categoriesService = categoriesService;
        this.homeScreenService = homeScreenService;
        this.firebaseStorage = firebaseStorage;
        this.spinner = spinner;
        this.dialog = dialog;
        this.isCategoryEditing = false;
        this.isHomeScreenGroupEditing = false;
        this.movies = [];
        this.isSearching = false;
    }
    MoviesComponent.prototype.ngOnInit = function () {
        this.getMovies();
        if (!this.isCategoryEditing && !this.isHomeScreenGroupEditing) {
            this.listenForSearchInput(500);
        }
    };
    MoviesComponent.prototype.getMovies = function () {
        var _this = this;
        this.spinner.show();
        this.moviesService.getMovies().then(function (result) {
            _this.movies = result.movies;
            _this.originalMovies = _this.movies;
            _this.movies.forEach(function (movie) {
                if (_this.isCategoryEditing) {
                    _this.checkIfCategoryMovie(movie);
                }
                else if (_this.isHomeScreenGroupEditing) {
                    _this.checkIfHomeScreenGroupMovie(movie);
                }
            });
            _this.spinner.hide();
        });
    };
    MoviesComponent.prototype.checkIfCategoryMovie = function (movie) {
        if (this.categoryMovies) {
            var categoryMovie = this.categoryMovies.find(function (x) { return x.movieId === movie.movieId; });
            if (categoryMovie) {
                movie.isPartOfCategory = true;
                movie.categoryMovieId = categoryMovie.categoryMovieId;
            }
        }
    };
    MoviesComponent.prototype.checkIfHomeScreenGroupMovie = function (movie) {
        if (this.homeScreenGroupMovies) {
            var homeScreenGroupMovie = this.homeScreenGroupMovies.find(function (x) { return x.movieId === movie.movieId; });
            if (homeScreenGroupMovie) {
                movie.isPartOfHomeScreenGroup = true;
                movie.homeScreenGroupMovieId = homeScreenGroupMovie.homeScreenGroupMovieId;
            }
        }
    };
    MoviesComponent.prototype.addNewMovie = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_movies_editor_movies_editor_component__WEBPACK_IMPORTED_MODULE_8__["MoviesEditorComponent"], {
            width: "500px",
            data: {
                isEditMode: false
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.isSuccess) {
                // Add new movie
                _this.movies.unshift(result.newMovie);
                demo.showSuccessNotification("Movie successfully added!");
            }
        });
    };
    MoviesComponent.prototype.edit = function (movie) {
        var dialogRef = this.dialog.open(_movies_editor_movies_editor_component__WEBPACK_IMPORTED_MODULE_8__["MoviesEditorComponent"], {
            width: "650px",
            data: {
                isEditMode: true,
                movie: movie
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.isSuccess) {
                // Edit name
                if (result.movieNameUpdated) {
                    movie.name = result.newMovieName;
                    demo.showSuccessNotification("Movie name successfully updated!");
                }
                else if (result.moviePictureUpdated) {
                    movie.picture = result.newMoviePicture;
                    demo.showSuccessNotification("Home screen picture successfully updated!");
                }
                else if (result.detailsPictureUpdated) {
                    movie.detailsPicture = result.newDetailsPicture;
                    demo.showSuccessNotification("Details picture successfully updated!");
                }
                else if (result.movieYearUpdated) {
                    movie.releaseYear = result.newMovieYear;
                    demo.showSuccessNotification("Movie release year successfully updated!");
                }
                else if (result.movieRatingUpdated) {
                    movie.rating = result.newMovieRating;
                    demo.showSuccessNotification("Movie rating year successfully updated!");
                }
                else if (result.movieDescriptionUpdated) {
                    movie.description = result.newMovieDescription;
                    demo.showSuccessNotification("Movie description successfully updated!");
                }
            }
        });
    };
    MoviesComponent.prototype.delete = function (movie) {
        var _this = this;
        var options = {
            title: "Delete Movie?",
            text: "Are you sure you want to delete this Movie?",
            icon: "error",
            buttons: ["Cancel", "Ok"],
            dangerMode: true
        };
        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()(options).then(function (willDelete) {
            if (willDelete) {
                _this.spinner.show();
                // Delete movie
                _this.moviesService.deleteMovie(movie).then(function (result) {
                    _this.removeMovieFromList(movie);
                    demo.showSuccessNotification("Movie successfully deleted!");
                    _this.spinner.hide();
                }, function (error) {
                    _this.spinner.hide();
                    demo.showErrorNotification("An error occured: " + error);
                });
            }
        });
    };
    MoviesComponent.prototype.removeMovieFromList = function (movie) {
        var index = this.movies.indexOf(movie);
        if (index > -1) {
            this.movies.splice(index, 1);
        }
    };
    MoviesComponent.prototype.listenForSearchInput = function (timeoutTime) {
        var _this = this;
        var searchInput = (document.getElementById("searchInput"));
        var timeout = null;
        searchInput.onkeyup = function (e) {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                _this.searchMovies(searchInput.value);
            }, timeoutTime);
        };
    };
    MoviesComponent.prototype.searchMovies = function (searchValue) {
        var _this = this;
        this.isSearching = true;
        if (searchValue !== "" && searchValue.length >= 3) {
            this.spinner.show();
            this.movies = [];
            this.moviesService.getMovies().then(function (result) {
                result.movies.forEach(function (movie) {
                    if (movie.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
                        _this.movies.push(movie);
                    }
                });
                _this.spinner.hide();
            });
        }
        else if (searchValue === "") {
            this.clearSearchInput();
        }
    };
    MoviesComponent.prototype.clearSearchInput = function () {
        this.movies = this.originalMovies;
        this.isSearching = false;
        var searchInput = (document.getElementById("searchInput"));
        searchInput.value = "";
    };
    MoviesComponent.prototype.preview = function (movie) {
        var dialogRef = this.dialog.open(_movie_player_movie_player_component__WEBPACK_IMPORTED_MODULE_9__["MoviePlayerComponent"], {
            width: "550px",
            height: "450px",
            data: {
                movie: movie
            }
        });
        dialogRef.afterClosed().subscribe(function (result) { });
    };
    MoviesComponent.prototype.addMovieToCategory = function (movie) {
        this.categoriesService.addMovieToCategory(movie, this.category).then(function (result) {
            movie.categoryMovieId = result.newCategoryMovieId;
            movie.isPartOfCategory = true;
        }, function (error) {
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    MoviesComponent.prototype.removeMovieFromCategory = function (movie) {
        this.categoriesService.removeMovieFromCategory(movie, this.category).then(function (result) {
            movie.isPartOfCategory = false;
        }, function (error) {
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    MoviesComponent.prototype.addMovieToHomeScreenGroup = function (movie) {
        this.homeScreenService.addMovieToHomeScreenGroup(movie, this.homeScreenGroup).then(function (result) {
            movie.homeScreenGroupMovieId = result.newHomeScreenGroupMovieId;
            movie.isPartOfHomeScreenGroup = true;
        }, function (error) {
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    MoviesComponent.prototype.removeMovieFromHomeScreenGroup = function (movie) {
        this.homeScreenService.removeMovieFromHomeScreenGroup(movie, this.homeScreenGroup).then(function (result) {
            movie.isPartOfHomeScreenGroup = false;
        }, function (error) {
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MoviesComponent.prototype, "isCategoryEditing", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_Category__WEBPACK_IMPORTED_MODULE_10__["Category"])
    ], MoviesComponent.prototype, "category", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MoviesComponent.prototype, "categoryMovies", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MoviesComponent.prototype, "isHomeScreenGroupEditing", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_HomeScreenGroup__WEBPACK_IMPORTED_MODULE_11__["HomeScreenGroup"])
    ], MoviesComponent.prototype, "homeScreenGroup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MoviesComponent.prototype, "homeScreenGroupMovies", void 0);
    MoviesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-movies",
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/components/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.css */ "./src/app/components/movies/movies.component.css")]
        }),
        __metadata("design:paramtypes", [_services_Firestore_MoviesService_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"],
            _services_Firestore_CategoriesService_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"],
            _services_Firestore_HomeScreenService_home_screen_service__WEBPACK_IMPORTED_MODULE_5__["HomeScreenService"],
            _services_FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseStorageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/components/season-episode-editor/season-episode-editor.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/season-episode-editor/season-episode-editor.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/season-episode-editor/season-episode-editor.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/season-episode-editor/season-episode-editor.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(0, 0, 0, 0.0)\" size=\"medium\" color=\"#e50914\" type=\"timer\"></ngx-spinner>\n\n<mat-dialog-content>\n  <div class=\"row\">\n    <button type=\"button\" style=\"float: right;\" (click)=\"closeEditor()\" class=\"btn btn-default btn-icon\">\n      <i class=\"ti-close\"></i>\n    </button>\n  </div>\n\n  <div class=\"row\">\n    <h2 *ngIf=\"!isEditMode\" style=\"margin-top: -20px;\">Add New Episode</h2>\n    <h2 *ngIf=\"isEditMode\" style=\"margin-top: -20px;\">Edit Existing Episode</h2>\n  </div>\n\n  <br>\n\n  <div class=\"row\">\n    <div class=\"col-sm-10\">\n      <div class=\"form-group\">\n        <label for=\"episodeName\">Episode Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"episodeName\" [(ngModel)]=\"episodeName\" placeholder=\"Episode name\">\n      </div>\n    </div>\n\n    <div class=\"col-sm-2\">\n      <button *ngIf=\"isEditMode\" style=\"margin-top: 25px;\" (click)=\"updateEpisodeName()\" class=\"btn btn-primary\">Update</button>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-10\">\n      <div class=\"form-group\">\n        <label for=\"episodeDescription\">Episode Description</label>\n        <textarea rows=\"4\" cols=\"50\" class=\"form-control\" id=\"episodeDescription\" [(ngModel)]=\"episodeDescription\" placeholder=\"Episode description\"></textarea>\n      </div>\n    </div>\n\n    <div class=\"col-sm-2\">\n      <button *ngIf=\"isEditMode\" style=\"margin-top: 25px;\" (click)=\"updateEpisodeDescription()\" class=\"btn btn-primary\">Update</button>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-10\">\n      <div class=\"form-group\">\n        <label for=\"episodePicture\">Episode Picture</label>\n        <input type=\"file\" class=\"form-control\" id=\"episodePicture\">\n      </div>\n    </div>\n\n    <div class=\"col-sm-2\">\n      <button *ngIf=\"isEditMode\" style=\"margin-top: 25px;\" (click)=\"updateEpisodePicture()\" class=\"btn btn-primary\">Update</button>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <strong style=\"color: #e50914; font-size: 13px\">NB: Recommended picture size is 240px by 140px (width by height)</strong>\n    </div>\n  </div>\n\n  <br>\n\n  <div class=\"row\">\n    <div class=\"col-sm-10\">\n      <div class=\"form-group\">\n        <label for=\"episode\">Episode to upload:</label>\n        <input type=\"file\" class=\"form-control\" id=\"episode\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-10\">\n      <div *ngIf=\"showProgress\" aria-valuemin=\"0\" role=\"progressbar\" class=\"progress-bar progress-bar-animated progress-bar-striped\"\n        attr.aria-valuenow=\"{{progress}}\" aria-valuemax=\"100\" [ngStyle]=\"{width:progress/100 | percent:'1.0-1'}\" style=\" background-color: #e50914\">\n        <strong style=\"color: white\">{{progress}}%</strong>\n      </div>\n    </div>\n  </div>\n\n  <br>\n\n  <div class=\"row\">\n    <button type=\"submit\" style=\"float: right;\" *ngIf=\"!isEditMode\" (click)=\"addNewEpisode()\" class=\"btn btn-primary\">Add Episode</button>\n  </div>\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/components/season-episode-editor/season-episode-editor.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/season-episode-editor/season-episode-editor.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SeasonEpisodeEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonEpisodeEditorComponent", function() { return SeasonEpisodeEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/FirebaseStorage/firebase-storage.service */ "./src/app/services/FirebaseStorage/firebase-storage.service.ts");
/* harmony import */ var _services_Firestore_EpisodesService_episodes_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Firestore/EpisodesService/episodes-service.service */ "./src/app/services/Firestore/EpisodesService/episodes-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _assets_js_demo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/js/demo.js */ "./src/assets/js/demo.js");
/* harmony import */ var _assets_js_demo_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_js_demo_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_Episode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/Episode */ "./src/app/models/Episode.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var SeasonEpisodeEditorComponent = /** @class */ (function () {
    function SeasonEpisodeEditorComponent(episodesService, firebaseStorage, spinner, dialogRef, data) {
        this.episodesService = episodesService;
        this.firebaseStorage = firebaseStorage;
        this.spinner = spinner;
        this.dialogRef = dialogRef;
        this.data = data;
        this.episodeName = "";
        this.episodeDescription = "";
        this.episodeId = "";
        this.isEditMode = false;
        this.showProgress = false;
        this.progress = 0;
        this.isEditMode = data.isEditMode;
        this.tvShow = data.tvShow;
        this.season = data.season;
        if (this.isEditMode) {
            this.episodeName = data.episode.name;
            this.episodeDescription = data.episode.description;
            this.episodeId = data.episode.episodeId;
        }
    }
    SeasonEpisodeEditorComponent.prototype.ngOnInit = function () { };
    SeasonEpisodeEditorComponent.prototype.addNewEpisode = function () {
        var _this = this;
        if (!this.episodeName) {
            demo.showWarningNotification("Please provide a name for the episode.");
            return;
        }
        if (!this.episodeDescription) {
            demo.showWarningNotification("Please provide a description for the episode.");
            return;
        }
        var episodePicture = (document.getElementById("episodePicture")).files[0];
        if (!episodePicture) {
            demo.showWarningNotification("Please select an image file to upload.");
            return;
        }
        var episode = document.getElementById("episode")
            .files[0];
        if (!episode) {
            demo.showWarningNotification("Please select a video file to upload.");
            return;
        }
        this.spinner.show();
        this.showProgress = true;
        var pictureUploadPath = "/TV Shows/" + this.tvShow.name + "/" + this.season.name + "/" + this.episodeName + "/episodePicture";
        // Upload episode picture
        this.firebaseStorage
            .uploadPicture(pictureUploadPath, episodePicture, function (progress) {
            console.log("Uploading... " + Math.round(progress) + "% done");
            _this.progress = Math.round(progress);
        })
            .then(function (pictureUploadResult) {
            var videoUploadPath = "/TV Shows/" + _this.tvShow.name + "/" + _this.season.name + "/" + _this.episodeName + "/episodeVideo";
            _this.firebaseStorage
                .uploadVideo(videoUploadPath, _this.episodeName, pictureUploadResult.downloadURL, episode)
                .then(function (uploadResult) {
                uploadResult.uploadTask.then(function (snapshot) {
                    if (snapshot.state !== "success") {
                        demo.showErrorNotification("An error occured.");
                        return;
                    }
                    snapshot.ref.getDownloadURL().then(function (videoDownloadURL) {
                        var newEpisode = new _models_Episode__WEBPACK_IMPORTED_MODULE_6__["Episode"]();
                        newEpisode.name = _this.episodeName;
                        newEpisode.description = _this.episodeDescription;
                        newEpisode.picture = pictureUploadResult.downloadURL;
                        newEpisode.seasonId = _this.season.seasonId;
                        newEpisode.seasonName = _this.season.name;
                        newEpisode.tvShowId = _this.tvShow.tvShowId;
                        newEpisode.tvShowName = _this.tvShow.name;
                        newEpisode.videoUrl = videoDownloadURL;
                        // If upload is successful, add the artist to the firestore
                        _this.episodesService
                            .addNewEpisode(_this.tvShow, _this.season, newEpisode)
                            .then(function (result) {
                            _this.spinner.hide();
                            _this.showProgress = false;
                            newEpisode.episodeId = result.newEpisodeId;
                            _this.dialogRef.close({
                                isSuccess: true,
                                newEpisode: newEpisode
                            });
                        }, function (error) {
                            _this.spinner.hide();
                            _this.showProgress = false;
                            demo.showErrorNotification("An error occured: " + error);
                        });
                    });
                });
            });
            _this.spinner.hide();
            _this.dialogRef.close();
        }, function (error) {
            _this.spinner.hide();
            _this.showProgress = false;
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    SeasonEpisodeEditorComponent.prototype.updateEpisodeName = function () {
        var _this = this;
        if (!this.episodeName) {
            demo.showWarningNotification("Please provide a name for the episode.");
            return;
        }
        this.episodesService
            .editEpisodeName(this.tvShow, this.season, this.episodeId, this.episodeName)
            .then(function (result) {
            _this.dialogRef.close({
                isSuccess: true,
                episodeNameUpdated: true,
                newEpisodeName: _this.episodeName
            });
        }, function (error) {
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    SeasonEpisodeEditorComponent.prototype.updateEpisodeDescription = function () {
        var _this = this;
        if (!this.episodeDescription) {
            demo.showWarningNotification("Please provide a description for the episode.");
            return;
        }
        this.episodesService
            .editEpisodeDescription(this.tvShow, this.season, this.episodeId, this.episodeDescription)
            .then(function (result) {
            _this.dialogRef.close({
                isSuccess: true,
                episodeDescriptionUpdated: true,
                newEpisodeDescription: _this.episodeDescription
            });
        }, function (error) {
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    SeasonEpisodeEditorComponent.prototype.updateEpisodePicture = function () {
        var _this = this;
        var episodePicture = (document.getElementById("episodePicture")).files[0];
        if (!episodePicture) {
            demo.showWarningNotification("Please select an image file to upload.");
            return;
        }
        this.spinner.show();
        this.showProgress = true;
        var uploadPath = "/TV Shows/" + this.tvShow.name + "/" + this.season.name + "/" + this.episodeName + "/episodePicture";
        // Upload episode picture
        this.firebaseStorage
            .uploadPicture(uploadPath, episodePicture, function (progress) {
            console.log("Uploading... " + Math.round(progress) + "% done");
            _this.progress = Math.round(progress);
        })
            .then(function (uploadResult) {
            _this.episodesService
                .editEpisodePicture(_this.tvShow, _this.season, _this.episodeId, uploadResult.downloadURL)
                .then(function (result) {
                _this.spinner.hide();
                _this.showProgress = false;
                _this.dialogRef.close({
                    isSuccess: true,
                    episodePictureUpdated: true,
                    newEpisodePicture: uploadResult.downloadURL
                });
            }, function (error) {
                _this.spinner.hide();
                _this.showProgress = false;
                demo.showErrorNotification("An error occured: " + error);
            });
        }, function (error) {
            _this.spinner.hide();
            _this.showProgress = false;
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    SeasonEpisodeEditorComponent.prototype.closeEditor = function () {
        this.dialogRef.close({
            isSuccess: false
        });
    };
    SeasonEpisodeEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-season-episode-editor",
            template: __webpack_require__(/*! ./season-episode-editor.component.html */ "./src/app/components/season-episode-editor/season-episode-editor.component.html"),
            styles: [__webpack_require__(/*! ./season-episode-editor.component.css */ "./src/app/components/season-episode-editor/season-episode-editor.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_Firestore_EpisodesService_episodes_service_service__WEBPACK_IMPORTED_MODULE_2__["EpisodesService"],
            _services_FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseStorageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], SeasonEpisodeEditorComponent);
    return SeasonEpisodeEditorComponent;
}());



/***/ }),

/***/ "./src/app/components/season-episode-player/season-episode-player.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/season-episode-player/season-episode-player.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/season-episode-player/season-episode-player.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/season-episode-player/season-episode-player.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <video style=\"width: 500px; height: 400px;\" controls autoplay>\n    <source src=\"{{episode.videoUrl}}\" type=\"video/mp4\">\n  </video>"

/***/ }),

/***/ "./src/app/components/season-episode-player/season-episode-player.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/season-episode-player/season-episode-player.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SeasonEpisodePlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonEpisodePlayerComponent", function() { return SeasonEpisodePlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var SeasonEpisodePlayerComponent = /** @class */ (function () {
    function SeasonEpisodePlayerComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.episode = data.episode;
    }
    SeasonEpisodePlayerComponent.prototype.ngOnInit = function () { };
    SeasonEpisodePlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-season-episode-player",
            template: __webpack_require__(/*! ./season-episode-player.component.html */ "./src/app/components/season-episode-player/season-episode-player.component.html"),
            styles: [__webpack_require__(/*! ./season-episode-player.component.css */ "./src/app/components/season-episode-player/season-episode-player.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], SeasonEpisodePlayerComponent);
    return SeasonEpisodePlayerComponent;
}());



/***/ }),

/***/ "./src/app/components/seasons-episodes/seasons-episodes.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/seasons-episodes/seasons-episodes.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/seasons-episodes/seasons-episodes.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/seasons-episodes/seasons-episodes.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(0, 0, 0, 0.0)\" size=\"medium\" color=\"#e50914\" type=\"timer\"></ngx-spinner>\n\n<div class=\"row\">\n  <h2 style=\"margin-top: -10px;\">Season Episodes</h2>\n</div>\n\n<mat-dialog-content>\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <button type=\"button\" (click)=\"addNewSeasonEpisode()\" style=\"margin-left: 30px;\" class=\"btn btn-default btn-with-icon\">\n        Add New Episode\n      </button>\n    </div>\n  </div>\n\n  <br>\n  <br>\n  <br>\n\n  <div class=\"col-md-3\" *ngFor=\"let episode of seasonEpisodes\" style=\"min-width: 300px; max-height: 400px;\">\n    <div class=\"card card-profile\">\n      <img src=\"{{episode.picture}}\">\n\n      <div class=\"card-body\">\n        <h4 class=\"card-title line-break\">{{episode.name}}</h4>\n        <h6 class=\"card-category\">{{episode.seasonName}}</h6>\n        <p class=\"card-description\">{{episode.tvShowName}}</p>\n\n        <div class=\"card-footer text-center\">\n          <a (click)=\"edit(episode)\" class=\"btn btn-with-icon btn-outline-info btn-info\" style=\"margin: 20px 5px 10px 5px\" data-toggle=\"tooltip\"\n            data-placement=\"bottom\" title=\"Edit\">\n            <i class=\"ti-pencil\" aria-hidden=\"true\"></i>\n          </a>\n\n          <a (click)=\"delete(episode)\" class=\"btn btn-with-icon btn-outline-danger btn-danger\" style=\"margin: 20px 5px 10px 5px\" data-toggle=\"tooltip\"\n            data-placement=\"bottom\" title=\"Delete\">\n            <i class=\"ti-trash\" aria-hidden=\"true\"></i>\n          </a>\n\n          <a (click)=\"preview(episode)\" class=\"btn btn-with-icon btn-outline-success btn-success\" style=\"margin: 20px 5px 10px 5px\"\n            data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Preview episode\">\n            <i class=\"ti-control-play\" aria-hidden=\"true\"></i>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/components/seasons-episodes/seasons-episodes.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/seasons-episodes/seasons-episodes.component.ts ***!
  \***************************************************************************/
/*! exports provided: SeasonsEpisodesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonsEpisodesComponent", function() { return SeasonsEpisodesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/FirebaseStorage/firebase-storage.service */ "./src/app/services/FirebaseStorage/firebase-storage.service.ts");
/* harmony import */ var _services_Firestore_EpisodesService_episodes_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Firestore/EpisodesService/episodes-service.service */ "./src/app/services/Firestore/EpisodesService/episodes-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _assets_js_demo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/js/demo.js */ "./src/assets/js/demo.js");
/* harmony import */ var _assets_js_demo_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_js_demo_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _season_episode_editor_season_episode_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../season-episode-editor/season-episode-editor.component */ "./src/app/components/season-episode-editor/season-episode-editor.component.ts");
/* harmony import */ var _season_episode_player_season_episode_player_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../season-episode-player/season-episode-player.component */ "./src/app/components/season-episode-player/season-episode-player.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var SeasonsEpisodesComponent = /** @class */ (function () {
    function SeasonsEpisodesComponent(episodesService, firebaseStorage, spinner, dialog, data) {
        this.episodesService = episodesService;
        this.firebaseStorage = firebaseStorage;
        this.spinner = spinner;
        this.dialog = dialog;
        this.data = data;
        this.seasonEpisodes = [];
        this.tvShow = data.tvShow;
        this.season = data.season;
    }
    SeasonsEpisodesComponent.prototype.ngOnInit = function () {
        this.getSeasonEpisodes();
    };
    SeasonsEpisodesComponent.prototype.getSeasonEpisodes = function () {
        var _this = this;
        this.spinner.show();
        this.episodesService
            .getEpisodes(this.tvShow, this.season)
            .then(function (result) {
            _this.seasonEpisodes = result.seasonEpisodes;
            _this.spinner.hide();
        });
    };
    SeasonsEpisodesComponent.prototype.addNewSeasonEpisode = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_season_episode_editor_season_episode_editor_component__WEBPACK_IMPORTED_MODULE_7__["SeasonEpisodeEditorComponent"], {
            width: "500px",
            data: {
                isEditMode: false,
                tvShow: this.tvShow,
                season: this.season
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.isSuccess) {
                _this.seasonEpisodes.push(result.newEpisode);
                demo.showSuccessNotification("Episode successfully added!");
            }
        });
    };
    SeasonsEpisodesComponent.prototype.edit = function (episode) {
        var dialogRef = this.dialog.open(_season_episode_editor_season_episode_editor_component__WEBPACK_IMPORTED_MODULE_7__["SeasonEpisodeEditorComponent"], {
            width: "650px",
            data: {
                isEditMode: true,
                tvShow: this.tvShow,
                season: this.season,
                episode: episode
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.isSuccess) {
                if (result.episodeNameUpdated) {
                    // Edit name
                    episode.name = result.newEpisodeName;
                    demo.showSuccessNotification("Season's episode name successfully updated!");
                }
                else if (result.episodeDescriptionUpdated) {
                    // Edit description
                    episode.description = result.newEpisodeDescription;
                    demo.showSuccessNotification("Season's episode description successfully updated!");
                }
                else if (result.episodePictureUpdated) {
                    // Edit picture
                    episode.picture = result.newEpisodePicture;
                    demo.showSuccessNotification("Season's episode picture successfully updated!");
                }
            }
        });
    };
    SeasonsEpisodesComponent.prototype.delete = function (episode) {
        var _this = this;
        var options = {
            title: "Delete season episode?",
            text: "Are you sure you want to delete this episode?",
            icon: "error",
            buttons: ["Cancel", "Ok"],
            dangerMode: true
        };
        sweetalert__WEBPACK_IMPORTED_MODULE_6___default()(options).then(function (willDelete) {
            if (willDelete) {
                _this.spinner.show();
                // Delete artist
                _this.episodesService
                    .deleteEpisode(_this.tvShow, _this.season, episode)
                    .then(function (result) {
                    _this.removeEpisodeFromList(episode);
                    demo.showSuccessNotification("Episode successfully deleted!");
                    _this.spinner.hide();
                }, function (error) {
                    _this.spinner.hide();
                    demo.showErrorNotification("An error occured: " + error);
                });
            }
        });
    };
    SeasonsEpisodesComponent.prototype.removeEpisodeFromList = function (episode) {
        var index = this.seasonEpisodes.indexOf(episode);
        if (index > -1) {
            this.seasonEpisodes.splice(index, 1);
        }
    };
    SeasonsEpisodesComponent.prototype.preview = function (episode) {
        var dialogRef = this.dialog.open(_season_episode_player_season_episode_player_component__WEBPACK_IMPORTED_MODULE_8__["SeasonEpisodePlayerComponent"], {
            width: "550px",
            height: "450px",
            data: {
                episode: episode
            }
        });
        dialogRef.afterClosed().subscribe(function (result) { });
    };
    SeasonsEpisodesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-seasons-episodes",
            template: __webpack_require__(/*! ./seasons-episodes.component.html */ "./src/app/components/seasons-episodes/seasons-episodes.component.html"),
            styles: [__webpack_require__(/*! ./seasons-episodes.component.css */ "./src/app/components/seasons-episodes/seasons-episodes.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_Firestore_EpisodesService_episodes_service_service__WEBPACK_IMPORTED_MODULE_2__["EpisodesService"],
            _services_FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseStorageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], Object])
    ], SeasonsEpisodesComponent);
    return SeasonsEpisodesComponent;
}());



/***/ }),

/***/ "./src/app/components/tv-show-editor/tv-show-editor.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/tv-show-editor/tv-show-editor.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tv-show-editor/tv-show-editor.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/tv-show-editor/tv-show-editor.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(0, 0, 0, 0.0)\" size=\"medium\" color=\"#e50914\" type=\"timer\"></ngx-spinner>\n\n<div class=\"row\">\n  <button type=\"button\" style=\"float: right;\" (click)=\"closeEditor()\" class=\"btn btn-default btn-icon\">\n    <i class=\"ti-close\"></i>\n  </button>\n</div>\n\n<div class=\"row\">\n  <h2 *ngIf=\"!isEditMode\" style=\"margin-top: -20px;\">Add New TV Show</h2>\n  <h2 *ngIf=\"isEditMode\" style=\"margin-top: -20px;\">Edit Existing TV Show</h2>\n</div>\n\n<br>\n\n<div class=\"row\">\n  <div class=\"col-sm-10\">\n    <div class=\"form-group\">\n      <label for=\"tvShowName\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"tvShowName\" [(ngModel)]=\"tvShowName\" placeholder=\"TV Show name\">\n    </div>\n  </div>\n\n  <div class=\"col-sm-2\">\n    <button *ngIf=\"isEditMode\" style=\"margin-top: 25px;\" (click)=\"updateTvShowName()\" class=\"btn btn-primary\">Update</button>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-10\">\n    <div class=\"form-group\">\n      <label for=\"tvShowPicture\">Home Screen Picture</label>\n      <input type=\"file\" class=\"form-control\" id=\"tvShowPicture\">\n    </div>\n  </div>\n\n  <div class=\"col-sm-2\">\n    <button *ngIf=\"isEditMode\" style=\"margin-top: 25px;\" (click)=\"updateTvShowPicture()\" class=\"btn btn-primary\">Update</button>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <strong style=\"color: #e50914; font-size: 13px\">NB: Recommended picture size is 200px by 280px (width by height)</strong>\n  </div>\n</div>\n\n<br>\n\n<div class=\"row\">\n    <div class=\"col-sm-10\">\n      <div class=\"form-group\">\n        <label for=\"detailsPicture\">Details Picture</label>\n        <input type=\"file\" class=\"form-control\" id=\"detailsPicture\">\n      </div>\n    </div>\n  \n    <div class=\"col-sm-2\">\n      <button *ngIf=\"isEditMode\" style=\"margin-top: 25px;\" (click)=\"updateDetailsPicture()\" class=\"btn btn-primary\">Update</button>\n    </div>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <strong style=\"color: #e50914; font-size: 13px\">NB: Recommended picture size is 800px by 450px (width by height)</strong>\n    </div>\n  </div>\n  \n  <br>\n\n<div class=\"row\">\n  <div class=\"col-sm-10\">\n    <div class=\"form-group\">\n      <label for=\"tvShowYear\">Release Year</label>\n      <select class=\"form-control\" [(ngModel)]=\"tvShowYear\">\n        <option *ngFor=\"let year of years\" id=\"tvShowYear\" [ngValue]=\"year\">{{year}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"col-sm-2\">\n    <button *ngIf=\"isEditMode\" style=\"margin-top: 25px;\" (click)=\"updateTvShowReleaseYear()\" class=\"btn btn-primary\">Update</button>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-10\">\n    <div class=\"form-group\">\n      <label for=\"tvShowRating\">Rating</label>\n      <select class=\"form-control\" [(ngModel)]=\"tvShowRating\">\n        <option *ngFor=\"let rating of ratings\" id=\"tvShowRating\" [ngValue]=\"rating\">{{rating}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"col-sm-2\">\n    <button *ngIf=\"isEditMode\" style=\"margin-top: 25px;\" (click)=\"updateTvShowRating()\" class=\"btn btn-primary\">Update</button>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-10\">\n    <div class=\"form-group\">\n      <label for=\"tvShowDescription\">Description</label>\n      <textarea rows=\"4\" cols=\"50\" class=\"form-control\" id=\"tvShowDescription\" [(ngModel)]=\"tvShowDescription\" placeholder=\"TV Show description\"></textarea>\n    </div>\n  </div>\n\n  <div class=\"col-sm-2\">\n    <button *ngIf=\"isEditMode\" style=\"margin-top: 25px;\" (click)=\"updateTvShowDescription()\" class=\"btn btn-primary\">Update</button>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-10\">\n    <div *ngIf=\"showProgress\" aria-valuemin=\"0\" role=\"progressbar\" class=\"progress-bar progress-bar-animated progress-bar-striped\"\n      attr.aria-valuenow=\"{{progress}}\" aria-valuemax=\"100\" [ngStyle]=\"{width:progress/100 | percent:'1.0-1'}\" style=\" background-color: #e50914\">\n      <strong style=\"color: white\">{{progress}}%</strong>\n    </div>\n  </div>\n</div>\n\n<br>\n\n<div class=\"row\">\n  <button type=\"submit\" style=\"float: right;\" *ngIf=\"!isEditMode\" (click)=\"addNewTvShow()\" class=\"btn btn-primary\">Add TV Show</button>\n</div>"

/***/ }),

/***/ "./src/app/components/tv-show-editor/tv-show-editor.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/tv-show-editor/tv-show-editor.component.ts ***!
  \***********************************************************************/
/*! exports provided: TvShowEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvShowEditorComponent", function() { return TvShowEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/FirebaseStorage/firebase-storage.service */ "./src/app/services/FirebaseStorage/firebase-storage.service.ts");
/* harmony import */ var _services_Firestore_TvShowsService_tv_shows_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Firestore/TvShowsService/tv-shows-service.service */ "./src/app/services/Firestore/TvShowsService/tv-shows-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _assets_js_demo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/js/demo.js */ "./src/assets/js/demo.js");
/* harmony import */ var _assets_js_demo_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_js_demo_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_TvShow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/TvShow */ "./src/app/models/TvShow.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var TvShowEditorComponent = /** @class */ (function () {
    function TvShowEditorComponent(tvShowsService, firebaseStorage, spinner, dialogRef, data) {
        this.tvShowsService = tvShowsService;
        this.firebaseStorage = firebaseStorage;
        this.spinner = spinner;
        this.dialogRef = dialogRef;
        this.data = data;
        this.tvShowName = "";
        this.tvShowId = "";
        this.tvShowYear = new Date().getFullYear();
        this.tvShowRating = "G";
        this.tvShowDescription = "";
        this.isEditMode = false;
        this.showProgress = false;
        this.progress = 0;
        this.years = [];
        this.ratings = [];
        this.isEditMode = data.isEditMode;
        if (this.isEditMode) {
            this.tvShowName = data.tvShow.name;
            this.tvShowId = data.tvShow.tvShowId;
            this.tvShowYear = data.tvShow.releaseYear;
            this.tvShowRating = data.tvShow.rating;
            this.tvShowDescription = data.tvShow.description;
        }
    }
    TvShowEditorComponent.prototype.ngOnInit = function () {
        this.initialiseYears();
        this.initialiseRatings();
    };
    TvShowEditorComponent.prototype.initialiseYears = function () {
        for (var year = 1900; year <= new Date().getFullYear(); year++) {
            this.years.push(year);
        }
    };
    TvShowEditorComponent.prototype.initialiseRatings = function () {
        this.ratings = ["G", "PG", "M", "MA 15+", "R18+"];
    };
    TvShowEditorComponent.prototype.addNewTvShow = function () {
        var _this = this;
        if (!this.tvShowName) {
            demo.showWarningNotification("Please provide a name for the TV show.");
            return;
        }
        var tvShowPicture = (document.getElementById("tvShowPicture")).files[0];
        if (!tvShowPicture) {
            demo.showWarningNotification("Please select a home screen image file to upload.");
            return;
        }
        var detailsPicture = (document.getElementById("detailsPicture")).files[0];
        if (!detailsPicture) {
            demo.showWarningNotification("Please select a details image file to upload.");
            return;
        }
        if (!this.tvShowDescription) {
            demo.showWarningNotification("Please provide a description for the TV show.");
            return;
        }
        this.spinner.show();
        this.showProgress = true;
        var homeScreenpictureUploadPath = "/TV Shows/" + this.tvShowName + "/tvShowPicture";
        // Upload TV show picture
        this.firebaseStorage
            .uploadPicture(homeScreenpictureUploadPath, tvShowPicture, function (progress) {
            console.log("Uploading... " + Math.round(progress) + "% done");
            _this.progress = Math.round(progress);
        })
            .then(function (homeScreenPictureUploadResult) {
            _this.progress = 0;
            var detailsPictureUploadPath = "/TV Shows/" + _this.tvShowName + "/detailsPicture";
            _this.firebaseStorage
                .uploadPicture(detailsPictureUploadPath, detailsPicture, function (progress) {
                console.log("Uploading... " + Math.round(progress) + "% done");
                _this.progress = Math.round(progress);
            })
                .then(function (detailsPictureUploadResult) {
                var newTvShow = new _models_TvShow__WEBPACK_IMPORTED_MODULE_6__["TvShow"]();
                newTvShow.name = _this.tvShowName;
                newTvShow.picture = homeScreenPictureUploadResult.downloadURL;
                newTvShow.detailsPicture = detailsPictureUploadResult.downloadURL;
                newTvShow.releaseYear = _this.tvShowYear;
                newTvShow.rating = _this.tvShowRating;
                newTvShow.description = _this.tvShowDescription;
                // If upload is successful, add the artist to the firestore
                _this.tvShowsService.addNewTvShow(newTvShow).then(function (result) {
                    _this.spinner.hide();
                    _this.showProgress = false;
                    newTvShow.tvShowId = result.newTvShowId;
                    _this.dialogRef.close({
                        isSuccess: true,
                        newTvShow: newTvShow
                    });
                }, function (error) {
                    _this.spinner.hide();
                    _this.showProgress = false;
                    demo.showErrorNotification("An error occured: " + error);
                });
            }, function (error) {
                _this.spinner.hide();
                _this.showProgress = false;
                demo.showErrorNotification("An error occured: " + error);
            });
        });
    };
    TvShowEditorComponent.prototype.updateTvShowName = function () {
        var _this = this;
        if (!this.tvShowName) {
            demo.showWarningNotification("Please provide a name for the TV show.");
            return;
        }
        this.tvShowsService.editTvShowName(this.tvShowId, this.tvShowName).then(function (result) {
            _this.dialogRef.close({
                isSuccess: true,
                tvShowNameUpdated: true,
                newTvShowName: _this.tvShowName
            });
        }, function (error) {
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    TvShowEditorComponent.prototype.updateTvShowPicture = function () {
        var _this = this;
        var tvShowPicture = (document.getElementById("tvShowPicture")).files[0];
        if (!tvShowPicture) {
            demo.showWarningNotification("Please select an image file to upload.");
            return;
        }
        this.spinner.show();
        this.showProgress = true;
        var uploadPath = "/TV Shows/" + this.tvShowName + "/tvShowPicture";
        // Update TV show picture
        this.firebaseStorage
            .uploadPicture(uploadPath, tvShowPicture, function (progress) {
            console.log("Uploading... " + Math.round(progress) + "% done");
            _this.progress = Math.round(progress);
        })
            .then(function (uploadResult) {
            // If upload is successful, edit the TV show picture
            _this.tvShowsService
                .editTvShowPicture(_this.tvShowId, uploadResult.downloadURL)
                .then(function (result) {
                _this.spinner.hide();
                _this.showProgress = false;
                _this.dialogRef.close({
                    isSuccess: true,
                    tvShowPictureUpdated: true,
                    newTvShowPicture: uploadResult.downloadURL
                });
            }, function (error) {
                _this.spinner.hide();
                _this.showProgress = false;
                demo.showErrorNotification("An error occured: " + error);
            });
        }, function (error) {
            _this.spinner.hide();
            _this.showProgress = false;
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    TvShowEditorComponent.prototype.updateDetailsPicture = function () {
        var _this = this;
        var detailsPicture = (document.getElementById("detailsPicture")).files[0];
        if (!detailsPicture) {
            demo.showWarningNotification("Please select a details image file to upload.");
            return;
        }
        this.spinner.show();
        this.showProgress = true;
        var detailsPictureUploadPath = "/TV Shows/" + this.tvShowName + "/detailsPicture";
        // Update details picture
        this.firebaseStorage
            .uploadPicture(detailsPictureUploadPath, detailsPicture, function (progress) {
            console.log("Uploading... " + Math.round(progress) + "% done");
            _this.progress = Math.round(progress);
        })
            .then(function (detailsPictureUploadResult) {
            // If upload is successful, edit the TV show picture
            _this.tvShowsService
                .editDetailsPicture(_this.tvShowId, detailsPictureUploadResult.downloadURL)
                .then(function (result) {
                _this.spinner.hide();
                _this.showProgress = false;
                _this.dialogRef.close({
                    isSuccess: true,
                    detailsPictureUpdated: true,
                    newDetailsPicture: detailsPictureUploadResult.downloadURL
                });
            }, function (error) {
                _this.spinner.hide();
                _this.showProgress = false;
                demo.showErrorNotification("An error occured: " + error);
            });
        }, function (error) {
            _this.spinner.hide();
            _this.showProgress = false;
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    TvShowEditorComponent.prototype.updateTvShowReleaseYear = function () {
        var _this = this;
        this.tvShowsService.editTvReleaseYear(this.tvShowId, this.tvShowYear).then(function (result) {
            _this.dialogRef.close({
                isSuccess: true,
                tvShowYearUpdated: true,
                newTvShowYear: _this.tvShowYear
            });
        }, function (error) {
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    TvShowEditorComponent.prototype.updateTvShowRating = function () {
        var _this = this;
        this.tvShowsService.editTvRating(this.tvShowId, this.tvShowRating).then(function (result) {
            _this.dialogRef.close({
                isSuccess: true,
                tvShowRatingUpdated: true,
                newTvShowRating: _this.tvShowRating
            });
        }, function (error) {
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    TvShowEditorComponent.prototype.updateTvShowDescription = function () {
        var _this = this;
        this.tvShowsService
            .editTvDescription(this.tvShowId, this.tvShowDescription)
            .then(function (result) {
            _this.dialogRef.close({
                isSuccess: true,
                tvShowDescriptionUpdated: true,
                newTvShowDescription: _this.tvShowDescription
            });
        }, function (error) {
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    TvShowEditorComponent.prototype.closeEditor = function () {
        this.dialogRef.close({
            isSuccess: false
        });
    };
    TvShowEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-tv-show-editor",
            template: __webpack_require__(/*! ./tv-show-editor.component.html */ "./src/app/components/tv-show-editor/tv-show-editor.component.html"),
            styles: [__webpack_require__(/*! ./tv-show-editor.component.css */ "./src/app/components/tv-show-editor/tv-show-editor.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_Firestore_TvShowsService_tv_shows_service_service__WEBPACK_IMPORTED_MODULE_2__["TvShowsService"],
            _services_FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseStorageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], TvShowEditorComponent);
    return TvShowEditorComponent;
}());



/***/ }),

/***/ "./src/app/components/tv-show-season-editor/tv-show-season-editor.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/tv-show-season-editor/tv-show-season-editor.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tv-show-season-editor/tv-show-season-editor.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/tv-show-season-editor/tv-show-season-editor.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(0, 0, 0, 0.0)\" size=\"medium\" color=\"#e50914\" type=\"timer\"></ngx-spinner>\n\n<div class=\"row\">\n  <button type=\"button\" style=\"float: right;\" (click)=\"closeEditor()\" class=\"btn btn-default btn-icon\">\n    <i class=\"ti-close\"></i>\n  </button>\n</div>\n\n<div class=\"row\">\n  <h2 *ngIf=\"!isEditMode\" style=\"margin-top: -20px;\">Add New Season</h2>\n  <h2 *ngIf=\"isEditMode\" style=\"margin-top: -20px;\">Edit Existing Season</h2>\n</div>\n\n<br>\n\n<div class=\"row\">\n  <div class=\"col-sm-10\">\n    <div class=\"form-group\">\n      <label for=\"seasonName\">Season Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"seasonName\" [(ngModel)]=\"seasonName\" placeholder=\"Season name\">\n    </div>\n  </div>\n\n  <div class=\"col-sm-2\">\n    <button *ngIf=\"isEditMode\" style=\"margin-top: 25px;\" (click)=\"updateSeasonName()\" class=\"btn btn-primary\">Update</button>\n  </div>\n</div>\n\n<br>\n\n<div class=\"row\">\n  <button type=\"submit\" style=\"float: right;\" *ngIf=\"!isEditMode\" (click)=\"addNewSeason()\" class=\"btn btn-primary\">Add Season</button>\n</div>"

/***/ }),

/***/ "./src/app/components/tv-show-season-editor/tv-show-season-editor.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/tv-show-season-editor/tv-show-season-editor.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TvShowSeasonEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvShowSeasonEditorComponent", function() { return TvShowSeasonEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/FirebaseStorage/firebase-storage.service */ "./src/app/services/FirebaseStorage/firebase-storage.service.ts");
/* harmony import */ var _services_Firestore_SeasonsService_seasons_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Firestore/SeasonsService/seasons-service.service */ "./src/app/services/Firestore/SeasonsService/seasons-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _assets_js_demo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/js/demo.js */ "./src/assets/js/demo.js");
/* harmony import */ var _assets_js_demo_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_js_demo_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_Season__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/Season */ "./src/app/models/Season.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var TvShowSeasonEditorComponent = /** @class */ (function () {
    function TvShowSeasonEditorComponent(seasonsService, firebaseStorage, spinner, dialogRef, data) {
        this.seasonsService = seasonsService;
        this.firebaseStorage = firebaseStorage;
        this.spinner = spinner;
        this.dialogRef = dialogRef;
        this.data = data;
        this.seasonName = "";
        this.seasonId = "";
        this.isEditMode = false;
        this.isEditMode = data.isEditMode;
        this.tvShow = data.tvShow;
        if (this.isEditMode) {
            this.seasonName = data.season.name;
            this.seasonId = data.season.seasonId;
        }
    }
    TvShowSeasonEditorComponent.prototype.ngOnInit = function () { };
    TvShowSeasonEditorComponent.prototype.addNewSeason = function () {
        var _this = this;
        if (!this.seasonName) {
            demo.showWarningNotification("Please provide a name for the TV show season.");
            return;
        }
        var season = new _models_Season__WEBPACK_IMPORTED_MODULE_6__["Season"]();
        season.name = this.seasonName;
        season.tvShowId = this.tvShow.tvShowId;
        season.tvShowName = this.tvShow.name;
        // If upload is successful, add the artist to the firestore
        this.seasonsService.addNewSeason(this.tvShow, season).then(function (result) {
            _this.spinner.hide();
            season.seasonId = result.newSeasonId;
            _this.dialogRef.close({
                isSuccess: true,
                newSeason: season
            });
        }, function (error) {
            _this.spinner.hide();
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    TvShowSeasonEditorComponent.prototype.updateSeasonName = function () {
        var _this = this;
        if (!this.seasonName) {
            demo.showWarningNotification("Please provide a name for the TV show season.");
            return;
        }
        this.seasonsService.editSeasonName(this.tvShow, this.seasonId, this.seasonName).then(function (result) {
            _this.dialogRef.close({
                isSuccess: true,
                newSeasonName: _this.seasonName
            });
        }, function (error) {
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    TvShowSeasonEditorComponent.prototype.closeEditor = function () {
        this.dialogRef.close({
            isSuccess: false
        });
    };
    TvShowSeasonEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-tv-show-season-editor",
            template: __webpack_require__(/*! ./tv-show-season-editor.component.html */ "./src/app/components/tv-show-season-editor/tv-show-season-editor.component.html"),
            styles: [__webpack_require__(/*! ./tv-show-season-editor.component.css */ "./src/app/components/tv-show-season-editor/tv-show-season-editor.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_Firestore_SeasonsService_seasons_service_service__WEBPACK_IMPORTED_MODULE_2__["SeasonsService"],
            _services_FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseStorageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], TvShowSeasonEditorComponent);
    return TvShowSeasonEditorComponent;
}());



/***/ }),

/***/ "./src/app/components/tv-show-seasons/tv-show-seasons.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/tv-show-seasons/tv-show-seasons.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tv-show-seasons/tv-show-seasons.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/tv-show-seasons/tv-show-seasons.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(0, 0, 0, 0.0)\" size=\"medium\" color=\"#e50914\" type=\"timer\"></ngx-spinner>\n\n<div class=\"row\">\n  <h2 style=\"margin-top: -10px;\">TV Show Seasons</h2>\n</div>\n\n<mat-dialog-content>\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <button type=\"button\" (click)=\"addNewTvShowSeason()\" style=\"margin-left: 30px;\" class=\"btn btn-default btn-with-icon\">\n        Add New Season\n      </button>\n    </div>\n  </div>\n\n  <div class=\"col-md-3\" *ngFor=\"let season of tvShowSeasons\" style=\"min-width: 300px;\">\n    <div class=\"card card-profile\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">{{season.name}}</h4>\n        <h6 class=\"card-category\">{{season.tvShowName}}</h6>\n\n        <div class=\"card-footer text-center\">\n          <a (click)=\"edit(season)\" class=\"btn btn-with-icon btn-outline-info btn-info\" style=\"margin: 20px 5px 10px 5px\" data-toggle=\"tooltip\"\n            data-placement=\"bottom\" title=\"Edit\">\n            <i class=\"ti-pencil\" aria-hidden=\"true\"></i>\n          </a>\n\n          <a (click)=\"delete(season)\" class=\"btn btn-with-icon btn-outline-danger btn-danger\" style=\"margin: 20px 5px 10px 5px\" data-toggle=\"tooltip\"\n            data-placement=\"bottom\" title=\"Delete\">\n            <i class=\"ti-trash\" aria-hidden=\"true\"></i>\n          </a>\n\n          <a (click)=\"viewEpisodes(season)\" class=\"btn btn-with-icon btn-outline-success btn-success\" style=\"margin: 20px 5px 10px 5px\"\n            data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"View Episodes\">\n            <i class=\"ti-desktop\" aria-hidden=\"true\"></i>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/components/tv-show-seasons/tv-show-seasons.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/tv-show-seasons/tv-show-seasons.component.ts ***!
  \*************************************************************************/
/*! exports provided: TvShowSeasonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvShowSeasonsComponent", function() { return TvShowSeasonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/FirebaseStorage/firebase-storage.service */ "./src/app/services/FirebaseStorage/firebase-storage.service.ts");
/* harmony import */ var _services_Firestore_SeasonsService_seasons_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Firestore/SeasonsService/seasons-service.service */ "./src/app/services/Firestore/SeasonsService/seasons-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _assets_js_demo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/js/demo.js */ "./src/assets/js/demo.js");
/* harmony import */ var _assets_js_demo_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_js_demo_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tv_show_season_editor_tv_show_season_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tv-show-season-editor/tv-show-season-editor.component */ "./src/app/components/tv-show-season-editor/tv-show-season-editor.component.ts");
/* harmony import */ var _seasons_episodes_seasons_episodes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../seasons-episodes/seasons-episodes.component */ "./src/app/components/seasons-episodes/seasons-episodes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var TvShowSeasonsComponent = /** @class */ (function () {
    function TvShowSeasonsComponent(seasonsService, firebaseStorage, spinner, dialog, data) {
        this.seasonsService = seasonsService;
        this.firebaseStorage = firebaseStorage;
        this.spinner = spinner;
        this.dialog = dialog;
        this.data = data;
        this.tvShowSeasons = [];
        this.tvShow = data.tvShow;
    }
    TvShowSeasonsComponent.prototype.ngOnInit = function () {
        this.getTvShowSeasons();
    };
    TvShowSeasonsComponent.prototype.getTvShowSeasons = function () {
        var _this = this;
        this.spinner.show();
        this.seasonsService.getSeasons(this.tvShow).then(function (result) {
            _this.tvShowSeasons = result.tvShowSeasons;
            _this.spinner.hide();
        }, function (error) {
            console.error(error);
            _this.spinner.hide();
        });
    };
    TvShowSeasonsComponent.prototype.addNewTvShowSeason = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_tv_show_season_editor_tv_show_season_editor_component__WEBPACK_IMPORTED_MODULE_7__["TvShowSeasonEditorComponent"], {
            width: "500px",
            data: {
                isEditMode: false,
                tvShow: this.tvShow
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.isSuccess) {
                // Add new tv show season
                _this.tvShowSeasons.push(result.newSeason);
                demo.showSuccessNotification("TV show season successfully added!");
            }
        });
    };
    TvShowSeasonsComponent.prototype.edit = function (season) {
        var dialogRef = this.dialog.open(_tv_show_season_editor_tv_show_season_editor_component__WEBPACK_IMPORTED_MODULE_7__["TvShowSeasonEditorComponent"], {
            width: "650px",
            data: {
                isEditMode: true,
                tvShow: this.tvShow,
                season: season
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.isSuccess) {
                // Edit name
                season.name = result.newSeasonName;
                demo.showSuccessNotification("TV show season name successfully updated!");
            }
        });
    };
    TvShowSeasonsComponent.prototype.delete = function (season) {
        var _this = this;
        var options = {
            title: "Delete TV show season?",
            text: "Are you sure you want to delete this season? All associated episodes will also be deleted.",
            icon: "error",
            buttons: ["Cancel", "Ok"],
            dangerMode: true
        };
        sweetalert__WEBPACK_IMPORTED_MODULE_6___default()(options).then(function (willDelete) {
            if (willDelete) {
                _this.spinner.show();
                // Delete artist
                _this.seasonsService.deleteSeason(_this.tvShow, season).then(function (result) {
                    _this.removeSeasonFromList(season);
                    demo.showSuccessNotification("TV show season successfully deleted!");
                    _this.spinner.hide();
                }, function (error) {
                    _this.spinner.hide();
                    demo.showErrorNotification("An error occured: " + error);
                });
            }
        });
    };
    TvShowSeasonsComponent.prototype.removeSeasonFromList = function (season) {
        var index = this.tvShowSeasons.indexOf(season);
        if (index > -1) {
            this.tvShowSeasons.splice(index, 1);
        }
    };
    TvShowSeasonsComponent.prototype.viewEpisodes = function (season) {
        var dialogRef = this.dialog.open(_seasons_episodes_seasons_episodes_component__WEBPACK_IMPORTED_MODULE_8__["SeasonsEpisodesComponent"], {
            data: {
                tvShow: this.tvShow,
                season: season
            }
        });
        dialogRef.afterClosed().subscribe(function (result) { });
    };
    TvShowSeasonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-tv-show-seasons",
            template: __webpack_require__(/*! ./tv-show-seasons.component.html */ "./src/app/components/tv-show-seasons/tv-show-seasons.component.html"),
            styles: [__webpack_require__(/*! ./tv-show-seasons.component.css */ "./src/app/components/tv-show-seasons/tv-show-seasons.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_Firestore_SeasonsService_seasons_service_service__WEBPACK_IMPORTED_MODULE_2__["SeasonsService"],
            _services_FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseStorageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], Object])
    ], TvShowSeasonsComponent);
    return TvShowSeasonsComponent;
}());



/***/ }),

/***/ "./src/app/components/tv-shows/tv-shows.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/tv-shows/tv-shows.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".line-break {\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n.image-size {\r\n  max-width: 200px;\r\n  max-height: 280px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/tv-shows/tv-shows.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/tv-shows/tv-shows.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(0, 0, 0, 0.0)\" size=\"medium\" color=\"#e50914\" type=\"timer\"></ngx-spinner>\n\n<div class=\"row\" *ngIf=\"!isCategoryEditing && !isHomeScreenGroupEditing\">\n  <div class=\"col-md-7\">\n    <button type=\"button\" (click)=\"addNewTvShow()\" style=\"margin-left: 30px;\" class=\"btn btn-default btn-with-icon\">\n      Add New TV Show\n    </button>\n  </div>\n\n  <div class=\"col-md-3\">\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\">\n        <i class=\"fa fa-search\"></i>\n      </span>\n\n      <input id=\"searchInput\" type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search TV shows...\">\n    </div>\n  </div>\n\n  <div class=\"col-md-2\">\n    <button type=\"button\" (click)=\"clearSearchInput()\" class=\"btn btn-xs btn-with-icon\" style=\"margin-top: 5px;\" [disabled]=\"!isSearching\">\n      Clear\n    </button>\n  </div>\n</div>\n\n<div class=\"col-md-3\" *ngFor=\"let tvShow of tvShows\" style=\"min-width: 300px; max-height: 500px;\">\n  <div class=\"card card-profile\">\n    <img class=\"image-size\" src=\"{{tvShow.picture}}\" alt=\"...\">\n\n    <div class=\"card-body\">\n      <h4 class=\"card-title line-break\">{{tvShow.name}}</h4>\n      <!-- <h6 class=\"card-category\"></h6> -->\n      <!-- <p class=\"card-description\"></p> -->\n\n      <div *ngIf=\"!isCategoryEditing && !isHomeScreenGroupEditing\" class=\"card-footer text-center\">\n        <a (click)=\"edit(tvShow)\" class=\"btn btn-with-icon btn-outline-info btn-info\" style=\"margin: 20px 5px 10px 5px\" data-toggle=\"tooltip\"\n          data-placement=\"bottom\" title=\"Edit\">\n          <i class=\"ti-pencil\" aria-hidden=\"true\"></i>\n        </a>\n\n        <a (click)=\"delete(tvShow)\" class=\"btn btn-with-icon btn-outline-danger btn-danger\" style=\"margin: 20px 5px 10px 5px\" data-toggle=\"tooltip\"\n          data-placement=\"bottom\" title=\"Delete\">\n          <i class=\"ti-trash\" aria-hidden=\"true\"></i>\n        </a>\n\n        <a (click)=\"viewSeasons(tvShow)\" class=\"btn btn-with-icon btn-outline-success btn-success\" style=\"margin: 20px 5px 10px 5px\"\n          data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"View Seasons\">\n          <i class=\"ti-desktop\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n\n      <div *ngIf=\"isCategoryEditing\" class=\"card-footer text-center\">\n        <br>\n\n        <button (click)=\"addTvShowToCategory(tvShow)\" *ngIf=\"!tvShow.isPartOfCategory\" type=\"button\" class=\"btn btn-default\">\n          Add\n        </button>\n\n        <button (click)=\"removeTvShowFromCategory(tvShow)\" *ngIf=\"tvShow.isPartOfCategory\" type=\"button\" class=\"btn btn-fill btn-success\">\n          Added\n        </button>\n      </div>\n\n      <div *ngIf=\"isHomeScreenGroupEditing\" class=\"card-footer text-center\">\n        <br>\n\n        <button (click)=\"addTvShowToHomeScreenGroup(tvShow)\" *ngIf=\"!tvShow.isPartOfHomeScreenGroup\" type=\"button\" class=\"btn btn-default\">\n          Add\n        </button>\n\n        <button (click)=\"removeTvShowFromHomeScreenGroup(tvShow)\" *ngIf=\"tvShow.isPartOfHomeScreenGroup\" type=\"button\" class=\"btn btn-fill btn-success\">\n          Added\n        </button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/tv-shows/tv-shows.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/tv-shows/tv-shows.component.ts ***!
  \***********************************************************/
/*! exports provided: TvShowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvShowsComponent", function() { return TvShowsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/FirebaseStorage/firebase-storage.service */ "./src/app/services/FirebaseStorage/firebase-storage.service.ts");
/* harmony import */ var _services_Firestore_TvShowsService_tv_shows_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Firestore/TvShowsService/tv-shows-service.service */ "./src/app/services/Firestore/TvShowsService/tv-shows-service.service.ts");
/* harmony import */ var _services_Firestore_CategoriesService_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Firestore/CategoriesService/categories.service */ "./src/app/services/Firestore/CategoriesService/categories.service.ts");
/* harmony import */ var _services_Firestore_HomeScreenService_home_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/Firestore/HomeScreenService/home-screen.service */ "./src/app/services/Firestore/HomeScreenService/home-screen.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _assets_js_demo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/js/demo.js */ "./src/assets/js/demo.js");
/* harmony import */ var _assets_js_demo_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_js_demo_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tv_show_editor_tv_show_editor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tv-show-editor/tv-show-editor.component */ "./src/app/components/tv-show-editor/tv-show-editor.component.ts");
/* harmony import */ var _tv_show_seasons_tv_show_seasons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tv-show-seasons/tv-show-seasons.component */ "./src/app/components/tv-show-seasons/tv-show-seasons.component.ts");
/* harmony import */ var _models_Category__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/Category */ "./src/app/models/Category.ts");
/* harmony import */ var _models_HomeScreenGroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../models/HomeScreenGroup */ "./src/app/models/HomeScreenGroup.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var TvShowsComponent = /** @class */ (function () {
    function TvShowsComponent(tvShowsService, categoriesService, homeScreenService, firebaseStorage, spinner, dialog) {
        this.tvShowsService = tvShowsService;
        this.categoriesService = categoriesService;
        this.homeScreenService = homeScreenService;
        this.firebaseStorage = firebaseStorage;
        this.spinner = spinner;
        this.dialog = dialog;
        this.isCategoryEditing = false;
        this.isHomeScreenGroupEditing = false;
        this.tvShows = [];
        this.isSearching = false;
    }
    TvShowsComponent.prototype.ngOnInit = function () {
        this.getTvShows();
        if (!this.isCategoryEditing && !this.isHomeScreenGroupEditing) {
            this.listenForSearchInput(500);
        }
    };
    TvShowsComponent.prototype.getTvShows = function () {
        var _this = this;
        this.spinner.show();
        this.tvShowsService.getTvShows().then(function (result) {
            _this.tvShows = result.tvShows;
            _this.originalTvShows = _this.tvShows;
            _this.tvShows.forEach(function (tvShow) {
                if (_this.isCategoryEditing) {
                    _this.checkIfCategoryTvShow(tvShow);
                }
                else if (_this.isHomeScreenGroupEditing) {
                    _this.checkIfHomeScreenGroupTvShow(tvShow);
                }
            });
            _this.spinner.hide();
        });
    };
    TvShowsComponent.prototype.checkIfCategoryTvShow = function (tvShow) {
        if (this.categoryTvShows) {
            var categoryTvShow = this.categoryTvShows.find(function (x) { return x.tvShowId === tvShow.tvShowId; });
            if (categoryTvShow) {
                tvShow.isPartOfCategory = true;
                tvShow.categoryTvShowId = categoryTvShow.categoryTvShowId;
            }
        }
    };
    TvShowsComponent.prototype.checkIfHomeScreenGroupTvShow = function (tvShow) {
        if (this.homeScreenGroupTvShows) {
            var homeScreenGroupTvShow = this.homeScreenGroupTvShows.find(function (x) { return x.tvShowId === tvShow.tvShowId; });
            if (homeScreenGroupTvShow) {
                tvShow.isPartOfHomeScreenGroup = true;
                tvShow.homeScreenGroupTvShowId =
                    homeScreenGroupTvShow.homeScreenGroupTvShowId;
            }
        }
    };
    TvShowsComponent.prototype.addNewTvShow = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_tv_show_editor_tv_show_editor_component__WEBPACK_IMPORTED_MODULE_9__["TvShowEditorComponent"], {
            width: "500px",
            data: {
                isEditMode: false
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.isSuccess) {
                // Add new tv show
                _this.tvShows.unshift(result.newTvShow);
                demo.showSuccessNotification("TV show successfully added!");
            }
        });
    };
    TvShowsComponent.prototype.edit = function (tvShow) {
        var dialogRef = this.dialog.open(_tv_show_editor_tv_show_editor_component__WEBPACK_IMPORTED_MODULE_9__["TvShowEditorComponent"], {
            width: "650px",
            data: {
                isEditMode: true,
                tvShow: tvShow
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.isSuccess) {
                // Edit name
                if (result.tvShowNameUpdated) {
                    tvShow.name = result.newTvShowName;
                    demo.showSuccessNotification("TV show name successfully updated!");
                }
                else if (result.tvShowPictureUpdated) {
                    tvShow.picture = result.newTvShowPicture;
                    demo.showSuccessNotification("TV show home screen picture successfully updated!");
                }
                else if (result.detailsPictureUpdated) {
                    tvShow.detailsPicture = result.newDetailsPicture;
                    demo.showSuccessNotification("TV show picture details successfully updated!");
                }
                else if (result.tvShowYearUpdated) {
                    tvShow.releaseYear = result.newTvShowYear;
                    demo.showSuccessNotification("TV show release year successfully updated!");
                }
                else if (result.tvShowRatingUpdated) {
                    tvShow.rating = result.newTvShowRating;
                    demo.showSuccessNotification("TV show rating year successfully updated!");
                }
                else if (result.tvShowDescriptionUpdated) {
                    tvShow.description = result.newTvShowDescription;
                    demo.showSuccessNotification("TV show description successfully updated!");
                }
            }
        });
    };
    TvShowsComponent.prototype.delete = function (tvShow) {
        var _this = this;
        var options = {
            title: "Delete TV Show?",
            text: "Are you sure you want to delete this TV Show? All associated seasons and episodes will also be deleted.",
            icon: "error",
            buttons: ["Cancel", "Ok"],
            dangerMode: true
        };
        sweetalert__WEBPACK_IMPORTED_MODULE_8___default()(options).then(function (willDelete) {
            if (willDelete) {
                _this.spinner.show();
                // Delete artist
                _this.tvShowsService.deleteTvShow(tvShow).then(function (result) {
                    _this.removeTvShowFromList(tvShow);
                    demo.showSuccessNotification("TV Show successfully deleted!");
                    _this.spinner.hide();
                }, function (error) {
                    _this.spinner.hide();
                    demo.showErrorNotification("An error occured: " + error);
                });
            }
        });
    };
    TvShowsComponent.prototype.removeTvShowFromList = function (tvShow) {
        var index = this.tvShows.indexOf(tvShow);
        if (index > -1) {
            this.tvShows.splice(index, 1);
        }
    };
    TvShowsComponent.prototype.listenForSearchInput = function (timeoutTime) {
        var _this = this;
        var searchInput = (document.getElementById("searchInput"));
        var timeout = null;
        searchInput.onkeyup = function (e) {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                _this.searchTvShows(searchInput.value);
            }, timeoutTime);
        };
    };
    TvShowsComponent.prototype.searchTvShows = function (searchValue) {
        var _this = this;
        this.isSearching = true;
        if (searchValue !== "" && searchValue.length >= 3) {
            this.spinner.show();
            this.tvShows = [];
            this.tvShowsService.getTvShows().then(function (result) {
                result.tvShows.forEach(function (tvShow) {
                    if (tvShow.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
                        _this.tvShows.push(tvShow);
                    }
                });
                _this.spinner.hide();
            });
        }
        else if (searchValue === "") {
            this.clearSearchInput();
        }
    };
    TvShowsComponent.prototype.clearSearchInput = function () {
        this.tvShows = this.originalTvShows;
        this.isSearching = false;
        var searchInput = (document.getElementById("searchInput"));
        searchInput.value = "";
    };
    TvShowsComponent.prototype.viewSeasons = function (tvShow) {
        var dialogRef = this.dialog.open(_tv_show_seasons_tv_show_seasons_component__WEBPACK_IMPORTED_MODULE_10__["TvShowSeasonsComponent"], {
            minHeight: "200px",
            minWidth: "600px",
            data: {
                tvShow: tvShow
            }
        });
        dialogRef.afterClosed().subscribe(function (result) { });
    };
    TvShowsComponent.prototype.addTvShowToCategory = function (tvShow) {
        this.categoriesService.addTvShowToCategory(tvShow, this.category).then(function (result) {
            tvShow.categoryTvShowId = result.newCategoryTvShowId;
            tvShow.isPartOfCategory = true;
        }, function (error) {
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    TvShowsComponent.prototype.removeTvShowFromCategory = function (tvShow) {
        this.categoriesService.removeTvShowFromCategory(tvShow, this.category).then(function (result) {
            tvShow.isPartOfCategory = false;
        }, function (error) {
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    TvShowsComponent.prototype.addTvShowToHomeScreenGroup = function (tvShow) {
        this.homeScreenService
            .addTvShowToHomeScreenGroup(tvShow, this.homeScreenGroup)
            .then(function (result) {
            tvShow.homeScreenGroupTvShowId = result.newHomeScreenGroupTvShowId;
            tvShow.isPartOfHomeScreenGroup = true;
        }, function (error) {
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    TvShowsComponent.prototype.removeTvShowFromHomeScreenGroup = function (tvShow) {
        this.homeScreenService
            .removeTvShowFromHomeScreenGroup(tvShow, this.homeScreenGroup)
            .then(function (result) {
            tvShow.isPartOfHomeScreenGroup = false;
        }, function (error) {
            demo.showErrorNotification("An error occured: " + error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TvShowsComponent.prototype, "isCategoryEditing", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_Category__WEBPACK_IMPORTED_MODULE_11__["Category"])
    ], TvShowsComponent.prototype, "category", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TvShowsComponent.prototype, "categoryTvShows", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TvShowsComponent.prototype, "isHomeScreenGroupEditing", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_HomeScreenGroup__WEBPACK_IMPORTED_MODULE_12__["HomeScreenGroup"])
    ], TvShowsComponent.prototype, "homeScreenGroup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TvShowsComponent.prototype, "homeScreenGroupTvShows", void 0);
    TvShowsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-tv-shows",
            template: __webpack_require__(/*! ./tv-shows.component.html */ "./src/app/components/tv-shows/tv-shows.component.html"),
            styles: [__webpack_require__(/*! ./tv-shows.component.css */ "./src/app/components/tv-shows/tv-shows.component.css")]
        }),
        __metadata("design:paramtypes", [_services_Firestore_TvShowsService_tv_shows_service_service__WEBPACK_IMPORTED_MODULE_2__["TvShowsService"],
            _services_Firestore_CategoriesService_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"],
            _services_Firestore_HomeScreenService_home_screen_service__WEBPACK_IMPORTED_MODULE_4__["HomeScreenService"],
            _services_FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseStorageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], TvShowsComponent);
    return TvShowsComponent;
}());



/***/ }),

/***/ "./src/app/models/CategoriesHelper.ts":
/*!********************************************!*\
  !*** ./src/app/models/CategoriesHelper.ts ***!
  \********************************************/
/*! exports provided: CategoriesHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesHelper", function() { return CategoriesHelper; });
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category */ "./src/app/models/Category.ts");

var CategoriesHelper = /** @class */ (function () {
    function CategoriesHelper() {
    }
    CategoriesHelper.categories = [
        new _Category__WEBPACK_IMPORTED_MODULE_0__["Category"]("Available for Download", ""),
        new _Category__WEBPACK_IMPORTED_MODULE_0__["Category"]("Diseño Grafico", ""),
        new _Category__WEBPACK_IMPORTED_MODULE_0__["Category"]("Desarrollo de Software", ""),
        new _Category__WEBPACK_IMPORTED_MODULE_0__["Category"]("Finanzas", ""),
        new _Category__WEBPACK_IMPORTED_MODULE_0__["Category"]("Finanza personal", ""),
        new _Category__WEBPACK_IMPORTED_MODULE_0__["Category"]("Marketing", ""),
        new _Category__WEBPACK_IMPORTED_MODULE_0__["Category"]("Documentales", ""),
        new _Category__WEBPACK_IMPORTED_MODULE_0__["Category"]("Drama", ""),
        new _Category__WEBPACK_IMPORTED_MODULE_0__["Category"]("Audios")
    ];
    return CategoriesHelper;
}());



/***/ }),

/***/ "./src/app/models/Category.ts":
/*!************************************!*\
  !*** ./src/app/models/Category.ts ***!
  \************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = /** @class */ (function () {
    function Category(name, picture) {
        this.name = name;
        this.picture = picture;
    }
    return Category;
}());



/***/ }),

/***/ "./src/app/models/ComingSoon.js":
/*!**************************************!*\
  !*** ./src/app/models/ComingSoon.js ***!
  \**************************************/
/*! exports provided: ComingSoon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoon", function() { return ComingSoon; });
var ComingSoon = /** @class */ (function () {
    function ComingSoon() {
    }
    return ComingSoon;
}());

//# sourceMappingURL=ComingSoon.js.map

/***/ }),

/***/ "./src/app/models/ComingSoon.ts":
/*!**************************************!*\
  !*** ./src/app/models/ComingSoon.ts ***!
  \**************************************/
/*! exports provided: ComingSoon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoon", function() { return ComingSoon; });
var ComingSoon = /** @class */ (function () {
    function ComingSoon() {
    }
    return ComingSoon;
}());



/***/ }),

/***/ "./src/app/models/Dictionary.ts":
/*!**************************************!*\
  !*** ./src/app/models/Dictionary.ts ***!
  \**************************************/
/*! exports provided: Dictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return Dictionary; });
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.items = {};
        this.count = 0;
    }
    Dictionary.prototype.ContainsKey = function (key) {
        return this.items.hasOwnProperty(key);
    };
    Dictionary.prototype.Count = function () {
        return this.count;
    };
    Dictionary.prototype.Add = function (key, value) {
        if (!this.items.hasOwnProperty(key)) {
            this.count++;
        }
        this.items[key] = value;
    };
    Dictionary.prototype.Remove = function (key) {
        var val = this.items[key];
        delete this.items[key];
        this.count--;
        return val;
    };
    Dictionary.prototype.Item = function (key) {
        return this.items[key];
    };
    Dictionary.prototype.Keys = function () {
        var keySet = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }
        return keySet;
    };
    Dictionary.prototype.Values = function () {
        var values = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                values.push(this.items[prop]);
            }
        }
        return values;
    };
    return Dictionary;
}());



/***/ }),

/***/ "./src/app/models/Episode.ts":
/*!***********************************!*\
  !*** ./src/app/models/Episode.ts ***!
  \***********************************/
/*! exports provided: Episode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Episode", function() { return Episode; });
var Episode = /** @class */ (function () {
    function Episode() {
    }
    return Episode;
}());



/***/ }),

/***/ "./src/app/models/HomeScreenGroup.js":
/*!*******************************************!*\
  !*** ./src/app/models/HomeScreenGroup.js ***!
  \*******************************************/
/*! exports provided: HomeScreenGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeScreenGroup", function() { return HomeScreenGroup; });
var HomeScreenGroup = /** @class */ (function () {
    function HomeScreenGroup() {
    }
    return HomeScreenGroup;
}());

//# sourceMappingURL=HomeScreenGroup.js.map

/***/ }),

/***/ "./src/app/models/HomeScreenGroup.ts":
/*!*******************************************!*\
  !*** ./src/app/models/HomeScreenGroup.ts ***!
  \*******************************************/
/*! exports provided: HomeScreenGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeScreenGroup", function() { return HomeScreenGroup; });
var HomeScreenGroup = /** @class */ (function () {
    function HomeScreenGroup() {
    }
    return HomeScreenGroup;
}());



/***/ }),

/***/ "./src/app/models/Movie.ts":
/*!*********************************!*\
  !*** ./src/app/models/Movie.ts ***!
  \*********************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie() {
    }
    return Movie;
}());



/***/ }),

/***/ "./src/app/models/Notification.ts":
/*!****************************************!*\
  !*** ./src/app/models/Notification.ts ***!
  \****************************************/
/*! exports provided: Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
var Notification = /** @class */ (function () {
    function Notification(name, picture, progress) {
        this.name = name;
        this.picture = picture;
        this.progress = progress;
    }
    return Notification;
}());



/***/ }),

/***/ "./src/app/models/Season.ts":
/*!**********************************!*\
  !*** ./src/app/models/Season.ts ***!
  \**********************************/
/*! exports provided: Season */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Season", function() { return Season; });
var Season = /** @class */ (function () {
    function Season() {
    }
    return Season;
}());



/***/ }),

/***/ "./src/app/models/TvShow.ts":
/*!**********************************!*\
  !*** ./src/app/models/TvShow.ts ***!
  \**********************************/
/*! exports provided: TvShow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvShow", function() { return TvShow; });
var TvShow = /** @class */ (function () {
    function TvShow() {
    }
    return TvShow;
}());



/***/ }),

/***/ "./src/app/services/AuthService/auth.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/AuthService/auth.service.ts ***!
  \******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.registerUser = function (email, password) {
        return this.afAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (res) { })
            .catch(function (error) {
            throw error;
        });
    };
    AuthService.prototype.signIn = function (email, password) {
        return this.afAuth.auth
            .signInWithEmailAndPassword(email, password)
            .then(function (res) { })
            .catch(function (error) {
            throw error;
        });
    };
    AuthService.prototype.signInWithFacebook = function () {
        return this.afAuth.auth
            .signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider())
            .then(function (res) { }, function (err) {
            console.error("Error: ", err);
            throw err;
        });
    };
    AuthService.prototype.signInWithGoogle = function () {
        return this.afAuth.auth
            .signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider())
            .then(function (res) { }, function (err) {
            console.error("Error: ", err);
            throw err;
        });
    };
    AuthService.prototype.signInWithTwitter = function () {
        return this.afAuth.auth
            .signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].TwitterAuthProvider())
            .then(function (res) { }, function (err) {
            console.error("Error: ", err);
            throw err;
        });
    };
    AuthService.prototype.signInWithGithub = function () {
        return this.afAuth.auth
            .signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GithubAuthProvider())
            .then(function (res) { }, function (err) {
            console.error("Error: ", err);
            throw err;
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/FirebaseStorage/firebase-storage.service.js":
/*!**********************************************************************!*\
  !*** ./src/app/services/FirebaseStorage/firebase-storage.service.js ***!
  \**********************************************************************/
/*! exports provided: FirebaseStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseStorageService", function() { return FirebaseStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Dictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Dictionary */ "./src/app/models/Dictionary.ts");
/* harmony import */ var _models_Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Notification */ "./src/app/models/Notification.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirebaseStorageService = /** @class */ (function () {
    function FirebaseStorageService() {
        this.songUploaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.songUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notificationsByNameDictionary = new _models_Dictionary__WEBPACK_IMPORTED_MODULE_2__["Dictionary"]();
    }
    FirebaseStorageService.prototype.getNotifications = function () {
        var _this = this;
        var notifications = [];
        this.notificationsByNameDictionary.Keys().forEach(function (key) {
            var notification = _this.notificationsByNameDictionary.Item(key);
            notifications.push(notification);
        });
        return notifications;
    };
    FirebaseStorageService.prototype.removeNotification = function (name) {
        this.notificationsByNameDictionary.Remove(name);
    };
    FirebaseStorageService.prototype.uploadVideo = function (uploadPath, name, picture, file) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_1__["storage"]().ref();
            var uploadTask = storageRef.child(uploadPath).put(file);
            uploadTask.on("state_changed", function (snapshot) {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                if (_this.notificationsByNameDictionary.ContainsKey(name)) {
                    _this.notificationsByNameDictionary.Remove(name);
                }
                var notification = new _models_Notification__WEBPACK_IMPORTED_MODULE_3__["Notification"](name, picture, Math.round(progress));
                _this.notificationsByNameDictionary.Add(name, notification);
            }, function (error) {
                // Handle unsuccessful uploads
                console.error(error);
            }, function () {
                // Handle successful uploads on complete
                this.uploadMessage = "Uploaded successfully!";
            });
            uploadTask.then(function (snapshot) {
                if (snapshot.state === "success") {
                    _this.notificationsByNameDictionary.Remove(name);
                }
            });
            resolve({ uploadTask: uploadTask });
        });
        return promise;
    };
    FirebaseStorageService.prototype.uploadPicture = function (uploadPath, file, callback) {
        var promise = new Promise(function (resolve, reject) {
            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_1__["storage"]().ref();
            var uploadTask = storageRef.child(uploadPath).put(file);
            uploadTask.on("state_changed", function (snapshot) {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                callback(progress);
                switch (snapshot.state) {
                    case firebase__WEBPACK_IMPORTED_MODULE_1__["storage"].TaskState.PAUSED:// or 'paused'
                        console.log("Upload is paused");
                        break;
                    case firebase__WEBPACK_IMPORTED_MODULE_1__["storage"].TaskState.RUNNING:// or 'running'
                        console.log("Upload is running");
                        // tslint:disable-next-line:radix
                        // this.uploadMessage = 'Uploading: ' + parseInt(progress.toString()) + '% done';
                        break;
                }
            }, function (error) {
                // Handle unsuccessful uploads
                console.error(error);
            }, function () {
                // Handle successful uploads on complete
                this.uploadMessage = "Uploaded successfully!";
            });
            uploadTask.then(function (snapshot) {
                if (snapshot.state !== "success") {
                    reject();
                }
                snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    resolve({ downloadURL: downloadURL });
                });
            });
        });
        return promise;
    };
    FirebaseStorageService.prototype.deleteFile = function (deletePath) {
        var promise = new Promise(function (resolve, reject) {
            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_1__["storage"]().ref();
            var uploadTask = storageRef
                .child(deletePath)
                .delete()
                .then(function () {
                // File deleted successfully
            })
                .catch(function (error) {
                // Uh-oh, an error occurred!
            });
        });
        return promise;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FirebaseStorageService.prototype, "songUploaded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FirebaseStorageService.prototype, "songUpdated", void 0);
    FirebaseStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], FirebaseStorageService);
    return FirebaseStorageService;
}());

//# sourceMappingURL=firebase-storage.service.js.map

/***/ }),

/***/ "./src/app/services/FirebaseStorage/firebase-storage.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/services/FirebaseStorage/firebase-storage.service.ts ***!
  \**********************************************************************/
/*! exports provided: FirebaseStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseStorageService", function() { return FirebaseStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Dictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Dictionary */ "./src/app/models/Dictionary.ts");
/* harmony import */ var _models_Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Notification */ "./src/app/models/Notification.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirebaseStorageService = /** @class */ (function () {
    function FirebaseStorageService() {
        this.songUploaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.songUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notificationsByNameDictionary = new _models_Dictionary__WEBPACK_IMPORTED_MODULE_2__["Dictionary"]();
    }
    FirebaseStorageService.prototype.getNotifications = function () {
        var _this = this;
        var notifications = [];
        this.notificationsByNameDictionary.Keys().forEach(function (key) {
            var notification = _this.notificationsByNameDictionary.Item(key);
            notifications.push(notification);
        });
        return notifications;
    };
    FirebaseStorageService.prototype.removeNotification = function (name) {
        this.notificationsByNameDictionary.Remove(name);
    };
    FirebaseStorageService.prototype.uploadVideo = function (uploadPath, name, picture, file) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_1__["storage"]().ref();
            var uploadTask = storageRef.child(uploadPath).put(file);
            uploadTask.on("state_changed", function (snapshot) {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                if (_this.notificationsByNameDictionary.ContainsKey(name)) {
                    _this.notificationsByNameDictionary.Remove(name);
                }
                var notification = new _models_Notification__WEBPACK_IMPORTED_MODULE_3__["Notification"](name, picture, Math.round(progress));
                _this.notificationsByNameDictionary.Add(name, notification);
            }, function (error) {
                // Handle unsuccessful uploads
                console.error(error);
            }, function () {
                // Handle successful uploads on complete
                this.uploadMessage = "Uploaded successfully!";
            });
            uploadTask.then(function (snapshot) {
                if (snapshot.state === "success") {
                    _this.notificationsByNameDictionary.Remove(name);
                }
            });
            resolve({ uploadTask: uploadTask });
        });
        return promise;
    };
    FirebaseStorageService.prototype.uploadPicture = function (uploadPath, file, callback) {
        var promise = new Promise(function (resolve, reject) {
            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_1__["storage"]().ref();
            var uploadTask = storageRef.child(uploadPath).put(file);
            uploadTask.on("state_changed", function (snapshot) {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                callback(progress);
                switch (snapshot.state) {
                    case firebase__WEBPACK_IMPORTED_MODULE_1__["storage"].TaskState.PAUSED:// or 'paused'
                        console.log("Upload is paused");
                        break;
                    case firebase__WEBPACK_IMPORTED_MODULE_1__["storage"].TaskState.RUNNING:// or 'running'
                        console.log("Upload is running");
                        // tslint:disable-next-line:radix
                        // this.uploadMessage = 'Uploading: ' + parseInt(progress.toString()) + '% done';
                        break;
                }
            }, function (error) {
                // Handle unsuccessful uploads
                console.error(error);
            }, function () {
                // Handle successful uploads on complete
                this.uploadMessage = "Uploaded successfully!";
            });
            uploadTask.then(function (snapshot) {
                if (snapshot.state !== "success") {
                    reject();
                }
                snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    resolve({ downloadURL: downloadURL });
                });
            });
        });
        return promise;
    };
    FirebaseStorageService.prototype.deleteFile = function (deletePath) {
        var promise = new Promise(function (resolve, reject) {
            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_1__["storage"]().ref();
            var uploadTask = storageRef
                .child(deletePath)
                .delete()
                .then(function () {
                // File deleted successfully
            })
                .catch(function (error) {
                // Uh-oh, an error occurred!
            });
        });
        return promise;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FirebaseStorageService.prototype, "songUploaded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FirebaseStorageService.prototype, "songUpdated", void 0);
    FirebaseStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], FirebaseStorageService);
    return FirebaseStorageService;
}());



/***/ }),

/***/ "./src/app/services/Firestore/CategoriesService/categories.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/services/Firestore/CategoriesService/categories.service.ts ***!
  \****************************************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_CategoriesHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/CategoriesHelper */ "./src/app/models/CategoriesHelper.ts");
/* harmony import */ var _models_Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/Category */ "./src/app/models/Category.ts");
/* harmony import */ var _models_Movie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/Movie */ "./src/app/models/Movie.ts");
/* harmony import */ var _models_TvShow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/TvShow */ "./src/app/models/TvShow.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoriesService = /** @class */ (function () {
    function CategoriesService() {
    }
    CategoriesService.prototype.getCategoriesCount = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("categories")
                .get()
                .then(function (categoriesSnapshot) {
                resolve({ count: categoriesSnapshot.size });
            });
        });
        return promise;
    };
    CategoriesService.prototype.initialiseCategories = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            _models_CategoriesHelper__WEBPACK_IMPORTED_MODULE_2__["CategoriesHelper"].categories.forEach(function (category) {
                db.collection("categories")
                    .add({
                    name: category.name
                })
                    .then(function (ref) {
                    resolve();
                })
                    .catch(function (error) {
                    reject(error);
                });
                resolve();
            });
        });
        return promise;
    };
    CategoriesService.prototype.getCategories = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("categories")
                .get()
                .then(function (categoriesSnapshot) {
                var categories = [];
                categoriesSnapshot.forEach(function (doc) {
                    var category = new _models_Category__WEBPACK_IMPORTED_MODULE_3__["Category"](doc.data().name);
                    category.categoryId = doc.id;
                    categories.push(category);
                });
                resolve({ categories: categories });
            });
        });
        return promise;
    };
    CategoriesService.prototype.addMovieToCategory = function (movie, category) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("categories")
                .doc(category.categoryId)
                .collection("movies")
                .add({
                movieId: movie.movieId,
                name: movie.name,
                picture: movie.picture,
                releaseYear: movie.releaseYear,
                rating: movie.rating,
                description: movie.description,
                videoUrl: movie.videoUrl,
                addedAt: firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].FieldValue.serverTimestamp()
            })
                .then(function (ref) {
                resolve({ newCategoryMovieId: ref.id });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    CategoriesService.prototype.addTvShowToCategory = function (tvShow, category) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("categories")
                .doc(category.categoryId)
                .collection("tvShows")
                .add({
                tvShowId: tvShow.tvShowId,
                name: tvShow.name,
                picture: tvShow.picture,
                releaseYear: tvShow.releaseYear,
                rating: tvShow.rating,
                description: tvShow.description,
                addedAt: firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].FieldValue.serverTimestamp()
            })
                .then(function (ref) {
                resolve({ newCategoryTvShowId: ref.id });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    CategoriesService.prototype.removeMovieFromCategory = function (movie, category) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("categories")
                .doc(category.categoryId)
                .collection("movies")
                .doc(movie.categoryMovieId)
                .delete()
                .then(function (ref) {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    CategoriesService.prototype.removeTvShowFromCategory = function (tvShow, category) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("categories")
                .doc(category.categoryId)
                .collection("tvShows")
                .doc(tvShow.categoryTvShowId)
                .delete()
                .then(function (ref) {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    CategoriesService.prototype.getCategoryMovies = function (category) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("categories")
                .doc(category.categoryId)
                .collection("movies")
                .get()
                .then(function (categoryMoviesSnapshot) {
                var categoryMovies = [];
                categoryMoviesSnapshot.forEach(function (doc) {
                    var movie = new _models_Movie__WEBPACK_IMPORTED_MODULE_4__["Movie"]();
                    movie.categoryMovieId = doc.id;
                    movie.movieId = doc.data().movieId;
                    movie.name = doc.data().name;
                    movie.picture = doc.data().picture;
                    movie.releaseYear = doc.data().releaseYear;
                    movie.rating = doc.data().rating;
                    movie.description = doc.data().description;
                    movie.videoUrl = doc.data().videoUrl;
                    categoryMovies.push(movie);
                });
                resolve({ categoryMovies: categoryMovies });
            });
        });
        return promise;
    };
    CategoriesService.prototype.getCategoryTvShows = function (category) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("categories")
                .doc(category.categoryId)
                .collection("tvShows")
                .get()
                .then(function (categoryTvShowsSnapshot) {
                var categoryTvShows = [];
                categoryTvShowsSnapshot.forEach(function (doc) {
                    var tvShow = new _models_TvShow__WEBPACK_IMPORTED_MODULE_5__["TvShow"]();
                    tvShow.categoryTvShowId = doc.id;
                    tvShow.tvShowId = doc.data().tvShowId;
                    tvShow.name = doc.data().name;
                    tvShow.picture = doc.data().picture;
                    tvShow.releaseYear = doc.data().releaseYear;
                    tvShow.rating = doc.data().rating;
                    tvShow.description = doc.data().description;
                    categoryTvShows.push(tvShow);
                });
                resolve({ categoryTvShows: categoryTvShows });
            });
        });
        return promise;
    };
    CategoriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], CategoriesService);
    return CategoriesService;
}());



/***/ }),

/***/ "./src/app/services/Firestore/ComingSoonService/coming-soon.service.js":
/*!*****************************************************************************!*\
  !*** ./src/app/services/Firestore/ComingSoonService/coming-soon.service.js ***!
  \*****************************************************************************/
/*! exports provided: ComingSoonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonService", function() { return ComingSoonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_ComingSoon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/ComingSoon */ "./src/app/models/ComingSoon.ts");
/* harmony import */ var _FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../FirebaseStorage/firebase-storage.service */ "./src/app/services/FirebaseStorage/firebase-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComingSoonService = /** @class */ (function () {
    function ComingSoonService(firebaseStorage) {
        this.firebaseStorage = firebaseStorage;
    }
    ComingSoonService.prototype.getComingSoonCount = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("comingSoon")
                .get()
                .then(function (comingSoonSnapshot) {
                resolve({ count: comingSoonSnapshot.size });
            });
        });
        return promise;
    };
    ComingSoonService.prototype.getComingSoon = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("comingSoon")
                .orderBy("addedAt", "desc")
                .get()
                .then(function (comingSoonSnapshot) {
                var comingSoonList = [];
                comingSoonSnapshot.forEach(function (doc) {
                    var comingSoon = new _models_ComingSoon__WEBPACK_IMPORTED_MODULE_2__["ComingSoon"]();
                    comingSoon.comingSoonId = doc.id;
                    comingSoon.name = doc.data().name;
                    comingSoon.picture = doc.data().picture;
                    comingSoon.description = doc.data().description;
                    comingSoon.releaseDate = doc.data().releaseDate;
                    comingSoonList.push(comingSoon);
                });
                resolve({ comingSoonList: comingSoonList });
            });
        });
        return promise;
    };
    ComingSoonService.prototype.addNewComingSoon = function (newComingSoon) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("comingSoon")
                .add({
                name: newComingSoon.name,
                picture: newComingSoon.picture,
                description: newComingSoon.description,
                releaseDate: newComingSoon.releaseDate,
                addedAt: firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].FieldValue.serverTimestamp()
            })
                .then(function (ref) {
                resolve({ newComingSoonId: ref.id });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    ComingSoonService.prototype.editComingSoonName = function (comingSoonId, comingSoonName) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("comingSoon")
                .doc(comingSoonId)
                .set({
                name: comingSoonName
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    ComingSoonService.prototype.editComingSoonPicture = function (comingSoonId, comingSoonPicture) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("comingSoon")
                .doc(comingSoonId)
                .set({
                picture: comingSoonPicture
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    ComingSoonService.prototype.editComingSoonDescription = function (comingSoonId, comingSoonDescription) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("comingSoon")
                .doc(comingSoonId)
                .set({
                description: comingSoonDescription
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    ComingSoonService.prototype.editComingSoonReleaseDate = function (comingSoonId, comingSoonReleaseDate) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("comingSoon")
                .doc(comingSoonId)
                .set({
                releaseDate: comingSoonReleaseDate
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    ComingSoonService.prototype.deleteComingSoon = function (comingSoon) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("comingSoon")
                .doc(comingSoon.comingSoonId)
                .delete()
                .then(function () {
                // Delete picture
                var deletePath = "/Coming Soon/" + comingSoon.name + "/comingSoonPicture";
                _this.firebaseStorage.deleteFile(deletePath);
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    ComingSoonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseStorageService"]])
    ], ComingSoonService);
    return ComingSoonService;
}());

//# sourceMappingURL=coming-soon.service.js.map

/***/ }),

/***/ "./src/app/services/Firestore/ComingSoonService/coming-soon.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/services/Firestore/ComingSoonService/coming-soon.service.ts ***!
  \*****************************************************************************/
/*! exports provided: ComingSoonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonService", function() { return ComingSoonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_ComingSoon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/ComingSoon */ "./src/app/models/ComingSoon.ts");
/* harmony import */ var _FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../FirebaseStorage/firebase-storage.service */ "./src/app/services/FirebaseStorage/firebase-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComingSoonService = /** @class */ (function () {
    function ComingSoonService(firebaseStorage) {
        this.firebaseStorage = firebaseStorage;
    }
    ComingSoonService.prototype.getComingSoonCount = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("comingSoon")
                .get()
                .then(function (comingSoonSnapshot) {
                resolve({ count: comingSoonSnapshot.size });
            });
        });
        return promise;
    };
    ComingSoonService.prototype.getComingSoon = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("comingSoon")
                .orderBy("addedAt", "desc")
                .get()
                .then(function (comingSoonSnapshot) {
                var comingSoonList = [];
                comingSoonSnapshot.forEach(function (doc) {
                    var comingSoon = new _models_ComingSoon__WEBPACK_IMPORTED_MODULE_2__["ComingSoon"]();
                    comingSoon.comingSoonId = doc.id;
                    comingSoon.name = doc.data().name;
                    comingSoon.picture = doc.data().picture;
                    comingSoon.description = doc.data().description;
                    comingSoon.releaseDate = doc.data().releaseDate;
                    comingSoonList.push(comingSoon);
                });
                resolve({ comingSoonList: comingSoonList });
            });
        });
        return promise;
    };
    ComingSoonService.prototype.addNewComingSoon = function (newComingSoon) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("comingSoon")
                .add({
                name: newComingSoon.name,
                picture: newComingSoon.picture,
                description: newComingSoon.description,
                releaseDate: newComingSoon.releaseDate,
                addedAt: firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].FieldValue.serverTimestamp()
            })
                .then(function (ref) {
                resolve({ newComingSoonId: ref.id });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    ComingSoonService.prototype.editComingSoonName = function (comingSoonId, comingSoonName) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("comingSoon")
                .doc(comingSoonId)
                .set({
                name: comingSoonName
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    ComingSoonService.prototype.editComingSoonPicture = function (comingSoonId, comingSoonPicture) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("comingSoon")
                .doc(comingSoonId)
                .set({
                picture: comingSoonPicture
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    ComingSoonService.prototype.editComingSoonDescription = function (comingSoonId, comingSoonDescription) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("comingSoon")
                .doc(comingSoonId)
                .set({
                description: comingSoonDescription
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    ComingSoonService.prototype.editComingSoonReleaseDate = function (comingSoonId, comingSoonReleaseDate) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("comingSoon")
                .doc(comingSoonId)
                .set({
                releaseDate: comingSoonReleaseDate
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    ComingSoonService.prototype.deleteComingSoon = function (comingSoon) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("comingSoon")
                .doc(comingSoon.comingSoonId)
                .delete()
                .then(function () {
                // Delete picture
                var deletePath = "/Coming Soon/" + comingSoon.name + "/comingSoonPicture";
                _this.firebaseStorage.deleteFile(deletePath);
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    ComingSoonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseStorageService"]])
    ], ComingSoonService);
    return ComingSoonService;
}());



/***/ }),

/***/ "./src/app/services/Firestore/EpisodesService/episodes-service.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/services/Firestore/EpisodesService/episodes-service.service.ts ***!
  \********************************************************************************/
/*! exports provided: EpisodesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesService", function() { return EpisodesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../FirebaseStorage/firebase-storage.service */ "./src/app/services/FirebaseStorage/firebase-storage.service.ts");
/* harmony import */ var _models_Episode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/Episode */ "./src/app/models/Episode.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EpisodesService = /** @class */ (function () {
    function EpisodesService(firebaseStorage) {
        this.firebaseStorage = firebaseStorage;
    }
    EpisodesService.prototype.getEpisodes = function (tvShow, season) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("tvShows")
                .doc(tvShow.tvShowId)
                .collection("seasons")
                .doc(season.seasonId)
                .collection("episodes")
                .orderBy("addedAt", "asc")
                .get()
                .then(function (episodesSnapshot) {
                var seasonEpisodes = [];
                episodesSnapshot.forEach(function (doc) {
                    var episode = new _models_Episode__WEBPACK_IMPORTED_MODULE_3__["Episode"]();
                    episode.episodeId = doc.id;
                    episode.name = doc.data().name;
                    episode.description = doc.data().description;
                    episode.picture = doc.data().picture;
                    episode.seasonId = doc.data().seasonId;
                    episode.seasonName = doc.data().seasonName;
                    episode.tvShowId = doc.data().tvShowId;
                    episode.tvShowName = doc.data().tvShowName;
                    episode.videoUrl = doc.data().videoUrl;
                    seasonEpisodes.push(episode);
                });
                resolve({ seasonEpisodes: seasonEpisodes });
            });
        });
        return promise;
    };
    EpisodesService.prototype.addNewEpisode = function (tvShow, season, newEpisode) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("tvShows")
                .doc(tvShow.tvShowId)
                .collection("seasons")
                .doc(season.seasonId)
                .collection("episodes")
                .add({
                name: newEpisode.name,
                description: newEpisode.description,
                picture: newEpisode.picture,
                seasonId: newEpisode.seasonId,
                seasonName: newEpisode.seasonName,
                tvShowId: newEpisode.tvShowId,
                tvShowName: newEpisode.tvShowName,
                videoUrl: newEpisode.videoUrl,
                addedAt: firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].FieldValue.serverTimestamp()
            })
                .then(function (ref) {
                resolve({ newEpisodeId: ref.id });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    EpisodesService.prototype.editEpisodeName = function (tvShow, season, episodeId, episodeName) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("tvShows")
                .doc(tvShow.tvShowId)
                .collection("seasons")
                .doc(season.seasonId)
                .collection("episodes")
                .doc(episodeId)
                .set({
                name: episodeName
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    EpisodesService.prototype.editEpisodeDescription = function (tvShow, season, episodeId, episodeDescription) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("tvShows")
                .doc(tvShow.tvShowId)
                .collection("seasons")
                .doc(season.seasonId)
                .collection("episodes")
                .doc(episodeId)
                .set({
                description: episodeDescription
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    EpisodesService.prototype.editEpisodePicture = function (tvShow, season, episodeId, episodePicture) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("tvShows")
                .doc(tvShow.tvShowId)
                .collection("seasons")
                .doc(season.seasonId)
                .collection("episodes")
                .doc(episodeId)
                .set({
                picture: episodePicture
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    EpisodesService.prototype.deleteEpisode = function (tvShow, season, episode) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("tvShows")
                .doc(tvShow.tvShowId)
                .collection("seasons")
                .doc(season.seasonId)
                .collection("episodes")
                .doc(episode.episodeId)
                .delete()
                .then(function () {
                // Delete picture
                var deletePath = "/TV Shows/" + tvShow.name + "/" + season.name + "/" + episode.name + "/episodePicture";
                _this.firebaseStorage.deleteFile(deletePath);
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    EpisodesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseStorageService"]])
    ], EpisodesService);
    return EpisodesService;
}());



/***/ }),

/***/ "./src/app/services/Firestore/HomeScreenService/home-screen.service.js":
/*!*****************************************************************************!*\
  !*** ./src/app/services/Firestore/HomeScreenService/home-screen.service.js ***!
  \*****************************************************************************/
/*! exports provided: HomeScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeScreenService", function() { return HomeScreenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_HomeScreenGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/HomeScreenGroup */ "./src/app/models/HomeScreenGroup.ts");
/* harmony import */ var _models_Movie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/Movie */ "./src/app/models/Movie.ts");
/* harmony import */ var _models_TvShow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/TvShow */ "./src/app/models/TvShow.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeScreenService = /** @class */ (function () {
    function HomeScreenService() {
    }
    HomeScreenService.prototype.getHomeScreenGroupCount = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("homeScreenGroups")
                .get()
                .then(function (homeScreenGroupsSnapshot) {
                resolve({ count: homeScreenGroupsSnapshot.size });
            });
        });
        return promise;
    };
    HomeScreenService.prototype.getHomeScreenGroups = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("homeScreenGroups")
                .get()
                .then(function (homeScreenGroupsSnapshot) {
                var homeScreenGroups = [];
                homeScreenGroupsSnapshot.forEach(function (doc) {
                    var group = new _models_HomeScreenGroup__WEBPACK_IMPORTED_MODULE_2__["HomeScreenGroup"]();
                    group.groupId = doc.id;
                    group.name = doc.data().name;
                    homeScreenGroups.push(group);
                });
                resolve({ homeScreenGroups: homeScreenGroups });
            });
        });
        return promise;
    };
    HomeScreenService.prototype.addNewHomeScreenGroup = function (newHomeScreenGroup) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("homeScreenGroups")
                .add({
                name: newHomeScreenGroup.name,
                addedAt: firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].FieldValue.serverTimestamp()
            })
                .then(function (ref) {
                resolve({ newHomeScreenGroupId: ref.id });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    HomeScreenService.prototype.editHomeScreenGroupName = function (homeScreenGroupId, homeScreenGroupName) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("homeScreenGroups")
                .doc(homeScreenGroupId)
                .set({
                name: homeScreenGroupName
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    HomeScreenService.prototype.deleteHomeScreenGroup = function (homeScreenGroup) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("homeScreenGroups")
                .doc(homeScreenGroup.groupId)
                .delete()
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    HomeScreenService.prototype.getHomeScreenGroupMovies = function (homeScreenGroup) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("homeScreenGroups")
                .doc(homeScreenGroup.groupId)
                .collection("movies")
                .get()
                .then(function (homeScreenGroupsMoviesSnapshot) {
                var homeScreenGroupMovies = [];
                homeScreenGroupsMoviesSnapshot.forEach(function (doc) {
                    var movie = new _models_Movie__WEBPACK_IMPORTED_MODULE_3__["Movie"]();
                    movie.homeScreenGroupMovieId = doc.id;
                    movie.movieId = doc.data().movieId;
                    movie.name = doc.data().name;
                    movie.picture = doc.data().picture;
                    movie.releaseYear = doc.data().releaseYear;
                    movie.rating = doc.data().rating;
                    movie.description = doc.data().description;
                    movie.videoUrl = doc.data().videoUrl;
                    homeScreenGroupMovies.push(movie);
                });
                resolve({ homeScreenGroupMovies: homeScreenGroupMovies });
            });
        });
        return promise;
    };
    HomeScreenService.prototype.getHomeScreenGroupTvShows = function (homeScreenGroup) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("homeScreenGroups")
                .doc(homeScreenGroup.groupId)
                .collection("tvShows")
                .get()
                .then(function (homeScreenGroupTvShowsSnapshot) {
                var homeScreenGroupTvShows = [];
                homeScreenGroupTvShowsSnapshot.forEach(function (doc) {
                    var tvShow = new _models_TvShow__WEBPACK_IMPORTED_MODULE_4__["TvShow"]();
                    tvShow.homeScreenGroupTvShowId = doc.id;
                    tvShow.tvShowId = doc.data().tvShowId;
                    tvShow.name = doc.data().name;
                    tvShow.picture = doc.data().picture;
                    tvShow.releaseYear = doc.data().releaseYear;
                    tvShow.rating = doc.data().rating;
                    tvShow.description = doc.data().description;
                    homeScreenGroupTvShows.push(tvShow);
                });
                resolve({ homeScreenGroupTvShows: homeScreenGroupTvShows });
            });
        });
        return promise;
    };
    HomeScreenService.prototype.addMovieToHomeScreenGroup = function (movie, homeScreenGroup) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("homeScreenGroups")
                .doc(homeScreenGroup.groupId)
                .collection("movies")
                .add({
                homeScreenGroupId: homeScreenGroup.groupId,
                movieId: movie.movieId,
                name: movie.name,
                picture: movie.picture,
                releaseYear: movie.releaseYear,
                rating: movie.rating,
                description: movie.description,
                videoUrl: movie.videoUrl,
                addedAt: firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].FieldValue.serverTimestamp()
            })
                .then(function (ref) {
                resolve({ newHomeScreenGroupMovieId: ref.id });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    HomeScreenService.prototype.removeMovieFromHomeScreenGroup = function (movie, homeScreenGroup) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("homeScreenGroups")
                .doc(homeScreenGroup.groupId)
                .collection("movies")
                .doc(movie.homeScreenGroupMovieId)
                .delete()
                .then(function (ref) {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    HomeScreenService.prototype.addTvShowToHomeScreenGroup = function (tvShow, homeScreenGroup) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("homeScreenGroups")
                .doc(homeScreenGroup.groupId)
                .collection("tvShows")
                .add({
                homeScreenGroupId: homeScreenGroup.groupId,
                tvShowId: tvShow.tvShowId,
                name: tvShow.name,
                picture: tvShow.picture,
                releaseYear: tvShow.releaseYear,
                rating: tvShow.rating,
                description: tvShow.description,
                addedAt: firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].FieldValue.serverTimestamp()
            })
                .then(function (ref) {
                resolve({ newHomeScreenGroupTvShowId: ref.id });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    HomeScreenService.prototype.removeTvShowFromHomeScreenGroup = function (tvShow, homeScreenGroup) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("homeScreenGroups")
                .doc(homeScreenGroup.groupId)
                .collection("tvShows")
                .doc(tvShow.homeScreenGroupTvShowId)
                .delete()
                .then(function (ref) {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    HomeScreenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], HomeScreenService);
    return HomeScreenService;
}());

//# sourceMappingURL=home-screen.service.js.map

/***/ }),

/***/ "./src/app/services/Firestore/HomeScreenService/home-screen.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/services/Firestore/HomeScreenService/home-screen.service.ts ***!
  \*****************************************************************************/
/*! exports provided: HomeScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeScreenService", function() { return HomeScreenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_HomeScreenGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/HomeScreenGroup */ "./src/app/models/HomeScreenGroup.ts");
/* harmony import */ var _models_Movie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/Movie */ "./src/app/models/Movie.ts");
/* harmony import */ var _models_TvShow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/TvShow */ "./src/app/models/TvShow.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeScreenService = /** @class */ (function () {
    function HomeScreenService() {
    }
    HomeScreenService.prototype.getHomeScreenGroupCount = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("homeScreenGroups")
                .get()
                .then(function (homeScreenGroupsSnapshot) {
                resolve({ count: homeScreenGroupsSnapshot.size });
            });
        });
        return promise;
    };
    HomeScreenService.prototype.getHomeScreenGroups = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("homeScreenGroups")
                .get()
                .then(function (homeScreenGroupsSnapshot) {
                var homeScreenGroups = [];
                homeScreenGroupsSnapshot.forEach(function (doc) {
                    var group = new _models_HomeScreenGroup__WEBPACK_IMPORTED_MODULE_2__["HomeScreenGroup"]();
                    group.groupId = doc.id;
                    group.name = doc.data().name;
                    homeScreenGroups.push(group);
                });
                resolve({ homeScreenGroups: homeScreenGroups });
            });
        });
        return promise;
    };
    HomeScreenService.prototype.addNewHomeScreenGroup = function (newHomeScreenGroup) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("homeScreenGroups")
                .add({
                name: newHomeScreenGroup.name,
                addedAt: firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].FieldValue.serverTimestamp()
            })
                .then(function (ref) {
                resolve({ newHomeScreenGroupId: ref.id });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    HomeScreenService.prototype.editHomeScreenGroupName = function (homeScreenGroupId, homeScreenGroupName) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("homeScreenGroups")
                .doc(homeScreenGroupId)
                .set({
                name: homeScreenGroupName
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    HomeScreenService.prototype.deleteHomeScreenGroup = function (homeScreenGroup) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("homeScreenGroups")
                .doc(homeScreenGroup.groupId)
                .delete()
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    HomeScreenService.prototype.getHomeScreenGroupMovies = function (homeScreenGroup) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("homeScreenGroups")
                .doc(homeScreenGroup.groupId)
                .collection("movies")
                .get()
                .then(function (homeScreenGroupsMoviesSnapshot) {
                var homeScreenGroupMovies = [];
                homeScreenGroupsMoviesSnapshot.forEach(function (doc) {
                    var movie = new _models_Movie__WEBPACK_IMPORTED_MODULE_3__["Movie"]();
                    movie.homeScreenGroupMovieId = doc.id;
                    movie.movieId = doc.data().movieId;
                    movie.name = doc.data().name;
                    movie.picture = doc.data().picture;
                    movie.releaseYear = doc.data().releaseYear;
                    movie.rating = doc.data().rating;
                    movie.description = doc.data().description;
                    movie.videoUrl = doc.data().videoUrl;
                    homeScreenGroupMovies.push(movie);
                });
                resolve({ homeScreenGroupMovies: homeScreenGroupMovies });
            });
        });
        return promise;
    };
    HomeScreenService.prototype.getHomeScreenGroupTvShows = function (homeScreenGroup) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("homeScreenGroups")
                .doc(homeScreenGroup.groupId)
                .collection("tvShows")
                .get()
                .then(function (homeScreenGroupTvShowsSnapshot) {
                var homeScreenGroupTvShows = [];
                homeScreenGroupTvShowsSnapshot.forEach(function (doc) {
                    var tvShow = new _models_TvShow__WEBPACK_IMPORTED_MODULE_4__["TvShow"]();
                    tvShow.homeScreenGroupTvShowId = doc.id;
                    tvShow.tvShowId = doc.data().tvShowId;
                    tvShow.name = doc.data().name;
                    tvShow.picture = doc.data().picture;
                    tvShow.releaseYear = doc.data().releaseYear;
                    tvShow.rating = doc.data().rating;
                    tvShow.description = doc.data().description;
                    homeScreenGroupTvShows.push(tvShow);
                });
                resolve({ homeScreenGroupTvShows: homeScreenGroupTvShows });
            });
        });
        return promise;
    };
    HomeScreenService.prototype.addMovieToHomeScreenGroup = function (movie, homeScreenGroup) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("homeScreenGroups")
                .doc(homeScreenGroup.groupId)
                .collection("movies")
                .add({
                homeScreenGroupId: homeScreenGroup.groupId,
                movieId: movie.movieId,
                name: movie.name,
                picture: movie.picture,
                releaseYear: movie.releaseYear,
                rating: movie.rating,
                description: movie.description,
                videoUrl: movie.videoUrl,
                addedAt: firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].FieldValue.serverTimestamp()
            })
                .then(function (ref) {
                resolve({ newHomeScreenGroupMovieId: ref.id });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    HomeScreenService.prototype.removeMovieFromHomeScreenGroup = function (movie, homeScreenGroup) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("homeScreenGroups")
                .doc(homeScreenGroup.groupId)
                .collection("movies")
                .doc(movie.homeScreenGroupMovieId)
                .delete()
                .then(function (ref) {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    HomeScreenService.prototype.addTvShowToHomeScreenGroup = function (tvShow, homeScreenGroup) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("homeScreenGroups")
                .doc(homeScreenGroup.groupId)
                .collection("tvShows")
                .add({
                homeScreenGroupId: homeScreenGroup.groupId,
                tvShowId: tvShow.tvShowId,
                name: tvShow.name,
                picture: tvShow.picture,
                releaseYear: tvShow.releaseYear,
                rating: tvShow.rating,
                description: tvShow.description,
                addedAt: firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].FieldValue.serverTimestamp()
            })
                .then(function (ref) {
                resolve({ newHomeScreenGroupTvShowId: ref.id });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    HomeScreenService.prototype.removeTvShowFromHomeScreenGroup = function (tvShow, homeScreenGroup) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("homeScreenGroups")
                .doc(homeScreenGroup.groupId)
                .collection("tvShows")
                .doc(tvShow.homeScreenGroupTvShowId)
                .delete()
                .then(function (ref) {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    HomeScreenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], HomeScreenService);
    return HomeScreenService;
}());



/***/ }),

/***/ "./src/app/services/Firestore/MoviesService/movies.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/services/Firestore/MoviesService/movies.service.ts ***!
  \********************************************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/Movie */ "./src/app/models/Movie.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoviesService = /** @class */ (function () {
    function MoviesService() {
    }
    MoviesService.prototype.getMoviesCount = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("movies")
                .get()
                .then(function (moviesSnapshot) {
                resolve({ count: moviesSnapshot.size });
            });
        });
        return promise;
    };
    MoviesService.prototype.getMovies = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("movies")
                .orderBy("addedAt", "desc")
                .get()
                .then(function (moviesSnapshot) {
                var movies = [];
                moviesSnapshot.forEach(function (doc) {
                    var movie = new _models_Movie__WEBPACK_IMPORTED_MODULE_2__["Movie"]();
                    movie.movieId = doc.id;
                    movie.name = doc.data().name;
                    movie.picture = doc.data().picture;
                    movie.detailsPicture = doc.data().detailsPicture;
                    movie.releaseYear = doc.data().releaseYear;
                    movie.rating = doc.data().rating;
                    movie.description = doc.data().description;
                    movie.videoUrl = doc.data().videoUrl;
                    movies.push(movie);
                });
                resolve({ movies: movies });
            });
        });
        return promise;
    };
    MoviesService.prototype.deleteMovie = function (movie) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("movies")
                .doc(movie.movieId)
                .delete()
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    MoviesService.prototype.addNewMovie = function (newMovie) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("movies")
                .add({
                name: newMovie.name,
                picture: newMovie.picture,
                detailsPicture: newMovie.detailsPicture,
                releaseYear: newMovie.releaseYear,
                rating: newMovie.rating,
                description: newMovie.description,
                videoUrl: newMovie.videoUrl,
                addedAt: firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].FieldValue.serverTimestamp()
            })
                .then(function (ref) {
                resolve({ newMovieId: ref.id });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    MoviesService.prototype.editMovieName = function (movieId, movieName) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("movies")
                .doc(movieId)
                .set({
                name: movieName
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    MoviesService.prototype.editHomeScreenPicture = function (movieId, moviePicture) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("movies")
                .doc(movieId)
                .set({
                picture: moviePicture
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    MoviesService.prototype.editDetailsPicture = function (movieId, detailsPicture) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("movies")
                .doc(movieId)
                .set({
                detailsPicture: detailsPicture
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    MoviesService.prototype.editMovieReleaseYear = function (movieId, movieYear) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("movies")
                .doc(movieId)
                .set({
                releaseYear: movieYear
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    MoviesService.prototype.editMovieRating = function (movieId, movieRating) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("movies")
                .doc(movieId)
                .set({
                rating: movieRating
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    MoviesService.prototype.editMovieDescription = function (movieId, movieDescription) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("movies")
                .doc(movieId)
                .set({
                description: movieDescription
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    MoviesService.prototype.editMovieVideo = function (movieId, movieVideoUrl) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("movies")
                .doc(movieId)
                .set({
                videoUrl: movieVideoUrl
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    MoviesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], MoviesService);
    return MoviesService;
}());



/***/ }),

/***/ "./src/app/services/Firestore/SeasonsService/seasons-service.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/services/Firestore/SeasonsService/seasons-service.service.ts ***!
  \******************************************************************************/
/*! exports provided: SeasonsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonsService", function() { return SeasonsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EpisodesService_episodes_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../EpisodesService/episodes-service.service */ "./src/app/services/Firestore/EpisodesService/episodes-service.service.ts");
/* harmony import */ var _models_Season__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/Season */ "./src/app/models/Season.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SeasonsService = /** @class */ (function () {
    function SeasonsService(episodesService) {
        this.episodesService = episodesService;
    }
    SeasonsService.prototype.getSeasons = function (tvShow) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("tvShows")
                .doc(tvShow.tvShowId)
                .collection("seasons")
                .orderBy("addedAt", "asc")
                .get()
                .then(function (tvShowSeasonsSnapshot) {
                var tvShowSeasons = [];
                tvShowSeasonsSnapshot.forEach(function (doc) {
                    var season = new _models_Season__WEBPACK_IMPORTED_MODULE_3__["Season"]();
                    season.seasonId = doc.id;
                    season.name = doc.data().name;
                    season.tvShowId = doc.data().tvShowId;
                    season.tvShowName = doc.data().tvShowName;
                    tvShowSeasons.push(season);
                });
                resolve({ tvShowSeasons: tvShowSeasons });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    SeasonsService.prototype.addNewSeason = function (tvShow, season) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("tvShows")
                .doc(tvShow.tvShowId)
                .collection("seasons")
                .add({
                name: season.name,
                tvShowId: season.tvShowId,
                tvShowName: season.tvShowName,
                addedAt: firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].FieldValue.serverTimestamp()
            })
                .then(function (ref) {
                resolve({ newSeasonId: ref.id });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    SeasonsService.prototype.deleteSeason = function (tvShow, season) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("tvShows")
                .doc(tvShow.tvShowId)
                .collection("seasons")
                .doc(season.seasonId)
                .delete()
                .then(function () {
                _this.episodesService.getEpisodes(tvShow, season).then(function (result) {
                    result.seasonEpisodes.forEach(function (episode) {
                        _this.episodesService.deleteEpisode(tvShow, season, episode);
                    });
                    resolve();
                });
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    SeasonsService.prototype.editSeasonName = function (tvShow, seasonId, seasonName) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("tvShows")
                .doc(tvShow.tvShowId)
                .collection("seasons")
                .doc(seasonId)
                .set({
                name: seasonName
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    SeasonsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_EpisodesService_episodes_service_service__WEBPACK_IMPORTED_MODULE_2__["EpisodesService"]])
    ], SeasonsService);
    return SeasonsService;
}());



/***/ }),

/***/ "./src/app/services/Firestore/TvShowsService/tv-shows-service.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/services/Firestore/TvShowsService/tv-shows-service.service.ts ***!
  \*******************************************************************************/
/*! exports provided: TvShowsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvShowsService", function() { return TvShowsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../FirebaseStorage/firebase-storage.service */ "./src/app/services/FirebaseStorage/firebase-storage.service.ts");
/* harmony import */ var _models_TvShow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/TvShow */ "./src/app/models/TvShow.ts");
/* harmony import */ var _SeasonsService_seasons_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SeasonsService/seasons-service.service */ "./src/app/services/Firestore/SeasonsService/seasons-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TvShowsService = /** @class */ (function () {
    function TvShowsService(firebaseStorage, seasonsService) {
        this.firebaseStorage = firebaseStorage;
        this.seasonsService = seasonsService;
    }
    TvShowsService.prototype.getTvShowsCount = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("tvShows")
                .get()
                .then(function (tvShowsSnapshot) {
                resolve({ count: tvShowsSnapshot.size });
            });
        });
        return promise;
    };
    TvShowsService.prototype.getTvShows = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("tvShows")
                .orderBy("addedAt", "desc")
                .get()
                .then(function (tvShowsSnapshot) {
                var tvShows = [];
                tvShowsSnapshot.forEach(function (doc) {
                    var tvShow = new _models_TvShow__WEBPACK_IMPORTED_MODULE_3__["TvShow"]();
                    tvShow.tvShowId = doc.id;
                    tvShow.name = doc.data().name;
                    tvShow.picture = doc.data().picture;
                    tvShow.detailsPicture = doc.data().detailsPicture;
                    tvShow.releaseYear = doc.data().releaseYear;
                    tvShow.rating = doc.data().rating;
                    tvShow.description = doc.data().description;
                    tvShows.push(tvShow);
                });
                resolve({ tvShows: tvShows });
            });
        });
        return promise;
    };
    TvShowsService.prototype.addNewTvShow = function (newTvShow) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("tvShows")
                .add({
                name: newTvShow.name,
                picture: newTvShow.picture,
                detailsPicture: newTvShow.detailsPicture,
                releaseYear: newTvShow.releaseYear,
                rating: newTvShow.rating,
                description: newTvShow.description,
                addedAt: firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].FieldValue.serverTimestamp()
            })
                .then(function (ref) {
                resolve({ newTvShowId: ref.id });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    TvShowsService.prototype.deleteTvShow = function (tvShow) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("tvShows")
                .doc(tvShow.tvShowId)
                .delete()
                .then(function () {
                // Delete TV show picture
                var deletePath = "/TV Shows/" + tvShow.name + "/tvShowPicture";
                _this.firebaseStorage.deleteFile(deletePath);
                _this.seasonsService.getSeasons(tvShow).then(function (result) {
                    result.tvShowSeasons.forEach(function (season) {
                        _this.seasonsService.deleteSeason(tvShow, season);
                    });
                    resolve();
                });
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    TvShowsService.prototype.editTvShowName = function (tvShowId, tvShowName) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("tvShows")
                .doc(tvShowId)
                .set({
                name: tvShowName
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    TvShowsService.prototype.editTvShowPicture = function (tvShowId, tvShowPicture) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("tvShows")
                .doc(tvShowId)
                .set({
                picture: tvShowPicture
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    TvShowsService.prototype.editDetailsPicture = function (tvShowId, detailsPicture) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("tvShows")
                .doc(tvShowId)
                .set({
                detailsPicture: detailsPicture
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    TvShowsService.prototype.editTvReleaseYear = function (tvShowId, tvShowYear) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("tvShows")
                .doc(tvShowId)
                .set({
                releaseYear: tvShowYear
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    TvShowsService.prototype.editTvRating = function (tvShowId, tvShowRating) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("tvShows")
                .doc(tvShowId)
                .set({
                rating: tvShowRating
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    TvShowsService.prototype.editTvDescription = function (tvShowId, tvShowDescription) {
        var promise = new Promise(function (resolve, reject) {
            var db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
            db.collection("tvShows")
                .doc(tvShowId)
                .set({
                description: tvShowDescription
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    TvShowsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_FirebaseStorage_firebase_storage_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseStorageService"],
            _SeasonsService_seasons_service_service__WEBPACK_IMPORTED_MODULE_4__["SeasonsService"]])
    ], TvShowsService);
    return TvShowsService;
}());



/***/ }),

/***/ "./src/assets/js/demo.js":
/*!*******************************!*\
  !*** ./src/assets/js/demo.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

type = ['', 'info', 'success', 'warning', 'danger'];

$().ready(function () {

  $sidebar = $('.sidebar');
  $off_canvas_sidebar = $('.off-canvas-sidebar');

  window_width = $(window).width();

  if (window_width > 767) {
    if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
      $('.fixed-plugin .dropdown').addClass('open');
    }

  }

  $('.fixed-plugin a').click(function (event) {
    // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
    if ($(this).hasClass('switch-trigger')) {
      if (event.stopPropagation) {
        event.stopPropagation();
      }
      else if (window.event) {
        window.event.cancelBubble = true;
      }
    }
  });

  $('.fixed-plugin .background-color span').click(function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    var new_color = $(this).data('color');

    if ($sidebar.length != 0) {
      $sidebar.attr('data-background-color', new_color);
    }

    if ($off_canvas_sidebar.length != 0) {
      $off_canvas_sidebar.attr('data-background-color', new_color);
    }
  });

  $('.fixed-plugin .active-color span').click(function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    var new_color = $(this).data('color');

    if ($sidebar.length != 0) {
      $sidebar.attr('data-active-color', new_color);
    }

    if ($off_canvas_sidebar.length != 0) {
      $off_canvas_sidebar.attr('data-active-color', new_color);
    }
  });

  if ($('#twitter').length != 0) {
    $('#twitter').sharrre({
      share: {
        twitter: true
      },
      enableHover: false,
      enableTracking: true,
      buttons: { twitter: { via: 'CreativeTim' } },
      click: function (api, options) {
        api.simulateClick();
        api.openPopup('twitter');
      },
      template: '<i class="fa fa-twitter"></i>',
      url: 'http://demos.creative-tim.com/paper-dashboard-pro/examples/dashboard/overview.html'
    });
  }

  if ($('#facebook').length != 0) {
    $('#facebook').sharrre({
      share: {
        facebook: true
      },
      enableHover: false,
      enableTracking: true,
      click: function (api, options) {
        api.simulateClick();
        api.openPopup('facebook');
      },
      template: '<i class="fa fa-facebook-square"></i>',
      url: 'http://demos.creative-tim.com/paper-dashboard-pro/examples/dashboard/overview.html'
    });
  }

});

demo = {

  initCirclePercentage: function () {

    $('#chartDashboard, #chartOrders, #chartNewVisitors, #chartSubscriptions, #chartDashboardDoc, #chartOrdersDoc').easyPieChart({
      lineWidth: 6,
      size: 160,
      scaleColor: false,
      trackColor: 'rgba(255,255,255,.25)',
      barColor: '#FFFFFF',
      animate: ({ duration: 5000, enabled: true })

    });


  },

  initGoogleMaps: function () {

    // Satellite Map
    var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    var mapOptions = {
      zoom: 3,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    }

    var map = new google.maps.Map(document.getElementById("satelliteMap"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: "Satellite Map!"
    });

    marker.setMap(map);


  },

  initSmallGoogleMaps: function () {

    // Regular Map
    var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    var mapOptions = {
      zoom: 8,
      center: myLatlng,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
    }

    var map = new google.maps.Map(document.getElementById("regularMap"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: "Regular Map!"
    });

    marker.setMap(map);


    // Custom Skin & Settings Map
    var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    var mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
      disableDefaultUI: true, // a way to quickly hide all controls
      zoomControl: true,
      styles: [{ "featureType": "water", "stylers": [{ "saturation": 43 }, { "lightness": -11 }, { "hue": "#0088ff" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "hue": "#ff0000" }, { "saturation": -100 }, { "lightness": 99 }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#808080" }, { "lightness": 54 }] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{ "color": "#ece2d9" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#ccdca1" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#767676" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "poi", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#b8cb93" }] }, { "featureType": "poi.park", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.sports_complex", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.medical", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.business", "stylers": [{ "visibility": "simplified" }] }]

    }

    var map = new google.maps.Map(document.getElementById("customSkinMap"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: "Custom Skin & Settings Map!"
    });

    marker.setMap(map);

  },


  initVectorMap: function () {
    var mapData = {
      "AU": 760,
      "BR": 550,
      "CA": 120,
      "DE": 1300,
      "FR": 540,
      "GB": 690,
      "GE": 200,
      "IN": 200,
      "RO": 600,
      "RU": 300,
      "US": 2920,
    };

    $('#worldMap').vectorMap({
      map: 'world_mill_en',
      backgroundColor: "transparent",
      zoomOnScroll: false,
      regionStyle: {
        initial: {
          fill: '#e4e4e4',
          "fill-opacity": 0.9,
          stroke: 'none',
          "stroke-width": 0,
          "stroke-opacity": 0
        }
      },

      series: {
        regions: [{
          values: mapData,
          scale: ["#AAAAAA", "#444444"],
          normalizeFunction: 'polynomial'
        }]
      },
    });
  },

  initFullScreenGoogleMap: function () {
    var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    var mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
      styles: [{ "featureType": "water", "stylers": [{ "saturation": 43 }, { "lightness": -11 }, { "hue": "#0088ff" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "hue": "#ff0000" }, { "saturation": -100 }, { "lightness": 99 }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#808080" }, { "lightness": 54 }] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{ "color": "#ece2d9" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#ccdca1" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#767676" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "poi", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#b8cb93" }] }, { "featureType": "poi.park", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.sports_complex", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.medical", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.business", "stylers": [{ "visibility": "simplified" }] }]

    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: "Hello World!"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
  },

  initOverviewDashboardDoc: function () {
    /*  **************** Chart Total Earnings - single line ******************** */

    var dataPrice = {
      labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June'],
      series: [
        [230, 340, 400, 300, 570, 500, 800]
      ]
    };

    var optionsPrice = {
      showPoint: false,
      lineSmooth: true,
      height: "210px",
      axisX: {
        showGrid: false,
        showLabel: true
      },
      axisY: {
        offset: 40,
        showGrid: false
      },
      low: 0,
      high: 'auto',
      classNames: {
        line: 'ct-line ct-green'
      }
    };

    Chartist.Line('#chartTotalEarningsDoc', dataPrice, optionsPrice);

    /*  **************** Chart Subscriptions - single line ******************** */

    var dataDays = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      series: [
        [60, 50, 30, 50, 70, 60, 90, 100]
      ]
    };

    var optionsDays = {
      showPoint: false,
      lineSmooth: true,
      height: "210px",
      axisX: {
        showGrid: false,
        showLabel: true
      },
      axisY: {
        offset: 40,
        showGrid: false
      },
      low: 0,
      high: 'auto',
      classNames: {
        line: 'ct-line ct-red'
      }
    };

    Chartist.Line('#chartTotalSubscriptionsDoc', dataDays, optionsDays);
  },

  initOverviewDashboard: function () {

    /*  **************** Chart Total Earnings - single line ******************** */

    var dataPrice = {
      labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June'],
      series: [
        [230, 340, 400, 300, 570, 500, 800]
      ]
    };

    var optionsPrice = {
      showPoint: false,
      lineSmooth: true,
      height: "210px",
      axisX: {
        showGrid: false,
        showLabel: true
      },
      axisY: {
        offset: 40,
        showGrid: false
      },
      low: 0,
      high: 'auto',
      classNames: {
        line: 'ct-line ct-green'
      }
    };

    Chartist.Line('#chartTotalEarnings', dataPrice, optionsPrice);

    /*  **************** Chart Subscriptions - single line ******************** */

    var dataDays = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      series: [
        [60, 50, 30, 50, 70, 60, 90, 100]
      ]
    };

    var optionsDays = {
      showPoint: false,
      lineSmooth: true,
      height: "210px",
      axisX: {
        showGrid: false,
        showLabel: true
      },
      axisY: {
        offset: 40,
        showGrid: false
      },
      low: 0,
      high: 'auto',
      classNames: {
        line: 'ct-line ct-red'
      }
    };

    Chartist.Line('#chartTotalSubscriptions', dataDays, optionsDays);

    /*  **************** Chart Total Downloads - single line ******************** */

    var dataDownloads = {
      labels: ['2009', '2010', '2011', '2012', '2013', '2014'],
      series: [
        [1200, 1000, 3490, 8345, 3256, 2566]
      ]
    };

    var optionsDownloads = {
      showPoint: false,
      lineSmooth: true,
      height: "210px",
      axisX: {
        showGrid: false,
        showLabel: true
      },
      axisY: {
        offset: 40,
        showGrid: false
      },
      low: 0,
      high: 'auto',
      classNames: {
        line: 'ct-line ct-orange'
      }
    };

    Chartist.Line('#chartTotalDownloads', dataDownloads, optionsDownloads);
  },

  initStatsDashboard: function () {

    var dataSales = {
      labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
      series: [
        [287, 385, 490, 562, 594, 626, 698, 895, 952],
        [67, 152, 193, 240, 387, 435, 535, 642, 744],
        [23, 113, 67, 108, 190, 239, 307, 410, 410]
      ]
    };

    var optionsSales = {
      lineSmooth: false,
      low: 0,
      high: 1000,
      showArea: true,
      height: "245px",
      axisX: {
        showGrid: false,
      },
      lineSmooth: Chartist.Interpolation.simple({
        divisor: 3
      }),
      showLine: true,
      showPoint: false,
    };

    var responsiveSales = [
      ['screen and (max-width: 640px)', {
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);


    var data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
        [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
      ]
    };

    var options = {
      seriesBarDistance: 10,
      axisX: {
        showGrid: false
      },
      height: "245px"
    };

    var responsiveOptions = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    Chartist.Line('#chartActivity', data, options, responsiveOptions);

    Chartist.Pie('#chartPreferences', {
      labels: ['62%', '32%', '6%'],
      series: [62, 32, 6]
    });
  },

  initChartsPage: function () {
    /*  **************** 24 Hours Performance - single line ******************** */

    var dataPerformance = {
      labels: ['6pm', '9pm', '11pm', '2am', '4am', '8am', '2pm', '5pm', '8pm', '11pm', '4am'],
      series: [
        [1, 6, 8, 7, 4, 7, 8, 12, 16, 17, 14, 13]
      ]
    };

    var optionsPerformance = {
      showPoint: false,
      lineSmooth: true,
      height: "200px",
      axisX: {
        showGrid: false,
        showLabel: true
      },
      axisY: {
        offset: 40,

      },
      low: 0,
      high: 16,
      height: "250px"
    };


    Chartist.Line('#chartPerformance', dataPerformance, optionsPerformance);

    /*   **************** 2014 Sales - Bar Chart ********************    */

    var data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
        [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
      ]
    };

    var options = {
      seriesBarDistance: 10,
      axisX: {
        showGrid: false
      },
      height: "250px"
    };

    var responsiveOptions = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    Chartist.Bar('#chartActivity', data, options, responsiveOptions);


    /*  **************** NASDAQ: AAPL - single line with points ******************** */

    var dataStock = {
      labels: ['\'07', '\'08', '\'09', '\'10', '\'11', '\'12', '\'13', '\'14', '\'15'],
      series: [
        [22.20, 34.90, 42.28, 51.93, 62.21, 80.23, 62.21, 82.12, 102.50, 107.23]
      ]
    };

    var optionsStock = {
      lineSmooth: false,
      height: "200px",
      axisY: {
        offset: 40,
        labelInterpolationFnc: function (value) {
          return '$' + value;
        }

      },
      low: 10,
      height: "250px",
      high: 110,
      classNames: {
        point: 'ct-point ct-green',
        line: 'ct-line ct-green'
      }
    };

    Chartist.Line('#chartStock', dataStock, optionsStock);

    /*  **************** Views  - barchart ******************** */

    var dataViews = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
      ]
    };

    var optionsViews = {
      seriesBarDistance: 10,
      classNames: {
        bar: 'ct-bar'
      },
      axisX: {
        showGrid: false,

      },
      height: "250px"

    };

    var responsiveOptionsViews = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    Chartist.Bar('#chartViews', dataViews, optionsViews, responsiveOptionsViews);


  },

  showSwal: function (type) {
    if (type == 'basic') {
      swal({
        title: "Here's a message!",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success btn-fill"
      });

    } else if (type == 'title-and-text') {
      swal({
        title: "Here's a message!",
        text: "It's pretty, isn't it?",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-info btn-fill"
      });

    } else if (type == 'success-message') {
      swal({
        title: "Good job!",
        text: "You clicked the button!",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success btn-fill",
        type: "success"
      });

    } else if (type == 'warning-message-and-confirmation') {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success btn-fill',
        cancelButtonClass: 'btn btn-danger btn-fill',
        confirmButtonText: 'Yes, delete it!',
        buttonsStyling: false
      }).then(function () {
        swal({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          type: 'success',
          confirmButtonClass: "btn btn-success btn-fill",
          buttonsStyling: false
        })
      });
    } else if (type == 'warning-message-and-cancel') {
      swal({
        title: 'Are you sure?',
        text: 'You will not be able to recover this imaginary file!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it',
        confirmButtonClass: "btn btn-success btn-fill",
        cancelButtonClass: "btn btn-danger btn-fill",
        buttonsStyling: false
      }).then(function () {
        swal({
          title: 'Deleted!',
          text: 'Your imaginary file has been deleted.',
          type: 'success',
          confirmButtonClass: "btn btn-success btn-fill",
          buttonsStyling: false
        })
      }, function (dismiss) {
        // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
        if (dismiss === 'cancel') {
          swal({
            title: 'Cancelled',
            text: 'Your imaginary file is safe :)',
            type: 'error',
            confirmButtonClass: "btn btn-info btn-fill",
            buttonsStyling: false
          })
        }
      })

    } else if (type == 'custom-html') {
      swal({
        title: 'HTML example',
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success btn-fill",
        html:
          'You can use <b>bold text</b>, ' +
          '<a href="http://github.com">links</a> ' +
          'and other HTML tags'
      });

    } else if (type == 'auto-close') {
      swal({
        title: "Auto close alert!",
        text: "I will close in 2 seconds.",
        timer: 2000,
        showConfirmButton: false
      });
    } else if (type == 'input-field') {
      swal({
        title: 'Input something',
        html: '<div class="form-group">' +
          '<input id="input-field" type="text" class="form-control" />' +
          '</div>',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success btn-fill',
        cancelButtonClass: 'btn btn-danger btn-fill',
        buttonsStyling: false
      }).then(function (result) {
        swal({
          type: 'success',
          html: 'You entered: <strong>' +
            $('#input-field').val() +
            '</strong>',
          confirmButtonClass: 'btn btn-success btn-fill',
          buttonsStyling: false

        })
      }).catch(swal.noop)
    }
  },

  checkFullPageBackgroundImage: function () {
    $page = $('.full-page');
    image_src = $page.data('image');

    if (image_src !== undefined) {
      image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
      $page.append(image_container);
    }
  },

  initWizard: function () {
    $(document).ready(function () {

      var $validator = $("#wizardForm").validate({
        rules: {
          email: {
            required: true,
            email: true,
            minlength: 5
          },
          first_name: {
            required: false,
            minlength: 5
          },
          last_name: {
            required: false,
            minlength: 5
          },
          website: {
            required: true,
            minlength: 5,
            url: true
          },
          framework: {
            required: false,
            minlength: 4
          },
          cities: {
            required: true
          },
          price: {
            number: true
          }
        }
      });

      // you can also use the nav-pills-[blue | azure | green | orange | red] for a different color of wizard
      $('#wizardCard').bootstrapWizard({
        tabClass: 'nav nav-pills',
        nextSelector: '.btn-next',
        previousSelector: '.btn-back',
        onNext: function (tab, navigation, index) {
          var $valid = $('#wizardForm').valid();

          if (!$valid) {
            $validator.focusInvalid();
            return false;
          }
        },
        onInit: function (tab, navigation, index) {

          //check number of tabs and fill the entire row
          var $total = navigation.find('li').length;
          $width = 100 / $total;

          $display_width = $(document).width();

          if ($display_width < 600 && $total > 3) {
            $width = 50;
          }

          navigation.find('li').css('width', $width + '%');
        },
        onTabClick: function (tab, navigation, index) {
          // Disable the posibility to click on tabs
          return false;
        },
        onTabShow: function (tab, navigation, index) {
          var $total = navigation.find('li').length;
          var $current = index + 1;

          var wizard = navigation.closest('.card-wizard');

          // If it's the last tab then hide the last button and show the finish instead
          if ($current >= $total) {
            $(wizard).find('.btn-next').hide();
            $(wizard).find('.btn-finish').show();
          } else if ($current == 1) {
            $(wizard).find('.btn-back').hide();
          } else {
            $(wizard).find('.btn-back').show();
            $(wizard).find('.btn-next').show();
            $(wizard).find('.btn-finish').hide();
          }
        }
      });
    });

    function onFinishWizard() {
      //here you can do something, sent the form to server via ajax and show a success message with swal

      swal("Good job!", "You clicked the finish button!", "success");
    }
  },

  initFormExtendedSliders: function () {
    // Sliders for demo purpose in refine cards section
    var slider = document.getElementById('sliderRegular');

    noUiSlider.create(slider, {
      start: 40,
      connect: [true, false],
      range: {
        min: 0,
        max: 100
      }
    });

    var slider2 = document.getElementById('sliderDouble');

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  },



  initFormExtendedDatetimepickers: function () {
    $('.datetimepicker').datetimepicker({
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: 'fa fa-chevron-left',
        next: 'fa fa-chevron-right',
        today: 'fa fa-screenshot',
        clear: 'fa fa-trash',
        close: 'fa fa-remove'
      }
    });

    $('.datepicker').datetimepicker({
      format: 'MM/DD/YYYY',    //use this format if you want the 12hours timpiecker with AM/PM toggle
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: 'fa fa-chevron-left',
        next: 'fa fa-chevron-right',
        today: 'fa fa-screenshot',
        clear: 'fa fa-trash',
        close: 'fa fa-remove'
      }
    });

    $('.timepicker').datetimepicker({
      //          format: 'H:mm',    // use this format if you want the 24hours timepicker
      format: 'h:mm A',    //use this format if you want the 12hours timpiecker with AM/PM toggle
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: 'fa fa-chevron-left',
        next: 'fa fa-chevron-right',
        today: 'fa fa-screenshot',
        clear: 'fa fa-trash',
        close: 'fa fa-remove'
      }

    });
  },

  initFullCalendar: function () {
    $calendar = $('#fullCalendar');

    today = new Date();
    y = today.getFullYear();
    m = today.getMonth();
    d = today.getDate();

    $calendar.fullCalendar({
      viewRender: function (view, element) {
        // We make sure that we activate the perfect scrollbar when the view isn't on Month
        if (view.name != 'month') {
          $(element).find('.fc-scroller').perfectScrollbar();
        }
      },
      header: {
        left: 'title',
        center: 'month,agendaWeek,agendaDay',
        right: 'prev,next,today'
      },
      defaultDate: today,
      selectable: true,
      selectHelper: true,
      views: {
        month: { // name of view
          titleFormat: 'MMMM YYYY'
          // other view-specific options here
        },
        week: {
          titleFormat: " MMMM D YYYY"
        },
        day: {
          titleFormat: 'D MMM, YYYY'
        }
      },

      select: function (start, end) {

        // on select we show the Sweet Alert modal with an input
        swal({
          title: 'Create an Event',
          html: '<div class="form-group">' +
            '<input class="form-control" placeholder="Event Title" id="input-field">' +
            '</div>',
          showCancelButton: true,
          confirmButtonClass: 'btn btn-success',
          cancelButtonClass: 'btn btn-danger',
          buttonsStyling: false
        }).then(function (result) {

          var eventData;
          event_title = $('#input-field').val();

          if (event_title) {
            eventData = {
              title: event_title,
              start: start,
              end: end
            };
            $calendar.fullCalendar('renderEvent', eventData, true); // stick? = true
          }

          $calendar.fullCalendar('unselect');

        });
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events


      // color classes: [ event-blue | event-azure | event-green | event-orange | event-red ]
      events: [
        {
          title: 'All Day Event',
          start: new Date(y, m, 1),
          className: 'event-default'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: new Date(y, m, d - 4, 6, 0),
          allDay: false,
          className: 'event-rose'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: new Date(y, m, d + 3, 6, 0),
          allDay: false,
          className: 'event-rose'
        },
        {
          title: 'Meeting',
          start: new Date(y, m, d - 1, 10, 30),
          allDay: false,
          className: 'event-green'
        },
        {
          title: 'Lunch',
          start: new Date(y, m, d + 7, 12, 0),
          end: new Date(y, m, d + 7, 14, 0),
          allDay: false,
          className: 'event-red'
        },
        {
          title: 'Md-pro Launch',
          start: new Date(y, m, d - 2, 12, 0),
          allDay: true,
          className: 'event-azure'
        },
        {
          title: 'Birthday Party',
          start: new Date(y, m, d + 1, 19, 0),
          end: new Date(y, m, d + 1, 22, 30),
          allDay: false,
          className: 'event-azure'
        },
        {
          title: 'Click for Creative Tim',
          start: new Date(y, m, 21),
          end: new Date(y, m, 22),
          url: 'http://www.creative-tim.com/',
          className: 'event-orange'
        },
        {
          title: 'Click for Google',
          start: new Date(y, m, 21),
          end: new Date(y, m, 22),
          url: 'http://www.creative-tim.com/',
          className: 'event-orange'
        }
      ]
    });
  },

  showNotification: function (from, align) {
    color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: "ti-gift",
      message: "Welcome to <b>Paper Dashboard</b> - a beautiful dashboard for every web developer."

    }, {
        type: type[color],
        timer: 4000,
        placement: {
          from: from,
          align: align
        }
      });
  },

  initDocumentationCharts: function () {
    //     	init single simple line chart
    var dataPerformance = {
      labels: ['6pm', '9pm', '11pm', '2am', '4am', '8am', '2pm', '5pm', '8pm', '11pm', '4am'],
      series: [
        [1, 6, 8, 7, 4, 7, 8, 12, 16, 17, 14, 13]
      ]
    };

    var optionsPerformance = {
      showPoint: false,
      lineSmooth: true,
      height: "200px",
      axisX: {
        showGrid: false,
        showLabel: true
      },
      axisY: {
        offset: 40,
      },
      low: 0,
      high: 16,
      height: "250px"
    };

    Chartist.Line('#chartPerformance', dataPerformance, optionsPerformance);

    //     init single line with points chart
    var dataStock = {
      labels: ['\'07', '\'08', '\'09', '\'10', '\'11', '\'12', '\'13', '\'14', '\'15'],
      series: [
        [22.20, 34.90, 42.28, 51.93, 62.21, 80.23, 62.21, 82.12, 102.50, 107.23]
      ]
    };

    var optionsStock = {
      lineSmooth: false,
      height: "200px",
      axisY: {
        offset: 40,
        labelInterpolationFnc: function (value) {
          return '$' + value;
        }

      },
      low: 10,
      height: "250px",
      high: 110,
      classNames: {
        point: 'ct-point ct-green',
        line: 'ct-line ct-green'
      }
    };

    Chartist.Line('#chartStock', dataStock, optionsStock);

    //      init multiple lines chart
    var dataSales = {
      labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
      series: [
        [287, 385, 490, 562, 594, 626, 698, 895, 952],
        [67, 152, 193, 240, 387, 435, 535, 642, 744],
        [23, 113, 67, 108, 190, 239, 307, 410, 410]
      ]
    };

    var optionsSales = {
      lineSmooth: false,
      low: 0,
      high: 1000,
      showArea: true,
      height: "245px",
      axisX: {
        showGrid: false,
      },
      lineSmooth: Chartist.Interpolation.simple({
        divisor: 3
      }),
      showLine: true,
      showPoint: false,
    };

    var responsiveSales = [
      ['screen and (max-width: 640px)', {
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);

    //      pie chart
    Chartist.Pie('#chartPreferences', {
      labels: ['62%', '32%', '6%'],
      series: [62, 32, 6]
    });

    //      bar chart
    var dataViews = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
      ]
    };

    var optionsViews = {
      seriesBarDistance: 10,
      classNames: {
        bar: 'ct-bar'
      },
      axisX: {
        showGrid: false,

      },
      height: "250px"

    };

    var responsiveOptionsViews = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    Chartist.Bar('#chartViews', dataViews, optionsViews, responsiveOptionsViews);

    //     multiple bars chart
    var data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
        [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
      ]
    };

    var options = {
      seriesBarDistance: 10,
      axisX: {
        showGrid: false
      },
      height: "245px"
    };

    var responsiveOptions = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    Chartist.Line('#chartActivity', data, options, responsiveOptions);
  },
  
  showNotification: function(from, align, color, icon, message) {
    $.notify(
      {
        icon: icon,
        message: message
      },
      {
        type: type[color],
        timer: 2000,
        placement: {
          from: from,
          align: align
        }
      }
    );
  },

  showSuccessNotification: function(message) {
    this.showNotification("top", "right", 2, "ti-check", message);
  },

  showWarningNotification: function(message) {
    this.showNotification("top", "right", 3, "ti-alert", message);
  },

  showErrorNotification: function(message) {
    this.showNotification("top", "right", 4, "ti-close", message);
  }

}


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

module.exports = __webpack_require__(/*! D:\Archivos de Marin\Chamba\ionNetflixBackend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map