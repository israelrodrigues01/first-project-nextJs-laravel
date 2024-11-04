import TdTable from "@/components/table/TdTable";
import ThTable from "@/components/table/ThTable";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegPenToSquare, FaTrash } from "react-icons/fa6";
import UserService from '@/services/users/UserService';

interface User {
    id: number;
    name: string;
    email: string;
}

export default function Users() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await UserService.getUsers();
            setUsers(data);
        };

        fetchUsers();
    }, []);

    async function handleDeleteUser(id: number) {
        const response = await UserService.deleteUser(id);
        alert(response.message);
        setUsers((prev) => prev.filter(user => user.id !== id));
    }

    return (
        <div className="pt-10">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <ThTable label="Id" />
                        <ThTable label="Nome" />
                        <ThTable label="Email" />
                        <ThTable label="Ação" className="w-1" />
                    </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-800">
                    {
                        users.map((element) => (
                            <tr key={element.id}>
                                <TdTable>
                                    {element.id}
                                </TdTable>
                                <TdTable>
                                    {element.name}
                                </TdTable>
                                <TdTable>
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
                                        <button className="bg-red-400 text-white p-2 rounded" onClick={() => handleDeleteUser(element.id)}>
                                            <FaTrash />
                                        </button>
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