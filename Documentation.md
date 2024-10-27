## Welcome to the Fullstack MERN Real Estate project!##

In this application, you will see applications of advanced authentication and search functionality.
I have worked on building authentication functionalities.

The project includes:

- Frontend built with React.js, Tailwind CSS, React Router for navigation, and Redux Toolkit for state management.

- Backend developed using Node.js, Express, and MongoDB Atlas for data storage.

- Firebase for Google OAuth and image hosting.


Each user will have the ability to create new property listings, giving them the flexibility to apply discounted prices and upload up to six images. Furthermore, a user will be able to adjust the number of images associated with their listing even after upload.

The platform lets the users manage their listings effortlessly through their profiles, facilitating editing and updates with ease.

Each listing page will feature an image slider and convenient contact options for potential tenants or buyers.

One of the most exciting aspects of this project is the inclusion of an advanced search functionality. This feature enables users to search by title, limit search results, and apply sorting options through a modern sidebar.

[Note: incomplete word] we will use cutting-edge search query techniques when working with the MongoDB database.

Finally, we will use the Render platform to deploy our fully functional MERN stack real estate application for free. This will enable you to share your creation with others or include it in your portfolio.


As you can see, we have a home page here with a title and also a button to explore more.
Once we click on this button, we are redirected to the listing result page. As you can see, we see the nine listings, and also we have a "Show More" button.
When we click on it, we see the rest of the listings. You can click on each listing and explore each of them. We have an image slider at the top, and also we have the title, description, the number of beds, bath, parking spot, and furniture. And also we can contact the landlord and ask about this listing.

Inside the home page, we also have an image slider. We can see the recent places with offers, recent places for rent, and recent places for sale. And also we have the ability to create a new listing. For example, here, if I click on my profile image, first thing first, we can actually create an account here. So if I sign out, we can see that we can sign up a new user. We have the ability to sign up with username, email, and password. And also we can sign up with Google.

For example, if I click on "Continue with Google" here, I can choose one of my Gmail accounts, for example, this one. And we can go to the profile here. We have the ability to change the image of the user.

Initially, we’ll install ReactJS and Tailwind CSS, and dive into using the most recent version of React Router DOM to create routes and pages.

Then our focus will be on developing authentication pages. The application will have both email and password authentication using JSON Web Token, along with Google OAuth for added convenience.

For state management, we’ll use Redux Toolkit, facilitating the management of global state. Certain pages, including the profile page, will be protected on both the client and backend sides to ensure a secure user experience.

The profile page will offer functionality to update user information, including username, email, and password. Additionally, users will be able to modify the profile image, with Firebase Storage serving as the storage solution for these images.

Account deletion functionality will also be implemented with JSON Web Token cookie validation, ensuring the security of this process.


Key Features


1. User Authentication


- Email & Password Login: Users can log in securely with their email and password. We use JWT (JSON Web Tokens) to keep their sessions secure.
- Google Login: Users can also log in with their Google accounts, making signing in quicker and easier.
- Secure Account Management: Certain pages, like the profile page, are protected to ensure users' information is safe.


2. Listings Management


Create, Update, Delete Listings: Authenticated users can create new property listings, update them, or delete them.

**Image Upload and Compression:** Firebase storage is utilized to handle image uploads, with automatic image compression for optimal storage.
Property Details: Each listing contains property specifications, including bedrooms, bathrooms, pricing, availability of parking, and furnishing status.
Offer Management: Option to list properties with special offers or discounted rates.

3. Search and Filtering


- Search Functionality: Users can search listings by keywords.
Advanced Filters: Filter options include type (rent/sale), availability of parking, furnishing status, and offer status.
Sorting: Listings can be sorted by price, date, and other criteria.


4. User Dashboard

Personalized Dashboard: Users have access to a dashboard to manage their listings and profile settings.
Listing Preview: Users can view their listings as others see them, with a gallery of uploaded images.
Error Handling: Informative messages and error handling for all user actions, such as failed logins or unsuccessful image uploads.


5. Responsive Design

Mobile-Friendly Interface: The project uses Tailwind CSS to ensure responsiveness across different screen sizes.

Project Structure


Frontend (React.js)
The frontend utilizes React.js with Tailwind CSS for styling, and includes the following components:

Pages:

Home: Displays featured listings, including recent offers, properties for rent, and properties for sale.
SignIn / SignUp: Authentication pages with options for both email/password login and Google OAuth.
Profile: User profile page with fields for avatar upload, username, email, and password update.
CreateListing / UpdateListing: Forms to add or modify listings with image upload functionality.
Listing: Individual listing detail page with a gallery view.
Search: Page with filter and sort options for browsing listings.

Components:

- Header: Navigation bar at the top with links to various pages.
- ListingItem: Renders individual listing items on the homepage, search page, and profile.
- OAuth: Component for Google OAuth integration.
- Contact: Component enabling users to contact property owners.

**State Management:**

Redux Toolkit: Used for managing user state, authentication, and listing data.
Redux Persist: Ensures that the state is retained across sessions.
Backend (Node.js, Express.js)
The backend is developed with Express.js and includes the following:

Authentication:

Email/Password Authentication: JWT tokens are generated on successful login.
Google OAuth: Integration with Google OAuth API for seamless login.
Listings Management:

Create, Read, Update, Delete (CRUD) operations for listings.
Image Upload Handling: Uses Firebase for image storage, with checks to ensure only authenticated users can upload.
Data Modeling (MongoDB):

User Schema: Defines user profiles, including fields for username, email, password, and avatar URL.
Listing Schema: Defines listing properties such as name, description, images, price, type, and status.


**API Endpoints:**

/api/auth/signup: User registration.
/api/auth/signin: User login.
/api/auth/signout: User logout.
/api/listing/create: Creates a new listing.
/api/listing/update/:id: Updates an existing listing.
/api/listing/delete/:id: Deletes a listing.
/api/listing/get: Retrieves listings with optional filters.
Error Handling:

Error responses are standardized with appropriate HTTP status codes.
Custom error messages for validation errors, authentication issues, and database failures.


How to Run the Project
Follow these steps to set up and run both the frontend and backend of the FabiRealestate project, as well as enable PWA functionality.

Prerequisites
Ensure you have Node.js and npm installed. You can download Node.js from https://nodejs.org/.
Install MongoDB or set up a MongoDB Atlas database for the backend.


1. **Clone the Repository**


First, clone the project repository:


git clone <repository-url>
cd frontend
cd FabiRealestate
npm run dev

2. **Backend Setup**

Navigate to the backend folder:


cd backend
npm run dev

Install dependencies:

npm install

3. **Set up environment variables:**

Create a .env file in the backend folder and add your MongoDB URI and JWT secret. The file should look like this:

plaintext
Copy code
MONGODB_URI=<Your MongoDB Connection String>
JWT_SECRET=<Your JWT Secret>

4.**Start the backend server:**

npm run dev

The backend server should now be running on http://localhost:3000.

3. **Frontend Setup**
1. Open a new terminal and navigate to the frontend folder:

 cd frontend

2. Install dependencies:

   npm install

3. Start the frontend server:

    npm run dev

The frontend server should now be running on http://localhost:4173 or a similar port as specified by Vite.

4. **Progressive Web App (PWA) Setup**

The FabiRealestate app includes PWA functionality, allowing it to be installed on mobile devices or desktops for an app-like experience.

To enable PWA features:

- *Service Worker:* Ensure you are running the app in production mode. Vite’s PWA plugin only activates the service worker in production builds.

- Build the frontend for production:

    npm run build

- Preview the production build:

    npm run preview

- The PWA should now be available on http://localhost:4173 or the specified preview port. Users visiting the app will see an option to install it, depending on the browser and platform.

5. Accessing the App
Open your browser and go to http://localhost:4173 to access the FabiRealestate frontend. Make sure the backend server is also running at http://localhost:3000 so the frontend can communicate with it.

**Demo Account for Testing**

To help you explore the features of FabiRealestate, you can log in using the following demo account:

Email: test2@gmail.com
Password: Vinter0824

Email: sebbe@gmail.com
Password: Vinter0824

OPPS!

 <!-- I have the CRUD features in my application that are basically users can delete, edit, update and create listings,but I don't have admin that can delete, edit, update and create. -->


 In the *FabiRealestate application*, CRUD functionality is designed to empower individual users with the ability to manage their own property listings. Users have full control over their listings, enabling them to:

**Create Listings:** Users can add new property listings by filling out a form with all necessary details, including images, descriptions, pricing, and property features.

**Read Listings:** Users can view all available listings on the platform, search for specific properties, and filter based on preferences like property type, price, and features.

**Update Listings**: Users have the ability to edit their own listings, allowing them to modify property details as needed to keep the information current and accurate.

**Delete Listings:** Users can remove their own listings from the platform whenever they are no longer available or if they choose to withdraw them.

This application does not include an administrative role with the power to delete, edit, update, or create listings on behalf of other users. Each user is limited to managing only their own listings, ensuring privacy and individual control over personal property information.



## Low-Fidelity Prototyping ##


- https://www.figma.com/design/aMbaI9kZaf4dzh0gvNrAcF/U9-Real-estate-figma?node-id=0-1&t=7e9CFv9zduR3biKE-1


## persons and user stories ##


- https://www.figma.com/design/csppQ4PKRmZJ1zXfp6Qslu/Untitled?node-id=1-50&t=TqKXyylKCIC8Bp7P-1

  
  ## Fire Base ##


- https://console.firebase.google.com/u/0/project/fabiestate-2de79/storage/fabiestate-2de79.appspot.com/files