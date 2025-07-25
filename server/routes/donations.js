// Placeholder content for donations.js




const express = require('express');
const router = express.Router();
const { createDonation, getDonations } = require('../controllers/donationController');
const auth = require('../middleware/authMiddleware'); // This should export a function, not an object

router.post('/', auth, createDonation);
router.get('/', getDonations);

module.exports = router;

