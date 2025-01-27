const USD_TO_INR = 83; // Current approximate exchange rate

export const formatCurrency = (amount: number, currency: 'USD' | 'INR' = 'INR') => {
  if (currency === 'INR') {
    const inrAmount = Math.round(amount * USD_TO_INR);
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(inrAmount);
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};