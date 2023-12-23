import Header from "../header/Header";
import Sidebar from "../Sidebar";
import PropTypes from "prop-types";

const PrimaryLayout = ({ children, title }) => {
  return (
    <div className="bg-gray-800 font-sans leading-normal tracking-normal mt-12">
      <Header />
      <main>
        <div className="flex flex-col md:flex-row">
          <Sidebar />
          <section>
            <div
              id="main"
              className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5"
            >
              <div className="bg-gray-800 pt-3">
                <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                  <h1 className="font-bold pl-2">{title || "TITLE"}</h1>
                </div>
              </div>
              {children}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

PrimaryLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string,
};

export default PrimaryLayout;
