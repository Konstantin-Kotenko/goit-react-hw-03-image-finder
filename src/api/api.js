import axios from 'axios';
import { API_KEY, BASE_URL } from 'constants/apiService';

export const api = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

export const getImages = async params => {
  try {
    const { data } = await api.get('', {
      params: {
        ...params,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
