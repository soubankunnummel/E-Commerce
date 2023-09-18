import React, { useContext } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Productcontext } from "../Context";
import { useNavigate } from "react-router-dom";



export default function AllProducts() {
  const navigate = useNavigate();

  // Define the function to navigate to the product view
  const handleViewProduct = (productId) => {
    navigate(`/View/${productId}`);
  };

  const { productss, serchTerm } = useContext(Productcontext);

  return (
    <>
      <div className="container mx-5">
        <h1 className="mt-5 home-card" style={{ textAlign: "center" }}>
          All products
        </h1>
        <MDBRow className="mt-5 my-5" id="allproducts">
          {productss.map((product, index) => (
              <MDBCol md="3" key={index} style={{ marginBottom: 10 }}>
                <MDBCard className=" hover-zoom  ">
                  <MDBCardImage
                    className=""
                    onClick={() => handleViewProduct(product.id)}
                    src={product.image}
                    position="top"
                    alt="..."
                  />
                  <MDBCardBody>
                    <MDBCardTitle>{product.name} </MDBCardTitle>
                    <MDBCardText>{product.discription}</MDBCardText>
                    <MDBCardTitle>${product.price} </MDBCardTitle>

                    {/* Pass the product.id as a parameter to the handleViewProduct function */}
                    <MDBBtn onClick={() => handleViewProduct(product.id)}>
                      View
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
        </MDBRow>
      </div>
    </>
  );
}
