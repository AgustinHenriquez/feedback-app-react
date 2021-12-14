import { Link } from 'react-router-dom'
import Card from '../components/Card'

function AboutPage() {
  return (
    <Card>
      <h1>About This Project</h1>
      <p>This is a React app to leave feedback for a product</p>
      <p>
        <Link to="/">Back To Home</Link>
      </p>
    </Card>
  )
}

export default AboutPage
