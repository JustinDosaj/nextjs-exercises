import React, { Suspense } from "react"
import { Title } from "@/components/Title"
import { Container } from "@/components/Container"
import { Albums } from "@/components/Albums"

export function AlbumSuspense() {
    return (
        <Container>

            {/* Problem Description */}
            <Title title={"Album Suspense"}/>

            {/* Solution */}
            <Suspense fallback="Loading...">
                <Albums artist="coldplay"/>
            </Suspense>
            
        </Container>
    )
}