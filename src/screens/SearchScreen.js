import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import SearchBox from "../components/SearchBox";
import SearchContent from "../components/SearchContent";

const Search = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <ScrollView>
        <SearchBox />
        <SearchContent />
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
