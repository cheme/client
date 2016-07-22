// @flow
import React, {Component} from 'react'
import {Box} from '../common-adapters'
import {globalStyles} from '../styles/style-guide'
import type {Props} from './prove-enter-username'

class Render extends Component<void, Props, void> {

  render () {
    return (
      <Box style={styleContainer}>
        Todo
      </Box>
    )
  }
}

const styleContainer = {
  ...globalStyles.flexBoxColumn,
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}

export default Render
