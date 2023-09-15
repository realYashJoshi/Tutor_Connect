
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const app = express();
// app.use(cors());
// app.use(express.json());
// const PORT = 8083 || process.env.PORT;

// // Schema for Student data
// const studentSchema = mongoose.Schema({
//   tutorId: String,
//   name: String,
//   year: String,
//   institution: String,
//   paymentOption: String,
//   tutorName: String,
// }, {
//   timestamps: true
// });

// const studentModel = mongoose.model("students", studentSchema);

// app.post("/createStudent", async (req, res) => {
//   try {
//     const data = new studentModel(req.body);
//     await data.save();
//     res.send({ success: true, message: "Student data saved successfully", data: data });
//   } catch (error) {
//     res.status(500).send({ success: false, message: "An error occurred while saving student data", error: error });
//   }
// });
// app.get('/studentDetails/:username', async (req, res) => {
//     const tutorUsername = req.params.username;
//     const studentDetails = await studentModel.find({ tutorName: tutorUsername });
   
//     // Calculate total earnings based on student count
//     const totalEarnings = studentDetails.length * 500;
    
//     res.json({ studentDetails, totalEarnings });
//   });

// mongoose.connect("mongodb+srv://20me02020:20me02020@cluster0.11ew6bg.mongodb.net/?retryWrites=true&w=majority").then(
//   () => {
//     console.log("Database Connected");
//     app.listen(PORT, () => {
//       console.log("Server is Running Successfully");
//     });
//   }
// ).catch((err) => console.log(err));

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const app = express();
// app.use(cors());
// app.use(express.json());
// const PORT = 8083 || process.env.PORT;

// // Schema for Student data
// const studentSchema = mongoose.Schema({
//   tutorId: String,
//   name: String,
//   year: String,
//   institution: String,
//   paymentOption: String,
//   tutorName: String,
// }, {
//   timestamps: true
// });

// const studentModel = mongoose.model("students", studentSchema);

// app.post("/createStudent", async (req, res) => {
//   try {
//     const data = new studentModel(req.body);
//     await data.save();
//     res.send({ success: true, message: "Student data saved successfully", data: data });
//   } catch (error) {
//     res.status(500).send({ success: false, message: "An error occurred while saving student data", error: error });
//   }
// });

// // Endpoint to get student details by username
// app.get('/studentDetails/:username', async (req, res) => {
//   const tutorUsername = req.params.username;
//   const studentDetails = await studentModel.find({ tutorName: tutorUsername });
//   res.json({ studentDetails });
// });

// mongoose.connect("mongodb+srv://20me02020:20me02020@cluster0.11ew6bg.mongodb.net/?retryWrites=true&w=majority").then(
//   () => {
//     console.log("Database Connected");
//     app.listen(PORT, () => {
//       console.log("Server is Running Successfully");
//     });
//   }
// ).catch((err) => console.log(err));
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8083 || process.env.PORT;

// Schema for Student data
const studentSchema = mongoose.Schema({
  tutorId: String,
  name: String,
  year: String,
  institution: String,
  paymentOption: String,
  tutorName: String,
}, {
  timestamps: true
});

const studentModel = mongoose.model("students", studentSchema);

// Schema for Teacher data
const teacherSchema = mongoose.Schema({
  username: String,
  subject: String,
  description: String,
}, {
  timestamps: true
});

const teacherModel = mongoose.model("teachers", teacherSchema);

app.post("/createStudent", async (req, res) => {
  try {
    const data = new studentModel(req.body);
    await data.save();
    res.send({ success: true, message: "Student data saved successfully", data: data });
  } catch (error) {
    res.status(500).send({ success: false, message: "An error occurred while saving student data", error: error });
  }
});

// Endpoint to get student details by username
app.get('/studentDetails/:username', async (req, res) => {
  const tutorUsername = req.params.username;
  const studentDetails = await studentModel.find({ tutorName: tutorUsername });
  res.json({ studentDetails });
});

// Endpoint to register a teacher
app.post("/registerTeacher", async (req, res) => {
  try {
    const data = new teacherModel(req.body);
    await data.save();
    res.send({ success: true, message: "Teacher registration successful", data: data });
  } catch (error) {
    res.status(500).send({ success: false, message: "An error occurred while registering as a teacher", error: error });
  }
});

// Endpoint to get teachers by subject
app.get('/subjectTutors/:subject', async (req, res) => {
  const subject = req.params.subject;
  const tutors = await teacherModel.find({ subject });
  res.json({ tutors });
});

mongoose.connect("mongodb+srv://20me02020:20me02020@cluster0.11ew6bg.mongodb.net/?retryWrites=true&w=majority").then(
  () => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log("Server is Running Successfully");
    });
  }
).catch((err) => console.log(err));


