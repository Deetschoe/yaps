import React, { useRef } from 'react';
import { Animated, Image, TouchableWithoutFeedback } from 'react-native';
import { Marker } from 'react-native-maps';

const CafeMarker = ({ coordinates }) => {
  // Animated value for scaling
  const scale = useRef(new Animated.Value(1)).current;

  // Function to handle press action
  const handlePress = () => {
    // Scale down animation
    Animated.timing(scale, {
      toValue: 0.8,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      // Scale back up animation
      Animated.timing(scale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start(() => {
        // Action to perform after animation
        console.log("Cafe Marker pressed");
      });
    });
  };

  return (
    <Marker
      coordinate={coordinates}
      title={"Caffe Nero"}
      description={"Life is good"}
    >
      <TouchableWithoutFeedback onPress={handlePress}>
        <Animated.View
          style={{ transform: [{ scale }] }}
        >
          <Image
            source={require("../images/Coffee.png")}
            style={{ width: 72, height: 72 }}
          />
        </Animated.View>
      </TouchableWithoutFeedback>
    </Marker>
  );
};

export default CafeMarker;
