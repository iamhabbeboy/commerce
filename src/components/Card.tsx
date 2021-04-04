import React from "react";

const Card: React.FC = () => {
  return (
    <div className="rounded-md bg-white h-200 w-60 overflow-hidden ml-4 border border-gray-200">
         <img className="w-full h-56 object-cover object-center" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />
        <h1 className="pl-0 p-3 text-black">Valentine gift</h1>
        <h2>$90,000</h2>
        <button className="bg-purple-400 rounded-md text-sm text-white p-2"> Add to Cart</button>
    </div>
  );
};

export default Card;
