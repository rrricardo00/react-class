import React from 'react'
import FormCheckBox from './FormCheckBox'
import FormInput from './FormInput'
import FormRadio from './FormRadio'
import FormSelect from './FormSelect'

const FormComponentIndex = () => {

    const [nome, setNome] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [selectValue, setselectValue] = React.useState('')
    const [selectRadio, setSelectRadio] = React.useState('AZUL')
    const [selectFrutas, setSelectFrutas] = React.useState('LARANJA')
    const [selectCheck, setSelectCheck] = React.useState([])
    const [termos, setTermos] = React.useState([])

    return (
        <div>
            <form>
                <FormSelect value={selectValue} setValue={setselectValue}  options={['smartphone', 'tablet', 'pc']}/>
                <FormInput label="Nome" type="text" nameInput="nome" value={nome} setValue={setNome} required />
                <FormInput label="Email" type="text" nameInput="email" value={email} setValue={setEmail} />
                <h2>CORES</h2>
                <FormRadio value={selectRadio} setValue={setSelectRadio} options={['AZUL', 'VERMELHO']} />
                <h2>FRUTAS</h2>
                <FormRadio value={selectFrutas} setValue={setSelectFrutas} options={['LARANJA', 'LIMAO']} />
                <h2>CHECKBOX</h2>
                <FormCheckBox value={selectCheck} setSelectCheck={setSelectCheck} options={['JS', 'C#', 'JAVA', 'PHP']}/>
                <h2>Termos</h2>
                <FormCheckBox value={termos} setSelectCheck={setTermos} options={['Aceito os termos']}/>
                {termos}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormComponentIndex
