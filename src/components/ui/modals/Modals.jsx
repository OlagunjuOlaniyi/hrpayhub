import { CloseCircleIcon } from '../../Icons'

export const FeatureUpgradeModal = () => {
  return (
    <div
      className='modal fade'
      id='showUpgradeModal'
      tabIndex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-dialog-centered'>
        <div
          className='bg-white p-3 rounded-3 px-5 py-4 square-450'
        >
          <div className='d-flex justify-content-end'>
            <button
              className='p-0 bg-transparent border-0 pe-auto'
              type='button'
              data-bs-dismiss='modal'
              aria-label='Close'
            >
              <CloseCircleIcon />
            </button>
          </div>
          <div>
            <div className='d-flex gap-3 align-items-center'>
              <img
                src='images/png/3D_megaphone_icon.png'
                width={45}
                height={45}
                alt='3D_megaphone_icon'
              />
              <div className='font-ubuntu-bold fs-5'>
                Feature Upgrade in Progress
              </div>
            </div>
            <div>
              This section is currently being enhanced with new features to
              serve you better. Stay tuned!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
