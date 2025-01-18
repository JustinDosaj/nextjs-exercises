
interface LayoutProps {
    children: React.ReactNode;
    className?: string;
}

export function Layout({children, className}: LayoutProps) {
    return (
        <div className={`${className} w-screen grid justify-center my-24 space-y-12`}>
            {children}
        </div>
    )
}