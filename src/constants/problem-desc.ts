
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
    url: "https://www.algochurn.com/frontend/insert-text-in-document" 
}

export const FormValidationProblem = {
    name: "Form Validation",
    description: "Create a Form Component in React that renders out a list of input fields and validates them before finally submitting the form to the server. Create the form from scratch WITHOUT using any third-party libraries like Formik or react-hook-forms.",
    instructions: [
        "Create a <Form /> component that renders out a form.",
        "The form will have 5 input fields and labels, that are: First Name, Last Name, Email Address, Password, Confirm Password.",
        "After the user clicks on the Register button, the form should be submitted using the onSubmit attribute on the HTML form.",
        "If a form field doesn't follow the validations, an error should be displayed right below the form field.",
        "If the form fields is being changed and it already has an error in it, the error should be removed and the user should resubmit the form again. In simple words, implement On Blur functionality",
        "If the form has no errors, A green success message should display at the bottom of the page.",
        "Every form element should have a placeholder associated with it."
    ],
    extras: [],
    url: "https://www.algochurn.com/frontend/form-validation" 
}