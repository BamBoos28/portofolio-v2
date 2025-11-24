"use client";

import React from "react";

const sampleData = [
  { id: 1, title: "Item A", h: 120 },
  { id: 2, title: "Item B", h: 200 },
  { id: 3, title: "Item C", h: 160 },
  { id: 4, title: "Item D", h: 240 },
  { id: 5, title: "Item E", h: 140 },
  { id: 6, title: "Item F", h: 180 },
  { id: 7, title: "Item G", h: 110 },
  { id: 8, title: "Item H", h: 300 },
  { id: 9, title: "Item I", h: 130 },
];

export default function ColumnWrapDemo() {
  return (
    <section className="p-6">
      <h3 className="text-xl font-semibold mb-4">Column-wrap demo (max 4 per column)</h3>
<div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
  {Array.from({ length: 12 }).map((_, i) => (
    <div
      key={i}
      className="mb-6 break-inside-avoid rounded-xl bg-white shadow p-4"
    >
      <h2 className="text-lg font-bold">Item {i + 1}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        {i % 2 === 0 && " Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        {i % 3 === 0 && " Tambahan text untuk tinggi acak."}
      </p>
    </div>
  ))}
</div>


    </section>
  );
}
