import axios from 'axios';
import constants from '../utils/constants.util';

const { status_code: { OK } } = constants;

class CyBeerBarAPI {
  options = {
    baseURL: 'http://localhost:3001',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };

  async login(data, callbacks) {
    const [navigate, setFormatError] = callbacks;

    return axios.post('/login', data, this.options)
      .then((response) => {
        if (response.status === OK) {
          navigate('/customer/products');
        } else {
          setFormatError(response.data.message);
        }
      })
      .catch((error) => {
        setFormatError(error.message);
      });
  }
}

export default CyBeerBarAPI;
