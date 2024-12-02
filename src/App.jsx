import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import db from './utils/db';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import './App.css'

export const Contact = ({ id, firstName, lastName, email }) => {
  return (
    <div className='contact'>
      <Link to={`/details/${id}`}>
        <h2>{`${firstName} ${lastName}`}</h2>
        <p>{email}</p>
      </Link>
    </div>
  ); 
}

function App() {
  const [contactlist, setContactlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchContactlist = async () => {
    const q = query(collection(db, "contacts"), orderBy("lastName", "asc"))
    const docsSnapshot = await getDocs(q);
    const data = docsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data() 
    }));
    setContactlist(data);
  };

  useEffect(() => {
    fetchContactlist();
  }, []);

  console.log(contactlist);

  return (
    <div className='contact-list'>
      <input
        className='search' 
        type="text" 
        placeholder="Search by first or last name" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      {contactlist
        .filter(contact => 
          contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || 
          contact.lastName.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((contact) => (
          <Contact 
            key={contact.id}
            id={contact.id} 
            firstName={contact.firstName} 
            lastName={contact.lastName} 
            email={contact.email} 
          />
        ))}
      <Link to="/add"><button className='add'>Add Contact</button></Link>
    </div>
  )
}

export default App
