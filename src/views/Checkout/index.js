import {InputText} from '../../components'
import { validatesMask, cardNumberMask, removeNumbers, cvvMask } from '../../utils'
import { Link } from 'react-router-dom'

export const Checkout = () => {
  return (
      <div style={{flex: 1}}> 
        <div className='div-card'>
          {/* <Link to='/teste' >Alterar forma de pagamento</Link> */}
          Alterar forma de pagamento
          Adicione um novo cartão de crédito
        </div>
        <div>
          <InputText placeholder='Número do cartão' maskFunction={cardNumberMask} onChangeText={()=>{}} /> 
          <InputText placeholder='Nome (igual ao cartão)' maskFunction={removeNumbers} onChangeText={()=>{}} />
          <div>
            <InputText placeholder='Validade' maskFunction={validatesMask} onChangeText={()=>{}} /> 
            <InputText placeholder='CVV' maskFunction={cvvMask} onChangeText={()=>{}} /> 
          </div> 
        </div>
      </div>
  );
}

