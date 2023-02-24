import React, { useEffect, useState } from "react";
import { Keyboard, View, Text } from "react-native";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import Button from "../../../Button/Button";
import stylesFn from "./styles";

const CustomerToBeContacted = () => {
  const [regionsList, setRegionsList] = useState([
    { id: 1, title: "North West", backgroundColor: "#FFFFFF", color: "#000000" },
    { id: 2, title: "Mid West", backgroundColor: "#FFFFFF", color: "#000000" },
    { id: 3, title: "South West", backgroundColor: "#FFFFFF", color: "#000000" },
    { id: 4, title: "South East", backgroundColor: "#FFFFFF", color: "#000000" },
    { id: 5, title: "North East", backgroundColor: "#FFFFFF", color: "#000000" },
  ]);
  const styles = stylesFn();

  const onSubmit = (seconds) => {
    Keyboard.dismiss();
    const schedulingOptions = {
      content: {
        title: `The customers from the region you should check today is ${regionsList[Math.floor(Math.random() * regionsList.length)].title}`,
        body: "Open the app to see the customers in the region!",
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        color: "blue",
      },
      trigger: {
        seconds: seconds,
      },
    };
    Notifications.scheduleNotificationAsync(schedulingOptions);
  };

  const handleNotification = () => {
    console.warn("Your notification ran, but won't show up in the app!");
  };

  const askNotification = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (Constants.isDevice && status === "granted") {
      console.log("Notification permissions granted.");
    }
  };

  useEffect(() => {
    askNotification();

    const listener = Notifications.addNotificationReceivedListener(handleNotification);
    return () => listener.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
      To quickly identify the customers from the region who require urgent attention, kindly press the button.
      </Text>

      <Button
        text={"Schedule"}
        onPress={() => {
          onSubmit(3);
        }}
        disabled={false}
      />
    </View>
  );
};

export default CustomerToBeContacted;
