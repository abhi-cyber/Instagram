import { View, Text, TextInput } from "react-native";
import React from "react";
import Ionic from "react-native-vector-icons/Ionicons";

const SearchBox = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        width: "100%",
        position: "relative",
        paddingVertical: 10,
        alignItems: "center",
      }}
    >
      <Ionic
        name="search"
        style={{
          fontSize: 18,
          opicity: 0.7,
          position: "absolute",
          zIndex: 1,
          left: 25,
        }}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#909090"
        style={{
          width: "94%",
          backgroundColor: "#EBEBEB",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          fontSize: 15,
          padding: 4,
          paddingLeft: 40,
        }}
      ></TextInput>
    </View>
  );
};

export default SearchBox;
