/* eslint-disable no-unused-vars */
// Write your code here
const PlanetItem = props => {
  const {planetDetails} = props
  const {id, name, imageUrl, description} = planetDetails
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}
export default PlanetItem
