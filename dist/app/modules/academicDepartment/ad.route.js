"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const ad_controller_1 = require("./ad.controller");
const ad_validation_1 = require("./ad.validation");
const router = express_1.default.Router();
router.post('/create-department', (0, validateRequest_1.default)(ad_validation_1.ADValidation.createAcademicDepartmentZodSchema), ad_controller_1.ADController.createDepartment);
router.get('/:id', ad_controller_1.ADController.getSingleDepartment);
router.patch('/:id', (0, validateRequest_1.default)(ad_validation_1.ADValidation.updateAcademicDepartmentZodSchema), ad_controller_1.ADController.updateDepartment);
router.delete('/:id', ad_controller_1.ADController.deleteDepartment);
router.get('/', ad_controller_1.ADController.getAllDepartments);
exports.DepartmentRoutes = router;
