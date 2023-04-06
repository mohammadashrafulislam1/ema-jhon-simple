import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../../fakeDB/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() =>{
      fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) =>{
        // console.log(products)
        const newCart =[...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }
    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart =[];
        for(const id in storedCart){
            // console.log(id)
            const addedProducts =products.find(product => product.id === id);
            
            // console.log(savedProducts)
            if(addedProducts){
                const quantity = storedCart[id];
                addedProducts.quantity = quantity;
                // console.log(addedProducts)
                savedCart.push(addedProducts);
                
            }

        }
        setCart(savedCart);
    },[products]);
    const handleClearCart =()=>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
           <div className="products-container">
            {
                products.map(product => <Product  key={product.id} 
                product={product}
                handleAddToCart={handleAddToCart}
                
                ></Product>)
            }
            </div> 
            <div className="cart-container">
                <Cart 
                cart={cart}
                handleClearCart={handleClearCart}
                >
                 <Link to="/orders" className='delete-link'>
                    <button className='btn-proceed'>Review Order <FontAwesomeIcon icon={faArrowRight}/></button>
                 </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;