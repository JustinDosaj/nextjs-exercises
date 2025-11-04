import React from "react"
import { Title } from "@/components/Title"
import { Container } from "@/components/Container"
import { Data } from "@/components/Data"

export function ErrorExcercise() {
    return (
        <Container>

            {/* Problem Description */}
            <Title title={"Error Handling Excercise"}/>

            {/* Solution */}
            <Data city="Austin" hasError={true}/>
            <Data city="New York"/>
            <Data city="San Diego"/>

        </Container>
    )
}