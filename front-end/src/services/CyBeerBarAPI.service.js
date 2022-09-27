import axios from 'axios';
import constants from '../utils/constants.util';
import routesByRole from '../utils/routesByRole';

const { status_code: { OK, CREATED } } = constants;

class CyBeerBarAPI {
  options = {
    baseURL: 'http://localhost:3001',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };

  async login(data, callbacks) {
    const [navigate, setFormatError] = callbacks;

    return axios.post('/user/login', data, this.options)
      .then(async (response) => {
        if (response.status === OK) {
          const { password, ...userData } = response.data;
          localStorage.setItem('user', JSON.stringify(userData));
          navigate(routesByRole[response.data.role]);
        } else {
          setFormatError(response.data.message);
        }
      })
      .catch((error) => {
        setFormatError(error.message);
      });
  }

  async register(data, callbacks) {
    const [navigate, setFormatError] = callbacks;
    return axios.post('/user/register', data, this.options)
      .then(async (response) => {
        if (response.status === CREATED) {
          navigate('/customer/products');
        } else {
          setFormatError([{
            type: 'error',
            message: `Erro: ${response.data?.message}`,
          }]);
        }
      })
      .catch(() => {
        setFormatError([{
          type: 'error',
          message: 'Erro: Email já cadastrado!',
        }]);
      });
  }

  async restoreProducts() {
    return axios.get('/products', this.options)
      .then((response) => response.data.products)
      .catch((error) => console.error(error.message));
  }
}

export default CyBeerBarAPI;
