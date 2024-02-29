import React from "react";
import Lupa from "./svg/Lupa";
import Options from "./svg/Options";

const SearchBar = () => {
    return (
        <div className="flex items-center bg-gray-200 rounded-lg p-2">
            <Lupa className="h-6 w-6 text-gray-400 mr-2" />
            <input
                type="text"
                placeholder="Search..."
                className="w-full outline-none text-gray-900 p-2 bg-transparent"
            />
            <Options className="h-6 w-6 text-gray-400 ml-2" />

        </div>
    );
};

export default SearchBar;
