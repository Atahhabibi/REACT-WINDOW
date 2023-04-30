import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import Wrapper from "../assets/wrappers/Job";
import { Link } from "react-router-dom";
import JobInfo from "./JobInfo";
import moment from "moment/moment";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status
}) => {

  let date=createdAt;
  date=moment(date).format('MMM Do, YYYY');

 



  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>

      <div className="content">
        <div className="content-center">
          <JobInfo text={jobLocation} icon={<FaLocationArrow />} />
          <JobInfo text={date} icon={<FaCalendarAlt />} />
          <JobInfo text={jobType} icon={<FaBriefcase />} />
          <div className={`status ${status}`}>{status}</div>
        </div>

        <footer>
          <div className="actions">
            <Link to="/add-job" className="btn edit-btn">
              edit
            </Link>
            <button type="button" className="btn delete-btn" onClick={() => {}}>
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
