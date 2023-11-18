import React, {useMemo, useState} from 'react'
import MoviesTable from "./MoviesTable";
import {useQuery} from "react-query";
import {ColumnDef} from "@tanstack/react-table";
import {IMovie} from "../../Assets/types";
import axios from "axios";

const Movies = () => {
    const [queryTableParams, setQueryTableParams] = useState({page: 1, title: ""})

    const {isLoading, error, data} = useQuery(['moviesData', queryTableParams.title, queryTableParams.page], () => {
        return axios(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${queryTableParams.title}&page=${queryTableParams.page}`)
            .then((res) => {
                return res.data
            }).catch((e: any) => console.log(e))
    })

    const cols = useMemo<ColumnDef<IMovie>[]>(
        () => [
            {
                header: 'Title',
                cell: (row) => row.renderValue(),
                accessorKey: 'Title',
            },
            {
                header: 'Year',
                cell: (row) => row.renderValue(),
                accessorKey: 'Year',
            }
        ],
        [data]
    );

    return (
        <div className="App">
                <MoviesTable data={data?.data} columns={cols} totalPages={data?.total_pages}
                             currentPage={queryTableParams.page} setQueryTableParams={setQueryTableParams}
                             queryTableParams={queryTableParams} isLoading={isLoading}/>
        </div>
    )
}

export default Movies