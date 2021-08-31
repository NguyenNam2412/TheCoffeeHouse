export const getImage = (path) => {
  const imgName = path.replace('uploads/', '') 
  return `https://api.thecoffeehouse.com//${imgName}`
}