const { validationResult } = require("express-validator");


const handleContact = async (req, res) => {
  const errors = validationResult(req);



  if (!errors.isEmpty()) {

    return res.status(400).json({
      success: false,
      message: "Invalid contact form data",
      errors: errors.array(),
    });
  }


 
  const { name, email, message } = req.body; 

   console.log("New contact message:", { name, email, message });

 
 return res.status(200).json({
      success: true,
    message: "Your message ReceivedSuccessfully",
   });
};

 

module.exports = {handleContact,};
