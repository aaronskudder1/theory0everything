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
var ExperienceList = /** @class */ (function () {
    function ExperienceList(data) {
        this.data = data;
        this.experience = [];
    }
    ExperienceList.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadExperience()
            .subscribe(function (success) {
            if (success) {
                _this.experience = _this.data.experience;
            }
        });
    };
    ExperienceList = __decorate([
        core_1.Component({
            selector: "experience-list",
            templateUrl: "experienceList.component.html",
            styleUrls: []
        }),
        __metadata("design:paramtypes", [dataService_1.DataService])
    ], ExperienceList);
    return ExperienceList;
}());
exports.ExperienceList = ExperienceList;
//    public experience = [{
//        Capability: "Data Cabling and InfaStructure",
//        Years: "25+",
//        Details: "Cat5e / Cat6a structured cabling"
//    }, {
//            Capability: "Laptop and Desktop Troubleshooting and Repair",
//        Years: "25+",
//        Details: "Repair and installation of Macintosh and PC Laptop and Desktop computers"
//    }, {
//            Capability: "Web application development in MEAN stack",
//            Years: "2+",
//            Details: "MongoDB, Express Angular2+Typescript, NodeJS",
//        }, {
//            Capability: "Gateway Security Hardware applicances",
//            Years: "15+",
//            Details: "Watchguard, Cyberoam, Sonicwall, Netgear"
//            }, {
//            Capability: "Server and Virtualisation Installation Configuration and Support",
//        Years: "20+",
//            Details: "Microsoft, VMWare and Novell Server Operating Systems"
//}
//    ];
//}
//# sourceMappingURL=experienceList.component.js.map