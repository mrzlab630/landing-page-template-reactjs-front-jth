import { getGlobal, useGlobal } from 'reactn';

const globals = {
  getGlobalValueByMatch: prefix => {
    let globals = {};
    // Map global variables
    for (var key in getGlobal()) {
      key.match(`${prefix}_`) ? ([globals[key]] = useGlobal(key)) : null;
    }
    return globals;
  },

  toggleObjectKeyPrefix: (obj, prefix) => {
    let t = {};
    for (var key in obj) {
      if (key.match(`${prefix}_`)) {
        const newkey = key.split(`${prefix}_`)[1];
        t[newkey] = obj[key];
      } else {
        const newkey = `${prefix}_${key}`;
        t[newkey] = obj[key];
      }
    }
    return t;
  },
};

export default globals;
