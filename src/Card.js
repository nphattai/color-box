import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

// import './Card.styles.scss'

const Container = styled.div`
  height: 60px;
  width: 60px;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
        props.isDragDisabled
            ? 'lightgrey'
            : props.isDragging
                ? '#FF0000'
                : props.color ? `${props.color}}` : 'white'};
`

const Card = ({ card, index }) => {
    return (
        <Draggable
            draggableId={card.id}
            index={index}
        >
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    innerRef={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    color={card.color}
                >
                    {card.content}
                </Container>
            )}
        </Draggable>
    )

}

export default Card
