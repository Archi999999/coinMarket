import ContentLoader from 'react-content-loader'

import { Table } from '@/shared/ui/table'

import s from './loaders.module.scss'

export const TableContentLoader = ({ limit }: { limit: number }) => {
  return Array.from({ length: limit }).map((_, index) => <RowLoader key={index} />)
}

export const RowLoader = () => {
  return (
    <Table.Row className={s.tableRow}>
      <Content />
      <Content2 />
      <Content2 />
      <Content2 />
      <Content2 />
      <Content2 />
      <Content3 />
    </Table.Row>
  )
}

const Content = () => {
  return (
    <Table.Cell className={s.tableContent}>
      <ContentLoader
        backgroundColor={'#0b0e13'}
        foregroundColor={'#161d26'}
        height={30}
        speed={1}
        width={20}
      >
        <rect height={20} rx={'4'} ry={'4'} width={20} x={'0'} y={'9'} />
      </ContentLoader>
    </Table.Cell>
  )
}

const Content2 = () => {
  return (
    <Table.Cell className={s.tableContent2}>
      <ContentLoader
        backgroundColor={'#0b0e13'}
        foregroundColor={'#161d26'}
        height={30}
        speed={1}
        width={50}
      >
        <rect height={20} rx={'4'} ry={'4'} width={40} x={'0'} y={'9'} />
      </ContentLoader>
    </Table.Cell>
  )
}

const Content3 = () => {
  return (
    <Table.Cell>
      <ContentLoader
        backgroundColor={'#0b0e13'}
        foregroundColor={'#161d26'}
        height={30}
        speed={1}
        width={30}
      >
        <rect height={30} rx={'4'} ry={'4'} width={30} x={'0'} y={'0'} />
      </ContentLoader>
    </Table.Cell>
  )
}
