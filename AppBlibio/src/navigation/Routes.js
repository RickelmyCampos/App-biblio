import {TelaHome} from '../screens/ScreenHome2';
import {TelaBook} from '../screens/ScreenBook';

export const RequestRotes={
    Home:'Home',
    Book:'Book',
};
export const routes={
    [RequestRotes.Home]:{
        screen:TelaHome
    },
    [RequestRotes.Book]:{
        screen:TelaBook
    },
};