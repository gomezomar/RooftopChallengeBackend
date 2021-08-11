"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var entity_controller_1 = require("../controllers/entity.controller");
router.get('/coupons', entity_controller_1.getCoupon);
router.post('/coupons', entity_controller_1.postCoupon);
/* router.patch('/coupons',);
router.delete('/coupons/:id',); */
router.get('/stores', entity_controller_1.getStores);
exports.default = router;
