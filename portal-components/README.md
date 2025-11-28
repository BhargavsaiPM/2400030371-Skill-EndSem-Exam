# Portal Components

This project is a set of reusable components designed for a portal application. It includes customizable Button, Input, and Card components that can be used across different pages.

## Components

### Button
- **File:** `src/components/Button.jsx`
- **Props:**
  - `text`: The text to display on the button.
  - `color`: The color of the button.
  - `style`: Additional styles to apply to the button.

### Input
- **File:** `src/components/Input.jsx`
- **Props:**
  - `placeholder`: The placeholder text for the input field.
  - `type`: The type of the input (e.g., text, password).
  - `style`: Additional styles to apply to the input.

### Card
- **File:** `src/components/Card.jsx`
- **Props:**
  - `title`: The title of the card.
  - `content`: The content to display inside the card.
  - `style`: Additional styles to apply to the card.

## Pages

### Home
- **File:** `src/pages/Home.jsx`
- This page utilizes the Button, Input, and Card components to create a home layout. It demonstrates various customizations using different props.

### Showcase
- **File:** `src/pages/Showcase.jsx`
- This page also uses the Button, Input, and Card components to create a showcase layout, highlighting different styles and texts for the components.

## Setup

To run the project, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies using:
   ```
   npm install
   ```
4. Start the development server with:
   ```
   npm run dev
   ```

## License

This project is licensed under the MIT License.