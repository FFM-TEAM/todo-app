import React, { useState } from "react";

// Hook은 함수 컴포넌트에서 React state와 생명주기 기능(lifecycle features)을 “연동(hook into)“할 수 있게 해주는 함수


function Example() {
    const [ count, setCount ] = useState(0);

    const [ age , setAge ] = useState(42);
    const [ text, setText ] = useState('');
    const [ todos, setTodos ] = useState({ text: 'hi'});

    return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
      
}

//Hook 특징
//어떤식으로 Hook을 이용하는지

