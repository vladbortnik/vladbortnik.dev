import React, {Component, createContext} from 'react'
import history from './../history'
import {initial_state} from './app-initial-state'

const AppContext = createContext()

const reduce = (event, state) => {
  switch (event.type) {
    case 'SHOW_PROGRESS':
      return {...state, waitingForResponse: true}
    case 'HIDE_PROGRESS':
      return {...state, waitingForResponse: false}
    case 'SET_ACTIVE_TAB':
      return {...state, tab: event.tab}
    case 'OPEN_SNACKBAR':
      return {...state, snackbar: {isOpen: true, message: event.message}}
    case 'CLOSE_SNACKBAR':
      return {...state, snackbar: {isOpen: false, message: ''}}
    case 'DRAWER_OPENED':
      return {...state, drawer: {isOpen: true}}
    case 'DRAWER_CLOSED':
      return {...state, drawer: {isOpen: false}}
    case 'MESSAGE_RECIEVED':
      return {...state, snackbar: {isOpen: true, message: event.message}}
  }
}

const events = {
  showProgress: () => ({
    type: 'SHOW_PROGRESS'
  }),

  hideProgress: () => ({
    type: 'HIDE_PROGRESS'
  }),

  drawerOpened: () => ({
    type: 'DRAWER_OPENED',
  }),

  drawerClosed: () => ({
    type: 'DRAWER_CLOSED',
  })
}


export class AppContextProvider extends Component {
  state = {
    API_Status: 'not checked',
    tab: '/',
    'waitingForResponse': false,
    snackbar: {IsOpen: false, message: ''},
    drawer: {isOpen: false},
    dispatch: event => {this.setState(state => reduce(event, state))},
    actions: {
      to_home: () => {
        history.push('/')
      },

      to_contacts: () => {
        history.push('/contacts')
      },

      to_portfolio: () => {
        history.push('/portfolio')
      },

      openDrawer: () => {
        this.state.dispatch(events.drawerOpened())
      },

      closeDrawer: () => {
        this.state.dispatch(events.drawerClosed())
      }
    }
  }

  componentDidMount() {
    // get API status
  }

  render() {
    const {state, props: {children}} = this
    return <AppContext.Provider value={state}>{children}</AppContext.Provider>
  }
}

export const AppContextConsumer = AppContext.Consumer
