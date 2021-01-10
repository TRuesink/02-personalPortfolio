import React from "react";
import { connect } from "react-redux";
import { fetchSkills } from "../../actions";

class Skills extends React.Component {
  componentDidMount() {
    this.props.fetchSkills();
  }

  renderSoftwareSkills() {
    const softareSkills = this.props.skills.filter(
      (skill) => skill.category === "Software Engineering"
    );
    return softareSkills.map((skill) => {
      return <div className="custom-pill btn btn-primary">{skill.name}</div>;
    });
  }
  renderSalesSkills() {
    const salesSkills = this.props.skills.filter(
      (skill) => skill.category === "Sales"
    );
    return salesSkills.map((skill) => {
      return <div className="custom-pill btn btn-primary">{skill.name}</div>;
    });
  }

  renderEngineeringSkills() {
    const engineeringSkills = this.props.skills.filter(
      (skill) => skill.category === "Mechanical Engineering"
    );
    return engineeringSkills.map((skill) => {
      return <div className="custom-pill btn btn-primary">{skill.name}</div>;
    });
  }

  render() {
    return (
      <div style={{ backgroundColor: "#f8f9fa" }} className="custom-section">
        <div className="resume-section">
          <h1 className="title">SKILLS</h1>
          {this.props.isFetching || this.props.skills.length === 0 ? (
            <div class="ui active centered inline loader"></div>
          ) : (
            <div className="content-column">
              <h3>Software</h3>
              <hr></hr>
              <div className="skills-section">
                {this.renderSoftwareSkills()}
              </div>
              <h3>Sales</h3>
              <hr></hr>
              <div className="skills-section">{this.renderSalesSkills()}</div>
              <h3>Mechanical Engineering</h3>
              <hr></hr>
              <div className="skills-section">
                {this.renderEngineeringSkills()}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    skills: Object.values(state.skills.data),
    isFetching: state.skills.isFetching,
    errorMesssage: state.skills.errorMesssage,
  };
};

export default connect(mapStateToProps, { fetchSkills })(Skills);
