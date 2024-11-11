import React, { useState } from "react"
import { Problem } from "@/components/Problem"
import { InsertTextDocProblem } from "@/constants/problem-desc"
import { Container } from "@/components/Container"

export function InsertTextDoc() {

    const [loading, setLoading] = useState<boolean>(false)
    const [document, setDocument] = useState<string>('')
    const [text, setText] = useState<string>("")
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (!loading) {
            e.preventDefault()
            addTextToDoc()
            setText('')
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !loading) {
            e.preventDefault()
            addTextToDoc()
            setText('')
        }
    }

    const addTextToDoc = () => {
        let newDoc = `<p class="highlight-class">${text}</p>`
        setDocument(document + newDoc)
        startColorChange()
    }

    const startColorChange = () => {
        console.log("Starting color change")
        setTimeout(() => {
            setDocument((doc) => { 
                setLoading(false)
                let d = doc.replace(` class="highlight-class"`, '')
                return d;
            })
        }, 2000)
    }

    return (
        <Container>
            {/* Problem Description */}
            <Problem problem={InsertTextDocProblem}/>

            {/* Solution */}
            <div>
                <form onSubmit={handleSubmit}>
                    <textarea 
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="border w-96"
                    />
                </form>
                <div dangerouslySetInnerHTML={{ __html: document }} />
            </div>
        </Container>
    )
}