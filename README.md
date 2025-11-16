# Interactive Online CV

This project is a responsive, single-page personal CV website. It is designed to be easily deployable on GitHub Pages and includes features to make it more accessible and user-friendly.

## Features

*   **Responsive Design**: The layout adapts to different screen sizes, from mobile devices to desktops.
*   **Bilingual Translation**: The content can be switched between English and German.
    *   **Automatic Detection**: The website automatically detects the browser's language and sets the initial language.
    *   **Manual Override**: A dropdown menu allows users to manually select their preferred language.
*   **Persistent Language Choice**: The user's language selection is saved in the browser's local storage for future visits.
*   **Downloadable PDF**: A button allows visitors to download the full CV in PDF format.

## Technologies Used

*   **HTML5**
*   **CSS3**
*   **Bootstrap 5**: For responsive design and styling.
*   **JavaScript (ES6)**: For the translation functionality.

## How to Deploy

1.  **Create a new repository on GitHub.**
2.  **Upload all the files from this project** (`index.html`, `styles.css`, `translation.js`, `CV_Sravani_HVenkata_.pdf`, and any other assets) to your new repository.
3.  **Go to your repository's settings.**
4.  **Navigate to the "Pages" section** in the left-hand menu.
5.  **Under "Branch", select your main branch** (usually `main` or `master`) and leave the folder as `/ (root)`.
6.  **Click "Save".**
7.  **Wait a few minutes** for GitHub to build and deploy your site. You will see the URL for your live site in the same section.

## How to Customize

*   **`index.html`**: Open this file to edit the structure of your CV. Most of the text content is now managed through the `translation.js` file.
*   **`styles.css`**: You can change the colors and fonts here to personalize the look of your site.
*   **`translation.js`**: This file contains all the text for your CV in both English and German. To update your personal information, skills, project details, or experience, you will need to edit the `translations` object in this file.
*   **`CV_Sravani_HVenkata_.pdf`**: Replace this file with your own PDF CV to update the download link.
