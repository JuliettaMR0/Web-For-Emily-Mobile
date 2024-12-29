import React from "react";

const UserSelection = ({ onSelectUser }) => {
  const users = [
    {
      name: "Emily",
      image: "https://i.ibb.co/v3fwgSs/dracomono.png",
      isFunctional: true,
    },
    {
      name: "Kuro",
      image:
        "https://i.pinimg.com/736x/f9/fa/8d/f9fa8d1b123f694649f87998734a4497.jpg",
      isFunctional: false,
    },
    {
      name: "Jazmin",
      image:
        "https://i.pinimg.com/736x/6e/fb/3e/6efb3ef758f496e35363cbed9ccc1ac9.jpg",
      isFunctional: false,
    },
  ];

  return (
    <div className="user-selection">
      <div className="overlay"></div>
      <h1 className="title">¿Quién está viendo?</h1>
      <div className="user-list">
        {users.map((user) => (
          <div
            key={user.name}
            onClick={() => {
              if (user.isFunctional) {
                onSelectUser(user.name);
              }
            }}
            className={`user-card ${user.isFunctional ? "functional" : ""}`}
          >
            <img src={user.image} alt={user.name} className="user-image" />
            <p className="user-name">{user.name}</p>
          </div>
        ))}
        {/* Botón para agregar perfiles */}
        <div className="user-card">
          <div className="add-profile">
            <span className="plus-icon">+</span>
          </div>
          <p className="user-name">Agregar perfil</p>
        </div>
      </div>
      <button className="manage-button">Administrar perfiles</button>
    </div>
  );
};

export default UserSelection;
