import { useLayoutEffect } from 'react'

export const App = () => {
  useLayoutEffect(() => {
    document.body.setAttribute('data-theme', 'dark')
  })

  return <></>
}
