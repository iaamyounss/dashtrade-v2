const Footer = () => {
    return (
      <footer className="px-4 sm:px-6 py-6 mt-24">
        <div className="text-center text-sm text-gray-500">
          <span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2">
            Dashtrade v2 by{' '}
            <a target="_blank" href="https://iamyounss.app" className="text-red-400 hover:text-red-200">
              iamyounss
            </a>
          </span>{' '}
          &copy; {new Date().getFullYear()} All Rights Reserved
        </div>
      </footer>
    )
  };
  
  export default Footer;