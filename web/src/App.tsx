import { useState } from 'react'
import { Widget } from './components/Widgets'

import './global.css'

interface ButtonProps {
  text?: string
}

function Button(props: ButtonProps) {
  return <button className="button">{props.text ?? 'Default'}</button>
}

function App() {
  return <Widget></Widget>
}

export default App
