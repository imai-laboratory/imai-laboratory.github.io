"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const URL = "https://www.ailab.ics.keio.ac.jp/welcome-junior";

export default function B3Page() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount - 1;
        if (newCount < 0) {
          window.location.href = URL;
          return 0;
        }
        return newCount;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container my-4">
      <div className="box">
        <h2 className="title is-4">
          <Link href={URL}>Welcome Page</Link>
        </h2>
        <p>Redirect ({count} seconds)</p>
      </div>
    </div>
  );
}
