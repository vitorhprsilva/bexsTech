import { useEffect, useState } from "react"

import VisaSvg from '../../components/svg/Visa.svg'

import './styles.css'

export const Card = ({numberCard, name, validate}) => {
  // const [number, setNumber] = useState('**** **** **** ****')
  const [number, setNumber] = useState(null)
  const [nameTitular, setNameTitular] = useState(null)
  const [validateCard, setValidateCard] = useState(null)
  const [abbleCard, setAbbleCard] = useState(false)

  useEffect(()=>{setAbbleCard(false)},[])

  useEffect(()=>{
    setNumber(numberCard)
    if(numberCard!==null){
      setAbbleCard(true)
    }
  }, [numberCard])

  useEffect(()=>{
    setNameTitular(name)
    if(name!==null){
      setAbbleCard(true)
    }
  }, [name])

  useEffect(()=>{
    setValidateCard(validate)
    if(validate!==null){
      setAbbleCard(true)
    }
  }, [validate])

  return(
    <div className={(!abbleCard ? 'card-off' : 'card-on')}>
      {abbleCard && (
        <div className="div-logo-card">
          <img src={VisaSvg} alt="visa logo" className="logo-card" />
        </div>
      )}
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