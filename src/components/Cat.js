import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

export function Cat() {
    const { data: catData } = useQuery(['cat'], async () => {
        return Axios.get('https://catfact.ninja/fact').then((res) => res.data);
    });

    return (
        <div>
            <h1>{catData?.fact}</h1>
        </div>
    );
}
