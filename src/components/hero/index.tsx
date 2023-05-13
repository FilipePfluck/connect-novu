import { Button } from '../button'

import * as S from './styles'

export const Hero = () => {
  return (
    <div className={S.heroContainer()}>
      <div className={S.heroContent()}>
        <div className={S.heroLeftSection()}>
          <h1 className={S.heroTitle()}>
            Making the world a{' '}
            <span className="text-magenta-500">better place</span> is just one
            click away!
          </h1>
          <p className="text-3xl w-[560px]">
            Help charitable organizations raise funds, or volunteer to work with
            them
          </p>

          <Button size="lg">Browse all orgs</Button>
        </div>
        <img src="/hero-image.svg" alt="" />
      </div>
    </div>
  )
}
