import React, { useState } from 'react';

const sampleEmails = [
  {
    id: 1,
    sender: 'michelle.rivera@example.com',
    name: 'Michelle Rivera',
    subject: 'Query on xxxxxxx',
    body: 'Dear [Employee Name] lorem ipsum lorem ipsum lorem ipsum...',
    fullBody: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.',
    date: '23 June, 2025',
    time: '9:14 AM',
    hoursAgo: 8,
  },
  {
    id: 2,
    sender: 'michelle.rivera@example.com',
    name: 'Michelle Rivera',
    subject: 'Query on xxxxxxx',
    body: 'Dear [Employee Name] lorem ipsum lorem ipsum lorem ipsum...',
    fullBody: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.',
    date: '23 June, 2025',
    time: '9:14 AM',
    hoursAgo: 8,
  },
  {
    id: 3,
    sender: 'michelle.rivera@example.com',
    name: 'Michelle Rivera',
    subject: 'Query on xxxxxxx',
    body: 'Dear [Employee Name] lorem ipsum lorem ipsum lorem ipsum...',
    fullBody: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.',
    date: '23 June, 2025',
    time: '9:14 AM',
    hoursAgo: 8,
  },
  // Add more dummy emails if needed
];

const Inbox = () => {
  const [emails, setEmails] = useState(sampleEmails);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [showReply, setShowReply] = useState(false);

  const handleDelete = (id) => {
    setEmails(emails.filter(email => email.id !== id));
    if (selectedEmail?.id === id) {
      setSelectedEmail(null);
      setShowReply(false);
    }
  };

  return (
    <div className="container-fluid mt-3">
      {selectedEmail ? (
        <div>
          <div className='d-flex justify-content-between'>

            <button onClick={() => setSelectedEmail(null)} className="btn fw-700 mb-3">
              <img
                src="images/png/icons/angle-left.svg"
                className='me-2'
                alt="angle-right-back"
                /> Back
            </button>
            <div className='d-flex gap-3 align-items-center'>
                    <span className='fs-14 text-secondary'>1–50 of 2,619</span>
                    <div className='d-flex'>
                        <a
                      class="page-link border px-3"
                      href="#"
                      aria-label="Previous"
                    >
                      &lsaquo;
                    </a>
                    <a class="page-link border px-3" href="#" aria-label="Next">
                      &rsaquo;
                    </a>
                    </div>
                </div>
          </div>
          <h5 className="fw-700 fs-22 mt-3">{selectedEmail.subject} <img role='button' src="images/png/icons/double-arrow.svg" /></h5>
          <div className='d-flex justify-content-between my-3'>

            <div className='d-flex gap-2'>
            <img src="images/png/icons/user-icons.svg" alt="" />

            <p className="text-muted fs-12 mb-1">
              <strong className='fs-16'>{selectedEmail.name}</strong> &lt;{selectedEmail.sender}&gt; <br />
              to me
            </p>
            </div>
            <p className="text-muted fs-12 fw-500 d-flex gap-2 align-items-center">{selectedEmail.time} ({selectedEmail.hoursAgo} hours ago) 
              <button
                    className="btn btn-sm d-flex align-items-center"
                    onClick={() => handleDelete(selectedEmail.id)}
                    title="Delete"
                  >
                    <img
                              src="images/png/icons/colored/delete.svg"
                              alt=""
                            />
                  </button>
            </p>
          </div>
          <p className="mt-3 ms-lg-5 fs-12">{selectedEmail.fullBody}</p>

          {!showReply && (
            <button onClick={() => setShowReply(true)} className="btn btn-outline-secondary fs-14 d-flex gap-2 mt-5 ms-5"><img role='button' src="images/png/icons/slant-back-arrow.svg" alt="" /> Reply</button>
          )}

          {showReply && (
            <div className="card mt-lg-5 mx-lg-5">
              <div className="card-body">
                <p className="text-muted fs-14 fw-700 mb-2 d-flex gap-3"><img role='button' src="images/png/icons/slant-back-arrow.svg" alt="" /> {selectedEmail.sender}</p>
                <textarea className="form-control mb-3 border-0 fs-14" rows="2" placeholder="Type your reply..."></textarea>
                <div className='d-flex justify-content-between align-items-end'>

                <div className="d-flex gap-3">
                <button className="btn bg-primary-blue text-white">Send</button>
                <img
                src="images/png/icons/attached-icon.svg"
                
                alt="angle-right-back"
                />
                </div>
                <img role='button' onClick={() => setShowReply(false)} src="images/png/icons/colored/delete.svg" alt=""  />
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
            <div className='d-flex justify-content-between mb-4'>

                <h5 className="mb-3 fs-22 fw-700">Sent</h5>
                <div className='d-flex gap-3 align-items-center'>
                    <span className='fs-14 text-secondary'>1–50 of 2,619</span>
                    <div className='d-flex'>
                        <a
                      class="page-link border px-3"
                      href="#"
                      aria-label="Previous"
                    >
                      &lsaquo;
                    </a>
                    <a class="page-link border px-3" href="#" aria-label="Next">
                      &rsaquo;
                    </a>
                    </div>
                </div>
            </div>
          <ul className="list-group">
            {emails.map((email) => (
              <li
                key={email.id}
                className="list-group-item rounded-0 border-0 border-bottom  d-flex justify-content-between align-items-center"
                style={{cursor: 'pointer'}}
              >
                <div onClick={() => setSelectedEmail(email)} className="d-flex justify-content-between align-items-center flex-grow-1 cursor-pointer">
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="view"
                      name="view"
                      
                    />
                    
                  </div>

                  <div className="">{email.name}</div>
                  <div className="fw-bold">{email.subject}</div>
                  <div className="fw-bold">-</div>
                  <small className="text-muted">{email.body}</small>
                  <small className="d-block text-muted">{email.date}</small>
                </div>
                <div className="text-end ms-3">
                  
                  <button
                    className="btn btn-sm d-flex align-items-center"
                    onClick={() => handleDelete(email.id)}
                    title="Delete"
                  >
                    <img
                              src="images/png/icons/colored/delete.svg"
                              alt=""
                            />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Inbox;
