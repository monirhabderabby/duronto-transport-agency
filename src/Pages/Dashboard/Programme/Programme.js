import React, { useState } from "react";
import { useQuery } from "react-query";
import Modaltext from "../../../Shared/Modaltext";
import ProgrammeTable from "../../../Shared/ProgrammeTable";

const Programme = () => {
    const [open, setOpen] = useState(false);
    const [district, setDistrict] = useState("");
    const districtList = ["সব", "ঢাকা", "ডেমরা", "গাজীপুর"];
    const handleDistricSelection = (e) => {
        setDistrict(e.target.value);
        console.log(e.target.value);
    };

    const { data, isLoading, refetch } = useQuery(["all", district], () =>
        fetch(`http://localhost:5000/allProgramme?district=${district}`).then(
            (res) => res.json()
        )
    );
    // const { data, isLoading, refetch } = useQuery(["all", district], () =>
    //     fetch(`http://localhost:5000/allProgramme?district=${district}`).then(
    //         (res) => res.json()
    //     )
    // );
    if (isLoading) {
        return;
    }
    return (
        <div className="px-12">
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
            {/* filtering */}
            <section className="text-left p-6">
                <select
                    name="district"
                    onChange={handleDistricSelection}
                    className="w-fit px-4 py-0"
                >
                    {districtList?.map((d, index) => (
                        <option key={index} value={d}>
                            {d}
                        </option>
                    ))}
                </select>
            </section>
            <div>
                <ProgrammeTable data={data} />
            </div>
            {open && (
                <Modaltext open={open} setOpen={setOpen} refetch={refetch} />
            )}
        </div>
    );
};

export default Programme;
