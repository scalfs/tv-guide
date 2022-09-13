import { useEffect, useState } from 'react'

function useDebounce<V>(value: V, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<V>(value)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  return debouncedValue
}

export default useDebounce
