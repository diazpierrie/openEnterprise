import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux";
import { useDispatch } from "react-redux";

const Container = styled.div`
  height: 60px;
  background-color: white;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Input = styled.input`
  border: none;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ES</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>futuroTech</Logo>
        </Center>
        <Right>
          {!user ? (
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem>Registrarse</MenuItem>
            </Link>
          ) : null}
          {!user ? (
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem>Logearse</MenuItem>
            </Link>
          ) : null}
          {user ? (
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
            </Link>
          ) : null}

          <Link to="/Cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
