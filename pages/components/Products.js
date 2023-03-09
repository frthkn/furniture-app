import React from "react";
import ProductItem from "./ProductItem";
import img1 from "../../assets/img/image1.jpg";
import img2 from "../../assets/img/image2.jpg";
import img3 from "../../assets/img/image3.jpg";
import img4 from "../../assets/img/image4.jpg";
import img5 from "../../assets/img/image5.jpg";
import img6 from "../../assets/img/image6.jpg";
import img7 from "../../assets/img/image7.jpg";

const Products = () => {
  return (
    <div id="products" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Products
        </p>
        <h2 className="py-4">What We&apos; Made</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProductItem
            title="Diningroom"
            backgroundImg={img7}
            productUrl="/"
            king="Furniture"
          />
          <ProductItem
            title="Tables"
            backgroundImg={img1}
            productUrl="/"
            kind="Furniture"
          />
          <ProductItem
            title="Dinningroom"
            backgroundImg={img5}
            productUrl="/"
            kind="Furniture"
          />
          <ProductItem
            title="Tables"
            backgroundImg={img2}
            productUrl="/"
            kind="Furniture"
          />
          <ProductItem
            title="Bedreom"
            backgroundImg={img3}
            productUrl="/"
            kind="Furniture"
          />

          <ProductItem
            title="Dinningroom"
            backgroundImg={img4}
            productUrl="/"
            kind="Furniture"
          />

          <ProductItem
            title="Dinningroom"
            backgroundImg={img6}
            productUrl="/"
            kind="Furniture"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
