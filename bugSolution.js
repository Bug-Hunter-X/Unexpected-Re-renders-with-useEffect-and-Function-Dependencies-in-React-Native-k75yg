This solution uses `useCallback` to memoize the function, preventing the creation of a new function instance on every render. The dependency array of `useCallback` ensures the memoized function only changes when `someValue` changes.

```javascript
import React, { useState, useEffect, useCallback } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [someValue, setSomeValue] = useState(0);

  const myFunction = useCallback(() => {
    console.log('My function executed');
  }, [someValue]); // Only update when someValue changes

  useEffect(() => {
    console.log('useEffect executed');
    return () => {
      console.log('useEffect cleanup');
    };
  }, [myFunction]); // Now only triggers on someValue changes

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment Count" onPress={() => setCount(count + 1)} />
      <Button title="Change Value" onPress={() => setSomeValue(someValue +1)} />
    </View>
  );
};

export default MyComponent;
```