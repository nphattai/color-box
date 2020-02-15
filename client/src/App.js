import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from './initial-data'
import styled from 'styled-components'
import Column from './Column'
import './App.css'

const Container = styled.div`
  display:flex;
  align-self: center;
  justify-self: center;
`

const App = () => {
  const [state, setState] = useState(initialData)

  const onDragEnd = result => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const start = state.columns[source.droppableId]
    const finish = state.columns[destination.droppableId]

    // Source and Destination at same column
    if (start === finish) {
      const newCardIds = Array.from(start.cardIds)
      newCardIds.splice(source.index, 1)
      newCardIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        cardIds: newCardIds
      }

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn
        }
      }

      setState(newState)
      return
    }

    // Source and Destination at differrent column
    const startCardIds = Array.from(start.cardIds)
    startCardIds.splice(source.index, 1)

    const finishCardIds = Array.from(finish.cardIds)
    finishCardIds.splice(destination.index, 0, draggableId)

    const trans = finishCardIds.pop()

    startCardIds.push(trans)

    const newStart = {
      ...start,
      cardIds: startCardIds
    }

    const newFinish = {
      ...finish,
      cardIds: finishCardIds
    }

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }
    setState(newState)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {state.columnOrder.map(columnId => {
          const column = state.columns[columnId]
          const cards = column.cardIds.map(
            cardId => state.cards[cardId]
          )
          return (
            <Column key={column.id} column={column} cards={cards} />
          )
        })}
      </Container>
    </DragDropContext>
  )
}

export default App
