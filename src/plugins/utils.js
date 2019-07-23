export default {
  install: (Vue, options = {}) => {
    //  Recursive deep copy with better performance that JSON.parse(JSON.stringify()) method
    Vue.copy = o => {
      var newO
      var i

      if (typeof o !== 'object') {
        return o
      }

      if (!o) {
        return o
      }

      if ('[object Array]' === Object.prototype.toString.apply(o)) {
        newO = []

        for (i = 0; i < o.length; i += 1) {
          newO[i] = Vue.copy(o[i])
        }

        return newO
      }

      newO = {}

      for (i in o) {
        if (o.hasOwnProperty(i)) {
          newO[i] = Vue.copy(o[i])
        }
      }

      return newO
    }

    Vue.isEmpty = obj => {
      return Object.keys(obj).length === 0 && obj.constructor === Object ? true : false
    }

    Vue.getID = () => {
      return 'xxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
      })
    }

    Vue.getUUID = () => {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
      })
    }

    Vue.buildURL = (baseURL, options) => {
      let url = baseURL + '?'
      for (const key in options) {
        if (options.hasOwnProperty(key)) {
          if (options[key] !== null && options[key] !== undefined) {
            url += `&${key}=${options[key]}`
          }
        }
      }
      return url
    }

    Vue.isEmail = val => {
      var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(val)
    }

    Vue.isURL = val => {
      var regex = /^(ftp|http|https):\/\/[^ "]+$/
      return regex.test(val)
    }
  }
}
