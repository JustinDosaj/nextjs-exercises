
interface ITest {
    children: React.ReactNode
    title: string
}

export function TestChild({children, title}: ITest) {
    return (
        <div className="bg-black">
            <p className="text-purple-500">{title}</p>
            {children}
        </div>
    )
}