import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomePages from '../container/pages/HomePages/HomePages';

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePages}/>
    </Router>
  );
}
export default App;
