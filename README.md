In this tutorial we are going to learn how to implement react useState hook. We would be building a counter app to help us understand how to better use the useState hook.

The React useState Hook allows us to track state in a function component. It enables you to add state to functional components. Calling React.useState inside a function component generates a single piece of state associated with that component. This state can now be passed into another component as props
The useState Hook allows you to declare only one state variable (of any type) at a time.

State generally refers to data or properties that need to be tracked in an application.The state is where you store property values or data  that belongs to the component.

We can manage state in both class and functional components in react, but in this tutorial we'll be concentrating on functional components.

## Declaring state in react

``` import React, { useState } from 'react'; ```

## syntax
The first element is the initial state and the second one is a function that is used for updating the state.

```  const [state, setState] = useState(initialstate) ```


## Creating React Application:

### step 1: Create react app using the following command:

``` npx create-react-app counter_app ```

for a detailed explanation on how to create react app visit [here](https://mic.hashnode.dev/how-to-create-react-app)

after creating the react app navigate to the app.js file and create a counter state to store your initial counter value

```
function App() {
    const [counter, setCounter] = useState(0)
}

```

in the above code snippet, the counter variable is used to hold our value, while the setCounter is a function, we are going to call to increment or decrement the value of the counter.

### Return the counter value

```
import React, { useState } from "react";


function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="counter">
      <h1>{counter}</h1> // pass the counter variable here
    </div>
  );
}

export default App;

```

### start your server using

``` npm start ```

### In your browser go to your localhost 


![counter.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663362000618/AcHIGSnCB.png align="left")



### Create a function to increment the counter 

```
function App() {
  const [counter, setCounter] = useState(0)
  function incrementCounter() {
    setCounter(counter + 1)
  }
  return (
    <div className="counter">
      <h1>{counter}</h1>
    </div>
  );
}

```

In the incrementCounter function, we add 1 to the counter value each time we call it.

### Create a button to implement the increment counter function


```
function App() {
  const [counter, setCounter] = useState(0)
  function incrementCounter() {
    setCounter(counter + 1)
  }
  return (
    <div className="counter">
      <h1>{counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

```
In the code snippet above we added a button with an onClick listner ( to listen for clicks on the button )
Whenever the button is clicked out counter would increase by 1


![ezgif.com-gif-maker.gif](https://cdn.hashnode.com/res/hashnode/image/upload/v1663362931054/kl9W9A3eE.gif align="left")

### Create another function to decrement the value

```
function App() {
  const [counter, setCounter] = useState(0)
  function incrementCounter() {
    setCounter(counter + 1)
  }

  function decrementCounter() {
    setCounter(counter - 1)
  }

  return (
    <div className="counter">
      <h1>{counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
}
```

We created a function to decrease the our counter value, after creating the function, we also created a button that would handle our decrementCounter function.

If we click on our decrement counter button, our counter value would decrease.

![ezgif.com-gif-maker (1).gif](https://cdn.hashnode.com/res/hashnode/image/upload/v1663364462439/48tHUI8Hk.gif align="left")

We can disable the decrement button, so users are not allowed to decrement when the counter value is 0

```
function App() {
  const [counter, setCounter] = useState(0)
  function incrementCounter() {
    setCounter(counter + 1)
  }

  function decrementCounter() {
    setCounter(counter - 1)
  }

  return (
    <div className="counter">
      <h1>{counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button disabled={counter == 0} onClick={decrementCounter}>Decrement</button>
    </div>
  );

```
using the html property we simply disable ( prevent users from clicking ) the button when the counter value is 0

That's all for our basic counter app, with react useState hook

### Rules for using ``` useState ```

- Only call Hooks at the top level
- Only call Hooks from React functions

## Conclusion

useState is a Hook (function) that allows you to have state variables (to store data or values) in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

