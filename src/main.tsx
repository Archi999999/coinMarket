import { StrictMode } from 'react'
import { Provider } from 'react-redux'

import { App } from '@/app/App'
import { store } from '@/app/providers/store/store'
import ReactDOM from 'react-dom/client'

import './styles/index.scss'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/900.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
