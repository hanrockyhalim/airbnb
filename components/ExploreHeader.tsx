import { View, Text, StyleSheet } from "react-native";
import React from "react";

const categories = [
    {
      name: 'Tiny homes',
      icon: 'home',
    },
    {
      name: 'Cabins',
      icon: 'house-siding',
    },
    {
      name: 'Trending',
      icon: 'local-fire-department',
    },
    {
      name: 'Play',
      icon: 'videogame-asset',
    },
    {
      name: 'City',
      icon: 'apartment',
    },
    {
      name: 'Beachfront',
      icon: 'beach-access',
    },
    {
      name: 'Countryside',
      icon: 'nature-people',
    },
  ];


const ExploreHeader = () => {
  return (
    <View>
      <Text>ExploreHeader</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    
})

export default ExploreHeader;
