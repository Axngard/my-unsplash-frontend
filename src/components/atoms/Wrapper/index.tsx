import React, { PropsWithChildren } from 'react'
import { screens } from '@src/styles/theme'

/* Styles */
import { WrapperStyled } from './styles'

/* Types */
interface Props {
   breakpoint?: string
}

const Wrapper = ({
   children,
   breakpoint = screens.lg
}: PropsWithChildren<Props>): JSX.Element => {
   return <WrapperStyled theme={{ breakpoint }}>{children}</WrapperStyled>
}

export default Wrapper
