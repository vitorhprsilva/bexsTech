import { InputText } from './index'

import { screen, render, userEvent } from '../../tests'

const placeholder = 'Input name'
const anyText = 'text test'

describe('TextInput', ()=>{
  it('render input', ()=>{
    render(
      <InputText 
        placeholder={placeholder}
        onChangeText={()=>{}}
      />
    );

    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument()

  });

  it('should start empty', ()=>{
    render(
      <InputText 
        placeholder={placeholder}
        onChangeText={()=>{}}
      />
    );

    const inputEl = screen.getByPlaceholderText(placeholder)

    expect(inputEl).toHaveValue('')

  });
  it('should any text before send text', ()=>{
    render(
      <InputText 
        placeholder={placeholder}
        onChangeText={()=>{}}
      />
    );

    const inputEl = screen.getByPlaceholderText(placeholder)

    userEvent.type(inputEl, anyText)

    expect(inputEl).toHaveValue(anyText)

  });
});