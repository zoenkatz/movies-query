import React from 'react';
import './App.scss';
import {QueryClient, QueryClientProvider} from 'react-query'
import Movies from "./Screens/Movies/Movies";
const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient} contextSharing={true}>
            <Movies/>
        </QueryClientProvider>
    );
}

export default App;