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
var core_1 = require("@angular/core");
var dataService_1 = require("../shared/dataService");
var RecentProjectsDetailed = /** @class */ (function () {
    function RecentProjectsDetailed(data) {
        this.data = data;
        this.recentProjects = [];
    }
    RecentProjectsDetailed.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadExperience()
            .subscribe(function (success) {
            if (success) {
                _this.recentProjects = _this.data.recentProjects;
            }
        });
    };
    RecentProjectsDetailed = __decorate([
        core_1.Component({
            selector: "recent-projects-detailed",
            templateUrl: "recentProjectsDetailed.component.html",
            styleUrls: []
        }),
        __metadata("design:paramtypes", [dataService_1.DataService])
    ], RecentProjectsDetailed);
    return RecentProjectsDetailed;
}());
exports.RecentProjectsDetailed = RecentProjectsDetailed;
//# sourceMappingURL=recentProjectsDetailed.component.js.map