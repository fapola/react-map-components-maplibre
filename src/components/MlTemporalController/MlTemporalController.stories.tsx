import React from 'react';
import MlTemporalController, { MlTemporalControllerProps } from './MlTemporalController';
import temporalControllerDecorator from '../../decorators/LowZoomDecorator';
import { Typography } from '@mui/material';
import TopToolbar from '../../ui_components/TopToolbar';
import african_independency from './assets/african_independency.json';
import earthq_5plus from './assets/earthq_5plus.json';
import jakobsweg from './assets/jackobsweg.json';

const storyoptions = {
	title: 'MapComponents/MlTemporalController',
	component: MlTemporalController,
	argTypes: {},
	decorators: temporalControllerDecorator,
	parameters: {
		sourceLink: 'components/MlTemporalController/MlTemporalController.tsx',
	},
};
export default storyoptions;

const titels = {
	fill: 'African countries by independency year',
	line: 'St. James Trials in the North Rhein Region by stage number',
	circle: 'Earthquakes with 5 or more magnitude',
};

const Template = (props: MlTemporalControllerProps) => {
	const type = props.type || 'circle';

	return (
		<>
			<TopToolbar
				unmovableButtons={
					<Typography variant="h6" color={'ButtonText'}>
						{titels[type]}
					</Typography>
				}
			/>

			<MlTemporalController {...props} />
		</>
	);
};

export const FillConfig = Template.bind({});
FillConfig.parameters = {};
FillConfig.args = {
	geojson: african_independency,
	path: 'african_independency.json',
	timeField: 'africa_independency_year',
	type: 'fill',
	labelField: 'africa_independency_year',
	interval: 150,
	accumulate: true,
	initialVal: 1904,
	fitBounds: true,
	displayCurrentValue: true,
	attribution: 'Made with Natural Earth.',
};

export const CircleConfig = Template.bind({});
CircleConfig.parameters = {};
CircleConfig.args = {
	geojson: earthq_5plus,
	type: 'circle',
	timeField: 'Year',
	labelField: 'LocationName',
	accumulate: false,
	step: 0.3,
	minVal: 1900,
	fitBounds: true,
	onClick: () => console.log('clicked'),
	displayCurrentValue: true,
	attribution:
		'National Geophysical Data Center / World Data Service (NGDC/WDS): NCEI/WDS Global Significant Earthquake Database. NOAA National Centers for Environmental Information. doi:10.7289/V5TD9V7K',
};

export const LineConfig = Template.bind({});
LineConfig.parameters = {};
LineConfig.args = {
	geojson: jakobsweg,
	interval: 150,
	step: 0.5,
	timeField: 'etape',
	fadeIn: 2,
	fadeOut: 2,
	labelFadeIn: 2,
	labelFadeOut: 2,
	type: 'line',
	labelField: 'name',
	featuresColor: 'red',
	accumulate: true,
	fitBounds: true,
	displayCurrentValue: true,
	attribution: 'Source: deutsche-jakobswege.de ',
};
