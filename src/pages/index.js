import React from 'react'
import { Link } from 'gatsby'
import { css } from 'emotion'

import SEO from '../components/seo'
import Layout from '../components/layout'

import { SampleContext } from '../contexts/sampleContext'
import Counter from '../components/counter'
import ChangeName from '../components/changeName'

const breakpoints = [768, 992, 1200]

const mqMax = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

const container = css({
  position: 'relative',
  height: '715px',

  [mqMax[0]]: {
    height: '130vw',
  },
})

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      increment: () => this.setState(state => ({count: state.count + 1})),
      decrement: () => this.setState(state => ({count: state.count - 1})),
      name: "名無し",
      changeName: name => this.setState(state => ({name}))
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={['context api']} />
          <div className={container}>
            <SampleContext.Provider value={this.state} >
              <Counter />
              <ChangeName />
            </SampleContext.Provider>
          </div>
      </Layout>
    )
  }
}

export default IndexPage
