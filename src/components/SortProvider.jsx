import { useSearchParams } from "react-router-dom";

export default function SortProvider() {
  const [searchParams, setSearchParams] = useSearchParams()

  function handleSortBy(e) {
    console.log(e.target.value);
    const sortField = e.target.value
    searchParams.set("sort_by", sortField)
    setSearchParams(searchParams);
  }

  return (
    <>
    <div className="sort-by-box">
      <label htmlFor="">Sort by</label>
      <select name="" id="" onChange={handleSortBy} value={searchParams.get("sort_by") || "created_at"}>
        <option value="created_at">Date</option>
        <option value="author">Author</option>
        <option value="title">Title</option>
      </select>
    </div>
  </>
  )
}
