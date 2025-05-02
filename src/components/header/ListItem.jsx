export const DropdownListItem = ({ label, icon }) => {
  // const {label, icon: Icon} = props
  return (
    <div className="">
      <a className='dropdown-item d-flex gap-3 align-items-center py-2 d-inline-block fs-6' href={`@Url.Action("Controller", "Action", new { acc = 0})`}>
        <div className="d-flex align-items-center justify-content-center w-22">
          <img src = {icon} alt = {label} />
        </div>
        <div className="list-item-label">{label}</div>
      </a>
    </div>
  )
}
