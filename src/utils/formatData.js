
function formatData(value) {
  // if boolean
  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No';
  }
    //if object
   if (typeof value === 'object') {
    return `Min: ${value.min}, Max: ${value.max}`;
  }

  //if null
  if (!value) {
    return 'No data';
  }
  return value;
    
}


export default formatData;