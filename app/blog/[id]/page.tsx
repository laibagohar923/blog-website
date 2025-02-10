"use client";
import blogs from "@/app/data";
import Image from "next/image";
import { PersonCircle, SendFill } from "react-bootstrap-icons";
import { useState, useEffect } from "react";

type Blog = {
    id: number;
    title: string;
    content: string;
    categories: string[];
    tags: string[];
    popularity: number;
    isPopular: boolean;
    isRecent: boolean;
    date: string;
    image: string;
    comments: string[];
};

const BlogDetail = ({ params }: { params: { id: string } }) => {
    const [comment, setComment] = useState<string>("");
    const [currentBlog, setCurrentBlog] = useState<Blog | null>(null);


    useEffect(() => {
        const blog = blogs.find((item) => item.id === parseInt(params.id));
        setCurrentBlog(blog || null);
    }, [params.id]);

    const handleAddComment = () => {
        if (comment.trim() !== "" && currentBlog) {
            const updatedBlog = { ...currentBlog, comments: [...currentBlog.comments, comment] };
            setCurrentBlog(updatedBlog);
            setComment("");
        }
    };

    if (!currentBlog) {
        return <p className="text-gray-700 text-center mt-20">Blog not found.</p>;
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <div key={currentBlog.id} className="max-w-4xl mx-auto p-6">
                <div className="mb-6">
                    <h1 className="text-4xl font-bold text-gray-800">{currentBlog.title}</h1>
                    <p className="text-gray-500 mt-2">Published on: {currentBlog.date}</p>
                    {currentBlog.isPopular && (
                        <span className="mt-2 inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                            Popular
                        </span>
                    )}
                </div>

                <div className="mb-6">
                    <Image
                        src={currentBlog.image}
                        alt={currentBlog.title}
                        width={1200}
                        height={600}
                        className="rounded-lg w-full object-cover"
                    />
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-gray-700 leading-relaxed text-lg">{currentBlog.content}</p>

                    <div className="mt-6">
                        <h2 className="text-gray-800 font-semibold text-lg">Categories:</h2>
                        <div className="flex flex-wrap mt-2 gap-2">
                            {currentBlog.categories.map((category, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                                >
                                    {category}
                                </span>
                            ))}
                        </div>

                        <h2 className="text-gray-800 font-semibold text-lg mt-6">Tags:</h2>
                        <div className="flex flex-wrap mt-2 gap-2">
                            {currentBlog.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-gray-800 font-semibold text-lg">Popularity:</h2>
                        <p className="text-gray-700">{currentBlog.popularity}/10</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
                    <h2 className="text-gray-800 font-bold text-2xl">Comments:</h2>

                    <ul className="mt-4 space-y-4">
                        {currentBlog.comments.length > 0 ? (
                            currentBlog.comments.map((comment, index) => (
                                <li key={index} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <PersonCircle className="text-blue-500" size={40} />
                                    </div>
                                    <div className="bg-gray-100 p-4 rounded-lg w-full">
                                        <p className="text-gray-700">{comment}</p>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <li className="text-gray-500">No comments yet.</li>
                        )}
                    </ul>

                    <div className="mt-6 flex max-md:flex-col items-center space-x-4">
                        <input
                            type="text"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Add a comment..."
                            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            onClick={handleAddComment}
                            className="bg-blue-500 text-whiFte px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-600"
                        >
                            <SendFill size={20} />
                            <span>Post</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
