import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div>
      <main>
        <Link href="/SignUp">
          <div className="px-4 py-2 text-white bg-blue-500 rounded tranform hover:bg-blue-400 hover:scale-95 duration-200 w-24">
            新規登録
          </div>
        </Link>
      </main>
    </div>
  );
};

export default SignUp;
