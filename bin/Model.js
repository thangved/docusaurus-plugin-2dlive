import React, { useState } from 'react';
import './models.css';
import 'antd/dist/antd.css';
import { Select } from 'antd';
const { Option } = Select;
import data from './data';

const Models = () => {
	setTimeout(function () {
		const modelIndex = localStorage.modelIndex || 0;
		window.loadlive2d('models-canvas', data[Number(modelIndex)]);
	});
	const onChange = (value) => {
		localStorage.modelIndex = value;
		window.loadlive2d('models-canvas', data[Number(value)]);
	};

	return (
		<div className='models-container'>
			<Select
				style={{
					width: '100%',
				}}
				onChange={onChange}
				placeholder='Chọn models...'
			>
				{data.map((url, i) => {
					url = url.split('/');
					const modelsName = String(
						url[url.length - 2]
					).toUpperCase();
					return (
						<Option key={i} value={i}>
							{modelsName}
						</Option>
					);
				})}
			</Select>
			<canvas width='200' height='400' id='models-canvas' />
		</div>
	);
};
export default Models;
