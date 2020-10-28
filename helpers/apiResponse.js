exports.successResponse = function (res, msg) {
	var response = {
		status: 1,
		message: msg
	};
	return res.status(200).json(response);
};

exports.successResponseWithData = function (res, msg, data) {
	var response = {
		status: 1,
		message: msg,
		data: data
	};
	return res.status(200).json(response);
};

exports.ErrorResponse = function (res, msg) {
	var response = {
		status: 0,
		message: msg,
	};
	return res.status(500).json(response);
};

exports.notFoundResponse = function (res, msg) {
	var data = {
		status: 0,
		message: msg,
	};
	return res.status(404).json(data);
};

exports.validationErrorWithData = function (res, msg, data) {
	var resData = {
		status: 0,
		message: msg,
		data: data
	};
	return res.status(400).json(resData);
};

exports.unauthorizedResponse = function (res, msg) {
	var data = {
		status: 0,
		message: msg,
	};
	return res.status(401).json(data);
};