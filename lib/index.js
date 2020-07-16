"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@kever/core");
const config = {
    port: 9000,
    env: process.env.NODE_ENV,
};
core_1.createApplication(config);
