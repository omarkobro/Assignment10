# Smart Login System

# Technologies Used : 
- HTML5: Used to create the structure of the web pages.
- CSS3: Utilized for styling and layout of the HTML elements
- Bootstrap: For responsive design and pre-defined styling components.
- Font Awesome: For incorporating icons.
- JavaScript: Implemented for the client-side logic and interactivity.
- SweetAlert: For creating alert messages with better UI than standard JavaScript alerts.
- LocalStorage: For storing user information on the client side.
# Features
- Responsive Design: Utilizes Bootstrap to ensure the application is responsive and works well on various devices.
- User Authentication:
Sign Up: Users can create an account by providing their name, email, and password.

- Validation:
Name must match a specific regex pattern.
Email must be in a valid format.
Password must be between 7 to 15 characters, and include at least one number and one special character.
Duplicate Check: Before adding a new user, the system checks for existing users with the same name or email.
- Alerts: SweetAlert provides feedback on successful sign-up or errors in the input fields.

- Login: Users can log in with their email and password.
Validation: Ensures fields are not empty.
Authentication: Checks credentials against stored user data in localStorage.
Personalized Welcome: Upon successful login, a welcome message with the user's name is displayed.
- Navigation:
Toggling Forms: Users can switch between the login and sign-up forms via provided links.
Logout: A logout button is available that redirects to the home page (index.html).
