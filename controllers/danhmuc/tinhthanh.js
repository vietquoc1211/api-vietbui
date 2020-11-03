const express = require('express');
const router = express.Router();
const tinhthanhService = require('../../service/DanhMuc/tinhthanh.js');
const authorize = require('../../helpers/authorize');
const apiRes = require('../../helpers/apiResponse');

router.post('/add', authorize(), add);
router.post('/addmany', authorize(), addmany);
router.post('/getbyid', getbyid);
router.get('/getall', getall);
router.put('/:id', update);
router.delete(':/id', _delete);

module.exports = router;

function getall(req, res, next) {
    tinhthanhService.getall()
        .then(
            tinhthanh => res.json(apiRes.successResponseWithData(res,"",tinhthanh))
        )
        .catch(err => next(err));
}
function getbyid(req, res, next) {
    tinhthanhService.getbyid(req.body.id)
        .then(
            tinhthanh => res.json(apiRes.successResponseWithData(res,"success",tinhthanh))
        )
        .catch(err => next(err));
}
function add(req, res, next) {
    tinhthanhService.add(req.body)
        .then(
            () => res.json(apiRes.successResponse(res,"insert success"))
        )
        .catch(err => next(err));
}
function addmany(req, res, next) {
    tinhthanhService.addmany(req.body)
        .then(
            () => res.json(apiRes.successResponse(res,"insert success"))
        )
        .catch(err => next(err));
}

function update(req, res, next) {
    tinhthanhService.update(req.params.id, req.body)
        .then(
            () => res.json(apiRes.successResponse(res,"update success"))
        )
        .catch(err => next(err));
}

function _delete(req, res, next) {
    tinhthanhService._delete(req.params.id)
        .then(
            () => res.json(apiRes.successResponse(res,"delete success"))
        )
        .catch(err => next(err));
}