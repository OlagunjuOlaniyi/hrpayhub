import { CloseCircleIcon } from "../../Icons";
import ListOfCountries from "../ListOfCountries";
import ListOfNigStates from "../ListOfNigStates";

export default function AddLocationModal() {
  return (
    <>
      <div
        className="modal fade"
        id="addLocationModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="addLocationModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <form className="modal-content p-4">
            <div className="modal-header border-0 d-flex justify-content-between">
              <div className="font-ubuntu-bold fs-5" id="addLocationModalLabel">
                Add Location
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
                    Work Location &nbsp;<span>*</span>
                  </label>
                </div>

                <div className="form-floating w-100">
                  <textarea
                    id="location_title"
                    name="location_title"
                    className="form-input"
                    placeholder=" "
                  />
                  <label htmlFor="created_date">
                    Address &nbsp;<span>*</span>
                  </label>
                </div>

                <div className="form-floating">
                  <select
                    id="country"
                    name="country"
                    className="form-select_custom"
                    required
                  >
                    <option value="">Please select</option>
                    <option value="UK">UK</option>
                    <option value="Nigeria">Nigeria</option>
                  </select>
                  <label for="country">
                    Country &nbsp;<span>*</span>
                  </label>
                </div>

                <div className="form-floating w-100">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="form-input"
                    placeholder=" "
                  />
                  <label htmlFor="city">
                    City &nbsp;<span>*</span>
                  </label>
                </div>

                <div className="form-floating d-none" id="state_section">
                  <select
                    id="state"
                    name="state"
                    className="form-select_custom"
                    required
                  >
                    <ListOfNigStates />
                  </select>
                  <label for="state">
                    State &nbsp;<span>*</span>
                  </label>
                </div>

                <div
                  className="form-floating w-100 d-none"
                  id="postcode_section"
                >
                  <input
                    type="text"
                    id="postalcode"
                    name="postalcode"
                    className="form-input"
                    placeholder=" "
                  />
                  <label htmlFor="postalcode">
                    Postalcode &nbsp;<span>*</span>
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
                id="addNewWorkLocationBtn"
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
