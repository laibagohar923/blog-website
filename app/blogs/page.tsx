"use client";

import { useEffect, useState } from "react";
import CardDetails from "../components/CardDetails";
import blogs from "../data";
import ReactPaginate from "react-paginate";

const Blog = () => {
  let [tagsArray, setTagsArray]: any = useState([]);
  let [tagValue, SetTagsValue] = useState();
  let [sortValue, SetSortValue] = useState();
  let [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 9;

  useEffect(() => {
    let filteredData = blogs;

    if (tagValue) {
      filteredData = filteredData.filter((blog) =>
        blog.tags.includes(tagValue)
      );
    }

    if (sortValue) {
      if (sortValue === "isRecent") {
        filteredData = filteredData.filter((blog) => blog.isRecent);
      } else if (sortValue === "isPopular") {
        filteredData = filteredData.filter((blog) => blog.isPopular);
      }
    }

    setFilteredBlogs(filteredData);

    let tagsName = blogs.map((tags: any): any => [...tags.tags]);
    setTagsArray(tagsName);
  }, [tagValue, sortValue]);

  const indexOfLastPost = (currentPage + 1) * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = ({ selected }: any) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(filteredBlogs.length / postsPerPage);

  return (
    <>
      <div className="main w-full min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 py-10">
        <div className="filter-container max-w-7xl mx-auto px-4 bg-white rounded-lg shadow-lg mb-10 p-6">
          <div className="filters flex flex-wrap justify-between mb-6 gap-4">


            <select
              name="sort"
              id="sort"
              className="select-filter p-3 border rounded-md w-full sm:w-auto shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e: any) => SetSortValue(e.target.value)}
            >
              <option value="" selected disabled>Sort by</option>
              <option value="isRecent">Most Recent</option>
              <option value="isPopular">Most Popular</option>
            </select>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPosts.map((Blog: any, index: number) => (
              <CardDetails data={Blog} key={index} />
            ))}
          </div>

          <div className="pagination mt-6 flex justify-center">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={"pagination-container flex justify-center gap-3"}
              pageClassName={"page-item"}
              activeClassName={"active"}
              previousClassName={"previous"}
              nextClassName={"next"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
