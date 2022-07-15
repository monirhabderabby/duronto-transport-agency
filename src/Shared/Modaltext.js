import { Button, Modal, TextInput } from "flowbite-react";
import React from "react";
import Swal from "sweetalert2";
//01851987463
const Modaltext = ({ open, setOpen }) => {
    const handleNewProgramme = (e) => {
        e.preventDefault();
        const destination = e.target.destination.value;
        const Distributor = e.target.পরিবেশক.value;
        const district = e.target.জেলা.value;
        const contact = e.target.যোগাযোগ_নাম্বার.value;
        const programme = { destination, Distributor, district, contact };

        fetch("http://localhost:5000/newProgramme", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(programme),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    setOpen(false);
                }
            });
    };

    return (
        <div>
            <Modal show={open} onClose={() => setOpen(false)}>
                <Modal.Header>Add a New Programme</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <form
                            className="flex flex-col gap-4"
                            onSubmit={handleNewProgramme}
                        >
                            <input
                                type="text"
                                name="destination"
                                placeholder="গন্তব্যস্থল"
                                required={true}
                            />
                            <div>
                                <TextInput
                                    type="text"
                                    name="পরিবেশক"
                                    placeholder="পরিবেশক"
                                    required={true}
                                />
                            </div>
                            <div>
                                <TextInput
                                    type="text"
                                    name="জেলা"
                                    placeholder="জেলা"
                                    required={true}
                                />
                            </div>
                            <div>
                                <TextInput
                                    type="text"
                                    name="যোগাযোগ_নাম্বার"
                                    placeholder="যোগাযোগ_নাম্বার"
                                    required={true}
                                />
                            </div>
                            <Button type="submit">Submit</Button>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </div>
    );
};

export default Modaltext;
