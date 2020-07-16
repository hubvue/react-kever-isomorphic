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
const core_1 = require("@kever/core");
const router_1 = require("@kever/router");
const ioc_1 = require("@kever/ioc");
const UserService_1 = require("../services/UserService");
let IndexController = class IndexController extends core_1.BaseController {
    async index(ctx, next) {
        const data = await this.userService.getUser();
        ctx.body = data;
    }
};
__decorate([
    ioc_1.Inject('user'),
    __metadata("design:type", UserService_1.default)
], IndexController.prototype, "userService", void 0);
__decorate([
    router_1.Get('/getUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Function]),
    __metadata("design:returntype", Promise)
], IndexController.prototype, "index", null);
IndexController = __decorate([
    core_1.Controller('/api/user')
], IndexController);
exports.default = IndexController;
