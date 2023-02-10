import express from 'express';
// import Donation from './donation.model';

const router = express.Router();

// Create a new donation
router.post('/', async (req, res) => {
//   const donation = new Donation(req.body);

//   try {
//     const newDonation = await donation.save();
//     res.status(201).json(newDonation);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
});

// Get all donations
router.get('/', async (req, res) => {
    res.send("boa")
//   try {
//     const donations = await Donation.find();
//     res.json(donations);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
});

// Get donation by id
router.get('/:id', getDonation, (req, res) => {
  res.json(res.donation);
});

// Update donation by id
router.patch('/:id', getDonation, async (req, res) => {
//   if (req.body.name != null) {
//     res.donation.name = req.body.name;
//   }
//   if (req.body.bloodType != null) {
//     res.donation.bloodType = req.body.bloodType;
//   }
//   if (req.body.location != null) {
//     res.donation.location = req.body.location;
//   }

//   try {
//     const updatedDonation = await res.donation.save();
//     res.json(updatedDonation);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
});

// Delete donation by id
router.delete('/:id', getDonation, async (req, res) => {
//   try {
//     await res.donation.remove();
//     res.json({ message: 'Deleted donation' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
});

// Middleware function for getting donation object by id
async function getDonation(req, res, next) {
//   try {
//     donation = await Donation.findById(req.params.id);
//     if (donation == null) {
//       return res.status(404).json({ message: 'Cannot find donation' });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }

//   res.donation = donation;
//   next();
}

export default router;
