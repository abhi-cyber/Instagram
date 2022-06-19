import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

const Post = () => {
  const postInfo = [
    {
      postTitle: "Dwayne Jhonson",
      postPersonImage:
        "https://i.guim.co.uk/img/media/117c94b98725b126a0814024433f2d5513ce0c6a/0_550_3648_2188/master/3648.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c610bf061b74dd399116d235f887d0de",
      postImage:
        "https://wegotthiscovered.com/wp-content/uploads/2021/08/How-Much-Weight-Can-Dwayne-The-Rock-Johnson-Lift.jpg",
      likes: 9878,
      isLiked: false,
    },
    {
      postTitle: "Dwayne Jhonson",
      postPersonImage:
        "https://i.guim.co.uk/img/media/117c94b98725b126a0814024433f2d5513ce0c6a/0_550_3648_2188/master/3648.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c610bf061b74dd399116d235f887d0de",
      postImage:
        "https://wegotthiscovered.com/wp-content/uploads/2021/08/How-Much-Weight-Can-Dwayne-The-Rock-Johnson-Lift.jpg",
      likes: 9878,
      isLiked: false,
    },
    {
      postTitle: "Dwayne Jhonson",
      postPersonImage:
        "https://i.guim.co.uk/img/media/117c94b98725b126a0814024433f2d5513ce0c6a/0_550_3648_2188/master/3648.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c610bf061b74dd399116d235f887d0de",
      postImage:
        "https://wegotthiscovered.com/wp-content/uploads/2021/08/How-Much-Weight-Can-Dwayne-The-Rock-Johnson-Lift.jpg",
      likes: 9878,
      isLiked: false,
    },
    {
      postTitle: "Dwayne Jhonson",
      postPersonImage:
        "https://i.guim.co.uk/img/media/117c94b98725b126a0814024433f2d5513ce0c6a/0_550_3648_2188/master/3648.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c610bf061b74dd399116d235f887d0de",
      postImage:
        "https://wegotthiscovered.com/wp-content/uploads/2021/08/How-Much-Weight-Can-Dwayne-The-Rock-Johnson-Lift.jpg",
      likes: 9878,
      isLiked: false,
    },
  ];

  return (
    <View>
      {postInfo.map((data, index) => {
        const [like, setLike] = useState(data.isLiked);
        return (
          <View
            style={{
              paddingBottom: 10,
              borderBottomColor: "grey",
              borderBottomWidth: 0.1,
            }}
          >
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={{ uri: data.postPersonImage }}
                  style={{ width: 40, height: 40, borderRadius: 100 }}
                />
                <View style={{ paddingLeft: 5 }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    {data.postTitle}
                  </Text>
                </View>
              </View>
              <Feather name="more-vertical" style={{ fontSize: 20 }} />
            </View>
            <View
              style={{
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: data.postImage }}
                style={{ width: "100%", height: 400 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 12,
                paddingVertical: 15,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => setLike(!like)}>
                  <AntDesign
                    name={like ? "heart" : "hearto"}
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: like ? "red" : "black",
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionic
                    name="ios-chatbubble-outline"
                    style={{ fontSize: 20, paddingRight: 10 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather name="navigation" style={{ fontSize: 20 }} />
                </TouchableOpacity>
              </View>
              <Feather name="bookmark" style={{ fontSize: 20 }} />
            </View>
            <View style={{ paddingHorizontal: 15 }}>
              <Text>
                Liked by {like ? "you and" : ""}{" "}
                {like ? data.likes + 1 : data.likes} others
              </Text>
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 14,
                  paddingVertical: 2,
                }}
              >
                Listen to my new workout playlist on Spotify.
              </Text>
              <Text
                style={{
                  opicity: 0.4,
                  paddingVertical: 2,
                }}
              >
                View all comments
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={{ uri: data.postPersonImage }}
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 100,
                      backgroundColor: "orange",
                    }}
                  />
                  <TextInput
                    placeholder="Add a comment"
                    style={{ opicity: 0.5 }}
                  />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Entypo
                    name="emoji-happy"
                    style={{
                      fontSize: 15,
                      color: "lightgreen",
                      marginRight: 10,
                    }}
                  />
                  <Entypo
                    name="emoji-neutral"
                    style={{ fontSize: 15, color: "pink", marginRight: 10 }}
                  />
                  <Entypo
                    name="emoji-sad"
                    style={{ fontSize: 15, color: "red" }}
                  />
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Post;
