"use client";

import { useState, useEffect } from "react";
import "./globals.css";
import Link from "next/link";

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
  const [newsItems, setNewItems] = useState([]);

  const fectchNews = async () => {
    const res = await fetch(`/api/news`);
    const data = await res.json();

    setNewItems(data);
  };

  useEffect(() => {
    fectchNews();
  }, []);
  // const [userState, setUserState] = useState([]);

  // const initUsers = async () => {
  //   try {
  //     const users = await getUsers();
  //     setUserState(users);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   initUsers();
  //   console.log("useEffect");
  // }, []);

  type News = {
    id: number;
    title: string;
    image: string;
    content: string;
    date: string;
  };

  return (
    <div>
      <div className="card-container">
        {newsItems.map((newsItem: News) => (
          <div key={newsItem.id} className="card">
            <img src={newsItem.image} alt={newsItem.title} />
            <div className="card-body">
              <h5 className="card-title">{newsItem.title}</h5>
              <p className="card-text">{newsItem.content}</p>
              <p className="card-date">{newsItem.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Visas</th>
          </tr>
        </thead>
        <tbody>
          {userState.map((user: any) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.visas}</td>
              <button> Edit </button>
              <Link href={`/user/${user.id}`}>ดูข้อมูล</Link>
            </tr>
          ))}
        </tbody>
      </table>*/}
    </div>
  );
}
