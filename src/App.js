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
    setShowForm((show) => !showForm);
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
            key={friends.id}
          />
          <FormAddfriend
            showForm={showForm}
            onAddFriends={handleAddFriends}
            key={friends.id}
          />
          <button className="button" onClick={handleShowAddFriend}>
            {showForm ? "Close" : "Add Friend"}
          </button>
        </div>
        <div>
          {selectFriend && (
            <FormSplitBill
              selectFriend={selectFriend}
              onSplitBill={handleSplitBill}
              key={selectFriend.id}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
