export default {
  install: (Vue, options = {}) => {
    class Specifications {
      constructor(country, bbanFormat, ibanFormat) {
        return { country: country, bbanFormat: bbanFormat, ibanFormat: ibanFormat, separatorsIndex: [] }
      }
    }

    Vue.getIbanSpecifications = value => {
      const SEPARATOR = ' '

      function setSeparatorsIndex(specifications) {
        if (specifications && specifications.ibanFormat) {
          specifications.separatorsIndex = []
          for (var i = 0; i < specifications.ibanFormat.length; i++) {
            if (specifications.ibanFormat[i] === SEPARATOR) {
              specifications.separatorsIndex.push(i)
            }
          }
        }
        return specifications
      }

      function getCountryCode(value) {
        if (value && value.length > 1) {
          return value.slice(0, 2).toUpperCase()
        } else {
          return null
        }
      }

      var countryCode = getCountryCode(value)
      var specifications = null

      if (countryCode) {
        switch (countryCode) {
          case 'AD':
            specifications = new Specifications('Andorra', '8n,12c', 'ADkk bbbb ssss cccc cccc cccc')
            break
          case 'AE':
            specifications = new Specifications('United Arab Emirates', '3n,16n', 'AEkk bbbc cccc cccc cccc ccc')
            break
          case 'AL':
            specifications = new Specifications('Albania', '8n,16c', 'ALkk bbbs sssx cccc cccc cccc cccc')
            break
          case 'AT':
            specifications = new Specifications('Austria', '16n', 'ATkk bbbb bccc cccc cccc')
            break
          case 'AZ':
            specifications = new Specifications('Azerbaijan', '4c,20n', 'AZkk bbbb cccc cccc cccc cccc cccc')
            break
          case 'BA':
            specifications = new Specifications('Bosnia and Herzegovina', '16n', 'BAkk bbbs sscc cccc ccxx')
            break
          case 'BE':
            specifications = new Specifications('Belgium', '12n', 'BEkk bbbc cccc ccxx')
            break
          case 'BG':
            specifications = new Specifications('Bulgaria', '4a,6n,8c', 'BGkk bbbb ssss ttcc cccc cc')
            break
          case 'BH':
            specifications = new Specifications('Bahrain', '4a,14c', 'BHkk bbbb cccc cccc cccc cc')
            break
          case 'BR':
            specifications = new Specifications('Brazil', '23n,1a,1c', 'BRkk bbbb bbbb ssss sccc cccc ccct n')
            break
          case 'BY':
            specifications = new Specifications('Belarus', '4c,20n', 'BYkk bbbb aaaa cccc cccc cccc cccc')
            break
          case 'CH':
            specifications = new Specifications('Switzerland', '5n,12c', 'ADkk bbbb ssss cccc cccc cccc')
            break
          case 'CR':
            specifications = new Specifications('Costa Rica', '18n', 'CRkk 0bb cccc cccc cccc cc')
            break
          case 'CY':
            specifications = new Specifications('Cyprus', '8n,16c', 'CYkk bbbs ssss cccc cccc cccc cccc')
            break
          case 'CZ':
            specifications = new Specifications('Czech Republic', '20n', 'CZkk bbbb ssss sscc cccc cccc')
            break
          case 'DE':
            specifications = new Specifications('Germany', '18n', 'DEkk bbbb bbbb cccc cccc cc')
            break
          case 'DK':
            specifications = new Specifications('Denmark', '14n', 'DKkk bbbb cccc cccc cc')
            break
          case 'DO':
            specifications = new Specifications('Dominican Republic', '4a,20n', 'DOkk bbbb cccc cccc cccc cccc cccc')
            break
          case 'ES':
            specifications = new Specifications('Spain', '20n', 'ESkk bbbb ssss xxcc cccc cccc')
            break
          case 'FI':
            specifications = new Specifications('Finland', '14n', 'FIkk bbbb bb cc cccc cx')
            break
          case 'FR':
            specifications = new Specifications('France', '10n,11c,2n', 'FRkk bbbb bsss sscc cccc cccc cxx')
            break
          case 'GB':
            specifications = new Specifications('United Kingdom', '4a,14n', 'GBkk bbbb ssss sscc cccc cc')
            break
          case 'GR':
            specifications = new Specifications('Greece', '7n,16c', 'GRkk bbbs sssc cccc cccc cccc ccc')
            break
          case 'GT':
            specifications = new Specifications('Guatemala', '4c,20c', 'GTkk bbbb mmtt cccc cccc cccc cccc')
            break
          case 'HR':
            specifications = new Specifications('Croatia', '17n', 'HRkk bbbb bbbc cccc cccc c')
            break
          case 'HU':
            specifications = new Specifications('Hungary', '24n', 'HUkk bbbs sssx cccc cccc cccc cccx')
            break
          case 'IE':
            specifications = new Specifications('Ireland', '4c,14n', 'IEkk aaaa bbbb bbcc cccc cc')
            break
          case 'IL':
            specifications = new Specifications('Israel', '19n', 'ILkk bbbn nncc cccc cccc ccc')
            break
          case 'IS':
            specifications = new Specifications('Iceland', '22n', 'ISkk bbbb sscc cccc iiii iiii ii')
            break
          case 'IT':
            specifications = new Specifications('Italy', '1a,10n,12c', 'ITkk xbbb bbss sssc cccc cccc ccc')
            break
          case 'JO':
            specifications = new Specifications('Jordan', '4a,22n', 'JOkk bbbb ssss cccc cccc cccc cccc cc')
            break
          case 'KW':
            specifications = new Specifications('Kuwait', '4a,22c', 'KWkk bbbb cccc cccc cccc cccc cccc cc')
            break
          case 'KZ':
            specifications = new Specifications('Kazakhstan', '3n,13c', 'KZkk bbbc cccc cccc cccc')
            break
          case 'LB':
            specifications = new Specifications('Lebanon', '4n,20c', 'LBkk bbbb cccc cccc cccc cccc cccc')
            break
          case 'LI':
            specifications = new Specifications('Liechtenstein', '5n,12c', 'LIkk bbbb bccc cccc cccc c')
            break
          case 'LT':
            specifications = new Specifications('Lithuania', '16n', 'LTkk bbbb bccc cccc cccc')
            break
          case 'LU':
            specifications = new Specifications('Luxembourg', '3n,13c', 'LUkk bbbc cccc cccc cccc')
            break
          case 'LV':
            specifications = new Specifications('Latvia', '4a,13c', 'LVkk bbbb cccc cccc cccc c')
            break
          case 'MC':
            specifications = new Specifications('Monaco', '10n,11c,2n', 'MCkk bbbb bsss sscc cccc cccc cxx')
            break
          case 'MD':
            specifications = new Specifications('Moldova', '20c', 'MDkk bbcc cccc cccc cccc cccc')
            break
          case 'ME':
            specifications = new Specifications('Montenegro', '18n', 'MEkk bbbc cccc cccc cccc xx')
            break
          case 'MK':
            specifications = new Specifications('Macedonia', '3n,10c,2n', 'MKkk bbbc cccc cccc cxx')
            break
          case 'MR':
            specifications = new Specifications('Mauritania', '23n', 'MRkk bbbb bsss sscc cccc cccc cxx')
            break
          case 'MT':
            specifications = new Specifications('Malta', '4a,5n,18c', 'MTkk bbbb ssss sccc cccc cccc cccc ccc')
            break
          case 'MU':
            specifications = new Specifications('Mauritius', '4a,19n,3a', 'MUkk bbbb bbss cccc cccc cccc 000m mm')
            break
          case 'NL':
            specifications = new Specifications('Netherlands', '4a,10n', 'NLkk bbbb cccc cccc cc')
            break
          case 'NO':
            specifications = new Specifications('Norway', '4c,16n', 'NOkk bbbb cccc ccxx')
            break
          case 'PK':
            specifications = new Specifications('Pakistan', '24n', 'PKkk bbbb cccc cccc cccc cccc')
            break
          case 'PL':
            specifications = new Specifications('Poland', '4c,21n', 'PLkk bbbs sssx cccc cccc cccc cccc')
            break
          case 'PS':
            specifications = new Specifications(
              'Palestinian territories',
              '21n',
              'PSkk bbbb xxxx xxxx xccc cccc cccc c'
            )
            break
          case 'PT':
            specifications = new Specifications('Portugal', '21n', 'PTkk bbbb ssss cccc cccc cccx x')
            break
          case 'QA':
            specifications = new Specifications('Qatar', '4a,21c', 'QAkk bbbb cccc cccc cccc cccc cccc c')
            break
          case 'RO':
            specifications = new Specifications('Romania', '4a,16c', 'ROkk bbbb cccc cccc cccc cccc')
            break
          case 'RS':
            specifications = new Specifications('Serbia', '18n', 'RSkk bbbc cccc cccc cccc xx')
            break
          case 'SA':
            specifications = new Specifications('Saudi Arabia', '2n,18c', 'SAkk bbcc cccc cccc cccc cccc')
            break
          case 'SE':
            specifications = new Specifications('Sweden', '20n', 'SEkk bbbc cccc cccc cccc cccc')
            break
          case 'SI':
            specifications = new Specifications('Slovenia', '15n', 'SIkk bbss sccc cccc cxx')
            break
          case 'SK':
            specifications = new Specifications('Slovakia', '20n', 'SKkk bbbb ssss sscc cccc cccc')
            break
          case 'SM':
            specifications = new Specifications('San Marino', '1a,10n,12c', 'SMkk xbbb bbss sssc cccc cccc ccc')
            break
          case 'TL':
            specifications = new Specifications('East Timor', '1a,10n,12c', 'TLkk bbbc cccc cccc cccc cxx')
            break
          case 'TN':
            specifications = new Specifications('Tunisia', '20n', 'TNkk bbss sccc cccc cccc cccc')
            break
          case 'TR':
            specifications = new Specifications('Turkey', '5n,17c', 'TRkk bbbb bxcc cccc cccc cccc cc')
            break
          case 'VG':
            specifications = new Specifications('Virgin Islands, British', '4c,16n', 'VGkk bbbb cccc cccc cccc cccc')
            break
          case 'XK':
            specifications = new Specifications('Kosovo', '4n,10n,2n', 'XKkk bbbb cccc cccc cccc')
            break
          // Experimental IBAN
          case 'KM':
            specifications = new Specifications('Comoros', '27n', 'KMkk nnnn nnnn nnnn nnnn nnnn nnn')
            break
          case 'TD':
            specifications = new Specifications('Chad', '27n', 'TDkk nnnn nnnn nnnn nnnn nnnn nnn')
            break
          case 'CG':
            specifications = new Specifications('Congo', '27n', 'CGkk nnnn nnnn nnnn nnnn nnnn nnn')
            break
          case 'EG':
            specifications = new Specifications('Egypt', '27n', 'EGkk nnnn nnnn nnnn nnnn nnnn nnn')
            break
          case 'GA':
            specifications = new Specifications('Gabon', '27n', 'GAkk nnnn nnnn nnnn nnnn nnnn nnn')
            break
          case 'HN':
            specifications = new Specifications('Honduras', '28n', 'HNkk aaaa nnnn nnnn nnnn nnnn nnnn')
            break
          case 'MA':
            specifications = new Specifications('Morocco', '28n', 'MAkk nnnn nnnn nnnn nnnn nnnn nnnn')
            break
          case 'NI':
            specifications = new Specifications('Nicaragua', '32n', 'NIkk aaaa nnnn nnnn nnnn nnnn nnnn nnnn')
            break
          case 'NE':
            specifications = new Specifications('Niger', '28n', 'NEkk aann nnnn nnnn nnnn nnnn nnnn')
            break
          case 'TG':
            specifications = new Specifications('Togo', '28n', 'TGkk aann nnnn nnnn nnnn nnnn nnnn')
            break
        }

        specifications = setSeparatorsIndex(specifications)

        return specifications
      }
    }

    Vue.isIbanValid = value => {
      const ALPHANUM = /[^a-zA-Z0-9]/g
      const ALPHA = /[^a-zA-Z]/g
      const NUMERIC = /[^0-9]/g
      const IBAN_START = '[A-Z]{2}[0-9]{2}'

      function getRegexFromBbanFormat(bbanFormat) {
        var regex = IBAN_START

        let array = bbanFormat.split(',')

        array.map(item => {
          let time = item.replace(NUMERIC, '')
          let char = item.replace(ALPHA, '')
          let rule = null

          switch (char) {
            case 'a':
              rule = 'A-Z'
              break
            case 'n':
              rule = '0-9'
              break
            case 'c':
              rule = 'A-Z0-9'
              break
          }

          regex += `[${rule}]{${time}}`
        })

        return new RegExp(regex)
      }

      function rearrange(iban) {
        iban = cleanIban(iban)
        return iban.substr(4) + iban.substr(0, 4)
      }

      function convertToInteger(iban) {
        const A = 'A'.charCodeAt(0)
        const Z = 'Z'.charCodeAt(0)

        let value = iban
          .split('')
          .map(n => {
            var code = n.charCodeAt(0)
            if (code >= A && code <= Z) {
              return code - A + 10
            } else {
              return n
            }
          })
          .join('')

        return value
      }

      function cleanIban(iban) {
        if (iban) {
          return iban.replace(ALPHANUM, '').toUpperCase()
        }
      }

      function computeRemainder(value) {
        let remainder = value
        let block = null

        while (remainder.length > 2) {
          block = remainder.slice(0, 9)
          remainder = (parseInt(block, 10) % 97) + remainder.slice(block.length)
        }

        return parseInt(remainder, 10) % 97
      }

      value = cleanIban(value)

      var specifications = Vue.getIbanSpecifications(value)

      if (specifications && new RegExp(getRegexFromBbanFormat(specifications.bbanFormat)).test(value)) {
        value = rearrange(value)
        value = convertToInteger(value)
        let mod97 = computeRemainder(value)

        if (mod97 === 1) {
          return true
        }
      }
      return false
    }
  }
}
