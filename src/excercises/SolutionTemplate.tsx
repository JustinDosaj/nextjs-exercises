import React from "react"
import { Problem } from "@/components/Problem"
import { CheckBoxProblem } from "@/constants/problem-desc"
import { Container } from "@/components/Container"

export function Template() {
    return (
        <Container>

            {/* Problem Description */}
            <Problem problem={CheckBoxProblem}/>

            {/* Solution */}
            <div>Solution</div>
            
        </Container>
    )
}