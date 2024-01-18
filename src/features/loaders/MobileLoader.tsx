import * as React from 'react'

import { JSX } from 'react/jsx-runtime'

import s from './loaders.module.scss'

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    className={s.mobileLoader}
    viewBox={'0 0 200 200'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <radialGradient
      cx={0.66}
      cy={0.313}
      fx={0.66}
      fy={0.313}
      gradientTransform={'scale(1.5)'}
      id={'a'}
    >
      <stop offset={0} stopColor={'#0b0e13'} />
      <stop offset={0.3} stopColor={'#0b0e13'} stopOpacity={0.9} />
      <stop offset={0.6} stopColor={'#0b0e13'} stopOpacity={0.6} />
      <stop offset={0.8} stopColor={'#0b0e13'} stopOpacity={0.3} />
      <stop offset={1} stopColor={'#0b0e13'} stopOpacity={0} />
    </radialGradient>
    <circle
      cx={100}
      cy={100}
      fill={'none'}
      r={70}
      stroke={'url(#a)'}
      strokeDasharray={'200 1000'}
      strokeLinecap={'round'}
      strokeWidth={10}
      style={{ transformOrigin: 'center' }}
    >
      <animateTransform
        attributeName={'transform'}
        calcMode={'spline'}
        dur={2}
        keySplines={'0 0 1 1'}
        keyTimes={'0;1'}
        repeatCount={'indefinite'}
        type={'rotate'}
        values={'360;0'}
      />
    </circle>
    <circle
      cx={100}
      cy={100}
      fill={'none'}
      opacity={0.2}
      r={70}
      stroke={'#0b0e13'}
      strokeLinecap={'round'}
      strokeWidth={10}
      style={{ transformOrigin: 'center' }}
    />
  </svg>
)

export default SvgComponent
