// import the model in controller
const userModel = require('../model/userModel')

const userContrller = {
    index: (req,res) => {
        res.render('index.ejs')
    },
    new: (req,res) => {
        res.render('create.ejs')
    },
    edit: (req,res) => {
        res.render('edit.ejs')
    },
     // we create a new controller to handler incoming data from front end
    newUser: (req,res) => {
        try {
            
        }catch(err) {
            console.log(err) // exception handling
        }
    },
    pnf: (req,res) => {
        res.render('pnf.ejs') // pnf is default controller so it must be at the end
    }
}

module.exports = userContrller