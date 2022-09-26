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
      .then(async (response) => {
        if (response.status === OK) {
          const decriptToken = await this.decryptToken(response.data.token);

          navigate('/customer/products', { state: {
            ...decriptToken,
            token: response.data.token,
          } });
        } else {
          setFormatError(response.data.message);
        }
      })
      .catch((error) => {
        setFormatError(error.message);
      });
  }

  async decryptToken(token) {
    return axios.post('/login/decrypt-token', { token }, this.options)
      .then((response) => response.data)
      .catch((error) => console.error(error.message));
  }

  async restoreProducts() {
    return axios.get('/products', this.options)
      .then((response) => response.data.products)
      .catch((error) => console.error(error.message));
  }
}

export default CyBeerBarAPI;
