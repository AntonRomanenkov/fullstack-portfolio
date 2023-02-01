import htmlIcon from '../../Assets/images/skills/html.png';
import cssIcon from '../../Assets/images/skills/css.png';
import jsIcon from '../../Assets/images/skills/js.png';
import bootstrapIcon from '../../Assets/images/skills/bootstrap.png';
import reactIcon from '../../Assets/images/skills/react.png';
import vueIcon from '../../Assets/images/skills/vue.png';
import angularIcon from '../../Assets/images/skills/angular.png';

import sqlIcon from '../../Assets/images/skills/db.png';

import phpIcon from '../../Assets/images/skills/php.png';
import ciIcon from '../../Assets/images/skills/codeigniter-1.png';
import laravelIcon from '../../Assets/images/skills/laravel.png';
import zendIcon from '../../Assets/images/skills/zend.png';
import djIcon from '../../Assets/images/skills/django.png';
import nodeIcon from '../../Assets/images/skills/node.png';

import awsIcon from '../../Assets/images/skills/aws.png';
import doIcon from '../../Assets/images/skills/digitalocean.png';
import godaddyIcon from '../../Assets/images/skills/godaddy.png';
import hostingerIcon from '../../Assets/images/skills/hostinger.png';
import googleIcon from '../../Assets/images/skills/google.png';
import seoIcon from '../../Assets/images/skills/seo.png';
import unityIcon from '../../Assets/images/skills/unity.png';
import psIcon from '../../Assets/images/skills/ps.png';
import figmaIcon from '../../Assets/images/skills/figma.png';

export const skillCat = {
	web: {
		categoryName: 'Backend Dev',
		percentage: 50,
		skillList: [
			{ name: 'PHP', xp: '10 YRS', icon: phpIcon },
			{ name: 'CodeIgniter', xp: '7 YRS', icon: ciIcon },
			{ name: 'Laravel', xp: '6 YRS', icon: laravelIcon },
			{ name: 'Zend Framework', xp: '8 YRS', icon: zendIcon },
			{ name: 'Django', xp: '2 YRS', icon: djIcon },
			{ name: 'Node', xp: '5 YRS', icon: nodeIcon },
			{ name: 'SQL', xp: '10 YRS', icon: sqlIcon },
		],
	},
	game: {
		categoryName: 'Frontend Dev',
		percentage: 30,
		skillList: [
			{ name: 'HTML', xp: '10 YRS', icon: htmlIcon },
			{ name: 'CSS', xp: '10 YRS', icon: cssIcon },
			{ name: 'Javascript', xp: '10 YRS', icon: jsIcon },
			{ name: 'Bootstrap', xp: '6 YRS', icon: bootstrapIcon },
			{ name: 'React', xp: '5 YRS', icon: reactIcon },
			{ name: 'Vue', xp: '5 YRS', icon: vueIcon },
			{ name: 'Angular', xp: '3 YRS', icon: angularIcon },
			{ name: 'Unity', xp: '2 YRS', icon: unityIcon },
		],
	},
	design: {
		categoryName: 'Web Servie',
		percentage: 20,
		skillList: [
			{ name: 'AWS', xp: '6 YRS', icon: awsIcon },
			{ name: 'Godaddy', xp: '8 YRS', icon: godaddyIcon },
			{ name: 'DigitalOcean', xp: '3 YRS', icon: doIcon },
			{ name: 'Google Service', xp: '2 YRS', icon: googleIcon },
			{ name: 'Hostinger', xp: '5 YRS', icon: hostingerIcon },
			{ name: 'SEO', xp: '2 YRS', icon: seoIcon },
			{ name: 'Photoshop', xp: '8 YRS', icon: psIcon },
			{ name: 'Figma', xp: '3 YR', icon: figmaIcon },
		],
	},
	soft: {
		categoryName: ['Creative', 'Perseverant', 'Patient', 'Enthusiastic', 'Hardworking', 'Amusing'],
		percentage: 100,
	},
};
