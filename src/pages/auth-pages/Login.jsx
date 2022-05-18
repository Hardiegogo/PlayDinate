import {
  Box,
  Button,
  Center,
  FormHelperText,
  Grid,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../../components/navbar-component/Navbar";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useAuth } from "../../context/useAuth";
import { loginUser } from "../../utils/auth-services/loginUser";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

const Login = () => {
  const { dispatchAuth } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setUser((user) => {
      return {
        ...user,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <Box minH="100vh" bg="bgColor">
      <Navbar showMenu={true} />
      <Grid placeItems="center" mt={32}>
        <Box borderRadius="lg" bg="whiteShade" p={8} minW="25%">
          <Center>
            <Heading color="bgColor">Login</Heading>
          </Center>
          <form onSubmit={(e) => loginUser(e, user, dispatchAuth, navigate)}>
            <FormControl mt={4} color="bgColor">
              <Box>
                <FormLabel htmlFor="user-email">Enter Email:</FormLabel>
                <Input
                  id="user-email"
                  type="email"
                  variant="outline"
                  outline="black 1px solid"
                  value={user.email}
                  name="email"
                  onChange={changeHandler}
                ></Input>
              </Box>
              <Box mt={4}>
                <FormLabel htmlFor="user-pass">Enter your password:</FormLabel>
                <Input
                  id="user-pass"
                  type="password"
                  variant="outline"
                  outline="black 1px solid"
                  value={user.password}
                  name="password"
                  onChange={changeHandler}
                ></Input>
              </Box>
              <Center>
                <Button variant="primaryBtn" mt={6} w="100%" type="submit">
                  Login
                </Button>
              </Center>
              <Center mt={4}>
                <RouterLink to="/signup">
                  <FormHelperText as="u">
                    Create an account {`>`}
                  </FormHelperText>
                </RouterLink>
              </Center>
            </FormControl>
          </form>
        </Box>
      </Grid>
    </Box>
  );
};

export default Login;
