import React from 'react'

const CookieCard = () => {
  return (
    <div className="cookie-card">
    <span className="title">🍪 Cookie Notice</span>
    <p className="description">We use cookies to ensure that we give you the best experience on our website. <a href="#">Read cookies policies</a>. </p>
    <div className="actions">
        <button className="pref">
            Manage your preferences
        </button>
        <button className="accept">
            Accept
        </button>
    </div>
</div>
  )
}

export default CookieCard