import {User} from "../model/user.js";
import { Info } from "../model/info.js";


export const getInfo = async (req, res, next) => {
    console.log("in")
    try {
      const userId = req.user._id;
      let existingHealthInfo = await Info.findOne({ user: userId });
  
      if (existingHealthInfo) {
        existingHealthInfo = await Info.findByIdAndUpdate(
          existingHealthInfo._id,
          {
            heartRate: Math.floor(Math.random() * (120 - 60 + 1)) + 60,
            bloodPressure: Math.floor(Math.random() * (140 - 90 + 1)) + 90,
            sugarLevel: Math.floor(Math.random() * (150 - 80 + 1)) + 80,
          },
          { new: true }
        );
  
        res.status(200).json({
          success: true,
          message: "Existing health information updated.",
          Info: existingHealthInfo,
        });
      } else {
        const newHealthInfo = await Info.create({
          user: userId,
          heartRate: Math.floor(Math.random() * (120 - 60 + 1)) + 60,
          bloodPressure: Math.floor(Math.random() * (140 - 90 + 1)) + 90,
          sugarLevel: Math.floor(Math.random() * (150 - 80 + 1)) + 80,
        });
  
  
        res.status(201).json({
          success: true,
          message: "New health information created and saved.",
          Info: newHealthInfo,
        });
      }
    } catch (error) {
      next(error);
    }
  };