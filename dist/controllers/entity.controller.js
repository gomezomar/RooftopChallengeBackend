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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postCoupon = exports.getStores = exports.getCoupon = void 0;
var typeorm_1 = require("typeorm");
var Coupon_1 = require("../entity/Coupon");
var Store_1 = require("../entity/Store");
var getCoupon = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, code, coupon;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                email = req.query.email;
                console.log(email);
                code = req.query.code;
                console.log(code);
                return [4 /*yield*/, typeorm_1.getRepository(Coupon_1.Coupon).findOne({
                        where: {
                            "customer_email": email,
                            "code": code
                        }
                    })];
            case 1:
                coupon = _a.sent();
                console.log(coupon);
                if (coupon != null) {
                    return [2 /*return*/, res.status(200).send(coupon)];
                }
                else {
                    return [2 /*return*/, res.status(404).send('not found')];
                }
                return [2 /*return*/];
        }
    });
}); };
exports.getCoupon = getCoupon;
var getStores = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var page, name, stores, numStores, store, ni, nf, results_1, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                page = Number(req.query.page);
                console.log(page);
                name = req.query.name;
                console.log(name);
                return [4 /*yield*/, typeorm_1.getRepository(Store_1.Store).find()];
            case 1:
                stores = _a.sent();
                numStores = stores.length;
                if (!(name != null)) return [3 /*break*/, 3];
                return [4 /*yield*/, typeorm_1.getRepository(Store_1.Store).findOne({
                        where: {
                            "name": name
                        }
                    })];
            case 2:
                store = _a.sent();
                if (store != null) {
                    return [2 /*return*/, res.status(200).send(store)];
                }
                else {
                    return [2 /*return*/, res.status(404).send('store not found')];
                }
                return [3 /*break*/, 4];
            case 3:
                if (page != null && page > 0) {
                    ni = page * 10;
                    nf = ni + 10;
                    results_1 = JSON.stringify(stores.slice(ni, nf));
                    return [2 /*return*/, res.status(200).send('number of stores available:' + numStores + '<br/>page store:' + page + '<br/>' + results_1)];
                }
                _a.label = 4;
            case 4:
                ;
                results = JSON.stringify(stores.slice(0, 10));
                return [2 /*return*/, res.status(200).send('number of stores available:' + numStores + '<br/>page store:' + '1' + '<br/>' + results)];
        }
    });
}); };
exports.getStores = getStores;
var postCoupon = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var expires_at, code, num, validator, newCoupon, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                expires_at = req.body.expires_at;
                code = req.body.code;
                console.log(code);
                num = code.length;
                console.log(num);
                if (expires_at == null) {
                    return [2 /*return*/, res.status(422).send('unprocessable code')];
                }
                if (!(num == 8)) return [3 /*break*/, 4];
                validator = new RegExp('^[A-Z0-9]+$', 'i');
                if (!!validator.test(code)) return [3 /*break*/, 1];
                return [2 /*return*/, res.status(422).send('unprocessable code')];
            case 1:
                newCoupon = typeorm_1.getRepository(Coupon_1.Coupon).create(req.body);
                return [4 /*yield*/, typeorm_1.getRepository(Coupon_1.Coupon).save(newCoupon)];
            case 2:
                result = _a.sent();
                return [2 /*return*/, res.status(200).json(result)];
            case 3: return [3 /*break*/, 5];
            case 4: return [2 /*return*/, res.status(422).send('unprocessable code')];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.postCoupon = postCoupon;
