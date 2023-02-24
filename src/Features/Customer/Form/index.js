import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useUpdateField } from "../../hooks";
import Button from "../../../Button/Button";
import { PENDING } from "../../../helpers";
import stylesFn from "./styles";

const CustomerForm = ({ onSubmit, customerId, status }) => {
  const styles = stylesFn();
  const { navigate } = useNavigation();
  const { fields, setFormField } = useUpdateField(customerId);

  const [regionsList, setRegionsList] = useState([
    { id: 1, title: "North West", backgroundColor: "#FFFFFF", color: "#000000" },
    { id: 2, title: "Mid West", backgroundColor: "#FFFFFF", color: "#000000" },
    { id: 3, title: "South West", backgroundColor: "#FFFFFF", color: "#000000" },
    { id: 4, title: "South East", backgroundColor: "#FFFFFF", color: "#000000" },
    { id: 5, title: "North East", backgroundColor: "#FFFFFF", color: "#000000" },
  ]);

  const [isAction, setIsAction] = useState([
    { title: "Yes", isActive: true, backgroundColor: "#FFFFFF", color: "#000000" },
    { title: "No", isActive: false, backgroundColor: "#FFFFFF", color: "#000000" },
  ]);

  const { firstName, lastName, isActive, region } = fields;

  useEffect(() => {
    setRegionsList(
      regionsList.map((el) => {
        if (el.id === region?.id) {
          return { ...el, backgroundColor: "#0E1C36", color: "#FFFFFF" };
        } else {
          return { ...el, backgroundColor: "#FFFFFF", color: "#000000" };
        }
      })
    );
    setIsAction(
      isAction.map((el) => {
        if (el.isActive === isActive) {
          return { ...el, backgroundColor: "#0E1C36", color: "#FFFFFF" };
        } else {
          return { ...el, backgroundColor: "#FFFFFF", color: "#000000" };
        }
      })
    );
  }, [fields]);

  const selectRegion = ({ id, title }) => {
    setRegionsList(
      regionsList.map((el) => {
        if (el.id === id) {
          return { ...el, backgroundColor: "#0E1C36", color: "#FFFFFF" };
        } else {
          return { ...el, backgroundColor: "#FFFFFF", color: "#000000" };
        }
      })
    );
    setFormField("region", { id, title });
  };

  const selectActiveBtn = (item) => {
    setIsAction(
      isAction.map((el) => {
        if (el.isActive === item.isActive) {
          return { ...el, backgroundColor: "#0E1C36", color: "#FFFFFF" };
        } else {
          return { ...el, backgroundColor: "#FFFFFF", color: "#000000" };
        }
      })
    );
    setFormField("isActive", item.isActive);
  };

  const onHandleSubmit = () => {
    onSubmit();
    navigate("regionList");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Customer information:</Text>
        <TextInput
          key={"firstName"}
          placeholder={firstName || "First name"}
          value={firstName || ""}
          style={styles.textInput}
          onChangeText={(v) => setFormField("firstName", v)}
        />

        <TextInput
          key={"lastName"}
          placeholder={lastName || "Last name"}
          value={lastName || ""}
          style={styles.textInput}
          onChangeText={(v) => setFormField("lastName", v)}
        />
        <View style={styles.space}></View>
        <Text style={styles.text}>Active:</Text>
        {isAction.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => selectActiveBtn(item)}>
            <View
              style={[
                styles.regionButtons,
                { backgroundColor: item.backgroundColor },
              ]}
            >
              <Text style={{ color: item.color }}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.space}></View>
        <Text style={styles.text}>Regions:</Text>
        {regionsList.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => selectRegion(item)}>
            <View
              style={[
                styles.regionButtons,
                { backgroundColor: item.backgroundColor },
              ]}
            >
              <Text style={{ color: item.color }}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
        <View style={styles.space}></View>
      </View>
      <Button
        style={styles.save}
        text={"Save Customer"}
        onPress={onHandleSubmit}
        disabled={status !== PENDING}
      />
    </View>
  );
};

export default CustomerForm;
