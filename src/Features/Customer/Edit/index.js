import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEditCustomerStatus, useEditCustomer } from "../../hooks";
import CustomerForm from "../Form"

const EditCustomer = () => {
  const { params } = useRoute();
  const { onSubmit } = useEditCustomer(params.customerId);
  const status = useEditCustomerStatus();
  console.log("params:", params);
  console.log("onSubmit:", onSubmit);
  console.log("status:", status);

  return (
    <View>
      <CustomerForm
        onSubmit={onSubmit}
        status={status}
        customerId={params.customerId}
      />
    </View>
  );
};

export default EditCustomer;
