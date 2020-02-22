function success(req, res, message, status = 200) {
  res.status(status).send({
    error: 0,
    body: message
  });
}

function error(req, res, error, status = 500) {
  res.status(status).send({
    error: 1,
    msn: error,
    body: ""
  });
}

module.exports = {
  success,
  error
};
