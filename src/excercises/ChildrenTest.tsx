import React from "react"
import { Title } from "@/components/Title"
import { Container } from "@/components/Container"
import { TestChild } from "@/components/TestChild"

export function ChildrenTest() {
    return (
        <Container>

            {/* Problem Description */}
            <Title title={"Children Test"}/>

            <TestChild title="My Title">
                <div className="text-red-600 font-bold">
                    Hello
                </div>
                <div className="text-blue-600 font-bold">
                    World
                </div>
            </TestChild>
            
        </Container>
    )
}