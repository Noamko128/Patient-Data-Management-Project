const mongoose = require('mongoose');

// Connection URI for MongoDB database
uri = "mongodb+srv://noamko128:Noam12345@cluster0.lmcrsdc.mongodb.net/projectDB?retryWrites=true&w=majority";

// Connect to the MongoDB database using Mongoose
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define a schema for the patient data
const patientSchema = new mongoose.Schema({
  ID: String,
  firstName: String,
  lastName: String,
  birthDate: Date,
  conditions: [String]
});

// Create a Patient model based on the patientSchema
const Patient = mongoose.model('patient', patientSchema);

// Export the Patient model to be used in other modules
module.exports = Patient;