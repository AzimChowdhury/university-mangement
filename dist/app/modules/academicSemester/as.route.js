"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemesterRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const as_validation_1 = require("./as.validation");
const as_controller_1 = require("./as.controller");
const router = express_1.default.Router();
router.post('/create-semester', (0, validateRequest_1.default)(as_validation_1.ASValidation.createASZodSchema), as_controller_1.ASController.createSemester);
router.patch('/:id', (0, validateRequest_1.default)(as_validation_1.ASValidation.updateASZodSchema), as_controller_1.ASController.updateSemester);
router.delete('/:id', as_controller_1.ASController.deleteSemester);
router.get('/:id', as_controller_1.ASController.getSingleSemester);
router.get('/', as_controller_1.ASController.getAllSemesters);
exports.SemesterRoute = router;
