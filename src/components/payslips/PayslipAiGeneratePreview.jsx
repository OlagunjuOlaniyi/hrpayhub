import { PayslipGenerateNotice } from "../ui/Toast";

export default function PayslipGeneratePreview() {
  return (
    <>
      <section className="px-4 d-none" id="view_employee_payslip">
        <div className="screenFrame">
          <div className="d-flex flex-column justify-content-between">
            <div
              className="rounded-4 shadow p-4 d-flex flex-column gap-5 px-md-5 px-3"
              style={{ flexBasis: "auto" }}
            >
              {/* Page Title */}
              <div className="vstack gap-3">
                <div className="d-flex gap-3 align-items-center">
                  <span className="text-primary-blue font-ubuntu-bold fs-18 inline-block">
                    View AI Insight
                  </span>
                </div>
              </div>
              {/* Page Title */}

              {/* Page Content Box */}
              <div className="vstack gap-4">
                <form
                  className="d-flex gap-lg-4 gap-2"
                  style={{ width: "500px", maxWidth: "100%" }}
                  id="generate_view_payslip_form"
                >
                  <div className="form-section position-relative flex-fill flex-shrink">
                    <label className="fs-14 fw-600">Select Date</label>
                    <input
                      className="form-control w-100 w-md-auto flex-fill py-2"
                      type="date"
                      placeholder="Date input"
                      aria-label="date input"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="delon-primary-btn bg-primary-blue border-0 text-white fw-bold fs-14"
                    >
                      <span>Generate</span>
                    </button>
                  </div>
                </form>

                <div className="d-flex align-items-center justify-content-end gap-4">
                  <button
                    id="back_to_list_of_payslips"
                    className="delon-primary-btn bg-white text-primary-blue border-primary-blue text-decoration-none text-white fw-bold fs-14"
                  >
                    Back
                  </button>
                </div>

                {/* <!-- ai payslip insight --> */}
                <div className="d-flex flex-column gap-2">
                  <h2 className="fs-16 fw-700">AI Payslip Insight </h2>
                  <div
                    className="py-4 px-1 fs-14 rounded-4"
                    style={{ border: "1px solid #2271b6" }}
                  >
                    <ul className="d-flex flex-column gap-2">
                      <li>Net pay increased by 12% compared with last month</li>
                      <li>New transport allowance added this month</li>
                      <li>PAYE is unchanged from last month</li>
                    </ul>
                  </div>
                  <div className="py-4 px-3 fs-14 border rounded-4">
                    <div className="d-flex gap-2">
                      <img src="images/png/icons/caution.svg" alt="" />
                      <div>
                        This is an automated summary. Please review before
                        making decisions.
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Table section --> */}
                <div className="table-responsive w-full">
                  <table
                    className="table table-bordered payslip_table"
                    style={{ tableLayout: "auto", minWidth: "100%" }}
                  >
                    <tbody>
                      {/* <!-- Table Header --> */}
                      <tr>
                        <td
                          colSpan="2"
                          className="bg-primary-blue text-white px-4 fw-bold fs-14 px-12px"
                        >
                          Payslip
                        </td>
                      </tr>

                      <tr>
                        {/* <!-- White Space Row --> */}
                        <td
                          style={{ border: "0" }}
                          colSpan="2"
                          className="bg-white px-4 px-12px fw-bold fs-14"
                        >
                          &nbsp;
                        </td>
                      </tr>

                      {/* <!-- White Space Row --> */}
                      {/* <!-- Table Header --> */}

                      {/* <!-- Table Section Header --> */}
                      <tr>
                        <td
                          style={{ border: "0" }}
                          className="bg-primary-blue text-white px-4 px-12px fw-bold fs-14 text-nowrap"
                        >
                          Employee Details
                        </td>
                        <td
                          style={{ border: "0" }}
                          className="bg-primary-blue text-white px-4 px-12px fw-bold fs-14 text-nowrap"
                        >
                          Company Details
                        </td>
                      </tr>
                      {/* <!-- Table Section Header --> */}
                      <tr>
                        <td
                          className="text-black px-4 px-12px fs-14 text-nowrap"
                          style={{ width: "50%" }}
                        >
                          Employee ID: N1000204
                        </td>
                        <td
                          className="text-black px-4 px-12px fs-14 text-nowrap"
                          style={{ width: "50%" }}
                        >
                          Company Name: DELON APP LL.
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="text-black px-4 px-12px fs-14 text-nowrap"
                          style={{ width: "50%" }}
                        >
                          First Name: JOSEPH Olawale Bamidele
                        </td>
                        <td
                          className="text-black px-4 px-12px fs-14 text-nowrap"
                          style={{ width: "50%" }}
                        >
                          Company Address: House 15, Idi Orogbo
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="text-black px-4 px-12px fs-14 text-nowrap"
                          style={{ width: "50%" }}
                        >
                          Address: House 15, Idi Orogbo
                        </td>
                        <td
                          className="text-black px-4 px-12px fs-14 text-nowrap"
                          style={{ width: "50%" }}
                        >
                          Company Phone number: +2347039173237
                        </td>
                      </tr>
                      <tr>
                        <td className="text-black px-4 px-12px fs-14 text-nowrap">
                          City:
                        </td>
                        <td className="text-black px-4 px-12px fs-14 text-nowrap">
                          Company Email: jolawale28@gmail.com
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="text-black px-4 px-12px fs-14 text-nowrap"
                          style={{ border: "none" }}
                        >
                          State:
                        </td>
                        <td
                          className="text-black px-4 px-12px fs-14 text-nowrap"
                          style={{ border: "none" }}
                        >
                          &nbsp;
                        </td>
                      </tr>
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
    </>
  );
}
