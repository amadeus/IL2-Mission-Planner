'use client';
import {useEffect} from 'react';
import initialize from '../il2-planner-src/index';

export default function Map() {
  useEffect(() => {
    initialize();
  }, []);
  return <div id="map" />;
}
