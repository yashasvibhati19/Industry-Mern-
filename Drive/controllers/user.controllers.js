const { validationResult } = require("express-validator");
const Contact = require("../models/contact.model"); 


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


  try {
    const savedContact = await Contact.create({
      name,
      email,
      message,
    }); 
  

  //  console.log("New contact message:", { name, email, message });

 console.log("Contact form submitted:", savedContact);
 

 
 return res.status(200).json({
      success: true,
    message: "Your message ReceivedSuccessfully",
   });
} catch (err) {
    console.error("Error while saving contact form:", err.message);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later."
    });
  }
}



 

module.exports = {handleContact};
