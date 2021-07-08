import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import Chart from '../../components/Chart/Chart';

import './Product.css';
import { productData } from '../../data';

export default function Product() {
    return (
        <div className="product">
            <div className="product__titleContainer">
                <h1 className="product__title">Product</h1>
                <Link to="/newProduct">
                    <button className="product__createBtn">Create</button>
                </Link>
            </div>

            <div className="product__top">

                <div className="product__topLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
                </div>

                <div className="product__topRight">
                    <div className="product__infoTop">
                        <Avatar alt="Apple Airpods" className="product__infoTopImg" src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                        <span className="product__name">Apple Airpods</span>
                    </div>
                    <div className="product__infoBottom">

                        <div className="product__infoItem">
                            <span className="product__infoKey">id:</span>
                            <span className="product__infoValue">123</span>
                        </div>

                        <div className="product__infoItem">
                            <span className="product__infoKey">sales:</span>
                            <span className="product__infoValue">5123</span>
                        </div>

                        <div className="product__infoItem">
                            <span className="product__infoKey">active:</span>
                            <span className="product__infoValue">yes</span>
                        </div>

                        <div className="product__infoItem">
                            <span className="product__infoKey">in stock:</span>
                            <span className="product__infoValue">no</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
