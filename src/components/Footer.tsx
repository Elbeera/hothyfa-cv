export default function Footer() {
    return (
      <footer className="border-t border-slate-200 px-6 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Hothyfa. All rights reserved.
          </p>
  
          <p className="text-sm text-slate-500">
            Senior Full Stack Engineer
          </p>
        </div>
      </footer>
    );
  }