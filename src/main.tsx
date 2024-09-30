import React from 'react'
import ReactDOM from 'react-dom/client'
import './i18n'

import { AppProvider } from 'contexts/app.context'
import App from './App'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
)
