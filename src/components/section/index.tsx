import { Link } from 'phosphor-react'
import { Button } from '../button'

import * as S from './styles'

interface SectionProps {
  name: string
  description: string
  siteUrl: string
  imgSrc: string
}

export const Section = ({
  description,
  imgSrc,
  name,
  siteUrl,
}: SectionProps) => {
  return (
    <section className={S.sectionContainer()}>
      <div className={S.sectionContent()}>
        <div className={S.sectionInfo()}>
          <div className="mb-12">
            <div className={S.sectionInfoHeader()}>
              <h2 className={S.orgName()}>{name}</h2>
              <a href={siteUrl}>
                <Link size={32} weight="bold" />
              </a>
            </div>
            <p className={S.orgDescription()}>{description}</p>
          </div>
          <div className="flex gap-6 col-span-1">
            <Button size="sm">DONATE</Button>
            <Button intent="secondary" size="sm">
              VOLUNTEER
            </Button>
          </div>
        </div>
        <div className={S.imageContainer()}>
          <img src={imgSrc} alt="" className={S.orgImage()} />
        </div>
      </div>
    </section>
  )
}
