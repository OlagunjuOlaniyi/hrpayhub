import { CloseCircleIcon } from '../../Icons'

export default function DeleteDepartmentModal () {
  return (
    <>
      <div
        className='modal fade'
        id='deleteDepartmentModal'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='deleteDepartmentModal'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-scrollable modal-dialog-centered'>
          <div className='modal-content p-4'>
            <div className='modal-header border-0 d-flex justify-content-end'>
              <button
                type='button'
                className='p-0 bg-transparent border-0 pe-auto '
                data-bs-dismiss='modal'
                aria-label='Close'
              >
                <CloseCircleIcon />
              </button>
            </div>
            <div className='modal-body'>
              <div className='vstack gap-4 w-100'>
                <div className='d-flex justify-content-center align-items-center'>
                  <img
                    src='images/png/icons/colored/exclamation_big.svg'
                    alt='exclamation_big'
                  />
                </div>

                <div className='vstack gap-1 mb-2'>
                  <div
                    className='font-ubuntu-bold fs-22 text-center'
                    id='deleteLocationModalLabel'
                  >
                    Delete Department
                  </div>

                  <div className='fs-14 fw-600 text-center'>
                    Are you sure you want to delete this department?
                  </div>
                </div>

                <div className='d-flex align-items-center justify-content-center'>
                  <button
                    className='delon-primary-btn bg-red border-0 text-white fw-bold fs-14 d-flex align-items-center gap-2'
                    type='button'
                    id='deleteDeptConfirmBtn'
                  >
                    <span>Yes, delete department</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
