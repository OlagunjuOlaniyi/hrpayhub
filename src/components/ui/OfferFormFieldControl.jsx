export const FormFieldComponent = (props) => {
  const { className, label, index } = props;
  return (
    <>
      <div className={`form-floating col-md-8 col-12 p-0 ${className}`}>
        <input
          type="number"
          id={`ilugyhdg_${index}`}
          name={label.replaceAll(" ", "")}
          className="form-input deductionInputFields"
          placeholder=" "
        />
        <label htmlFor="date" className="ms-1 fs-12">
          {label} &nbsp;<span>*</span>
        </label>
      </div>
    </>
  );
};
