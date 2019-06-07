# Sprint Challenge: Lambda Times (React)

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Intermediate React, React Tooling, The React Life-cycle, React Composition Patterns and CSS-in-JS. In this Sprint Challenge, you will demonstrate proficiency by creating an application that uses to build a fully-functioning replicate of the LA-Times website.

Remember, this is a way for you to analyze your understanding of the concepts presented this week. Feel free to reference old code, but please refrain from copy/pasting, even rewriting old code can teach you something new! Take your time, and have fun!

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency Intermediate React and your command of the concepts and techniques in the React Tooling, The React Life-cycle, React Composition Patterns and CSS-in-JS modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

For the Lambda Times challenge you will create a React application that replicates the[LA Times Website](http://www.latimes.com). Throughout this challenge you will take a Vanilla JavaScript app, and convert it to a React app. Much of the initial work has been done, but there are some missing pieces you will need to complete to get the app working properly.

Your base React app has already been created, and includes some components. Included as well is a CSS file that you may reference when writing your own code.

Look through the application code. If you have the old Lambda Times (Applied JavaScript) sprint challenge handy, you may compare how the structure of this app differs from that, noting how React gives us very easy to use concise components.

## Self-Study/Essay Questions

- [x] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
    - PropTypes are a way for us to check our props within each component without having to render them.
    - Sometimes, we may accidentally use the wrong type of property in our code. (for example, if we needed text in a <div> tag and we called an object instead of a string) This could give us an error, or display strange things on the page. Even worse, sometimes we may not even see the error displayed until much later. By using PropTypes, we can ensure that all of our props are the type they should be without having to scan our entire webpage for tiny, potentially hidden errors.

- [ ] Describe a life-cycle event in React.
    - With React, each component has a life-cycle. The life-cycle starts with mounting the component, continues with any updates the component will make, and then ends with Unmounting the component.
    - When a component is mounted, it constructs the function(using a constructor if it is a class), receives props, and renders the initial page.
    - When a component is updated(caused by new props, a state change, or a forced update), it re-renders the page, implementing any new data it has.
    - When a component Unmounts, the any data the component was displaying in the browser is removed, and teh component doesn't show anything until the it is Mounted again.
    - Each phase of the life-cycle has specific methods related to it that can help coders perform specific actions during certain points in the life-cycle. If you want an action completed right after Mounting the component, use componentDidMount(). If you want to run code right before a component update, use componentWillMount(). These method names are closely related to the React life-cycle; if you can remember the life-cycle, the methods are easy to remember as well.


- [ ] Explain the details of a Higher Order Component.
    - A higher order component(HOC) is simply a component that receives and uses components as parameters.
    - With authentication systems, an HOC can take in functions as parameters and then use conditional statements to determine which Component(s) to display. With styled components, you can use an HOC to 'import' all the styles from a previous component while still adding more styles on top.
    - NOTE: When using Higher Order Components, you only need to import the components you will use within the HOC when you INVOKE/CALL the Component. If you have a separate file where you declare the component, you do not need to import extra components there.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.
    - 1: Plain CSS, or SASS/LESS
        - This is what most developers started out using. Basic style sheets. They're simple, easy-to-use, and pretty much error-free. If JS is something new to you, or you're working with other designers who will be styling as you code, then it's always safe to stick with this layout.
    - 2: React-Strap
        - Familiar with Bootstrap? React-strap will be an easy adaptation. By using preset components with some modifyable properties and classes, you can create a quick grid system add in swiftly styled buttons, and much more. If CSS isn't your thing, learning and using react-strap can come in handy.
    - 3: Styled Components
        - We've seen HTML inside of JS, but what about CSS? Styled Components allow you to create your own component names with specific styles attached to them. The greatest benefit here is that you can now include all of your classic JS syntax (functions, variables, etc) and Styled Components will pick it up without a hitch. Want to nest styles? You can do it. Want to pass props into the Component? Just like normal components, you can do that- _and_ you can use those props within your Styled Components as a function. If you're comfortable with CSS/SASS, and you love JS, then styled components might be the best way to go.

## Project Setup

Follow these steps to set up your project:

- [x] Create a forked copy of this project.
- [x] Add your project manager as collaborator on Github.
- [x] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [x] Create a new branch: git checkout -b `<firstName-lastName>`.
- [x] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [x] Push commits: git push origin `<firstName-lastName>`.
- [x] From within the `lambdatimes` folder run `npm install` and then `npm start`. This will open your locally hosted application in your browser. Once you are ready move onto the next steps.
- [x] Inside the `Content` folder you will find all 5 components that make up the content of the application. The flow goes like this: `Content > Tabs > Tab` and `Content > Cards > Card`. Follow the directions in the `Content` component to get your data ready.

Follow these steps for completing your project.

- [x] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repository). **Please don't merge your own pull request**
- [x] Add your project manager as a reviewer on the pull-request
- [x] Your project manager will count the project as complete by merging the branch back into master.

## Minimum Viable Product

- [x] Go through the `Tabs`, `Tab`, `Cards`, and `Card` components following the instructions, and passing data and props to get the tabs and cards to appear on the screen.
- [x] Once the Tabs and Cards are rendering to the screen complete the `changeSelected` and `filterCards` functions in the `Content` component.
- [x] You should now be able to filter cards using your tabs!
- [x] Make sure all of your props being passed are validated using PropTypes.
- [x] Find the `TopBar` and `Header` components. Convert these two components to Styled Components. You should not have any `className` props when you are finished.

## Stretch Challenge

There are multiple stretch challenges available to you, you may attempt these in any order. Remember, stretch challenges are only to give you extra time to work on these concepts, if you do not get to these challenges, that is fine! Continue working on your main objectives.

- [ ] Re-factor the app, so that it uses ALL styled components. There should be no `className` props on any component. To truly test this, delete the CSS file.

- [x] You will find a `Carousel` component in your Content folder. Complete this component, rendering a functional carousel. Add this component between your `Tabs` and `Cards` components within the `Content` component. Added challenge: make it so that there is infinite scroll to the right and the left.

- [ ] Add a login and an HOC. Make it so that when a user clicks on the login button at the top, a login modal is shown (Use React-strap). Have a user login, validating the login credentials on the `localStorage`. Add a Higher Order Component that wraps the `Content` component, only allowing it to render once a user has logged in. For more instructions see this README: [React-Insta-Clone: Day III](https://github.com/LambdaSchool/React-Insta-Clone/blob/master/DAY_THREE_README.md#tasks-day-iii)
