const express = require('express');
const router = express.Router();
const quanhuyenService = require('../../service/danhmuc/quanhuyen.js');
const authorize = require('../../helpers/authorize');
const apiRes = require('../../helpers/apiResponse');

router.post('/add', authorize(), add);
router.post('/addmany', authorize(), addmany);
router.post('/getbyid', getbyid);
router.get('/getall', getall);
router.get('/getbytinhthanhid/:tinhthanhid', getbytinhthanhid);
router.put('/:id', update);
router.delete(':/id', _delete);

module.exports = router;

function getall(req, res, next) {
    quanhuyenService.getall()
        .then(
            quanhuyen => res.json(apiRes.successResponseWithData(res,"",quanhuyen))
        )
        .catch(err => next(err));
}

function getbytinhthanhid(req, res, next) {
    quanhuyenService.getbytinhthanhid(req.params.tinhthanhid)
        .then(
            quanhuyen => res.json(apiRes.successResponseWithData(res,"",quanhuyen))
        )
        .catch(err => next(err));
}

function getbyid(req, res, next) {
    quanhuyenService.getbyid(req.body.id)
        .then(
            quanhuyen => res.json(apiRes.successResponseWithData(res,"success",quanhuyen))
        )
        .catch(err => next(err));
}

function add(req, res, next) {
    quanhuyenService.add(req.body)
        .then(
            () => res.json(apiRes.successResponse(res,"insert success"))
        )
        .catch(err => next(err));
}

function addmany(req, res, next) {
    quanhuyenService.addmany(req.body)
        .then(
            () => res.json(apiRes.successResponse(res,"insert success"))
        )
        .catch(err => next(err));
}

function update(req, res, next) {
    quanhuyenService.update(req.params.id, req.body)
        .then(
            () => res.json(apiRes.successResponse(res,"update success"))
        )
        .catch(err => next(err));
}

function _delete(req, res, next) {
    quanhuyenService._delete(req.params.id)
        .then(
            () => res.json(apiRes.successResponse(res,"delete success"))
        )
        .catch(err => next(err));
}