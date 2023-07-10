const userRoute = require('express').Router()
const userContrller = require('../controller/userController')

userRoute.get(`/`, userContrller.index)
userRoute.get(`/create`, userContrller.new)
userRoute.get(`/edit/:id`, userContrller.edit)
userRoute.all(`**`, userContrller.pnf)

module.exports = userRoute