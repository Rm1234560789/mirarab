import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplayImg, setImg } from '../../reducer/newsReducer.js';
import {deleteAudio, editAudio, getAudio, saveAudio} from "../../reducer/audioReducer.js";

function BoshVideo() {
    const { register, reset, handleSubmit,setValue } = useForm();
    const dispatch = useDispatch();
    const { audio } = useSelector((state) => state.audioReducer);
    const { imgInp } = useSelector((state) => state.newsReducer);
    const [isEdit, setIsEdit] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        dispatch(getAudio());
    }, [dispatch]);

    function mySubmit(data) {
        console.log(data)
        if (isEdit) {
            data.id = currentId;
            if (!imgInp) {
                data.edit = false;

            } else {
                data.edit = true;
                data.url = imgInp;
            }
            dispatch(editAudio(data));
        } else {
            data.file = imgInp;
            dispatch(saveAudio(data));
        }
        console.log(data)
        setIsEdit(false);
        setCurrentId(null);
        setSelectedFile(null);
        reset();
    }

    function handleSetImg(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                dispatch(setDisplayImg(e.target.result));
            };
            reader.readAsDataURL(file);
            dispatch(setImg(file));
        }
        setSelectedFile(file);
    }

    function handleDelete(id) {
        dispatch(deleteAudio(id));
    }

    function handleEdit(item) {
        console.log(item)
        setSelectedFile(null);
        setIsEdit(true);
        setCurrentId(item.id);
        setValue('name', item.name);
        setValue('url',item.url)
        dispatch(setDisplayImg(`http://localhost:8080/api/files/video?name=${item.url}`));
    }

    return (
        <div className={'wrapper'}>
            <h1 className={"text"}>Audio</h1>
            <div className={"d-grid"}>
                <form id="form" onSubmit={handleSubmit(mySubmit)}>
                    <div className={"d-flex mb-2"} style={{gap: "60px"}}>
                        <input className={"form-control w-25"} {...register('name')} type="text" placeholder={"Name...."}/>
                        <input
                            {...register('url')}
                            style={{height: "35px"}}
                            className="form-control w-25"
                            onChange={(e) => handleSetImg(e)}
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
                    <th>Name</th>
                    <th>Video</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {audio.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>
                            <audio
                                width={200}
                                src={`http://localhost:8080/api/files/video?name=${item.url}`}
                                controls={true}
                            />
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

export default BoshVideo;
