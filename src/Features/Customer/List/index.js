import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Button from "../../../Button/Button";
import { useGetCustomersByRegion } from "../../hooks";
import stylesFn from "./styles";

const List = () => {
  const styles = stylesFn();
  const { params } = useRoute();
  const { navigate } = useNavigation();
  const customerListFilteredByRegion = useGetCustomersByRegion(params.regionId);

  const getCustomerStatus = (state) => {
    return state ? "Active" : "In-Active";
  };

  const renderCustomer = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigate("Edit", { customerId: item.id })}>
        <View style={styles.customerDetail}>
          <Text>ID: {item.id}</Text>
          <Text>First Name: {item.firstName}</Text>
          <Text>Last Name: {item.lastName}</Text>
          <Text>Active: {getCustomerStatus(item.isActive)}</Text>
          <Text>Region: {item.region.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {customerListFilteredByRegion.length > 0 ? (
        <View>
          <Text style={styles.text}>Viewing customers in {params.regionTitle}</Text>
          <FlatList
            data={customerListFilteredByRegion}
            renderItem={renderCustomer}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      ) : (
        <View style={styles.noCustomer}>
          <Text>There are no customers registered in this region</Text>
          <Button
            text="Create Customer"
            onPress={() => navigate("New")}
            disabled={false}
          />
        </View>
      )}
    </View>
  );
};

export default List;


