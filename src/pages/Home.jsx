import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
// import Image from "../assets/download (3).jpeg";

const Home = () => {
  const [store, setStore] = useState([]);

  const getProduct = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setStore(res.data));
  };

  useEffect(() => {
    getProduct();
  }, []);
  const getStore = [
    {
      Image: `${Image}`,
      Title: "title",
      Category: "category",
      Price: "price",
    },
  ];
  return (
    <Container>
      <Wrapper>
        <Header>
          <h3> All Fabrics</h3>
        </Header>

        <Fabric>
          {store.map((data, i) => (
            <Card key={i}>
              <main>
                <img src={data.image} alt="" />
              </main>
              <nav>{data.title}</nav>
              <nav>{data.category}</nav>
              <nav>{data.price}</nav>
            </Card>
          ))}
        </Fabric>
      </Wrapper>
    </Container>
  );
};

export default Home;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Wrapper = styled.div`
  width: 90%;
`;
const Header = styled.div``;

const Fabric = styled.div`
  display: flex;
  justify-content: space-between;
  
  align-items: center;

  text-align: center;
  flex-wrap: wrap;
  

  img {
    height: 250px;
    width: 250px;
    /* object-fit: cover; */
    
  }
`;
const Card = styled.div`
  height: 400px;
  width: 400px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: greenyellow; */
  /* background-blend-mode: color; */


  cursor: pointer;
  margin: 10px 0px;
  @media (max-width: 768px) {
    
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  }
  main{
    /* background-color: #ddd; */
    /* height: 300px; */
  }
`;
