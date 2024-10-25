
const HeaderCommunity = ({ children, href }) => {
    return (
        <header className={ classes.header }>
            <h1>
                One shared passion: <span className={ classes.highlight }>Food</span>
            </h1>
            <p>Join our community and share your favorite recipes!</p>
        </header>
    );
};

export default HeaderCommunity;