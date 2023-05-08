import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import './SingleProductstyle.css' 


function SingleProduct() {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);


    // LOADING FUNCTION
    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton height={200} />
                </div>
            </>
        )
    }
    const ShowProduct = () => {
        return (
          <>
            {/* item Starts Here */}
            <section className="product-section">
              <div className="product">
                <div className="product-image">
                  <img src="./assets/image 181.png" alt="Cotton sweatshirt" />
                </div>
                <div className="product-info">
                  <h2>New!</h2>
                  <h3>Cotton sweatshirt</h3>
                  <p className="price">$1,299</p>
                  <ul className="details">
                    <li>Relaxed fit</li>
                    <li>Crew neck</li>
                    <li>Drop shoulder sleeves</li>
                    <li>Elasticated neckline, hemline and cuffs</li>
                    <li>Made in Russia</li>
                  </ul>
                  <form>
                    <label htmlFor="size">Size:</label>
                    <select id="size" name="size">
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                    </select>
                    <button type="submit">Add to Cart</button>
                  </form>
                  <p className="added">Added to Cart</p>
                </div>
              </div>
            </section>
          </>
        );
      };
      
    return (
        <div>
            <div className="container">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default SingleProduct