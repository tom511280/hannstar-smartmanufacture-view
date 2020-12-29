const plugin = {
    install(Vue) {
      const $vm = Vue;
  
      $vm.prototype.$validUtil = {
        isNotNull(object) {
          if(typeof object == 'undefined') return false;
          if(object == null)  return false;
          
          return true;
        },
        isNotEmpty(object) {
          if(!this.isNotNull(object)) return false;
          if(object == "") return false;
          if(object == null)  return false;
          // if(object == false)  return false;
          if(object.length == 0)  return false;
          if(object.replace(/\s/g,"") == "")  return false;
          if(!/[^\s]/.test(object))  return false;
          if(/^\s*$/.test(object)) return false;
  
          return true;
        },
        isEmail(object) {
          //eslint-disable-next-line
          let emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
          if(object.search(emailRule) == -1) return false;
          return true;
        },
      };
    },
  };
  
  export default plugin;
  