import { ChangeProfile } from '../components/ChangeProfile';
import { useContext } from 'react';
import { AppContext } from '../App';

export function Profile() {
    const { username } = useContext(AppContext);

    return (
        <div>
            {' '}
            PROFILE
            <div>ChangeProfile</div>
        </div>
    );
}
