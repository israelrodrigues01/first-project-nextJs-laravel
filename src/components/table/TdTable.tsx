interface TdProps {
    children: React.ReactNode;
}

export default function TdTable(props: TdProps) {
    return (
        <td className="border-b border-slate-100 dark:border-slate-700 px-1 py-3 text-slate-500 dark:text-slate-400">
            {props.children}
        </td>
    );
}