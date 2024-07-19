import img from "../img/icon-img.png";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getManaviyat, setDisplayImg, setImg } from "../reducer/newsReducer.js";
import { deleteManaviyatRukni, saveManaviyatRukni, updateManaviyatRukni } from "../reducer/manaviyatRukniReducer.js";

function Rahbariyat() {
    const { register, reset, handleSubmit, setValue } = useForm();
    const dispatch = useDispatch();
    const { manaviyat } = useSelector(state => state.newsReducer);
    const { imgInp } = useSelector(state => state.newsReducer);
    const displayImg = useSelector((state) => state.newsReducer.displayImg);
    const [isEdit, setIsEdit] = useState("");
    const [currentId, setCurrentId] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        dispatch(getManaviyat());
        console.log(imgInp);
    }, [dispatch]);

    function mySubmit(data) {
        if (isEdit !== "") {
            data.id = currentId;
            if (imgInp === "") {
                data.edit = false;
                data.img = isEdit.img;
            } else {
                data.edit = true;
                data.img = imgInp;
            }
            dispatch(updateManaviyatRukni(data));
        } else {
            data.img = imgInp;
            dispatch(saveManaviyatRukni(data));
        }
        reset();
        setIsEdit("");
        setCurrentId(null);
    }

    function handleSetImg(e) {
        const file = e.target.files[0];
        if (file) {
            if (file.type !== "application/pdf") {
                setErrorMsg("Only PDF files are allowed!");
                return;
            } else {
                setErrorMsg("");
            }
            const reader = new FileReader();
            reader.onload = (e) => {
                dispatch(setDisplayImg(e.target.result));
            };
            reader.readAsDataURL(file);
            dispatch(setImg(file));
        }
    }

    function handleDelete(id) {
        dispatch(deleteManaviyatRukni(id));
    }

    function handleEdit(item) {
        console.log(item);
        setIsEdit(true);
        setCurrentId(item.id);
        setValue("name", item.name);
        setIsEdit(item);
        dispatch(setDisplayImg(`http://localhost:8080/api/files/img?name=${item.img}`));
        const specificGroupArea = document.getElementById('specificGroupArea');
        specificGroupArea.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className={"wrapper"}>
            <h1 id="specificGroupArea" className={"text"}>Manaviyat Rukni</h1>
            <div className={"d-flex gap-2"}>
                <form  className={"d-flex gap-2 mb-2"} id="form" onSubmit={handleSubmit(mySubmit)}>
                    <div className={"d-flex mb-2"} style={{gap: "60px"}}>
                        <input style={{height: "35px"}}
                               className="form-control w-50" onChange={(e) => handleSetImg(e)} type="file"
                               accept="application/pdf"/>
                        <input style={{width: "590px", height: "45px"}} {...register("name")} type="text" placeholder="Name"/>
                    </div>
                    <button style={{height: "40px"}} className={"btn btn-outline-dark"} type="submit">Save</button>
                </form>
                {errorMsg && <p style={{color: "red"}}>{errorMsg}</p>}
            </div>
            <table className={"table table-bordered"}>
                <thead className="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    manaviyat.map((item, index) => <tr key={index}>
                        <td>{item.name}</td>
                        <td className={"d-flex gap-2"}>
                            <button className={"btn btn-danger"} onClick={() => handleDelete(item.id)}>Delete</button>
                            <button className={"btn btn-warning"} onClick={() => handleEdit(item)}>Edit</button>
                        </td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    );
}

export default Rahbariyat;
