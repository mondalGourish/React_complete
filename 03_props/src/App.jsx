import React from "react";
import Card from "./components/card";

const App = () => {
  return (
    <div className="parent">
      <Card name='Gourish' age={23} img="https://images.unsplash.com/photo-1786813717563-6a7da575d44d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"/>
      <Card name='Surya' age={23} img="https://images.unsplash.com/photo-1786806571457-6fa59a249ceb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"/>
      <Card name='Akash' age={21} img="https://images.unsplash.com/photo-1779896412149-af18f18dbd54?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"/>
      
    </div>
  );
};

export default App;
