const express = require('express');
const router = express.Router();
const dantocService = require('../../service/danhmuc/dantoc.js');
const authorize = require('../../helpers/authorize');
const apiRes = require('../../helpers/apiResponse');
const dantoc = require('../../models/danhmuc/dantoc.js');

router.post('/add', authorize(), add);
router.post('/addmany', authorize(), addmany);
router.post('/getbyid', getbyid);
router.get('/getall', getall);
router.put('/:id', update);
router.delete(':/id', _delete);

module.exports = router;

function getall(req, res, next) {
    dantocService.getall()
        .then(
            dantoc => res.json(apiRes.successResponseWithData(res,"",dantoc))
        )
        .catch(err => next(err));
}
function getbyid(req, res, next) {
    dantocService.getbyid(req.body.id)
        .then(
            dantoc => res.json(apiRes.successResponseWithData(res,"success",dantoc))
        )
        .catch(err => next(err));
}
function add(req, res, next) {
    dantocService.add(req.body)
        .then(
            () => res.json(apiRes.successResponse(res,"insert success"))
        )
        .catch(err => next(err));
}
function addmany(req, res, next) {
    dantocService.addmany(req.body)
        .then(
            () => res.json(apiRes.successResponse(res,"insert success"))
        )
        .catch(err => next(err));
}

function update(req, res, next) {
    dantocService.update(req.params.id, req.body)
        .then(
            () => res.json(apiRes.successResponse(res,"update success"))
        )
        .catch(err => next(err));
}

function _delete(req, res, next) {
    dantocService._delete(req.params.id)
        .then(
            () => res.json(apiRes.successResponse(res,"delete success"))
        )
        .catch(err => next(err));
}