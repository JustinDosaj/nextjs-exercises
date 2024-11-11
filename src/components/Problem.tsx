import { Container } from "./Container"

interface ProblemProps {
    problem: {
        name: string,
        description: string,
        instructions: string[],
        extras: string[],
        url?: string,
    }
}

// Basic way to display 
export function Problem({problem}: ProblemProps) {
    return (
        <div>
            <div className="flex items-baseline justify-between">
                <h1 className="font-bold text-xl">{problem.name}</h1>
                <button className="text-xs underline" onClick={() => problem.url ? window.open(problem.url) : () => null}>See Problem</button>
            </div>
            <p className="flex-wrap mt-2">{problem.description}</p>
            
            <div className="mt-6 space-y-2">
                <label className="font-semibold text-lg mt-6">Instructions</label>
                <ol className="list-decimal space-y-4">
                    {problem.instructions.map((instruction, index) => <li key={index}>{instruction}</li>)}
                </ol>
            </div>
            <div className="mt-6 space-y-2">
                <label className="font-semibold text-lg">Extras</label>
                <ol className="list-decimal space-y-4">
                    {problem.extras.map((instruction, index) => <li key={index}>{instruction}</li>)}
                </ol>
            </div>
            <div className="mt-6 space-y-2">
                <label className="font-semibold text-lg">Demo</label>
            </div>
        </div>
    )
}