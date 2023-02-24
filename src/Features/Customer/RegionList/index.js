import React from "react";
import { View, FlatList, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../Button/Button";
import { regions } from "../../../helpers";
import CustomerToBeContacted from "../Notification";
import stylesFn from "./styles";

const RegionList = () => {
  const styles = stylesFn();
  const { navigate } = useNavigation();

  const handleRegionPress = (region) => {
    navigate("List", {
      regionId: region.value,
      regionTitle: region.label,
    });
  };

  const renderRegionItem = ({ item }) => (
    <View>
        <Button onPress={() => handleRegionPress(item)}
        text={item.label}>
        </Button>
    </View>
  );

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Button
        text={"Create Customer"}
        onPress={() => navigate("New")}
        disabled={false}
      />
      <Text style={styles.title}>List of regions</Text>
      <FlatList
        data={regions}
        keyExtractor={(item) => item.value.toString()}
        renderItem={renderRegionItem}
      />
    </View>
    <View>
    <CustomerToBeContacted/>
    </View>
    </SafeAreaView>
  );
};

export default RegionList;
