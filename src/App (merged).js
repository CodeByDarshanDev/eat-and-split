import "./App.css";
import { useState } from "react";
import FriendList from "./FriendList";
import FormAddfriend from "./FormAddfriend";
import FormSplitBill from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: 0,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 0,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showForm, setShowForm] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectFriend, setselectFriend] = useState(null);

  function handleShowAddFriend() {
    setShowForm(!showForm);
  }

  function handleAddFriends(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowForm(false);
  }
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        selectFriend.id === friend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setselectFriend(null);
  }
  return (
    <>
      <div className="heading">
        <h1>EAT-N-SPLIT</h1>
      </div>
      <div className="app">
        <div className="sidebar">
          <FriendList
            friends={friends}
            setselectFriend={setselectFriend}
            selectFriend={selectFriend}
          />
          <FormAddfriend showForm={showForm} onAddFriends={handleAddFriends} />
          <button className="button" onClick={handleShowAddFriend}>
            {showForm ? "Close" : "Add Friend"}
          </button>
        </div>
        <div>
          {selectFriend && (
            <FormSplitBill
              selectFriend={selectFriend}
              onSplitBill={handleSplitBill}
            />
          )}
        </div>
      </div>
    </>
  );
}

// function FriendList({ friends, setselectFriend, selectFriend }) {
//   return (
//     <ul>
//       {friends.map((friend) => (
//         <Friend
//           friend={friend}
//           key={friend.id}
//           setselectFriend={setselectFriend}
//           selectFriend={selectFriend}
//         />
//       ))}
//     </ul>
//   );
// }
// function Friend({ friend, setselectFriend, selectFriend }) {
//   const idSelected = selectFriend ? selectFriend.id : null;
//   console.log("selectfriend" + selectFriend);
//   console.log("friend name" + friend.name);
//   return (
//     <li className={idSelected === friend.id ? "selected" : "friendlist"}>
//       <img src={friend.image} alt={friend.name} />
//       <h3>{friend.name}</h3>
//       {friend.balance < 0 && (
//         <p className="red">
//           you owe {friend.name} {Math.abs(friend.balance)} €
//         </p>
//       )}
//       {friend.balance > 0 && (
//         <p className="green">
//           {friend.name} owes you {Math.abs(friend.balance)} €
//         </p>
//       )}
//       {friend.balance === 0 && <p>{friend.name} and you are equivalent</p>}
//       <button
//         className="button"
//         onClick={(e) => setselectFriend(idSelected === null ? friend : null)}
//       >
//         {idSelected === friend.id ? "Close" : "Select"}
//       </button>
//     </li>
//   );
// }

// function FormAddfriend({ showForm, onAddFriends }) {
//   const [name, setname] = useState("");
//   const [image, setimage] = useState("https://i.pravatar.cc/48");

//   function handleFormSubmit(e) {
//     e.preventDefault();

//     if (!name || !image) return;
//     const id = crypto.randomUUID();

//     const newFriends = {
//       id,
//       name,
//       image: `${image}?u=${id}`,
//       balance: 0,
//     };
//     onAddFriends(newFriends);
//     setname("");
//     setimage("https://i.pravatar.cc/48");
//   }
//   return (
//     <>
//       {showForm && (
//         <form className="form-add-friend" onSubmit={handleFormSubmit}>
//           <label>1 Friend Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => {
//               setname(e.target.value);
//             }}
//           />

//           <label>2 Image Url</label>
//           <input
//             type="text"
//             alt={name}
//             value={image}
//             onChange={(e) => {
//               setimage(e.target.value);
//             }}
//           />

//           <button className="button">Add</button>
//         </form>
//       )}
//     </>
//   );
// }

// function FormSplitBill({ selectFriend, onSplitBill }) {
//   const [bill, setBill] = useState("");
//   const [userExpance, setuserExpance] = useState("");
//   const friendExpance = bill - userExpance;
//   const [paidBy, setPaidBy] = useState("user");

//   function handleSplitBillForm(e) {
//     e.preventDefault();
//     if (!bill || !userExpance) return;

//     onSplitBill(paidBy === "user" ? friendExpance : -userExpance);
//   }

//   return (
//     <form className="form-split-bill" onSubmit={handleSplitBillForm}>
//       <h2>Split Bill with {selectFriend.name}</h2>
//       <label>▻Bill Value</label>
//       <input
//         type="text"
//         value={bill}
//         onChange={(e) => setBill(Number(e.target.value))}
//       />

//       <label>💵Your Expence</label>
//       <input
//         type="text"
//         value={userExpance}
//         onChange={(e) =>
//           setuserExpance(
//             Number(e.target.value) > bill ? userExpance : Number(e.target.value)
//           )
//         }
//       />

//       <label>💵{selectFriend.name}'s Expance</label>
//       <input type="text" value={friendExpance} readOnly />
//       <label>🤵Who's paying the Bill</label>
//       <select value={paidBy} onChange={(e) => setPaidBy(e.target.value)}>
//         <option value="user">You</option>
//         <option value="friend">{selectFriend.name}</option>
//       </select>
//       <button className="button">Split Bill</button>
//     </form>
//   );
// }

export default App;
