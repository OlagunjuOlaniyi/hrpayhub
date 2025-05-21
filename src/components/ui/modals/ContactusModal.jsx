import { CloseCircleIcon } from '../../Icons'

const ContactusModal = () => {
  return (
    <div
      className='modal fade'
      id='contactusModal'
      tabIndex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div
        className='modal-dialog modal-dialog-centered'
        style={{ overflowY: 'auto' }}
      >
        <div className='bg-white p-3 rounded-3 px-5 py-4 contactUsModal'>
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
          <div className='vstack gap-4'>
            <div className='vstack gap-2 border-bottom pb-4'>
              <div className='d-flex gap-3'>
                <img src='images/png/icons/sms.svg' alt='sms' />
                <div className='fs-16 fw-700 text-primary-blue'>Email</div>
              </div>
              <div className='fs-14 fw-600'>care@hrpayhub.com</div>
              <div className='fs-14 fw-600'>support@delonapps.com</div>
            </div>
            <div className='vstack gap-2 border-bottom pb-4'>
              <div className='d-flex gap-3'>
                <img
                  src='images/png/icons/hand-phone-black.svg'
                  alt='phone_number'
                />
                <div className='fs-16 fw-700 text-primary-blue'>
                  Phone Number
                </div>
              </div>
              <div className='fs-14 fw-600'>UK: +44-151-351-4515</div>
              <div className='fs-14 fw-600'>
                NG: +234-0708-064-0960, +234-915-998-4673
              </div>
              <div className='fs-14 fw-600'>US: +1-508-455-0015</div>
            </div>

            <div className='vstack gap-2 pb-4'>
              <div className='d-flex gap-3'>
                <img src='images/png/icons/global.svg' alt='global' />
                <div className='fs-16 fw-700 text-primary-blue'>Website</div>
              </div>
              <div className='fs-14 fw-600'>www.hrpayhub.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactusModal
