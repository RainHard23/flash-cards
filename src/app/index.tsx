import { useLayoutEffect } from 'react'

import { CheckboxPrimitive } from '@/components/ui/checkbox/checkbox'
import { TextField } from '@/components/ui/textfield/textfield'

export const App = () => {
  useLayoutEffect(() => {
    document.body.setAttribute('data-theme', 'dark')
  })

  return (
    <>
      <CheckboxPrimitive checked={false} label={'kekek'} />
      <TextField
        label={'input'}
        type={'password'}
        errorMessage={'lol'}
        placeholder={'Введите текст'}
        className={'s.search'}
      />
    </>
  )
}
