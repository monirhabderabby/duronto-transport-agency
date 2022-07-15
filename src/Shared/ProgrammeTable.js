import { Table } from "flowbite-react";
import React from "react";

let ProgrammeTable = () => {
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
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            দক্ষিনখান
                        </Table.Cell>
                        <Table.Cell>
                            আলিফ এন্টারপ্রাইজ, ফায়দাবাদ, দক্কিনখান, ঢাকা
                        </Table.Cell>
                        <Table.Cell>ঢাকা</Table.Cell>
                        <Table.Cell>01814820743</Table.Cell>
                        <Table.Cell>
                            <a
                                href="/tables"
                                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >
                                Edit
                            </a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            দক্ষিনখান
                        </Table.Cell>
                        <Table.Cell>
                            বিসমিল্লাহ এন্টারপ্রাইজ, দক্ষিনখান, ঢাকা
                        </Table.Cell>
                        <Table.Cell>ঢাকা</Table.Cell>
                        <Table.Cell>01814820743</Table.Cell>
                        <Table.Cell>
                            <a
                                href="/tables"
                                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >
                                Edit
                            </a>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    );
};

export default ProgrammeTable;
