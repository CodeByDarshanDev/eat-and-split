import { useState } from "react";

function FormAddfriend({ showForm, onAddFriends }) {
  const [name, setname] = useState("");
  const [image, setimage] = useState("https://i.pravatar.cc/48");

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;
    const id = crypto.randomUUID();

    const newFriends = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };
    onAddFriends(newFriends);
    setname("");
    setimage("https://i.pravatar.cc/48");
  }
  return (
    <>
      {showForm && (
        <form className="form-add-friend" onSubmit={handleFormSubmit}>
          <label>1 Friend Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />

          <label>2 Image Url</label>
          <input
            type="text"
            alt={name}
            value={image}
            onChange={(e) => {
              setimage(e.target.value);
            }}
          />

          <button className="button">Add</button>
        </form>
      )}
    </>
  );
}

export default FormAddfriend;
