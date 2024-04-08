import { useState, useEffect } from "react";
import DispayUser from "./DisplayUser";
import FilteredBus from "./FilteredBus";


function InputBox() {
  const [userList, setUserList] = useState([]);
  const [userDetails, setUserDetails] = useState({email: "",uName: "",phone: "",});
  const [bus, setBus] = useState();
  const [filteredBus, setFilteredBus] = useState([]);
  const [dropdown, setDropdown] = useState('all');

  const changeHandler = (e) => {
    setUserDetails((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const busHandler = (e) => {
    setBus(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newUser = {...userDetails, bus, id: Math.random()};
    console.log(newUser)
    setUserList([newUser, ...userList]);
    setUserDetails({ email: "", uName: "", phone: "" });
    setBus("");
};

const deleteHandler = (idToDelete) =>{
    const updateList = userList.filter((user)=> user.id !== idToDelete);
    setUserList(updateList);
}

const editHandler = (idToEdit) =>{
  const editedUser = userList.find((user)=>user.id === idToEdit);
  const updatedUser = userList.filter((user)=> user.id !== idToEdit)
  setUserList(updatedUser);
  setUserDetails(editedUser)
  setBus(editedUser.bus)
}

const filteredBusHandler = (selectedBus) =>{
  console.log("knjdskzdn");
  setDropdown(selectedBus);
  if(selectedBus === 'all'){
    setFilteredBus(userList)
  }else{
    setFilteredBus(userList.filter((user)=>user.bus === selectedBus))
  }
}

useEffect(()=>{
  filteredBusHandler(dropdown)
},[userList])

  return (
    <>
      <FilteredBus onFilter={(filteredBusHandler)}/>
      <form onSubmit={submitHandler} className="ml-5">
        <label>
          <span>Name:</span>
          <input className="border border-black"
            type="text"
            name="uName"
            onChange={changeHandler}
            value={userDetails.uName}
          />
        </label>
        <br />
        <br />
        <label>
          <span>Email:</span>
          <input className="border border-black"
            type="email"
            name="email"
            onChange={changeHandler}
            value={userDetails.email}
          />
        </label>
        <br />
        <br />
        <label>
          <span>Phone:</span>
          <input className="border border-black"
            type="number"
            name="phone"
            onChange={changeHandler}
            value={userDetails.phone}
          />
        </label>
        <br />
        <br />
        <label>
          <span>Select BUS: </span>
          <select onChange={busHandler}  className="border border-black" value={bus}>
            <option value="select">Select Bus</option>
            <option value="bus1">BUS1</option>
            <option value="bus2">BUS2</option>
            <option value="bus3">BUS3</option>
          </select>
        </label>
        <br /> <br />
        <button type="submit" className="bg-green-700 py-1 px-2 ml-10 text-white rounded">Book</button> <br /> <br />
      </form>
      {
        filteredBus.map((userListDetails)=>{
           return(
                <DispayUser 
                  userDetails={userListDetails} 
                  key={Math.random()} 
                  onDelete={deleteHandler} 
                  onEdit={editHandler}
                />
           ) 
        })
      }
    </>
  );
}
export default InputBox;
