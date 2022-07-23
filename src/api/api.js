import axios from 'axios';
import { API_KEY, BASE_URL } from 'constants/apiService';

export const api = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

export const searchParams = {
  q: '',
  page: 1,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const getImages = async () => {
  try {
    const { data } = await api.get('', { params: searchParams });
    return data;
  } catch (error) {
    console.log(error);
  }
};
