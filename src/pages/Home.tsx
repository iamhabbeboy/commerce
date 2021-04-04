import React from 'react';
import Card from "../components/Card";

const Home: React.FC = () => {
    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-gray-500 text-lg">Product</h1>
            <div className="flex">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default Home;