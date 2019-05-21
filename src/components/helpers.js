const formatDistance = str => {
  return `${parseFloat(str).toFixed(2)} mi`;
};

const formatStoreName = str =>
  str
    .toLowerCase()
    .split(' ')
    .join('-');

export { formatDistance, formatStoreName };
