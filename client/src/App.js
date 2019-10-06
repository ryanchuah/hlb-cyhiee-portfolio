import React, { Component } from "react"
import "./App.css"
import Header from "./components/Header"
import Index from "./components/Index"
import { BrowserRouter as Router, Route } from "react-router-dom"
import SignUp from "./pages/SignUp"
import Footer from "./components/Footer"
import Year from "./pages/Year"
import AllParticipants from './pages/AllParticipants'
import LoadingScreen from './components/LoadingScreen'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cmsData: undefined,
      numOfYears: undefined,
      isNumOfYearsLoading: true,
      isContentLoading: true,
      isLoading: true,

    }
  }

  //TODO: fetch all data here or seperate idk

  componentDidMount() {
    const numberOfYearsUrl = '/api/content/numberOfYears'
    fetch(numberOfYearsUrl)
      .then(response => response.json())
      .then(myJson => this.setState({ numOfYears: myJson, isNumOfYearsLoading: false }))
  }



  render() {
    if (this.state.isNumOfYearsLoading) return <LoadingScreen />
    var years = []
    for (let year = 2019; year < 2019 + this.state.numOfYears; year++) {
      years.push(year)
    }

    return (
      <Router>
        <Header years={years} />

        <Route
          exact
          path="/"
          render={props => {
            return (
              <Index isNumOfYearsLoading={this.state.isNumOfYearsLoading} />
            )
          }}
        />

        {
          years.map(year => (
            <Route exact path={`/${year}`} key={year} render={props => {
              return (
                <Year key={year} year={year} />
              )
            }}
            />
          ))
        }

        {
          years.map(year => (
            <Route exact path={`/${year}/allParticipants`} key={year} render={props => {
              return (
                <AllParticipants year={year} key={year} />
              )
            }}
            />
          ))
        }

        <Route exact path="/signUp" component={SignUp} />

        <Footer />
      </Router>
    )
  }
}

export default App
