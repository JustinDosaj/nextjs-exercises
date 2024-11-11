
interface ChildrenProps {
    children: React.ReactNode;
    className?: string;
}


export function Container({children}: ChildrenProps) {
    return (
        <div className="border border-gray-200 rounded-lg p-12 max-w-2xl space-y-4">
            {children}
        </div>
    )
}