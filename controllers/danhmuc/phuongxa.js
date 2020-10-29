const express = require('express');
const router = express.Router();
const phuongxaService = require('../../service/danhmuc/phuongxa.js');
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
    phuongxaService.getall()
        .then(
            phuongxa => res.json(apiRes.successResponseWithData(res,"",phuongxa))
        )
        .catch(err => next(err));
}
function getbyid(req, res, next) {
    phuongxaService.getbyid(req.body.id)
        .then(
            phuongxa => res.json(apiRes.successResponseWithData(res,"success",phuongxa))
        )
        .catch(err => next(err));
}
function add(req, res, next) {
    phuongxaService.add(req.body)
        .then(
            () => res.json(apiRes.successResponse(res,"insert success"))
        )
        .catch(err => next(err));
}
function addmany(req, res, next) {
    phuongxaService.addmany(req.body)
        .then(
            () => res.json(apiRes.successResponse(res,"insert success"))
        )
        .catch(err => next(err));
}

function update(req, res, next) {
    phuongxaService.update(req.params.id, req.body)
        .then(
            () => res.json(apiRes.successResponse(res,"update success"))
        )
        .catch(err => next(err));
}

function _delete(req, res, next) {
    phuongxaService._delete(req.params.id)
        .then(
            () => res.json(apiRes.successResponse(res,"delete success"))
        )
        .catch(err => next(err));
}