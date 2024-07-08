import { useState, useEffect } from 'react'

export function useFetch<T>(url: string, options = {}) {
  const [data, setData] = useState<T>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    function fetchData(url: string, options = {}) {
      return fetch(url, options)
        .then((res) => {
          if (!res.ok) {
            throw new Error('fetch failed')
          }
          return res.json()
        })
        .then(setData)
        .catch((e: Error) => setError(e.message))
        .finally(() => setIsLoading(false))
    }

    fetchData(url, options)
  }, [])

  return { data, isLoading, error }
}
