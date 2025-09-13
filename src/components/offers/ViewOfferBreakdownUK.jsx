import { PayslipGenerateNotice } from "../ui/Toast";

export default function ViewOfferLetter() {
  return (
    <>
      <section className="px-4 d-none" id="view_employee_payslip">
        <div className="screenFrame">
          <div className="d-flex flex-column justify-content-between">
            <div
              className="rounded-4 shadow p-4 d-flex flex-column gap-5 px-md-5 px-3"
              style={{ flexBasis: "auto" }}
            >
              {/* Page Content Box */}
              <div className="vstack gap-4">
                <div className="d-flex align-items-center justify-content-between gap-4 view_offer_breakdown">
                  <span className="text-primary-blue font-ubuntu-bold fs-18 inline-block">
                    Offer Breakdown
                  </span>
                  <button
                    id="back_to_list_of_payslips"
                    className="delon-primary-btn bg-white text-primary-blue border-primary-blue text-decoration-none text-white fw-bold fs-14"
                  >
                    Back
                  </button>
                </div>

                {/* <!-- View section --> */}
                <div
                  class="d-flex flex-column gap-5 border view_offer_breakdown"
                  id="view_employee_details"
                >
                  <div>
                    {[
                      {
                        title: "Employee ID",
                        value: "E1001",
                      },
                      {
                        title: "Offer Letter Date",
                        value: "Lorem Ipsum",
                      },
                      {
                        title: "First Name",
                        value: "Lorem Ipsum",
                      },
                      {
                        title: "Last Name",
                        value: "Lorem Ipsum",
                      },
                      {
                        title: "Pay Grade",
                        value: "Lorem Ipsum",
                      },
                      {
                        title: "Designation",
                        value: "Lorem Ipsum",
                      },
                      {
                        title: "Employment Type",
                        value: "Lorem Ipsum",
                      },
                      {
                        title: "Contract Duration",
                        value: "Lorem Ipsum",
                      },

                      {
                        title: "Probation Period",
                        value: "Lorem Ipsum",
                      },

                      {
                        title: "Manager Name",
                        value: "Lorem Ipsum",
                      },
                    ].map((ele) => (
                      <div class="d-flex">
                        <div class="bg-primary-blue border border-top-0 text-white py-2 px-3 offer_breakdown_width">
                          {ele.title}
                        </div>
                        <div class="text-dark border border-top-0 py-2 px-3 offer_breakdown_width">
                          {ele.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    {[
                      {
                        title: "Address",
                        value: "Lorem Ipsum",
                      },
                      {
                        title: "City",
                        value: "Lorem Ipsum",
                      },

                      {
                        title: "Postcode",
                        value: "Lorem Ipsum",
                      },
                      {
                        title: "Country",
                        value: "UK",
                      },
                      {
                        title: "Branch",
                        value: "Lorem Ipsum",
                      },
                      {
                        title: "Resumption Date",
                        value: "Lorem Ipsum",
                      },
                      {
                        title: "Work Days",
                        value: "Lorem Ipsum",
                      },
                      {
                        title: "Working Hours Per Week",
                        value: "Lorem Ipsum",
                      },
                    ].map((ele) => (
                      <div class="d-flex">
                        <div class="bg-primary-blue border border-top-0 text-white py-2 px-3 offer_breakdown_width">
                          {ele.title}
                        </div>
                        <div class="text-dark border border-top-0 py-2 px-3 offer_breakdown_width">
                          {ele.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    {[
                      {
                        title: "Hourly Rate",
                        value: "Lorem Ipsum",
                      },
                      {
                        title: "Annual Fixed Salary (A)",
                        value: "Lorem Ipsum",
                      },
                      {
                        title: "Bonus (B)",
                        value: "Lorem Ipsum",
                      },
                      {
                        title: "Employee Pension (C)",
                        value: "Lorem Ipsum",
                      },
                      {
                        title: "Gross Annual",
                        value: "Lorem Ipsum",
                      },
                    ].map((ele) => (
                      <div class="d-flex">
                        <div class="bg-primary-blue border border-top-0 text-white py-2 px-3 offer_breakdown_width">
                          {ele.title}
                        </div>
                        <div class="text-dark border border-top-0 py-2 px-3 offer_breakdown_width">
                          {ele.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    {[
                      {
                        title: "Income Tax",
                        value: "Lorem Ipsum",
                      },
                      {
                        title: "National Insurance",
                        value: "Lorem Ipsum",
                      },
                      {
                        title: "Student Loan Plan",
                        value: "Lorem Ipsum",
                      },
                      {
                        title: "Leave Allowance",
                        value: "Lorem Ipsum",
                      },
                      {
                        title: "Employee Pension",
                        value: "Lorem Ipsum",
                      },
                      {
                        title: "Total Deductions",
                        value: "Lorem Ipsum",
                      },
                    ].map((ele) => (
                      <div class="d-flex">
                        <div class="bg-primary-blue border border-top-0 text-white py-2 px-3 offer_breakdown_width">
                          {ele.title}
                        </div>
                        <div class="text-dark border border-top-0 py-2 px-3 offer_breakdown_width">
                          {ele.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    {[
                      {
                        title: "Net Annual Salary",
                        value: "Lorem Ipsum",
                      },
                      {
                        title: "Net Monthly Salary",
                        value: "Lorem Ipsum",
                      },
                      {
                        title: "Net Weekly Salary",
                        value: "Lorem Ipsum",
                      },
                    ].map((ele) => (
                      <div class="d-flex">
                        <div class="bg-primary-blue border border-top-0 text-white py-2 px-3 offer_breakdown_width">
                          {ele.title}
                        </div>
                        <div class="text-dark border border-top-0 py-2 px-3 offer_breakdown_width">
                          {ele.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* <!-- View section --> */}
              </div>
              {/* Page Content Box */}
            </div>
          </div>
        </div>
      </section>

      <PayslipGenerateNotice />
    </>
  );
}
