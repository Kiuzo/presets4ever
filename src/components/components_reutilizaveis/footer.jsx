export default function Footer() {
  return (
    <footer className="flex items-center justify-between p-4 bg-white">

      {/* texto */}
      <div className="text-left">
        <ul>
          <li className="text-xl font-semibold"><a href="/">Presets4Ever</a></li>
          <li className="text-sm font-semibold">
            <a href="https://github.com/kiuzo" target="_blank" rel="noopener noreferrer">Made by Kiuzo</a>
          </li>
        </ul>
      </div>

      {/* imagem */}
      <div>
        <a href="/">
          <img src="/favicon.ico" alt="logo" className="w-32 h-32" />
        </a>
      </div>

      {/* botoes */}
      <div className="flex flex-col gap-4 items-center text-right">
        <a className="text-sm text-orange-500 font-semibold" href="auth/login">Login</a>
        <a className="text-sm border border-yellow-500 px-2 py-1 rounded-md text-yellow-500 font-semibold" href="auth/register">Register</a>
        <a href="https://github.com/kiuzo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github" className="w-6 h-6" />
          <span className="text-sm font-semibold">GitHub</span>
        </a>
      </div>

    </footer>
  )
}
