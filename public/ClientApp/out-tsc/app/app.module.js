"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
//added 18/8
var router_1 = require("@angular/router");
var experienceList_component_1 = require("./experience/experienceList.component");
var experienceDetailed_component_1 = require("./experience/experienceDetailed.component");
var careerList_component_1 = require("./career/careerList.component");
var careerDetailed_component_1 = require("./career/careerDetailed.component");
var careerItem_component_1 = require("./career/careerItem.component");
var educationList_component_1 = require("./education/educationList.component");
var educationDetailed_component_1 = require("./education/educationDetailed.component");
var recentProjectsList_component_1 = require("./recentProjects/recentProjectsList.component");
var recentProjectsDetailed_component_1 = require("./recentProjects/recentProjectsDetailed.component");
var dataService_1 = require("./shared/dataService");
var app_component_1 = require("./app.component");
var overview_component_1 = require("./overview/overview.component");
var routes = [
    { path: "", component: careerList_component_1.CareerList },
    { path: "experience", component: experienceDetailed_component_1.ExperienceDetailed },
    { path: "recentProjects", component: recentProjectsDetailed_component_1.RecentProjectsDetailed },
    { path: "education", component: educationDetailed_component_1.EducationDetailed },
    { path: "career", component: careerDetailed_component_1.CareerDetailed },
    { path: "careerItem/:id", component: careerItem_component_1.CareerItem }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                experienceList_component_1.ExperienceList,
                experienceDetailed_component_1.ExperienceDetailed,
                careerList_component_1.CareerList,
                careerDetailed_component_1.CareerDetailed,
                careerItem_component_1.CareerItem,
                educationList_component_1.EducationList,
                educationDetailed_component_1.EducationDetailed,
                recentProjectsList_component_1.RecentProjectsList,
                recentProjectsDetailed_component_1.RecentProjectsDetailed,
                overview_component_1.Overview
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes, {
                    useHash: true,
                    enableTracing: false //for debugging router
                }),
                http_1.HttpClientModule
            ],
            providers: [
                dataService_1.DataService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map