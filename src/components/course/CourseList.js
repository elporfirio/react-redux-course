import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) => {
  return (
    <table className={'table'}>
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Titulo</th>
        <th>Autor</th>
        <th>Categoria</th>
        <th>Duracion</th>
      </tr>
      </thead>
      <tbody>
      {
        courses.map(course => <CourseListRow key={course.id} course={course}/>)
      }
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
