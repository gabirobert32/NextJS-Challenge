'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Layout.module.scss'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'

const Layout = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const { replace } = useRouter()

  const searchParams = useSearchParams()
  useEffect(() => {
    const query = searchParams.get('query')
    if (query) {
      setSearchTerm(query)
    }
  }, [searchParams])

  const handleSearch = () => {
    if (searchTerm.trim()) {
      replace(`/items?search=${encodeURIComponent(searchTerm)}`)
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className={styles.searchBarContainer}>
      <header>
        <Link href={'/'}>
          <Image
            src="/ml-logo.png"
            height={40}
            width={56}
            alt="Logo Mercado Libre"
            className={styles.mlLogo}
          />
        </Link>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Nunca dejes de buscar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button className={styles.searchButton} onClick={handleSearch}>
          <Image
            src="/magnifying-glass-icon.svg"
            alt="Buscar"
            height={40}
            width={56}
          />
        </button>
      </header>
    </div>
  )
}

export default Layout
