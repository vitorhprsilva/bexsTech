import { useState } from 'react';
import {InputText, Card} from '../../components'
import { validatesMask, cardNumberMask, removeNumbers, cvvMask } from '../../utils'
import { BsChevronLeft } from 'react-icons/bs'

import './styles.css'

export const Checkout = () => {
  const [number, setNumber] = useState(null)
  const [name, setName] = useState(null)
  const [validate, setValidate] = useState(null)
  return (
      <div className='checkout'> 
        <div className='div-left'>
          {/* <Link to='/teste' >Alterar forma de pagamento</Link> */}
          <div className='datas-left'>
            <a href='#' className='link-back'> <BsChevronLeft  /> Alterar forma de pagamento</a>
            <p className='text-new-creditcard'>Adicione um novo cartão de crédito</p>
          </div>
          <div className='div-card'>
            <Card numberCard={number} name={name} validate={validate}  />
          </div>
        </div>
        <div className='div-right'>
          <div className='div-inputs'>
            <InputText placeholder='Número do cartão' maskFunction={cardNumberMask} onChangeText={(text)=>setNumber(text)} /> 
            <InputText placeholder='Nome (igual ao cartão)' maskFunction={removeNumbers} onChangeText={(text)=>setName(text)} />
            <div className='div-subinputs'>
              <InputText placeholder='Validade' maskFunction={validatesMask} onChangeText={(text)=>setValidate(text)} /> 
              <InputText placeholder='CVV' maskFunction={cvvMask} onChangeText={()=>{}} /> 
            </div> 
          </div>
        </div>
      </div>
  );
}

