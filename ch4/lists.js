let arr = [1,2,3];

function arrayToList(arr) {
  let list = {};
  console.log(arr);
  if(arr.length === 0) {
    return null;
  } else {
    list.value = arr[0];
    list.rest = arrayToList(arr.slice(1));
    return list;
  }
}

console.log(arrayToList(arr));
