export const searchApiUrl = (searchParam?: string) =>
  `http://localhost:4000/api/items?q=${searchParam}`

export const pdpApiUrl = (pdpID?: string) =>
  `http://localhost:4000/api/items/${pdpID}`
