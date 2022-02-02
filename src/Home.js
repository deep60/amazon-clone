import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://m.media-amazon.com/images/I/71d2wEPbXxL._SX3000_.jpg" 
            alt=""
            />

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
            <Product 
                id="12321341"
                title="The Lean Startup: How Constant Innovation Creates Radically 'Successful Businesses Paperback"
                price="120.00"
                rating="5"
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />

            <Product 
                id="12321341"
                title="Apple iPhone 13 (128GB) - Midnight"
                price="79,900.00"
                rating="5"
                image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-midnight-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629907844000"
            />
            </div>

            <div className="home__row">

            <Product 
                id="12321341"
                title="Punam Flutes C Sharp Medium Right Hand Bansuri 18.5 inches"
                price="2100.00"
                rating="5"
                image="https://punam-flute-live.s3.amazonaws.com/productImage/202111294438/resized_450_450_productImage/202111294437/CNM-MO-1.jpg"
                />

                <Product 
                id="49538094"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                price="239.0"
                rating="5"
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />

                <Product
                id="123"
                title="OnePlus Nord 2 5G (Blue Haze, 8GB RAM, 128GB Storage)"
                price="29,990.00"
                rating="5"
                image="https://www.91-img.com/gallery_images_uploads/3/e/3e05f712ec4594dc76bb9d1b1e7d605a9395cd1d.jpg?tr=h-550,w-0,c-at_max"
                />
            </div>

            <div className="home__row">
            <Product 
                id="12321341"
                title="The Lean Startup: How Constant Innovation Creates Radically 'Successful Businesses Paperback"
                price="11.96"
                rating="5"
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />
            </div>
            {/* Product */}
        </div>
    );
}

export default Home
