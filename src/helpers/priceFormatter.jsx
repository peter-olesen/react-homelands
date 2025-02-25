export const formatPriceDecimal = (price) => {
  const priceToNumber = parseFloat(price);
  return new Intl.NumberFormat("da-DK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(priceToNumber);
};

export const formatPrice = (price) => {
  const priceToNumber = parseFloat(price);
  return new Intl.NumberFormat("da-DK", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(priceToNumber);
};
