import { Button, Image, Text, View } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import { SafeAreaView } from "react-navigation";

const Home = ({ navigation }) => {
  const [posts, setPosts] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      img: "assets/img1.JPG",
      id: "1",
    },
    {
      title: "Zelda, Breath of Fresh Air",
      img: "assets/img1.JPG",
      id: "3",
    },
    {
      title: "Zelda, Breath of Fresh Air",
      img: "assets/img1.JPG",
      id: "3",
    },
  ]);
  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View>
            <Image source={require("./img1.JPG")} />
            <Text>123</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
