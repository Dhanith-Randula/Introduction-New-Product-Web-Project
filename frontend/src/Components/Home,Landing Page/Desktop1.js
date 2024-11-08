import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import React, { useEffect } from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaSearchengin } from "react-icons/fa";



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
    
  <body>
    

  
   
    <div className="carousel">
        <div className="list">
            <div className="item">
                <img src="./images/En and Natu.jpg"/>
                  <div className="content">
                    <div className="main">
                        <h1 className="text-wrapper">INTRODUCTION NEW PRODUCT</h1>
                        <div className="box">
                            <input type="text" placeholder="Search...."/>
                                <a href="#">
                                    <i className="fas fa-search">< FaSearchengin/></i>
                                </a>
                        </div>
                        
                    </div>

                    

                    {/* <div className="author">LUNDEV</div> */}
                    <div className="title">ENVIRONMENTAL </div>
                    <div className="topic">&</div>
                    <div className="title">NATURA</div>

                    <div className="des">
                       
                    Learn about the natural world and the critical role it plays in our lives. This section covers topics such as climate change, wildlife conservation, and eco-friendly practices. Discover articles about the beauty of nature, sustainable travel destinations, and tips for living a greener lifestyle. Get insights on how to reduce your carbon footprint, support conservation efforts, and embrace a more environmentally conscious way of life.
                    </div>
                    <div className="buttons">
                        <button>SEE MORE</button>
                        {/* <button>SUBSCRIBE</button> */}
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="./images/food (2).jpg"/>
                <div className="content">
                <div className="main"><h1 className="text-wrapper">INTRODUCTION NEW PRODUCT</h1>
                <div className="box">
                            <input type="text" placeholder="Search...."/>
                                <a href="#">
                                    <i className="fas fa-search">< FaSearchengin/></i>
                                </a>
                        </div>
                </div>


                    

                    {/* <div className="author">LUNDEV</div> */}
                    <div className="title">FOOD</div>
                    <div className="topic">&</div>
                    <div className="title">DRINKS</div>

                    <div className="des">
                    Delve into the diverse world of food and drinks, from traditional recipes to modern culinary innovations. This section features detailed guides on cooking techniques, food pairings, and the art of mixology. Explore trending cuisines, healthy eating habits, and the latest food fads. Whether you're a home cook or a food connoisseur, discover everything you need to know about ingredients, cooking styles, and new restaurant openings. Enjoy insights on dietary choices, meal planning, and tips for hosting memorable dinner parties.
                    </div>
                    <div className="buttons">
                        <button>SEE MORE</button>
                        {/* <button>SUBSCRIBE</button> */}
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="./images/life.jpg"/>
                <div className="content">
                <div className="main">
                    <h1 className="text-wrapper">INTRODUCTION NEW PRODUCT</h1>
                    <div className="box">
                            <input type="text" placeholder="Search...."/>
                                <a href="#">
                                    <i className="fas fa-search">< FaSearchengin/></i>
                                </a>
                        </div>
                
                </div>


                    
                    {/* <div className="author">LUNDEV</div> */}
                    <div className="title">LIFESTYLE</div>
                    <div className="topic">&</div>
                    <div className="title">FASHION</div>

                    <div className="des">
                    Embrace a lifestyle that combines health, fashion, and personal growth. This section offers advice on fashion trends, style tips, and wellness routines tailored to help you look and feel your best. Stay updated with seasonal fashion guides, skincare tips, and fitness recommendations. Explore articles on work-life balance, mental health, and personal development to help you navigate modern life with confidence. Whether you're looking for style inspiration or self-care ideas, this category provides a holistic approach to living well.
                    </div>
                    <div className="buttons">
                        <button>SEE MORE</button>
                        {/* <button>SUBSCRIBE</button> */}
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="./images/photo.jpg"/>
                <div className="content">
                <div className="main">
                    <h1 className="text-wrapper">INTRODUCTION NEW PRODUCT</h1>
                    <div className="box">
                            <input type="text" placeholder="Search...."/>
                                <a href="#">
                                    <i className="fas fa-search">< FaSearchengin/></i>
                                </a>
                        </div>
                </div>


                    
                    {/* <div className="author">LUNDEV</div> */}
                    <div className="title">PHOTOGRAPHY</div>
                    <div className="topic">&</div>
                    <div className="title">VIDEOGRAPHY</div>
                    <div className="des">
                    Explore the art of capturing the perfect moment with tips and tutorials for photography and videography enthusiasts. From camera settings and lighting techniques to post-processing and editing software, this section provides in-depth information for hobbyists and professionals alike. Learn about the latest trends, gear recommendations, and creative ideas for different types of photography, including landscape, portrait, and drone photography. Get inspired by stunning visuals and master the craft of storytelling through images and videos.
                    </div>
                    <div className="buttons">
                        <button>SEE MORE</button>
                        {/* <button>SUBSCRIBE</button> */}
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="./images/tec.jpg"/>
                <div className="content">
                <div className="main">
                    <h1 className="text-wrapper">INTRODUCTION NEW PRODUCT</h1>
                    <div className="box">
                            <input type="text" placeholder="Search...."/>
                                <a href="#">
                                    <i className="fas fa-search">< FaSearchengin/></i>
                                </a>
                                
                    </div>
                </div>

                    
                    
                    {/* <div className="author">LUNDEV</div> */}
                    <div className="title">TECHNOLOGY</div>
                    {/* <div className="topic">ANIMAL</div> */}
                    {/* <div className="title">DESIGN SLIDER</div> */}

                    <div className="des">
                    Stay on the cutting edge of technological advancements with insights into the latest devices, software, and digital trends. This section covers topics ranging from smart home gadgets and mobile apps to artificial intelligence and blockchain technology. Read detailed product reviews, how-to guides, and expert opinions to help you make informed tech choices. Discover emerging technologies that are shaping industries and changing the way we live, work, and play. Whether you're a tech enthusiast or a curious beginner, this category offers a deep dive into the world of innovation.
                    </div>
                    <div className="buttons">
                        <button>SEE MORE</button>
                        {/* <button>SUBSCRIBE</button> */}
                    </div>
                </div>
            </div>
        </div>

        <div className="thumbnail">
            <div className="item">
                <img src="./images/En and Natu.jpg"/>
                <div className="content">
                    <div className="title">
                    Environment & Nature
                    </div>
                    <a href="#">
                        <div className="description">
                            Details {'>'}
                        </div>
                    </a>
                </div>
            </div>
            <div className="item">
                <img src="./images/food (2).jpg"/>
                <div className="content">
                    <div className="title">
                        Food & Drinks
                    </div>
                    <a href="#">
                        <div className="description">
                            Details {'>'}
                        </div>
                    </a>
                </div>
            </div>
            <div className="item">
                <img src="./images/life.jpg"/>
                <div className="content">
                    <div className="title">
                    Lifestyle & Fashion
                    </div>
                    <a href="#">
                        <div className="description">
                            Details {'>'}
                        </div>
                    </a>
                </div>
            </div>
            <div className="item">
                <img src="./images/photo.jpg"/>
                <div className="content">
                    <div className="title">
                        Photography
                    </div>
                    <a href="#">
                        <div className="description">
                            Details {'>'}
                        </div>
                    </a>
                </div>
            </div>
            <div className="item">
                <img src="./images/tec.jpg"/>
                <div className="content">
                    <div className="title">
                        Technology
                    </div>
                    <a href="#">
                        <div className="description">
                            Details {'>'}
                        </div>
                    </a>
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

