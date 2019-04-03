/**
 * Filter data
 * @method filterItem
 * @param {String} username
 * @param {String} dateOfBirth
 * @param {String} country
 * @param {Object} item
 * @return {Boolean | String} "ok"
 */

export const filterItem = ({ username, dateOfBirth, country }, item) => {
  if (!username && !dateOfBirth && !country) return "ok";

  const isOk = {};

  if (username) {
    isOk.username = false;
    if (item.username.toLowerCase().indexOf(username.toLowerCase().trim()) !== -1) {
      isOk.username = "ok";
    }
  }

  if (dateOfBirth) {
    isOk.dateOfBirth = false;
    if (item.date === dateOfBirth) {
      isOk.dateOfBirth = "ok";
    }
  }

  if (country) {
    isOk.country = false;
    if (item.country.toLowerCase().indexOf(country.toLowerCase().trim()) !== -1) {
      isOk.country = "ok";
    }
  }

  for (let key in isOk) {
    if (!isOk[key]) {
      return false;
    }
  }

  return "ok";
};
