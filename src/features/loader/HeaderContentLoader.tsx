import ContentLoader from 'react-content-loader'

export const HeaderContentLoader = () => {
  return (
    <>
      <CoinLoader />
      <CoinLoader />
      <CoinLoader />
    </>
  )
}

const CoinLoader = () => {
  return (
    <ContentLoader style={{ height: '80px', width: '170px' }}>
      <rect height={'20'} rx={'4'} ry={'4'} width={'60'} x={'0'} y={'30'} />
      <rect height={'20'} rx={'4'} ry={'4'} width={'40'} x={'70'} y={'30'} />
      <rect height={'20'} rx={'4'} ry={'4'} width={'30'} x={'120'} y={'30'} />
    </ContentLoader>
  )
}
