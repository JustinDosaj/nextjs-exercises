/**
 * PROBLEM NAME: Create a typewriter effect
 * 
 * DESCRIPTION: Create an effect that can receive a string and display it on the screen as if it was being typed out
 * 
 * 
 */
import React, {useState, useEffect, useRef } from "react"
import { Container } from "@/components/Container"

interface TypewriterProps {
    text: string,
    speed: number,
}

export function Typewriter({text, speed = 100}: TypewriterProps) {

    const [displayText, setDisplayText] = useState<string>("")
    const displayRef = useRef<string>("")
    const index = useRef(0)
    const reverse = useRef(false)

    useEffect(() => {

        // Callback function for interval
        const type = () => {

            // Set display reference to next character in text then set display text to display reference
            if (index.current < text.length && reverse.current === false) {
                displayRef.current += text.charAt(index.current)
                setDisplayText(() => displayRef.current)
                index.current += 1;
                
                // If displaytext is equal to text prop then we can reverse the string
                if (displayRef.current === text) {
                    reverse.current = true
                }
            
            } 
            
            // Set display reference to previous character in text then set display text to display reference
            else if (reverse.current === true) {
                displayRef.current = displayRef.current.slice(0, -1)
                setDisplayText(() => displayRef.current)
                index.current -= 1;

                // If the length of display ref is 0 then we can begin typing forward again
                if (displayRef.current.length === 0) {
                    reverse.current = false
                }

            } else {
                clearInterval(typingInterval)
            }
        }

        const typingInterval = setInterval(type, speed)

        // Clear interval on unmount to prevent memory leaks
        return () => clearInterval(typingInterval)

    },[text, speed])

    return (
        <Container>
            <div className="typewriter">{displayText}</div>
        </Container>
    )

}