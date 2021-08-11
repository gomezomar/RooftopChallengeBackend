import { Router } from "express";
const router = Router()

import { getCoupon, getStores, postCoupon } from '../controllers/entity.controller'

router.get('/coupons',getCoupon);
router.post('/coupons',postCoupon);
/* router.patch('/coupons',);
router.delete('/coupons/:id',); */

router.get('/stores',getStores);



export default router