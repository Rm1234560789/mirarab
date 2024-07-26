import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    deleteTurliMavzu,
    getTurliMavzular,
    saveTurliMavzu, setCurrentItem,
    setEditing,
    setFile, updateTurliMavzu
} from "../../reducer/turliMavzularReducer.js";
import {useForm} from "react-hook-form";

function TurliMavzuAdm(props) {
    const dispatch = useDispatch();
    const {turliMavzular, file, editing, currentItem} = useSelector((state) => state.turliMavzularReducer);
    const {register, reset, handleSubmit} = useForm()
    useEffect(() => {
        dispatch(getTurliMavzular())
    }, []);

    function mySubmit(params) {
        console.log(params.img.length)
        if (editing && (params.title !== "" && params.description !== "")) {
            dispatch(updateTurliMavzu({
                id: currentItem.id,
                file: file,
                title: params.title,
                description: params.description,
                currentItem: currentItem
            }))
            dispatch(setEditing(false))
            dispatch(setCurrentItem({}))
            reset({title: "", description: "", img: ""})
        } else if (params.title !== "" && params.description !== "" && params.img.length !== 0) {
            dispatch(saveTurliMavzu({file: file, title: params.title, description: params.description}))
            dispatch(setEditing(false))
            dispatch(setCurrentItem({}))
            reset({title: "", description: "", img: ""})
        } else {
            alert("Malumotlarni to'liq kiriting!")
        }

    }


    function handleDelete(id) {
        dispatch(deleteTurliMavzu(id))
    }

    function handleEdit(item) {
        reset(item)
        dispatch(setEditing(true))
        dispatch(setCurrentItem(item))
    }

    return (
        <div className={'wrapper'}>
            <h1 className={"text"}>Turli mavzular</h1>
            <div className={"d-grid"}>
                <form id="form" onSubmit={handleSubmit(mySubmit)}>
                    <div className={"d-flex mb-2"} style={{gap: "60px"}}>
                        <input className={"form-control w-25"} {...register('title')} type="text"
                               placeholder={"Title...."}/>
                        <input className={"form-control w-25"} {...register('description')} type="text"
                               placeholder={"Description...."}/>
                        <input
                            {...register("img")}
                            style={{height: "35px"}}
                            className="form-control w-25"
                            onChange={(e) => dispatch(setFile(e.target.files[0]))}
                            type="file"
                        />
                        <button
                            style={{height: '40px'}}
                            className={'btn btn-outline-dark'}
                            type="submit"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
            <table className={'table table-bordered'}>
                <thead className="thead-dark">
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {turliMavzular.map((item, index) => (
                    <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>
                            <img width={100} height={100} src={`http://localhost:8080/api/files/img?name=${item.img}`}
                                 alt=""/>
                        </td>
                        <td className={'d-flex gap-2'}>
                            <button
                                className={'btn btn-danger'}
                                onClick={() => handleDelete(item.id)}
                            >
                                Delete
                            </button>
                            <button
                                className={'btn btn-warning'}
                                onClick={() => handleEdit(item)}
                            >
                                Edit
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    );
}

export default TurliMavzuAdm;