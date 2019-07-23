export default {
  install: (Vue, options = {}) => {
    // Date
    Vue.dateToUniface = val => {
      if (val) {
        return moment(val, 'DD/MM/YYYY').format('YYYYMMDDHHmmssSS')
      }
      return null
    }
    Vue.unifaceToDate = val => {
      if (val) {
        return moment(val, 'YYYYMMDDHHmmssSS').format('DD/MM/YYYY')
      }
      return null
    }

    // Currency
    Vue.currencyToUniface = val => {
      if (val) {
        val = val + ''
        return val.replace(',', '.').replace(/\s/g, '')
      }
      return null
    }

    // IBAN
    Vue.ibanToUniface = val => {
      if (val) {
        val = val + ''
        return val.replace(/\s/g, '')
      }
      return null
    }
  }
}
