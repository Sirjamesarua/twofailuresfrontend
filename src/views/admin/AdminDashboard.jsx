import { useLoaderData } from "react-router-dom";

export default function AdminDashboard() {
  const { views } = useLoaderData();

  return (
    <div className="admin-dashboard container" id="admin-dashobard">
      <section className="d-flex">
        <div className="leads p-2">
          <div>
            Facebook visits
          </div>
          <hr />
          <div>
            {
              views[0].click_count
            }
          </div>
        </div>

        <div className="leads p-2">
          <div>
            Reddit visits
          </div>
          <hr />
          <div>
            {
              views[1].click_count
            }
          </div>
        </div>
      </section >
    </div>
  )
}
