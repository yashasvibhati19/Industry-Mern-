const express = require('express')
const userRouter = require('./routes/user.routes')
const dotenv = require('dotenv');
dotenv.config();
const connectToDB = require('./config/db')
connectToDB();
const cookieParser = require('cookie-parser');
const app = express();
const indexRouter = require('./routes/index.routes')
const cors = require("cors");


app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true,
}));



app.set('view engine', 'ejs');
app.use(cookieParser())
app.use(express.urlencoded( { extended: true}));
app.use(express.json());
 //middleware

 app.use('/', indexRouter)
app.use('/user', userRouter)

// app.get('/', (req, res) => {
//   res.render('index');
// })

// app.use('/user', userRouter)



app.listen(3000, () => {
  console.log('Server is running on port 3000')
});