function UserCard({ name, city, age, email, phone }) {
  return (
    <div className="user-card">
      <div className="card-header">
        <div className="avatar">
          {name.charAt(0)}
        </div>

        <div>
          <h2>{name}</h2>
          <p>{city}</p>
        </div>
      </div>

      <div className="user-details">
        <div className="detail">
          <span>Age</span>
          <strong>{age}</strong>
        </div>

        <div className="detail">
          <span>Email</span>
          <strong>{email}</strong>
        </div>

        <div className="detail">
          <span>Phone</span>
          <strong>{phone}</strong>
        </div>

        <div className="detail">
          <span>City</span>
          <strong>{city}</strong>
        </div>
      </div>
    </div>
  );
}

export default UserCard;