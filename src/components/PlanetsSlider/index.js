/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
// Write your code here

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,

    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div>
      <h1>PLANETS</h1>
      <Slider {...settings}>
        <div data-testid="planets">
          {planetsList.map(each => (
            <PlanetItem key={each.id} planetDetails={each} />
          ))}
        </div>
      </Slider>
    </div>
  )
}
export default PlanetsSlider
