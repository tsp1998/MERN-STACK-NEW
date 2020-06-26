import React from "react";
// import { Link } from "react-router-dom";

export default function DashBoard() {
  return (
    <div>
      <div className="row">
        {/* <!-- blog item --> */}
        <div className="col-md-12">
          <div className="blog-item bi-feature">
            <figure className="blog-thumb">
              <table>
                <tbody>
                  <tr>
                    <td className="table-active">Sr No.</td>
                    <td className="table-primary">Sender</td>
                    <td className="table-secondary">recipient</td>
                    <td className="table-success">amount</td>
                    <td className="table-danger">Details</td>
                  </tr>
                  <tr>
                    <td className="table-warning">This Week in</td>
                    <td className="table-info">This Week in</td>
                    <td className="table-light">This Week in</td>
                    <td className="table-dark">This Week in</td>
                    <td className="table-dark">This Week in</td>
                  </tr>
                </tbody>
              </table>
            </figure>
          </div>
        </div>
      </div>
      <button className="post-loadmore site-btn sb-gradients sbg-line mt-5">
        LOAD MORE
      </button>
    </div>
  );
}
