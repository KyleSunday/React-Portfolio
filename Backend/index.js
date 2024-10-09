import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5100;
const uri = process.env.MONGODB_URI;

console.log('PORT:', process.env.PORT);
console.log('MongoDB URI:', uri);

const corsOptions = process.env.NODE_ENV === 'production'
  ? { origin: process.env.FRONTEND_URL }
  : { origin: '*' };

app.use(cors(corsOptions));
app.use(bodyParser.json());

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: { version: '1', strict: true, deprecationErrors: true },
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  const newContact = new Contact({ name, email, message });

  try {
    await newContact.save();
    res.status(201).send('Message sent successfully');
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(400).send('Error sending message');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});