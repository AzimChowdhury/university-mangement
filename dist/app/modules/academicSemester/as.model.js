"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AS = void 0;
const mongoose_1 = require("mongoose");
const as_constants_1 = require("./as.constants");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const asSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        enum: as_constants_1.asTitle,
    },
    year: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
        enum: as_constants_1.asCodes,
    },
    startMonth: {
        type: String,
        required: true,
        enum: as_constants_1.asMonths,
    },
    endMonth: {
        type: String,
        required: true,
        enum: as_constants_1.asMonths,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
// handling same year and same semester issue
asSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const isExist = yield exports.AS.findOne({ title: this.title, year: this.year });
        if (isExist) {
            throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Academic semester is already exist.');
        }
        next();
    });
});
exports.AS = (0, mongoose_1.model)('academic-semester', asSchema);
