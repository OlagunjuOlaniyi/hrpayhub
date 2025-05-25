export default function FormContextIndicator(props) {
  const { index } = props;
  return (
    <div
      className="d-flex justify-content-between align-items-center px-2 gap-2 col-md-3 col-12 calculate_tax_indicator"
      style={{ border: "1px solid #C1C1C1", borderRadius: "10px" }}
    >
      <div
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
      <div style={{ cursor: "pointer" }}>
        <img src="images/png/icons/refresh.svg" alt="refresh_icon" />
      </div>
      <div style={{ cursor: "pointer" }}>
        <img src="images/png/icons/colored/edit-2.svg" alt="edit_icon" />
      </div>
    </div>
  );
}
