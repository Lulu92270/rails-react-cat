export const twoRandomItemsFromArray = (array) => {
  let firstItem;
  let secondItem;
  while(firstItem === secondItem) { // Loop that handles the same random index
    firstItem = array[Math.floor(Math.random() * array.length)]
    secondItem = array[Math.floor(Math.random() * array.length)]
  }
  return [firstItem, secondItem]
}
