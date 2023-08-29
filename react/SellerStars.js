import React, { useState } from "react";
import { Link } from "vtex.render-runtime";
import { useProduct } from "vtex.product-context";
import { useCurrentSeller } from "vtex.seller-selector/CurrentSellerContext";

const SellerStars = ({ Stars, SellerInfos }) => {
  const { product, selectedItem } = useProduct() ?? {};
  const { currentSeller } = useCurrentSeller();

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          setShowModal(true);
        }}
      >
        <span>{currentSeller.sellerName}</span>
        <Stars sellerId={currentSeller.sellerId} />
      </div>
      {showModal && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            left: "56vw",
            width: "fit-content",
            padding: "10px",
            height: "130px",
            backgroundColor: "white",
            border: "1px solid #000",
            borderRadius: "5px",
            zIndex: 99,
          }}
        >
          <span
            style={{
              cursor: "pointer",
              position: "absolute",
              right: "5px",
              top: "5px",
            }}
            onClick={() => {
              setShowModal(false);
            }}
          >
            X
          </span>

          <SellerInfos sellerId={currentSeller.sellerId} />

          <Link
            className={`seller-click`}
            page="store.custom#seller"
            query={currentSeller ? `sellerId=${currentSeller.sellerId}` : ""}
          >
            Ver perfil do lojista
          </Link>
        </div>
      )}
    </>
  );
};

export default SellerStars;
