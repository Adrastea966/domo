//IconMap
import L from 'leaflet';

export const IconMap =  L.icon({
    iconUrl: require('../img/icon.png'),
    iconRetinaUrl: require('../img/icon.png'),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [60,40],
    className: 'leaflet-venue-icon'
})