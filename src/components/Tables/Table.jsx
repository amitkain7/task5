import React, { useState } from "react";
import { data } from "../../index";
import Status from "../Status/Status";

const Table = () => {
    const [expandedRows, setExpandedRows] = useState({});
    const [expandedSubRows, setExpandedSubRows] = useState({});
    const [statusOpen, setStatusOpen] = useState(false)

    const toggleRow = (id) => {
        setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const toggleSubRow = (parentId, id) => {
        setExpandedSubRows((prev) => ({
            ...prev,
            [parentId]: { ...prev[parentId], [id]: !prev[parentId]?.[id] },
        }));
    };

    const handleStatusOpen = (id) => {
        setStatusOpen((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="w-full h-full overflow-y-auto">
            <table className="w-full bg-[#9DCEB2] rounded-lg z-[-1]">
                <thead className="sticky top-0 z-20 bg-[#9DCEB2]">
                    <tr>
                        <th className="py-1.5 px-4 border-[#97c2a5] border-b">S No</th>
                        <th className="py-1.5 px-4 border-[#97c2a5] border-b">Department</th>
                        <th className="py-1.5 px-4 border-[#97c2a5] border-b">Total Task</th>
                        <th className="py-1.5 px-4 border-[#97c2a5] border-b">In Progress</th>
                        <th className="py-1.5 px-4 border-[#97c2a5] border-b">In Pipeline</th>
                        <th className="py-1.5 px-4 border-[#97c2a5] border-b">For Review</th>
                        <th className="py-1.5 px-4 border-[#97c2a5] border-b">Unassigned</th>
                        <th className="py-1.5 px-4 border-[#97c2a5] border-b">Performance</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <React.Fragment key={row.id}>
                            <tr className="cursor-pointer text-center" onClick={() => toggleRow(row.id)}>
                                <td className="py-1 px-4 border-b border-r border-[#97c2a5]">{row.id}</td>
                                <td className="py-1 px-4 border-b border-r border-[#97c2a5]">{row.dept}</td>
                                <td className="py-1 px-4 border-b border-r border-[#97c2a5]">{row.task}</td>
                                <td className="py-1 px-4 border-b border-r border-[#97c2a5]">{row.inProgress}</td>
                                <td className="py-1 px-4 border-b border-r border-[#97c2a5]">{row.inPipeLine}</td>
                                <td className="py-1 px-4 border-b border-r border-[#97c2a5]">{row.review}</td>
                                <td className="py-1 px-4 border-b border-r border-[#97c2a5]">{row.unassigned}</td>
                                <td className="py-1 px-4 border-b border-r border-[#97c2a5]">{row.Performance}</td>
                            </tr>
                            {expandedRows[row.id] &&
                                <tr>
                                    <td className="py-2 px-1" colSpan="8">
                                        <table className="w-full bg-[#bbe6cd] rounded-lg z-0">
                                            <thead className="sticky top-0 bg-[#bbe6cd] z-10">
                                                <tr>
                                                    <th className="py-1 px-4">S No</th>
                                                    <th className="py-1 px-4">Department</th>
                                                    <th className="py-1 px-4">Total Task</th>
                                                    <th className="py-1 px-4">In Progress</th>
                                                    <th className="py-1 px-4">In Pipeline</th>
                                                    <th className="py-1 px-4">For Review</th>
                                                    <th className="py-1 px-4">Unassigned</th>
                                                    <th className="py-1 px-4">Performance</th>
                                                </tr>
                                            </thead>
                                            {row.subRows.map((subRow) => (
                                                <React.Fragment key={subRow.id}>
                                                    <tbody>
                                                        <tr className="cursor-pointer text-center" onClick={() => toggleSubRow(row.id, subRow.id)}>
                                                            <td className="py-1 px-4 border border-[#9DCEB2]">{subRow.id}</td>
                                                            <td className="py-1 px-4 border border-[#9DCEB2]">{subRow.dept}</td>
                                                            <td className="py-1 px-4 border border-[#9DCEB2]">{subRow.task}</td>
                                                            <td className="py-1 px-4 border border-[#9DCEB2]">{subRow.inProgress}</td>
                                                            <td className="py-1 px-4 border border-[#9DCEB2]">{subRow.inPipeLine}</td>
                                                            <td className="py-1 px-4 border border-[#9DCEB2]">{subRow.review}</td>
                                                            <td className="py-1 px-4 border border-[#9DCEB2]">{subRow.unassigned}</td>
                                                            <td className="py-1 px-4 border border-[#9DCEB2]">{subRow.Performance}</td>
                                                        </tr>
                                                        {expandedSubRows[row.id]?.[subRow.id] &&
                                                            <tr>
                                                                <td className="py-2 px-1" colSpan="8">
                                                                    <table className="w-full">
                                                                        <thead className="bg-[#c7e8d1]">
                                                                            <tr>
                                                                                <th className="py-1 px-4">S No</th>
                                                                                <th className="py-1 px-4">Status</th>
                                                                                <th className="py-1 px-4">Task</th>
                                                                                <th className="py-1 px-4">Assigned To</th>
                                                                                <th className="py-1 px-4">Impact</th>
                                                                                <th className="py-1 px-4">Completed Within</th>
                                                                                <th className="py-1 px-4">Assignee</th>
                                                                                <th className="py-1 px-4">Start Date</th>
                                                                                <th className="py-1 px-4">End Date</th>
                                                                            </tr>
                                                                        </thead>
                                                                        {subRow.subSubRows.map((subSubRow) => (
                                                                            <React.Fragment key={subSubRow.id}>
                                                                                <tbody className="bg-[#c7e8d1]">
                                                                                    <tr className="text-center">
                                                                                        <td className="py-1 px-4 border border-[#9DCEB2]">{subSubRow.id}</td>
                                                                                        <td className="py-1 px-4 border border-[#9DCEB2] cursor-pointer" onClick={() => handleStatusOpen(subSubRow.id)}>
                                                                                            {statusOpen[subSubRow.id] ? <Status handleStatusOpen={() => handleStatusOpen(subSubRow.id)} currentStatus={subSubRow.status}/> : subSubRow.status}
                                                                                        </td>
                                                                                        <td className="py-1 px-4 border border-[#9DCEB2]">{subSubRow.task}</td>
                                                                                        <td className="py-1 px-4 border border-[#9DCEB2]">{subSubRow.assignedTo}</td>
                                                                                        <td className="py-1 px-4 border border-[#9DCEB2]">{subSubRow.impact}</td>
                                                                                        <td className="py-1 px-4 border border-[#9DCEB2]">{subSubRow.completeWithin}</td>
                                                                                        <td className="py-1 px-4 border border-[#9DCEB2]">{subSubRow.assignee}</td>
                                                                                        <td className="py-1 px-4 border border-[#9DCEB2]">{subSubRow.startDate}</td>
                                                                                        <td className="py-1 px-4 border border-[#9DCEB2]">{subSubRow.endDate}</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </React.Fragment>
                                                                        ))}
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        }
                                                    </tbody>
                                                </React.Fragment>
                                            ))}
                                        </table>
                                    </td>
                                </tr>
                            }
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default Table;
