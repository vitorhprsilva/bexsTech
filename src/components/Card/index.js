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
        <text className="text-card">{number===null ? '**** **** **** ****' : number }</text>
        <div className="datas-name-validate">
          <text className="text-card">{nameTitular===null ? 'Nome do Titular' : nameTitular }</text>
          <text className="text-card">{validateCard===null ? '00/00' : validateCard }</text>
        </div>
      </div>
    </div>
  )
}