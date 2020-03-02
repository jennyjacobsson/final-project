import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { InfoCard } from 'components/InfoCard'
import { StartPage } from 'components/StartPage'
import { SalesForm } from 'components/SalesForm'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" exact>
            <StartPage />
          </Route>
          <Route path="/newad">
            <SalesForm />
          </Route>

          <Route path="/plants">
            <InfoCard />
          </Route>

        </Switch>
      </main>
    </BrowserRouter>
  )
}
