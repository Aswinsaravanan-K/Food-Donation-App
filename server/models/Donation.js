
const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
  donor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  foodType: String,
  quantity: Number,
  pickupTime: Date,
  status: { type: String, default: 'available' },
  location: { type: { type: String }, coordinates: [Number] }
});


DonationSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Donation', DonationSchema);