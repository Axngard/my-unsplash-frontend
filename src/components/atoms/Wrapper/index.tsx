import React, { PropsWithChildren } from 'react'
import { screens } from '@src/styles/theme'

/* Styles */
import { WrapperStyled } from './styles'

/* Types */
type Props = PropsWithChildren<{ breakpoint?: string }>

const Wrapper = ({ children, breakpoint = screens.lg }: Props): JSX.Element => {
   return <WrapperStyled theme={{ breakpoint }}>{children}</WrapperStyled>
}

export default Wrapper
