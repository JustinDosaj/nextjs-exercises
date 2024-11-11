
interface LayoutProps {
    children: React.ReactNode;
    className?: string;
}

export function Layout({children, className}: LayoutProps) {
    return (
        <div className={`${className} w-screen flex justify-center mt-24`}>
            {children}
        </div>
    )
}