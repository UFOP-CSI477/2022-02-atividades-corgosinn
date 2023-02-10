import express from 'express';
// import Blood_type from './blood_type.model';

const router = express.Router();

// Create a new blood_type
router.post('/', async (req, res) => {
//   const blood_type = new Blood_type(req.body);

//   try {
//     const newBlood_type = await blood_type.save();
//     res.status(201).json(newBlood_type);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
});

// Get all blood_types
router.get('/', async (req, res) => {
    res.send("boa")
//   try {
//     const blood_types = await Blood_type.find();
//     res.json(blood_types);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
});

// Get blood_type by id
router.get('/:id', getBlood_type, (req, res) => {
  res.json(res.blood_type);
});

// Update blood_type by id
router.patch('/:id', getBlood_type, async (req, res) => {
//   if (req.body.name != null) {
//     res.blood_type.name = req.body.name;
//   }
//   if (req.body.bloodType != null) {
//     res.blood_type.bloodType = req.body.bloodType;
//   }
//   if (req.body.location != null) {
//     res.blood_type.location = req.body.location;
//   }

//   try {
//     const updatedBlood_type = await res.blood_type.save();
//     res.json(updatedBlood_type);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
});

// Delete blood_type by id
router.delete('/:id', getBlood_type, async (req, res) => {
//   try {
//     await res.blood_type.remove();
//     res.json({ message: 'Deleted blood_type' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
});

// Middleware function for getting blood_type object by id
async function getBlood_type(req, res, next) {
//   try {
//     blood_type = await Blood_type.findById(req.params.id);
//     if (blood_type == null) {
//       return res.status(404).json({ message: 'Cannot find blood_type' });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }

//   res.blood_type = blood_type;
//   next();
}

export default router;
