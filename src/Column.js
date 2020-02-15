import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import Card from './Card'

// import './Column.styles.scss'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const TaskList = styled.div`
  transition: background-color 0.2s ease;
  background-color: ${props =>
        props.isDraggingOver ? '#282c34' : 'white'}
  flex-grow: 1;
`

const Column = ({ column, cards }) => {
    return (
        <Container>
            <Droppable droppableId={column.id} type="TASK">
                {(provided, snapshot) => (
                    <TaskList
                        innerRef={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {cards.map((card, index) => (
                            <Card key={card.id} card={card} index={index} />
                        ))}
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </Container>
    )
}

export default Column