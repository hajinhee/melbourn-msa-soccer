import React,{useState} from "react"
import styled from 'styled-components'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <HomeDiv>
    <button onClick={() => setCount(count + 1)}>+</button><br />
    <button onClick={() => setCount(count - 1)}>-</button> <br/>
    <div>{count}</div>
    </HomeDiv>
  )
}

const HomeDiv = styled.div`
  width: '200px'; 
  margin: 0 auto;
`