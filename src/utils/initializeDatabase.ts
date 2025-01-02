import { ref, set } from 'firebase/database';
import { database } from '@/lib/firebase';
import { restaurants } from '@/data/restaurants';

export const initializeDatabase = async () => {
  try {
    // Initialize restaurants data
    const restaurantsRef = ref(database, 'restaurants');
    await set(restaurantsRef, restaurants);
    console.log('Database initialized with sample data');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};