import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions";

class Portfolio extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    const projects = this.props.posts.filter((post) => post.type === "project");
    return projects.map((project) => {
      return (
        <Link to={`/posts/${project.id}`} key={project.id}>
          <div className="card text-white image-card">
            <img
              className="card-img"
              src={`/api/v1/photos/uploads/${project.photo}`}
              alt={project.photo}
            ></img>
            <div className="card-img-overlay custom-card-text">
              <h3 className="card-title">{project.title}</h3>
              <p className="description">{project.teaser}</p>
              <p className="date">
                {new Date(project.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </Link>
      );
    });
  }
  render() {
    return (
      <div className="custom-section">
        <div className="resume-section">
          <h1 className="title">PORTFOLIO</h1>

          {this.props.isFetching || this.props.posts.length === 0 ? (
            <div className="ui active centered inline loader"></div>
          ) : (
            <div className="card-columns">{this.renderPosts()}</div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.posts.data),
    isFetching: state.posts.isFetching,
    errorMessage: state.posts.errorMessage,
  };
};

export default connect(mapStateToProps, { fetchPosts })(Portfolio);
