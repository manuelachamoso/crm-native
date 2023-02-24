import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    container: {
      margin: "5%",
      alignItems: "center",
    },
    textInput: {
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 4,
      padding: 15,
      marginVertical: 5,
      width: 300,
      alignSelf: "center",
    },
    space: {
      height: 17,
      width: "100%",
    },
    region: {
      backgroundColor: "#FFFFFF", 
      color: "#000000", 
    },
    text : {
      alignSelf: "center",
      marginBottom: 3,
      fontWeight: "bold",
    },
    regionButtons: {
      width: "100%",
      height: 45,
      width: 300,
      alignSelf: "center",
      borderRadius: 6,
      marginVertical: 10,
      borderColor: "#0E1C36",
      borderWidth: 2,
      justifyContent: "center",
      alignItems: "center",
    },
  });
};

export default stylesFn;
