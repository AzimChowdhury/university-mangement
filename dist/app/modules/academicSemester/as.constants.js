"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asFilterableFields = exports.asSearchableFields = exports.asTitleCodeMapper = exports.asCodes = exports.asTitle = exports.asMonths = void 0;
exports.asMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
exports.asTitle = ['Autumn', 'Summer', 'Fall'];
exports.asCodes = ['01', '02', '03'];
exports.asTitleCodeMapper = {
    Autumn: '01',
    Summer: '02',
    Fall: '03',
};
exports.asSearchableFields = ['title', 'code', 'year'];
exports.asFilterableFields = ['searchTerm', 'title', 'code', 'year'];
