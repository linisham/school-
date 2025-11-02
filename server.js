import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect("mongodb+srv://linishamurugesan_db_user:kqb91FYJ8V2AeFJ4@cluster0.dcykta8.mongodb.net/?appName=Cluster0")
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

// ✅ Define Schema and Model
const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  address: String,
  location: String,
  postcode: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// ✅ API route to save contact form data
app.post("/api/contact", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ success: true, message: "Contact saved successfully!" });
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// ✅ Default route
app.get("/", (req, res) => {
  res.send("Backend server is running successfully 🚀");
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
