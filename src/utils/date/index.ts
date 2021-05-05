const convertIsoStringToDDMMYYYY = (IsoDate: string) => {
  if (!IsoDate) {
    throw new Error('wrong date');
  }
  const date = new Date(IsoDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dt = date.getDate();

  let finalDay;
  let finalMonth;
  if (dt < 10) {
    finalDay = `0${dt}`;
  } else {
    finalDay = dt;
  }
  if (month < 10) {
    finalMonth = `0${month}`;
  } else {
    finalMonth = month;
  }
  return `${year}-${finalMonth}-${finalDay}`;
};
export default convertIsoStringToDDMMYYYY;
