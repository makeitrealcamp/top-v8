import { StyledContainer, StyledParagraph } from './styles'

function Paragraph({ children, light }) {
  return (
    <StyledContainer width={700} light={light}>
      <StyledParagraph>{children}</StyledParagraph>
    </StyledContainer>
  )
}

export default Paragraph
