const ExamplePage = () => {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <section id="overview" className="scroll-mt-8">
        <p className="text-sm font-semibold text-violet-700">Workspace</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Welcome to theseOn
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
          This example page shows how a shared navigation, sidebar, and footer
          can frame your app content.
        </p>
      </section>

      <section
        id="example"
        className="scroll-mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Example page
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Use this space for a page summary, feature, or application
              workflow.
            </p>
          </div>
          <span className="inline-flex w-fit items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            Ready to customize
          </span>
        </div>
        <div className="mt-6 rounded-xl bg-slate-50 p-5">
          <p className="text-sm font-medium text-slate-700">Getting started</p>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            Add your components here and use the sidebar links to organize
            sections of your app.
          </p>
        </div>
      </section>

      <section id="resources" className="scroll-mt-8">
        <h2 className="text-lg font-semibold text-slate-900">Resources</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-violet-300 hover:shadow-sm"
          >
            <span className="font-medium text-slate-900">React</span>
            <p className="mt-1 text-sm text-slate-600">
              Learn about the UI library used by this project.
            </p>
          </a>
          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-violet-300 hover:shadow-sm"
          >
            <span className="font-medium text-slate-900">Tailwind CSS</span>
            <p className="mt-1 text-sm text-slate-600">
              Browse the utility classes used to style this layout.
            </p>
          </a>
        </div>
      </section>
    </div>
  )
}

export default ExamplePage
