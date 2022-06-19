import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import SearchBox from "../components/SearchBox";
import SearchContent from "../components/SearchContent";
import Ant from "react-native-vector-icons/AntDesign";
import { StatusBar } from "expo-status-bar";

const Search = () => {
  const [image, setImage] = useState(null);
  const getData = (data) => {
    setImage(data);
  };
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox />
        <SearchContent data={getData} />
        <TouchableOpacity
          style={{ margin: 25, justifyContent: "center", alignItems: "center" }}
        >
          <Ant name="pluscircleo" style={{ fontSize: 40, opicity: 0.5 }} />
        </TouchableOpacity>
      </ScrollView>
      
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
