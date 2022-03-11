import { useEffect, useState } from "react"

import './styles.css'

export const Card = ({numberCard, name, validate}) => {
  // const [number, setNumber] = useState('**** **** **** ****')
  const [number, setNumber] = useState(null)
  const [nameTitular, setNameTitular] = useState(null)
  const [validateCard, setValidateCard] = useState(null)

  useEffect(()=>{
    setNumber(numberCard)
  }, [numberCard])

  useEffect(()=>{
    setNameTitular(name)
  }, [name])

  useEffect(()=>{
    setValidateCard(validate)
  }, [validate])

  return(
    <div className={number===null ? 'card-off' : 'card-on'}>
      <div className="datas">
        <p className="text-card-number">{number===null ? '**** **** **** ****' : number }</p>
        <div className="datas-name-validate">
          <p className="text-card-name-validate">{nameTitular===null ? 'Nome do Titular' : nameTitular }</p>
          <p className="text-card-name-validate">{validateCard===null ? '00/00' : validateCard }</p>
        </div>
      </div>
    </div>
  )
}