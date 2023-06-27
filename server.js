// Initial setup
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const port = 4000;

// Middleware setup
app.use(fileUpload());
app.use(express.static('public'));
const { checkImage } = require('./models/checkImage');
const { checkIt } = require('./models/chat');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Connect between server.js and db.js files
const Patient = require('./models/db');

// Exercise 1: Receiving patient data including a face image
app.post('/save', async (req, res) => {
  // Save patient details to the db (except picture)
  var newPatient = {
    ID: req.body.patientId,
    firstName: req.body.patientFirstName,
    lastName: req.body.patientLastName,
    birthDate: req.body.birthDate
  };

  // Save patient conditions to the db
  const formKeys = Object.keys(req.body);
  var conditionsArray = formKeys.filter(function (key) {
    return key.includes("condition");
  });
  var conditions = conditionsArray.map(key => req.body[key]);
  newPatient.conditions = conditions;

  // Get information about the medical conditions from ChatGPT
  const question = "Can you explain to me about the following conditions and what can they indicate? : " + conditions.join(', ');
  const ChatGPTAns = await checkIt(question);
  console.log("response: " + ChatGPTAns);

  // Save the patient picture to public/images folder
  const picture = req.files.picture;
  picture.mv('public/images/' + picture.name);

  const Faceimage = await checkImage(picture);

  // Create a patient object according to the Patient schema (as defined in the db.js)
  let patient = new Patient(newPatient);

  // Try to save the patient data to the db. Return an error if it fails.
  try {
    // Check if the image is a face image or not
    if (Faceimage) {
      await patient.save();
      var savedResult = { patientKey: patient, gptAnsKey: ChatGPTAns };
      res.render('pages/GPTDiagnose', savedResult);
    } else {
      res.render('pages/NotaFaceImage');
    }
  } catch (error) {
    res.status(500).send("Error: Patient " + patientFirstName + " data not saved.");
  }
});


// Exercise 2: retrieve data from the database according to ID (using patientdata.ejs)
app.get('/findbyID', async (req, res) => {
  const parameter = req.query.patientId;
  try {
    const find_patient = await Patient.find({ ID: parameter });
    const result = { patients: find_patient };
    res.render('pages/patientsdata', result);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Exercise 6: Connection to ChatGPT
app.get('/ask', async (req, res) => {
  const answer = await checkIt(req.query.question);
  res.json(answer);
});


// A programming engine that knows how to unify the data from the database to HTML
app.set('view engine', 'ejs');


// Start the server and listen to incoming requests on a specified port
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
