import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; // MODO 3

import * as courseActions from '../../actions/CourseActions';

class CoursePage extends React.Component {
  /**** INITAL CREATE PROPERTIES ******/
  constructor(props, context) {
    super(props, context);

    // this.state = {
    //   course: {title: ''}
    // };
    //
    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);
  }

  /**** END INITAL CREATE PROPERTIES ******/

  /*** CHILD METHODS ***/
  // onTitleChange(event) {
  //   const course = this.state.course;
  //   course.title = event.target.value;
  //   this.setState({course: course});
  // }
  //
  // onClickSave() {
  //   console.log('Saving' + this.state.course.title);
  //   // sin map to dispatch del MODO 1
  //   // this.props.dispatch(courseActions.createCourse(this.state.course));
  //
  //   // MODO 2
  //   // this.props.createCourse(this.state.course);
  //
  //   // MODO 3
  //   this.props.actions.createCourse(this.state.course);
  // }
  //
  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }

  /*** END CHILD METHODS ***/


  /*** TEMPLATE **/
  render() {
    return (
      <div>
        <h1>Cursos</h1>
        {this.props.courses.map(this.courseRow)}
        {/*<input type={'text'} onChange={this.onTitleChange}*/}
               {/*value={this.state.course.title}/>*/}
        {/*<button onClick={this.onClickSave}>Guardar</button>*/}
      </div>
    );
  }

  /*** END TEMPLATE ***/
}
/**** CONEXION A REDUX ******/
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

// MODO 2
// function mapDispatchToProps(dispatch){
//   return {
//     createCourse: course => dispatch(courseActions.createCourse(course))
//   };
// }

// MODO 3
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

CoursePage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  // createCourse: PropTypes.object.isRequired,
  actions: PropTypes.func.isRequired
};

// export default CoursePage;
export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);

/**** END CONEXION A REDUX ******/
