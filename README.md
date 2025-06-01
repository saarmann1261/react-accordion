# React Accordion and Form Validation

This project contains two components built with React:

1. **Accordion** – A collapsible section UI that supports both single and multiple item expansion.
2. **Form Validation** – A registration form with client-side input validation.

Both components are styled using **Tailwind CSS**.

---

## Accordion Component

### Features:
- Shows a list of collapsible sections.
- You can allow one or multiple sections to be expanded at the same time.
- Uses simple `useState` logic for toggling.

### How it works:
- A state variable `select` stores which section(s) are open (by index).
- If multiple mode is on, multiple indexes can be stored.
- Clicking a section title updates the `select` state.
- The `multiple` state determines whether one or many sections can be open.


# React Form Validation Component

This is a simple React component for handling user **registration form validation**. It includes fields for name, email, and password with client-side validation logic and clear error messages.

---

## Features

✅ Real-time form state using React's `useState`  
✅ Input validation on form submission  
✅ Inline error messages  
✅ Regex-based email check  
✅ Password length enforcement  
✅ Tailwind CSS styling for clean UI

---

## Validation Rules

- **Name**: Must not be empty.
- **Email**: Must be in a valid email format (e.g. `name@example.com`).
- **Password**: Must be at least 6 characters long.

---

