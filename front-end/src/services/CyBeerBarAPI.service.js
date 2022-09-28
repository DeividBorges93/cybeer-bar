import axios from 'axios';
import constants from '../utils/constants.util';
import routesByRole from '../utils/routesByRole';
import getStoredToken from '../utils/getStoredToken';

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
          const user = await JSON.parse(localStorage.getItem('user'));

          if (user) navigate(routesByRole[response.data.role]);
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

  async getSellers() {
    return axios.get('/user/sellers', this.options)
      .then((response) => response.data.sellers)
      .catch((error) => console.error(error.message));
  }

  async restoreProducts() {
    return axios.get('/products', this.options)
      .then((response) => response.data.products)
      .catch((error) => console.error(error.message));
  }

  async saveOrder(data, navigate) {
    const Authorization = getStoredToken();
    return axios.post('/orders', data, { ...this.options, headers: { Authorization } })
      .then((response) => {
        if (response.status === OK) {
          navigate(`/customer/orders/${response.data.order.id}`);
        } else {
          console.log(response.data.message);
        }
      })
      .catch((error) => console.error(error.message));
  }
}

export default CyBeerBarAPI;
