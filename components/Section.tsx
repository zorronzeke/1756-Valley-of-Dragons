import React from 'react';
export function Section({ id, title, children }:{id:string, title:string, children:React.ReactNode}){
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      {children}
    </section>
  );
}
