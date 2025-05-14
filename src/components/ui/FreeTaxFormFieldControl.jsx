export const FormFieldComponent = (props) => {
  const { label, index } = props;
  return (
    <>
      <div className="form-floating col-md-8 col-12 p-0 calculate_tax_input">
        <input
          type="number"
          id={`ilugyhdg_${index}`}
          name={label.replaceAll(" ", "")}
          className="form-input deductionInputFields"
          placeholder=" "
        />
        <label htmlFor="date" className="ms-1">
          {label}
        </label>
      </div>
    </>
  );
};
