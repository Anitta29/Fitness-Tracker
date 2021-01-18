const router = require("express").Router()
const Workout = require("../models/workout")
 

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/api/workouts/range", ({ body }, res) => {
  Workout.create(body)
    .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});




// create router.post = create  
// put = find one and update (id)
// range get find sort 
// router.delete

module.exports = router;