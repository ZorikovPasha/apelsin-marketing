import React, { ReactNode } from 'react'
import Slider, { Settings } from "react-slick"
import { SliderNextArrow, SliderPrevArrow } from '../TopSlider'

interface ISliderProps {
  settings: Settings,
  rootClass: string,
  children: ReactNode,
  hasArrows?: boolean
}

export const AppSlider: React.FC<ISliderProps> = ({ settings, rootClass="", hasArrows=true, children }) => {
  const [slider, setSlider] = React.useState<Slider>()

  const _ = hasArrows ? {
    ...settings,
    prevArrow: <SliderPrevArrow onClick={slider?.slickPrev} />,
    nextArrow: <SliderNextArrow onClick={slider?.slickNext} />,
  } : settings

  return (
    <Slider 
      className={rootClass}
      ref={(slider: Slider) => setSlider(slider)}
      {..._}
      >
        {children}
    </Slider>
  )
}
