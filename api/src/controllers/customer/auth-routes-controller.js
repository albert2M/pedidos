exports.findAll = (req, res) => {
  const routes = {
    '/customer/login': 'login.html',
    '/customer/login/reset': 'reset.html'
  }

  res.status(200).send(routes)
}
exports.findAll = (req, res) => {
  const routes = {
    '/cliente/login': 'login.html',
    '/cliente/login/reset': 'reset.html'
  }

  res.status(200).send(routes)
}
