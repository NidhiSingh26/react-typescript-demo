import React from 'react'

type Props = {
   showMessage: Boolean
   showAlert: Boolean
   count1: number
}

export const Conditional: React.FC<Props> = ({ showMessage, showAlert, count1 }) => {
   return (
      <div style={{ padding: '5px' }}>
         {showMessage && (
            <p style={{ backgroundColor: '#afe7af', padding: '10px' }}>
               Good Morning!
            </p>
         )}
         {showAlert && (
            <p style={{ backgroundColor: '#ffbaba', padding: '10px' }}>
               This is alert message!
            </p>
         )}
         <h4>Count: {count1}</h4>
      </div>
   )
}
export default Conditional