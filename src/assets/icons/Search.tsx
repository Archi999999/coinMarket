import { SVGProps, memo } from 'react'

const Search = (props: SVGProps<SVGSVGElement>) => (
  <svg fill={'none'} height={20} width={20} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={'M9.585 17.5a7.917 7.917 0 1 0 0-15.833 7.917 7.917 0 0 0 0 15.833Z'}
      stroke={'currentColor'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={1.5}
    />
    <path
      d={'m18.335 18.334-1.667-1.667'}
      opacity={0.4}
      stroke={'currentColor'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={1.5}
    />
  </svg>
)
const Memo = memo(Search)

export default Memo
