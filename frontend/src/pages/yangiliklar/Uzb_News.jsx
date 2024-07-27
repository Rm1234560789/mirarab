import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplayImg, setImg } from '../../reducer/newsReducer.js';
import {deleteNews, getNewNews, saveNews, updateNews} from "../../reducer/newnewsReducer.js";

function Uzb_News() {
    const {register, reset, handleSubmit,setValue} = useForm();
    const dispatch = useDispatch();
    const {newnews} = useSelector((state) => state.newnewsReducer);
    const [isEdit, setIsEdit] = useState('');
    const [currentId, setCurrentId] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const {imgInp}=useSelector(state => state.newsReducer)

    useEffect(() => {
        dispatch(getNewNews());
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
            dispatch(updateNews(data));
        } else {
            data.img = imgInp;
            dispatch(saveNews(data));
        }
        reset();
        setIsEdit('');
        setCurrentId(null);
        setSelectedFile(null);
    }

    console.log(mySubmit)


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
        dispatch(deleteNews(id));
    }

    function handleEdit(item) {
        setSelectedFile(item.img.substring(36))
        setIsEdit(true);
        setCurrentId(item.id);
        setValue('title', item.title);
        setValue('description', item.description);
        setIsEdit(item);
        dispatch(setDisplayImg(`http://localhost:8081/api/files/img?name=${item.img}`));
    }

    return (
        <div className={'wrapper'}>
            <h1 className={"text"}>O'zbekiston Yangiliklari</h1>
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
                    <th>Img</th>
                    <th>Title</th>
                    <th>Descreption</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {newnews.map((item, index) => (
                    <tr key={index}>
                        <td>
                            <img
                                width={100}
                                height={100}
                                src={`http://localhost:8081/api/files/img?name=${item.img}`}
                            />
                        </td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
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

export default Uzb_News;
