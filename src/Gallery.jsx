import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

const Gallery = () => {
    const { search } = useGlobalContext();

    const url = `https://api.unsplash.com/search/photos?client_id=${
        import.meta.env.VITE_API_KEY
    }&query=${search}`;

    const response = useQuery({
        queryKey: ["images", search],
        queryFn: async () => {
            const res = await axios.get(url);
            return res.data;
        },
    });

    if (response.isLoading) {
        return (
            <section className="image-container">
                <h4>Loading...</h4>
            </section>
        );
    }

    if (response.isError) {
        return (
            <section className="image-container">
                <h4>There i...</h4>
            </section>
        );
    }

    return (
        <section className="image-container">
            {response.data.results.map((image) => {
                const url = image.urls.small;
                return <img src={url} className="img" key={image.id} />;
            })}
        </section>
    );
};

export default Gallery;
