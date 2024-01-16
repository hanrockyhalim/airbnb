interface Geometry {
  type: string;
  coordinates: number[][][];
}

export interface ListingGeo {
  type: string;
  geometry: Geometry;
  properties: {
    neighbourhood: string;
    neighbourhood_group: null | string;
  };
}

// interface FeatureCollection {
//   type: string;
//   features: Feature[];
// }
