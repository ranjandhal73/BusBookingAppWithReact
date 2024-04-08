import { useState,useEffect } from "react";

function FilteredBus({onFilter}){
    const [isFilteredBus, setIsfilteredBus] = useState('all');

    const filteredBus = (e) =>{
        console.log("Filtered bus componrnjygrtfv");
        const selectedBus = e.target.value;
        setIsfilteredBus(selectedBus)
        onFilter(selectedBus)
    }

    return (
        <div className=" flex text-center items-center flex-col w-full">
            <h1 className="text-black text-3xl mb-3">Find Your Buss</h1>
            <select className="border border-black mb-6" onChange={filteredBus} value={isFilteredBus}>
                <option value="all">All</option>
                <option value="bus1">BUS1</option>
                <option value="bus2">BUS2</option>
                <option value="bus3">BUS3</option>
            </select>
        </div>
    )
}
export default FilteredBus;