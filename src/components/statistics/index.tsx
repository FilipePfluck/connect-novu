import * as S from './styles'

export const Statistics = () => {
  return (
    <section className={S.statisticsContainer()}>
      <div className={S.statisticContent()}>
        <div className={S.statistic()}>
          <strong className={S.number()}>269</strong>
          <h3 className={S.magnitude()}>Thousand</h3>
          <p className={S.info()}>of tons of trash float on the ocean</p>
        </div>
        <div className={S.statistic()}>
          <strong className={S.number()}>828</strong>
          <h3 className={S.magnitude()}>Million</h3>
          <p className={S.info()}>people suffer from hunger</p>
        </div>
        <div className={S.statistic()}>
          <strong className={S.number()}>16</strong>
          <h3 className={S.magnitude()}>Thousand</h3>
          <p className={S.info()}>animal species are endangered</p>
        </div>
      </div>
    </section>
  )
}
