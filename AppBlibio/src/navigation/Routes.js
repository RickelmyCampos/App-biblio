import {TelaHome} from '../screens/ScreenHome2';
import {TelaBook} from '../screens/ScreenBook';
import {TelaListBook} from '../screens/ListBooks';

export const RequestRotes={
    Home:'Home',
    Book:'Book',
    List:'List',
};
export const routes={
    [RequestRotes.Home]:{
        screen:TelaHome
    },
    [RequestRotes.Book]:{
        screen:TelaBook
    },
    [RequestRotes.List]:{
        screen:TelaListBook
    },
};