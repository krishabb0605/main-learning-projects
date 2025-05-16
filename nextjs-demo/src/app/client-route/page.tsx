"use client"

// you can't use external packages component in server components
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '../components/theme-provider';

export default function ClientRoutePage() {
  const theme = useTheme();
  const settings = {
    dots: true,
  };

  return (
    <div className="image-slider-container">
      <p style={{ color: theme.colors.primary }}>Hello here is client router page...</p>
      <Slider {...settings}>
        <div>
          <img src="https://picsum.photos/200" />
        </div>
        <div>
          <img src="https://picsum.photos/200?grayscale" />
        </div>
        <div>
          <img src="https://picsum.photos/id/237/200" />
        </div>
        <div>
          <img src="https://picsum.photos/seed/picsum/200" />
        </div>
      </Slider>
    </div>
  );
}
