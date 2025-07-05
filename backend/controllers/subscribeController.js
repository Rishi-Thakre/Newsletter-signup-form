const Subscriber = require('../models/Subscriber');

const subscribeUser = async (req, res) => {
  const { name, email } = req.body;

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  // Check for duplicate email
  const existing = await Subscriber.findOne({ email });
  if (existing) {
    return res.status(400).json({ message: 'Email already subscribed' });
  }

  try {
    const newSubscriber = new Subscriber({ name, email });
    await newSubscriber.save();
    res.status(201).json({ message: 'Subscription successful!' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { subscribeUser };
