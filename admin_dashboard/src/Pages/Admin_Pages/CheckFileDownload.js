import React, { useEffect } from 'react'
import axios from 'axios';

export default function CheckFileDownload() {

    async function getFile() {
        try {
            const response = await axios.get('http://localhost:8081/api/Bespoke/hello')
            console.log(response);
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getFile();
    }, []);


    return (
        <div>CheckFileDownload</div>
    )
}
