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

export const CheckBoxProblem = {
    name: "Select All Checkboxes",
    description: "Given a Select All checkbox - toggle the children's checkboxes in such a way that when the select all button is clicked, all the boxes are checked. Similarly, when the button is toggled, the checkboxes become unchecked.",
    instructions: [
        "Create a Checkbox component that takes in checked, onChange and label as props.",
        "A select all checkbox should be there that toggles the state of all the children checkboxes.",
        "If any one of the checkboxes is NOT selected, the select all checkbox should be unchecked.",
        "If all the checkboxes are selected, the select all checkbox should be checked.",
        "Loop through the given listItems array that follows the following structure."
    ],
    extras: [
        "Deselect all list items when unchecking \"Select All\"",
        "Check \"Select All\" when all list items are checked",
    ],
    url: "https://www.algochurn.com/frontend/select-all-checkboxes"
}

export const InsertTextDocProblem = {
    name: "Insert Text In Document",
    description: "Given a textarea and a document box, Insert the text in the document in such a way that it HIGHLIGHTS the text content which is most recently added to the document.",
    instructions: [
        "The <Document /> component should contain two major elements, textarea and a div acting as the document container.",
        "On enter press, the text inside of the textarea should be added to the document.",
        "When the text is added inside of the document, the recently added text should have a blue highlight, which should fade away after 2 seconds.",
        "Textarea field should be cleared after the text is submitted / when enter is pressed.",
        "Optimize your component for best performance."
    ],
    extras: [],
    url: "https://www.algochurn.com/frontend/select-all-checkboxes" 
}