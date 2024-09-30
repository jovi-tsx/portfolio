import { useEffect, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import Loading from '@components/loading/loading.component'
import Home from 'routes/home/home.component'
import { randomIntFromInterval } from 'utils/math'

function App() {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const randomValue = percentage + randomIntFromInterval(10, 20)
    const newPercentage = randomValue > 100 ? 100 : randomValue

    const timer = setTimeout(() => {
      setPercentage(newPercentage)
    }, 2 * 1000)

    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div className="App">
      <Scrollbars
        autoHide
        autoHeight
        autoHeightMin="100vh"
        renderThumbVertical={(props) => (
          <div {...props} className="vertical-scrollbar" />
        )}
      >
        <Loading percentage={percentage} />
        <Home percentage={percentage} />
      </Scrollbars>
    </div>
  )
}

export default App
