import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import React, { useEffect } from "react";



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

                    <div classNameName="name-search">
                        <h1 classNameName="ha">INTRODUCTION NEW PRODUCT</h1>
                        <div>
                        <input type="text" placeholder="Search..." />
                        <button>Search</button>
                        </div>
                    </div> 

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

                    <div className="name-search">
                        <h1 className="ha">INTRODUCTION NEW PRODUCT</h1>
                        <div>
                        <input type="text" placeholder="Search..." />
                        <button>Search</button>
                        </div>
                    </div>

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

                    <div className="name-search">
                        <h1 className="ha">INTRODUCTION NEW PRODUCT</h1>
                        <div>
                        <input type="text" placeholder="Search..." />
                        <button>Search</button>
                        </div>
                    </div>
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

                    <div className="name-search">
                        <h1 className="ha">INTRODUCTION NEW PRODUCT</h1>
                        <div>
                        <input type="text" placeholder="Search..." />
                        <button>Search</button>
                        </div>
                    </div>
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
                    
                    <div className="name-search">
                        <h1 className="ha">INTRODUCTION NEW PRODUCT</h1>
                        <div>
                        <input type="text" placeholder="Search..." />
                        <button>Search</button>
                        </div>
                    </div>
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

