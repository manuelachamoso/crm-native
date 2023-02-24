import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    noCustomer: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    container: {
      margin: "5%",
    },
    customerDetail: {
      borderWidth: 1,
      padding: 10,
      margin: 10,
      width: 200,
      alignSelf: "center",
    },
    text: {
      color: "#000",
      fontWeight: "bold",
      marginTop: 10,
      alignSelf: "center",
    },
  });
};

export default stylesFn;
