let mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema(
    {
        day: {
            type: Date, default: Date.now
        },
        exercises: [
          {
            exercise_type: {
                type: String, 
                trim: true,
            },
            name:{
                type: String,
                trim: true,
            },
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number
          }
        ]
      },
)

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;