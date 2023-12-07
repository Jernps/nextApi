import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <nav>
        <ul>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/dashboard/user">User</a>
          </li>
          <li>
            <a href="/dashboard/admin">Admin</a>
          </li>
        </ul>
      </nav>
      {children}
    </section>
  );
};

export default DashboardLayout;
