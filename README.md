Questionnaire Builder App

Overview

Web-based application for building and completing questionnaires.

Features Implemented

This project includes all requirements from the Base Level and Middle Level, except for drag-and-drop functionality on the questionnaire builder page.

Implemented Features:

Questionnaire catalog page

Displays a paginated list of available questionnaires.

Each questionnaire card shows:

Name

Description

Number of questions

Number of completions

Actions: Edit / Run / Delete

Sorting functionality by:

Name

Number of questions

Number of completions

Questionnaire builder page

Users can create a questionnaire by adding multiple questions.

Supported question types:

Text (free-form input)

Single choice (radio buttons)

Multiple choices (checkboxes)

Ability to re-order questions (drag-and-drop not yet implemented).

Once submitted, questionnaires are stored in the database.

Interactive questionnaire page

Users can complete created questionnaires.

Displays all answers and completion time after submission.

Saves responses in the database.

Supports intermediate completion saving (users can continue from where they left after page refresh).

Technologies Used

Frontend:

React

TypeScript

Tailwind CSS

Backend:

NestJS

MongoDB

Prisma

Deployment

FE-repo: [https://github.com/talafarael/FE-ElifTechTest]

BE-repo: [https://github.com/talafarael/BE-ElifTechTest.git]

Future Improvements

Implement drag-and-drop functionality for reordering questions and answers.

Add infinite scroll pagination for the questionnaire catalog.

Add a questionnaire statistics page with completion time metrics and visual charts.s.org/docs/app/building-your-application/deploying) for more details.
