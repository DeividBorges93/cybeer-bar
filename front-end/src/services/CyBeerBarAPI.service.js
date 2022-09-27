import axios from 'axios';
import constants from '../utils/constants.util';
import getStoredToken from '../utils/getStoredToken';
import routesByRole from '../utils/routesByRole';

const { status_code: { OK } } = constants;

class CyBeerBarAPI {
  options = {
    baseURL: 'http://localhost:3001',
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
      .then(() => {
        const { email, password } = data;
        this.login({ email, password }, [navigate, setFormatError]);
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

  async getOrders() {
    const Authorization = getStoredToken();
    return axios.get('/orders', { ...this.options, headers: { Authorization } })
      .then((response) => response.data)
      .catch((error) => console.error(error.message));
  }
}

export default CyBeerBarAPI;
