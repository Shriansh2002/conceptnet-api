import { useState, useEffect } from 'react';
import './Table.css';

const Table = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const getDetails = async () => {
            const response = await fetch('https://api.conceptnet.io/c/en/example');
            const data = await response.json();
            console.log(data.edges[0]);
            setDetails(data.edges);
        };
        getDetails();
    }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>URI</th>
                        <th>Rel</th>
                        <th>Start Label</th>
                        <th>End Label</th>
                        <th>Start Lang</th>
                        <th>End Lang</th>
                        <th>Weight</th>
                        <th>SurfaceText</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map(edge => (
                        <tr key={edge["@id"]}>
                            <td>{edge["@id"]}</td>
                            <td>{edge.rel.label}</td>
                            <td>{edge.start.label}</td>
                            <td>{edge.end.label}</td>
                            <td>{edge.start.language}</td>
                            <td>{edge.end.language}</td>
                            <td>{edge.weight}</td>
                            <td>{edge.surfaceText ? edge.surfaceText : '-'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Table;