import { Checkout } from './index'

import { screen, render, userEvent } from '../../tests'

import { cardNumberMask, removeNumbers, validatesMask, cvvMask } from '../../utils'

const placeholderNumber = 'Número do cartão'
const placeholderName = 'Nome (igual ao cartão)'
const placeholderValidate = 'Validade'
const placeholderCvv = 'CVV'
const correctNumberCard = '4444555566667777' 
const correctName = 'vitor hugo pereira rocha da silva'
const correctDate = '07/23'
const correctCvv = '333'

describe('TextInput', ()=>{
  it('render input', ()=>{
    render(
      <Checkout />
    );

    expect(screen.getByPlaceholderText(placeholderNumber)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(placeholderName)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(placeholderValidate)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(placeholderCvv)).toBeInTheDocument()

  });

  it('should start inputNumber empty', ()=>{
    render(
      <Checkout />
    );

    const inputEl = screen.getByPlaceholderText(placeholderNumber)

    expect(inputEl).toHaveValue('')

  });
  
  it('should start inputName empty', ()=>{
    render(
      <Checkout />
    );

    const inputEl = screen.getByPlaceholderText(placeholderName)

    expect(inputEl).toHaveValue('')

  });
  
  it('should start inputValidate empty', ()=>{
    render(
      <Checkout />
    );

    const inputEl = screen.getByPlaceholderText(placeholderValidate)

    expect(inputEl).toHaveValue('')

  });
  
  it('should start inputCvv empty', ()=>{
    render(
      <Checkout />
    );

    const inputEl = screen.getByPlaceholderText(placeholderCvv)

    expect(inputEl).toHaveValue('')

  });

  it('correct number card', ()=>{
    render(
      <Checkout />
    );

    const inputEl = screen.getByPlaceholderText(placeholderNumber)

    userEvent.type(inputEl, correctNumberCard)

    expect(inputEl).toHaveValue(cardNumberMask(correctNumberCard))

  });

  it('incorrect number card', ()=>{
    render(
      <Checkout />
    );

    const inputEl = screen.getByPlaceholderText(placeholderNumber)

    userEvent.type(inputEl, correctNumberCard)

    expect(inputEl).not.toHaveValue(correctNumberCard)

  });
});