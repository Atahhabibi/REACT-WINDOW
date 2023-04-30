import Wrapper from "../assets/wrappers/SearchContainer";
import { useSelector, useDispatch } from "react-redux";
import FormRowSelect from "./FormRowSelect";
import FormRow from "./FormRow";

const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const { statusOptions, jobTypeOptions } = useSelector((store) => store.job);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          />

          <FormRowSelect
            list={["all", ...statusOptions]}
            name="SearchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            labelText="status"
          />

          <FormRowSelect
            list={["all", ...jobTypeOptions]}
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            labelText="Type"
          />

          <FormRowSelect
            list={sortOptions}
            name="sort"
            value={sort}
            handleChange={handleSearch}
            labelText="sort"
          />

          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
