export default function DashboardModuleCard({
  title,
  subtitle,
  icon,
  href,
  color,
}) {
  return (
    <>
      <a
        href={href}
        title={title}
        className="col-3 p-0 inline-block text-decoration-none min-w-400 dashboard_module_card"
      >
        <div
          className={`rounded-4 py-4 px-5 d-flex h-100 flex-column align-items-center justify-content-start gap-2 text-center ${color}`}
        >
          <div>
            <img src={icon} alt={title} />
          </div>
          <div className="font-acme fs-22 text-primary-blue">{title}</div>
          <div className="fw-400 fs-6 text-black">{subtitle}</div>
        </div>
      </a>
    </>
  );
}
