# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```

## Notes
- Search Bar for youtube API
  - covers exporting modules, classes and state.
- Functional Component vs. ES6 Class: Stephen recommends beginning with a 
functional component and only when you decide you need added functionality should
you refactor to class (fine to use a class even if you don't need it).
- Handling events in React - Two Steps
  - First: declare an event handler - function that should be ran whenever the event occurs
  - Second: we pass the event handler to the element we want to monitor for events e.g. input
- State:
  - a plain js object that is used to record and react to user events. Each class based component we define
  has it's own state obj. Whenever a component is changed the component immediately re-renders and forces
  it's children to re-render as well.
- All JS classes have a special function called `constructor(){}`. It is the first and only func called automatically 
whenever a new instance of the class is created a la inside index.js. It is reserved for doing some setup inside our 
class, like initializing some variables and initializing state. 
- `super()`: When we define a method that is already defined on the parent class, Component, we can call that method 
on the parent class by calling `super()`
- Whenever we use state, we initialize it by creating a new obj and assigning it to `this.state`. The obj we pass
will also contain properties that we want to record in state. 
- ALWAYS MANIPULATE STATE WITH `this.setState({})`!!!

### Controlled Component (has it's value set by state)
- when the input ^ that it's value is provided by this.state.term, we turn it into a controlled component/form element
- value only changes when state changes
- 
