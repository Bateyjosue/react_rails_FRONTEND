import axios from 'axios'
import {createAsyncThunk} from '@reduxjs/toolkit';

const BASE_URL = 'https://react-rails-backend.onrender.com/api/v1';

const reducerGreet = (state = 'Howd', action) => {
  switch (action.type) {
    case 'GET_GREETING/fulfilled': return action.payload
    default: return state
  }
}

export const getGreeting = createAsyncThunk(
  'GET_GREETING',
  async() => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data.greet
    }
    catch (err) {
      console.log(err);
    }

    }
)

export default reducerGreet;
