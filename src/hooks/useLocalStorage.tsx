import { useState, useEffect } from 'react'

export const getSavedValue = (key: string, initialValue) => {
  if (key !== null) {
    const localStorageValue = localStorage.getItem(key)
    if (localStorageValue) {
      const parsedValue = JSON.parse(localStorageValue)
      if (parsedValue) return parsedValue
    }

    if (initialValue instanceof Function) {
      return initialValue()
    } else {
      return initialValue
    }
  }
}

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(getSavedValue(key, initialValue))

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}
