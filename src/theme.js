import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    bgColor: "#0D1F2D",
    primary: "#45ADA8",
    secondary: "#9DE0AD",
    whiteShade:"#EDEDEE",
    darkBg:"#0a1924"
  },
  components:{
      Button:{
          variants:{
            primaryBtn:{
                bg:"#45ADA8",
                color:"#EDEDEE",
                _hover:{
                    bg:"#319994"
                }
            }
          }
      }
  }
});


