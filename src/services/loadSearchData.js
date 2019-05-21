import axios from 'axios';

const loadSearchData = async () => {
  const result = await axios.get('data.json');

  return result.data;
};

export default loadSearchData;
