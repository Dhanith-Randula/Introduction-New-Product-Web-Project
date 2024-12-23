
import React from 'react';
import './catagorie.css';
import  { useState, useEffect } from 'react';


export default function Catagorie() {
    const [products, setProducts] = useState([]);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        // Function to make a GET request to fetch products from the backend
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8070/product/');
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

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const description = products[0]?.discription;
    const shortenedDescription = description?.substring(0, 800);

    const firstCategoryProducts = products.filter(product => product.category === 'Environment & Nature');

    const firstProduct = firstCategoryProducts[0];


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
        {/* <h1 class="header"></h1> */}
        <div class="search-bar">
            <input type="text" placeholder="Search..."/>
        </div>
        <div class="product-card">
            <div class="product-image left">
                <div class="image">Image</div>
            </div>
            <div class="product-details">

            {firstProduct && (
                    <div>
                        <h1>{firstProduct.name}</h1>
                        <p>HIIIIIIIIIIIII</p>
                        {/* <p>{shortenedDescription}</p> */}
                    </div>
                )}
                
                {/* <h2>PRODUCT NAME</h2> */}
                <h2>{products[0]?.productname}</h2>
                {expanded ? (
                                <p>{description}</p>
                            ) : (
                                <p>{shortenedDescription}...</p>
                            )}
                            <button onClick={toggleExpand} class="see-more">
                                {expanded ? 'See Less' : 'See More'}
                            </button>
                {/* <p>{products[0]?.discription}</p> */}
                {/* <p>Description</p> */}
                {/* <a href="#" class="see-more">see more {">"}</a> */}
            </div>
        </div>
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
    <div class="footer">
        <a href="#" class="see-more">SEE MORE {">"}</a>
    </div>
    </div>
</body>
    )
}

