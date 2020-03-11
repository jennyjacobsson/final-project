import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { InfoCard } from 'components/InfoCard'
import { StartPage } from 'components/StartPage'
import { SalesForm } from 'components/SalesForm'
import { AnswerForm } from 'components/AnswerForm'
import { Login } from 'components/Login'
import { Registration } from 'components/Registration'
import { MyPage } from 'components/MyPage'
import { Navbar } from 'components/Navbar'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Switch>
          <Route path="/" exact component={StartPage} />
          <Route path="/newad" component={SalesForm} />
          <Route path="/answer" component={AnswerForm} />
          <Route path="/plants/:id" component={InfoCard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Registration} />
          <Route path="/mypage" component={MyPage} />
        </Switch>
      </main>
    </BrowserRouter>
  )
}
