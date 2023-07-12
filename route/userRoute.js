const userRoute = require('express').Router()
const userContrller = require('../controller/userController')

userRoute.get(`/`, userContrller.index)
userRoute.get(`/create`, userContrller.new)
userRoute.get(`/edit/:id`, userContrller.edit)

//create new user - post route
userRoute.post(`/user/new`, userContrller.newUser)

userRoute.all(`**`, userContrller.pnf)

module.exports = userRoute