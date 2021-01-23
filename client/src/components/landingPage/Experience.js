import React from "react";
import { connect } from "react-redux";
import { fetchJobs } from "../../actions";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

class Experience extends React.Component {
  componentDidMount() {
    this.props.fetchJobs();
  }

  renderJobs() {
    return this.props.jobs
      .sort((a, b) => {
        return new Date(b.endDate) - new Date(a.endDate);
      })
      .map((job) => {
        const startDate = new Date(job.startDate);
        const endDate = new Date(job.endDate);

        return (
          <div className="custom-card" key={job._id}>
            <img
              src={`/api/v1/photos/static/${job.photo}`}
              alt={job.photo}
            ></img>
            <div className="info">
              <div className="header">
                <h4 className="job-title">{job.title}</h4>
                <h4 className="company">{job.company}</h4>
              </div>
              <p className="font-italic">
                {`${months[startDate.getMonth()]} ${startDate.getFullYear()}`} -{" "}
                {endDate > new Date()
                  ? "Present"
                  : `${months[endDate.getMonth()]} ${endDate.getFullYear()}`}
              </p>
              <p>{job.description}</p>
            </div>
          </div>
        );
      });
  }
  render() {
    return (
      <div className="custom-section">
        <div className="resume-section">
          <h1 className="title">EXPERIENCE</h1>
          {this.props.isFetching || this.props.jobs.length === 0 ? (
            <div className="ui active centered inline loader"></div>
          ) : (
            <div className="content-column">{this.renderJobs()}</div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jobs: Object.values(state.jobs.data),
    isFetching: state.jobs.isFetching,
    errorMessage: state.jobs.errorMessage,
  };
};

export default connect(mapStateToProps, { fetchJobs })(Experience);
