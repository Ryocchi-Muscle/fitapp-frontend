import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <div>
      <main>
        <Link href="/SignIn">
          <div className="px-4 py-2 text-white bg-blue-500 rounded tranform hover:bg-blue-400 hover:scale-95 duration-200 w-24">
            ログイン
          </div>
        </Link>
      </main>
    </div>
  );
};

export default SignIn;
