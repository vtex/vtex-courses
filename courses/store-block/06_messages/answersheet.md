```Countdown.tsx
import React, { useState } from 'react'
import { TimeSplit } from './typings/global'
import { tick } from './utils/time'
import { useCssHandles } from 'vtex.css-handles'
import { FormattedMessage } from 'react-intl'

interface CountdownProps {
  title: string
  targetDate: string
}

const DEFAULT_TARGET_DATE = new Date('2020-06-25').toISOString()

const CSS_HANDLES = ['container', 'countdown', 'title']

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({
  title,
  targetDate = DEFAULT_TARGET_DATE,
}) => {
  const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  const titleText = title || <FormattedMessage id="countdown.title" />

  const handles = useCssHandles(CSS_HANDLES)

  tick(targetDate, setTime)

  return (
    <div className={`${handles.container} t-heading-2 fw3 w-100 c-muted-1`}>
      <div className={`${handles.title} db tc`}>{titleText}</div>
      <div className={`${handles.countdown} db tc`}>
        {`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}
      </div>
    </div>
  )
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    title: {
      title: 'I am a title',
      type: 'string',
      default: null,
    },
    targetDate: {
      title: 'Final date',
      description: 'Final date used in the countdown',
      type: 'string',
      default: null,
    },
  },
}

export default Countdown
```

```messages/context.json
{
  "editor.countdown.title": "Countdown",
  "editor.countdown.description": "Countdown component",
  "countdown.title": "Countdown"
}
```

```messages/en.json
{
  "editor.countdown.title": "Countdown",
  "editor.countdown.description": "Countdown component",
  "countdown.title": "Countdown"
}
```

```messages/es.json
{
  "editor.countdown.title": "Cuenta regresiva",
  "editor.countdown.description": "Cuenta regresiva component",
  "countdown.title": "Cuenta Regresiva"
}
```

```messages/pt.json
{
  "editor.countdown.title": "Contagem regressiva",
  "editor.countdown.description": "Componente de contagem regressiva",
  "countdown.title": "Contagem Regressiva"
}
```

