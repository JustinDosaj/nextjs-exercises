import React from "react"
import { Problem } from "@/components/Problem"
import { FormValidationProblem } from "@/constants/problem-desc"
import { Container } from "@/components/Container"

export function Form() {
    return (
        <Container>

            {/* Problem Description */}
            <Problem problem={FormValidationProblem}/>

            {/* Solution */}
            <div>Solution</div>
            
        </Container>
    )
}