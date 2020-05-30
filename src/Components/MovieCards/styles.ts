import styled from '@emotion/styled'

export const Card = styled.div`
  background-color: #000;
  margin: auto;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: auto;
    transition: transform 0.5s cubic-bezier(0.15, 1, 0.33, 1);
  }

  &:hover {
    cursor: pointer;

    img {
      opacity: 0.5;
      transform: scale(1.15);
    }

    h4 {
      transform: translateY(0%);
      opacity: 1;
      visibility: visible;
    }
  }
`

export const PreviewText = styled.h4`
  bottom: 0;
  color: white;
  font-size: 25px;
  left: 0;
  opacity: 0;
  transform: translateY(100%);
  position: absolute;
  text-align: center;
  transition-duration: 0.5s;
  transition-property: transform opacity visibility;
  transition-timing-function: cubic-bezier(0.15, 1, 0.33, 1);
  visibility: hidden;
  width: 100%;
`
