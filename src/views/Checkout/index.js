import { useState } from 'react';
import {InputText, Card} from '../../components'
import { validatesMask, cardNumberMask, removeNumbers, cvvMask } from '../../utils'

export const Checkout = () => {
  const [number, setNumber] = useState(null)
  const [name, setName] = useState(null)
  const [validate, setValidate] = useState(null)
  return (
      <div style={{flex: 1}}> 
        <div className='div-card'>
          {/* <Link to='/teste' >Alterar forma de pagamento</Link> */}
          Alterar forma de pagamento
          Adicione um novo cartão de crédito
          <Card numberCard={number} name={name} validate={validate}  />
        </div>
        <div>
          <InputText placeholder='Número do cartão' maskFunction={cardNumberMask} onChangeText={(text)=>setNumber(text)} /> 
          <InputText placeholder='Nome (igual ao cartão)' maskFunction={removeNumbers} onChangeText={(text)=>setName(text)} />
          <div>
            <InputText placeholder='Validade' maskFunction={validatesMask} onChangeText={(text)=>setValidate(text)} /> 
            <InputText placeholder='CVV' maskFunction={cvvMask} onChangeText={()=>{}} /> 
          </div> 
        </div>
      </div>
  );
}

