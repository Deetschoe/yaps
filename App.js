import React from 'react';
import { Image, Platform, View, SafeAreaView, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import CafeMarker from './components/CafeMarker';
import { SvgUri } from 'react-native-svg';


export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      fontFamily: "Snell Roundhand"
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });

  return (
    <View style={styles.container}>

      <SafeAreaView style={{position: "absolute", display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", zIndex: 2}}>

      <Image style={{width: 167, height: 35, marginTop: 8, marginLeft: 16}} source={require("./images/YapsCafe.png")}/>

      <View style={{
  width: 36, // Slightly larger than the image size to accommodate the shadow
  height: 36, // Slightly larger than the image size to accommodate the shadow
  padding: 2,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 1,
  shadowRadius: 16,
  backgroundColor: "#fff",
  elevation: 10, // for Android
  borderRadius: 18, // Adjust for rounded corners
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 16,
  position: "relative"
}}>
  <Image 
    style={{
      width: 52, 
      bottom: -24,
      position: "absolute",
      zIndex: 2,
      aspectRatio: 1.435,
      height: 36,
      borderWidth: 2, // Set the width of the border
      borderColor: '#fff', // Set the color of the border
      borderRadius: 4 // If you want the image also to be rounded
    }} 
    source={require("./images/laptopBack.png")}
  />
  <Image 
    style={{
      width: 32, 
      height: 32,
      borderWidth: 1, // Set the width of the border
      borderColor: '#fff', // Set the color of the border
      borderRadius: 16 // If you want the image also to be rounded
    }} 
    source={{uri: "https://github.com/Deetschoe.png"}}
  />
</View>

      </SafeAreaView>


      <MapView
        style={styles.map}
        showCompass={false}
        showsPointsOfInterest={false}
        region={{
          latitude: 42.36512617538924,
          longitude: -71.10278825019041,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}

      >
      <CafeMarker 
        coordinates={{
          latitude: 42.36512617538924,
          longitude: -71.10278825019041
        }}
      />
      </MapView>
    </View>
  );
}