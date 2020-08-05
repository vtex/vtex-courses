```Countdown.tsx
import React from "react"

interface CountdownProps {}

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({}) => {
  return (
    <div>
      <h1>Teste Countdown</h1>
    </div>
  )
}

Countdown.schema = {
  title: "editor.countdown.title",
  description: "editor.countdown.description",
  type: "object",
  properties: {},
}

export default Countdown
```