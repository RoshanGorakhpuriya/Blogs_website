import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner"
function Blogs(){
    const {posts , loading} = useContext(AppContext);
    return(
        <div className="w-11/12 max-w-[450px] py-3 flex flex-col gap-y-7  mb-[70px]">
            {
                loading ? 
                (<Spinner/>) : 
                (
                    posts.length === 0 ?
                    (<div>
                        <p>No Post Found</p>
                     </div>) :
                     (posts.map((post) => (
                        <div key={post.id}>
                            <p className="font-bold text-xs">{post.title}</p>
                            <p className="text-[10px]">
                                By <span className="italic">{post.author}</span> on <span className="underline font-bold">{post.category}</span>
                            </p>
                            <p className="text-[12px]">Posted on {post.date}</p>
                            <p className="text-[14px] mt-[10px]">{post.content}</p>
                            <div className="flex gap-2">
                                {post.tags.map ((tag , index) => {
                                    return <span key={index} className="text-blue-500 underline font-bold text-[10px]">{`#${tag}`}</span>
                                })}
                            </div>
                        </div>
                    )))
                )
            }
        </div>
        )
}

export default Blogs;