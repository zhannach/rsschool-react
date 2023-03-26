const validateInput = (name: string, value: string): string => {
  switch (name) {
    case 'author':
      if (
        !value ||
        value === '' ||
        value.length < 3 ||
        value.length > 15 ||
        !value.match(/^[a-zA-Z]+$/)
      ) {
        return 'Field is required. Please, enter at least 3 character';
      }
      break;
    case 'publishDate':
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
      ) {
        return 'Field is required. Please, make a choice.';
      }
      break;
    case 'language':
    case 'img':
      if (value === '') {
        return 'Field is required. Please, select option.';
      }
      break;
    case 'cover':
    case 'subscribe':
      if (value === '') {
        return 'Field is required.';
      }
      break;
  }
  return '';
};

export default validateInput;
