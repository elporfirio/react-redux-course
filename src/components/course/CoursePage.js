import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import * as courseActions from '../../actions/CourseActions';

class CoursePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: {title: ''}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave() {
    console.log('Saving' + this.state.course.title);
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Cursos</h1>
        {this.props.courses.map(this.courseRow)}
        <input type={'text'} onChange={this.onTitleChange}
               value={this.state.course.title}/>
        <button onClick={this.onClickSave}>Guardar</button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

CoursePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

// export default CoursePage;
export default connect(mapStateToProps)(CoursePage);
