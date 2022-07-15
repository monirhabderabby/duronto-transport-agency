import React, { useState } from "react";
import Modaltext from "../../../Shared/Modaltext";
import ProgrammeTable from "../../../Shared/ProgrammeTable";

const Programme = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
                <button
                    className="p-2 my-2 bg-green-400 mx-2 rounded-md text-white hover:bg-green-500"
                    onClick={() => setOpen(!open)}
                >
                    New Programme
                </button>
                <button className="p-2 my-2 bg-green-400 mx-2 rounded-md text-white hover:bg-green-500">
                    New Data Entry
                </button>
                <button className="p-2 my-2 bg-green-400 mx-2 rounded-md text-white hover:bg-green-500">
                    Bill Making
                </button>
            </div>
            <div>
                <ProgrammeTable />
            </div>
            {open && <Modaltext open={open} setOpen={setOpen} />}
        </div>
    );
};

export default Programme;
