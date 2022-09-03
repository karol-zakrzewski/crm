const isZipcode = (zipcode) => {
  if (typeof zipcode !== "string") {
    throw Error("Type of zipcode is incorrect");
  }
  const zipcodeRegexp = /^[0-9]{2}-[0-9]{3}/;
  return zipcodeRegexp.test(parseInt(zipcode)) ? parseInt(zipcode) : false;
};
