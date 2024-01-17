export async function loader() {
  return null;
}

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard container" id="admin-dashobard">
      <section className="d-flex">
        <div className="leads p-2">
          <div>
            Facebook visits
          </div>
          <hr />
          <div>
            233,231
          </div>
        </div>

        <div className="leads p-2">
          <div>
            Reddit visits
          </div>
          <hr />
          <div>
            233,231
          </div>
        </div>
      </section >
    </div>
  )
}
