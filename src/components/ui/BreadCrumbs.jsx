import React from 'react'

export default function BreadCrumbs (props) {
  const { data } = props

  return (
    <div className='d-flex align-items-center gap-2 flex-wrap'>
      {data.map((ele, idx) =>
        idx != data.length - 1 ? (
          <React.Fragment key={`ew3s3vdv_${idx}`}>
            <a
              href={ele.url}
              className='fs-14 text-decoration-none text-primary-dark'
            >
              {ele.name}
            </a>
            <img
              src='images/png/icons/angle-right.svg'
              alt='angle-right-back'
            />
          </React.Fragment>
        ) : (
          <span
            key={`lmnbhyi_${idx}`}
            className='fs-16 fw-bold text-primary-blue'
          >
            {ele.name}
          </span>
        )
      )}
    </div>
  )
}
