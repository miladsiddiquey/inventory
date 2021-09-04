import React from 'react';
import './StockProduct.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Autoplay   } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay  ]);

const StockProduct = () => {
  const stock = [
    {
      "img": "https://i.ibb.co/1fghrzs/3.png",
      "name":'product1',
      "stock":'500 Items'
    },
    {
      "img": "https://i.ibb.co/1fghrzs/3.png",
      "name":'product1',
      "stock":'500 Items'
    },
    {
      "img": "https://i.ibb.co/1fghrzs/3.png",
      "name":'product1',
      "stock":'500 Items'
    },
    {
      "img": "https://i.ibb.co/1fghrzs/3.png",
      "name":'product1',
      "stock":'500 Items'
    },
    {
      "img": "https://i.ibb.co/1fghrzs/3.png",
      "name":'product1',
      "stock":'500 Items'
    },
    {
      "img": "https://i.ibb.co/1fghrzs/3.png",
      "name":'product1',
      "stock":'500 Items'
    },
  ]
  return (
    <div className="stockProduct mt-5">
      <h4 style={{paddingLeft:'30px'}}>Stock Product</h4>
      
      <div className="row ">
            <div className="col-md-12 " >
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          
         
          className="mySwiper"
        > 
            {
              stock.map((st) => (
                <div className="row">
                <div className="col-md-4">
                  <SwiperSlide>
                    <div className="stock_p">
                     <div className="text-center">
                     <img className="img-fluid" src={st.img} alt="" />
                     </div>
                     <div className="stock-title text-center mt-3">
                     <h5>{st.name}</h5>
                      <h6>{st.stock}</h6>
                     </div>
                    </div>
                  </SwiperSlide>
                </div>
                </div>
              ))
            }
        </Swiper>
        </div>
          </div>
      
    </div>
  );
};

export default StockProduct;