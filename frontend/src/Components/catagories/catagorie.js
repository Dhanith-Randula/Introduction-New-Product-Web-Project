
import React from 'react';
import './catagorie.css';
import  { useState, useEffect } from 'react';



// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Category Page</title>
//     <link rel="stylesheet" href="styles.css">
// </head>

export default function Catagorie() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Function to make a GET request to fetch products from the backend
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8070/product/'); // Replace with the correct API route
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);


    return(
<body>
    {/* <!-- Background Image Section --> */}
    <div class = 'body1'>

    
    <div class="background">
        {/* <!-- Header Section --> */}
        {
//         products.map((product, index) => (
//     <div key={index}>
//         <h1>{product.categories}</h1>
//         <h2>{product.productname}</h2>
//         {/* <h2>{product.discription}</h2> */}
//         <h2>{product.images && product.images.map((image, index) => (
//             <img className='product_image'
//               key={image.filename}
//               src={`http://localhost:8070/uploads/${image.filename}`}
//               alt={image.filename}
              
//             />
//           ))}
//             </h2>
//     </div>
// ))
}
        <h1 class="header">CATEGORY NAME</h1>
        {/* <!-- Search Bar --> */}
        <div class="search-bar">
            <input type="text" placeholder="Search..."/>
        </div>
        
        {/* <!-- Product Section 1 --> */}
        <div class="product-card">
            <div class="product-image left">
                
                
                {/* <img src='/'></img> */}
                <div class="image">Image</div>
            </div>
            <div class="product-details">
                <h2>PRODUCT NAME</h2>
                <p>Description</p>
                <a href="#" class="see-more">see more {">"}</a>
            </div>
        </div>

        {/* <!-- Product Section 2 --> */}
        <div class="product-card">
            <div class="product-details">
                <h2>PRODUCT NAME</h2>
                <p>Description</p>
                <a href="#" class="see-more">see more {">"}</a>
            </div>
            <div class="product-image right">
                <div class="image">Image</div>
            </div>
        </div>
    </div>

    {/* <!-- See More Link --> */}
    <div class="footer">
        <a href="#" class="see-more">SEE MORE {">"}</a>
    </div>
    </div>
</body>
    )
}
