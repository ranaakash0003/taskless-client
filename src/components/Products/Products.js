import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions/products";
import "./products.css";

const Products = () => {
  let dispatch = useDispatch();

  const { products } = useSelector((state) => ({
    products: state.productList.products,
  }));

  React.useEffect(() => {
    dispatch(actions.getProducts());
  }, []);

  const handleClick = (id, image, productName, price) => {
    // e.preventDefault();
    dispatch(actions.addToCart(id, image, productName, price));
  };

  return (
    <div className="product-container">
      <p>Our Products</p>

      <div className="product-list">
        {products.map((item) => {
          return (
            <div className="product-content" key={item._id}>
              <div className="product-img">
                <img
                  src={item.image ? item.image : "noimage.png"}
                  alt="product"
                />
              </div>
              <p>{item.productName}</p>
              <div className="product-details">
                <h6 id="store">{item.sellerName}</h6>
                <h6 id="store">{item.quantity}</h6>
              </div>
              <div className="product-item">
                <h6>৳{item.price}</h6>
                <FaShoppingCart
                  className="cart-icon"
                  onClick={() => {
                    handleClick(
                      item._id,
                      item.image,
                      item.productName,
                      item.price
                    );
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
