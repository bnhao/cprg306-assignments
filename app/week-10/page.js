"use client"

import Link from "next/link";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function SignInPage() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      // Sign in to Firebase with GitHub authentication
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      // Sign out of Firebase
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="m-5">
      <header>
        <h1 className="text-3xl text-center">Firebase Authentication</h1>
      </header>
      {user ? (
        <div>
          {/* Display some of the user's information */}
          <p>
            Welcome, {user.displayName}! ({user.email})
          </p>
          <Link href="/week-10/shopping-list">Shopping List</Link>
          <button
            type="button"
            className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <Link href="/week-10/shopping-list">Shopping List</Link>
          <button
            type="button"
            className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>
      )}
    </main>
  );
}
