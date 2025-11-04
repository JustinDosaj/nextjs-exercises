import React, { useRef, useState } from "react"
import { Title } from "@/components/Title"
import { Container } from "@/components/Container"

export function SimpleCounter() {

    const counter = useRef<number>(0)
    const [ , forceRender] = useState(null)

    const increment = () => {
        counter.current += 1;
        console.log("Ref count: ", counter.current)
    }
    
    return (
        <Container>

            {/* Problem Description */}
            <Title title={"Template"}/>

            {/* Solution */}
            <div>{counter.current}</div>
            <button 
                className="border-1 rounded-md border-gray-500 text-black bg-gray-200 px-4 py-2"
                onClick={increment}
            >
                Increment
            </button>
                        <button 
                className="border-1 rounded-md border-gray-500 text-black bg-gray-200 px-4 py-2"
                onClick={() => forceRender(null)}
            >
                Force Rerender
            </button>
            
        </Container>
    )
}