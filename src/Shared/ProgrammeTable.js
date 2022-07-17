import { Table } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

let ProgrammeTable = ({ data }) => {
    return (
        <div>
            <Table>
                <Table.Head>
                    <Table.HeadCell>গন্তব্যস্থল</Table.HeadCell>
                    <Table.HeadCell>পরিবেশক</Table.HeadCell>
                    <Table.HeadCell>জেলা</Table.HeadCell>
                    <Table.HeadCell>যোগাযোগ নাম্বার</Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {data?.map((d) => (
                        <>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {d.destination}
                                </Table.Cell>
                                <Table.Cell>{d.Distributor}</Table.Cell>
                                <Table.Cell>{d.district}</Table.Cell>
                                <Table.Cell>{d.contact}</Table.Cell>
                                <Table.Cell>
                                    <Link
                                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                        to="/programmeEdit"
                                    >
                                        Edit
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                        </>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
};

export default ProgrammeTable;
