import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data";

export default function App() {
    const cards = data.map(items => {
        return (
            <Card 
            img = {items.locationImg}
            location = {items.location}
            map = {items.googleMapUrl}
            title = {items.title}
            startDate = {items.startDate}
            endDate = {items.endDate}
            description = {items.description}
            />
        )
    }

    )
    return (
        <div>
        <Navbar />
        <section>{cards}</section>
        </div>
    )
    
}