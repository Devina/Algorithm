/* Randomising Algorithm - Harry Potter Concept, this will return a random value from the array, which are set to Hogwarts houses. */

function sortingHat() {
  const house = ['Gryffindor', 'Hufflepuff', 'Slytherin', 'Ravenclaw'];
  return house[Math.floor(Math.random()*house.length)];
}
