"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacultyRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const af_controller_1 = require("./af.controller");
const af_validation_1 = require("./af.validation");
const router = express_1.default.Router();
router.post('/create-faculty', (0, validateRequest_1.default)(af_validation_1.AFValidation.createFacultyZodSchema), af_controller_1.AFController.createFaculty);
router.get('/:id', af_controller_1.AFController.getSingleFaculty);
router.patch('/:id', (0, validateRequest_1.default)(af_validation_1.AFValidation.updateFacultyZodSchema), af_controller_1.AFController.updateFaculty);
router.delete('/:id', af_controller_1.AFController.deleteFaculty);
router.get('/', af_controller_1.AFController.getAllFaculties);
exports.FacultyRoutes = router;
