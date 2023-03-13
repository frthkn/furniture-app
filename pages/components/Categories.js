import React from "react";
import CategoriItem from "./CategoriItem";
import img1 from "../../assets/img/image1.jpg";
import img2 from "../../assets/img/image2.jpg";
import img3 from "../../assets/img/image3.jpg";
import img4 from "../../assets/img/image4.jpg";
import img5 from "../../assets/img/image5.jpg";
import img6 from "../../assets/img/bedroom.jpg";
import img7 from "../../assets/img/image7.jpg";

const Categories = () => {
  return (
  
      <div id="categories" className="max-w-[1240px] mx-auto px-2 text-center py-5">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Categories
        </p>
        <h2 className="py-4">What We&apos; Made</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label>Kitchen</label>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
              dolor sit amet consectetur adipisicing elit.{" "}
            </p>
            <CategoriItem backgroundImg={img7} productUrl="/" />
          </div>

          <div>
            <label>Livingroom</label>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
              dolor sit amet consectetur adipisicing elit.
            </p>
            <CategoriItem backgroundImg={img1} productUrl="/" />
          </div>

          <div>
            <label>Lamp</label>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
              dolor sit amet consectetur adipisicing elit.{" "}
            </p>
            <CategoriItem backgroundImg={img5} productUrl="/" />
          </div>

          <div>
            <label>Home Chair</label>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
              dolor sit amet consectetur adipisicing elit.{" "}
            </p>
            <CategoriItem backgroundImg={img2} productUrl="/" />
          </div>

          <div>
            <label>Office Chair</label>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
              dolor sit amet consectetur adipisicing elit.{" "}
            </p>
            <CategoriItem backgroundImg={img3} productUrl="/" />
          </div>

          <div>
            <label>Dining Room</label>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
              dolor sit amet consectetur adipisicing elit.{" "}
            </p>

            <CategoriItem backgroundImg={img4} productUrl="/" />
          </div>

          <div>
            <label>Bedroom</label>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
              dolor sit amet consectetur adipisicing elit.{" "}
            </p>
            <CategoriItem backgroundImg={img6} productUrl="/" />
          </div>
        </div>
      </div>
    
  );
};

export default Categories;
