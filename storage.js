function saveToLocalStorage(theme, language) {
    try {
      localStorage.setItem('theme', theme);
      localStorage.setItem('language', language);
  
      console.log('User preferences saved to localStorage.');
    } catch (error) {
      console.error('Error saving user preferences to localStorage:', error);
    }
  }
  saveToLocalStorage('dark', 'english');
  //assiggnment -2
  function loadFromSessionStorage(key) {
    const data = sessionStorage.getItem(key);
    if (data) {
        return JSON.parse(data);
    }
    return null;
 }
 const cartItems = loadFromSessionStorage('cartItems');
 