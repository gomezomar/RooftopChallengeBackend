import { Router } from "express";
const router = Router()

import { getCoupon, getStores, postCoupon, postStore } from '../controllers/entity.controller'

router.get('/coupons',getCoupon);
router.post('/coupons',postCoupon);
/* router.patch('/coupons',);
router.delete('/coupons/:id',); */

router.get('/stores',getStores);
router.post('/stores',postStore);



export default router  