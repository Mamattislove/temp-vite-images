import { useGlobalContext } from "./context";

const SearchForm = () => {
    const { setSearch } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(e.target.elements.search.value);
    };

    return (
        <section>
            <h1 className="title">unsplash images</h1>
            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text" className="form-input" name="search" />
                <button type="submit" className="btn">
                    Search
                </button>
            </form>
        </section>
    );
};

export default SearchForm;
