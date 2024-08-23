import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { CiSearch } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactList = contactsSnapshot.docs.map((doc) => doc.data());
        console.log(contactList, "hellow i am new console");
      } catch (error) {}
    };
    getContacts();
  });
  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="flex flex-grow relative items-center">
          <CiSearch className=" ml-1 text-3xl text-white absolute" />

          <input
            type="text"
            className="flex-grow h-10 bg-transparent border border-white rounded-md text-white pl-9"
          />
        </div>

        <FaCirclePlus className="text-5xl text-white  cursor-pointer" />
      </div>
    </div>
  );
}

export default App;
