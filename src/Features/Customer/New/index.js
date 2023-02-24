import { View, Text } from "react-native";
import React from "react";
import Form from "../Form";
import { useCreateCustomer, useCreateCustomerStatus } from "../../hooks";


const New = () => {
    const { onSubmit } = useCreateCustomer();
    const status = useCreateCustomerStatus();
  
    return (
      <View>
        <Form onSubmit={onSubmit} status={status} customerId={null} />
      </View>
    )
};

export default New;

