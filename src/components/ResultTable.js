import React, { useEffect, useState } from 'react'
import { getServerData } from '../helper/helper';

export default function ResultTable() {

    const [data,setData]=useState(null);
    useEffect(()=>{
        getServerData(("https://quiz-server-j3ho.onrender.com/api/result"),(data=>{
            setData(data);
        }));
    })

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
            <tbody>
                {
                    !data??<div>No Data Found!</div>
                }
                {
                    data?.map((value,index)=>(
                        <tr className='table-body' key={index}>
                            <td>{value?.username || ""}</td>
                            <td>{value?.attempts || 0}</td>
                            <td>{value?.points || 0}</td>
                            <td>{value?.achieved || ""}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
