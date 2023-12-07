import React from "react";

async function getUsers() {
  const response = await fetch(
    "https://656c30c6e1e03bfd572e0a8c.mockapi.io/api/v1/users"
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

const page = async () => {
  const users = await getUsers();
  console.log(users);
  return (
    <div>
      <h1>Content page</h1>
      {/* {users.map((user: any) => {
        <div key={user.id}>
          <h1>{user.name}</h1>;
        </div>;
      })} */}
      {users.map((user: any) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default page;
