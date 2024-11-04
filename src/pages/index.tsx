import { FaPlus } from "react-icons/fa6";
import Link from "next/link";
import Users from "@/pages/User/List/index";

export default function Home() {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <h1 className="font-medium text-xl text-gray-500">Usuários</h1>
        <Link href={'/User/Store'}>
          <button className="bg-blue-600 rounded px-2 py-1 text-sm text-white flex items-center gap-2"><FaPlus /> Adicionar usuários</button>
        </Link>
      </div>

      <Users />
    </div>
  );
}
