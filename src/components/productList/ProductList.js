import './productList.css';
import ProductItem from '../productItem/ProductItem';
import {products} from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire. It's Lama</h1>
                <p className="pl-desc">
                    Lama is a creative portfolio that your work has been waiting for. Beautiful homes, stunning portfolio styles & a whole lat more awaits inside
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <ProductItem 
                    key={item.id} 
                    img={item.img}
                    link={item.link}/>
                ))}
            </div>
        </div>
    )
}

export default ProductList;