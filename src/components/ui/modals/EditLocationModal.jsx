import { CloseCircleIcon } from "../../Icons";
import ListOfCountries from "../ListOfCountries";
import ListOfNigStates from "../ListOfNigStates";

export default function EditLocationModal() {
  return (
    <>
      <div
        className="modal fade"
        id="editLocationModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="editLocationModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <form className="modal-content p-4">
            <div className="modal-header border-0 d-flex justify-content-between">
              <div
                className="font-ubuntu-bold fs-5"
                id="editLocationModalLabel"
              >
                Edit Location
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
                    value="Abeokuta"
                  />
                  <label htmlFor="created_date">
                    Work Location &nbsp;<span>*</span>
                  </label>
                </div>

                <div className="form-floating">
                  <select
                    id="location_type"
                    name="location_type"
                    className="form-select_custom"
                    required
                  >
                    <option value="" style={{ color: "rgb(200, 200, 200)" }}>
                      Please choose
                    </option>
                    <option value="">Please select</option>
                    <option value="retail" selected>
                      Retail
                    </option>
                    <option value="primary">Primary</option>
                    <option value="tertiary">Tertiary</option>
                  </select>
                  <label htmlFor="location_type">
                    Location Type &nbsp;<span>*</span>
                  </label>
                </div>

                <div className="form-floating w-100">
                  <textarea
                    id="location_title"
                    name="location_title"
                    className="form-input"
                    placeholder=" "
                    value="8080 Railroad Street"
                  />
                  <label htmlFor="created_date">
                    Address &nbsp;<span>*</span>
                  </label>
                </div>

                <div className="form-floating">
                  <select
                    id="country_edit"
                    name="country_edit"
                    className="form-select_custom"
                    required
                  >
                    <option value="">Please select</option>
                    <option value="UK">UK</option>
                    <option value="Nigeria" selected>
                      Nigeria
                    </option>
                  </select>
                  <label for="country_edit">
                    Country &nbsp;<span>*</span>
                  </label>
                </div>

                <div className="form-floating d-none" id="state_section_edit">
                  <select
                    id="state"
                    name="state"
                    className="form-select_custom"
                    required
                  >
                    <ListOfNigStates />
                    <option value="osun" selected>
                      Osun State
                    </option>
                  </select>
                  <label for="state">
                    State &nbsp;<span>*</span>
                  </label>
                </div>

                <div className="form-floating w-100">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="form-input"
                    placeholder=" "
                    value="Obantoko"
                  />
                  <label htmlFor="city">
                    City &nbsp;<span>*</span>
                  </label>
                </div>

                <div className="form-floating w-100" id="postcode_section_edit">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="form-input"
                    placeholder=" "
                    value="99901"
                  />
                  <label htmlFor="city">
                    Postcode &nbsp;<span>*</span>
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
                id="editNewWorkLocationBtn"
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
