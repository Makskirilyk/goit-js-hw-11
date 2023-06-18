import axios from 'axios';
const API_KEY = "37471740-3f876f41353e1c926d81f2fb1"

async function getImages(querry, page) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${querry}&image_type=photo&per_page=40&page=${page}
  &orientation=horizontal&safesearch=true`;
  const res = await axios.get(url);
  return res.data;
}
export { getImages };