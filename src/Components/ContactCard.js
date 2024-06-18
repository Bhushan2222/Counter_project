import React from 'react' 

const ContactCard = (contact) => {
  <div className='item' key={contact.id}>
        <div className="content">
          <div className='header'>{contact.name}</div>
          <div>{contact.email}</div>
          <i className='trash alternate outline icon'></i>
        </div>
      </div>
}

export default ContactCard