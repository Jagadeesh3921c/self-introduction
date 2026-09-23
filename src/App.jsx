


    import UserCard from "./UserCard";
import "./App.css";

function App() {
  const users = [
    {
      id: 1,
      name: "Arun Kumar",
      city: "Chennai",
      age: 25,
      email: "arun@gmail.com",
      phone: "9876543210",
    },
    {
      id: 2,
      name: "Priya Sharma",
      city: "Bangalore",
      age: 23,
      email: "priya@gmail.com",
      phone: "9876543211",
    },
    {
      id: 3,
      name: "Karthik Reddy",
      city: "Hyderabad",
      age: 27,
      email: "karthik@gmail.com",
      phone: "9876543212",
    },
    {
      id: 4,
      name: "Divya Singh",
      city: "Mumbai",
      age: 24,
      email: "divya@gmail.com",
      phone: "9876543213",
    },
    {
      id: 5,
      name: "Rahul Verma",
      city: "Delhi",
      age: 26,
      email: "rahul@gmail.com",
      phone: "9876543214",
    },
  ];

  return (
    <div className="app">
      <h1>User Management</h1>
      <p className="subtitle">Parent → Child Data Passing Using Props</p>

      <div className="user-container">
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            city={user.city}
            age={user.age}
            email={user.email}
            phone={user.phone}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
      

    

