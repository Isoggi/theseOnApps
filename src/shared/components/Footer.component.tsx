const currentYear = new Date().getFullYear()

const FooterComponent = () => {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-5 text-center text-sm text-slate-500 sm:px-8">
      &copy; {currentYear} theseOn. All rights reserved.
    </footer>
  )
}

export default FooterComponent
