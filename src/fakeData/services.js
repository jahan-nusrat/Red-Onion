import icoDeliver from '../Image/ICON/deliver.png';
import deliverMan from '../Image/img/man.png';
import notification from '../Image/ICON/notification.png';
import chef from '../Image/img/chef.png';
import home from '../Image/ICON/home.png';
import homeDeliver from '../Image/img/deliver-home.png';

const services = [
	{
		id          : 1234,
		title       : 'Fast Delivery',
		description :
			'For a memorable meal the quality of the service is something that guests often remember. Restaurant provides a physical good (prepared food), but also provides services in the form of ambience, the setting and clearing of the table, etc.',
		icon        : icoDeliver,
		img         : deliverMan
	},
	{
		id          : 3426,
		title       : 'A good auto responder',
		description :
			'For a memorable meal the quality of the service is something that guests often remember. Restaurant provides a physical good (prepared food), but also provides services in the form of ambience, the setting and clearing of the table, etc.',
		icon        : notification,
		img         : chef
	},
	{
		id          : 2134,
		title       : 'Home Delivery',
		description :
			'For a memorable meal the quality of the service is something that guests often remember. Restaurant provides a physical good (prepared food), but also provides services in the form of ambience, the setting and clearing of the table, etc.',
		icon        : home,
		img         : homeDeliver
	}
];

export default services;
