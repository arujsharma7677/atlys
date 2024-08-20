'use client'
import isEmpty from 'lodash-es/isEmpty';
import { useEffect, useState } from 'react';

export function useStorage() {
  const [windowObj, setWindowObj] = useState<any>(Object.create({}));

  useEffect(() => {
    if (isEmpty(windowObj)) {
      setWindowObj(window);
    }
  }, []);

  const getItem = <T>(key: string): T => {
    try {
      const result =
        typeof window != 'undefined' ? window.localStorage.getItem(key) : windowObj?.localStorage?.getItem(key);
      if (result) {
        try {
          return JSON.parse(result);
        } catch (e) {
          return result;
        }
      }
      return JSON.parse(JSON.stringify(null));
    } catch (err) {
      return JSON.parse(JSON.stringify(null));
    }
  };

  const setItem = <T>(key: string, value: T) => {
    try {
      windowObj?.localStorage?.setItem(key, JSON.stringify(value));
    } catch (err) {
      return null;
    }
  };

  const setItems = (items: object) => {
    if (!isEmpty(items)) {
      for (const [key, value] of Object.entries(items)) {
        setItem(key, value);
      }
    }
  };

  const getItems = (keys: string[]) => {
    return keys.map(eachKey => {
      return getItem(eachKey);
    });
  };

  const removeItem = (key: string) => {
    if (window) {
      window.localStorage.removeItem(key);
    } else {
      windowObj?.localStorage?.removeItem(key);
    }
  };

  const clear = () => {
    if (window) {
      window.localStorage.clear();
    } else {
      windowObj?.localStorage?.clear();
    }
  };

  return { getItem, setItem, setItems, getItems, removeItem, clear, windowObj };
}
