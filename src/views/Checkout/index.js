import { useState } from 'react';
import {InputText, Card} from '../../components'
import { validatesMask, cardNumberMask, removeNumbers, cvvMask } from '../../utils'
import { BsChevronLeft } from 'react-icons/bs'

import CardSvg from '../../components/svg/Grupo 2.svg'
import ElipseCard from '../../components/svg/Elipse 1.svg'

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
            <div className='div-new-creditcard'><img src={ElipseCard} alt='card' className='img-elipse-card' /> <img src={CardSvg} alt='card' className='img-card' /><p className='text-new-creditcard'> Adicione um novo cartão de crédito </p></div>
          </div>
          <div className='div-card'>
            <Card numberCard={number} name={name} validate={validate}  />
          </div>
        </div>
        <div className='div-right'>
          <div className='div-inputs'>
            <InputText placeholder='Número do cartão' maskFunction={cardNumberMask} onChangeText={(text)=>setNumber(text)} maxLength={18} />
            <InputText placeholder='Nome (igual ao cartão)' maskFunction={removeNumbers} onChangeText={(text)=>setName(text)} maxLength={45}  />
            <div className='div-subinputs'>
              <InputText placeholder='Validade' maskFunction={validatesMask} onChangeText={(text)=>setValidate(text)} maxLength={5}  /> 
              <InputText placeholder='CVV' maskFunction={cvvMask} onChangeText={()=>{}} maxLength={4} /> 
            </div> 
          </div>
          <div className='div-button'>
            <button onClick={()=>{}} className='btn-send' >Continuar</button>
          </div>
        </div>
      </div>
  );
}

