import express from 'express';
// import Person from './person.model';

const router = express.Router();

// Create a new person
router.post('/', async (req, res) => {
  // const person = new Person(req.body);

  // try {
  //   const newPerson = await person.save();
  //   res.status(201).json(newPerson);
  // } catch (err) {
  //   res.status(400).json({ message: err.message });
  // }
});

// Get all people
router.get('/', async (req, res) => {
  // try {
  //   const people = await Person.find();
  //   res.json(people);
  // } catch (err) {
  //   res.status(500).json({ message: err.message });
  // }
});

// Get person by id
router.get('/:id', getPerson, (req, res) => {
  // res.json(res.person);
});

// Update person by id
router.patch('/:id', getPerson, async (req, res) => {
  // if (req.body.name != null) {
  //   res.person.name = req.body.name;
  // }
  // if (req.body.bloodType != null) {
  //   res.person.bloodType = req.body.bloodType;
  // }
  // if (req.body.location != null) {
  //   res.person.location = req.body.location;
  // }

  // try {
  //   const updatedPerson = await res.person.save();
  //   res.json(updatedPerson);
  // } catch (err) {
  //   res.status(400).json({ message: err.message });
  // }
});

// Delete person by id
router.delete('/:id', getPerson, async (req, res) => {
  // try {
  //   await res.person.remove();
  //   res.json({ message: 'Deleted person' });
  // } catch (err) {
  //   res.status(500).json({ message: err.message });
  // }
});

// Middleware function for getting person object by id
async function getPerson(req, res, next) {
  // try {
  //   person = await Person.findById(req.params.id);
  //   if (person == null) {
  //     return res.status(404).json({ message: 'Cannot find person' });
  //   }
  // } catch (err) {
  //   return res.status(500).json({ message: err.message });
  // }

  // res.person = person;
  // next();
}

export default router;
