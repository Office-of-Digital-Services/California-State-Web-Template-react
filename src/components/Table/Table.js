import React from 'react';
import PropTypes from 'prop-types';

/**
 * @summary Generates a variety of table styles using arrays of content.
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Components#table
 * 
 * @example
 * <Table
     type={'shaded'}
     headerArr={['#', 'First Name', 'Last Name', 'Username']}
     rowArr={
       [
         ['1', 'Mark', 'Otto', '@mdo'],
         ['2', 'Jacob', 'Thornton', '@jthornton'],
         ['3', 'Larry', 'the Bird', '@twitter']
       ]
     }
   />
 * 
 * @param {array} headerArr - Each array index generates a table header containing the index value.
 * @param {array} rowArr - A nested array where each index contains an array with each row's data.
 * @param {string} [type='default'] - Sets class for Table. Can be 'default', 'shaded', or 'zebra'. 
 *  
 * @returns {React.ReactElement} Returns the Table component.
 */

const Table = ({ headerArr, rowArr, type }) => {

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