import { APIkey, q } from './config.api.js';

$('cloud').html('<svg style="width: 25%;" viewBox="0 0 32 32" id="wr-icon-weather-type--12"><rect width="100%" height="100%" fill="#FFFFFF" class="wr-icon-weather-type__svg-background"></rect><path class="wr-icon-weather-type__svg-thick-cloud" d="M23,8.2c-0.2,0-0.4,0-0.6,0c-0.8-2.9-3.4-5-6.4-5c-3.1,0-5.7,2.1-6.4,5c-0.2,0-0.4,0-0.6,0c-2.7,0-4.9,2.2-4.9,4.9 c0,2.7,2.2,4.9,4.9,4.9H12v-2.3H9c-1.4,0-2.6-1.2-2.6-2.6c0-1.4,1.2-2.6,2.6-2.6c0.9,0,1.8,0.5,2.2,1.3l2-1.2 c-0.4-0.6-0.9-1.2-1.5-1.6c0.4-2,2.2-3.5,4.3-3.5c2.4,0,4.4,2,4.4,4.4c0,0.9-0.3,1.8-0.8,2.5h2.6c0.2-0.6,0.4-1.3,0.5-1.9 c0.1,0,0.3,0,0.4,0c1.4,0,2.6,1.2,2.6,2.6c0,1.4-1.2,2.6-2.6,2.6H20v2.3H23c2.7,0,4.9-2.2,4.9-4.9C27.9,10.4,25.7,8.2,23,8.2z"></path><path class="wr-icon-weather-type__svg-raindrop" d="M18.2,18.4C18.2,18.4,18.2,18.4,18.2,18.4l0.4-4.7l-4,2.3h0c-0.7,0.4-1.2,1.2-1.2,2.1 c0,1.3,1.1,2.4,2.4,2.4C17,20.6,18,19.6,18.2,18.4L18.2,18.4L18.2,18.4z"></path></svg>');

(async () => {
	$('#content').css({ display: 'none' })
	const { data } = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${q}`);
	setTimeout(() => {
		$('#progressbar')
			.css({
				display: 'none',
			});
		$('#content')
			.css({
				display: 'block'
			});
	}, 2000)
	const temp = {
		real: data.current.temp_c,
		feel: data.current.feelslike_c
	};
	$('#temp').text(temp.real + ' °C');
	$('#feels').text(temp.feel + ' °C');
})();