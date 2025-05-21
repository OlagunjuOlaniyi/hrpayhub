export const DropdownListItem = ({ label, icon }) => {

  return (
    <div className="" id = {label.replaceAll(' ', '').toLowerCase()}>
      <a className='dropdown-item d-flex gap-3 align-items-center py-2 d-inline-block fs-6' href={`/${label.replaceAll(' ', '_').toLowerCase()}.html`}>
        <div className="d-flex align-items-center justify-content-center w-22">
          <img src = {icon} alt = {label} />
        </div>
        <div className="list-item-label">{label}</div>
      </a>
    </div>
  )
}
