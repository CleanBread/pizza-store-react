import React from 'react';
import ContentLoader from "react-content-loader"

const PizzaLoadingBlock = () => {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="130" cy="130" r="130" />
            <circle cx="195" cy="244" r="2" />
            <rect x="0" y="270" rx="3" ry="3" width="280" height="24" />
            <rect x="0" y="310" rx="6" ry="6" width="280" height="84" />
            <rect x="3" y="423" rx="0" ry="0" width="90" height="27" />
            <rect x="129" y="414" rx="22" ry="22" width="151" height="44" />
        </ContentLoader>
    );
}

export default PizzaLoadingBlock;
