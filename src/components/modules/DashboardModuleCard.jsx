import { FeatureUpgradeModal } from '../ui/Modals'

export default function DashboardModuleCard ({
  title,
  subtitle,
  icon,
  href,
  color
}) {
  const handleClick = evt => {
    evt.preventDefault()
    if (href != '#') {
      window.open(href, title)
    } else {
      const myModal = new bootstrap.Modal('#showUpgradeModal', {
        keyboard: true
      })
      myModal.show()
    }
  }

  return (
    <>
      <a
        href={href}
        title={title}
        onClick={handleClick}
        className='col-3 p-0 inline-block text-decoration-none min-w-400 dashboard_module_card'
      >
        <div
          className='rounded-4 py-4 px-5 d-flex h-100 flex-column align-items-center justify-content-start gap-2 text-center'
          style={{
            border: `10px solid ${color}`,
            boxShadow: '4px 4px 10px 0px #00000040'
          }}
        >
          <div>
            <img src={icon} alt={title} />
          </div>
          <div className='font-ubuntu-bold fs-5 text-primary-blue'>{title}</div>
          <div className='fw-semibold fs-6 text-black'>{subtitle}</div>
        </div>
      </a>

      {href == '#' && <FeatureUpgradeModal />}
    </>
  )
}
