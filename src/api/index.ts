import MessageResponse from '../interfaces/MessageResponse';
import axios from 'axios';
import emojis from './emojis';
import express from 'express';
const router = express.Router();
const targetServer = 'http://public.connectnow.org.uk/applicant-test/';

// Create a proxy middleware to forward requests to the target server

router.get<{}, MessageResponse>('/s', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});



router.get('/api', async (req, res) => {
  try {
    const apiResponse = await axios.get('http://public.connectnow.org.uk/applicant-test/');
    const responseData = apiResponse.data;
    res.json(responseData);
  } catch (error) {
    console.error('Error calling the API:', error);
    res.status(500).json({ error: 'Failed to fetch data from the API' });
  }
});
router.use('/emojis', emojis);

export default router;
