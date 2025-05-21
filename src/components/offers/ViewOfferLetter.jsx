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
              {/* Page Title */}
              <div className="vstack gap-3">
                <div className="d-flex gap-3 align-items-center">
                  <span className="text-primary-dark font-ubuntu-bold fs-18 inline-block">
                    View Offer Letter
                  </span>
                </div>
              </div>
              {/* Page Title */}

              {/* Page Content Box */}
              <div className="vstack gap-4">
                <div className="d-flex align-items-center justify-content-end gap-4">
                  <button
                    id="back_to_list_of_payslips"
                    className="delon-primary-btn bg-white text-primary-blue border-primary-blue text-decoration-none text-white fw-bold fs-14"
                  >
                    Back
                  </button>
                  <button className="delon-primary-btn bg-primary-blue border-0 text-white text-decoration-none fw-bold fs-14">
                    Download
                  </button>
                </div>

                {/* <!-- View section --> */}
                <div className="d-flex justify-content-center">
                  <img
                    src="images/png/icons/download-view.svg"
                    alt="download view"
                  />
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
