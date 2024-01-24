import { useLoaderData } from "react-router-dom";

export default function AdminDashboard() {
  const { views } = useLoaderData();

  return (
    <div className="admin-dashboard container">
      <h2 className="fw-bold my-4">Dashboard</h2>

      <hr />

      <div className="d-flex">
        <div className="card me-1" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Facebook visits</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {views[0].click_count}
            </h6>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Reddit visits</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {views[1].click_count}
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}
