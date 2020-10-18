import React from 'react';

class Content extends React.Component {
    render(){
        return (
          <div>
            <h1>
              Hello World
            </h1>
    
            <h2>
              It is now {new Date().toLocaleTimeString()}.
            </h2>
          </div>
        )
      }
}

export default Content;