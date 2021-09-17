import Link from 'next/link'

export function Pagination({ page, count, limit, _sort }) {
  const numberOfPages = Math.ceil(count / limit);

  const prevPage = Number.parseInt(page) - 1
  const nextPage = Number.parseInt(page) + 1

  return (
    <nav className="flex items-center justify-center">
      <div className="flex items-center text-pink-800">
        {prevPage < 1 ? (
          <span className="opacity-25">Previous</span>
        ) : (
          <Link href={`/news/page/${prevPage}${_sort ? `?_sort=${_sort}` : ''}`}>
            <a className="">
              <span>Previous</span>
            </a>
          </Link>
        )}
      </div>
      <div>
        <p className="flex items-center justify-center text-theme-accent font-light mx-12">
          <span className="flex items-center justify-center bg-pink-800 text-white h-10 w-10 mr-2">{page}</span> of {numberOfPages}
        </p>
      </div>
      <div className="flex items-center text-pink-800">
        {numberOfPages < nextPage ? (
          <span className="opacity-25">Next</span>
        ) : (
          <Link href={`/news/page/${nextPage}${_sort ? `?_sort=${_sort}` : ''}`}>
            <a className="">
              <span>Next</span>
            </a>
          </Link>
        )}
      </div>
    </nav>
  )
}