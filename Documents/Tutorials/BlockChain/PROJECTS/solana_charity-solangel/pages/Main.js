import Home from './dexpages/Home'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './dexpages/Dashboard';
import Swapping from './dexpages/swapping'
import Send from './dexpages/send';
import Airdrops from './dexpages/Airdrops'

function Main() {
  // const [mounted, setMounted] = useState(false)
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setMounted(true)
  //   }
  // }, [])
  if (typeof window !== "undefined") {

    return (
      <BrowserRouter>
        <div className="min-h-screen" style={{ overflowX: 'hidden' }}>
          <Routes>
            <Route path="airdrops" element={<Airdrops />} />
            <Route path="send" element={<Send />} />
            <Route path="swap" element={<Swapping />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  } else {
    return (
      <></>
    )
  }
}

export default Main;
