import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

export default function isAuth() {
    const token = Cookies.get('accessToken') 

    if (token) {
        const { sub } = jwt_decode(token);
        return sub;
    }

    return null;
}
