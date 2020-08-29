import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const Container = styled.div`
  height: 3vw;
  width: 3vw;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.color ? `${props.color}` : 'white')};
  opacity: ${(props) => (props.isDragging ? 0.5 : 1)};
`

const Card = ({ card, index }) => {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={provided.innerRef}
          isDragging={snapshot.isDragging}
          color={card.color}
        ></Container>
      )}
    </Draggable>
  )
}

export default Card
