import express from 'express';
// import Collection_location from './collection_location.model';

const router = express.Router();

// Create a new collection_location
router.post('/', async (req, res) => {
//   const collection_location = new Collection_location(req.body);

//   try {
//     const newCollection_location = await collection_location.save();
//     res.status(201).json(newCollection_location);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
});

// Get all collection_locations
router.get('/', async (req, res) => {
    res.send("boa")
//   try {
//     const collection_locations = await Collection_location.find();
//     res.json(collection_locations);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
});

// Get collection_location by id
router.get('/:id', getCollection_location, (req, res) => {
  res.json(res.collection_location);
});

// Update collection_location by id
router.patch('/:id', getCollection_location, async (req, res) => {
//   if (req.body.name != null) {
//     res.collection_location.name = req.body.name;
//   }
//   if (req.body.bloodType != null) {
//     res.collection_location.bloodType = req.body.bloodType;
//   }
//   if (req.body.location != null) {
//     res.collection_location.location = req.body.location;
//   }

//   try {
//     const updatedCollection_location = await res.collection_location.save();
//     res.json(updatedCollection_location);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
});

// Delete collection_location by id
router.delete('/:id', getCollection_location, async (req, res) => {
//   try {
//     await res.collection_location.remove();
//     res.json({ message: 'Deleted collection_location' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
});

// Middleware function for getting collection_location object by id
async function getCollection_location(req, res, next) {
//   try {
//     collection_location = await Collection_location.findById(req.params.id);
//     if (collection_location == null) {
//       return res.status(404).json({ message: 'Cannot find collection_location' });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }

//   res.collection_location = collection_location;
//   next();
}

export default router;
