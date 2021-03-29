const Mixin = {
  methods: {
    _addCommaToStr(number) {
      if (number === 0) {
        return '0';
      }
      const result = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      // const result = '';
      const len = result.length;

      if (result[len - 1] === ',') {
        return result.substring(0, len - 2);
      } else {
        return result;
      }
    },
    _getCurrentDate(_arr) {
      if (_arr === undefined || _arr.length === 0) {
        return '-';
      }
      const _year = _arr[0].year;
      const _month = _arr[0].month;
      const _date = _arr[0].date;

      if (new Date().getFullYear() === _year) {
        return `${_month}/${_date}`;
      } else {
        return `${_year.toString().substring(2, 4)}/${_month}/${_date}`;
      }
    },
  }
};

export default Mixin;
