import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplayImg, setImg } from '../reducer/newsReducer.js';
import { editVd, saveVd, deleteVd, getVideo } from "../reducer/vdReducer.js";

function BoshVideo() {
    const { register, reset, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const { video } = useSelector((state) => state.vdReducer);
    const { imgInp } = useSelector((state) => state.newsReducer);
    const [isEdit, setIsEdit] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        dispatch(getVideo());
    }, [dispatch]);

    function mySubmit(data) {
        if (isEdit) {
            data.id = currentId;
            if (!imgInp) {
                data.edit = false;
                data.img = isEdit.img;
            } else {
                data.edit = true;
                data.img = imgInp;
            }
            dispatch(editVd(data));
        } else {
            dispatch(saveVd({ file: selectedFile }));
        }
        reset();
        setIsEdit(false);
        setCurrentId(null);
        setSelectedFile(null);
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
        dispatch(deleteVd(id));
    }

    function handleEdit(item) {
        setSelectedFile(null);
        setIsEdit(true);
        setCurrentId(item.id);
        dispatch(setDisplayImg(`http://localhost:8080/api/files/video?name=${item.url}`));
    }

    return (
        <div className={'wrapper'}>
            <h1 className={"text"}>Video</h1>
            <div className={"d-grid"}>
                <form id="form" onSubmit={handleSubmit(mySubmit)}>
                    <div className={"d-flex mb-2"} style={{gap: "60px"}}>
                        <input
                            {...register('img')}
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
                    <th>Video</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {video.map((item, index) => (
                    <tr key={index}>
                        <td>
                            <video
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
