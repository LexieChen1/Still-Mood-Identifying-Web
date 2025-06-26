import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function AddEventPage() {
    const [tripName, setTripName] = useState("");
    const [tripDate, setTripDate] = useState("");
    const [tripAmount, setTripAmount] = useState("");
    const [people, setPeople] = useState([{ name: "", amount: "" }]);

    const navigate = useNavigate();

    const handlePersonChange = (index, field, value) => {
        const updated = [...people];
        updated[index][field] = value;
        setPeople(updated);
      };
    
      const handleAddPerson = () => {
        setPeople([...people, { name: "", amount: "" }]);
      };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      console.log("Trip added:", {
        name: tripName,
        date: tripDate,
        amount: tripAmount,
        people,
      });
  
      navigate("/dashboard");
    };
  
    return (
        <div className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/assets/background.jpg')] text-center font-sans">
            <div className="absolute inset-0 bg-white bg-opacity-70 backdrop-blur-sm z-0" />
            <div className="relative z-10 flex flex-col items-center p-6">
                <h1 className="text-3xl font-mono mb-6">Add New Trip</h1>
                    <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded-xl p-6 w-full max-w-md space-y-4"
                    >
                <div>
                    <label className="block text-sm font-medium mb-1">Trip Name</label>
                    <input
                    type="text"
                    value={tripName}
                    onChange={(e) => setTripName(e.target.value)}
                    required
                    className="w-full border px-3 py-2 rounded"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Trip Date</label>
                    <input
                    type="date"
                    value={tripDate}
                    onChange={(e) => setTripDate(e.target.value)}
                    required
                    className="w-full border px-3 py-2 rounded"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Total Amount</label>
                    <input
                    type="number"
                    value={tripAmount}
                    onChange={(e) => setTripAmount(e.target.value)}
                    required
                    className="w-full border px-3 py-2 rounded"
                    />
                </div>
                
                {/* People section */}
                <div className="space-y-3">
                    <h2 className="text-lg font-semibold">People</h2>
                    {people.map((person, index) => (
                        <div key={index} className="flex space-x-2">
                        <input
                            type="text"
                            placeholder="Name"
                            value={person.name}
                            onChange={(e) => handlePersonChange(index, "name", e.target.value)}
                            className="flex-1 border px-2 py-1 rounded"
                        />
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={handleAddPerson}
                        className="text-forest hover:underline"
                    >
                        + Add Person
                    </button>
                </div>
                    <button
                        type="submit"
                        className="w-full bg-forest hover:bg-green-900 text-white py-2 rounded"
                    >
                        Save Trip
                    </button>
                </form>
            </div>
        </div>
    );
  }