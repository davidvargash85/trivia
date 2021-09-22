const SESSION_STORAGE_KEY = 'trivia';

export const saveState = (state) => {
  const storage = window.sessionStorage;
  storage.setItem(SESSION_STORAGE_KEY, JSON.stringify(state));
};

export const loadState = () => {
  const storage = window.sessionStorage;
  const value = storage.getItem(SESSION_STORAGE_KEY);
  let state;
  if (value) {
    state = JSON.parse(value);
  }
  return state;
};
