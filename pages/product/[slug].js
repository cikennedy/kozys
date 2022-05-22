// square bracket named file means that this page will be dynamically rendered
import React from "react";

import { client, urlFor } from "../../lib/client";

const ProductDetails = () => {
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src="" />
          </div>
        </div>
      </div>
    </div>
  );
};

// getStaticProps is a next.js function that will pre-render a page at build time
// use if data comes from a headless CMS, can be publicly cahced (not user-specific)
// getStaticProps generates HTML and JSON files, both can be cached by a CDN for performance
export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
