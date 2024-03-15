import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "./Pages/Layout"
import Home from "./Pages/Home/Home"
import Team from "./Pages/Team/Team"

const Views = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="team" element={<Team />} />
      </Route>
      <Route index element={<Navigate to="/home" replace="/" />} />
    </Routes>
  )
}

export default Views
