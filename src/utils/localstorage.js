/**
 * @typedef getItem
 *
 * @param {String} key Key of items collection is local storage
 * @returns {*} Item from local storage
 */
export const getItem = key => JSON.parse(localStorage.getItem(key) || 'null');

/**
 * @typedef getItems
 *
 * @param  {String[]} keys Keys of items collections in local storage
 * @returns {any[]} Array of items from local storage
 */
export const getItems = (...keys) => (keys.length ? keys.map(key => getItem(key)) : []);

/**
 * @typedef setItem
 *
 * @param {String} key Key of items collection is local storage
 * @param {*} item Item to add to local storage
 */
export const setItem = (key, item) => {
  if (item) {
    localStorage.setItem(key, JSON.stringify(item));
  }
};

/**
 * @typedef addItem
 *
 * @description Adds item to existing collection in local storage,
 * if the collection does not exist already,
 * creates a new one with [{item}] as initial value
 *
 * @param {String} key Key of items collection is local storage
 * @param {*} item Item to add to other local storage colection
 */
export const addItem = (key, item) => {
  const items = getItem(key);

  if (items) {
    setItem(key, [...items, item]);
    return;
  }

  setItem(key, [item]);
};
