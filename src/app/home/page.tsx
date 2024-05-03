"use client";
import ClientOnly from "@/utils/ClientOnly";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  return (
    <ClientOnly>
      <div>
        <h1 className="text-center text-5xl font-bold">Hello, world!</h1>
      </div>
    </ClientOnly>
  );
}
