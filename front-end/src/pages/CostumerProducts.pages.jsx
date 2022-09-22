import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { products } from '../utils/dataMock.util';

function CostumerProducts() {
  return (
    <div>
      <Navbar />
      {
        products.map(({ name, price, urlImage }, index) => (
          <ProductCard
            key={ `${name}-${index}` }
            { ...{ name, price, urlImage, index } }
          />
        ))
      }
    </div>
  );
}

export default CostumerProducts;
