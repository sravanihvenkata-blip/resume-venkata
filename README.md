# Interactive Online CV

This project is a responsive, single-page personal CV website. It is designed to be easily deployable on GitHub Pages and includes features to make it more accessible and user-friendly.

## Features

*   **Responsive Design**: The layout adapts to different screen sizes, from mobile devices to desktops.
*   **Bilingual Translation**: The content can be switched between English and German.
    *   **Automatic Detection**: The website automatically detects the browser's language and sets the initial language.
    *   **Manual Override**: A dropdown menu allows users to manually select their preferred language.
*   **Dynamic PDF Generation**: Visitors can download a high-quality, well-formatted PDF version of the CV. This is achieved by rendering a separate, print-optimized HTML template (`cv_print.html`) to ensure a clean and professional document.
*   **Persistent Language Choice**: The user's language selection is saved in the browser's local storage for future visits.

## Technologies Used

*   **HTML5**
*   **CSS3**
*   **Bootstrap 5**: For responsive design and styling.
*   **JavaScript (ES6)**: For the translation and PDF generation functionality.
*   **html2pdf.js**: To generate a PDF from the HTML content.

## How to Deploy

1.  **Create a new repository on GitHub.**
2.  **Upload all the files from this project** (`index.html`, `styles.css`, `translation.js`, `cv_print.html`, `print_styles.css`) to your new repository.
3.  **Go to your repository's settings.**
4.  **Navigate to the "Pages" section** in the left-hand menu.
5.  **Under "Branch", select your main branch** (usually `main` or `master`) and leave the folder as `/ (root)`.
6.  **Click "Save".**
7.  **Wait a few minutes** for GitHub to build and deploy your site. You will see the URL for your live site in the same section.

## How to Customize

*   **`index.html`**: Open this file to edit the main structure of your CV website. The text content is managed through `translation.js`.
*   **`styles.css`**: You can change the colors and fonts for the main website here.
*   **`translation.js`**: This file contains all the text for your CV in both English and German. To update your personal information, skills, project details, or experience, you will need to edit the `translations` object in this file. This is the primary file for content management.
*   **`cv_print.html`**: This is the template for the downloadable PDF. It uses `{{placeholder}}` tags that correspond to the keys in `translation.js`. You can edit the structure of the PDF here.
*   **`print_styles.css`**: This file contains the styling for the PDF version of your CV. You can edit fonts, colors, and layout for the PDF here.