export const NoticeToast = (props) => {
    const {title, message} = props
  return (
    // <!-- Toast container -->
    <>
    
    <div className='toast-container position-fixed top-0 bg-success start-50 translate-middle-x p-3' style={{zIndex: 11}}>
      <div
        id='noticeToast'
        className='toast'
        role='alert'
        aria-live='assertive'
        aria-atomic='true'
      >
        <div className='toast-header'>
          <strong className='me-auto'>Payslip Generate</strong>
          <small>just now</small>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='toast'
            aria-label='Close'
          ></button>
        </div>
        <div className='toast-body'>Employee data refreshed for Payslip!</div>
      </div>
    </div>

    </>
  )
}
