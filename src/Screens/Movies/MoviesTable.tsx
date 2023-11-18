import React from "react";
import {Table} from "../../Components/Table";
import SearchBar from "../../Components/SearchBar";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import "./Movies.scss";


const MoviesTable = <T extends object>({
                                           data,
                                           columns,
                                           isLoading,
                                           currentPage,
                                           totalPages,
                                           queryTableParams,
                                           setQueryTableParams
                                       }: {
    data: any,
    columns: any,
    isLoading: boolean,
    currentPage: number,
    totalPages: number,
    setQueryTableParams: (params: { page: number, title: string }) => void,
    queryTableParams: { page: number, title: string }
}) => {
    return (
        <div className="movies-table">
            <SearchBar onSearch={(str) => setQueryTableParams({...queryTableParams, title: str})} query={queryTableParams.title}/>
            {isLoading ? <div className="app-loading">Loading...</div> : !data?.length ? <div className="app-no-data">No Data</div> : <Table data={data} columns={columns}/>}
            <ResponsivePagination
                current={currentPage}
                total={totalPages}
                onPageChange={(value) => setQueryTableParams({...queryTableParams, page: value})}
                maxWidth={400}
            />
        </div>
    )
}

export default MoviesTable