import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ type, headerArr, rowArr }) => {

  const setTableType = (_type) => {
    switch (_type) {
      case 'shaded':
        return 'table-default';
      case 'zebra':
        return 'table-striped';
      default:
        return '';
    }
  }

  return (
    <table className={`table ${setTableType(type)}`}>
      <thead>
        <tr>
          {headerArr.map((item, idx) => <th scope={'col'} key={`table-th-item${idx}`}>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        {rowArr.map((item, idx) => (
          <tr key={`table-tr-item${idx}`}>
            {item.map((innerItem, innerIdx) => <td key={`table-td-item${innerIdx}`}>{innerItem}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  headerArr: PropTypes.array.isRequired,
  rowArr: PropTypes.array.isRequired,
  type: PropTypes.string
}

export default Table