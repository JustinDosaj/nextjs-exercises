/**
 * PROBLEM NAME: Select All Checkboxes
 * 
 * DESCRIPTION: Given a Select All checkbox - toggle the children's checkboxes 
 * in such a way that when the select all button is clicked, all the boxes are checked. 
 * Similarly, when the button is toggled, the checkboxes become unchecked.
 * 
 * INSTRUCTIONS:
 * 1. Create a Checkbox component that takes in checked, onChange and label as props.
 * 2. A select all checkbox should be there that toggles the state of all the children checkboxes.
 * 3. If any one of the checkboxes is NOT selected, the select all checkbox should be unchecked.
 * 4. If all the checkboxes are selected, the select all checkbox should be checked.
 * 5. Loop through the given listItems array that follows the following structure.
 * 
 */

import React, { useState, useEffect } from "react"
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