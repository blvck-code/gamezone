import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

const ReviewDetails = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={globalStyles.container}>
      <Text>{navigation.getParam("title")}</Text>
      <Text>{navigation.getParam("body")}</Text>
      <Text>{navigation.getParam("rating")}</Text>
      <Button title="Back Home" onPress={goBack} />
    </View>
  );
};

export default ReviewDetails;
