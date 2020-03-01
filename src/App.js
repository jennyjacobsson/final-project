import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { InfoCard } from 'components/InfoCard'
import { StartPage } from 'components/StartPage'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" exact>
            <StartPage />
          </Route>

          <Route path="/plants">
            <InfoCard />
          </Route>

        </Switch>
      </main>
    </BrowserRouter>
  )
}
