export const FormFieldComponent = props => {
  const { label, index } = props
  return (
    <>
      <div className='form-floating col-md-8 col-12 p-0'>
        <input
          type='text'
          id={`ilugyhdg_${index}`}
          name={label.replaceAll(' ', '')}
          className='form-input deductionInputFields'
          placeholder=' '
        />
        <label htmlFor='date' className='ms-1'>
          {label} &nbsp;<span>*</span>
        </label>
      </div>
    </>
  )
}
