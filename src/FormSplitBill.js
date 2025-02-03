import { useState } from "react";

function FormSplitBill({ selectFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [userExpance, setuserExpance] = useState("");
  const friendExpance = bill - userExpance;
  const [paidBy, setPaidBy] = useState("user");

  function handleSplitBillForm(e) {
    e.preventDefault();
    if (!bill || !userExpance) return;

    onSplitBill(paidBy === "user" ? friendExpance : -userExpance);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSplitBillForm}>
      <h2>Split Bill with {selectFriend.name}</h2>
      <label>▻Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>💵Your Expence</label>
      <input
        type="text"
        value={userExpance}
        onChange={(e) =>
          setuserExpance(
            Number(e.target.value) > bill ? userExpance : Number(e.target.value)
          )
        }
      />

      <label>💵{selectFriend.name}'s Expance</label>
      <input type="text" value={friendExpance} readOnly />
      <label>🤵Who's paying the Bill</label>
      <select value={paidBy} onChange={(e) => setPaidBy(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectFriend.name}</option>
      </select>
      <button className="button">Split Bill</button>
    </form>
  );
}

export default FormSplitBill;
