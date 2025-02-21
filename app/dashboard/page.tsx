"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
// import { useAuthStore } from "../../store/authstore";

const dashboard: NextPage = () => {
  const router = useRouter();
  // const user = useAuthStore((state) => state.user);
  const user = { name: "John Doe" };
  useEffect(() => {
    if (!user) {
      // If the user is not logged in, redirect to the login page.
      router.push("/login");
    }
  }, [user, router]);

  if (!user) {
    return <div>Redirecting...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user.name}!</p>
    </div>
  );
};

export default dashboard;
