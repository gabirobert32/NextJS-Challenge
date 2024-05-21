import React from 'react'
import Layout from '../../../components/Layout'
import ItemList, { Item } from '../../../components/ItemList'
import { basicFetch } from '../../../api/fetchFunctions'
import { searchApiUrl } from '../../../config'
import { Metadata } from 'next'

type SearchParams = {
  search?: string
}

type SearchQuery = {
  searchParams?: SearchParams
}

interface SearchProps {
  searchParams?: SearchParams
}

interface ItemsData {
  items: Item[]
}

const getItemsData = async (searchQuery?: string): Promise<ItemsData> => {
  const itemsEndpoint: string = searchApiUrl(searchQuery)
  const response = await basicFetch(itemsEndpoint)
  return response as ItemsData
}

export const generateMetadata = async ({
  searchParams,
}: SearchQuery): Promise<Metadata> => {
  const searchValue = searchParams?.search

  return {
    title: `Resultados para ${searchValue}`,
  }
}

const Search: React.FC<SearchProps> = async ({ searchParams }) => {
  const { items } = await getItemsData(searchParams?.search)

  return (
    <main>
      <Layout />
      <ItemList items={items} />
    </main>
  )
}

export default Search
