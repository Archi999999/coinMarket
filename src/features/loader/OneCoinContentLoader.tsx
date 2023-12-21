import ContentLoader from 'react-content-loader'

import s from './loaders.module.scss'

export const OneCoinContentLoader = () => {
  return (
    <>
      <div className={s.oneCoin}>
        <LogoLoader />
        <CoinMetricLoader />
      </div>
      <DiagramLoader />
    </>
  )
}

const LogoLoader = () => {
  return (
    <ContentLoader style={{ height: '145px', width: '130px' }}>
      <rect height={'35'} rx={'20'} ry={'20'} width={'35'} x={'0'} y={'55'} />
      <rect height={'20'} rx={'4'} ry={'4'} width={'70'} x={'45'} y={'45'} />
      <rect height={'20'} rx={'4'} ry={'4'} width={'40'} x={'45'} y={'80'} />
    </ContentLoader>
  )
}

const CoinMetricLoader = () => {
  return (
    <ContentLoader style={{ height: '145px', width: '300px' }}>
      <rect height={'41'} rx={'8'} ry={'8'} width={'145'} x={'0'} y={'0'} />
      <rect height={'41'} rx={'8'} ry={'8'} width={'145'} x={'155'} y={'0'} />
      <rect height={'41'} rx={'8'} ry={'8'} width={'145'} x={'0'} y={'51.6'} />
      <rect height={'41'} rx={'8'} ry={'8'} width={'145'} x={'155'} y={'51.6'} />
      <rect height={'41'} rx={'8'} ry={'8'} width={'145'} x={'0'} y={'103.2'} />
      <rect height={'41'} rx={'8'} ry={'8'} width={'145'} x={'155'} y={'103.2'} />
    </ContentLoader>
  )
}

export const DiagramLoader = () => {
  return (
    <ContentLoader style={{ height: '280px', margin: 'auto', width: '431px' }}>
      <rect height={'280'} rx={'10'} ry={'10'} width={'429'} x={'2'} y={'0'} />
    </ContentLoader>
  )
}
