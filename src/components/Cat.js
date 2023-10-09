import { useGetCat } from '../useGetCat';

export function Cat() {
    const { data: catData, isCatLoading, refetchData } = useGetCat();

    if (isCatLoading) return <h1>Loading...</h1>;

    return (
        <div>
            <button onClick={refetchData}>refetch</button>
            <h1>{catData?.fact}</h1>
        </div>
    );
}
