export default function FormContextIndicator (props) {
  const {index} = props
  return (
    <div
      className='d-flex justify-content-between align-items-center gap-2 col-md-3 col-12'
      style={{border: '1px solid #C1C1C1', borderRadius: '10px'}}
    >
      <div
        data-bs-html='true'
        data-bs-placement='top'
        data-bs-toggle='tooltip'
        title="<div><div><strong>Turn On/Off</strong></div><em style = 'font-size: 7px'>Enable if applicable; Disable if not</em></div>"
        role='button'
        className='form-check form-switch switchForDeductionsFields'
        style={{marginTop: '5px', cursor: 'pointer'}}
      >
        <input
          className='form-check-input'
          type='checkbox'
          role='switch'
          id={`lekjeli_${index}`}
          defaultChecked
        />
      </div>
      <div
        data-bs-html='true'
        data-bs-placement='top'
        data-bs-toggle='tooltip'
        title="<div><div><strong>Edit</strong></div><em style = 'font-size: 7px'>Update if the value has changed</em></div>"
        style = {{cursor: 'pointer'}}
      >
        <img src='images/png/icons/refresh.svg' alt='refresh_icon' />
      </div>
      <div
        data-bs-html='true'
        data-bs-placement='top'
        data-bs-toggle='tooltip'
        title="<div><div><strong>Restore</strong></div><em style = 'font-size: 7px'>Reset to default value</em></div>"
        style = {{cursor: 'pointer'}}
      >
        <img src='images/png/icons/colored/edit-2.svg' alt='edit_icon' />
      </div>
    </div>
  )
}
