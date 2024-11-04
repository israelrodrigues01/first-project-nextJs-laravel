import Input from "@/components/form/Input";

export default function UserStore() {
    return (
        <div className="h-screen flex items-center">
            <form className="w-[300px] mx-auto">
                <div className="mb-5">
                    <Input label="Nome" id="name" type="text" name="name" placeholder="Digite seu nome..." />
                </div>
                <div className="mb-5">
                    <Input label="Email" id="email" type="email" name="email" placeholder="Digite seu email..." />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Criar Usuário</button>
            </form>
        </div>
    );
}