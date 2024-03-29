import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = (props) => {

   let contents;

   if (props.guessedWords.length === 0) {
      contents = (
         <span data-test="guess-instructions">
            Try to guess the secret word!
         </span>
      )
   }
   else {
      const guessedWordsRows = props.guessedWords.map((word, index) => (
         <tr key={index} data-test="guessed-word">
            <td>{word.guessedWord}</td>
            <td>{word.letterMatchCount}</td>
         </tr>
      ))

      contents = (
         <div data-test="guessed-words">
            <h3>Guessed Words</h3>
            Try to guess the secret word!
            <table>
               <thead>
                  <tr>
                     <th>Guess</th>
                     <th>Matching Letters</th>
                  </tr>
               </thead>
               <tbody>
                  {guessedWordsRows}
               </tbody>

            </table>
         </div>

      )
   }
   return (
      <div data-test="component-guessedWords">
         {contents}
      </div>
   )
}

GuessedWords.propTypes = {
   guessedWords: PropTypes.arrayOf(
      PropTypes.shape({
         guessedWord: PropTypes.string,
         letterMatchCount: PropTypes.number
      })
   ).isRequired
}

export default GuessedWords;
