export const validateDate = (value: string) => {
  const date = new Date();
  const parts = value.split('-');
  if (!parts) return 'Field is required. Please, enter correct date.';
  const day = parseInt(parts[2], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[0], 10);

  if (
    value === '' ||
    year < 1000 ||
    year > date.getFullYear() ||
    month === 0 ||
    month > 12 ||
    month > date.getMonth() + 1 ||
    day > date.getDate()
  )
    return false;
};
