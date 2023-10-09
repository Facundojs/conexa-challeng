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
exports.QueryDTO = exports.IdParamDTO = void 0;
const class_validator_1 = require("class-validator");
const OnlyLettersRegExp = /^[a-zA-Z]+$/;
class IdParamDTO {
}
exports.IdParamDTO = IdParamDTO;
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], IdParamDTO.prototype, "id", void 0);
class QueryDTO {
    constructor() {
        this.page = 1;
    }
    static wrap(url, dto) {
        let query = `?page=${dto.page}`;
        if (dto.search)
            query += `&search=${dto.search}`;
        return `${url}${query}`;
    }
}
exports.QueryDTO = QueryDTO;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Object)
], QueryDTO.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(OnlyLettersRegExp),
    __metadata("design:type", String)
], QueryDTO.prototype, "search", void 0);
//# sourceMappingURL=dto.js.map