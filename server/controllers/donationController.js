const Donation = require('../models/Donation');

// ✅ Create a donation
exports.createDonation = async (req, res) => {
  try {
    const { foodType, quantity, pickupTime, location } = req.body;

    const donation = new Donation({
      donor: req.user.id,
      foodType,
      quantity,
      pickupTime,
      location
    });

    await donation.save();
    res.status(201).json(donation);
  } catch (error) {
    res.status(500).json({ message: 'Error creating donation', error });
  }
};

// ✅ Get all donations (for listing)
exports.getDonations = async (req, res) => {
  try {
    const donations = await Donation.find().populate('donor', 'name email');
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching donations', error });
  }
};

// ✅ Optional: Get donations near a location (used with lat/lng query)
exports.getNearbyDonations = async (req, res) => {
  try {
    const { lng, lat } = req.query;
    const donations = await Donation.find({
      location: {
        $near: {
          $geometry: { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] },
          $maxDistance: 10000 // 10km radius
        }
      }
    });

    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching nearby donations', error });
  }
};
