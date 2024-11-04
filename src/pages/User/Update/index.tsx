import Input from "@/components/form/Input";
import UserService from "@/services/users/UserService";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface User {
    name: string;
    email: string;
}

export default function UserStore() {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();

    const route = useRouter();
    const id = route.query.id;

    useEffect(() => {

        const getUser = async () => {
            const user = await UserService.getUserById(Number(id));
            setName(user.name);
            setEmail(user.email);
        }

        getUser();
    }, [route.query]);

    async function handleUpdateUser(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!name || !email) {
            console.log("Nome e email são obrigatórios.");
            return;
        }

        const user: User = {
            name,
            email,
        };

        const response = await UserService.updateUser(Number(id), user);
        alert(response.message);
    }

    return (
        <div className="h-screen flex items-center">
            <form className="w-[300px] mx-auto" method="POST" onSubmit={handleUpdateUser}>
                <div className="mb-5">
                    <Input label="Nome" id="name" type="text" name="name" placeholder="Digite seu nome..." value={name} setValue={setName} />
                </div>
                <div className="mb-5">
                    <Input label="Email" id="email" type="email" name="email" placeholder="Digite seu email..." value={email} setValue={setEmail} />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Atualizar Usuário</button>
            </form>
        </div>
    );
}