import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;

  background-color: #d3d3d3;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; /* Space between buttons */
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #007ff;
  color: black;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;
const Buttonlfet = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const BillowDiv = styled.div`
  display: flex;
  background-color: white;
  justify-content: center; /* Centers both divs horizontally */
  align-items: center; /* Centers both divs vertically */
  padding: 20px;
  height: 65vh; /* Use full viewport height */
  @media (max-width: 768px) {
    flex-direction: column; /* Stack on smaller screens */
    text-align: center;
  }
`;

const FirstDiv = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    height: 300px;
    max-width: 450px;
  }
`;

const SecondDiv = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    height: 300px;
    max-width: 450px;
  }
`;
const SecondBillowSection = styled.div`
  padding: 20px;
  background-color: #f9f9f9;

  text-align: left;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 5px;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 5px;
  }
`;

const FirstSec = styled.div`
  display: flex;
  align-items: flex-start;
  width: 90%;

  margin: 2% 5%;
  border: 1px solid black;
  margin-bottom: 10px;
`;

const ImgSec = styled.div`
  img {
    width: 145px;
    height: auto;
  }
`;

const DetailSec = styled.div`
  margin-left: 20px;
  h2 {
    font-size: 1.8rem;
    margin: 0;
  }
  p {
    font-size: 1rem;
    margin-top: 10px;
    color: #666;
  }

  button {
    margin-top: 10px;
    padding: 5px 10px;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

// Styled components
const BoxDetailsContainer = styled.div`
  padding: 40px;
  background-color: white;
`;

const HeaderTitle = styled.h2`
  text-align: left;
  font-size: 2rem;
  margin-bottom: 30px;
  color: #333;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BoxCard = styled.div`
  //   background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
  margin: 0 10px;
  border: 1px solid black;
  text-align: center;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
  }

  h3 {
    margin-top: 20px;
    font-size: 1.5rem;
    color: black;
    text-align: left;
  }

  p {
    margin-top: 10px;
    text-align: left;
    font-size: 1rem;
    color: #555;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

// Styled components
const FooterContainer = styled.footer`
  background-color: white;
  color: black;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  color: black;
  margin: 0 20px;
  min-width: 200px;

  h3 {
    margin-bottom: 20px;
    font-size: 1.25rem;
    color: #f2f2f2;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;
      font-size: 1rem;
      color: #ccc;

      a {
        color: #ccc;
        text-decoration: none;

        &:hover {
          color: #fff;
        }
      }
    }
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  color: black;
  img {
    width: 24px;
    height: 24px;
  }
`;

const Topmain = () => {
  return (
    <>
      <MainDiv>
        <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>Title</h1>
        <p style={{ fontSize: "18px" }}>description heading title</p>
        <ButtonContainer>
          <Buttonlfet>Left Button</Buttonlfet>
          <Button>Right Button</Button>
        </ButtonContainer>
      </MainDiv>
      <BillowDiv>
        <FirstDiv>
          <img src="https://via.placeholder.com/400" alt="First Image" />
        </FirstDiv>
        <SecondDiv>
          <img src="https://via.placeholder.com/400" alt="Second Image" />
        </SecondDiv>
      </BillowDiv>

      <SecondBillowSection>
        <div>
          <h1>Lorem, ipsum.</h1>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <FirstSec>
          <ImgSec>
            <img src="https://via.placeholder.com/100" alt="Placeholder" />
          </ImgSec>
          <DetailSec>
            <h2>Lorem ipsum dolor sit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              eius. Earum voluptates quasi nemo, minima ipsum sapiente
              repudiandae consectetur eligendi?
            </p>
            <button>Button</button>
          </DetailSec>
        </FirstSec>
        <FirstSec>
          <ImgSec>
            <img src="https://via.placeholder.com/100" alt="Placeholder" />
          </ImgSec>
          <DetailSec>
            <h2>Lorem ipsum dolor sit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              eius. Earum voluptates quasi nemo, minima ipsum sapiente
              repudiandae consectetur eligendi?
            </p>
            <button>Button</button>
          </DetailSec>
        </FirstSec>
        <FirstSec>
          <ImgSec>
            <img src="https://via.placeholder.com/100" alt="Placeholder" />
          </ImgSec>
          <DetailSec>
            <h2>Lorem ipsum dolor sit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              eius. Earum voluptates quasi nemo, minima ipsum sapiente
              repudiandae consectetur eligendi?
            </p>
            <button>Button</button>
          </DetailSec>
        </FirstSec>
      </SecondBillowSection>
      <BoxDetailsContainer>
        <HeaderTitle>Our Services</HeaderTitle>
        {/* First Row */}
        <Row>
          <BoxCard>
            <img src="https://via.placeholder.com/300" alt="Card 1" />
            <h3>Service One</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, delectus.
            </p>
          </BoxCard>
          <BoxCard>
            <img src="https://via.placeholder.com/300" alt="Card 2" />
            <h3>Service Two</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, delectus.
            </p>
          </BoxCard>
          <BoxCard>
            <img src="https://via.placeholder.com/300" alt="Card 3" />
            <h3>Service Three</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, delectus.
            </p>
          </BoxCard>
        </Row>

        {/* Second Row */}
        <Row>
          <BoxCard>
            <img src="https://via.placeholder.com/300" alt="Card 4" />
            <h3>Service Four</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, delectus.
            </p>
          </BoxCard>
          <BoxCard>
            <img src="https://via.placeholder.com/300" alt="Card 5" />
            <h3>Service Five</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, delectus.
            </p>
          </BoxCard>
          <BoxCard>
            <img src="https://via.placeholder.com/300" alt="Card 6" />
            <h3>Service Six</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, delectus.
            </p>
          </BoxCard>
        </Row>
      </BoxDetailsContainer>
      <FooterContainer>
        {/* First Column - Social Media */}
        <FooterColumn>
          <h3 style={{ color: "black", fontWeight: "bold" }}>Social Media</h3>
          <SocialMediaIcons>
            <a href="#">
              <img src="https://via.placeholder.com/24" alt="Facebook" />
            </a>
            <a href="#">
              <img src="https://via.placeholder.com/24" alt="Twitter" />
            </a>
            <a href="#">
              <img src="https://via.placeholder.com/24" alt="Instagram" />
            </a>
          </SocialMediaIcons>
        </FooterColumn>

        {/* Second Column - Use Cases */}
        <FooterColumn>
          <h3 style={{ color: "black", fontWeight: "bold" }}>Use Cases</h3>
          <ul>
            <li>
              <a style={{ color: "black" }} href="#">
                Case 1
              </a>
            </li>
            <li>
              <a style={{ color: "black" }} href="#">
                Case 2
              </a>
            </li>
            <li>
              <a style={{ color: "black" }} href="#">
                Case 3
              </a>
            </li>
            <li>
              <a style={{ color: "black" }} href="#">
                Case 4
              </a>
            </li>
          </ul>
        </FooterColumn>

        {/* Third Column - Explore */}
        <FooterColumn>
          <h3 style={{ color: "black", fontWeight: "bold" }}>Explore</h3>
          <ul>
            <li>
              <a style={{ color: "black" }} href="#">
                About Us
              </a>
            </li>
            <li>
              <a style={{ color: "black" }} href="#">
                Blog
              </a>
            </li>
            <li>
              <a style={{ color: "black" }} href="#">
                Careers
              </a>
            </li>
            <li>
              <a style={{ color: "black" }} href="#">
                Press
              </a>
            </li>
          </ul>
        </FooterColumn>

        {/* Fourth Column - Resources */}
        <FooterColumn>
          <h3 style={{ color: "black", fontWeight: "bold" }}>Resources</h3>
          <ul>
            <li>
              <a style={{ color: "black" }} href="#">
                Help Center
              </a>
            </li>
            <li>
              <a style={{ color: "black" }} href="#">
                Guides
              </a>
            </li>
            <li>
              <a style={{ color: "black" }} href="#">
                Partner Support
              </a>
            </li>
            <li>
              <a style={{ color: "black" }} href="#">
                Developers
              </a>
            </li>
          </ul>
        </FooterColumn>
      </FooterContainer>
    </>
  );
};

export default Topmain;
