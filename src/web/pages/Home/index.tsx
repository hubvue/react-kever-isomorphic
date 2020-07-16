import React, { FC } from 'react'
import { useDispatch, useStore, useSelector } from 'react-redux'
import { Action, ActionType } from '../../store/action'
import { StateType } from '../../store/data'
interface HomeProps {
  message?: string
}
declare module 'react' {
  interface FunctionComponent {
    initialAction?: () => Promise<ActionType> | ActionType
  }
}
const Home: FC<HomeProps> = ({ message }) => {
  const state = useSelector<StateType, StateType>((state) => state)
  const dispatch = useDispatch()
  const increase = () => {
    console.log('123')
    dispatch({
      type: Action.INCREASE,
      data: {
        name: state.name,
        age: state.age + 1,
      },
    })
  }
  return (
    <>
      <div>Hello Home {message}</div>
      <button onClick={increase}>年龄相加</button>
      <div>姓名： {state.name}</div>
      <div>年龄： {state.age}</div>
    </>
  )
}
Home.initialAction = async () => {
  const response = await fetch('http://127.0.0.1:9000/api/user/getUser')
  const data = await response.json()
  return {
    type: Action.INCREASE,
    data: data,
  }
}
export default Home
