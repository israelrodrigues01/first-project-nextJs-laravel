interface ThProps {
    label: string;
    className?: string;
}

export default function ThTable(props: ThProps) {
    return (
        <th className={`border-b dark:border-slate-600 font-medium py-4 text-slate-400 dark:text-slate-200 text-start ${props.className}`}>
            {props.label}
        </th>
    );
}