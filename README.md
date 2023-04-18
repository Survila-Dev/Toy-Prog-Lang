# Simple Programming Language and Online Interpreter by Eimantas Survila

This repository entails an interpreter for simple and unique programming language ([toy programming language](https://www.techopedia.com/definition/22609/toy-language)) developed in TypeScript and a React single-page application for the user interaction with this toy programming language.

The online interpreter and the toy programming language in action ([hosted demonstration](https://survila-dev.github.io/Toy-Prog-Lang-01/)):

![Online interpreter in action](online_interpreter_demo.gif)

## Toy programming language

Currently the toy programming language entails the [structured programming](https://en.wikipedia.org/wiki/Structured_programming) elements (if, while, for) and supports the variable types of string, number and boolean.

## Online interpreter

The online interpreter is hosted on [GitHub pages](https://survila-dev.github.io/Toy-Prog-Lang-01/) and enables the editing and interactive evaluation of the code in the simple programming language. The online interpreter entails following functionality:

- The variables are displayed in the execution context and can be altered at any time during the code evaluation.
- Call stack is displayed and additional call stack elements can be added by dragging a line number from the editor to the call stack.
- Multiple pre-written code snippets are available which showcase the functionallity of the simple programming language.
- The code can be evaluated step by step or automatically. In case of the automatic code evaluation the code is evaluated step by step with a set time offset to display the execution context and the call stack during evaluation.
