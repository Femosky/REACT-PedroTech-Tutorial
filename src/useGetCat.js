import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

export function useGetCat() {
    const {
        data,
        refetch,
        isLoading: isCatLoading,
    } = useQuery(['cat'], async () => {
        return Axios.get('https://catfact.ninja/fact').then((res) => res.data);
    });

    function refetchData() {
        alert('Data Refetched');
        refetch();
    }

    return { data, refetchData, isCatLoading };
}
