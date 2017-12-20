import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'

class LoadingProgress extends React.Component {

  render() {
    return (
      <CircularProgress
        size={80}
        thickness={5}
        style={styles.progress}
      />
    )
  }
}
export default LoadingProgress

const styles = {
  progress: {
    margin: 'auto',
    width: '100%',
    textAlign: 'center',
  },
}
