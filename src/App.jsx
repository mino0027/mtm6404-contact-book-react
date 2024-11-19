import { useState, useEffect } from 'react'
import db from './utils/db'
import {collection, getDocs} from 'firebase/firestore';
import reactLogo from './assets/react.svg'
import './App.css'


function App() {

  const [contactList, setContactList] = useState([]);

  const fetchContactList = async () => {
      const docsSnapshot = await getDocs(collection(db, "contacts"));
      const data = docsSnapshot.docs.map(doc => 
          ({id: doc.id,
          ...doc.data()
      }))
      setContactList(data);
  };

  useEffect(() => {
      fetchContactList();
      }, []);
  
  console.log(contactList);

  return (
      <>
      
      </>
  )
  }

  export default App;