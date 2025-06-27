import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://cautious-palm-tree-vj66x76x696hw5q4-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h2 className="card-title text-primary mb-4">Activities</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-primary">
              <tr>
                <th>User</th>
                <th>Type</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {activities.map(activity => (
                <tr key={activity._id}>
                  <td>{activity.user}</td>
                  <td>{activity.activity_type}</td>
                  <td>{activity.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Activities;
