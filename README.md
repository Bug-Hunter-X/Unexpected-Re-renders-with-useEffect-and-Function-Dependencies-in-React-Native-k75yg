# Unexpected Re-renders with useEffect and Function Dependencies in React Native

This repository demonstrates a common issue in React Native development involving the `useEffect` hook and function dependencies.  The problem arises when a function is included in the dependency array of `useEffect`, leading to unexpected re-renders even when the function's logic remains unchanged.

## Bug Description

The bug is caused by React's reference comparison mechanism.  When the component re-renders, React creates a new instance of the function, resulting in a change in its reference. This triggers the `useEffect` hook, leading to unnecessary re-renders and potential performance issues.

## Solution

The solution involves using `useCallback` to memoize the function, ensuring that its reference remains constant unless its dependencies change.  This prevents unnecessary re-renders and resolves the unexpected behavior.

## How to reproduce the bug

Clone the repository and run the `bug.js` example. Observe the console logs to see the unexpected re-renders.

## How to fix the bug

Refer to `bugSolution.js` for the corrected implementation using `useCallback`.