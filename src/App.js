import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import { AiTwotoneDelete, AiFillCheckCircle } from 'react-icons/ai';
import data from './datas/reports.json';

const MyToDo = () => {
  console.log(data.elements);
  return (
    <div>
      <h1>Reports</h1>
      <div className="lists">
        {data.elements.map((item) => (
          <div className="list" key={item.id}>
            <div>
              <p>
                Id:
                {item.id}
              </p>
              <p>
                State:
                {item.state}
              </p>
              {/* <a href="">detail</a> */}
            </div>
            <div>
              <p>
                Type:
                {item.payload.reportType}
              </p>
              <p>
                Message:
                {item.payload.message}
              </p>
            </div>
            <div>
              <button type="button" className="btn btn-danger py-1 block">Block</button>
              <br />
              <button type="button" className="btn btn-success mt-2 py-1 resolve">Resolve</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyToDo;
