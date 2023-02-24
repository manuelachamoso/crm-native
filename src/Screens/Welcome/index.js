import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../Button/Button";
import stylesFn from "./styles";
import { clear } from "../../asyncStorage"

const Welcome = () => {
  const { navigate } = useNavigation();
  const styles = stylesFn()

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Welcome to Customer Manager Plus</Text>

      <Button onPress={() => {navigate("regionList");}}
        disabled={false}  text={"Get Started"}
      />
      <Button onPress={() => clear()} text="Clear Data" />
    </View>
  );
};

export default Welcome;
