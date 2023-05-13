import { Button } from '../button'

import * as S from './styles'

export const Footer = () => {
  return (
    <footer className={S.footerContainer()}>
      <div className={S.footerContent()}>
        <span className={S.footerTitle()}>
          Want to make a difference on the world?
        </span>
        <p className={S.footerText()}>
          Choose from over 7000 charity organizations around the globe
        </p>
        <div className="max-w-[28.75rem] w-full">
          <Button size="lg">Browse all orgs</Button>
        </div>
      </div>
    </footer>
  )
}
