'use client';

import { useEffect, useRef } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

export default function OpenLayersMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([121.065, 14.657]),
        zoom: 13,
      }),
    });

    return () => map.setTarget(undefined);
  }, []);

  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden" ref={mapRef} />
  );
}
