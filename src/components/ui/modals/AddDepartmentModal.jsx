import { CloseCircleIcon } from "../../Icons";
import ListOfCountries from "../ListOfCountries";
import ListOfNigStates from "../ListOfNigStates";

export default function AddDepartmentModal() {
  return (
    <>
      <div
        className="modal fade"
        id="addDeptModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="addDeptModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <form className="modal-content p-4">
            <div className="modal-header border-0 d-flex justify-content-between">
              <div className="font-ubuntu-bold fs-5" id="addDeptModalLabel">
                Add Department
              </div>
              <button
                type="button"
                className="p-0 bg-transparent border-0 pe-auto "
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <CloseCircleIcon />
              </button>
            </div>
            <div className="modal-body">
              <div className="vstack gap-5 w-100">
                <div className="form-floating w-100">
                  <input
                    type="text"
                    id="location_title"
                    name="location_title"
                    className="form-input"
                    placeholder=" "
                  />
                  <label htmlFor="created_date">
                    Department &nbsp;<span>*</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn bg-transparent border-0"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                className="delon-primary-btn bg-primary-blue border-0 text-white fw-bold fs-14 d-flex align-items-center gap-2"
                type="submit"
                id="addDeptBtn"
              >
                <span>Save</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
