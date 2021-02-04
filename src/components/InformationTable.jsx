import React from 'react';


const InformationTable = ({list}) => {
    return (
        <div>
            <table  className='informationTable'>
            <thead > 
                <tr >
                <th >First name</th>
                <th >Last name</th>
                <th >Phone</th>
                </tr>
            </thead> 
            <tbody>
            {
                //mapping through the sorted array and displaying the info
                list.map((item, idx) =>          
                    <tr key={idx+1}>
                    <td>{item.userFirstname}</td>
                    <td>{item.userLastname}</td>
                    <td>{item.userPhone}</td>
                    </tr>
                )
            }
            </tbody>
        </table>
        </div>
    );
};



export default InformationTable;