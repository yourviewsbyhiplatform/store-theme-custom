import React from "react";
import { useProduct } from "vtex.product-context";
import { useRuntime } from "vtex.render-runtime";

const SellerTestimonials = ({ Testimonials }) => {
  const { selectedItem } = useProduct();
  const { query } = useRuntime();

  const sellers = selectedItem?.sellers;

  const actualSeller = sellers?.find((s) => s.sellerId === query.sellerId);

  return (
    <div>
      <Testimonials sellerId={actualSeller} />
    </div>
  );
};

export default SellerTestimonials;
