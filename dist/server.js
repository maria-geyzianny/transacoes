"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var CreateCoursesService_1 = __importDefault(require("./CreateCoursesService"));
var app = express_1.default();
app.get('/', function (request, response) {
    return CreateCoursesService_1.default;
});
app.listen(3333);
