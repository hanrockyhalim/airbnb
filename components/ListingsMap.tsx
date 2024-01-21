import { View, Text, StyleSheet, PermissionsAndroid } from "react-native";
import { useEffect } from "react";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { defaultStyles } from "@/constants/Styles";
import { Listing } from "@/interfaces/listing";
import { useRouter } from "expo-router";
import MapView from "react-native-map-clustering";

interface Props {
  listings: any;
}

const INITIAL_REGION = {
  latitude: 37.78,
  longitude: -122.48,
  latitudeDelta: 9,
  longitudeDelta: 9,
};

const ListingsMap = ({ listings }: Props) => {
  const router = useRouter();

  const filteredItems = listings.slice(0, 50);
  const imageItems = filteredItems.filter(
    (item: any) => item.xl_picture_url !== null
  );

  const onMarkerSelected = (item: Listing) => {
    router.push(`/listing/${item.id}`);
  };
  return (
    <View style={defaultStyles.container}>
      <MapView
        animationEnabled={false}
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        showsUserLocation
        showsMyLocationButton
        clusterColor="#fff"
        clusterTextColor="#000"
        clusterFontFamily="mon-sb"
        onMapReady={() => {
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
          );
        }}
      >
        {imageItems.map((item: Listing) => (
          <Marker
            onPress={() => onMarkerSelected(item)}
            key={item.id}
            coordinate={{
              latitude: +item.latitude,
              longitude: +item.longitude,
            }}
          >
            <View style={styles.marker}>
              <Text style={styles.markerText}>$ {item.price}</Text>
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marker: {
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    elevation: 5,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
  markerText: {
    fontSize: 14,
    fontFamily: "mon-sb",
  },
  locateBtn: {
    position: "absolute",
    top: 70,
    right: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
});

export default ListingsMap;
