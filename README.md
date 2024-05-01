features:
- Login Sign Up Page
    - Sign In /Sign up Form
    - redirect to Browse Page
- Browse Page(after authentication)
    - Header
    - Main Movie
        - Tailer in Background
        - Title & Description
        - play button
- NetftixGPT
    - Search Bar
    - Movie Suggestions


Implementation:

- submitHandler: This function firstly checks if the user entered data is valid. If yes, it creates a new user or signs in if user already exists.


- Once the user signs up, we add the data to the redux store to use it anywhere in our app and navigate the user to the browse page

- onAuthStateChanged : This method is used to set up a listener that gets called whenever the user's sign-in state changes. Instead of using the dispatcher function again and again to update user state whenever user signs in or signs out, we're using this onAuthStateChanged method provided by firebase.

- Extracted the logic (for fetching the tmdb movies data and updating the store with this data) from Browse and inserted it inside a custom hook useNowPlayingHook to make Browse comp look cleaner
    Structure of Browse Page:
    i. MainContainer
        - VideoTitle
        - VideoBackground
    ii. SecondaryContainer
        MovieList - Popular
        - MovieCards
        MovieList - Now Playing
        - MovieCards
        MovieList - Trending
        - MovieCards
        MovieList - Horror
        - MovieCards

    
Movie Recommendation using GPT:
-  

        
        