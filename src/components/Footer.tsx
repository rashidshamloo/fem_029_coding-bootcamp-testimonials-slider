function Footer() {
  return (
    <footer className="relative mt-10 mb-2 text-center text-xs dark:text-grayishBlue sm:mb-0 md:-mt-12 lg:-mt-20">
      <p>Developed by Rashid Shamloo</p>
      <ul className="hover:[&_a]:text-darkDesaturatedBlue flex items-center justify-center gap-2 text-base [&_a]:transition-all [&_a]:duration-500 dark:hover:[&_a]:text-darkBlue">
        <li>
          <a
            href="https://www.rashidshamloo.ir"
            title="Portfolio"
            target="_blank"
          >
            <i className="bi-briefcase-fill" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rashidshamloo"
            title="GitHub"
            target="_blank"
          >
            <i className="bi-github" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/rashid-shamloo/"
            title="LinkedIn"
            target="_blank"
          >
            <i className="bi-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/rashidshamloo"
            title="Twitter"
            target="_blank"
          >
            <i className="bi-twitter" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
