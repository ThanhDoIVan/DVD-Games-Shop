import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";

const Pages = observer(() => {
    const {dvd} = useContext(Context);
    const pageCount = Math.ceil(dvd.totalCount / dvd.limit);
    const pages = [];
    console.log(dvd.totalCount, dvd.limit);

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
    }
    return (
        <div className="pages">
            {pages.map( (page, index) => 
                <div key={index} className={dvd.page === page ? 
                'page page-active' : 'page'}
                onClick={ () => dvd.setPage(page)}>{page}</div>
            )}
        </div>
    )
});

export default Pages;

