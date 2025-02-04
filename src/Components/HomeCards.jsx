import React from 'react'

const HomeCards = () => {
  return (
    <>
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">See Blogs Here</h2>
            <p className="mt-2 mb-4">
              Browse our Blogs and start your career today
            </p>
            <a
              href="/jobs.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Blogs
            </a>
          </div>
          <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Create Blog</h2>
            <p className="mt-2 mb-4">
              Create Your Blogs now!
            </p>
            <a
              href="/add-job.html"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Add Blog
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default HomeCards