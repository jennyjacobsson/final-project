import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { InfoCard } from 'components/InfoCard'
import { StartPage } from 'components/StartPage'
import { SalesForm } from 'components/SalesForm'
import { ResponseForm } from 'components/ResponsForm'

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
          <Route path="/respons">
            <ResponseForm />
          </Route>
          <Route path="/plants/:id" component={InfoCard} />

        </Switch>
      </main>
    </BrowserRouter>
  )
}
