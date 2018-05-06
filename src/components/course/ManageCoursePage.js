import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import * as CourseActions from '../../actions/CourseActions';
import CourseForm from "./CourseForm";

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };

    /// define methors
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);

  }

  // corre cada vez que se detectan cambios a veces cuando no
  componentWillReceiveProps(nextProps) {
    if (this.props.course.id !== nextProps.course.id) {
      this.setState({course: Object.assign({}, nextProps.course)})
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  saveCourse(event) {
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);

    //Redirect
    this.context.router.push('/courses');
  }

  render() {
    return (
      <div>
        <CourseForm
          allAuthors={this.props.authors}
          course={this.state.course}
          errors={this.state.errors}

          onChange={this.updateCourseState}
          onSave={this.saveCourse}/>
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  //myProp: PropTypes.string.isRequired
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// PAra el redirect
ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function getCourseById(courses, id) {
  const course = courses.find(course => course.id === id);
  return course || null;
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id;

  let course = {
    id: '',
    watchHref: '',
    title: '',
    authorId: '',
    length: '',
    category: ''
  };

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  // translate data to new strcutrure
  const authorFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
  return {
    course: course,
    authors: authorFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CourseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
