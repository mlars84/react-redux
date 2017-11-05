### Tinder/Redux example
  - Data/State/Application State
    1 - Users(w/ images and chat logs)
    2 - list of current users with a conversation
    3 - list of users to be reviewed
    4 - currently viewed conversation
    5 - currently viewed user for image swiping
  - Views/React/UI/Components/Containers
    1 - ImageCard
    2 - ConversationList (open conversations)
    3 - Like/Dislike Button
    4 - TextList (chat messages)
    5 - TextItem (individual message)

### Reducer
  - A function that returns a piece of the application state. Since our application can have many pieces of state, we can have many reducers. You can have as many reducers as pieces of state. At the end of the day, reducer should just return an array of objects. 

### Containers
  - A Container is a React Component that has a direct connection to the state managed by Redux.
  - React-Redux 
    - forms the bridge between both libraries
    - the only time we get the bridge available is in Containers.
  - Containers are referred to as "Smart Components" as opposed to a normal/dumb component, which does not have any direct connection to Redux. 