import { MagnifyingGlass } from 'phosphor-react'

import * as S from './styles'

export const Searchbar = () => {
  return (
    <label className={S.inputContainer()} htmlFor="search">
      <input className={S.input()} id="search" placeholder="Search organization" />
      <MagnifyingGlass className="text-magenta-500 text-xl" />
    </label>
  )
}
