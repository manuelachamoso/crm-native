import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      marginTop: 40,
      marginBottom: 30,
    },
    text: {
        color: "#000",
        marginTop: 25,
        textAlign: "center", 
        marginLeft: 15,
        marginRight: 15,
      },
  });
};

export default stylesFn;
