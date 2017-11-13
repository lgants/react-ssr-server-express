import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => console.log('Hi there!')}>Press Me!</button>
    </div>
  )
}

export default {
  component: Home,
}
