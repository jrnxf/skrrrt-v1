import { useEffect } from 'react'

export const useVariableUpdated = (variable) => {
  useEffect(() => console.log(variable), [variable])
}
