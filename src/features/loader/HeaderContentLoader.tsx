import ContentLoader from 'react-content-loader'

import s from '@/widgets/header/ui/Header.module.scss'

export const HeaderContentLoader = () => {
  return (
    <>
      <CoinLoader />
      <CoinLoader />
      <CoinLoader />
    </>
  )
}

// const CoinLoader = () => {
//   return (
//     //<>
//     <CoinNameLoader />
//     //<CoinPriceLoader />
//     //</>
//   )
// }

const CoinLoader = () => {
  return (
    <div className={s.coinLoader}>
      <ContentLoader style={{ height: '20', width: '110px' }}>
        <rect height={'20'} rx={'4'} ry={'4'} width={'60'} x={'0'} y={'0'} />
        <rect height={'20'} rx={'4'} ry={'4'} width={'40'} x={'70'} y={'0'} />
      </ContentLoader>
      <ContentLoader style={{ height: '20', width: '40px' }}>
        <rect height={'20'} rx={'4'} ry={'4'} width={'30'} x={'10'} y={'0'} />
      </ContentLoader>
    </div>
  )
}

// const CoinPriceLoader = () => {
//   return (
//     <ContentLoader style={{ height: '20', width: '40px' }}>
//       <rect height={'20'} rx={'4'} ry={'4'} width={'30'} x={'10'} y={'0'} />
//     </ContentLoader>
//   )
// }
