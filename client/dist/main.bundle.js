webpackJsonp([1,4],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = (function () {
    function CategoryService(_http) {
        this._http = _http;
    }
    CategoryService.prototype.getAll = function (category, user_id) {
        return this._http.get('/api/category/' + category + '/' + user_id)
            .map(function (res) { return res.json(); });
        //return PROJEKTY.map(p => this.clone(p));
    };
    CategoryService.prototype.getList = function (list) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this._http.post('/api/category/get/list/', JSON.stringify(list), { headers: headers }).map(function (res) { return res.json(); });
    };
    CategoryService.prototype.getOne = function (id) {
        return this._http.get('/api/category/category/' + id)
            .map(function (res) { return res.json(); });
        //return PROJEKTY.map(p => this.clone(p));
    };
    CategoryService.prototype.saveItem = function (project, category, fileName) {
        //console.log('bla');
        var Project = Object.assign(project, fileName);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this._http.post('/api/category/save/' + category, JSON.stringify(Project), { headers: headers }).map(function (res) { return res.json(); });
    };
    CategoryService.prototype.saveLinks = function (insertID, name, InternalLinks) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this._http.post('/api/category/insert/' + insertID + '/' + name, JSON.stringify(InternalLinks), { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (r) {
        });
    };
    CategoryService.prototype.updateItem = function (project, fileName, id) {
        var Project = Object.assign(project, fileName);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this._http.post('/api/category/update/' + id, JSON.stringify(Project), { headers: headers }).map(function (res) { return res.json(); });
    };
    CategoryService.prototype.deleteItem = function (id) {
        return this._http.get('/api/category/delete/delete/' + id)
            .map(function (res) { return res.json(); });
        //return PROJEKTY.map(p => this.clone(p));
    };
    CategoryService.prototype.createEvent = function (project) {
        var Project = project;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this._http.post('/api/google/event/', JSON.stringify(Project), { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (r) {
        });
    };
    CategoryService.prototype.clone = function (object) {
        // hack
        return JSON.parse(JSON.stringify(object));
    };
    CategoryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], CategoryService);
    return CategoryService;
    var _a;
}());
//# sourceMappingURL=C:/PPV/client/src/category.service.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categories; });
var Categories = {
    // vsetky vlastnosti ktore sa daju pouzit na generovanie kategorii
    // ALL_FEATURES:{
    //   id: true,
    //   id_category: true,
    //   name: true,
    //   place: true,
    //   short_name: true,
    //   author: true,
    //   organizer: true,
    //   files: true,
    //   date_from: true,
    //   date_to: true,
    //   note: true,
    //   year_of_publication: true,
    //   editor_ship: true,
    //   issue_number: true,
    //   literature_type: true,
    //   visited: true,
    //   presented: true,
    //   expenses: true,
    // },
    Projects: {
        id: true,
        id_category: true,
        name: true,
        short_name: true,
        author: true,
        files: true,
        date_from: true,
        date_to: true,
        note: true,
        expenses: true,
    },
    Publications: {
        id: true,
        id_category: true,
        name: true,
        short_name: true,
        author: true,
        files: true,
        note: true,
        year_of_publication: true,
        editor_ship: true,
        issue_number: true,
    },
    Reports: {
        id: true,
        id_category: true,
        name: true,
        short_name: true,
        author: true,
        files: true,
        note: true,
    },
    Books: {
        id: true,
        id_category: true,
        name: true,
        short_name: true,
        author: true,
        editorship: true,
        issue_number: true,
        year_of_publication: true,
        literature_type: true,
        files: true,
        note: true,
    },
    Events: {
        id: true,
        id_category: true,
        name: true,
        short_name: true,
        place: true,
        organizer: true,
        files: true,
        visited: true,
        presented: true,
        date_from: true,
        date_to: true,
        note: true,
        expenses: true,
    },
    Contacts: {
        id: true,
        id_category: true,
        name: true,
        short_name: true,
        place: true,
        organizer: true,
        author: true,
        visited: true,
        presented: true,
        files: true,
        date_from: true,
        date_to: true,
        note: true,
    },
    Registry: {
        id: true,
        id_category: true,
        name: true,
        short_name: true,
        files: true,
        note: true,
        expenses: true,
    },
    Software: {
        id: true,
        id_category: true,
        name: true,
        short_name: true,
        files: true,
        note: true,
        expenses: true,
    },
    Notebook: {
        id: true,
        id_category: true,
        name: true,
        short_name: true,
        files: true,
        note: true,
        expenses: true,
        place: true,
        organizer: true,
        author: true,
    },
};
//# sourceMappingURL=C:/PPV/client/src/category.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TagsService = (function () {
    function TagsService(_http) {
        this._http = _http;
    }
    TagsService.prototype.getAll = function (user_id) {
        return this._http.get('/api/tags/all/' + user_id)
            .map(function (res) { return res.json(); });
        //return PROJEKTY.map(p => this.clone(p));
    };
    TagsService.prototype.saveTag = function (tag) {
        //console.log(JSON.stringify(tag));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this._http.post('/api/tags/save/', JSON.stringify(tag), { headers: headers }).map(function (res) { return res.json(); });
    };
    TagsService.prototype.saveRecord = function (tagIds, recordId) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        var _loop_1 = function(tag) {
            var list = [];
            var tagId = tagIds[tag]['tagId'];
            this_1.getList(tagId).subscribe(function (x) {
                list = x[0].list_of_records.split(",");
                if (list.indexOf(String(recordId)) == -1) {
                    var obj = { tagId: tagIds[tag]['tagId'],
                        recordId: recordId
                    };
                    _this._http.post('/api/tags/insert/', JSON.stringify(obj), { headers: headers }).map(function (res) { return res.json(); }).subscribe();
                }
            });
        };
        var this_1 = this;
        for (var tag in tagIds) {
            _loop_1(tag);
        }
    };
    TagsService.prototype.getList = function (tagId) {
        return this._http.get('/api/tags/' + tagId)
            .map(function (res) { return res.json(); });
    };
    TagsService.prototype.getListByParent = function (tagId) {
        return this._http.get('/api/tags/parent/' + tagId)
            .map(function (res) { return res.json(); });
    };
    TagsService.prototype.deleteRecords = function (tagId, recordId) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        var list = [];
        this.getList(tagId).subscribe(function (x) {
            list = x[0].list_of_records.split(",");
            list.splice(list.indexOf(String(recordId)), 1);
            var obj = {
                tagId: tagId,
                list: list.toString(),
            };
            return _this._http.post('/api/tags/delete/', JSON.stringify(obj), { headers: headers }).map(function (res) { return res.json(); }).subscribe();
        });
    };
    TagsService.prototype.clone = function (object) {
        // hack
        return JSON.parse(JSON.stringify(object));
    };
    TagsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], TagsService);
    return TagsService;
    var _a;
}());
//# sourceMappingURL=C:/PPV/client/src/tags.service.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth; });
// app/auth.service.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Auth = (function () {
    function Auth() {
        var _this = this;
        // Configure Auth0
        this.lock = new Auth0Lock('me93h7dmswSrT78oo6AZK99adZFo5W8f', 'gregi27.eu.auth0.com', {});
        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", function (authResult) {
            _this.lock.getProfile(authResult.idToken, function (error, profile) {
                if (error) {
                    throw new Error(error);
                }
                localStorage.setItem('id_token', authResult.idToken);
                localStorage.setItem('profile', JSON.stringify(profile));
            });
        });
    }
    Auth.prototype.login = function () {
        // Call the show method to display the widget.
        this.lock.show();
    };
    Auth.prototype.authenticated = function () {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    Auth.prototype.logout = function () {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
    };
    Auth = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], Auth);
    return Auth;
}());
//# sourceMappingURL=C:/PPV/client/src/auth.service.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.authenticated()) {
            // console.log('AUTH GUARD PASSED');
            return true;
        }
        else {
            console.log('BLOCKED BY AUTH GUARD');
            this.router.navigate(['plocha/info']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* Auth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* Auth */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/PPV/client/src/auth.guard.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalComponent = (function () {
    function CalComponent(auth) {
        this.auth = auth;
    }
    CalComponent.prototype.ngOnInit = function () {
    };
    CalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cal',
            template: __webpack_require__(718),
            styles: [__webpack_require__(706)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* Auth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* Auth */]) === 'function' && _a) || Object])
    ], CalComponent);
    return CalComponent;
    var _a;
}());
//# sourceMappingURL=C:/PPV/client/src/cal.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryComponent = (function () {
    function CategoryComponent(route, _categoryService, auth) {
        this.route = route;
        this._categoryService = _categoryService;
        this.auth = auth;
        this.Filter = { name: '' };
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profile = JSON.parse(localStorage.getItem('profile'));
        this.route.params.subscribe(function (params) {
            _this.category = params['category'];
            _this.colons = __WEBPACK_IMPORTED_MODULE_1__category__["a" /* Categories */][_this.category];
            _this.items = [];
            _this.getAll(_this.category, _this.profile.user_id);
        });
    };
    CategoryComponent.prototype.getAll = function (category, user_id) {
        var _this = this;
        this._categoryService.getAll(category, user_id).subscribe(function (items) {
            _this.items = items;
        });
    };
    CategoryComponent.prototype.deleteItem = function (id, name) {
        if (confirm("Are you sure to delete " + name)) {
            var items = this.items;
            this._categoryService.deleteItem(id).subscribe(function (data) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].id == id) {
                        items.splice(i, 1);
                    }
                }
            });
        }
    };
    CategoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(719),
            styles: [__webpack_require__(707)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__category_service__["a" /* CategoryService */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__category_service__["a" /* CategoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__category_service__["a" /* CategoryService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* Auth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* Auth */]) === 'function' && _c) || Object])
    ], CategoryComponent);
    return CategoryComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/PPV/client/src/category.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailCategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailCategoryComponent = (function () {
    function DetailCategoryComponent(route, _categoryService, auth) {
        this.route = route;
        this._categoryService = _categoryService;
        this.auth = auth;
        this.item = {};
        this.intern_links = [];
        this.external_urls = [];
        this.used_in_links = [];
        this.selected_tags = [];
        this.visited = false;
        this.presented = false;
    }
    DetailCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.item = {};
        this.intern_links = [];
        this.external_urls = [];
        this.used_in_links = [];
        this.selected_tags = [];
        this._categoryService.getOne(id).subscribe(function (contacts) {
            _this.item = contacts[0];
            _this.intern_links = JSON.parse(contacts[0].intern_links);
            _this.external_urls = JSON.parse(contacts[0].external_urls);
            _this.used_in_links = JSON.parse('[' + contacts[0].used_in_links.substring(0, contacts[0].used_in_links.length - 1) + ']');
            _this.selected_tags = JSON.parse(contacts[0].tags);
            if (String(contacts[0].visited) === "1")
                _this.visited = true;
            if (String(contacts[0].presented) === "1")
                _this.presented = true;
        });
    };
    DetailCategoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detail-category',
            template: __webpack_require__(720),
            styles: [__webpack_require__(708)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__category_service__["a" /* CategoryService */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__category_service__["a" /* CategoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__category_service__["a" /* CategoryService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* Auth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* Auth */]) === 'function' && _c) || Object])
    ], DetailCategoryComponent);
    return DetailCategoryComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/PPV/client/src/detail-category.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tags_tags_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//declare var $: any;
var NewCategoryComponent = (function () {
    function NewCategoryComponent(_elRef, _categoryService, _tagsService, router, route, _flashMessagesService, auth) {
        this._elRef = _elRef;
        this._categoryService = _categoryService;
        this._tagsService = _tagsService;
        this.router = router;
        this.route = route;
        this._flashMessagesService = _flashMessagesService;
        this.auth = auth;
        this.value = false;
        this.item = {};
        this.intern_links = [];
        this.external_urls = [];
        this.selected_tags = [];
        this.all_categories = [];
        this.origi_tags = [];
        this.EventCheckbox = false;
        this.ngtags = '';
        this.ngcommenturl = '';
        this.ngurl = '';
        this.ngcommentlink = '';
        this.ngitem = '';
        this.ngcategory = '';
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploader"]({ url: 'api/publications', itemAlias: 'file' });
    }
    NewCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profile = JSON.parse(localStorage.getItem('profile'));
        this._flashMessagesService.grayOut(true);
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            //console.log("ImageUpload:uploaded:", item, status, response);
        };
        this.all_tags = [];
        this.items = [];
        this.intern_links = [];
        this.external_urls = [];
        this.selected_tags = [];
        this.origi_tags = [];
        this.item['visited'] = 0;
        this.item['presented'] = 0;
        this.item['user_id'] = this.profile.user_id;
        if (this.route.snapshot.params['id']) {
            var id = this.route.snapshot.params['id'];
            this._categoryService.getOne(id).subscribe(function (contacts) {
                var keys = Object.keys(contacts[0]);
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var i = keys_1[_i];
                    if (contacts[0][i] != null) {
                        _this.item[i] = contacts[0][i];
                    }
                }
                //this.item = contacts[0];
                _this.intern_links = JSON.parse(contacts[0].intern_links);
                _this.external_urls = JSON.parse(contacts[0].external_urls);
                _this.selected_tags = JSON.parse(contacts[0].tags);
                _this.origi_tags = JSON.parse(contacts[0].tags);
            });
        }
        this.route.params.subscribe(function (params) {
            _this.category = params['category'];
            _this.colons = __WEBPACK_IMPORTED_MODULE_4__category__["a" /* Categories */][_this.category];
            _this.all_categories = Object.keys(__WEBPACK_IMPORTED_MODULE_4__category__["a" /* Categories */]);
            _this.getTags();
        });
    };
    NewCategoryComponent.prototype.addItem = function () {
        var _this = this;
        var result, res;
        var name = {};
        this.uploader.onBeforeUploadItem = function (item) {
            name['files'] = item._file.name;
        };
        this.uploader.uploadAll();
        name['id_category'] = this.category;
        name['intern_links'] = JSON.stringify(this.intern_links);
        name['external_urls'] = JSON.stringify(this.external_urls);
        name['used_in_links'] = '';
        name['tags'] = JSON.stringify(this.selected_tags);
        if (this.route.snapshot.params['id']) {
            result = this._categoryService.updateItem(this.item, name, this.route.snapshot.params['id']);
        }
        else {
            result = this._categoryService.saveItem(this.item, this.category, name);
            if (this.EventCheckbox)
                this._categoryService.createEvent(this.item);
        }
        result.subscribe(function (x) {
            for (var i = 0, len = _this.intern_links.length; i < len; i++) {
                if (_this.route.snapshot.params['id']) {
                    _this._categoryService.saveLinks(_this.route.snapshot.params['id'], _this.item['name'], _this.intern_links[i]);
                }
                else {
                    _this._categoryService.saveLinks(x['insertId'], _this.item['name'], _this.intern_links[i]);
                }
            }
            if (_this.route.snapshot.params['id']) {
                _this._tagsService.saveRecord(_this.selected_tags, _this.route.snapshot.params['id']);
            }
            else {
                _this._tagsService.saveRecord(_this.selected_tags, x['insertId']);
            }
            //console.log('x insert:'+x['insertId']+ 'this inser'+ this.insertId)
            //this._flashMessagesService.show('Projekt bol úspešne uložený!', { cssClass: 'alert-success', timeout: 3000 });
            _this.router.navigate(['/category/' + _this.category]);
        });
    };
    NewCategoryComponent.prototype.changeCheckboxValue = function (checkbox) {
        this.item[checkbox] = !this.value;
        this.value = !this.value;
    };
    NewCategoryComponent.prototype.changeEventCheckbox = function () {
        this.EventCheckbox = !this.EventCheckbox;
    };
    NewCategoryComponent.prototype.onCategorySelectChange = function (Value) {
        this.getAll(Value);
    };
    NewCategoryComponent.prototype.getAll = function (category) {
        var _this = this;
        this._categoryService.getAll(category, this.profile.user_id).subscribe(function (items) {
            _this.items = items;
        });
    };
    NewCategoryComponent.prototype.addInternLink = function (category, id, comment) {
        if (category === "Select category" && id === "Select item") {
            this._flashMessagesService.show('Category and item must be select', { cssClass: 'alert alert-danger', timeout: 3000 });
        }
        else {
            var item = void 0;
            item = this.items.find(function (item) { return item.id === Number(id); });
            this.intern_links.push({
                id: id,
                category: category,
                name: item.name,
                comment: comment,
            });
            this.ngcommentlink = '';
            this.ngitem = '';
            this.ngcategory = '';
        }
    };
    NewCategoryComponent.prototype.addExternalUrl = function (url, comment) {
        console.log('url' + url + 'comment' + comment);
        if (comment === "" && url === "") {
            this._flashMessagesService.show('Url and comment must be filled', { cssClass: 'alert alert-danger', timeout: 3000 });
        }
        else {
            this.external_urls.push({
                url: url,
                comment: comment,
            });
            this.ngcommenturl = '';
            this.ngurl = '';
        }
    };
    NewCategoryComponent.prototype.getTags = function () {
        var _this = this;
        this._tagsService.getAll(this.profile.user_id).subscribe(function (items) {
            _this.all_tags = items;
        });
    };
    NewCategoryComponent.prototype.addTag = function (tagId) {
        var tag = this.all_tags.filter(function (obj) {
            return obj.id === Number(tagId);
        });
        this.selected_tags.push({
            tagId: tagId,
            title: tag[0]['title'],
        });
        this.ngtags = '';
    };
    NewCategoryComponent.prototype.deleteUrl = function (index, name) {
        if (confirm("Are you sure to delete " + name)) {
            this.external_urls.splice(index, 1);
        }
    };
    NewCategoryComponent.prototype.deleteLink = function (index, name) {
        if (confirm("Are you sure to delete " + name)) {
            this.intern_links.splice(index, 1);
        }
    };
    NewCategoryComponent.prototype.deleteTag = function (index, name) {
        if (confirm("Are you sure to delete " + name)) {
            for (var tag in this.origi_tags) {
                if (Number(this.origi_tags[tag]['tagId']) === Number(this.selected_tags[index].tagId)) {
                    this._tagsService.deleteRecords(this.selected_tags[index].tagId, this.item['id']);
                }
            }
            this.selected_tags.splice(index, 1);
        }
    };
    NewCategoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-category',
            template: __webpack_require__(721),
            styles: [__webpack_require__(709)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_6__tags_tags_service__["a" /* TagsService */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__category_service__["a" /* CategoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__category_service__["a" /* CategoryService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__tags_tags_service__["a" /* TagsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__tags_tags_service__["a" /* TagsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* Auth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* Auth */]) === 'function' && _g) || Object])
    ], NewCategoryComponent);
    return NewCategoryComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=C:/PPV/client/src/new-category.component.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(auth) {
        this.auth = auth;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(722),
            styles: [__webpack_require__(710)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* Auth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* Auth */]) === 'function' && _a) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());
//# sourceMappingURL=C:/PPV/client/src/dashboard.component.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoComponent = (function () {
    function InfoComponent(auth) {
        this.auth = auth;
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(723),
            styles: [__webpack_require__(711)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* Auth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* Auth */]) === 'function' && _a) || Object])
    ], InfoComponent);
    return InfoComponent;
    var _a;
}());
//# sourceMappingURL=C:/PPV/client/src/info.component.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_service__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = (function () {
    function SearchComponent(_searchService, router, auth) {
        this._searchService = _searchService;
        this.router = router;
        this.auth = auth;
        this.Filter = { name: '' };
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.profile = JSON.parse(localStorage.getItem('profile'));
        this.items = [];
        this.search_input = '';
    };
    SearchComponent.prototype.searchchange = function (newValue) {
        var _this = this;
        this.search_input = newValue;
        if (this.search_input.length > 2) {
            this._searchService.getSearch(this.search_input, this.profile.user_id).subscribe(function (items) {
                _this.items = items;
            });
        }
    };
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(726),
            styles: [__webpack_require__(714)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* Auth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* Auth */]) === 'function' && _c) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/PPV/client/src/search.component.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tags_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category_service__ = __webpack_require__(154);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TagsSearchComponent = (function () {
    function TagsSearchComponent(_tagsService, _categoryService, router) {
        this._tagsService = _tagsService;
        this._categoryService = _categoryService;
        this.router = router;
        this.Filter = { name: '' };
    }
    TagsSearchComponent.prototype.ngOnInit = function () {
        this.profile = JSON.parse(localStorage.getItem('profile'));
        this.items = [];
        this.list = [];
        this.all_tags = [];
        this.getAll();
    };
    TagsSearchComponent.prototype.getAll = function () {
        var _this = this;
        this._tagsService.getAll(this.profile.user_id).subscribe(function (items) {
            _this.all_tags = items;
            //let rootTags = items.filter(function(n){ return n.parentID === null });
            //let childTags = items.filter(function (n) { return n.parentID != null });
            //console.log(this.orderChildren(items));
        });
    };
    TagsSearchComponent.prototype.onTagsSelectChange = function (tagId) {
        var _this = this;
        var list = '';
        var arlist = [];
        this.items = [];
        this._tagsService.getList(tagId).subscribe(function (x) {
            _this._tagsService.getListByParent(tagId).subscribe(function (y) {
                list = x[0].list_of_records;
                for (var i in y) {
                    list += y[i].list_of_records;
                }
                arlist = list.split(',');
                if (arlist.length > 0)
                    arlist = arlist.filter(function (n) { return n != ""; });
                if (arlist.length > 0) {
                    arlist = arlist.filter(function (item, i, ar) { return ar.indexOf(item) === i; });
                    _this._categoryService.getList(arlist).subscribe(function (items) {
                        _this.items = items;
                    });
                }
            });
        });
    };
    TagsSearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tags-search',
            template: __webpack_require__(727),
            styles: [__webpack_require__(715)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__tags_service__["a" /* TagsService */], __WEBPACK_IMPORTED_MODULE_3__category_category_service__["a" /* CategoryService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tags_service__["a" /* TagsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__tags_service__["a" /* TagsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__category_category_service__["a" /* CategoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__category_category_service__["a" /* CategoryService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], TagsSearchComponent);
    return TagsSearchComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/PPV/client/src/tags-search.component.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tags_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TagsComponent = (function () {
    function TagsComponent(route, _tagsService, router, auth) {
        this.route = route;
        this._tagsService = _tagsService;
        this.router = router;
        this.auth = auth;
        this.tag = {};
        this.rootTags = [];
        this.childTags = [];
    }
    TagsComponent.prototype.ngOnInit = function () {
        this.profile = JSON.parse(localStorage.getItem('profile'));
        this.tag = {};
        this.all_tags = [];
        this.tag['list_of_records'] = '';
        this.tag['user_id'] = this.profile.user_id;
        this.getAll();
    };
    TagsComponent.prototype.getAll = function () {
        var _this = this;
        this._tagsService.getAll(this.profile.user_id).subscribe(function (items) {
            _this.all_tags = items;
            //this.rootTags = items.filter(function(n){ return n.parentID === null });
            //this.childTags = items.filter(function (n) { return n.parentID != null });
            //console.log(this.orderChildren(items));
        });
    };
    TagsComponent.prototype.orderChildren = function (data) {
        var tree = [];
        for (var value in data) {
            if (data[value]['parentID'] == null) {
                tree[data[value]['id']] = this.goodParenting(data[value], data);
            }
        }
        return tree;
    };
    TagsComponent.prototype.goodParenting = function (parent, childPool) {
        // console.log(childPool);
        for (var child in childPool) {
            //console.log(child);
            //console.log(parent['id'], childPool[child]);
            if (parent['id'] == childPool[child]['parentID']) {
                parent['children'] = [];
                parent['children'][childPool[child]['id']] = this.goodParenting(childPool[child], childPool);
            }
        }
        return parent;
    };
    TagsComponent.prototype.addTag = function () {
        var _this = this;
        var result;
        result = this._tagsService.saveTag(this.tag);
        result.subscribe(function (x) {
            //this._flashMessagesService.show('Projekt bol úspešne uložený!', { cssClass: 'alert-success', timeout: 3000 });
            _this.router.navigate(['']);
        });
    };
    TagsComponent.prototype.onTagsSelectChange = function (parentId) {
        this.tag['parentID'] = parentId;
    };
    TagsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tags',
            template: __webpack_require__(728),
            styles: [__webpack_require__(716)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__tags_service__["a" /* TagsService */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__tags_service__["a" /* TagsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__tags_service__["a" /* TagsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* Auth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* Auth */]) === 'function' && _d) || Object])
    ], TagsComponent);
    return TagsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/PPV/client/src/tags.component.js.map

/***/ }),

/***/ 416:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 416;


/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(534);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/PPV/client/src/main.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_category__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(_flashMessagesService, auth) {
        this._flashMessagesService = _flashMessagesService;
        this.auth = auth;
        this.all_categories = [];
        this.all_categories = Object.keys(__WEBPACK_IMPORTED_MODULE_2__category_category__["a" /* Categories */]);
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(717),
            styles: [__webpack_require__(705)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* Auth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* Auth */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/PPV/client/src/app.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_router__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_dropdown__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_filter_pipe__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_filter_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_filter_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__info_info_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__publications_publications_component__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngui_auto_complete__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngui_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__ngui_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__category_category_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__category_detail_category_detail_category_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__category_new_category_new_category_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__tags_tags_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__tags_tags_search_tags_search_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__search_search_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__cal_cal_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__auth_guard__ = __webpack_require__(345);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_11__info_info_component__["a" /* InfoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__publications_publications_component__["a" /* PublicationsComponent */],
                __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__["FileSelectDirective"],
                __WEBPACK_IMPORTED_MODULE_16__category_category_component__["a" /* CategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_17__category_detail_category_detail_category_component__["a" /* DetailCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_18__category_new_category_new_category_component__["a" /* NewCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_19__tags_tags_component__["a" /* TagsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__tags_tags_search_tags_search_component__["a" /* TagsSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_21__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_22__cal_cal_component__["a" /* CalComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_7__app_router__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_10_ng2_filter_pipe__["Ng2FilterPipeModule"],
                __WEBPACK_IMPORTED_MODULE_15__ngui_auto_complete__["NguiAutoCompleteModule"],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__app_router__["b" /* appRoutingProviders */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"],
                __WEBPACK_IMPORTED_MODULE_23__services_auth_service__["a" /* Auth */],
                __WEBPACK_IMPORTED_MODULE_24__auth_guard__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/PPV/client/src/app.module.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_info_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_new_category_new_category_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__category_detail_category_detail_category_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tags_tags_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tags_tags_search_tags_search_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_search_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cal_cal_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_guard__ = __webpack_require__(345);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });











var appRoutes = [
    {
        path: 'info',
        component: __WEBPACK_IMPORTED_MODULE_2__info_info_component__["a" /* InfoComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["a" /* DashboardComponent */],
    },
    {
        path: 'calendar',
        component: __WEBPACK_IMPORTED_MODULE_9__cal_cal_component__["a" /* CalComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'tags',
        component: __WEBPACK_IMPORTED_MODULE_6__tags_tags_component__["a" /* TagsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'tags/search',
        component: __WEBPACK_IMPORTED_MODULE_7__tags_tags_search_tags_search_component__["a" /* TagsSearchComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'fulltext/search',
        component: __WEBPACK_IMPORTED_MODULE_8__search_search_component__["a" /* SearchComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'category/:category',
        component: __WEBPACK_IMPORTED_MODULE_3__category_category_component__["a" /* CategoryComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'category/:category/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__category_detail_category_detail_category_component__["a" /* DetailCategoryComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'new/:category',
        component: __WEBPACK_IMPORTED_MODULE_4__category_new_category_new_category_component__["a" /* NewCategoryComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'update/:category/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__category_new_category_new_category_component__["a" /* NewCategoryComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard__["a" /* AuthGuard */]]
    },
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=C:/PPV/client/src/app.router.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
        this.profile = JSON.parse(localStorage.getItem('profile'));
        console.log(this.profile);
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(724),
            styles: [__webpack_require__(712)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* Auth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* Auth */]) === 'function' && _a) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a;
}());
//# sourceMappingURL=C:/PPV/client/src/profile.component.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PublicationsComponent = (function () {
    function PublicationsComponent() {
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: 'api/publications', itemAlias: 'photo' });
    }
    PublicationsComponent.prototype.ngOnInit = function () {
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log("ImageUpload:uploaded:", item, status, response);
        };
    };
    PublicationsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-publications',
            template: __webpack_require__(725),
            styles: [__webpack_require__(713)]
        }), 
        __metadata('design:paramtypes', [])
    ], PublicationsComponent);
    return PublicationsComponent;
}());
//# sourceMappingURL=C:/PPV/client/src/publications.component.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = (function () {
    function SearchService(_http) {
        this._http = _http;
    }
    SearchService.prototype.getSearch = function (word, user_id) {
        var obj = {
            word: word,
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this._http.post('/api/search/' + user_id, JSON.stringify(obj), { headers: headers }).map(function (res) { return res.json(); });
    };
    SearchService.prototype.clone = function (object) {
        // hack
        return JSON.parse(JSON.stringify(object));
    };
    SearchService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], SearchService);
    return SearchService;
    var _a;
}());
//# sourceMappingURL=C:/PPV/client/src/search.service.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/PPV/client/src/environment.js.map

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = ".nav-li a{\r\n  color: white;\r\n  background-color: #21b7b7;\r\n}\r\n/* mouse over link */\r\n.nav-li a:hover {\r\n  background-color: #2151ba;\r\n}\r\n/* selected link */\r\n.nav-li a:active {\r\n  color: blue;\r\n}\r\n\r\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-inverse\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand nadpis\" routerLink=\"\">Pracovna plocha vyskumnika</a>\n\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"auth.authenticated()\"><a routerLink=\"/tags/search\"><span class=\"glyphicon glyphicon-search\"></span> Search by tags</a></li>\n        <li *ngIf=\"auth.authenticated()\"><a routerLink=\"/fulltext/search\"><span class=\"glyphicon glyphicon-search\"></span> Full-text search</a></li>\n        <li *ngIf=\"auth.authenticated()\"><a href=\"www.gmail.com\"><span class=\"glyphicon glyphicon-envelope\"></span> E-mail</a></li>\n        <!--<li class=\"dropdown\" dropdown>-->\n          <!--<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" dropdown-open><span class=\"dropdown glyphicon glyphicon-user\" ></span>  <span class=\"caret\"></span></a>-->\n          <!--<ul class=\"dropdown-menu\">-->\n            <li><a  (click)=\"auth.login()\" *ngIf=\"!auth.authenticated()\" >Login</a></li>\n            <li><a routerLink=\"/info\" (click)=\"auth.logout()\" *ngIf=\"auth.authenticated()\" >Logout</a></li>\n          <!--</ul>-->\n        <!--</li>-->\n      </ul>\n\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n\n\n\n<div class=\"col-sm-9 col-md-2 col-lg-2\" style=\"background-color:white;word-wrap: break-word;\" *ngIf=\"auth.authenticated()\">\n  <ul class=\"nav nav-pills nav-stacked nav-li\">\n    <li [routerLinkActive]=\"['active']\" ><a routerLink=\"/\">Dashboard</a></li>\n    <li *ngFor=\"let category of all_categories\" [routerLinkActive]=\"['active']\"><a routerLink=\"category/{{category}}\">{{category}}</a></li>\n    <li [routerLinkActive]=\"['active']\" ><a routerLink=\"calendar\">Calendar</a></li>\n    <li [routerLinkActive]=\"['active']\" ><a routerLink=\"tags\">Tags</a></li>\n    <li [routerLinkActive]=\"['active']\" ><a routerLink=\"info\" >Info</a></li>\n  </ul>\n</div>\n\n<div [class.col-sm-8]=\"auth.authenticated()\" [class.col-md-8]=\"auth.authenticated()\" [class.col-lg-9]=\"auth.authenticated()\" >\n<router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = "<iframe src=\"https://calendar.google.com/calendar/embed?showPrint=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;color=%2329527A&amp;src=sk.slovak%23holiday%40group.v.calendar.google.com&amp;color=%23865A5A&amp;ctz=Europe%2FLondon\" style=\"border-width:0\" width=\"800\" height=\"600\" frameborder=\"0\" scrolling=\"no\"></iframe>\n"

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = "<h1> {{category}} </h1>\n\n<a routerLink=\"/new/{{this.category}}\"> <button type=\"button\" class=\"btn btn-primary\">Add item</button></a>\n\n<div class=\"container-fluid\">\n  <strong style=\"font-size:26px;background-color:yellow; margin:0.4em;\"><em></em></strong>\n  <strong style=\"font-size:26px;background-color:yellow; margin:0.4em;\"><em></em></strong>\n  <table class=\"table table-striped table-responsive\">\n    <thead>\n    <tr>\n      <div class=\"input-group\"> <span class=\"input-group-addon\">Filter</span>\n        <input id=\"filter\" type=\"text\" class=\"form-control\" [(ngModel)]=\"Filter.name\" placeholder=\"Search by name\">\n      </div>\n\n\n    </tr>\n    <tr>\n\n      <th *ngIf=\"colons.name\" >Name</th>\n      <th *ngIf=\"colons.short_name\">Short name</th>\n      <th *ngIf=\"colons.place\">Place</th>\n      <th *ngIf=\"colons.organizer\">Organizer</th>\n      <th *ngIf=\"colons.author\">Author</th>\n\n    </tr>\n\n    </thead>\n\n    <tr *ngFor=\"let item of items | filterBy: Filter \">\n\n      <td *ngIf=\"colons.name\" style=\"width: 30%\">{{item.name}}</td>\n      <td *ngIf=\"colons.short_name\">{{item.short_name}}</td>\n      <td *ngIf=\"colons.place\">{{item.place}}</td>\n      <td *ngIf=\"colons.organizer\">{{item.organizer}}</td>\n      <td *ngIf=\"colons.author\">{{item.author}}</td>\n      <td >\n        <a routerLink=\"/category/{{category}}/{{item.id}}\"><span class=\"glyphicon glyphicon-info-sign\"></span>Detail</a>\n        <a routerLink=\"/update/{{category}}/{{item.id}}\"><span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span>Upraviť</a>\n        <a (click)=\"deleteItem(item.id, item.name)\" style=\"cursor: pointer;\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>Zmazať</a>\n      </td>\n\n\n    </tr>\n\n  </table>\n</div>\n\n"

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-9 col-md-8 col-lg-8\" style=\"background-color:white;\">\n\n  <h2>{{item.name}} </h2>\n  <p *ngIf=\"item.short_name\"><b>Short name:</b> {{item.short_name}} </p>\n  <p *ngIf=\"item.place\"><b>Place:</b> {{item.place}}</p>\n  <p *ngIf=\"item.datefrom\"><b>Start date:</b> {{item.datefrom}}</p>\n  <p *ngIf=\"item.dateto\"><b>End date:</b> {{item.dateto}}</p>\n  <p *ngIf=\"item.organizer\"><b>Organizer:</b> {{item.organizer}} </p>\n  <p *ngIf=\"item.author\"><b>Autor:</b> {{item.author}}</p>\n  <p *ngIf=\"item.visited\"><b>Visited:</b> {{ visited ? 'Yes' : 'NO'}}</p>\n  <p *ngIf=\"item.presented\"><b>Presented:</b> {{ presented ? 'Yes' : 'NO'}}</p>\n  <p *ngIf=\"item.note\"><b>Note:</b> {{item.note}}</p>\n  <p *ngIf=\"item.year_of_publication\"><b>Year of publication:</b> {{item.year_of_publication}}</p>\n  <p *ngIf=\"item.editor_ship\"><b>Editorship:</b> {{item.editor_ship}}</p>\n  <p *ngIf=\"item.issue_number\"><b>Issue number:</b> {{item.issue_number}}</p>\n  <p *ngIf=\"item.expenses\"><b>Expenses:</b> {{item.expenses}}</p>\n  <p *ngIf=\"item.literature_type\"><b>Literature type:</b> {{item.literature_type}}</p>\n\n  <span *ngIf=\"intern_links.length > 0\"><b>intern_links:</b></span>\n  <p *ngFor=\"let link of intern_links\" >\n    <a href=\"/category/{{link.category}}/{{link.id}}\" target=\"_blank\">{{link.name}}</a>\n    <span>{{link.comment}}   </span>\n    <b>category:</b> {{link.category}}\n  </p><br>\n\n  <span *ngIf=\"external_urls.length > 0\"><b>External_urls: </b></span>\n  <p *ngFor=\"let url of external_urls\" ><a href=\"{{url.url}}\" target=\"_blank\">{{url.comment}}</a></p>\n\n  <p *ngIf=\"used_in_links.length > 0\"><b>This record is use in these links:</b></p>\n  <p *ngFor=\"let link of used_in_links\"> <a href=\"/category/category/{{link.id}}\" target=\"_blank\">{{link.name}} </a> </p>\n\n  <p *ngIf=\"selected_tags.length > 0\"><b>Tags for this record:</b></p>\n  <p *ngFor=\"let tag of selected_tags\"> {{tag.title}} </p>\n\n\n\n  <p *ngIf=\"item.files\"><a href=\"/uploads/{{item.files}}\">Otvor súbor</a></p>\n\n\n</div>\n"

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<div class=\"col-sm-10 col-md-10 col-lg-10\" style=\"background-color:white;\">\n\n\n  <h2>New {{category}}</h2>\n  <form #f=\"ngForm\" (ngSubmit)=\"addItem()\">\n    <div class=\"form-group\" *ngIf=\"colons.name\">\n      <label for=\"name\">Name:</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Name\" name=\"name\" [(ngModel)]=\"item.name\" required >\n    </div>\n    <div class=\"form-group\" *ngIf=\"colons.short_name\">\n      <label for=\"short_name\">Short name:</label>\n      <input type=\"text\" class=\"form-control\" id=\"short_name\"  placeholder=\"short name\" name=\"short_name\" [(ngModel)]=\"item.short_name\">\n    </div>\n    <div class=\"form-group\" *ngIf=\"colons.place\">\n      <label for=\"place\">Place :</label>\n      <input type=\"tel\" class=\"form-control\" id=\"place\" placeholder=\"Place\" name=\"place\" [(ngModel)]=\"item.place\">\n    </div>\n    <div class=\"form-group\" *ngIf=\"colons.date_from\">\n      <label for=\"date_from\">Date and time from :</label>\n      <input type=\"datetime-local\" class=\"form-control\" id=\"date_from\"  name=\"date_from\" [(ngModel)]=\"item.datefrom\">\n    </div>\n    <div class=\"form-group\" *ngIf=\"colons.date_from\">\n      <label for=\"date_to\">Date and time to :</label>\n      <input type=\"datetime-local\" class=\"form-control\" id=\"date_to\"  name=\"date_to\" [(ngModel)]=\"item.dateto\">\n    </div>\n    <div class=\"form-inline\" *ngIf=\"colons.date_from\">\n      <label for=\"eventcheckbox\">Create event in Google Calendar:</label>\n      <input type=\"checkbox\" class=\"form-control\" id=\"eventcheckbox\" (change)=\"changeEventCheckbox()\" name=\"eventcheckbox\"   >\n    </div>\n    <div class=\"form-group\" *ngIf=\"colons.organizer\">\n      <label for=\"organizer\">Organizer:</label>\n      <input type=\"text\" class=\"form-control\" id=\"organizer\" placeholder=\"organizer\" name=\"organizer\" [(ngModel)]=\"item.organizer\"  >\n    </div>\n    <div class=\"form-group\" *ngIf=\"colons.author\">\n      <label for=\"author\">Author:</label>\n      <input type=\"text\" class=\"form-control\" id=\"author\" placeholder=\"Author\" name=\"author\" [(ngModel)]=\"item.author\"  >\n    </div>\n    <div class=\"form-group\" *ngIf=\"colons.year_of_publication\">\n      <label for=\"year_of_publication\">Year of publication:</label>\n      <input type=\"text\" class=\"form-control\" id=\"year_of_publication\" placeholder=\"Year of publication\" name=\"year_of_publication\" [(ngModel)]=\"item.year_of_publication\"  >\n    </div>\n    <div class=\"form-group\" *ngIf=\"colons.editorship\">\n      <label for=\"editorship\">Editorship:</label>\n      <input type=\"text\" class=\"form-control\" id=\"editorship\" placeholder=\"Editorship\" name=\"editorship\" [(ngModel)]=\"item.editorship\"  >\n    </div>\n    <div class=\"form-group\" *ngIf=\"colons.issue_number\">\n      <label for=\"issue_number\">Issue number:</label>\n      <input type=\"text\" class=\"form-control\" id=\"issue_number\" placeholder=\"Issue number\" name=\"issue_number\" [(ngModel)]=\"item.issue_number\"  >\n    </div>\n    <div class=\"form-group\" *ngIf=\"colons.expenses\">\n      <label for=\"name\">Expenses:</label>\n      <input type=\"text\" class=\"form-control\" id=\"expenses\" placeholder=\"Expenses\" name=\"expenses\" [(ngModel)]=\"item.expenses\"  >\n    </div>\n    <div class=\"form-group\" *ngIf=\"colons.literature_type\">\n      <label for=\"literature_type\">Literature type:</label>\n      <input type=\"text\" class=\"form-control\" id=\"literature_type\" placeholder=\"Literature type\" name=\"literature_type\" [(ngModel)]=\"item.literature_type\"  >\n    </div>\n    <div class=\"form-inline\">\n    <div class=\"form-group\" *ngIf=\"colons.visited\">\n      <label for=\"visited\">Visited:</label>\n      <input type=\"checkbox\" class=\"form-control\" id=\"visited\" (change)=\"changeCheckboxValue('visited')\" name=\"visited\"   >\n    </div>\n    <div class=\"form-group\" *ngIf=\"colons.presented\">\n      <label for=\"presented\">Presented:</label>\n      <input type=\"checkbox\" class=\"form-control\" id=\"presented\" (change)=\"changeCheckboxValue('presented')\" name=\"presented\"   >\n    </div>\n      <div class=\"form-group\" *ngIf=\"colons.note\">\n        <label for=\"note\">Note:</label>\n        <input type=\"text\" class=\"form-control\" id=\"note\" placeholder=\"note\" name=\"note\" [(ngModel)]=\"item.note\"  >\n      </div>\n    </div>\n    <div class=\"form-group\" *ngIf=\"colons.files\">\n      <label for=\"file\">Foto:</label>\n      <input type=\"file\" id=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n    </div>\n\n    <div class=\"container\" style=\"width: 100%\" >\n      <div class=\"row\">\n    <h3 *ngIf=\"external_urls.length>0\">External urls</h3>\n      </div>\n    <div *ngFor=\"let url of external_urls; let i = index\">\n      <a target=\"_blank\" href=\"{{url.url}}\" >{{url.comment}}   </a>\n      <a (click)=\"deleteUrl(i, url.comment)\" style=\"cursor: pointer;\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete</a>\n    </div>\n      <div class=\"row\">\n    <h3>Add external URl</h3>\n      </div>\n    <div class=\"row\">\n    <div class=\"col-md-4\">\n      <input class=\"form-control\" #ext_url [(ngModel)]=\"ngurl\" name=\"ngurl\" id=\"ext_url\" placeholder=\"Url\" name=\"url\"  >\n    </div>\n      <div class=\"col-md-4\">\n        <textarea class=\"form-control\" #url_comment [(ngModel)]=\"ngcommenturl\" name=\"ngcommenturl\" id=\"ulr_comment\" placeholder=\"Add comment\" rows=\"2\"></textarea>\n      </div>\n    <div class=\"col-md-4\">\n      <button class=\"btn\" type=\"button\" id=\"add_url\" (click)=\"addExternalUrl(ext_url.value, url_comment.value)\" style=\"color: white; background-color: #21b7b7;\" >Add link</button>\n    </div>\n    </div>\n    </div>\n\n\n    <h3 *ngIf=\"intern_links.length>0\">Intern links</h3>\n    <div *ngFor=\"let link of intern_links;let i = index\">\n      <span><b>category:</b> {{link.category}}</span>\n      <span><b>name :</b> {{link.name}}</span>\n      <span><b>comment:</b> {{link.comment}}</span>\n      <a (click)=\"deleteLink(i, link.comment)\" style=\"cursor: pointer;\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete</a>\n    </div>\n    <h3>Add intern links</h3>\n    <div class=\"container\" style=\"max-width: 100%\">\n      <div class=\"row form-group\">\n        <div class=\"col-md-3\">\n          <select class=\"form-control\" #category_select [(ngModel)]=\"ngcategory\" name=\"ngcategory\" (change)=\"onCategorySelectChange(category_select.value)\" id=\"category_select\">\n            <option [value]=\"''\" disabled selected>Select Category</option>\n            <option *ngFor=\"let cat of all_categories\" [value]=\"cat\">\n              {{cat}}\n            </option>\n          </select>\n        </div>\n        <div class=\"col-md-3\">\n          <select class=\"form-control\" [(ngModel)]=\"ngitem\" name=\"ngitem\" #item_select id=\"item_select\">\n            <option [value]=\"''\" disabled selected>Select item</option>\n            <option *ngFor=\"let it of items\" [value]=\"it.id\">{{it.name}}</option>\n          </select>\n        </div>\n        <div class=\"col-md-3\">\n          <textarea class=\"form-control\" #link_comment id=\"link_comment\" [(ngModel)]=\"ngcommentlink\" name=\"ngcommentlink\" placeholder=\"Add comment\" rows=\"3\"></textarea>\n        </div>\n        <div>\n          <button class=\"btn\" type=\"button\" id=\"add_link\" (click)=\"addInternLink(category_select.value,item_select.value, link_comment.value)\" style=\"color: white; background-color: #21b7b7;\" >Add link</button>\n        </div>\n      </div>\n    </div>\n\n    <h3 *ngIf=\"selected_tags.length>0\">Selected tags</h3>\n    <div *ngFor=\"let tag of selected_tags;let i = index\">\n      <span> {{tag.title}}</span>\n      <a (click)=\"deleteTag(i, tag.title)\" style=\"cursor: pointer;\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete</a>\n    </div>\n    <h3>Add tags</h3>\n    <div class=\"row form-group\">\n      <div class=\"col-md-3\">\n    <select class=\"form-control\" #tags_select [(ngModel)]=\"ngtags\" name=\"ngtags\" id=\"tags_select\">\n      <option [value]=\"''\" disabled selected>Select tag</option>\n      <option *ngFor=\"let parent of all_tags\" [value]=\"parent.id\">\n        {{parent.title}}\n      </option>\n    </select>\n      </div>\n    <div class=\"col-md-3\">\n      <button class=\"btn\" type=\"button\" id=\"add_tag\" (click)=\"addTag(tags_select.value)\" style=\"color: white; background-color: #21b7b7;\" >Add tag</button>\n    </div>\n    </div>\n\n\n    <button type=\"submit\" class=\"btn btn-default\"  >Save</button>\n  </form>\n</div>\n</div>\n<flash-messages style=\"position: fixed; left: 25%;top: 50%; width: 50%\"></flash-messages>\n"

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"max-width: 100%; text-align: center\">\n  <div class=\"row\"  >\n    <h1>Pracovná plocha výskumníka</h1>\n  </div>\n\n  <div class=\"row\">\n    <h2>Diplomová práca 2016/2017</h2>\n  </div>\n  <div class=\"row\" style=\"white-space:pre-line;\" >\n    Cieľom práce je aplikácia, ktorá slúži ako knowledge base a zároveň odkladacia skriňa pre výskumníka.\n    Eviduje tam svoje články a prezentácie,posudky, práce,\n    ktoré viedol, správy, pracovné cesty, kontakty, projekty,\n    literatúru, sleduje konferencie a odbornú literatúru,\n    vedie si zoznam svojich citácií a všetko má dostupné kdekoľvek z internetu.\n    Všetky záznamy je možné navzájom previazať, pridávať k nim prílohy, exerné odkazy, klúčové\n    slová a komentáre. Systém má responzívny design. Práca nadväzuje na tri predchádzajúce bakalárske práce,\n    ktoré boli vyvíjané vo frameworku GWT,\n    ktorých výsledkom bolo iba rozpracovanie prototypu, avšak kvôli rozsahu\n    nad rámec bakalárskej práce sa ani raz nepodarilo dospieť k úplnému\n    a nasaditeľnému systému. Applikáciu na základe prototypov je nutné\n    vyvinúť od začiatku, keďže predchádzajúce verzie stavajú na menej aktuálnej\n    technológii. Webová aplikácia naprogramovaná node.js. Z odborného a teoretického\n    hľadiska sa predpokladá, že si študent\n    naštuduje a použije technológie informačných systémov nad rámec štúdijného\n    programu - urobí prehľad moderných frameworkov pre aplikačné servre a jeden\n    z nich využije.\n  </div>\n\n\n<div class=\"alert alert-danger\" *ngIf=\"!auth.authenticated()\">You are NOT logged in </div>\n<div class=\"alert alert-success\" *ngIf=\"auth.authenticated()\">You are logged in </div>\n  <div class=\"row\" *ngIf=\"!auth.authenticated()\"><button class=\"btn-success\" (click)=\"auth.login()\" >Login</button></div>\n</div>\n"

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"max-width: 100%; text-align: center\">\n<div class=\"row\"  >\n  <h1>Pracovná plocha výskumníka</h1>\n</div>\n\n<div class=\"row\">\n  <h2>Diplomová práca 2016/2017</h2>\n</div>\n  <div class=\"row\" style=\"white-space:pre-line;\" >\n   Cieľom práce je aplikácia, ktorá slúži ako knowledge base a zároveň odkladacia skriňa pre výskumníka.\n    Eviduje tam svoje články a prezentácie,posudky, práce,\n    ktoré viedol, správy, pracovné cesty, kontakty, projekty,\nliteratúru, sleduje konferencie a odbornú literatúru,\n    vedie si zoznam svojich citácií a všetko má dostupné kdekoľvek z internetu.\n    Všetky záznamy je možné navzájom previazať, pridávať k nim prílohy, exerné odkazy, klúčové\nslová a komentáre. Systém má responzívny design. Práca nadväzuje na tri predchádzajúce bakalárske práce,\n    ktoré boli vyvíjané vo frameworku GWT,\nktorých výsledkom bolo iba rozpracovanie prototypu, avšak kvôli rozsahu\nnad rámec bakalárskej práce sa ani raz nepodarilo dospieť k úplnému\na nasaditeľnému systému. Applikáciu na základe prototypov je nutné\nvyvinúť od začiatku, keďže predchádzajúce verzie stavajú na menej aktuálnej\ntechnológii. Webová aplikácia naprogramovaná node.js. Z odborného a teoretického\n    hľadiska sa predpokladá, že si študent\nnaštuduje a použije technológie informačných systémov nad rámec štúdijného\nprogramu - urobí prehľad moderných frameworkov pre aplikačné servre a jeden\nz nich využije.\n  </div>\n  <div class=\"row\" *ngIf=\"!auth.authenticated()\"><button class=\"btn-success\" (click)=\"auth.login()\" >Prihlásiť sa</button></div>\n</div>\n"

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "<p>\n  Ahoj  {{profile.nickname}}\n</p>\n\n<div>\n\n</div>\n"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = "<h1>\n  <!-- here we echo the title from the component -->\n  {{title}}\n</h1>\n\n<!-- File input for the file-upload plugin, with special ng2-file-upload directive called ng2FileSelect -->\n<input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\n<!-- button to trigger the file upload when submitted -->\n<button type=\"button\" class=\"btn btn-success btn-s\"\n        (click)=\"uploader.uploadAll()\"\n        [disabled]=\"!uploader.getNotUploadedItems().length\">\n  Upload with ng-2 file uploader\n</button>\n"

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-9 col-md-8 col-lg-8\" style=\"background-color:white;\">\n  <h2>Search by tags</h2>\n  <div class=\"row\">\n    <div class=\"form-group\" >\n      <div class=\"input-group\"> <span class=\"input-group-addon\">Filter</span>\n        <input id=\"search_input\" type=\"text\" class=\"form-control\" [ngModel]=\"search_input\" name=\"search_input\" (ngModelChange)=\"searchchange($event)\" placeholder=\"Write a word to search\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container-fluid\">\n    <strong style=\"font-size:26px;background-color:yellow; margin:0.4em;\"><em></em></strong>\n    <strong style=\"font-size:26px;background-color:yellow; margin:0.4em;\"><em></em></strong>\n\n\n    <div class=\"input-group\"> <span class=\"input-group-addon\">Filter</span>\n      <input id=\"filter\" type=\"text\" class=\"form-control\" [(ngModel)]=\"Filter.name\" placeholder=\"Search by name\">\n    </div>\n    <table class=\"table table-striped table-responsive\">\n      <thead>\n      <tr>\n        <th >Name</th>\n        <th >Category</th>\n      </tr>\n      </thead>\n\n      <tr *ngFor=\"let item of items | filterBy: Filter \">\n\n        <td *ngIf=\"item.name != undefined\">{{item.name}}</td>\n        <td *ngIf=\"item.id_category != undefined\">{{item.id_category}}</td>\n        <td *ngIf=\"item != undefined\">\n          <a routerLink=\"/category/category/{{item.id}}\"><span class=\"glyphicon glyphicon-info-sign\"></span> Detail</a>\n          <a routerLink=\"/update/category/{{item.id}}\"><span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span> Upraviť</a>\n          <a (click)=\"deleteItem(item.id)\" style=\"cursor: pointer;\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Zmazať</a>\n        </td>\n\n\n      </tr>\n\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-9 col-md-8 col-lg-8\" style=\"background-color:white;\">\n<h2>Search by tags</h2>\n  <div class=\"row\">\n    <select class=\"form-control\" #tags_select (change)=\"onTagsSelectChange(tags_select.value)\" id=\"tags_select\">\n      <option>Select parent</option>\n      <option *ngFor=\"let parent of all_tags\" [value]=\"parent.id\">\n        {{parent.title}}\n      </option>\n    </select>\n  </div>\n\n  <div class=\"container-fluid\">\n    <strong style=\"font-size:26px;background-color:yellow; margin:0.4em;\"><em></em></strong>\n    <strong style=\"font-size:26px;background-color:yellow; margin:0.4em;\"><em></em></strong>\n\n\n        <div class=\"input-group\"> <span class=\"input-group-addon\">Filter</span>\n          <input id=\"filter\" type=\"text\" class=\"form-control\" [(ngModel)]=\"Filter.name\" placeholder=\"Search by name\">\n        </div>\n    <table class=\"table table-striped table-responsive\">\n      <thead>\n      <tr>\n        <th >Name</th>\n        <th >Category</th>\n      </tr>\n      </thead>\n\n      <tr *ngFor=\"let item of items | filterBy: Filter \">\n\n        <td *ngIf=\"item.name != undefined\">{{item.name}}</td>\n        <td *ngIf=\"item.id_category != undefined\">{{item.id_category}}</td>\n        <td *ngIf=\"item != undefined\">\n          <a routerLink=\"/category/category/{{item.id}}\"><span class=\"glyphicon glyphicon-info-sign\"></span> Detail</a>\n          <a routerLink=\"/update/category/{{item.id}}\"><span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span> Upraviť</a>\n          <a (click)=\"deleteItem(item.id)\" style=\"cursor: pointer;\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Zmazať</a>\n        </td>\n\n\n      </tr>\n\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-9 col-md-8 col-lg-8\" style=\"background-color:white;\">\n  <h1>Add new tag</h1>\n  <form #f=\"ngForm\" (ngSubmit)=\"addTag()\">\n    <div class=\"form-group\" >\n      <label for=\"title\">Title:</label>\n      <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Title\" name=\"title\" [(ngModel)]=\"tag.title\" required >\n    </div>\n    <div class=\"col-md-3\">\n      <select class=\"form-control\" #tags_select (change)=\"onTagsSelectChange(tags_select.value)\" id=\"tags_select\">\n        <option>Select parent</option>\n        <option *ngFor=\"let parent of all_tags\" [value]=\"parent.id\">\n          {{parent.title}}\n        </option>\n      </select>\n    </div>\n    <button type=\"submit\" class=\"btn btn-default\"  >Save</button>\n  </form>\n</div>\n"

/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(417);


/***/ })

},[751]);
//# sourceMappingURL=main.bundle.map