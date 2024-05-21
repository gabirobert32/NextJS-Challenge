export const basicFetch = async <ReturnType>(
  endpoint: string
): Promise<ReturnType> => {
  const response = await fetch(endpoint)

  if (!response.ok) {
    throw new Error('Error')
  }
  const data = await response.json()
  return data
}
