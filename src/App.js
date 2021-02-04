import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import PhoneBookForm from './components/PhoneBookForm';
import InformationTable from './components/InformationTable';

function App() {
    //state
    const [list, setList] = useState([]);
    //saving our dating coming the hook usestate go push all objects data to sort according to last name
    const saveToList = contactObject => {
      //getting the list of contacts into an array
      let tempContactList = Array.from(list);
      //pushing the new contactObject into list
      tempContactList.push(contactObject);
      // sortedContatcList will equal the sort of the temp list by lastname
      let sortedContactList = tempContactList.sort((a,b) => 
        a.userLastname.toLowerCase().localeCompare(b.userLastname.toLowerCase()));
      //setting our state to the sorted list
      setList(sortedContactList);
    }


  return (
    <div className="App">
      <PhoneBookForm
      saveContact={ contactObject => saveToList(contactObject)}
      />
      <InformationTable
      list={list}
      />
    </div>
  );
}

export default App;
