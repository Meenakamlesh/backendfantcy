import claimHistoryModel from "../models/claimHistory-model.js";
import userModel from "../models/user-model.js";


// in this route we're fetching our sorted user
export const getLeaderboard = async (req, res) => {
    try {
      const user = await userModel.find().sort({totalPoints : -1});
      res.json({users});
    } catch (error) {
        console.log("User not found");
    }
}

// here we're adding a new user
export const addUser = async (req, res) => {
  try {
    const { name } = req.body;
    const newUser = await userModel.create({ name });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user", details: error.message });
  }
};

// claiming user Points
export const claimPoints = async (req, res) => {
    try {
         const {userId} = req.body
        //  we've created a random points generator function 
         const randomPoints = Math.floor(Math.random() * 10) + 1;

        //  here we're finding the existing user from db
       const user =  await userModel.findById(userId);
          if (!user) return res.status(404).json({ error: 'User not found' })

        // here we're updating user's points which is stored in db 
        user.totalPoints += randomPoints 
        // after updating the user's points we're saving the user in db
        await user.save()

        const history = new ClaimHistory({ userId, points: randomPoints })
        await history.save()

        res.json({ user, claimedPoints: randomPoints })
    } catch (error) {
        
    }
}
