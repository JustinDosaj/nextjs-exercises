interface ProblemProps {
    title: string;
}

// Basic way to display 
export function Title(props: ProblemProps) {

    const { title } = props;

    return (
        <div className="text-center space-y-1">
            <h1 className="font-bold text-xl text-center">{title}</h1>
            <div className="border border-gray-200"/>
        </div>
    )
}