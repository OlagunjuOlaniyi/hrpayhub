import { PayslipGenerateNotice } from "../ui/Toast";

export default function PayslipGeneratePreview () {
  return (
    <>
      <section className='px-4 d-none' id='view_employee_payslip'>
        <div className='screenFrame'>
          <div className='d-flex flex-column justify-content-between'>
            <div
              className='rounded-4 shadow p-4 d-flex flex-column gap-5 px-md-5 px-3'
              style={{ flexBasis: 'auto' }}
            >
              {/* Page Title */}
              <div className='vstack gap-3'>
                <div className='d-flex gap-3 align-items-center'>
                  <img
                    src='images/png/icons/colored/receipt-minus-colored.svg'
                    alt='receipt-minus-icon'
                    width='30px'
                    height='30px'
                  />
                  <span className='text-primary-blue font-ubuntu-bold fs-24 inline-block'>
                    View Payslip
                  </span>
                </div>
              </div>
              {/* Page Title */}

              {/* Page Content Box */}
              <div className='vstack gap-4'>
                <form
                  className='d-flex gap-lg-4 gap-2'
                  style={{ width: '500px', maxWidth: '100%' }}
                  id='generate_view_payslip_form'
                >
                  <div className='form-section position-relative flex-fill flex-shrink'>
                    <label className='fs-14 fw-600'>Select Date</label>
                    <input
                      className='form-control w-100 w-md-auto flex-fill py-2'
                      type='date'
                      placeholder='Date input'
                      aria-label='date input'
                      style = {{borderRadius: '10px'}}
                    />
                  </div>
                  <div>
                    <button
                      type='submit'
                      className='delon-primary-btn bg-primary-blue border-0 text-white fw-bold fs-14'
                    >
                      <span>Generate</span>
                    </button>
                  </div>
                </form>

                <div className='d-flex align-items-center justify-content-end gap-4'>
                  <button
                    id='back_to_list_of_payslips'
                    className='delon-primary-btn bg-white text-primary-blue border-primary-blue text-decoration-none text-white fw-bold fs-14'
                  >
                    Back
                  </button>
                  <div className='dropdown'>
                    <button
                      className='delon-primary-btn bg-primary-blue border-0 text-white fw-bold fs-14 dropdown-toggle dropdown-no-arrow d-flex align-items-center gap-2'
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                      data-bs-offset='-53,10'
                    >
                      <span>Actions</span>
                      <img
                        src='images/png/icons/arrow-down.svg'
                        alt='arrow-down'
                      />
                    </button>
                    <div
                      className='dropdown-menu p-0 border-0'
                      style={{ width: 'auto' }}
                    >
                      <ul className='list-group border-0 fw-600 fs-14 text-nowrap'>
                        <li className='list-group-item'>
                          <div
                            role='button'
                            className='d-flex align-items-center gap-2'
                          >
                            <img
                              src='images/png/icons/printer.svg'
                              alt='printer'
                            />
                            <span>Print Payslip</span>
                          </div>
                        </li>
                        <li className='list-group-item'>
                          <div
                            role='button'
                            className='d-flex align-items-center gap-2'
                          >
                            <img
                              src='images/png/icons/hard-drive-download.svg'
                              alt='hard-drive-download'
                            />
                            <span>Download Payslip</span>
                          </div>
                        </li>
                        <li className='list-group-item'>
                          <div
                            role='button'
                            className='d-flex align-items-center gap-2'
                          >
                            <img
                              src='images/png/icons/at-sign.svg'
                              alt='at-sign'
                            />
                            <span>Email Payslip</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <!-- Table section --> */}
                <div className='table-responsive w-full'>
                  <table className='table table-bordered payslip_table' style={{tableLayout: 'auto', minWidth: '100%'}}>
                    <tbody>
                      {/* <!-- Table Header --> */}
                      <tr>
                        <td
                          colSpan='2'
                          className='bg-primary-blue text-white px-4 fw-bold fs-14 px-12px'
                          
                        >
                          Payslip
                        </td>
                      </tr>

                      <tr>
                        {/* <!-- White Space Row --> */}
                        <td
                          style={{ border: '0' }}
                          colSpan='2'
                          className='bg-white px-4 px-12px fw-bold fs-14'
                        >
                          &nbsp;
                        </td>
                      </tr>

                      {/* <!-- White Space Row --> */}
                      {/* <!-- Table Header --> */}

                      {/* <!-- Table Section Header --> */}
                      <tr>
                        <td
                          style={{ border: '0' }}
                          className='bg-primary-blue text-white px-4 px-12px fw-bold fs-14 text-nowrap'
                          
                        >
                          Employee Details
                        </td>
                        <td
                          style={{ border: '0' }}
                          className='bg-primary-blue text-white px-4 px-12px fw-bold fs-14 text-nowrap'
                        >
                          Company Details
                        </td>
                      </tr>
                      {/* <!-- Table Section Header --> */}
                      <tr>
                        <td className='text-black px-4 px-12px fs-14 text-nowrap' style = {{width: '50%'}}>
                          Employee ID: N1UHUHNOPfdghr rget dstt yrtry rtyr yrt ytryry tyerge trte r
                        </td>
                        <td className='text-black px-4 px-12px fs-14 text-nowrap' style = {{width: '50%'}}>
                          Company Name: DELON APP LL.
                        </td>
                      </tr>
                      <tr>
                        <td className='text-black px-4 px-12px fs-14 text-nowrap' style = {{width: '50%'}}>
                          First Name: JOSEPH Olawale Bamidele
                        </td>
                        <td className='text-black px-4 px-12px fs-14 text-nowrap' style = {{width: '50%'}}>
                          Company Address: House 15, Idi Orogbo
                        </td>
                      </tr>
                      <tr>
                        <td className='text-black px-4 px-12px fs-14 text-nowrap' style = {{width: '50%'}}>Address: House 15, Idi Orogbo</td>
                        <td className='text-black px-4 px-12px fs-14 text-nowrap' style = {{width: '50%'}}>
                          Company Phone number: +2347039173237
                        </td>
                      </tr>
                      <tr>
                        <td className='text-black px-4 px-12px fs-14 text-nowrap'>City:</td>
                        <td className='text-black px-4 px-12px fs-14 text-nowrap'>
                          Company Email: jolawale28@gmail.com
                        </td>
                      </tr>
                      <tr>
                        <td
                          className='text-black px-4 px-12px fs-14 text-nowrap'
                          style={{ border: 'none' }}
                        >
                          State:
                        </td>
                        <td
                          className='text-black px-4 px-12px fs-14 text-nowrap'
                          style={{ border: 'none' }}
                        >
                          &nbsp;
                        </td>
                      </tr>

                      <tr>
                        {/* <!-- White Space Row --> */}
                        <td
                          style={{ border: 'none' }}
                          colSpan='2'
                          className='bg-white px-4 px-12px fw-bold fs-14'
                        >
                          &nbsp;
                        </td>
                      </tr>
                      {/* <!-- White Space Row --> */}

                      {/* <!-- Table Header --> */}
                      <tr>
                        <td
                          style={{ border: 'none' }}
                          className='bg-primary-blue text-white px-4 px-12px fw-bold fs-14'
                        >
                          Description
                        </td>
                        <td
                          style={{ border: 'none' }}
                          className='bg-primary-blue text-white px-4 px-12px fw-bold fs-14'
                        >
                          Deductions
                        </td>
                      </tr>

                      {[
                        {
                          left: 'Monthly Fixed Salary',
                          right: 'Tax'
                        },
                        {
                          left: 'Monthly Fixed Salary',
                          right: 'Health Insurance'
                        },
                        {
                          left: 'Monthly Fixed Salary',
                          right: 'Life Insurance'
                        },
                        {
                          left: 'Monthly Fixed Salary',
                          right: 'Temporary Disability Insurance'
                        },
                        {
                          left: 'Monthly Fixed Salary',
                          right: 'Permanent Disability Insurance'
                        },
                        {
                          left: '',
                          right: 'Pension Staff Contribution'
                        },
                        {
                          left: '',
                          right: 'Pension Employer Contribution'
                        },
                        { left: '', right: 'NSITF' },
                        { left: '', right: 'NHF' },
                        {
                          left: '',
                          right: 'Loan or Other Deductions:'
                        },
                        {
                          left: '',
                          right: 'Total Deductions:'
                        },
                        {
                          left: '',
                          right: 'Deductions To Date:'
                        },
                        {
                          left: '',
                          right: 'Tax Year to Date:'
                        },
                        {
                          left: '',
                          right: 'Health Insurance To Date:'
                        },
                        {
                          left: '',
                          right: 'Life Insurance To Date:'
                        },
                        {
                          left: '',
                          right: 'Temporary Disability Insurance To Date:'
                        },
                        {
                          left: '',
                          right: 'Permanent Disability Insurance To Date:'
                        },
                        {
                          left: '',
                          right: 'Pension Staff Contribution To Date:'
                        },
                        {
                          left: '',
                          right: 'Pension Employer Contribution To Date'
                        },
                        {
                          left: '',
                          right: 'NSITF To Date:'
                        },
                        {
                          left: '',
                          right: 'NHF To Date:'
                        }
                      ].map((ele, idx) => (
                        <tr key={`lplpkjnm_${idx}`}>
                          <td className='text-black px-4 px-12px fs-14 text-nowrap'>
                            {ele.left}
                            {ele.left != '' && ': '}
                          </td>
                          <td className='text-black px-4 px-12px fs-14 text-nowrap'>
                            {ele.right}
                            {ele.right != '' && ': '}
                          </td>
                        </tr>
                      ))}

                      {/* <!-- Table Header --> */}
                      <tr>
                        <td
                          colSpan='2'
                          className='bg-primary-blue text-white px-4 fw-bold fs-14 px-12px'
                        >
                          Variable Expenses
                        </td>
                      </tr>
                      {/* <!-- Table Header --> */}

                      {[
                        {
                          left: 'Variable Admin Expense',
                          right: ''
                        },
                        {
                          left: 'Variable Operational Expense',
                          right: ''
                        },
                        {
                          left: 'Bonus or Commission',
                          right: ''
                        },
                        {
                          left: 'Monthly Variable Expense',
                          right: ''
                        },
                        {
                          left: 'Expense Pay Date',
                          right: ''
                        }
                      ].map((ele, idx) => (
                        <tr key={`uyjkhio_${idx}`}>
                          <td className='text-black px-4 px-12px fs-14 text-nowrap'>
                            {ele.left}
                            {ele.left != '' && ': '}
                          </td>
                          <td className='text-black px-4 px-12px fs-14 text-nowrap'>
                            {ele.right}
                            {ele.right != '' && ': '}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* <!-- Table section --> */}
              </div>
              {/* Page Content Box */}
            </div>
          </div>
        </div>
      </section>

      <PayslipGenerateNotice />
    </>
  )
}
