export default function FormContextIndicator(props) {
  const { index } = props;
  return (
    <div className="d-flex flex-row align-items-center gap-3">
      <div
        className="d-flex justify-content-between align-items-center px-2 py-2 gap-2 col-md-3 col-6"
        style={{
          border: "1px solid #C1C1C1",
          borderRadius: "10px",
          width: "91px",
        }}
      >
        <div
          data-bs-html="true"
          data-bs-placement="top"
          data-bs-toggle="tooltip"
          title="<div><div><strong>Turn On/Off</strong></div><em style = 'font-size: 7px'>Enable if applicable; Disable if not</em></div>"
          role="button"
          className="form-check form-switch switchForDeductionsFields"
          style={{ marginTop: "5px", cursor: "pointer" }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id={`lekjeli_${index}`}
            defaultChecked
          />
        </div>
        <div
          data-bs-html="true"
          data-bs-placement="top"
          data-bs-toggle="tooltip"
          title="<div><div><strong>Restore</strong></div><em style = 'font-size: 7px'>Reset to default value</em></div>"
          style={{ cursor: "pointer" }}
        >
          <img src="images/png/icons/refresh.svg" alt="refresh_icon" />
        </div>
      </div>
      <div
        class="col"
        data-bs-html="true"
        data-bs-placement="right"
        data-bs-toggle="tooltip"
        data-bs-custom-class="tooltip-left-align"
        title=""
        style={{ cursor: "pointer" }}
      >
        <img src="images/png/icons/info.svg" alt="info" />
      </div>
    </div>
  );
}
