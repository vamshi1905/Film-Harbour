import RenderSteps from "./RenderSteps"

export default function AddCourse() {
  return (
    <>
      <div className="flex w-full items-start gap-x-6">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-14 text-3xl font-medium text-richblack-5">
            Add Movie
          </h1>
          <div className="flex-1">
            <RenderSteps />
          </div>
        </div>
        {/* Course Upload Tips */}
        <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] border-brown-700 bg-brown-900 p-6 xl:block">
          <p className="mb-8 text-lg text-richblack-5">⚡ Movie Upload Tips</p>
          <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
            <li>Set the Movie Price option or make it free.</li>
            <li>Standard size for the Movie thumbnail is 1024x576.</li>
            <li>Video section controls the Movie overview video.</li>
            <li>Movie Builder is where you create & organize a Movie.</li>
            <li>
              You can add the movie the whole by a single part or even in by parts.
            </li>
            <li>
              Information from the Additional Data section shows up on the
              Movie single page.
            </li>
            <li>Make Announcements to notify any important</li>
            <li>Notes to all enrolled Viewers at once.</li>
          </ul>
        </div>
      </div>
    </>
  )
}
