import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {editIzoh, getIzohlar} from "../reducer/newsReducer.js";

function Izohlar() {
    const dispatch = useDispatch();
    const { izohlar } = useSelector(state => state.newsReducer);

    useEffect(() => {
        dispatch(getIzohlar());
    }, [dispatch]);

    function handleClick(id) {
        console.log(id)
        dispatch(editIzoh({id}))
    }

    return (
        <div>
            <div>
                <h1 className={"text"}>Izohlar Admin</h1>
            </div>
            <table className={"table table-bordered"}>
                <thead className={"table table-dark"}>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Title</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {izohlar.map((item, index) => (
                    item.active === false && (
                        <tr key={index}>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td>{item.title}</td>
                            <td>
                                <button onClick={()=>handleClick(item.id)} className={"btn btn-primary"}>
                                    Tastiqlash
                                </button>
                            </td>
                        </tr>
                    )
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Izohlar;
