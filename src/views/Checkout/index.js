import { useState } from 'react';
import {InputText, Card} from '../../components'
import { validatesMask, cardNumberMask, removeNumbers, cvvMask } from '../../utils'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

import api from '../../services/api'

import CardSvg from '../../components/svg/Grupo 2.svg'
import ElipseCard from '../../components/svg/Elipse 1.svg'
import StagedCarrinho from '../../components/svg/Group 293.svg'
import StagedPagamento from '../../components/svg/Group 291.svg'
import StagedConfirmacao from '../../components/svg/Group 292.svg'

import './styles.css'

export const Checkout = () => {
  const [number, setNumber] = useState(null)
  const [name, setName] = useState(null)
  const [validate, setValidate] = useState(null)
  const [cvv, setCvv] = useState(null)

  const handleSubmit = () => {
    api.post('/pagar', {
      number : number,
      name: name,
      validate: validate,
      cvv: cvv,

    })
    .then(res=>{
      alert(res.data.message)
    })
    .catch((e)=>{alert(e.data.error)})
  }



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
          <div className='div-stages'>
            <p className='text-stages'> <img src={StagedCarrinho} alt='card' className='img-staged' />  <BsChevronRight  /> <img src={StagedPagamento} alt='card' className='img-staged' /> <BsChevronRight  /> <img src={StagedConfirmacao} alt='card' className='img-staged' /></p>
          </div>
          <div className='div-inputs'>
            <InputText placeholder='Número do cartão' maskFunction={cardNumberMask} onChangeText={(text)=>setNumber(text)} maxLength={18} />
            <InputText placeholder='Nome (igual ao cartão)' maskFunction={removeNumbers} onChangeText={(text)=>setName(text)} maxLength={45}  />
            <div className='div-subinputs'>
              <InputText placeholder='Validade' maskFunction={validatesMask} onChangeText={(text)=>setValidate(text)} maxLength={5}  /> 
              <InputText placeholder='CVV' maskFunction={cvvMask} onChangeText={(text)=>setCvv(text)} maxLength={4} /> 
            </div> 
            {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />; */}
          </div>
          <div className='div-button'>
            <button onClick={handleSubmit} className='btn-send' >Continuar</button>
          </div>
        </div>
      </div>
  );
}

