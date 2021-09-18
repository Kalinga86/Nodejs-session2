const express=require('express');
const router =express.Router();
const userDetController =require('../controller/userdet.controller');

router.get('/',userDetController.getAllUserDetail);
router.get('/:id',userDetController.getSingleUserDetail);
router.post('/',userDetController.createUserDetail);
router.put('/',userDetController.updateUserDetail);
router.delete('/',userDetController.deleteUserDetail);

module.exports=router;