import React from 'react'

export const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = event.target as HTMLImageElement

  target.src = '/logo/no-image.png'
}