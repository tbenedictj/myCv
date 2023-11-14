import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        tumewu{" "}
        <a
          className="font-medium"
          href="https://google.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          ben
        </a>{" "}
        
        <span className="text-gradient font-medium"> Love</span> 
        <span className="text-gradient font-medium"> licha</span>
      </p>
    </footer>
  );
}
export default Footer;
