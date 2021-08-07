import { useEffect, useState } from 'react';

const PREFIX = 'codepen-clone-'; // TONS of LocalStorage Keys

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key; // Stored Key
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);

    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue == 'function') {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));   // Stringify value as key value 
  }, [prefixedKey, value]);

  return [value, setValue];
}
