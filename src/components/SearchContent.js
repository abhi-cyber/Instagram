import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const SearchContent = (props) => {
  const searchData = [
    {
      id: 0,
      images: [
        {
          uri: "https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?cs=srgb&dl=pexels-oladimeji-ajegbile-3314294.jpg&fm=jpg",
        },
        {
          uri: "https://i.chzbgr.com/thumb800/16763397/h0B023285/funny-memes-programming-memes-developers-coding-memes-coder-coding-nerdy-memes-memes-java-memes",
        },
        {
          uri: "https://pbs.twimg.com/media/FVgm376VUAI6WDL?format=jpg&name=900x900",
        },
        {
          uri: "https://pbs.twimg.com/media/FVh29yVUsAArP90?format=jpg&name=medium",
        },
        {
          uri: "https://pbs.twimg.com/media/FUVMv85WIAIT8OS?format=jpg&name=900x900",
        },
        {
          uri: "https://upload.wikimedia.org/wikipedia/commons/0/03/Kevin_Systrom_2018_%2840980041741%29_%28cropped%29.jpg",
        },
        {
          uri: "https://youthincmag.com/wp-content/uploads/2019/03/youtuber-Bhuvan-Bam.jpg",
        },
        {
          uri: "https://xploringindia.in/wp-content/uploads/2020/03/10_CarryMinati-1024x536.jpg",
        },
        {
          uri: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/06/10/Pictures/_a9a0c4ca-aaf3-11ea-bc4b-ba77fe6f99d0.jpg",
        },
        {
          uri: "https://memezila.com/wp-content/Depressed-people-on-Instagram-vs-Depressed-people-on-facebook-meme-4124.png",
        },
        {
          uri: "https://ahseeit.com/hindi/king-include/uploads/2021/04/thumb_172138021_1208997059519405_1740696783860240393_n-1635325591.jpg",
        },
        {
          uri: "https://ahseeit.com/hindi/king-include/uploads/2020/11/thumb_104525819_2945285719027813_6558898335376579419_n-5053175775.jpg",
        },
        { uri: "https://miro.medium.com/max/1400/0*siuHvzeXaxFOn9j3.png" },
        {
          uri: "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
        },
        {
          uri: "https://www.befunky.com/images/prismic/2aa87dc8-3720-4385-9cc2-b8f9be5aac1d_landing-photo-to-art-img-4-before.png?auto=avif,webp&format=jpg&width=863",
        },
        {
          uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        },
        {
          uri: "https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk=",
        },
        {
          uri: "https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg",
        },
        {
          uri: "https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif",
        },
        {
          uri: "https://p4.wallpaperbetter.com/wallpaper/745/67/618/jujutsu-kaisen-anime-boys-anime-hd-wallpaper-preview.jpg",
        },
        {
          uri: "https://images.hdqwalls.com/wallpapers/thumb/yuji-itadori-anime-boy-5k-ph.jpg",
        },
        {
          uri: "https://i.pinimg.com/originals/ca/11/cf/ca11cf56dff156f0a902fbe351484555.jpg",
        },
        { uri: "https://i.insider.com/5e820b04671de06758588fb8?width=700" },
        { uri: "https://pbs.twimg.com/media/EgZLzpAWkAIxNlV.jpg:large" },
      ],
    },
  ];
  return (
    <View>
      {searchData.map((data, index) => {
        return (
          <>
            {data.id === 0 ? (
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                {data.images.map((imageData, imgIndex) => {
                  return (
                    <TouchableOpacity
                      style={{ paddingBottom: 2 }}
                      onPressIn={() => props.data(imageData)}
                      onPressOut={() => props.data(null)}
                    >
                      <Image
                        source={imageData}
                        style={{ width: 177, height: 150 }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
          </>
        );
      })}
    </View>
  );
};

export default SearchContent;
