"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.recentProjects = [];
        this.education = [];
        this.career = [];
        this.experience = [];
    }
    DataService.prototype.loadEducation = function () {
        var _this = this;
        return this.http.get("/api/educations")
            .map(function (data) {
            _this.education = data;
            return true;
        });
    };
    DataService.prototype.loadRecentProjects = function () {
        var _this = this;
        return this.http.get("/api/recentProjects")
            .map(function (data) {
            _this.recentProjects = data;
            return true;
        });
    };
    DataService.prototype.loadCareer = function () {
        var _this = this;
        return this.http.get("/api/careers")
            .map(function (data) {
            _this.career = data;
            return true;
        });
    };
    DataService.prototype.loadCareerItem = function (id) {
        var _this = this;
        return this.http.get("/api/careers/" + id)
            .map(function (data) {
            _this.career = data;
            console.log(_this.career);
            return true;
        });
    };
    DataService.prototype.loadExperience = function () {
        var _this = this;
        return this.http.get("/api/experiences")
            .map(function (data) {
            _this.experience = data;
            return true;
        });
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
;
//# sourceMappingURL=dataService.js.map