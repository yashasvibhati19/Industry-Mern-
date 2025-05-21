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


//get /user/contacts
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      contacts,
    });
  } catch (error) {
    console.error("Failed to fetch contact messages:", error.message);
    return res.status(500).json({
      success: false,
      message: "Unable to fetch contact messages at the moment."
    });
  }
};



//put /user/contact

const updateContact = async (req, res) => {
  const { id } = req.params;
  const { name, email, message, status } = req.body;

  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      { name, email, message, status },
      { new: true, runValidators: true }
    );

    if (!updatedContact) {
      return res.status(404).json({
        success: false,
        message: "No contact entry found with the given ID."
      });
    }

    return res.status(200).json({
      success: true,
      message: "Contact entry updated successfully.",
      contact: updatedContact,
    });
  } 
  catch (error) {
    console.error("Failed to update contact:", error.message);
    return res.status(500).json({
      success: false,
      message: "Update failed due to a server error."
    });
  }
};


 

module.exports = {handleContact, getAllContacts, updateContact};
