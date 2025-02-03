function FriendList({ friends, setselectFriend, selectFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          setselectFriend={setselectFriend}
          selectFriend={selectFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, setselectFriend, selectFriend }) {
  const idSelected = selectFriend ? selectFriend.id : null;
  console.log("selectfriend" + selectFriend);
  console.log("friend name" + friend.name);
  return (
    <li className={idSelected === friend.id ? "selected" : "friendlist"}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} {Math.abs(friend.balance)} €
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)} €
        </p>
      )}
      {friend.balance === 0 && <p>{friend.name} and you are equivalent</p>}
      <button
        className="button"
        onClick={(e) =>
          setselectFriend(() => (idSelected === friend.id ? null : friend))
        }
      >
        {idSelected === friend.id ? "Close" : "Select"}
      </button>
    </li>
  );
}

export default FriendList;
