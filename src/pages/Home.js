import React, { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebaseConfig";
import { MdDelete } from "react-icons/md";
import { BsPersonLinesFill } from "react-icons/bs";

function Home({ isAuth }) {
    const [postLists, setPostLists] = useState([]);

    // function to delete posts
    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
    };

    const postCollectionRef = collection(db, "posts");
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postCollectionRef);
            console.log(data);
            setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPosts();
    }, [deletePost]);

    return (
        <div className="homePage">
            {postLists.map((post) => {
                return (
                    <div className="post">
                        <div className="postHeader">
                            <div className="title">
                                <h2>TITLE : {post.title}</h2>
                            </div>
                            {/* DELETE ICON */}
                            <div style={{ cursor: "pointer" }} className="deletePost">
                                {isAuth && post.author.id === auth.currentUser.uid && < MdDelete style={{ height: "3rem", width: "2rem" }} onClick={() => deletePost(post.id)} />}
                            </div>
                        </div>
                        <div className="postTextContainer">{post.postText}</div>
                        <h3>AUTHOR<BsPersonLinesFill /> : {post.author.name} </h3>
                    </div>
                );
            })}
        </div>
    );
}

export default Home;
