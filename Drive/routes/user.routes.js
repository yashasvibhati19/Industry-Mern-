const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const userModel = require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');
// const user = require('../models/user.model');
const { handleContact } = require('../controllers/user.controllers');


// /user/test
// get method form ko show krayege

router.get('/register', (req, res) => {
  res.render('register');
})


router.post('/register', 
  body('email').trim().isEmail().isLength({min: 8}),
  body('password').trim().isLength({min: 5}),
  body('username').trim().isLength({min: 3}),





  async (req, res) => {
   
    const errors = validationResult(req);

    //console.log(errors);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Invalid data'
      });
    }

    const { email, username, password } = req.body;

    const hashPassword = await bcrypt.hash(password, 10)
     

    const newUser = await userModel.create({
      email,
      username,
      password: hashPassword
  
    })


    res.json(newUser)

    // res.send(errors)




  // console.log(req.body)
  // res.send('User registered');
})




router.get('/login', (req, res) => {
  res.render('login')
})


router.post('/login',
  body('username').trim().isLength({min: 3}),
  body('password').trim().isLength({ min: 5}),
  async (req, res) => {



    const errors = validationResult(req);


    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Invalid data'
      })
    }


   const { username, password } = req.body;

   const user = await userModel.findOne({
    username: username
   })
   

   if (!user) {
    return res.status(400).json({
      message: 'username incorrect'
    })
   }

   const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    return res.status(400).json({
      message: 'username or password is incorrect'
    })
  }
   

 
  



// jsonwebtoken

const token = jwt.sign({
  userId: user._id,
  email: user.email,
  username: user.username
},
process.env.JWT_SECRET,
)

// res.json({
//   token
// })


res.cookie('token', token)

res.send('Logged in')
  }
)


router.get('/contact', (req, res) => {
  res.render('contact');
})  

//  /user/contact
router.post(
  '/contact',
  body('name').trim().isLength({ min: 3 }).withMessage("Name is required"),
  body('email').isEmail().withMessage("Enter a valid email"),
  body('message').trim().isLength({ min: 5 }).withMessage("Message should be at least 5 characters long"),
  handleContact
);



module.exports = router;