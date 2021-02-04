import React from 'react';


const PhoneBookForm = ({saveContact}) => {
    //handle all the data the we from our event in form and getting the vakue from our e evet object
    const hanldeSubmit = e => {
        //preventing default action of the form
        e.preventDefault();
        //declaring input values to be changed
        let firstName = e.target.userFirstname.value;
        let lastName = e.target.userLastname.value;
        let phone = e.target.userPhone.value;
        //bringing the contact object to the parent state
        saveContact({
            userFirstname: firstName, 
            userLastname: lastName, 
            userPhone: phone
        });
    }
    return (
        <form onSubmit={hanldeSubmit}  >
        <label >First name:</label>
        <br />
        <input 
            
            className='userFirstname'
            name='userFirstname' 
            type='text'
            defaultValue="Coder"
        />
        <br/>
        <label >Last name:</label>
        <br />
        <input 
            
            className='userLastname'
            name='userLastname' 
            type='text' 
            defaultValue="Byte"
        />
        <br />
        <label >Phone:</label>
        <br />
        <input
            
            className='userPhone' 
            name='userPhone' 
            type='text'
            defaultValue="8885559999"
        />
        <br/>
        <input 
            
            className='submitButton'
            type='submit' 
            value='Add User' 
        />
    </form>
    );
};



export default PhoneBookForm;