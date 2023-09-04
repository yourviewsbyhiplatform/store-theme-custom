import React from "react";
import { useProduct } from "vtex.product-context";
import { useRuntime } from "vtex.render-runtime";

const SellerTestimonials = ({ Testimonials }) => {
  const { query } = useRuntime();
  const actualSeller = query.sellerId;

  return (
    <div>
      <Testimonials sellerId={actualSeller} />
    </div>
  );
};

export default SellerTestimonials;
