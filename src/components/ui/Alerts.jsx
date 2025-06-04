export const AlertComponent = () => {
  return (
    <section className="alertNotice">
      <div className="screenFrame">
        <div className="mx-4 p-3 rounded-2 d-flex align-items-start justify-content-between gap-3 notice-board">
          <div>
            <img
              src="images/png/icons/colored/warning-2-colored.svg"
              alt="warning-cion"
            />
          </div>
          <div className="vstack gap-2">
            <div className="fw-bold text-red fs-16">Missing Details</div>
            <div className="text-red fs-14">
              Complete profile, employment as if you are the one and department
              setup to proceed.
            </div>
          </div>
          <button className="bg-transparent border-0 p-0 m-0 closeButton">
            <img src="images/png/icons/colored/x.svg" alt="close-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};
