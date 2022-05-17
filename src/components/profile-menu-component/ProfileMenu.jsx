import { Button } from "@chakra-ui/react";
import { UnorderedList, ListItem } from "@chakra-ui/react";
import { useAuth } from "../../context/useAuth";

const logoutUser = (dispatchAuth) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  dispatchAuth({ type: "LOGOUT_USER" });
};

const ProfileMenu = () => {
  const { dispatchAuth } = useAuth();
  return (
    <UnorderedList listStyleType="none" position="absolute" right={4} top={10}>
      <ListItem>
        {" "}
        <Button
          bg="whiteShade"
          color="bgColor"
          _hover={{ bg: "darkBg", color: "whiteShade" }}
          p={2}
          pl={4}
          pr={4}
          borderRadius="md"
          onClick={() => logoutUser(dispatchAuth)}
        >
          Log Out
        </Button>
      </ListItem>
    </UnorderedList>
  );
};

export default ProfileMenu;
