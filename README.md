# Calculator
This is a basic calculator that uses the Formula/Expression Logic. This app use React hooks, such as `useState` to save the formula, and the `useRef` hook to keep track of the last pressed number or operator. That helps the app to handle different inputs from the user:

- Users when inputting numbers, should not be able to begin a number with multiple zeros.

- Users can not put two "." in one number.

- If the users entered 2 or more operators consecutively, the operation performed will be the last operator entered (excluding the negative).

- When the users press an operator immediately after the equal sign, it will start a new calculation that operates on the result of the previous evaluation.

## Installation

- First, use `npm install` to install all the dependencies.

- Start the devolopement server `npm start`.

- For more information please refer to [react-app](/react-app.md)

## Try it !!

https://redapy.github.io/calculator/
