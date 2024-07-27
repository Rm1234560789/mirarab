import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {setDisplayImg, setImg} from '../../reducer/newsReducer.js';
import {deleteT, get, saveT, updateT} from "../../reducer/raddiyaReducer.js";

function RaddiyaAdmin() {
    const {register, reset, handleSubmit, setValue} = useForm();
    const dispatch = useDispatch();
    const {raddiya} = useSelector((state) => state.raddiyaReducer);
    const {imgInp} = useSelector((state) => state.newsReducer);
    const displayImg = useSelector((state) => state.newsReducer.displayImg);
    const [isEdit, setIsEdit] = useState('');
    const [currentId, setCurrentId] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        dispatch(get());
    }, [dispatch]);

    function mySubmit(data) {
        if (isEdit !== '') {
            data.id = currentId;
            if (imgInp === '') {
                data.edit = false;
                data.img = isEdit.img;
            } else {
                data.edit = true;
                data.img = imgInp;
            }
            dispatch(updateT(data));
        } else {
            data.img = imgInp;
            dispatch(saveT(data));
        }
        reset();
        setIsEdit('');
        setCurrentId(null);
        setSelectedFile(null); // Reset selected file state
    }

    function handleSetImg(e) {
        const file = e.target.files[0];
        console.log(e)
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
        dispatch(deleteT(id));
    }

    function handleEdit(item) {
        setSelectedFile(item.img.substring(36))
        setIsEdit(true);
        setCurrentId(item.id);
        setValue('title', item.title);
        setValue('description', item.description);
        setIsEdit(item);
        dispatch(setDisplayImg(`http://localhost:8080/api/files/img?name=${item.img}`));
    }

    console.log(selectedFile);

    return (
        <div className={'wrapper'}>
            <h1 className={"text"}>Raddiya</h1>
            <div className={"d-grid "}>
                <form
                    id="form"
                    onSubmit={handleSubmit(mySubmit)}
                >
                    <div className={"d-flex mb-2"} style={{gap: "60px"}}>
                        <input
                            {...register('img')}
                            style={{height: "35px"}}
                            className="form-control w-25"
                            onChange={(e) => handleSetImg(e)}
                            type="file"
                            defaultValue={selectedFile}
                        />
                        <input style={{width: "590px", height: "45px"}} {...register('title')} type="text"
                               placeholder="Title"/>
                    </div>

                    <div>
                        <textarea {...register('description')} style={{height: "216px", width: "100%"}} type="text"
                                  placeholder="Description"/>
                    </div>

                    <button
                        style={{height: '40px'}}
                        className={'btn btn-outline-dark float-end m-3'}
                        type="submit"
                    >
                        Save
                    </button>
                </form>
            </div>
            <table className={'table table-bordered'}>
                <thead className="thead-dark">
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Img</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {raddiya.map((item, index) => (
                    <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>
                            <img
                                width={100}
                                src={`http://localhost:8080/api/files/img?name=${item.img}`}
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

export default RaddiyaAdmin;
