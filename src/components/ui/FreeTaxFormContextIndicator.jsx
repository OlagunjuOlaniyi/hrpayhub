export default function FormContextIndicator(props) {
  const { index } = props;
  return (
    <div
      className="d-flex justify-content-between align-items-center gap-2 col-md-3 col-12 calculate_tax_indicator"
      style={{ width: "55px" }}
    >
      <div style={{ cursor: "pointer" }}>
        <img src="images/png/icons/refresh.svg" alt="refresh_icon" />
      </div>
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
    </div>
  );
}
