import React from 'react'

export default function ResultTable() {
  return (
    <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attemps</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody className='table-body'>
            <tr className='table-row'>
                    <td>Benaam</td>
                    <td>03</td>
                    <td>30</td>
                    <td>Passed</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
