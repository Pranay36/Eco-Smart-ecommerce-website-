import React, { useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";

   const sliderImages = [
     {
       url:
         "https://global.hisense.com/dam/jcr:cab7e33c-51aa-44c6-8637-3597a1ebd709/product-overview-hisense-smartphone-kv.jpg",
     },
     {
       url:
         "https://cdn.shopify.com/s/files/1/1603/9553/collections/beta_banner_1200x630.png?v=1670065562",
     },
     {
       url:
         "https://cdn.shopify.com/s/files/1/0040/4396/4531/articles/Banner_Image_840x619.jpg?v=1544604038",
     },
     {
       url:
         "https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Nireeksh/Oct22/D56198629_IN_HETV_Samsung_TVs_Sep_1242x450.jpg",
     },
     {
       url:
         "https://i.pinimg.com/originals/ef/80/83/ef8083bfe79088dc00bd8eca9c821cd5.jpg",
     },
];
   
const ImageSlider = () => {
    const [imageNum, setImageNum] = useState(1);


    return (
      <div className="">
        <SimpleImageSlider
          className="card_img"
          width={"100%"}
          height={500}
          images={sliderImages}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          onStartSlide={(index, length) => {
            setImageNum(index);
          }}
          autoPlayDelay={3}
        />
      </div>
    );
}

export default ImageSlider