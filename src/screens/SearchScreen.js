import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React, { useState } from "react";
import SearchBox from "../components/SearchBox";
import SearchContent from "../components/SearchContent";
import Ant from "react-native-vector-icons/AntDesign";
import { StatusBar } from "expo-status-bar";
import Ionic from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

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
      {image ? (
        <View
          style={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(52,52,52,0.8)",
          }}
        >
          <StatusBar backgroundColor="#525252" barStyle="dark-content" />
          <View
            style={{
              position: "absolute",
              top: windowHeight / 6,
              left: windowWidth / 18,
              backgroundColor: "white",
              width: 350,
              height: 465,
              borderRadius: 15,
              zIndex: 1,
              elevation: 50,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}
            >
              <Image
                source={image}
                style={{ width: 30, height: 30, borderRadius: 100 }}
              />
              <View style={{ padding: 8 }}>
                {/* Unable to put fontWeight here */}
                <Text style={{ fontSize: 12 }}>demo__name</Text>
              </View>
            </View>
            <Image source={image} style={{ width: "100%", height: "80%" }} />
            <View
              style={{
                justifyContent: "center",
                width: "100%",
                alignItems: "center",
                flexDirection: "row",
                padding: 8,
              }}
            >
              <Ionic name="ios-heart-outline" style={{ fontSize: 26 }} />
              <Ionic
                name="ios-person-circle-outline"
                style={{ fontSize: 26 }}
              />
              <Feather name="navigation" style={{ fontSize: 26 }} />
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
