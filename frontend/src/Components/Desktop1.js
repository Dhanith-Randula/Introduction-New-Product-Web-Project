import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
// import "./Desktop1.css";
import "./style.css";
// import "./appp.js";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from 'materialize-css'; 
// import { useEffect ,useRef,next } from "react";


function Desktop1() {
    useEffect(() => {
        // Ensure the DOM is fully loaded before accessing elements
        const nextDom = document.getElementById('next');
        const prevDom = document.getElementById('prev');
        const carouselDom = document.querySelector('.carousel');
        const SliderDom =  carouselDom.querySelector('.carousel .list');
        const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
        // const thumbnailItemsDom = thumbnailBorderDom ? thumbnailBorderDom.querySelectorAll('.item') : [];
        const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

        const timeDom = document.querySelector('.carousel .time');
    
        if (thumbnailBorderDom && thumbnailItemsDom.length > 0) {
          thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        }
        

    
        const timeRunning = 3000;
        const timeAutoNext = 7000;
    
        if (nextDom) {
          nextDom.onclick = function() {
            showSlider('next');
          };
        }
    
        if (prevDom) {
          prevDom.onclick = function() {
            showSlider('prev');
          };
        }
    
        let runTimeOut;
        let runNextAuto = setTimeout(() => {
          if (nextDom) {
            nextDom.click();
          }
        }, timeAutoNext);
    
        function showSlider(type) {
          if (SliderDom) {
            const SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
            const thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
            if(type === 'next'){
                SliderDom.appendChild(SliderItemsDom[0]);
                thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
                carouselDom.classList.add('next');
            }else{
                SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
                thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                carouselDom.classList.add('prev');
            }
            clearTimeout(runTimeOut);
                runTimeOut = setTimeout(() => {
                    carouselDom.classList.remove('next');
                    carouselDom.classList.remove('prev');
                }, timeRunning);

            clearTimeout(runNextAuto);
                runNextAuto = setTimeout(() => {
                  if (nextDom) nextDom.click();
                }, timeAutoNext)
          }
        }
    
        return () => {
          clearTimeout(runNextAuto);
        };
      }, []);
  
  
  return (

    <>
     {/* <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       
      </head> */}
  <body>

  <div classNameName="header-container">
        <h1 classNameName="ha">INTRODUCTION NEW PRODUCT</h1>
        <div>
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
    </div>    
    {/* <header>
        <nav>
            <a href="">Home</a>
            <a href="">Contacts</a>
            <a href="">Info</a>
        </nav>
    </header> */}

  
    <div className="carousel">
        
       
        <div className="list">
            <div className="item">
                <img src="./images/En and Natu.jpg"/>
                  <div className="content">
                    <div className="author">LUNDEV</div>
                    <div className="title">DESIGN SLIDER</div>
                    <div className="topic">ANIMAL</div>
                    <div className="des">
                       
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="./images/food (2).jpg"/>
                <div className="content">
                    <div className="author">LUNDEV</div>
                    <div className="title">DESIGN SLIDER</div>
                    <div className="topic">ANIMAL</div>
                    <div className="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="./images/life.jpg"/>
                <div className="content">
                    <div className="author">LUNDEV</div>
                    <div className="title">DESIGN SLIDER</div>
                    <div className="topic">ANIMAL</div>
                    <div className="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="./images/photo.jpg"/>
                <div className="content">
                    <div className="author">LUNDEV</div>
                    <div className="title">DESIGN SLIDER</div>
                    <div className="topic">ANIMAL</div>
                    <div className="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="./images/tec.jpg"/>
                <div className="content">
                    <div className="author">LUNDEV</div>
                    <div className="title">DESIGN SLIDER</div>
                    <div className="topic">ANIMAL</div>
                    <div className="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>

        
      
        <div className="thumbnail">
            <div className="item">
                <img src="./images/En and Natu.jpg"/>
                <div className="content">
                    <div className="title">
                        Name Slider
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="./images/food (2).jpg"/>
                <div className="content">
                    <div className="title">
                        Name Slider
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="./images/life.jpg"/>
                <div className="content">
                    <div className="title">
                        Name Slider
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="./images/photo.jpg"/>
                <div className="content">
                    <div className="title">
                        Name Slider
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="./images/tec.jpg"/>
                <div className="content">
                    <div className="title">
                        Name Slider
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
            
        </div>
      

        <div className="arrows">
        <button id="prev">{"<"}</button>
            <button id="next">{">"}</button>
        </div>
        
        <div className="time"></div>
    </div>

  
</body>
</>
  );
}

export default Desktop1;


// finction 

// const bannerRef = useRef(null); 

  // function changeBG(bg) {
  //   const banner = bannerRef.current; 
  //   if (banner) { 
  //     banner.style.background = `url(${bg})`;
  //     banner.style.backgroundSize = 'cover';
  //     banner.style.backgroundPosition = 'center';
  //   }
  // }

  //  useEffect(() => {
  //   const options = {
  //     fullWidth: true,
  //     indicators: true,
  //   };
  //   const elems = document.querySelectorAll('.carousel');
  //   M.Carousel.init(elems, options);
  // }, []); 


{/* <body classNameName="background-styles">
      

      <div classNameName="header-container">
        <h1 classNameName="ha">INTRODUCTION NEW PRODUCT</h1>
        <div>
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <div classNameName="image-container">
          
        </div>
        <div >
          <p classNameName="pa">
          We're thrilled to present a curated selection of cutting-edge products
          that redefine modern living. Our passion for innovation drives us to bring 
          you the latest technological, design, and functionality advancements. 
          With a commitment to quality and aesthetics, we invite you to explore our 
          range of new products that seamlessly integrate into your lifestyle.

          </p>
          
          <button classNameName="learn-more">Learn More</button>
          <div className = 'banner'ref={bannerRef}>
            <div className='content'>
               <h1>WELCOME</h1> 
            </div>

            <div className='carousel-box'>
                <div className="carousel">
                  <div className="carousel-item" onClick={() => changeBG('bg-../assets/En and Natu.jpg')} href="#one!"><img src="./images/environment.jpg"/></div>
                  <div className="carousel-item" onClick={() => changeBG('bg-../assets/life.jpg')} href="#two!"><img src="./images/fashion.jpg"/></div>
                  <div className="carousel-item" onClick={() => changeBG('bg-../assets/food (2).jpg')} href="#three!"><img src="./images/food.jpg"/></div>
                  <div className="carousel-item" onClick={() => changeBG('bg-../assets/photo.jpg')} href="#four!"><img src="./images/photography.jpg"/></div>
                  <div className="carousel-item" onClick={() => changeBG('bg-../assets/tec.jpg')} href="#five!"><img src="./images/technology.jpg"/></div>
                </div>

            </div>

          </div>
          
          <div classNameName="image-row">
          <a href="image6-link" style={{ position: "relative" }}>
              <img src="./images/environment.jpg" alt="Image 6" classNameName="image-size" />
              <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" , color:"white"}}>Environmental & Nature</span>
            </a>
            <a href="image6-link" style={{ position: "relative" }}>
              <img src="./images/fashion.jpg" alt="Image 7" classNameName="image-size" />
              <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" ,color:"white" }}>Lifestyle & Fashion</span>
            </a>
            <a href="image6-link" style={{ position: "relative" }}>
              <img src="./images/food.jpg" alt="Image 8" classNameName="image-size" />
              <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" ,color:"white"}}>Food & Drink</span>
            </a>
            <a href="image6-link" style={{ position: "relative" }}>
              <img src="./images/photography.jpg" alt="Image 9" classNameName="image-size" />
              <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" ,color:"white" }}>Photography</span>
            </a>
            <a href="image6-link" style={{ position: "relative" }}>
              <img src="./images/technology.jpg" alt="Image 10" classNameName="image-size" />
              <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" , color:"white"}}>Technology</span>
            </a>
            
          </div>
          
          
          
        </div>
      </div>
      <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      
    </body> */}  