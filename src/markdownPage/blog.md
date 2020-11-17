---
path: /blog/my-first-post
date: '2019-05-04'
title: 'Why and How to use React memo, useMemo and useCallback ?'
---




### In this article, I will share my understanding of those hooks.

1. **What dose these hook do ?**

   Generally speaking, these hooks are used to **memorize different things**.

   * useCallback to memorize function
   * useMemo to memorize function value
   * React.memo memorize complement. (Like pure component)
2. **Why do we need to use those hook ?**

   Most of time, We won’t use them. But when we need to **optimize performances**, depended on different situations, we need to use different hooks.

   **But**, again, React is really good with performances optimization, most of time, we don’t need to concert it.

   Some situations are

   * When a component is very large, you don’t need to render it so often. ( React.memo + useCallback )
   * When calculating a function so expensive. ( useMemo )
3. **How to use them ?**

   * Memorize a function

     When calculating a function is so expensive and the result is the same when you have same input value. Then we can memorize this function’s value to avoid repeated calculations.

     **For example**: think about a situation, a component to display filtered user. If click on button, display result.

     The filter function could be expensive, but for sure, if we give the same input, we will have same output. Then we can use useMemo hook on it.

     ```javascript

     const filteredUsers = React.useMemo(
            () => users.filter( 
              (user) => {
                   return user.name.toLowerCase().includes(searchInput.toLowerCase())
            }), [ searchInput ]);
     ```

     So in this case, if dependency "searchInput" does not change, we don't need to re-compute the function again. 

     * Memorize a component

       when we use pure component, we can use "**shouldComponentUpadte"** lifecycle function to conditionally re-render component. But when we write function component, we can’t use this lifecycle function.

       The React.memo play a same role like pure component. If the dependencies are not changed, the component won’t render. 

       **Before showing the examples, first we need to understand when does component re-render ?**

       * The states are changed.
       * Parent component is changed, the child component will re-render.
       * The props are changed.

       **So how does React decide the component is changed or not.**

       React will use strict comparison( === ) on props, state. So for primary type(int string boolean…) compare with value. **BUT for object, array, function are compared with references ( Reference equality ).**

       Example 1: Assume the child component is a static component 

       ```jsx

       <parent>
         
            const [count, setCounter] = useState(0)

            <div onClick={()=>{setCounter(count+1)}}>{count}</div>
         
            <Child/>
         
       </parent>
       ```

       If we click on button, state will change, the parent component will re-render, then child component will also render.

       Now, we can prevent child component re-render, since it just a static component. We just use React.memo.

       ```jsx
       export function Child (props){

              return(<div>this is static child component</div>)

          }

       React.memo(Child)
       ```

       In this case, if props are not changed, the Child component will not re-render. And we can also pass a function as second prams in React.memo(Component, function) to custom equality check of props.

       Example 2: 

       Basic on example 1,  we want to pass a function( setCount ) from parent component to child component. 

       In this case if we click on button, you will see the child component will also change.

       Why? We have already pass the setCount as prop in the child component, but why child component still changes ?

       As mentioned above, **For object, array, function are compared with references ( Reference equality. Which means that every time we click on button, the parent component will re-render, then setCounter function will create a new reference which is different from previously. So even we use React.memo to wrap the child component, since prop setCounter change every time, the child component will also re-render every time**

       ```jsx
       export function Child ({setCounter}){

              return(<div>this is static child component</div>)

          }

       React.memo(Child)

       <parent>
         
            const [count, setCounter] = useState(0)

            <div onClick={()=>{setCounter(count+1)}}> {count} </div>
         
            <Child setCounter={setCounter}/>
         
       </parent>
       ```

       To Solve this problem, we need to use useCallback hook. useCallback hook is going to help us to memorize the reference of function. Therefore, when React compare the function will compare on same reference.

       ```
        <parent>
         
            const [count, setCounter] = useState(0)
            
           const increase = React.useCallback(
               () => setCounter(c=>c+1), 
           []);

            <div onClick={()=>{setCounter(count+1)}}> {count} </div>
         
            <Child setCounter={increase}/>
         
       </parent>
        
       ```
