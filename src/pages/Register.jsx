import styled from "styled-components";
import { mobile } from "../responsive";
import {register } from "../redux/apiCalls";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Error = styled.span` 
  color: red;`

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    console.log({ username, password });
    register(dispatch, { username, password, email });
  };
  return (
    <Container>
      <Wrapper>
        <Title>Crear una cuenta</Title>
        <Form>
          <Input placeholder="nombre" />
          <Input placeholder="apellido" />
          <Input placeholder="usuario" onChange={(e) => setUsername(e.target.value)} />
          <Input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
          <Input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
          <Input type="password" placeholder="confirmar password" />
          <Agreement>
            Al crear una cuenta, doy consentimiento de mis datos personales de
            acuerdo a las <b>politicas de privacidad</b>
          </Agreement>
          <Button onClick={handleClick} disabled={isFetching}>Crear</Button>
          {error && <Error> Algo salio mal...</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
