import styled from 'styled-components'

export const StyledContainer = styled.div`
  border: 1px solid #333;
  width: ${({ width }) => `${width}px`};
  height: 100px;
  border-radius: 15px;
  border-color: ${props => props.light ? 'white' : 'goldenrod'};
  transition: height 2s;

  &:hover {
    height: 200px;
  }
`

export const StyledParagraph = styled.p`
  font-size: 24px;
  color: white;
`
