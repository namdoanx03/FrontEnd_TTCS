import { useState, useEffect } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFullComment } from '../../redux/actions';

import "./Evaluate.css"

function Evaluate({ length }) {
    console.log(' props  1', length);
    return (<>


        <p className='evaluate_text' > Biểu đồ đánh giá chất lượng nha khoa </p>
        <div className='pie_chart_evaluate'>
            <div className='detail_pie_chart'>
                <div style={{ background: "#E38627" }} className='so1 so'>{`Gía trị 1 : ${length.so1}`}</div>
                <div style={{ background: "#C13C37" }} className='so2 so'>{`Gía trị 2 : ${length.so2}`}</div>
                <div style={{ background: "#c5637b" }} className='so3 so'>{`Gía trị 3 : ${length.so3}`}</div>
                <div style={{ background: "#999" }} className='so4 so'>{`Gía trị 4 : ${length.so4}`}</div>
                <div style={{ background: "#e2db28" }} className='so5 so'>{`Gía trị 5 : ${length.so5}`}</div>
            </div>
            <div className='img_pie_chart'>
                <PieChart
                    data={[
                        { title: 'One', value: length.so1, color: '#E38627' },
                        { title: 'Two', value: length.so2, color: '#C13C37' },
                        { title: 'Three', value: length.so3, color: '#c5637b' },
                        { title: 'four', value: length.so4, color: '#999' },
                        { title: 'five', value: length.so5, color: '#e2db28' },

                    ]}
                />
            </div>
        </div>
    </>);
}

export default Evaluate;