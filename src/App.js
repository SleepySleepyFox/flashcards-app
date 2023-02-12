import React, { useEffect, useState } from 'react'
import "./App.css"
import AddNewCard from './components/AddNewCard'
import Card from './components/Card'



function App() {
  const [cards, setCards] = useState(
    localStorage.getItem("Data") !== null 
      ? JSON.parse(localStorage.getItem("Data")) : []
    )
  const [cardContent, setCardContent] = useState({})
  
  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(cards))
    console.log("hook works")
  }, [cards])



  function AddCard(){
    setCards((oldVal) => (
      [...oldVal,
      {
        word: cardContent.setWord,
        translation: cardContent.setTranslation,
        id: cards.length
      }]
    ))   
  }
  function handleAddText(event){ 
    const {name, value} = event.target

    {name === 'addtext' && setCardContent((e) => (
      {
        ...e,
        setWord: value
      }
    ))}

    {name === 'addTranslation' && setCardContent((e) => (
      {
        ...e,
        setTranslation: value
      }
    ))}
  }
  const inpt = 
  <div className='input-container'>
    <input name='addtext' placeholder='Word' onChange={handleAddText} autoComplete = 'off'/>
    <input name='addTranslation' placeholder='Translation' onChange={handleAddText} autoComplete = 'off'/>
  </div>

  const displayCards = cards.map( (e) => (
    <Card
      word={e.word}
      translation={e.translation}
      remove={() => {
        setCards( current => (
          current.filter(card => e.id != card.id)
        ))
      }
      }
    />
  ))

  return (
    <main>

    <div className='cards-field'>
         <AddNewCard 
          handleAdd = {AddCard}
          inpt = {inpt}
          />
          {displayCards}
      </div>
    </main>
  )
}

export default App