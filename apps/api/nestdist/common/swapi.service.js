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
exports.SwapiService = void 0;
const common_1 = require("@nestjs/common");
const resources_1 = require("../types/resources");
const axios_1 = require("@nestjs/axios");
const dto_1 = require("./dto");
let SwapiService = class SwapiService {
    constructor(httpService) {
        this.httpService = httpService;
        this.root = 'https://swapi.dev/api';
    }
    get url() {
        return `${this.root}`;
    }
    async search(resource, query) {
        this.validateResource(resource);
        const url = `${this.url}/${resource}`;
        console.log({ query, url });
        const { data } = await this.httpService.axiosRef.get(dto_1.QueryDTO.wrap(url, query), {
            params: {
                page: query.page,
            },
        });
        return data;
    }
    async findOne(resource, id) {
        this.validateResource(resource);
        const url = `${this.url}/${resource}/${id}`;
        const { data } = await this.httpService.axiosRef.get(url);
        return data;
    }
    validateResource(resource) {
        const isResource = Object.values(resources_1.ResourceType).includes(resource);
        if (!isResource)
            throw new common_1.BadRequestException(`Resource ${resource} is not valid. Valid resources are: ${Object.values(resources_1.ResourceType).join(', ')}`);
    }
};
exports.SwapiService = SwapiService;
exports.SwapiService = SwapiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], SwapiService);
//# sourceMappingURL=swapi.service.js.map