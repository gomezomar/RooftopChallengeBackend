import { Router } from "express";
const router = Router()

import { consultCoupon, getStores, createCoupon, createStore, assignCoupon, deleteCoupon, deleteStore } from '../controllers/entity.controller'

router.get('/coupons',consultCoupon);
router.post('/coupons',createCoupon);
router.patch('/coupons',assignCoupon);
router.delete('/coupons/:id',deleteCoupon);

router.get('/stores',getStores);
router.post('/stores',createStore);
router.delete('/stores/:id',deleteStore);



export default router  