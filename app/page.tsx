'use client';
import 'font-awesome/css/font-awesome.min.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet-modal/dist/leaflet.modal.min.css';
import './skeleton-normalize.css';
import './skeleton.css';
import './index.css';
import Script from 'next/script';
import {useEffect, useState} from 'react';
import Map from './Map';

export default function Page() {
  return (
    <>
      <Script src="/leaflet.js" type="text/javascript" strategy="beforeInteractive" />
      <Script src="/leaflet.draw.js" type="text/javascript" strategy="beforeInteractive" />
      <Script src="/leaflet.polylineDecorator.js" type="text/javascript" strategy="beforeInteractive" />
      <Script src="/L.Modal.min.js" type="text/javascript" strategy="beforeInteractive" />
      <Script src="/leaflet.textpath.js" type="text/javascript" strategy="beforeInteractive" />
      <Map />
    </>
  );
}
