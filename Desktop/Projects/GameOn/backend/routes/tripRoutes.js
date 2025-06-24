import express from 'express';
import { 
  createNewTrip, 
  getUserTrips, 
  getTripDetails, 
  addMemberToTrip 
} from '../controllers/tripController.js';
import verifyToken from '../middleware/auth.js';

const router = express.Router();

// All trip routes require authentication
router.use(verifyToken);

router.post('/', createNewTrip);
router.get('/', getUserTrips);
router.get('/:tripId', getTripDetails);
router.post('/:tripId/members', addMemberToTrip);

export default router; 