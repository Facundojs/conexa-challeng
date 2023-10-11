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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const swapi_service_1 = require("./common/swapi.service");
const dto_1 = require("./common/dto");
const resources_1 = require("./types/resources");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(swapiService, appService) {
        this.swapiService = swapiService;
        this.appService = appService;
    }
    healthCheck() {
        return this.appService.healthCheck();
    }
    findAll(resource, query) {
        return this.swapiService.search(resource, query);
    }
    findOne(resource, { id }) {
        return this.swapiService.findOne(resource, id);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "healthCheck", null);
__decorate([
    (0, common_1.Get)(':resource'),
    __param(0, (0, common_1.Param)('resource')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.QueryDTO]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':resource/:id'),
    __param(0, (0, common_1.Param)('resource')),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.IdParamDTO]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "findOne", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [swapi_service_1.SwapiService,
        app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map