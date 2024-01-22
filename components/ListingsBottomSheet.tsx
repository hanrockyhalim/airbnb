import { View, Text } from "react-native";
import React, { useMemo, useRef } from "react";
import { Listing } from "@/interfaces/listing";
import BottomSheet from "@gorhom/bottom-sheet";
import Listings from "./Listings";
import Colors from "@/constants/Colors";

interface Props {
  listings: Listing[];
  category: string;
}

const ListingsBottomSheet = ({ listings, category }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["10%", "100%"], []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      handleIndicatorStyle={{ backgroundColor: Colors.grey }}
    >
      <View style={{ flex: 1 }}>
        <Listings listings={listings} category={category} />
      </View>
    </BottomSheet>
  );
};

export default ListingsBottomSheet;
