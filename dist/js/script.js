'use strict';


require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import anamationIcons from '../js/modules/anamationIcons';
//import form from '../js/modules/form';
import hamburger from '../js/modules/hamburger';
import persent from '../js/modules/persent';


document.addEventListener('DOMContentLoaded', () => {
    anamationIcons();
    // form();
    hamburger();
    persent();

    

});
