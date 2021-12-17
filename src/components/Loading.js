import ball from './assets/Ball.gif'

function Loading() {
  return (
    <img
      src={ball}
      alt="Loading..."
      style={{ width: '100px', margin: 'auto', display: 'block' }}
    />
  )
}

export default Loading
