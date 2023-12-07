"use client";

import { useState, useEffect } from "react";
import { submitForm } from "./action";

// อย่างแรกให้เราทำการสร้าง async function สำหรับการ Fetch ข้อมูลจาก API ก่อน
async function getUsers() {
  const response = await fetch(
    "https://656c30c6e1e03bfd572e0a8c.mockapi.io/api/v1/users"
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

export default function Page() {
  const [userState, setUserState] = useState([]);

  const initUsers = async () => {
    try {
      const users = await getUsers();
      setUserState(users);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    initUsers();
    console.log("useEffect");
  }, []);

  return (
    <div>
      <h1>Content page</h1>
      <form action={submitForm}>
        Email: <input type="text" name="email" />
        <button>Submit</button>
      </form>
      <ul>
        {userState.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
