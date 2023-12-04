export const isiData = (results) => {
    const dataProduk = [
      {id: "nama", path: "nama"},
      {id: "harga", path: "harga"},
      {id: "deskripsi", path: "deskripsi"},
      {id: "stok", path: "stok"},
    ];
  
    // console.log("isiData - Input:", results);
  
    dataProduk.forEach(({ id, path, index, property }) => {
      const inputElement = document.getElementById(id);
      // console.log(`Updating element with ID ${id} with data from path ${path}`);
      const value = getNestedValue(results, path, index, property);
      // console.log(`Setting value for ${id}:`, value);
      inputElement.value = value;
    });
  }
  
  const getNestedValue = (obj, path, index, property) => {
    // console.log("getNestedValue - Input:", obj, path, index, property);
    const value = path
      .split(".")
      .reduce((value, key) => (value && value[key] !== undefined ? value[key] : ""), obj);
  
    // console.log("getNestedValue - Intermediate Value:", value);
  
    if (
      Array.isArray(value) &&
      value.length > index &&
      value[index].hasOwnProperty(property)
    ) {
      return value[index][property];
    }
  
    return value;
  };
  
    