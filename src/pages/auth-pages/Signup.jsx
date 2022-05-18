import { Box, Button, Center, Grid, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../../components/navbar-component/Navbar";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
import { useAuth } from "../../context/useAuth";
import { signupUser } from "../../utils/auth-services/signupUser";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

const Signup = () => {
  const { dispatchAuth } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
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
      <Grid placeItems="center" mt={16}>
        <Box borderRadius="lg" bg="whiteShade" p={8} minW="25%">
          <Center>
            <Heading color="bgColor">Signup</Heading>
          </Center>
          <form onSubmit={(e) => signupUser(e, user, dispatchAuth, navigate)}>
            <FormControl mt={4} color="bgColor">
              <Box>
                <FormLabel htmlFor="user-first-name">First name:</FormLabel>
                <Input
                  id="user-first-name"
                  type="text"
                  variant="outline"
                  outline="black 1px solid"
                  value={user.firstName}
                  name="firstName"
                  onChange={changeHandler}
                ></Input>
              </Box>
              <Box>
                <FormLabel htmlFor="user-last-name">Last name:</FormLabel>
                <Input
                  id="user-last-name"
                  type="text"
                  variant="outline"
                  outline="black 1px solid"
                  value={user.lastName}
                  name="lastName"
                  onChange={changeHandler}
                ></Input>
              </Box>
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
                  Signup
                </Button>
              </Center>
              <Center mt={4}>
                <RouterLink to="/login">
                  <FormHelperText as="u">
                    Already have an account ?
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

export default Signup;
