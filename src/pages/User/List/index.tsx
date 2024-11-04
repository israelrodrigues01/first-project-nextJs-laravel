import TdTable from "@/components/table/TdTable";
import ThTable from "@/components/table/ThTable";
import Link from "next/link";
import { FaRegPenToSquare, FaTrash } from "react-icons/fa6";

const users = [
    {
        id: 0,
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
    },
    {
        id: 1,
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
    },
];


export default function Users() {
    return (
        <div className="pt-10">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <ThTable label="Nome" />
                        <ThTable label="Email" />
                        <ThTable label="Ação" className="w-1" />
                    </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-800">
                    {
                        users.map((element) => (
                            <tr>
                                <TdTable key={element.id}>
                                    {element.name}
                                </TdTable>
                                <TdTable key={element.id}>
                                    {element.email}
                                </TdTable>
                                <TdTable>
                                    <div className="flex items-center gap-2">
                                        <Link href={{
                                            pathname: '/User/Update',
                                            query: { id: element.id },
                                        }}>
                                            <button className="bg-blue-400 text-white p-2 rounded">
                                                <FaRegPenToSquare />
                                            </button>
                                        </Link>
                                        <Link href={{
                                            pathname: '',
                                            query: { id: element.id },
                                        }}>
                                            <button className="bg-red-400 text-white p-2 rounded">
                                                <FaTrash />
                                            </button>
                                        </Link>
                                    </div>
                                </TdTable>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    );
}