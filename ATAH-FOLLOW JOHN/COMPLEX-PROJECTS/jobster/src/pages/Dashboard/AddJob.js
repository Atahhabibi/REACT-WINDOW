import { FormRow } from "../../components";
import { useEffect } from "react";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import FormRowSelect from "../../components/FormRowSelect";
import {
  clearValues,
  createJob,
  handleChange,
} from "../../feature/job/jobSlice";


const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const {user}=useSelector((store)=>store.user);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !jobLocation || !company) {
      toast.error("Please Fill Out All Fields");
      return;
    }

    const job = { position, company, jobType, status, jobLocation };
    dispatch(createJob(job));
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    dispatch(handleChange({ name, value }));
  };

 
  useEffect(() => {
   if(!isEditing){
     dispatch(handleChange({name:'jobLocation',value:user.location}))
   }
  }, [])

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>

        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
            labelText="Job location"
          />

          <FormRowSelect
            labelText="status"
            list={statusOptions}
            name="status"
            handleChange={handleJobInput}
            value={status}
          />

          <FormRowSelect
            labelText="job type"
            list={jobTypeOptions}
            name="jobType"
            handleChange={handleJobInput}
            value={jobType}
          />

          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
