import express from 'express';
import contact from '../controllers/contect-controller.js';

const router=express.Router();

router.route('/contact').post(contact);

export default router;